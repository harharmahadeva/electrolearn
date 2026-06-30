// ElectroLearn — Main App
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
  TTS.init && TTS.init();

  let lang = Storage.getLang() || 'en';
  let currentUser = null;
  let currentMod = null;
  let currentLessonIdx = 0;
  let currentStepIdx = 0;
  let sparkMuted = false;

  // ── helpers ──
  const $ = id => document.getElementById(id);
  const t = key => (T[lang] || T.en)[key] || key;
  const show = id => $(id).classList.remove('hidden');
  const hide = id => $(id).classList.add('hidden');
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    show(id);
  }

  // ── SHA-256 ──
  async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // ── PIN LOGIN ──
  let pinEntry = '';
  const pinDots = document.querySelectorAll('.pin-dot');
  const pinError = $('pin-error');

  document.querySelectorAll('.pin-key').forEach(key => {
    key.addEventListener('click', () => {
      const val = key.dataset.val;
      if (val === 'del') { pinEntry = pinEntry.slice(0, -1); }
      else if (pinEntry.length < 4) { pinEntry += val; }
      updatePinDots();
      if (pinEntry.length === 4) checkPin();
    });
  });

  function updatePinDots() {
    pinDots.forEach((d, i) => d.classList.toggle('filled', i < pinEntry.length));
  }

  async function checkPin() {
    const hash = await sha256(pinEntry);
    try {
      const data = await fetch('/data/users.json').then(r => r.json());
      const user = data.users.find(u => u.pin_hash === hash);
      if (user) {
        currentUser = user;
        Storage.setUser(user);
        if (user.lang) { lang = user.lang; Storage.setLang(lang); }
        TTS.setLang(lang);
        pinError.textContent = '';
        if (Storage.getOnboarded()) { goHome(); } else { goOnboard(); }
      } else {
        pinError.textContent = t('pinError');
        pinEntry = '';
        updatePinDots();
        setTimeout(() => { pinError.textContent = ''; }, 2000);
      }
    } catch {
      pinError.textContent = lang === 'hi' ? 'इंटरनेट जाँचें और फिर try करें' : 'Check internet and try again';
      pinEntry = '';
      updatePinDots();
    }
  }

  // ── ONBOARDING ──
  let obIdx = 0;
  function goOnboard() {
    showScreen('screen-onboard');
    obIdx = 0;
    renderOnboard();
  }

  function renderOnboard() {
    const slide = ONBOARD_SLIDES[obIdx];
    const c = slide[lang] || slide.en;
    $('ob-emoji').textContent = slide.emoji;
    $('ob-title').textContent = c.title;
    $('ob-text').textContent = c.text;
    document.querySelectorAll('.onboard-dot').forEach((d, i) => d.classList.toggle('on', i === obIdx));
    $('ob-next').textContent = obIdx < ONBOARD_SLIDES.length - 1 ? t('next') : (lang === 'hi' ? 'शुरू करें!' : 'Start learning!');
    if (!sparkMuted) TTS.speak(c.text, { lang: lang === 'hi' ? 'hi-IN' : 'en-US' });
  }

  $('ob-next').addEventListener('click', () => {
    if (obIdx < ONBOARD_SLIDES.length - 1) { obIdx++; renderOnboard(); }
    else { Storage.setOnboarded(); goHome(); }
  });
  $('ob-skip').addEventListener('click', () => { Storage.setOnboarded(); goHome(); TTS.stop(); });

  // ── HOME ──
  function goHome() {
    showScreen('screen-home');
    $('bottom-nav').style.display = 'flex';
    renderHome();
  }

  function renderHome() {
    const streak = Storage.updateStreak();
    const xp = Storage.getXP();
    const done = Storage.getTotalLessons();
    $('home-greeting').textContent = t('welcome') + (currentUser ? ', ' + currentUser.name : '') + '!';
    $('home-xp').textContent = xp + ' ' + t('xpLabel');
    $('home-streak').textContent = streak + ' ' + t('streakLabel');
    $('home-lessons-done').textContent = done + ' ' + t('lessonsLabel');
    $('lang-toggle').textContent = t('langToggle');
    $('mute-btn').textContent = sparkMuted ? t('muteOff') : t('muteOn');

    // resume card
    const resume = Storage.getResume();
    if (resume) {
      const mod = MODULES.find(m => m.id === resume.modId);
      if (mod) {
        const l = mod.lessons[resume.lessonIdx];
        if (l) {
          $('resume-card').style.display = 'flex';
          $('resume-text').textContent = l[lang]?.title || l.en.title;
          $('resume-mod').textContent = mod[lang]?.name || mod.en.name;
        }
      }
    } else {
      $('resume-card').style.display = 'none';
    }

    // module grid
    const grid = $('module-grid');
    grid.innerHTML = '';
    MODULES.forEach((mod, mi) => {
      const name = mod[lang]?.name || mod.en.name;
      const phase = mod[lang]?.phase || mod.en.phase;
      const total = mod.lessons.length;
      const pct = Storage.getModuleProgress(mod.id, total);
      const allDone = pct >= 1;
      const locked = mi > 0 && Storage.getModuleProgress(MODULES[mi - 1].id, MODULES[mi - 1].lessons.length) < 1;

      const card = document.createElement('div');
      card.className = 'module-card' + (locked ? ' locked' : '');
      card.innerHTML = `
        <div class="mc-row1">
          <div class="mc-icon">${mod.icon}</div>
          <div class="mc-info">
            <div class="mc-name">${name}</div>
            <div class="mc-phase">${phase}</div>
          </div>
        </div>
        <div class="mc-bottom">
          <div class="mc-count">${Math.round(pct * total)}/${total}</div>
          <div class="mc-bar"><div class="mc-fill" style="width:${pct*100}%;background:${mod.color}"></div></div>
        </div>
        ${allDone ? '<div class="mc-done-badge">✓</div>' : ''}
      `;
      if (!locked) {
        card.addEventListener('click', () => openModule(mod));
      } else {
        card.title = t('locked');
      }
      grid.appendChild(card);
    });
  }

  // ── OPEN MODULE ──
  function openModule(mod) {
    currentMod = mod;
    // find first incomplete lesson
    let startLesson = 0;
    for (let i = 0; i < mod.lessons.length; i++) {
      if (!Storage.isLessonDone(mod.id, i)) { startLesson = i; break; }
      if (i === mod.lessons.length - 1) startLesson = i;
    }
    openLesson(mod, startLesson);
  }

  // ── LESSON ──
  function openLesson(mod, lessonIdx) {
    currentMod = mod;
    currentLessonIdx = lessonIdx;
    currentStepIdx = 0;
    Storage.setResume(mod.id, lessonIdx);

    const lesson = mod.lessons[lessonIdx];
    const lt = lesson[lang] || lesson.en;
    const mt = mod[lang] || mod.en;

    $('lesson-mod-name').textContent = mt.name;
    $('lesson-title').textContent = lt.title;

    renderLessonProgress(lesson.steps.length);
    renderStep();
    showScreen('screen-lesson');
    hide('bottom-nav');
  }

  function renderLessonProgress(total) {
    const bar = $('lesson-prog');
    bar.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('div');
      d.className = 'lesson-prog-dot' + (i === currentStepIdx ? ' active' : i < currentStepIdx ? ' done' : '');
      bar.appendChild(d);
    }
  }

  function renderStep() {
    const lesson = currentMod.lessons[currentLessonIdx];
    const step = lesson.steps[currentStepIdx];
    const total = lesson.steps.length;

    // update progress dots
    document.querySelectorAll('.lesson-prog-dot').forEach((d, i) => {
      d.className = 'lesson-prog-dot' + (i === currentStepIdx ? ' active' : i < currentStepIdx ? ' done' : '');
    });

    const body = $('lesson-body');
    body.innerHTML = '';
    body.scrollTop = 0;

    const el = buildStepEl(step);
    body.appendChild(el);

    // auto-speak for spark and learn steps
    if (!sparkMuted) {
      const textToSpeak = getSpokenText(step);
      if (textToSpeak) TTS.speak(textToSpeak, { lang: lang === 'hi' ? 'hi-IN' : 'en-US' });
    }
  }

  function getSpokenText(step) {
    const s = step[lang] || step.en || {};
    if (step.type === 'spark') return s.text || '';
    if (step.type === 'learn') return (s.title ? s.title + '. ' : '') + (s.body || '');
    if (step.type === 'fact') return s.text || '';
    if (step.type === 'complete') return s.msg || '';
    return '';
  }

  function buildStepEl(step) {
    const wrap = document.createElement('div');
    const s = step[lang] || step.en || {};

    switch (step.type) {
      case 'spark': {
        wrap.innerHTML = `
          <div class="spark-card">
            <div class="spark-avatar">⚡</div>
            <div class="spark-name">Spark</div>
            <div class="spark-text">${s.text}</div>
            <button class="speak-again-btn" onclick="reSpeak(this)">🔊 ${lang === 'hi' ? 'फिर सुनें' : 'Hear again'}</button>
          </div>`;
        wrap._speakText = s.text;
        break;
      }
      case 'learn': {
        const listHtml = s.list ? `<ul>${s.list.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
        wrap.innerHTML = `
          <div class="card">
            <div class="card-icon">${step.icon || '📖'}</div>
            <h3>${s.title}</h3>
            <p>${s.body}</p>
            ${listHtml}
            <button class="speak-again-btn" style="margin-top:14px" onclick="reSpeak(this)">🔊 ${lang === 'hi' ? 'फिर सुनें' : 'Hear again'}</button>
          </div>`;
        wrap._speakText = (s.title || '') + '. ' + (s.body || '');
        break;
      }
      case 'diagram': {
        wrap.innerHTML = `
          <div class="card diagram-card">
            <div class="diagram-label">${step.label || t('diagramLabel')}</div>
            <div class="diagram-svg">${step.svg}</div>
          </div>`;
        break;
      }
      case 'hindi': {
        const pairs = step.pairs || [];
        wrap.innerHTML = `
          <div class="hindi-card">
            <div class="hindi-label">🇮🇳 ${s.title || t('hindiLabel')}</div>
            <div class="hindi-grid">${pairs.map(p => `
              <div class="hindi-pair">
                <div class="hp-en">${p.en}</div>
                <div class="hp-hi">${p.hi}</div>
              </div>`).join('')}
            </div>
          </div>`;
        break;
      }
      case 'fact': {
        wrap.innerHTML = `
          <div class="fact-card">
            <div class="fact-label">💡 ${t('factLabel')}</div>
            <div class="fact-text">${s.text}</div>
            <button class="speak-again-btn" onclick="reSpeak(this)">🔊 ${lang === 'hi' ? 'फिर सुनें' : 'Hear again'}</button>
          </div>`;
        wrap._speakText = s.text;
        break;
      }
      case 'quiz': {
        wrap.innerHTML = buildQuizEl(step);
        break;
      }
      case 'tryit': {
        const stepsHtml = (s.steps || step.en?.steps || []).map((st, i) => `<div class="tryit-step"><span class="tryit-num">${i+1}</span>${st}</div>`).join('');
        wrap.innerHTML = `
          <div class="tryit-card">
            <div class="tryit-label">🔧 ${t('tryitLabel')}</div>
            <div class="tryit-title">${s.title}</div>
            ${stepsHtml}
          </div>`;
        break;
      }
      case 'complete': {
        wrap.innerHTML = `
          <div class="complete-card">
            <div class="complete-emoji">🏆</div>
            <div class="complete-title">${t('completeMsg')}</div>
            <div class="complete-xp">+${step.xp} XP</div>
            <div class="complete-msg">${s.msg}</div>
          </div>`;
        break;
      }
    }

    // nav buttons
    const lesson = currentMod.lessons[currentLessonIdx];
    const isLast = currentStepIdx === lesson.steps.length - 1;
    const isComplete = step.type === 'complete';

    if (step.type !== 'quiz') {
      const nav = document.createElement('div');
      nav.className = 'step-nav';
      if (currentStepIdx > 0) {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-ghost';
        backBtn.textContent = t('back');
        backBtn.onclick = () => { TTS.stop(); currentStepIdx--; renderStep(); };
        nav.appendChild(backBtn);
      }
      if (!isComplete) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-primary';
        nextBtn.textContent = isLast ? t('finish') : t('next');
        nextBtn.onclick = () => advanceStep();
        nav.appendChild(nextBtn);
      } else {
        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn btn-primary';
        doneBtn.textContent = lang === 'hi' ? 'होम पर वापस जाएं' : 'Back to Home';
        doneBtn.onclick = () => {
          Storage.setLessonDone(currentMod.id, currentLessonIdx);
          Storage.addXP(step.xp || 0);
          Storage.clearResume();
          TTS.stop();
          goHome();
        };
        nav.appendChild(doneBtn);
        // next lesson button if exists
        if (currentLessonIdx < currentMod.lessons.length - 1) {
          const nextLesBtn = document.createElement('button');
          nextLesBtn.className = 'btn btn-green';
          nextLesBtn.textContent = lang === 'hi' ? 'अगला पाठ →' : 'Next Lesson →';
          nextLesBtn.onclick = () => {
            Storage.setLessonDone(currentMod.id, currentLessonIdx);
            Storage.addXP(step.xp || 0);
            TTS.stop();
            openLesson(currentMod, currentLessonIdx + 1);
          };
          nav.appendChild(nextLesBtn);
        }
      }
      wrap.appendChild(nav);
    }

    return wrap;
  }

  function buildQuizEl(step) {
    const s = step[lang] || step.en;
    const correct = step.correct !== undefined ? step.correct : (step.en?.correct ?? 0);
    const feedback = s.feedback || step.en?.feedback || '';
    const optHtml = s.options.map((opt, i) => `
      <button class="quiz-opt" data-idx="${i}" onclick="handleQuiz(this, ${correct}, '${feedback.replace(/'/g, "\\'")}')">
        ${opt}
      </button>`).join('');
    return `
      <div class="quiz-card">
        <div class="quiz-label">❓ ${t('quizLabel')}</div>
        <div class="quiz-q">${s.question}</div>
        <div class="quiz-opts">${optHtml}</div>
        <div class="quiz-feedback" id="qfb-${currentStepIdx}"></div>
      </div>`;
  }

  // ── global quiz handler ──
  window.handleQuiz = function(btn, correct, feedback) {
    const card = btn.closest('.quiz-card');
    const opts = card.querySelectorAll('.quiz-opt');
    const chosen = parseInt(btn.dataset.idx);
    opts.forEach(o => o.disabled = true);
    const isCorrect = chosen === correct;
    opts[correct].classList.add('correct');
    if (!isCorrect) btn.classList.add('wrong');
    const fb = card.querySelector('.quiz-feedback');
    fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
    fb.textContent = (isCorrect ? t('correct') + ' — ' : t('wrong') + ' — ') + feedback;
    fb.style.display = 'block';

    if (!sparkMuted) TTS.speak((isCorrect ? 'Correct! ' : 'Not quite. ') + feedback, { lang: lang === 'hi' ? 'hi-IN' : 'en-US' });

    // auto-advance after short delay
    setTimeout(() => advanceStep(), 2200);
  };

  window.reSpeak = function(btn) {
    const wrap = btn.closest('[class]');
    // find parent wrap with _speakText
    let el = btn.parentElement;
    while (el && !el._speakText) el = el.parentElement;
    if (el && el._speakText) TTS.speak(el._speakText, { lang: lang === 'hi' ? 'hi-IN' : 'en-US' });
  };

  function advanceStep() {
    TTS.stop();
    const lesson = currentMod.lessons[currentLessonIdx];
    if (currentStepIdx < lesson.steps.length - 1) {
      currentStepIdx++;
      renderStep();
    }
  }

  // ── GLOSSARY ──
  function renderGlossary() {
    const search = $('glossary-search').value.toLowerCase();
    const list = $('glossary-list');
    list.innerHTML = '';
    const filtered = GLOSSARY.filter(g =>
      g.en.toLowerCase().includes(search) || g.hi.includes(search) || g.desc_en.toLowerCase().includes(search)
    );
    filtered.forEach(g => {
      const item = document.createElement('div');
      item.className = 'glossary-item';
      item.innerHTML = `
        <div class="gi-head">
          <div class="gi-en">${g.en}</div>
          <div class="gi-symbol">${g.symbol}</div>
        </div>
        <div class="gi-hi">${g.hi}</div>
        <div class="gi-unit">${g.unit}</div>
        <div class="gi-desc">${lang === 'hi' ? g.desc_hi : g.desc_en}</div>
      `;
      list.appendChild(item);
    });
    if (!filtered.length) list.innerHTML = `<div style="color:var(--text2);text-align:center;padding:20px">${lang === 'hi' ? 'कोई परिणाम नहीं' : 'No results'}</div>`;
  }

  // ── BOTTOM NAV ──
  $('nav-home').addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    $('nav-home').classList.add('active');
    TTS.stop();
    goHome();
  });

  $('nav-glossary').addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    $('nav-glossary').classList.add('active');
    TTS.stop();
    showScreen('screen-glossary');
    $('bottom-nav').style.display = 'flex';
    renderGlossary();
  });

  $('glossary-search').addEventListener('input', renderGlossary);

  // ── LESSON BACK ──
  $('lesson-back').addEventListener('click', () => {
    TTS.stop();
    goHome();
  });

  // ── RESUME CARD ──
  $('resume-card').addEventListener('click', () => {
    const resume = Storage.getResume();
    if (!resume) return;
    const mod = MODULES.find(m => m.id === resume.modId);
    if (mod) openLesson(mod, resume.lessonIdx);
  });

  // ── LANG TOGGLE ──
  $('lang-toggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'hi' : 'en';
    Storage.setLang(lang);
    TTS.setLang(lang);
    renderHome();
  });

  // ── MUTE ──
  $('mute-btn').addEventListener('click', () => {
    sparkMuted = !sparkMuted;
    TTS.setEnabled(!sparkMuted);
    if (sparkMuted) TTS.stop();
    $('mute-btn').textContent = sparkMuted ? t('muteOff') : t('muteOn');
  });

  // ── LOGOUT ──
  $('logout-btn').addEventListener('click', () => {
    TTS.stop();
    Storage.clearUser();
    currentUser = null;
    pinEntry = '';
    updatePinDots();
    hide('bottom-nav');
    showScreen('screen-login');
  });

  // ── INIT ──
  const saved = Storage.getUser();
  if (saved) {
    currentUser = saved;
    if (saved.lang) { lang = saved.lang; Storage.setLang(lang); TTS.setLang(lang); }
    if (Storage.getOnboarded()) goHome(); else goOnboard();
  } else {
    showScreen('screen-login');
  }
});
