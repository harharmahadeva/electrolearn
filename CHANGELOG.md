# ElectroLearn Changelog

## v2.4.0 — 2026-07-01

### Tools module overhaul — real illustrations + Indian teaching style

- Tools & Measurement module completely rewritten with 3 detailed SVG diagrams
- Breadboard diagram: shows hole grid, internal row connections (dashed orange lines), power rails color-coded red/blue, "NOT a PCB — Practice Board!" warning badge
- Jumper wires diagram: Male vs Female ends illustrated, color coding guide, Male-Male vs Male-Female types explained
- Multimeter diagram: improved annotated view with dial labels (V~, V—, Ω, A, beep), probe jacks labeled, annotation arrows
- Soldering iron diagram: full anatomy with handle, heating element, HOT TIP label (350°C), safety warning
- Indian teaching context added: breadboard vs PCB misconception directly addressed — "People call breadboard 'PCB' in Indian markets — that is WRONG"
- Quiz updated to test the breadboard/PCB distinction
- All prices in ₹, Indian markets referenced (Lajpat Rai, Lamington Road, SP Road, Robu.in)
- Trainer-style Hindi throughout — natural mixed-language explanations
- TTS improved: pitch set to 1.0 for all voices (natural baseline), rate 0.88 for legacy / 0.92 for neural (less robotic), volume 0.95
- SW cache bumped to electrolearn-v12

## v2.3.0 — 2026-07-01

### Elegant home cards + natural TTS voice

- Resume card redesigned: dark green gradient, glowing top highlight, rounded icon box, circular arrow button
- Spark card redesigned: warm dark gradient, glowing top highlight, amber icon box with pulse animation, circular arrow
- TTS: Microsoft Aria Online (Natural) prioritized first — much warmer, less robotic than Zira
- TTS: Neural voices detected and given higher rate (0.90) and natural pitch (1.02) for conversational feel; legacy voices get slower/flatter settings
- TTS: Text preprocessing strips HTML/decorative emoji and normalizes spacing for cleaner speech
- Added Microsoft Michelle and Emma Online voices to fallback list

## v2.2.0 — 2026-07-01

### Full UI redesign — cards, module grid, lesson nav

- Lesson header now centered (3-column grid: back btn | centered title | spacer), larger fonts
- All step cards redesigned: orange gradient top band, centered icon in a circle, centered title — no more flat left-border look
- Spark card: top band + header row with avatar and "SPARK" label
- Fact card: green top band, cleaned inner layout
- Diagram card: top band variant
- Tryit card: orange top band, centered title
- "Hear again" button centered on all card types
- Module home cards: centered icon in colored circle, vertical layout, color-matched icon background
- Back/Next buttons: removed "‹" and "→" symbols, clean text only
- Back/Next nav now fixed above bottom-nav (no more overlap), proper spacing
- KITT scanner moved higher so it never overlaps lesson nav buttons
- Lesson body bottom padding adjusted for fixed nav layers

## v2.1.0 — 2026-07-01

### Accessible glossary — audio + Hindi trainer explanations

- 🔊 Audio button on every glossary item — reads term + full explanation aloud
- "Simple explanation" expandable panel on every item (English & Hindi)
- Hindi explanations rewritten as proper trainer-style Hindi (not literal translation) — the way a mobile repair instructor would explain to apprentices, mixing common English tech words naturally
- Glossary expanded from 27 to 32 terms — added Fuse, Relay, Voltage Regulator, Watt/Power, Frequency
- Search now also matches explanation text
- TTS rate slowed (Hindi 0.78, English 0.82) and pitch softened for lower-literacy listeners
- SW cache bumped to electrolearn-v6

## v2.0.0 — 2026-07-01

### Major curriculum redesign — practical focus with animations

- Expanded from 7 to 10 modules: added Safety First, Transistors & ICs, Reading Schematics
- All modules unlocked (no prerequisite locking)
- New "What is Electronics?" lesson with animated SVG showing phone/LED/TV/Arduino connections
- Animated electron-flow circuit diagram in electricity lesson (battery → resistor → LED loop)
- Animated AC sine wave diagram in DC/AC lesson
- Real-world ("IN REAL LIFE") callout boxes on learn cards — practical examples (resistors, LEDs, phones, cars)
- Distinct visual design per card type: learn (orange border), fact (green border), diagram (dark bg + stripes), tryit (orange top), complete (glow + trophy)
- Card icon pop-in animation on each step
- KITT scanner fix: animation only runs when visible (not at startup)
- Glossary expanded to 28 terms (ESD, schematic, transistor, IC, 555, anode, cathode)
- SW cache bumped to electrolearn-v5

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
