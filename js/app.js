// ElectroLearn — Main App v1.1.0
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});

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
  function showToast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2200);
  }

  // ── KITT Spark indicator ──
  let kittEnabled = false; // only show on home/lesson/glossary, not login/onboard
  function sparkSpeaking(on) {
    if (!kittEnabled) return;
    $('spark-speaking').classList.toggle('show', on);
  }

  // ── TTS wrapper ──
  function speak(text, opts = {}) {
    if (sparkMuted) return;
    sparkSpeaking(true);
    const callerOnEnd = opts.onEnd;
    TTS.speak(text, {
      ...opts,
      lang: lang === 'hi' ? 'hi-IN' : 'en-US',
      onEnd: (e) => { sparkSpeaking(false); callerOnEnd && callerOnEnd(e); }
    });
  }
  function stopSpeak() {
    TTS.stop();
    sparkSpeaking(false);
  }

  // ── SHA-256 ──
  async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // ── Time-aware greeting ──
  function getGreeting(name) {
    const h = new Date().getHours();
    let greet;
    if (lang === 'hi') {
      greet = h < 12 ? 'सुप्रभात' : h < 17 ? 'नमस्ते' : h < 21 ? 'शुभ संध्या' : 'शुभ रात्रि';
    } else {
      greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : h < 21 ? 'Good evening' : 'Good night';
    }
    return name ? `${greet}, ${name}!` : `${greet}!`;
  }

  // ── Varied feedback lines ──
  const CORRECT_LINES = [
    'Exactly right!', 'Spot on!', 'You got it!', 'Perfect!', 'Well done!'
  ];
  const WRONG_LINES = [
    'Not quite — read the explanation below.',
    'Close, but not quite — here\'s why:',
    'Almost! Here\'s the right answer:',
    'Good try — here\'s what\'s correct:'
  ];
  const randFrom = arr => arr[Math.floor(Math.random() * arr.length)];

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
        if (Storage.getOnboarded()) goHome(); else goOnboard();
      } else {
        pinError.textContent = t('pinError');
        pinEntry = '';
        updatePinDots();
        setTimeout(() => { pinError.textContent = ''; }, 2200);
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
    kittEnabled = false;
    showScreen('screen-onboard');
    hide('bottom-nav');
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
    speak(c.text);
  }
  $('ob-next').addEventListener('click', () => {
    if (obIdx < ONBOARD_SLIDES.length - 1) { obIdx++; renderOnboard(); }
    else { Storage.setOnboarded(); goHome(); }
  });
  $('ob-skip').addEventListener('click', () => { Storage.setOnboarded(); stopSpeak(); goHome(); });

  // ── HOME ──
  function goHome() {
    kittEnabled = true;
    showScreen('screen-home');
    $('bottom-nav').style.display = 'flex';
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    $('nav-home').classList.add('active');
    renderHome();
  }

  function calcOverallProgress() {
    const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
    const done = MODULES.reduce((acc, m) => acc + m.lessons.filter((_, i) => Storage.isLessonDone(m.id, i)).length, 0);
    return totalLessons ? done / totalLessons : 0;
  }

  function renderHome() {
    const streak = Storage.updateStreak();
    const xp = Storage.getXP();
    const pct = calcOverallProgress();
    const name = currentUser?.name || '';

    $('home-greeting').textContent = getGreeting(name);
    $('home-name').textContent = '';
    $('home-xp').textContent = xp + ' XP';
    $('home-streak').textContent = '🔥 ' + streak + (lang === 'hi' ? ' दिन' : ' days');
    $('home-prog-pct').textContent = Math.round(pct * 100) + '%';
    $('home-prog-fill').style.width = (pct * 100) + '%';
    $('home-version').textContent = 'v' + APP_VERSION;
    $('lang-toggle').textContent = t('langToggle');
    $('mute-btn').textContent = sparkMuted ? (lang === 'hi' ? '🔇 चालू करें' : '🔇 Unmute') : (lang === 'hi' ? '🔊 म्यूट करें' : '🔊 Mute Spark');
    $('logout-btn').textContent = t('signOut');
    $('section-path-label').textContent = t('learningPath');
    $('resume-label').textContent = t('continueLesson');
    $('spark-card-title').textContent = 'Spark';
    $('spark-card-sub').textContent = lang === 'hi' ? 'आपका इलेक्ट्रॉनिक्स गाइड' : 'Your electronics guide — tap for a tip';
    $('nav-glossary-label').textContent = t('glossary');

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
      const done = mod.lessons.filter((_, i) => Storage.isLessonDone(mod.id, i)).length;
      const pct = total ? done / total : 0;
      const allDone = done >= total;
      const locked = false; // all modules unlocked

      const card = document.createElement('div');
      card.className = 'module-card';
      card.style.borderTop = `4px solid ${mod.color}`;
      card.innerHTML = `
        <div class="mc-body">
          <div class="mc-icon-wrap" style="background:${mod.color}1a;border-color:${mod.color}44">${mod.icon}</div>
          <div class="mc-name">${name}</div>
          <div class="mc-phase">${phase}</div>
        </div>
        <div class="mc-footer">
          <div class="mc-bottom">
            <div class="mc-count">${done}/${total}</div>
            <div class="mc-bar"><div class="mc-fill" style="width:${pct*100}%;background:${mod.color}"></div></div>
          </div>
        </div>
        ${allDone ? '<div class="mc-done-badge">✓ Done</div>' : ''}
      `;
      if (!locked) {
        card.addEventListener('click', () => openModule(mod));
      } else {
        card.addEventListener('click', () => showToast(t('locked')));
      }
      grid.appendChild(card);
    });
  }

  // ── SPARK HOME CARD ──
  $('spark-home-card').addEventListener('click', () => {
    const tips = lang === 'hi'
      ? ['बिजली electrons का प्रवाह है। एक AA battery में 1.5 Volt होता है।',
         'Ohm\'s Law: V = I × R। यह इलेक्ट्रॉनिक्स का सबसे महत्वपूर्ण नियम है।',
         'एक LED को हमेशा resistor के साथ लगाएं — वरना जल जाएगी!',
         'Multimeter आपकी circuits में आँखें है। पहले voltage मापना सीखें।']
      : ['Electricity is the flow of electrons through a conductor. A 9V battery has enough to light an LED safely!',
         "Ohm's Law: V = I × R. Know any two values, and you can always find the third.",
         'Always use a resistor with an LED — without one, it burns out instantly.',
         'A multimeter is your most important tool. Learn continuity testing first — it solves 80% of problems.'];
    speak(randFrom(tips));
    showToast(lang === 'hi' ? '⚡ Spark बोल रहा है...' : '⚡ Spark is speaking...');
  });

  // ── OPEN MODULE (show lesson list) ──
  function openModule(mod) {
    currentMod = mod;
    renderModuleDetail(mod);
    showScreen('screen-module');
    $('bottom-nav').style.display = 'flex';
  }

  function renderModuleDetail(mod) {
    const mt = mod[lang] || mod.en;
    $('mod-detail-title').textContent = mt.name;

    const total = mod.lessons.length;
    const done  = mod.lessons.filter((_, i) => Storage.isLessonDone(mod.id, i)).length;
    const pct   = total ? done / total : 0;

    $('mod-detail-body').innerHTML = `
      <div class="mod-hero">
        <div class="mod-hero-icon" style="background:${mod.color}22;border:1.5px solid ${mod.color}44">${mod.icon}</div>
        <div class="mod-hero-info">
          <div class="mod-hero-name">${mt.name}</div>
          <div class="mod-hero-phase">${mt.phase}</div>
          <div class="mod-hero-prog">
            <div class="mod-hero-bar"><div class="mod-hero-fill" style="width:${pct*100}%;background:${mod.color}"></div></div>
            <div class="mod-hero-pct">${done}/${total} ${lang === 'hi' ? 'पाठ' : 'lessons'}</div>
          </div>
        </div>
      </div>
      <div class="mod-lessons-label">${lang === 'hi' ? 'पाठ चुनें' : 'Choose a lesson'}</div>
      <div id="mod-lesson-list"></div>
    `;

    const list = $('mod-lesson-list');
    mod.lessons.forEach((lesson, idx) => {
      const lt    = lesson[lang] || lesson.en;
      const isDone = Storage.isLessonDone(mod.id, idx);
      const row   = document.createElement('div');
      row.className = 'lesson-row' + (isDone ? ' done-row' : '');
      row.style.borderLeftColor = mod.color;
      row.innerHTML = `
        <div class="lesson-row-num ${isDone ? 'done' : ''}" style="${isDone ? '' : `color:${mod.color};border:1.5px solid ${mod.color}44`}">${isDone ? '✓' : idx + 1}</div>
        <div class="lesson-row-info">
          <div class="lesson-row-title">${lt.title}</div>
          <div class="lesson-row-time">${lt.time || ''}</div>
        </div>
        <div class="lesson-row-arrow">›</div>
      `;
      row.addEventListener('click', () => openLesson(mod, idx));
      list.appendChild(row);
    });
  }

  $('mod-detail-back').addEventListener('click', () => {
    goHome();
  });

  // ── OPEN LESSON ──
  function openLesson(mod, lessonIdx) {
    kittEnabled = true;
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
    // Bottom nav stays visible — just deactivate tabs
    $('bottom-nav').style.display = 'flex';
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
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

    // update progress dots
    document.querySelectorAll('.lesson-prog-dot').forEach((d, i) => {
      d.className = 'lesson-prog-dot' + (i === currentStepIdx ? ' active' : i < currentStepIdx ? ' done' : '');
    });

    const body = $('lesson-body');
    body.innerHTML = '';
    body.scrollTop = 0;
    body.appendChild(buildStepEl(step));
    renderStepNav(step);

    // auto-speak
    const txt = getSpokenText(step);
    if (txt) speak(txt);
  }

  function getSpokenText(step) {
    const s = step[lang] || step.en || {};
    const hi = lang === 'hi';

    if (step.type === 'spark') return s.text || '';
    if (step.type === 'learn') return (s.title ? s.title + '. ' : '') + (s.body || '') + (s.list ? '. ' + s.list.join('. ') : '');
    if (step.type === 'fact') return s.text || '';
    if (step.type === 'complete') return s.msg || '';

    if (step.type === 'diagram' || step.type === 'photo') {
      const label = step.label || (hi ? 'चित्र' : 'image');
      return hi
        ? `यहाँ एक चित्र है — ${label}। इसे ध्यान से देखें।`
        : `Here is ${step.type === 'photo' ? 'a real photo' : 'a diagram'} — ${label}. Take a moment to look carefully.`;
    }

    if (step.type === 'hindi') {
      const pairs = step.pairs || [];
      if (!pairs.length) return hi ? 'हिंदी में देखें।' : 'Study the Hindi terms.';
      const intro = hi ? 'इन शब्दों को हिंदी में याद करें। ' : 'Learn these terms in Hindi. ';
      return intro + pairs.map(p => `${p.en} — ${p.hi}`).join('. ');
    }

    if (step.type === 'tryit') {
      const title = s.title || '';
      const steps = s.steps || step.en?.steps || [];
      const intro = hi ? `अब खुद करके देखें। ${title}. ` : `Now try it yourself. ${title}. `;
      return intro + steps.map((st, i) => `${hi ? 'चरण' : 'Step'} ${i + 1}: ${st}`).join('. ');
    }

    if (step.type === 'quiz') {
      return hi
        ? 'अब इसका जवाब दें। नीचे दिए विकल्पों में से सही उत्तर चुनें।'
        : 'Now let\'s see what you remember. Choose the correct answer below.';
    }

    return '';
  }

  function buildStepEl(step) {
    const wrap = document.createElement('div');
    const s = step[lang] || step.en || {};
    const stepText = getSpokenText(step);

    switch (step.type) {

      case 'spark': {
        wrap.innerHTML = `
          <div class="spark-card">
            <div class="spark-card-inner">
              <div class="spark-msg-header">
                <div class="spark-msg-avatar">⚡</div>
                <div class="spark-msg-body">
                  <div class="spark-name">Spark</div>
                </div>
              </div>
              <div class="spark-msg-body">
                <p>${s.text}</p>
              </div>
              ${stepText ? `<div class="play-btn-wrap"><button class="play-btn" data-text="${escAttr(stepText)}">🔊 ${lang === 'hi' ? 'फिर सुनें' : 'Hear again'}</button></div>` : ''}
            </div>
          </div>`;
        break;
      }

      case 'learn': {
        const listHtml = s.list ? `<ul>${s.list.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
        const fullText = (s.title || '') + '. ' + (s.body || '');
        const rw = step.rw;
        const rwHtml = rw ? `
          <div class="rw-box">
            <div class="rw-label">⚡ ${lang === 'hi' ? 'असली ज़िंदगी में' : 'In real life'}</div>
            <div class="rw-items">${rw.map(r => `<div class="rw-item">${r}</div>`).join('')}</div>
          </div>` : '';
        wrap.innerHTML = `
          <div class="card">
            <div class="card-inner">
              <div class="card-icon-wrap"><span class="card-icon">${step.icon || '📖'}</span></div>
              <h3>${s.title}</h3>
              <p>${s.body}</p>
              ${listHtml}
              ${rwHtml}
              <div class="play-btn-wrap" style="margin-top:14px"><button class="play-btn" data-text="${escAttr(fullText)}">🔊 ${lang === 'hi' ? 'फिर सुनें' : 'Hear again'}</button></div>
            </div>
          </div>`;
        break;
      }

      case 'diagram': {
        wrap.innerHTML = `
          <div class="diagram-card">
            <div class="diagram-inner">
              <div class="diagram-label">${step.label || t('diagramLabel')}</div>
              <div class="diagram-svg">${step.svg}</div>
            </div>
          </div>`;
        break;
      }

      case 'photo': {
        const caption = (step[lang] || step.en || {}).caption || step.caption || '';
        const credit  = step.credit || '';
        wrap.innerHTML = `
          <div class="photo-card">
            <div class="photo-label">📷 ${step.label || ''}</div>
            <div class="photo-img-wrap">
              <img class="photo-img" src="${step.src}" alt="${step.label || ''}" loading="lazy"
                   onerror="this.closest('.photo-img-wrap').style.display='none'">
            </div>
            ${caption ? `<div class="photo-caption">${caption}</div>` : ''}
            ${credit  ? `<div class="photo-credit">${credit}</div>`  : ''}
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
            <div class="fact-inner">
              <div class="fact-label">💡 ${t('factLabel')}</div>
              <div class="fact-text">${s.text}</div>
              <div class="play-btn-wrap" style="margin-top:12px"><button class="play-btn" data-text="${escAttr(s.text)}">🔊 ${lang === 'hi' ? 'फिर सुनें' : 'Hear again'}</button></div>
            </div>
          </div>`;
        break;
      }

      case 'quiz': {
        const correct = step.correct ?? step.en?.correct ?? 0;
        const opts = s.options || [];
        const feedback = s.feedback || step.en?.feedback || '';
        const optLetters = ['A', 'B', 'C', 'D'];
        wrap.innerHTML = `
          <div class="quiz-card">
            <h3>${s.question}</h3>
            <div class="quiz-options">${opts.map((o, i) => `
              <button class="quiz-opt" data-idx="${i}">
                <span class="opt-icon">${optLetters[i]}</span>${o}
              </button>`).join('')}
            </div>
            <div class="quiz-feedback" style="display:none"></div>
            <div class="quiz-continue-wrap" style="display:none"><button class="quiz-continue-btn">Continue →</button></div>
          </div>`;
        wrap.querySelectorAll('.quiz-opt').forEach(btn => {
          btn.addEventListener('click', () => {
            const chosen = parseInt(btn.dataset.idx);
            wrap.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
            wrap.querySelectorAll('.quiz-opt')[correct].classList.add('correct');
            if (chosen !== correct) btn.classList.add('wrong');
            const isRight = chosen === correct;
            const fb = wrap.querySelector('.quiz-feedback');
            fb.className = 'quiz-feedback ' + (isRight ? 'good' : 'bad');
            fb.textContent = (isRight ? randFrom(CORRECT_LINES) : randFrom(WRONG_LINES)) + ' ' + feedback;
            fb.style.display = 'block';
            const continueWrap = wrap.querySelector('.quiz-continue-wrap');
            const continueFallback = setTimeout(() => { continueWrap.style.display = 'flex'; }, 8000);
            speak((isRight ? 'Correct! ' : 'Not quite. ') + feedback, {
              onEnd: () => { clearTimeout(continueFallback); continueWrap.style.display = 'flex'; }
            });
            wrap.querySelector('.quiz-continue-btn').addEventListener('click', () => { clearTimeout(continueFallback); advanceStep(); });
          });
        });
        break;
      }

      case 'tryit': {
        const steps = s.steps || step.en?.steps || [];
        wrap.innerHTML = `
          <div class="tryit-card">
            <div class="tryit-inner">
              <div class="tryit-label">🔧 ${t('tryitLabel')}</div>
              <div class="tryit-title">${s.title}</div>
              ${steps.map((st, i) => `<div class="tryit-step"><span class="tryit-num">${i+1}</span>${st}</div>`).join('')}
            </div>
          </div>`;
        break;
      }

      case 'complete': {
        wrap.innerHTML = `
          <div class="complete-card">
            <div class="cc-icon">🏆</div>
            <h2>${t('completeMsg')}</h2>
            <div class="xp-badge">+${step.xp} XP</div>
            <p>${s.msg}</p>
          </div>`;
        break;
      }
    }

    // wire up play buttons
    setTimeout(() => {
      wrap.querySelectorAll('.play-btn[data-text]').forEach(btn => {
        btn.addEventListener('click', () => speak(btn.dataset.text));
      });
    }, 0);

    return wrap;
  }

  function renderStepNav(step) {
    const nav = $('lesson-nav');
    nav.innerHTML = '';
    const lesson = currentMod.lessons[currentLessonIdx];
    const navRow = document.createElement('div');
    navRow.className = 'step-nav';

    if (step.type === 'complete') {
      const homeBtn = document.createElement('button');
      homeBtn.className = 'btn btn-ghost';
      homeBtn.textContent = lang === 'hi' ? '🏠 होम' : '🏠 Home';
      homeBtn.onclick = () => {
        Storage.setLessonDone(currentMod.id, currentLessonIdx);
        Storage.addXP(step.xp || 0);
        Storage.clearResume();
        stopSpeak();
        goHome();
      };
      navRow.appendChild(homeBtn);
      if (currentLessonIdx < currentMod.lessons.length - 1) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-green';
        nextBtn.textContent = lang === 'hi' ? 'अगला पाठ' : 'Next Lesson';
        nextBtn.onclick = () => {
          Storage.setLessonDone(currentMod.id, currentLessonIdx);
          Storage.addXP(step.xp || 0);
          stopSpeak();
          openLesson(currentMod, currentLessonIdx + 1);
        };
        navRow.appendChild(nextBtn);
      }
    } else if (step.type === 'quiz') {
      // quiz auto-advances — show empty nav bar so layout stays consistent
    } else {
      if (currentStepIdx > 0) {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-ghost';
        backBtn.textContent = t('back');
        backBtn.onclick = () => { stopSpeak(); currentStepIdx--; renderStep(); };
        navRow.appendChild(backBtn);
      }
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn btn-primary';
      nextBtn.textContent = currentStepIdx < lesson.steps.length - 1 ? t('next') : t('finish');
      nextBtn.onclick = () => advanceStep();
      navRow.appendChild(nextBtn);
    }

    nav.appendChild(navRow);
  }

  function escAttr(str) {
    return (str || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function advanceStep() {
    stopSpeak();
    const lesson = currentMod.lessons[currentLessonIdx];
    if (currentStepIdx < lesson.steps.length - 1) {
      currentStepIdx++;
      renderStep();
    }
  }

  // ── GLOSSARY ──
  function renderGlossary() {
    const search = ($('glossary-search').value || '').toLowerCase();
    const list = $('glossary-list');
    list.innerHTML = '';
    const filtered = GLOSSARY.filter(g =>
      g.en.toLowerCase().includes(search) ||
      g.hi.includes(search) ||
      g.desc_en.toLowerCase().includes(search) ||
      (g.explain_en && g.explain_en.toLowerCase().includes(search))
    );
    if (!filtered.length) {
      list.innerHTML = `<div style="color:var(--text2);text-align:center;padding:24px">${lang === 'hi' ? 'कोई परिणाम नहीं' : 'No results'}</div>`;
      return;
    }
    filtered.forEach((g, idx) => {
      const item = document.createElement('div');
      item.className = 'glossary-item';
      const isHindi = lang === 'hi';
      const desc = isHindi ? g.desc_hi : g.desc_en;
      const explain = isHindi ? g.explain_hi : g.explain_en;
      const speakText = isHindi
        ? `${g.hi}। ${g.desc_hi}। ${g.explain_hi || ''}`
        : `${g.en}. ${g.desc_en}. ${g.explain_en || ''}`;

      item.innerHTML = `
        <div class="gi-head">
          <div class="gi-en">${g.en}</div>
          <div class="gi-head-right">
            ${g.symbol !== '-' ? `<div class="gi-symbol">${g.symbol}</div>` : ''}
            <button class="gi-audio-btn" data-idx="${idx}" title="Listen">🔊</button>
          </div>
        </div>
        <div class="gi-hi">${g.hi}</div>
        ${g.unit !== '-' ? `<div class="gi-unit">Unit: ${g.unit}</div>` : ''}
        <div class="gi-desc">${desc}</div>
        ${explain ? `
        <div class="gi-expand-toggle" data-idx="${idx}">
          <span class="gi-toggle-label">${isHindi ? '📖 सरल भाषा में समझो' : '📖 Simple explanation'}</span>
          <span class="gi-toggle-arrow">▾</span>
        </div>
        <div class="gi-explain hidden" id="gi-explain-${idx}">${explain}</div>
        ` : ''}
      `;
      list.appendChild(item);

      // audio button
      item.querySelector('.gi-audio-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        TTS.speak(speakText, { lang: isHindi ? 'hi-IN' : 'en-US' });
      });

      // expand toggle
      const toggle = item.querySelector('.gi-expand-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const exp = document.getElementById(`gi-explain-${idx}`);
          const arrow = toggle.querySelector('.gi-toggle-arrow');
          exp.classList.toggle('hidden');
          arrow.textContent = exp.classList.contains('hidden') ? '▾' : '▴';
        });
      }
    });
  }

  // ── BOTTOM NAV ──
  $('nav-home').addEventListener('click', () => {
    stopSpeak();
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    $('nav-home').classList.add('active');
    goHome();
  });
  $('nav-glossary').addEventListener('click', () => {
    stopSpeak();
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    $('nav-glossary').classList.add('active');
    showScreen('screen-glossary');
    $('bottom-nav').style.display = 'flex';
    renderGlossary();
  });
  $('glossary-search').addEventListener('input', renderGlossary);

  // ── LESSON BACK ──
  $('lesson-back').addEventListener('click', () => {
    stopSpeak();
    if (currentMod) {
      renderModuleDetail(currentMod);
      showScreen('screen-module');
      $('bottom-nav').style.display = 'flex';
    } else {
      goHome();
    }
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
    if (sparkMuted) { stopSpeak(); }
    $('mute-btn').textContent = sparkMuted
      ? (lang === 'hi' ? '🔇 चालू करें' : '🔇 Unmute')
      : (lang === 'hi' ? '🔊 म्यूट करें' : '🔊 Mute Spark');
    showToast(sparkMuted ? (lang === 'hi' ? 'Spark म्यूट है' : 'Spark muted') : (lang === 'hi' ? 'Spark चालू है' : 'Spark unmuted'));
  });

  // ── LOGOUT ──
  $('logout-btn').addEventListener('click', () => {
    stopSpeak();
    Storage.clearUser();
    currentUser = null;
    pinEntry = '';
    updatePinDots();
    $('bottom-nav').style.display = 'none';
    showScreen('screen-login');
  });

  // ── INIT ──
  TTS.setLang(lang);
  const saved = Storage.getUser();
  if (saved) {
    currentUser = saved;
    if (saved.lang) { lang = saved.lang; Storage.setLang(lang); TTS.setLang(lang); }
    if (Storage.getOnboarded()) goHome(); else goOnboard();
  } else {
    showScreen('screen-login');
  }
});
