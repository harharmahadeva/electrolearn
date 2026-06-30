const Storage = (() => {
  const KEY_USER = 'el_user';
  const KEY_PROGRESS = 'el_progress';
  const KEY_ONBOARDED = 'el_onboarded';
  const KEY_RESUME = 'el_resume';
  const KEY_LANG = 'el_lang';
  const KEY_XP = 'el_xp';
  const KEY_STREAK = 'el_streak';
  const KEY_LAST_ACTIVE = 'el_last_active';

  return {
    setUser(u) { localStorage.setItem(KEY_USER, JSON.stringify(u)); },
    getUser() { try { return JSON.parse(localStorage.getItem(KEY_USER)); } catch { return null; } },
    clearUser() { localStorage.removeItem(KEY_USER); },

    setOnboarded() { localStorage.setItem(KEY_ONBOARDED, '1'); },
    getOnboarded() { return !!localStorage.getItem(KEY_ONBOARDED); },

    getLang() { return localStorage.getItem(KEY_LANG) || 'en'; },
    setLang(l) { localStorage.setItem(KEY_LANG, l); },

    getXP() { return parseInt(localStorage.getItem(KEY_XP) || '0'); },
    addXP(n) { localStorage.setItem(KEY_XP, String(this.getXP() + n)); },

    getProgress() { try { return JSON.parse(localStorage.getItem(KEY_PROGRESS)) || {}; } catch { return {}; } },
    setLessonDone(modId, lessonIdx) {
      const p = this.getProgress();
      if (!p[modId]) p[modId] = {};
      p[modId][lessonIdx] = true;
      localStorage.setItem(KEY_PROGRESS, JSON.stringify(p));
    },
    isLessonDone(modId, lessonIdx) { const p = this.getProgress(); return !!(p[modId] && p[modId][lessonIdx]); },
    getModuleProgress(modId, total) {
      const p = this.getProgress();
      if (!p[modId]) return 0;
      return Object.keys(p[modId]).length / total;
    },

    setResume(modId, lessonIdx) { localStorage.setItem(KEY_RESUME, JSON.stringify({ modId, lessonIdx })); },
    getResume() { try { return JSON.parse(localStorage.getItem(KEY_RESUME)); } catch { return null; } },
    clearResume() { localStorage.removeItem(KEY_RESUME); },

    updateStreak() {
      const today = new Date().toDateString();
      const last = localStorage.getItem(KEY_LAST_ACTIVE);
      const streak = parseInt(localStorage.getItem(KEY_STREAK) || '0');
      if (last === today) return streak;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newStreak = last === yesterday ? streak + 1 : 1;
      localStorage.setItem(KEY_STREAK, String(newStreak));
      localStorage.setItem(KEY_LAST_ACTIVE, today);
      return newStreak;
    },
    getStreak() { return parseInt(localStorage.getItem(KEY_STREAK) || '0'); },

    getTotalLessons() {
      const p = this.getProgress();
      return Object.values(p).reduce((acc, mod) => acc + Object.keys(mod).length, 0);
    }
  };
})();
