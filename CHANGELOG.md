# ElectroLearn Changelog

## v1.1.0 — 2026-06-30

### UI aligned to Work Ready (Chhaya's app) — all changelog improvements applied

- Time-aware greeting (Good morning / afternoon / evening / night) — bilingual
- KITT Spark speaking indicator — shows when TTS is active, hides when done
- Spark home card with pulse animation — tap for a random electronics tip (TTS)
- Overall progress bar in home header (total lessons done / total)
- Bottom nav stays visible during lessons — no longer hidden
- Version number displayed in home header footer
- Varied motivational feedback lines on quiz correct/wrong answers
- Resume label updates on lang toggle
- Section path label translates to Hindi on toggle
- Mute/unmute button with toast confirmation
- Module complete card: green border, gold XP badge
- Toast moved to top (80px from top)
- Desktop 3-column grid, max-width 620px, centered layout
- Complete card auto-marks lesson done, XP awarded, resume cleared

## v1.0.0 — 2026-06-30

### Initial release
- 7 modules, 10 lessons covering electricity basics to first projects
- Bilingual EN/HI — toggle switches all text instantly
- Spark AI guide with Web Speech API TTS (auto-speaks each card)
- "Hear again" button on every learn/spark/fact card
- PIN login (SHA-256 hashed) — test user PIN 1984
- Onboarding (5 slides, Spark introduces himself)
- Resume card — continue where you left off
- Module grid with progress bars + locked states
- Inline SVG circuit diagrams (no images needed)
- Quiz steps with instant feedback + auto-advance
- Component Glossary (20 terms, bilingual, searchable)
- XP system + day streak tracking (localStorage)
- PWA: manifest, service worker, offline-first
- Modules: Electricity, Components, Ohm's Law, Tools, Multimeter, PCB, Projects
