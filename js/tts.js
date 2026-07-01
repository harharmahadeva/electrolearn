const TTS = (() => {
  let enabled = true;
  let lang = 'en-US';

  // Female voices only — ranked warmest / most natural first
  const PREFERRED_EN = [
    // iOS / macOS — Apple neural female voices
    'Samantha', 'Karen', 'Moira', 'Tessa', 'Victoria', 'Allison', 'Ava', 'Susan',
    // Windows online neural female (best quality on Windows)
    'Microsoft Aria Online (Natural)', 'Microsoft Jenny Online (Natural)',
    'Microsoft Aria', 'Microsoft Jenny', 'Microsoft Zira',
    'Microsoft Eva', 'Microsoft Hazel', 'Microsoft Susan',
    // Chrome / Android female
    'Google UK English Female',
  ];
  // Male voice names to skip — we never want these
  const MALE_NAMES = [
    'David', 'Mark', 'George', 'James', 'Daniel', 'Alex',
    'Fred', 'Tom', 'Lee', 'Rishi', 'Aaron', 'Arthur',
  ];
  const PREFERRED_HI = [
    'Microsoft Swara Online (Natural)', 'Microsoft Swara',
    'Google हिन्दी', 'Google Hindi',
  ];

  function pickVoice(targetLang) {
    const voices = window.speechSynthesis.getVoices();
    const langCode = targetLang.slice(0, 2); // 'en' or 'hi'
    const prefs = langCode === 'hi' ? PREFERRED_HI : PREFERRED_EN;

    // 1. try preferred list in order
    for (const name of prefs) {
      const v = voices.find(v => v.name.includes(name));
      if (v) return v;
    }
    // 2. any local female-sounding voice (exclude known male names)
    const isMale = v => MALE_NAMES.some(m => v.name.includes(m));
    const localFemale = voices.find(v => v.lang.startsWith(langCode) && v.localService && !isMale(v));
    if (localFemale) return localFemale;
    // 3. any non-male voice in the right language
    const anyFemale = voices.find(v => v.lang.startsWith(langCode) && !isMale(v));
    if (anyFemale) return anyFemale;
    // 4. absolute fallback — any voice in the language
    return voices.find(v => v.lang.startsWith(langCode)) || null;
  }

  function speak(text, options = {}) {
    if (!enabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterLang = options.lang || lang;
    const isHindi = utterLang.startsWith('hi');

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = utterLang;

    // Clear, calm settings — slow enough for non-native / lower-literacy listeners
    utter.rate   = options.rate   ?? (isHindi ? 0.78 : 0.82);
    utter.pitch  = options.pitch  ?? (isHindi ? 0.92 : 0.88);
    utter.volume = options.volume ?? 0.88;

    // Voice selection — try immediately, then retry after voiceschanged if empty
    const trySetVoice = () => {
      const v = pickVoice(utterLang);
      if (v) utter.voice = v;
    };
    trySetVoice();
    if (!utter.voice) {
      window.speechSynthesis.addEventListener('voiceschanged', trySetVoice, { once: true });
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
