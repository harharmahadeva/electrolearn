const TTS = (() => {
  let enabled = true;
  let lang = 'en-US';
  let currentUtterance = null;

  function speak(text, options = {}) {
    if (!enabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = options.lang || lang;
    utter.rate = options.rate || 0.92;
    utter.pitch = options.pitch || 1.05;
    utter.volume = 1;

    // prefer a natural voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.lang.startsWith(utter.lang.slice(0, 2)) && !v.name.includes('Google') && v.localService
    ) || voices.find(v => v.lang.startsWith(utter.lang.slice(0, 2)));
    if (preferred) utter.voice = preferred;

    if (options.onStart) utter.onstart = options.onStart;
    if (options.onEnd) utter.onend = options.onEnd;
    currentUtterance = utter;
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

  // warm up voices on load
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', () => {});
  }

  return { speak, stop, setLang, setEnabled, isEnabled };
})();
