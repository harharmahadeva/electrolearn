const TTS = (() => {
  let enabled = true;
  let lang = 'en-US';

  // Ranked warmest / most natural first
  const PREFERRED_EN = [
    // Windows neural voices — Aria is the warmest, most conversational
    'Microsoft Aria Online (Natural)', 'Microsoft Jenny Online (Natural)',
    'Microsoft Michelle Online (Natural)', 'Microsoft Emma Online (Natural)',
    'Microsoft Aria', 'Microsoft Jenny', 'Microsoft Michelle',
    // iOS / macOS Apple neural
    'Samantha', 'Karen', 'Moira', 'Tessa', 'Victoria', 'Allison', 'Ava',
    // Windows legacy (last resort)
    'Microsoft Zira', 'Microsoft Eva', 'Microsoft Hazel',
    // Chrome / Android
    'Google UK English Female',
  ];
  const MALE_NAMES = [
    'David', 'Mark', 'George', 'James', 'Daniel', 'Alex',
    'Fred', 'Tom', 'Lee', 'Rishi', 'Aaron', 'Arthur', 'Guy',
  ];
  const PREFERRED_HI = [
    'Microsoft Swara Online (Natural)', 'Microsoft Swara',
    'Google हिन्दी', 'Google Hindi',
  ];

  function pickVoice(targetLang) {
    const voices = window.speechSynthesis.getVoices();
    const langCode = targetLang.slice(0, 2);
    const prefs = langCode === 'hi' ? PREFERRED_HI : PREFERRED_EN;
    for (const name of prefs) {
      const v = voices.find(v => v.name.includes(name));
      if (v) return v;
    }
    const isMale = v => MALE_NAMES.some(m => v.name.includes(m));
    const localFemale = voices.find(v => v.lang.startsWith(langCode) && v.localService && !isMale(v));
    if (localFemale) return localFemale;
    const anyFemale = voices.find(v => v.lang.startsWith(langCode) && !isMale(v));
    if (anyFemale) return anyFemale;
    return voices.find(v => v.lang.startsWith(langCode)) || null;
  }

  // Strip HTML tags and normalize text for natural-sounding speech
  function prepareText(raw) {
    return raw
      .replace(/<[^>]*>/g, ' ')     // strip HTML
      .replace(/⚡|💡|🔧|📖|✓|✗/g, '') // strip decorative emoji
      .replace(/\s{2,}/g, ' ')       // collapse spaces
      .replace(/([.?!])\s+/g, '$1  ') // brief pause after sentences
      .trim();
  }

  function speak(text, options = {}) {
    if (!enabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterLang = options.lang || lang;
    const isHindi = utterLang.startsWith('hi');
    const cleanText = prepareText(text);

    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.lang = utterLang;

    // Natural settings — pitch near 1.0 = most natural; too slow or too low = robotic
    const v = pickVoice(utterLang);
    const isNeural = v && (v.name.includes('Online') || v.name.includes('Natural') || v.localService === false);
    utter.rate   = options.rate   ?? (isHindi ? 0.82 : (isNeural ? 0.92 : 0.88));
    utter.pitch  = options.pitch  ?? (isHindi ? 1.0  : (isNeural ? 1.0  : 1.0));
    utter.volume = options.volume ?? 0.95;

    // Voice selection — already picked above for neural detection, assign it
    if (v) utter.voice = v;
    if (!utter.voice) {
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        const v2 = pickVoice(utterLang);
        if (v2) utter.voice = v2;
      }, { once: true });
    }

    if (options.onStart) utter.onstart = options.onStart;
    if (options.onEnd)   utter.onend   = options.onEnd;

    // iOS Safari bug: speechSynthesis stalls after ~15 s unless poked
    const keepAlive = setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        clearInterval(keepAlive);
      }
    }, 10000);
    utter.onend = (e) => {
      clearInterval(keepAlive);
      options.onEnd && options.onEnd(e);
    };
    utter.onerror = () => clearInterval(keepAlive);

    window.speechSynthesis.speak(utter);
  }

  function stop() {
    window.speechSynthesis && window.speechSynthesis.cancel();
  }

  function setLang(l) {
    lang = l === 'hi' ? 'hi-IN' : 'en-US';
  }

  function setEnabled(val) { enabled = val; }
  function isEnabled() { return enabled; }

  // Warm up voice list as early as possible
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      window.speechSynthesis.getVoices(); // cache refresh
    });
  }

  return { speak, stop, setLang, setEnabled, isEnabled };
})();
