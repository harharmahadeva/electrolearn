const TTS = (() => {
  let enabled = true;
  let lang = 'en-US';

  // Ranked preference list — warmest / most natural voices first
  const PREFERRED_EN = [
    // iOS / macOS neural voices (very natural)
    'Samantha', 'Karen', 'Moira', 'Tessa',
    // Windows natural voices (online neural, excellent quality)
    'Microsoft Aria Online (Natural)', 'Microsoft Jenny Online (Natural)',
    'Microsoft Aria', 'Microsoft Jenny', 'Microsoft Zira',
    // Chrome desktop
    'Google UK English Female',
    // Android fallback
    'English (United States)',
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
    // 2. any local service voice in the right language
    const local = voices.find(v => v.lang.startsWith(langCode) && v.localService);
    if (local) return local;
    // 3. any voice in the right language
    return voices.find(v => v.lang.startsWith(langCode)) || null;
  }

  function speak(text, options = {}) {
    if (!enabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterLang = options.lang || lang;
    const isHindi = utterLang.startsWith('hi');

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = utterLang;

    // Soft, warm settings — slower rate, slightly lower pitch, gentle volume
    utter.rate   = options.rate   ?? (isHindi ? 0.82 : 0.86);
    utter.pitch  = options.pitch  ?? (isHindi ? 0.94 : 0.90);
    utter.volume = options.volume ?? 0.90;

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
