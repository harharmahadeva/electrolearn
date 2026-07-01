const APP_VERSION = '2.7.1';

const T = {
  en: {
    appName: 'ElectroLearn',
    tagline: 'Electronics from scratch',
    pinLabel: 'Enter your PIN',
    pinError: 'Incorrect PIN — try again',
    home: 'Home', spark: 'Spark', glossary: 'Glossary',
    learningPath: 'Your Learning Path',
    continueLesson: 'Continue where you left off',
    xpLabel: 'XP',
    streakLabel: 'day streak',
    lessonsLabel: 'lessons done',
    next: 'Next', back: 'Back', finish: 'Finish Lesson',
    tryAgain: 'Try Again', gotIt: 'Got it!',
    correct: '✓ Correct!', wrong: '✗ Not quite',
    quizLabel: 'Quick Check',
    factLabel: 'Did You Know?',
    hindiLabel: 'In Hindi',
    diagramLabel: 'See it',
    tryitLabel: 'Try it!',
    completeMsg: 'Lesson complete!',
    signOut: 'Sign out',
    muteOn: 'Mute Spark', muteOff: 'Unmute Spark',
    langToggle: 'हिंदी',
    welcome: 'Welcome back',
    skipOnboard: 'Skip to lessons',
    locked: 'Complete previous module first',
    progress: 'Progress',
  },
  hi: {
    appName: 'ElectroLearn',
    tagline: 'इलेक्ट्रॉनिक्स सीखो, शुरू से',
    pinLabel: 'अपना PIN डालें',
    pinError: 'गलत PIN — दोबारा कोशिश करें',
    home: 'होम', spark: 'स्पार्क', glossary: 'शब्दकोश',
    learningPath: 'आपका सीखने का रास्ता',
    continueLesson: 'जहाँ छोड़ा, वहाँ से जारी रखें',
    xpLabel: 'XP',
    streakLabel: 'दिन की लकीर',
    lessonsLabel: 'पाठ पूरे',
    next: 'आगे', back: 'वापस', finish: 'पाठ पूरा करें',
    tryAgain: 'फिर कोशिश करें', gotIt: 'समझ गया!',
    correct: '✓ सही!', wrong: '✗ फिर सोचो',
    quizLabel: 'जल्दी जाँच',
    factLabel: 'क्या आप जानते हैं?',
    hindiLabel: 'हिंदी में',
    diagramLabel: 'देखें',
    tryitLabel: 'खुद करके देखें!',
    completeMsg: 'पाठ पूरा हुआ!',
    signOut: 'साइन आउट',
    muteOn: 'स्पार्क म्यूट करें', muteOff: 'स्पार्क चालू करें',
    langToggle: 'English',
    welcome: 'वापस स्वागत है',
    skipOnboard: 'पाठों पर जाएं',
    locked: 'पहले पिछला मॉड्यूल पूरा करें',
    progress: 'प्रगति',
  }
};

const ONBOARD_SLIDES = [
  {
    emoji: '⚡',
    en: { title: 'Welcome to ElectroLearn!', text: "I'm Spark, your electronics guide. Whether you've never touched a circuit or just want to understand how gadgets work — you're in the right place." },
    hi: { title: 'ElectroLearn में आपका स्वागत है!', text: "मैं Spark हूँ, आपका इलेक्ट्रॉनिक्स गाइड। चाहे आपने कभी सर्किट नहीं छुआ हो — आप सही जगह आए हैं।" }
  },
  {
    emoji: '🔦',
    en: { title: 'Start from zero', text: "No prior knowledge needed. We start from 'What is electricity?' and build up step by step — with simple language, diagrams, and real examples." },
    hi: { title: 'बिल्कुल शुरू से', text: "कोई पूर्व ज्ञान जरूरी नहीं। हम 'बिजली क्या है?' से शुरू करते हैं और धीरे-धीरे आगे बढ़ते हैं।" }
  },
  {
    emoji: '🎙️',
    en: { title: 'Spark speaks to you', text: "I'll read every lesson out loud. Tap the speaker icon anytime to hear it again. Learning with ears + eyes together is faster!" },
    hi: { title: 'Spark आपसे बात करता है', text: "मैं हर पाठ जोर से पढ़ूंगा। कभी भी स्पीकर आइकन दबाएं दोबारा सुनने के लिए।" }
  },
  {
    emoji: '📐',
    en: { title: 'Diagrams + Quizzes', text: "Every concept has a visual diagram. Short quizzes after each topic make sure it sticks. No timer, no pressure — go at your own pace." },
    hi: { title: 'चित्र + प्रश्नोत्तरी', text: "हर अवधारणा का एक दृश्य चित्र है। छोटी प्रश्नोत्तरी सुनिश्चित करती है कि बात दिमाग में बैठे। कोई जल्दी नहीं।" }
  },
  {
    emoji: '🏆',
    en: { title: 'You can do this!', text: "Millions of people use electronics every day without knowing how they work. You're about to join the rare few who actually understand. Let's go!" },
    hi: { title: 'आप यह कर सकते हैं!', text: "करोड़ों लोग रोज इलेक्ट्रॉनिक्स इस्तेमाल करते हैं पर समझते नहीं। आप उन खास लोगों में शामिल होने वाले हैं जो सच में समझते हैं।" }
  }
];

const MODULES = [
  // ══════════════════════════════════════════════════════
  //  1. WHAT IS ELECTRICITY?
  // ══════════════════════════════════════════════════════
  {
    id: 'electricity',
    icon: '⚡',
    color: '#f59e0b',
    en: { name: 'What is Electricity?', phase: 'Foundation' },
    hi: { name: 'बिजली क्या है?', phase: 'बुनियाद' },
    lessons: [
      {
        en: { title: 'What is Electronics? Your world explained', time: '4 min' },
        hi: { title: 'Electronics क्या है? आपकी दुनिया समझाई', time: '4 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Look around you right now. Your phone, the TV remote, the charger on the wall, the LED bulb above you — every single one of those runs on electronics. By the end of this course, you won't just use these things. You'll understand exactly how they work. And then you can build them yourself." },
            hi: { text: "अभी चारों तरफ देखें। आपका phone, TV remote, charger, LED bulb — ये सब electronics से चलते हैं। इस course के अंत तक, आप इन्हें सिर्फ use नहीं करेंगे — आप समझेंगे ये काम कैसे करते हैं। फिर खुद बना भी सकते हैं।" }
          },
          {
            type: 'diagram',
            label: 'Electronics is everywhere around you',
            svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
  <rect width="320" height="220" fill="#0a0900" rx="12"/>
  <!-- Center label -->
  <text x="160" y="115" fill="#ff8c00" font-size="13" font-weight="bold" text-anchor="middle" font-family="sans-serif">ELECTRONICS</text>
  <text x="160" y="131" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">controls all of these</text>
  <!-- Pulsing center circle -->
  <circle cx="160" cy="115" r="38" fill="none" stroke="#ff8c00" stroke-width="1.5" opacity="0.4">
    <animate attributeName="r" values="38;45;38" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="160" cy="115" r="38" fill="none" stroke="#ff8c00" stroke-width="0.5" opacity="0.2">
    <animate attributeName="r" values="38;55;38" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <!-- Phone — top left -->
  <rect x="20" y="20" width="58" height="72" rx="8" fill="#1a1d35" stroke="#4f6ef7" stroke-width="1.5"/>
  <rect x="26" y="28" width="46" height="36" rx="3" fill="#0f1a3f"/>
  <rect x="40" y="68" width="18" height="3" rx="2" fill="#4f6ef7" opacity="0.6"/>
  <text x="49" y="50" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="sans-serif">📱</text>
  <text x="49" y="62" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">3.7V Li-ion</text>
  <text x="49" y="104" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">Phone</text>
  <text x="49" y="114" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">~15 billion transistors</text>
  <!-- connecting line phone to center -->
  <line x1="78" y1="56" x2="122" y2="105" stroke="#4f6ef7" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <!-- LED Bulb — top right -->
  <circle cx="258" cy="48" r="22" fill="#2a1a00" stroke="#ff8c00" stroke-width="1.5"/>
  <text x="258" y="53" fill="#fbbf24" font-size="18" text-anchor="middle" font-family="sans-serif">💡</text>
  <text x="258" y="84" fill="#ff8c00" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">LED Bulb</text>
  <text x="258" y="94" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">converts 220V AC → light</text>
  <!-- connecting line bulb to center -->
  <line x1="237" y1="62" x2="198" y2="100" stroke="#ff8c00" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <!-- TV Remote — bottom left -->
  <rect x="22" y="148" width="36" height="60" rx="8" fill="#1a1d35" stroke="#8b5cf6" stroke-width="1.5"/>
  <circle cx="40" cy="163" r="7" fill="#2e2060" stroke="#8b5cf6" stroke-width="1"/>
  <rect x="28" y="175" width="24" height="3" rx="1.5" fill="#8b5cf6" opacity="0.5"/>
  <rect x="28" y="181" width="24" height="3" rx="1.5" fill="#8b5cf6" opacity="0.5"/>
  <rect x="28" y="187" width="24" height="3" rx="1.5" fill="#8b5cf6" opacity="0.5"/>
  <text x="40" y="220" fill="#8b5cf6" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">TV Remote</text>
  <!-- Arduino — bottom right -->
  <rect x="240" y="148" width="62" height="48" rx="6" fill="#0a2a0a" stroke="#10b981" stroke-width="1.5"/>
  <rect x="246" y="154" width="50" height="30" rx="3" fill="#0f1a0f"/>
  <text x="271" y="172" fill="#10b981" font-size="8" text-anchor="middle" font-family="sans-serif">ARDUINO</text>
  <text x="271" y="182" fill="#9ba3c8" font-size="6" text-anchor="middle" font-family="sans-serif">you can program this!</text>
  <text x="271" y="210" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">Microcontroller</text>
  <!-- connecting lines bottom -->
  <line x1="58" y1="165" x2="122" y2="128" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
  <line x1="242" y1="165" x2="198" y2="128" stroke="#10b981" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
</svg>`
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'Electricity vs Electronics — the difference', body: 'Electricity is the raw energy — like water in a pipe. Electronics is the art of controlling that energy to do useful things.', list: ['Electricity = raw energy flowing through wires', 'Electronics = circuits that CONTROL how that energy flows', 'A light switch uses electricity. A smartphone uses electronics', 'This course: you learn to control electricity with purpose'] },
            hi: { title: 'Electricity vs Electronics — फर्क', body: 'Electricity कच्ची ऊर्जा है — पाइप में पानी की तरह। Electronics वो कला है जो उस ऊर्जा को useful काम के लिए control करती है।', list: ['Electricity = तारों में बहती कच्ची ऊर्जा', 'Electronics = circuits जो उस ऊर्जा को CONTROL करते हैं', 'Light switch = electricity। Smartphone = electronics', 'यह course: आप सीखेंगे electricity को purpose से control करना'] },
            rw: ['📱 Phone — 3.7V, billions of tiny switches', '💡 LED bulb — 220V AC → controlled light', '🎮 Game controller — tiny circuits read your buttons', '🚗 Car ECU — electronics control the engine']
          },
          {
            type: 'learn',
            icon: '🎯',
            en: { title: 'What you will be able to do after this course', body: 'This is not just theory. These are real practical skills you will have.', list: ['Read a circuit diagram (schematic) of any gadget', 'Understand why your phone charges at 5V not 230V', 'Build a working LED circuit from scratch', 'Use a multimeter to diagnose any electrical problem', 'Understand what the components inside a PCB actually do', 'Start building your own projects on a breadboard'] },
            hi: { title: 'इस course के बाद आप क्या कर पाएंगे', body: 'यह सिर्फ theory नहीं है। ये real practical skills हैं जो आपके पास होंगी।', list: ['किसी भी gadget का circuit diagram पढ़ सकेंगे', 'समझेंगे phone 5V पर क्यों charge होता है 230V पर नहीं', 'Scratch से working LED circuit बना सकेंगे', 'Multimeter से कोई भी electrical problem diagnose कर सकेंगे', 'PCB के अंदर components क्या करते हैं — समझेंगे', 'Breadboard पर खुद projects बनाना शुरू कर सकेंगे'] }
          },
          {
            type: 'fact',
            en: { text: "The first electronic computer ENIAC (1945) weighed 27 tonnes and filled an entire room. Today, your smartphone is millions of times more powerful and fits in your pocket. That is 80 years of electronics progress." },
            hi: { text: "पहला electronic computer ENIAC (1945) का वजन 27 tonnes था और पूरे कमरे में था। आज आपका smartphone लाखों गुना ज्यादा powerful है और जेब में आता है। यह 80 साल की electronics की प्रगति है।" }
          },
          {
            type: 'complete', xp: 15,
            en: { msg: "You know what electronics is and why it matters. Every lesson from here is practical — you'll see real components, real circuits, real examples. Let's start with the most fundamental question: what exactly IS electricity?" },
            hi: { msg: "आप जानते हैं electronics क्या है और क्यों matter करती है। यहाँ से हर lesson practical है — real components, real circuits, real examples। शुरू करते हैं सबसे basic सवाल से: electricity actually क्या है?" }
          }
        ]
      },
      {
        en: { title: 'Electricity is like water', time: '5 min' },
        hi: { title: 'बिजली पानी जैसी है', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Before we touch any wires, let me tell you something. Electricity sounds scary — but it follows rules. Simple rules. Once you know the rules, you can control it. And controlling electricity is the foundation of every gadget, phone, light, and machine around you." },
            hi: { text: "कोई तार छूने से पहले, मैं आपको एक बात बताना चाहता हूँ। बिजली डरावनी लगती है — लेकिन यह नियमों का पालन करती है। सरल नियम। एक बार नियम जान लो, तुम इसे नियंत्रित कर सकते हो।" }
          },
          {
            type: 'learn',
            icon: '💧',
            en: { title: 'Think of water in a pipe', body: 'Electricity is easiest to understand if you imagine water flowing through a pipe. This analogy is so accurate that engineers use it all the time.', list: ['Water flowing = Electric current (flow of electrons through wire)', 'Water pressure = Voltage (the push that drives current)', 'A narrow pipe = Resistance (opposition to flow)', 'Water pump = Battery (the source of the push)'] },
            hi: { title: 'पाइप में पानी सोचो', body: 'बिजली को समझने का सबसे आसान तरीका है — पाइप में बहते पानी की कल्पना करो।', list: ['बहता पानी = विद्युत धारा (Current — electrons का प्रवाह)', 'पानी का दबाव = वोल्टेज (Voltage — push)', 'पतली पाइप = प्रतिरोध (Resistance — रुकावट)', 'पंप = बैटरी (Battery — push का स्रोत)'] },
            rw: ['🔦 Torch: 3V battery pushes current through LED', '🚿 Shower: pressure = voltage, flow rate = current', '💉 IV drip: slow controlled flow = low current']
          },
          {
            type: 'diagram',
            label: 'Live circuit — electrons flowing right now',
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="200" fill="#0a0900" rx="12"/>
  <!-- Circuit outline: battery top-left, wire loop through resistor and LED -->
  <!-- Battery -->
  <rect x="16" y="60" width="32" height="80" rx="8" fill="#1e1060" stroke="#7c3aed" stroke-width="2"/>
  <text x="32" y="96" fill="#a78bfa" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">9V</text>
  <text x="32" y="108" fill="#a78bfa" font-size="8" text-anchor="middle" font-family="sans-serif">Battery</text>
  <line x1="32" y1="60" x2="32" y2="40" stroke="#7c3aed" stroke-width="2"/>
  <text x="42" y="38" fill="#10b981" font-size="12" font-family="sans-serif">+</text>
  <line x1="32" y1="140" x2="32" y2="160" stroke="#7c3aed" stroke-width="2"/>
  <text x="42" y="165" fill="#ef4444" font-size="12" font-family="sans-serif">−</text>
  <!-- Top wire + → right -->
  <line x1="32" y1="40" x2="270" y2="40" stroke="#ff8c00" stroke-width="3" stroke-linecap="round"/>
  <!-- Bottom wire − → right -->
  <line x1="32" y1="160" x2="270" y2="160" stroke="#4f5060" stroke-width="3" stroke-linecap="round"/>
  <!-- Right side connecting wire -->
  <line x1="270" y1="40" x2="270" y2="160" stroke="#4f5060" stroke-width="3" stroke-linecap="round"/>
  <!-- Resistor (on top wire, middle) -->
  <rect x="100" y="28" width="50" height="24" rx="5" fill="#7c2d00" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="125" y="44" fill="#fbbf24" font-size="9" text-anchor="middle" font-family="sans-serif" font-weight="bold">330Ω</text>
  <text x="125" y="20" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Resistor</text>
  <!-- LED (right side, vertical) -->
  <polygon points="260,75 260,105 280,90" fill="#10b981" stroke="#10b981" stroke-width="1"/>
  <line x1="260" y1="74" x2="260" y2="75" stroke="#10b981" stroke-width="0"/>
  <line x1="260" y1="74" x2="260" y2="106" stroke="#10b981" stroke-width="2.5"/>
  <line x1="280" y1="74" x2="280" y2="106" stroke="#10b981" stroke-width="2.5"/>
  <text x="292" y="94" fill="#10b981" font-size="8" font-family="sans-serif">LED</text>
  <!-- LED glow animation -->
  <circle cx="270" cy="90" r="14" fill="none" stroke="#10b981" stroke-width="1" opacity="0">
    <animate attributeName="opacity" values="0;0.5;0" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="r" values="14;22;14" dur="1.5s" repeatCount="indefinite"/>
  </circle>
  <!-- Animated electrons on top wire -->
  <circle r="5" fill="#ff8c00" opacity="0.95">
    <animateMotion dur="2.5s" repeatCount="indefinite" path="M 48 40 L 290 40 L 290 160 L 48 160 Z"/>
  </circle>
  <circle r="5" fill="#fbbf24" opacity="0.85">
    <animateMotion dur="2.5s" begin="0.83s" repeatCount="indefinite" path="M 48 40 L 290 40 L 290 160 L 48 160 Z"/>
  </circle>
  <circle r="5" fill="#ff8c00" opacity="0.75">
    <animateMotion dur="2.5s" begin="1.66s" repeatCount="indefinite" path="M 48 40 L 290 40 L 290 160 L 48 160 Z"/>
  </circle>
  <!-- Labels -->
  <text x="125" y="185" fill="#ff8c00" font-size="9" text-anchor="middle" font-family="sans-serif">● = electrons moving</text>
  <text x="125" y="197" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">battery pushes them around the loop</text>
</svg>`
          },
          {
            type: 'hindi',
            en: { title: 'Key words' },
            hi: { title: 'मुख्य शब्द' },
            pairs: [
              { en: 'Electricity', hi: 'बिजली / विद्युत' },
              { en: 'Current', hi: 'धारा (flow of charge)' },
              { en: 'Voltage', hi: 'वोल्टेज (दबाव / push)' },
              { en: 'Resistance', hi: 'प्रतिरोध (रुकावट)' },
              { en: 'Battery', hi: 'बैटरी (विद्युत स्रोत)' }
            ]
          },
          {
            type: 'quiz',
            en: { question: 'In the water analogy, what does VOLTAGE represent?', options: ['The flow of water', 'The water pump pressure', 'The width of the pipe', 'The amount of water'], correct: 1, feedback: 'Voltage is the push — like pressure from a pump. Higher voltage = more push for electrons to flow.' },
            hi: { question: 'पानी की तुलना में VOLTAGE किसे दर्शाता है?', options: ['पानी का बहाव', 'पंप का दबाव', 'पाइप की चौड़ाई', 'पानी की मात्रा'], correct: 1, feedback: 'Voltage = दबाव। ज्यादा voltage = electrons को ज्यादा push।' }
          },
          {
            type: 'quiz',
            en: { question: 'What is electric current?', options: ['The voltage in a wire', 'The flow of electrons through a conductor', 'The opposition to electricity', 'The power of a battery'], correct: 1, feedback: 'Current is the actual flow — electrons moving through the wire. We measure it in Amperes (A).' },
            hi: { question: 'विद्युत धारा क्या है?', options: ['तार में वोल्टेज', 'चालक में electrons का प्रवाह', 'बिजली का विरोध', 'बैटरी की शक्ति'], correct: 1, feedback: 'Current = electrons का बहाव। हम इसे Amperes (A) में मापते हैं।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "The water analogy is the most important idea in all of electronics. You now understand Voltage, Current, and Resistance — the three pillars. Everything else is built on this. Brilliant start!" },
            hi: { msg: "पानी की तुलना इलेक्ट्रॉनिक्स का सबसे महत्वपूर्ण विचार है। आप अब Voltage, Current और Resistance समझते हैं। शानदार शुरुआत!" }
          }
        ]
      },
      {
        en: { title: 'DC vs AC — two types of electricity', time: '4 min' },
        hi: { title: 'DC और AC — दो तरह की बिजली', time: '4 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Here's something that surprises most beginners: not all electricity flows the same way. Your phone battery uses one type. Your wall socket uses a completely different type. Let me explain." },
            hi: { text: "यहाँ एक बात है जो ज्यादातर beginners को हैरान करती है: सभी बिजली एक जैसी नहीं बहती। आपके फोन की बैटरी एक प्रकार का उपयोग करती है। आपका दीवार का सॉकेट बिल्कुल अलग प्रकार का।" }
          },
          {
            type: 'learn',
            icon: '🔋',
            en: { title: 'DC — Direct Current', body: 'DC means electrons always flow in ONE direction — like water flowing steadily downstream. Think of DC as a calm, one-way river.', list: ['Flows in one direction only — constant, steady', 'Used in: phones, laptops, LED lights, Arduino', 'Safe for small electronics — stays predictable', 'Your phone charger CONVERTS AC from the wall → DC for the battery'] },
            hi: { title: 'DC — सीधी धारा', body: 'DC का मतलब है electrons हमेशा एक दिशा में बहते हैं — शांत एक-तरफा नदी की तरह।', list: ['सिर्फ एक दिशा में — constant, steady', 'उपयोग: फोन, लैपटॉप, LED, Arduino', 'छोटे electronics के लिए सुरक्षित', 'आपका charger wall की AC को phone के लिए DC में बदलता है!'] },
            rw: ['🔋 AA battery: 1.5V DC', '📱 Phone battery: 3.7V DC', '💻 Laptop: 19V DC (from adapter)', '🔌 USB port: 5V DC']
          },
          {
            type: 'diagram',
            label: 'DC vs AC — how the current flows',
            svg: `<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="190" fill="#0a0900" rx="12"/>
  <!-- DC side -->
  <text x="75" y="18" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">DC (Direct)</text>
  <!-- DC wire -->
  <line x1="15" y1="50" x2="140" y2="50" stroke="#1a3a2a" stroke-width="8" stroke-linecap="round"/>
  <!-- DC animated electrons — all going one way -->
  <circle r="5" fill="#10b981">
    <animateMotion dur="1.8s" repeatCount="indefinite" path="M 15 50 L 140 50"/>
  </circle>
  <circle r="5" fill="#10b981" opacity="0.8">
    <animateMotion dur="1.8s" begin="0.6s" repeatCount="indefinite" path="M 15 50 L 140 50"/>
  </circle>
  <circle r="5" fill="#10b981" opacity="0.6">
    <animateMotion dur="1.8s" begin="1.2s" repeatCount="indefinite" path="M 15 50 L 140 50"/>
  </circle>
  <text x="20" y="47" fill="#10b981" font-size="14" font-family="sans-serif">→</text>
  <text x="55" y="47" fill="#10b981" font-size="14" font-family="sans-serif">→</text>
  <text x="90" y="47" fill="#10b981" font-size="14" font-family="sans-serif">→</text>
  <text x="75" y="72" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">always one direction</text>
  <!-- Battery icon -->
  <rect x="16" y="85" width="50" height="30" rx="5" fill="#0a2a1a" stroke="#10b981" stroke-width="1.5"/>
  <text x="41" y="104" fill="#10b981" font-size="9" text-anchor="middle" font-family="sans-serif">🔋 Battery</text>
  <rect x="70" y="85" width="60" height="30" rx="5" fill="#0a2a1a" stroke="#10b981" stroke-width="1"/>
  <text x="100" y="101" fill="#10b981" font-size="8" text-anchor="middle" font-family="sans-serif">📱 Phone</text>
  <text x="100" y="111" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">3.7V DC</text>
  <!-- divider -->
  <line x1="153" y1="10" x2="153" y2="180" stroke="#2a2000" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- AC side -->
  <text x="225" y="18" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">AC (Alternating)</text>
  <!-- AC sine wave — animated drawing -->
  <path d="M 165 50 Q 180 30 195 50 Q 210 70 225 50 Q 240 30 255 50 Q 270 70 285 50" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-linecap="round">
    <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="1.5s" repeatCount="indefinite"/>
    <animate attributeName="stroke-dashoffset" values="0;0" dur="1.5s" repeatCount="indefinite"/>
  </path>
  <!-- AC direction arrows — alternating -->
  <text x="225" y="72" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">↔ reverses 50x/second</text>
  <!-- Wall socket + fan -->
  <rect x="163" y="85" width="50" height="30" rx="5" fill="#2a1a00" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="188" y="104" fill="#f59e0b" font-size="9" text-anchor="middle" font-family="sans-serif">🔌 230V AC</text>
  <rect x="217" y="85" width="70" height="30" rx="5" fill="#2a1a00" stroke="#f59e0b" stroke-width="1"/>
  <text x="252" y="101" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="sans-serif">🌀 Fan / Fridge</text>
  <text x="252" y="111" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">needs AC</text>
  <!-- Key insight box -->
  <rect x="15" y="130" width="270" height="46" rx="6" fill="rgba(255,140,0,0.06)" stroke="rgba(255,140,0,0.2)" stroke-width="1"/>
  <text x="150" y="148" fill="#ff8c00" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">Your phone CHARGER = AC → DC converter</text>
  <text x="150" y="162" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Wall gives 230V AC → charger converts → 5V DC for phone</text>
  <text x="150" y="174" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">That's why the charger gets warm — it's doing real work!</text>
</svg>`
          },
          {
            type: 'learn',
            icon: '🔌',
            en: { title: 'AC — Alternating Current', body: 'AC means electrons constantly reverse direction — back and forth, 50 times per second in India. This is what comes from your wall socket. It travels long distances efficiently.', list: ['Reverses direction 50 times/second (50 Hz in India)', 'Used in: fans, TVs, fridges, washing machines, geysers', '230V in India — powerful, can be dangerous. Always respect it!', 'Power stations transmit AC because it loses less energy over distance'] },
            hi: { title: 'AC — प्रत्यावर्ती धारा', body: 'AC का मतलब है electrons लगातार दिशा बदलते हैं — भारत में 1 सेकंड में 50 बार। Wall socket से यही आती है।', list: ['50 बार/सेकंड दिशा बदलती है (50 Hz)', 'उपयोग: पंखे, TV, फ्रिज, वॉशिंग मशीन, गीजर', 'भारत में 230V — शक्तिशाली, खतरनाक हो सकती है। सम्मान करें!', 'Power stations AC भेजते हैं क्योंकि लंबी दूरी में कम energy खोती है'] },
            rw: ['🌀 Ceiling fan: 230V AC', '📺 TV: 230V AC → internal DC converter', '🧊 Fridge: 230V AC compressor motor', '💡 Old bulb: 230V AC (new LEDs convert to DC inside)']
          },
          {
            type: 'fact',
            en: { text: "Thomas Edison (DC) and Nikola Tesla (AC) had a famous 'War of Currents' in the 1880s. Tesla and AC won — which is why your wall socket uses AC today!" },
            hi: { text: "Thomas Edison (DC) और Nikola Tesla (AC) के बीच 1880s में 'Current का युद्ध' हुआ। Tesla और AC जीते — इसीलिए आज आपके सॉकेट में AC है!" }
          },
          {
            type: 'quiz',
            en: { question: 'Which type of current does a smartphone battery use?', options: ['AC — Alternating Current', 'DC — Direct Current', 'Both AC and DC', 'Neither'], correct: 1, feedback: 'Batteries always produce DC. Your phone charger actually converts AC (from the wall) into DC for the battery!' },
            hi: { question: 'स्मार्टफोन की बैटरी किस प्रकार की धारा उपयोग करती है?', options: ['AC — प्रत्यावर्ती धारा', 'DC — सीधी धारा', 'दोनों', 'कोई नहीं'], correct: 1, feedback: 'बैटरी हमेशा DC देती है। आपका चार्जर AC को DC में बदलता है!' }
          },
          {
            type: 'complete', xp: 20,
            en: { msg: "Now you know the difference between DC and AC — and you understand why your charger exists! It converts dangerous AC from the wall into safe DC for your phone. Next: the components that make circuits possible." },
            hi: { msg: "अब आप DC और AC का फर्क जानते हैं। आपका charger AC को DC में बदलता है। अगला: वो पुर्जे जो circuits बनाते हैं।" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  2. SAFETY FIRST
  // ══════════════════════════════════════════════════════
  {
    id: 'safety',
    icon: '⚠️',
    color: '#ef4444',
    en: { name: 'Safety First', phase: 'Foundation' },
    hi: { name: 'पहले सुरक्षा', phase: 'बुनियाद' },
    lessons: [
      {
        en: { title: 'Electrical safety — what can hurt you', time: '5 min' },
        hi: { title: 'बिजली की सुरक्षा — क्या नुकसान कर सकता है', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Before we touch anything, we need to talk about safety. Electronics is a very safe hobby — if you follow the rules. The rules are simple. Ignore them and electricity can seriously hurt you. Let me teach you the rules." },
            hi: { text: "कुछ भी छूने से पहले, हमें सुरक्षा के बारे में बात करनी है। Electronics एक बहुत सुरक्षित शौक है — अगर आप नियमों का पालन करें। नियम सरल हैं।" }
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'What actually hurts you', body: 'It is not voltage that kills — it is CURRENT through your body. Your heart muscle runs on tiny electrical signals, and external current can disrupt it.', list: ['1mA = just noticeable tingle', '10mA = painful, can\'t let go', '100mA = potentially fatal (less than a phone charger draws!)', 'Household AC (230V) is very dangerous — never experiment with it', 'DC below 50V is generally safe for electronics hobbyists'] },
            hi: { title: 'असल में क्या नुकसान करता है', body: 'आपको voltage नहीं मारता — शरीर से गुजरने वाला CURRENT मारता है। आपका दिल छोटे electrical signals से चलता है, बाहरी current उसे बिगाड़ सकता है।', list: ['1mA = हल्की सनसनी', '10mA = दर्दनाक, हाथ नहीं छूट पाता', '100mA = जानलेवा हो सकता है', 'घर का AC (230V) — बहुत खतरनाक, कभी experiment न करें', '50V से कम DC — hobbyists के लिए generally सुरक्षित'] }
          },
          {
            type: 'learn',
            icon: '🔒',
            en: { title: 'The golden safety rules', body: 'Follow these always — no exceptions.', list: ['NEVER work on live AC circuits (wall socket power)', 'Always work with batteries or low-voltage DC (under 50V)', 'One hand in pocket when near any live circuit — breaks the path through your heart', 'Discharge capacitors before touching — they can hold charge even when unplugged', 'Never bypass fuses — they exist to protect you'] },
            hi: { title: 'सुरक्षा के सुनहरे नियम', body: 'इन्हें हमेशा follow करें — कोई अपवाद नहीं।', list: ['AC circuits पर कभी काम न करें (wall socket power)', 'हमेशा batteries या low-voltage DC से काम करें (50V से कम)', 'किसी भी live circuit के पास एक हाथ जेब में — दिल से रास्ता तोड़ता है', 'Capacitors को छूने से पहले discharge करें', 'Fuses को कभी bypass न करें'] }
          },
          {
            type: 'fact',
            en: { text: "A 9V battery can push enough current to cause a painful shock if you short it across wet skin. The same 9V powering your LED project is perfectly safe when used correctly. Context matters!" },
            hi: { text: "9V battery गीली त्वचा पर short होने पर दर्दनाक shock दे सकती है। वही 9V आपके LED project में बिल्कुल सुरक्षित है। संदर्भ मायने रखता है!" }
          },
          {
            type: 'quiz',
            en: { question: 'What is the dangerous thing about electricity — voltage or current?', options: ['Voltage alone kills', 'Current through the body is what causes injury', 'Both are equally dangerous always', 'Neither is dangerous under 100V'], correct: 1, feedback: 'Current through your body causes injury. Even low voltages can drive lethal current if resistance is low (wet hands, skin breaks). That\'s why 230V AC is so dangerous.' },
            hi: { question: 'बिजली में खतरनाक क्या है — voltage या current?', options: ['Voltage अकेले मारता है', 'शरीर से गुजरने वाला current नुकसान करता है', 'दोनों हमेशा समान रूप से खतरनाक हैं', '100V से कम कुछ भी खतरनाक नहीं'], correct: 1, feedback: 'शरीर से गुजरने वाला current नुकसान करता है। कम voltage भी जानलेवा current drive कर सकता है अगर resistance कम हो।' }
          },
          {
            type: 'complete', xp: 20,
            en: { msg: "Safety covered! The rules are simple: stay below 50V DC, never touch AC mains, one hand in pocket near live circuits. With these habits, electronics is completely safe and endlessly fun." },
            hi: { msg: "सुरक्षा cover हो गई! नियम सरल हैं: 50V DC से नीचे रहें, AC mains को कभी न छुएं। इन आदतों के साथ electronics पूरी तरह सुरक्षित है।" }
          }
        ]
      },
      {
        en: { title: 'Static electricity — the invisible enemy', time: '4 min' },
        hi: { title: 'Static electricity — अदृश्य दुश्मन', time: '4 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "You've felt static — the little zap when you touch a door handle after walking on carpet. That tiny zap? It can destroy a microchip instantly. One touch and a chip worth hundreds of rupees becomes worthless. Let me show you how to prevent this." },
            hi: { text: "आपने static feel किया है — carpet पर चलने के बाद door handle छूने पर छोटी सी zap। वो छोटी सी zap? एक microchip को तुरंत बर्बाद कर सकती है।" }
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'ESD — Electrostatic Discharge', body: 'When you walk around, your body builds up static charge. Touching a sensitive component discharges it through the chip — often destroying it silently.', list: ['You can\'t feel static below 3,000V — but chips die at 100V!', 'Symptoms: component works at first, fails later (latent damage)', 'Worst conditions: low humidity, synthetic clothing, carpet floors', 'Microcontrollers, ICs, MOSFETs — all very ESD-sensitive'] },
            hi: { title: 'ESD — Electrostatic Discharge', body: 'चलते समय शरीर पर static charge बनता है। Sensitive component छूने पर वो chip से discharge होता है — अक्सर खामोशी से नष्ट करता है।', list: ['3,000V से कम static feel नहीं होता — पर chips 100V पर मर जाते हैं!', 'Symptoms: पहले काम करता है, बाद में fail', 'खराब conditions: कम humidity, synthetic कपड़े, carpet', 'Microcontrollers, ICs, MOSFETs — ESD के प्रति बहुत sensitive'] }
          },
          {
            type: 'learn',
            icon: '🛡️',
            en: { title: 'How to prevent ESD damage', body: 'Simple habits protect your components completely.', list: ['Touch a metal object (or grounded surface) before handling ICs', 'Work on a wooden or anti-static mat — not carpet', 'Store ICs in the anti-static foam they come with', 'Anti-static wristband costs ₹50 and is worth it', 'Pick up components by the body, not the pins'] },
            hi: { title: 'ESD नुकसान कैसे रोकें', body: 'सरल आदतें आपके components को पूरी तरह बचाती हैं।', list: ['ICs handle करने से पहले metal छुएं', 'Wooden या anti-static mat पर काम करें — carpet नहीं', 'ICs को उनके anti-static foam में store करें', 'Anti-static wristband ₹50 में मिलता है — worth it', 'Components को body से उठाएं, pins से नहीं'] }
          },
          {
            type: 'quiz',
            en: { question: 'At what voltage does static electricity start killing microchips?', options: ['Only above 10,000V', 'Around 100V — which you cannot even feel', 'Exactly at 3,000V', 'Static cannot damage chips'], correct: 1, feedback: 'Chips can be damaged by as little as 100V of static — but you can\'t feel static below 3,000V. This means you can silently destroy a chip without knowing it!' },
            hi: { question: 'Static electricity किस voltage पर microchips को नुकसान पहुँचाना शुरू करती है?', options: ['केवल 10,000V से ऊपर', 'लगभग 100V — जो आप feel भी नहीं कर सकते', 'ठीक 3,000V पर', 'Static chips को damage नहीं कर सकती'], correct: 1, feedback: 'Chips 100V जितनी कम static से damage हो सकती हैं — लेकिन आप 3,000V से कम static feel नहीं कर सकते। यानी आप chip बर्बाद कर सकते हैं बिना जाने!' }
          },
          {
            type: 'complete', xp: 20,
            en: { msg: "ESD awareness unlocked! Touch metal before handling ICs, avoid carpet, use anti-static storage. These habits will save you from expensive, mysterious component failures. You're now a safe electronics hobbyist." },
            hi: { msg: "ESD awareness मिल गई! ICs handle करने से पहले metal छुएं, carpet से बचें। ये आदतें महंगी और रहस्यमय component failures से बचाएंगी।" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  3. ESSENTIAL COMPONENTS (was 2)
  // ══════════════════════════════════════════════════════
  {
    id: 'components',
    icon: '🔩',
    color: '#10b981',
    en: { name: 'Essential Components', phase: 'Components' },
    hi: { name: 'जरूरी पुर्जे', phase: 'पुर्जे' },
    lessons: [
      {
        en: { title: 'Resistor — the speed bump', time: '5 min' },
        hi: { title: 'Resistor — स्पीड ब्रेकर', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "The resistor is the most common component in all of electronics. You'll find billions of them in every phone and computer. Its job? Slow things down — in a very precise, controllable way." },
            hi: { text: "Resistor इलेक्ट्रॉनिक्स का सबसे आम पुर्जा है। हर फोन और कंप्यूटर में अरबों हैं। इसका काम? चीजों को धीमा करना — बहुत सटीक तरीके से।" }
          },
          {
            type: 'learn',
            icon: '🛑',
            en: { title: 'What does a resistor do?', body: 'A resistor resists (opposes) the flow of current. Think of it as a speed bump on a road — it slows down the traffic (current) without stopping it completely.', list: ['Controls how much current flows through a component', 'Protects sensitive parts (like LEDs) from burning out', 'Converts excess electrical energy into heat (your laptop bottom gets warm)', 'Measured in Ohms (Ω) — values from 1Ω to millions of Ω'] },
            hi: { title: 'Resistor क्या करता है?', body: 'Resistor current के प्रवाह को रोकता है। सड़क पर speed bump की तरह — यातायात (current) धीमा करता है, रोकता नहीं।', list: ['Components से कितना current जाए — control करता है', 'Sensitive parts (जैसे LEDs) को जलने से बचाता है', 'अतिरिक्त बिजली को गर्मी में बदलता है (laptop का गर्म होना)', 'Ohms (Ω) में मापा जाता है — 1Ω से लाखों Ω तक'] },
            rw: ['💡 LED circuit: 330Ω stops LED from burning', '🔊 Speaker volume: variable resistor (potentiometer)', '🌡️ Heater element: high resistance → lots of heat', '📻 Radio tuner: resistors set frequency']
          },
          {
            type: 'diagram',
            label: 'Resistor — Real vs Symbol',
            svg: `<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="140" fill="#1a1d35" rx="12"/>
  <!-- Real component -->
  <text x="75" y="20" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">REAL COMPONENT</text>
  <line x1="20" y1="70" x2="55" y2="70" stroke="#f59e0b" stroke-width="2.5"/>
  <rect x="55" y="56" width="40" height="28" rx="5" fill="#c2410c" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- color bands -->
  <rect x="63" y="56" width="4" height="28" fill="#b45309"/>
  <rect x="71" y="56" width="4" height="28" fill="#1e3a5f"/>
  <rect x="79" y="56" width="4" height="28" fill="#92400e"/>
  <rect x="87" y="56" width="4" height="28" fill="#fbbf24"/>
  <line x1="95" y1="70" x2="130" y2="70" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="75" y="105" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">Color bands</text>
  <text x="75" y="117" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">= value in Ω</text>
  <!-- divider -->
  <line x1="150" y1="15" x2="150" y2="130" stroke="#2e3260" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Symbol -->
  <text x="225" y="20" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">CIRCUIT SYMBOL</text>
  <line x1="165" y1="70" x2="195" y2="70" stroke="#a78bfa" stroke-width="2"/>
  <rect x="195" y="58" width="60" height="24" rx="4" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <line x1="255" y1="70" x2="285" y2="70" stroke="#a78bfa" stroke-width="2"/>
  <text x="225" y="100" fill="#a78bfa" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">R</text>
  <text x="225" y="115" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">Ω = Ohms</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real resistors — what they look like',
            src: '/img/resistors.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'These are real resistors. Notice the colored bands — each color represents a number. The bands tell you the resistance value in Ohms (Ω). The small cylindrical ones are the most common type you will use on a breadboard.' },
            hi: { caption: 'ये असली resistors हैं। रंगीन bands देखो — हर रंग एक number दर्शाता है। ये bands Ohms (Ω) में resistance value बताते हैं। छोटे cylindrical वाले breadboard पर सबसे ज्यादा use होते हैं।' }
          },
          {
            type: 'learn',
            icon: '🔄',
            en: { title: 'Resistors you may see — all types', body: 'Resistors come in many forms. The one you will use most on a breadboard is the through-hole type with color bands. But as you advance, you will see others.', list: ['Through-hole (axial): cylindrical body with color bands, 2 wire legs — most common for breadboards', 'Potentiometer (POT): a variable resistor with a rotating knob — used in volume controls, fan speed dials', 'LDR (Light Dependent Resistor): looks like a disc — resistance changes with light. Used in automatic street lights', 'SMD (Surface Mount): tiny black rectangles on modern PCBs — no legs, soldered flat onto the board', 'All types follow Ohm\'s Law — V = I × R'] },
            hi: { title: 'Resistors you may see — all types', body: 'Resistors कई रूपों में आते हैं। Breadboard पर सबसे ज्यादा through-hole type use होती है जिसमें color bands हों। जैसे-जैसे आगे बढ़ोगे, दूसरे भी दिखेंगे।', list: ['Through-hole (axial): color bands वाला cylindrical body, 2 wire legs — breadboard पर सबसे आम', 'Potentiometer (POT): rotating knob वाला variable resistor — volume controls, fan speed dials में', 'LDR (Light Dependent Resistor): disc जैसा दिखता है — light के साथ resistance बदलती है। automatic street lights में', 'SMD (Surface Mount): modern PCBs पर tiny काले rectangles — कोई legs नहीं, flat soldered', 'सभी types Ohm\'s Law follow करते हैं — V = I × R'] }
          },
          {
            type: 'fact',
            en: { text: "Resistors use a color code system — colored bands that tell you their value in Ohms. Brown-Black-Red = 1,000 Ω = 1 kΩ. Engineers memorize this like a language!" },
            hi: { text: "Resistors रंग कोड प्रणाली उपयोग करते हैं — रंगीन बैंड जो Ohms में उनकी value बताते हैं। Brown-Black-Red = 1,000 Ω = 1 kΩ। Engineers इसे भाषा की तरह याद करते हैं!" }
          },
          {
            type: 'hindi',
            en: { title: 'Key words' },
            hi: { title: 'मुख्य शब्द' },
            pairs: [
              { en: 'Resistor', hi: 'प्रतिरोधक' },
              { en: 'Resistance', hi: 'प्रतिरोध' },
              { en: 'Ohm (Ω)', hi: 'ओम — प्रतिरोध की इकाई' },
              { en: 'Color bands', hi: 'रंग बैंड — value बताते हैं' },
              { en: 'Limit current', hi: 'धारा सीमित करना' }
            ]
          },
          {
            type: 'quiz',
            en: { question: 'What is the main job of a resistor?', options: ['Store electrical energy', 'Amplify current', 'Resist / limit current flow', 'Convert AC to DC'], correct: 2, feedback: 'Correct! A resistor opposes current flow — like a speed bump. Without resistors, LEDs and other components would burn out from too much current.' },
            hi: { question: 'Resistor का मुख्य काम क्या है?', options: ['बिजली संग्रहीत करना', 'Current बढ़ाना', 'Current सीमित करना', 'AC को DC में बदलना'], correct: 2, feedback: 'सही! Resistor current को रोकता है। इसके बिना LEDs और दूसरे पुर्जे जल जाते।' }
          },
          {
            type: 'quiz',
            en: { question: 'In which unit is resistance measured?', options: ['Volts (V)', 'Amperes (A)', 'Watts (W)', 'Ohms (Ω)'], correct: 3, feedback: 'Resistance is measured in Ohms (Ω). Named after Georg Ohm, who discovered the relationship between voltage, current, and resistance.' },
            hi: { question: 'प्रतिरोध किस इकाई में मापा जाता है?', options: ['Volts (V)', 'Amperes (A)', 'Watts (W)', 'Ohms (Ω)'], correct: 3, feedback: 'प्रतिरोध Ohms (Ω) में मापा जाता है। Georg Ohm के नाम पर रखा गया।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "You now know what a resistor is, what it looks like, what its symbol is, and what it does. That's one of the most fundamental components in all of electronics. Keep going!" },
            hi: { msg: "अब आप जानते हैं resistor क्या है, कैसा दिखता है, इसका symbol क्या है, और यह क्या करता है। यह इलेक्ट्रॉनिक्स के सबसे बुनियादी पुर्जों में से एक है।" }
          }
        ]
      },
      {
        en: { title: 'Capacitor — the tiny rechargeable', time: '5 min' },
        hi: { title: 'Capacitor — छोटी रिचार्जेबल', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "A capacitor is like a tiny rechargeable battery — but it charges and discharges thousands of times faster. It's used everywhere: cameras, phones, power supplies, speakers. Let's understand it." },
            hi: { text: "Capacitor एक छोटी rechargeable battery की तरह है — लेकिन यह हजारों गुना तेज चार्ज और डिसचार्ज होती है। यह हर जगह उपयोग होती है: cameras, phones, speakers।" }
          },
          {
            type: 'learn',
            icon: '🪫',
            en: { title: 'What does a capacitor do?', body: 'A capacitor stores electrical charge and releases it quickly when needed. Think of it like a water balloon — fill it up (charge), then let it all out at once (discharge).', list: ['Stores charge temporarily (not like a battery — much shorter)', 'Releases energy very fast — used in camera flash!', 'Smooths out voltage fluctuations', 'Measured in Farads (F) — usually microfarads (µF)'] },
            hi: { title: 'Capacitor क्या करता है?', body: 'Capacitor विद्युत आवेश संग्रहीत करता है और जरूरत पड़ने पर तेजी से छोड़ता है। इसे पानी के गुब्बारे की तरह सोचो।', list: ['अस्थायी रूप से charge संग्रहीत करता है', 'बहुत तेज energy छोड़ता है — camera flash में उपयोग!', 'Voltage में उतार-चढ़ाव को कम करता है', 'Farads (F) में मापा जाता है — आमतौर पर µF'] }
          },
          {
            type: 'diagram',
            label: 'Capacitor — Real vs Symbol',
            svg: `<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="150" fill="#1a1d35" rx="12"/>
  <text x="75" y="20" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">REAL (Electrolytic)</text>
  <!-- cylindrical cap -->
  <ellipse cx="75" cy="55" rx="22" ry="8" fill="#1a3a5f" stroke="#10b981" stroke-width="1.5"/>
  <rect x="53" y="55" width="44" height="50" fill="#1a3a5f" stroke="#10b981" stroke-width="1.5"/>
  <ellipse cx="75" cy="105" rx="22" ry="8" fill="#0f2a4f" stroke="#10b981" stroke-width="1.5"/>
  <!-- stripe -->
  <rect x="53" y="55" width="10" height="50" fill="#0f2a4f" rx="2"/>
  <text x="58" y="85" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif" transform="rotate(-90,58,85)">-</text>
  <!-- leads -->
  <line x1="68" y1="105" x2="68" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <line x1="82" y1="105" x2="82" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <text x="68" y="142" fill="#10b981" font-size="9" text-anchor="middle" font-family="sans-serif">-</text>
  <text x="82" y="142" fill="#10b981" font-size="9" text-anchor="middle" font-family="sans-serif">+</text>
  <!-- divider -->
  <line x1="150" y1="15" x2="150" y2="145" stroke="#2e3260" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Symbol -->
  <text x="225" y="20" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">CIRCUIT SYMBOL</text>
  <line x1="165" y1="75" x2="210" y2="75" stroke="#a78bfa" stroke-width="2"/>
  <line x1="210" y1="55" x2="210" y2="95" stroke="#a78bfa" stroke-width="3"/>
  <line x1="218" y1="55" x2="218" y2="95" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="0"/>
  <rect x="216" y="55" width="4" height="40" fill="#a78bfa"/>
  <line x1="222" y1="75" x2="270" y2="75" stroke="#a78bfa" stroke-width="2"/>
  <text x="225" y="115" fill="#a78bfa" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">C</text>
  <text x="225" y="128" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">µF = microfarads</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real capacitors — different types',
            src: '/img/capacitors.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'Different types of capacitors. The tall blue/black cylinders are electrolytic capacitors (common in power circuits). The small round/disc ones are ceramic capacitors. The orange rectangular ones are film capacitors. All store charge — just different amounts and speeds.' },
            hi: { caption: 'अलग-अलग प्रकार के capacitors। लंबे नीले/काले cylinder electrolytic capacitors हैं (power circuits में आम)। छोटे गोल disc वाले ceramic capacitors हैं। नारंगी आयताकार film capacitors हैं। सभी charge store करते हैं — बस मात्रा और speed अलग।' }
          },
          {
            type: 'learn',
            icon: '🔄',
            en: { title: 'Capacitors you may see — all types', body: 'Capacitors look very different depending on their type and size. The key thing that varies is: do they have polarity (+ and −) or not?', list: ['Electrolytic (cylindrical): has + and − polarity MUST go in correct direction — used in power supplies', 'Ceramic disc: small, flat, no polarity, looks like a tiny disc — very common on all boards', 'Film capacitor: orange/yellow rectangular block — high quality, no polarity', 'Tantalum: tiny teardrop shape with a stripe — has polarity, used in phones/laptops', 'SMD: tiny, flat, no leads — on modern PCBs', 'RULE: Electrolytic caps have polarity — always check the + marking before inserting!'] },
            hi: { title: 'Capacitors you may see — all types', body: 'Capacitors अपने type और size के हिसाब से बहुत अलग दिखते हैं। सबसे important बात: क्या इनमें polarity (+ और −) है या नहीं?', list: ['Electrolytic (cylindrical): + और − polarity है, सही direction में लगाना MUST है — power supplies में', 'Ceramic disc: छोटा, flat, कोई polarity नहीं, tiny disc जैसा — सभी boards पर बहुत आम', 'Film capacitor: orange/yellow rectangular block — high quality, कोई polarity नहीं', 'Tantalum: tiny teardrop shape with stripe — polarity है, phones/laptops में', 'SMD: tiny, flat, कोई leads नहीं — modern PCBs पर', 'नियम: Electrolytic caps में polarity होती है — insert करने से पहले + marking check करो!'] }
          },
          {
            type: 'fact',
            en: { text: "When you take a photo with flash, a capacitor charges up in a few seconds and then releases ALL its energy in less than 1 millisecond — that's 1/1000th of a second — to create that bright burst of light!" },
            hi: { text: "जब आप flash के साथ photo लेते हैं, एक capacitor कुछ सेकंड में charge होता है और फिर 1 millisecond से भी कम में सारी energy छोड़ता है — यही वो चमकदार flash है!" }
          },
          {
            type: 'quiz',
            en: { question: 'A capacitor is best described as:', options: ['A device that generates electricity', 'A device that stores and releases charge quickly', 'A device that limits current permanently', 'A device that converts AC to DC'], correct: 1, feedback: 'Exactly! A capacitor is a temporary charge store — much faster charge/discharge than a battery. Used in smoothing, filtering, and fast energy release.' },
            hi: { question: 'Capacitor को सबसे अच्छे से इस तरह बताया जाता है:', options: ['बिजली उत्पन्न करने वाला उपकरण', 'Charge तेजी से संग्रहीत और छोड़ने वाला उपकरण', 'Current को स्थायी रूप से सीमित करने वाला', 'AC को DC में बदलने वाला'], correct: 1, feedback: 'बिल्कुल सही! Capacitor एक अस्थायी charge store है — battery से बहुत तेज।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "You've learned the capacitor — one of the most versatile components in electronics. Two down, many more to come. You're building a solid foundation!" },
            hi: { msg: "आपने capacitor सीखा — इलेक्ट्रॉनिक्स के सबसे बहुमुखी पुर्जों में से एक। आगे और भी हैं। आप एक मजबूत नींव बना रहे हैं!" }
          }
        ]
      },
      {
        en: { title: 'LED — light from electricity', time: '4 min' },
        hi: { title: 'LED — बिजली से रोशनी', time: '4 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "LED stands for Light Emitting Diode. It's probably the component you'll use most in your first projects — and it's the best way to see electricity at work. Let's understand it properly." },
            hi: { text: "LED का मतलब है Light Emitting Diode। यह शायद वो पुर्जा है जिसे आप अपने पहले projects में सबसे ज्यादा इस्तेमाल करेंगे।" }
          },
          {
            type: 'learn',
            icon: '💡',
            en: { title: 'What is an LED?', body: 'An LED converts electrical energy directly into light. It has two legs — longer is positive (+), shorter is negative (−). It only works in ONE direction.', list: ['Longer leg = Anode (+) = positive side', 'Shorter leg = Cathode (−) = negative side', 'ALWAYS use a resistor with an LED — or it burns!', 'Available in red, green, blue, white, yellow, IR, UV'] },
            hi: { title: 'LED क्या है?', body: 'LED बिजली को सीधे प्रकाश में बदलती है। इसके दो पैर होते हैं — लंबा positive (+), छोटा negative (−)।', list: ['लंबा पैर = Anode (+) = positive', 'छोटा पैर = Cathode (−) = negative', 'LED के साथ हमेशा resistor लगाएं — वरना जल जाएगी!', 'लाल, हरा, नीला, सफेद, पीला में उपलब्ध'] }
          },
          {
            type: 'diagram',
            label: 'LED — Real, Symbol & First Circuit',
            svg: `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="160" fill="#1a1d35" rx="12"/>
  <!-- LED real -->
  <text x="50" y="18" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">REAL LED</text>
  <circle cx="50" cy="60" r="18" fill="#1a2a1a" stroke="#10b981" stroke-width="1.5"/>
  <line x1="44" y1="78" x2="44" y2="105" stroke="#f59e0b" stroke-width="2"/>
  <line x1="56" y1="78" x2="56" y2="100" stroke="#f59e0b" stroke-width="2"/>
  <text x="44" y="118" fill="#ef4444" font-size="9" text-anchor="middle" font-family="sans-serif">−</text>
  <text x="56" y="113" fill="#10b981" font-size="9" text-anchor="middle" font-family="sans-serif">+</text>
  <text x="44" y="128" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">short</text>
  <text x="56" y="123" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">long</text>
  <!-- light rays -->
  <line x1="62" y1="42" x2="72" y2="32" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="68" y1="52" x2="80" y2="46" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="65" y1="36" x2="78" y2="30" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/>
  <!-- divider -->
  <line x1="100" y1="10" x2="100" y2="150" stroke="#2e3260" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Symbol -->
  <text x="140" y="18" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">SYMBOL</text>
  <line x1="110" y1="65" x2="125" y2="65" stroke="#a78bfa" stroke-width="2"/>
  <polygon points="125,50 125,80 148,65" fill="#10b981" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="148" y1="50" x2="148" y2="80" stroke="#a78bfa" stroke-width="2"/>
  <line x1="148" y1="65" x2="165" y2="65" stroke="#a78bfa" stroke-width="2"/>
  <line x1="153" y1="50" x2="162" y2="41" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="158" y1="55" x2="167" y2="46" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <!-- divider -->
  <line x1="185" y1="10" x2="185" y2="150" stroke="#2e3260" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Simple circuit -->
  <text x="245" y="18" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="sans-serif">FIRST CIRCUIT</text>
  <!-- battery -->
  <rect x="196" y="50" width="20" height="36" rx="4" fill="#1e2040" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="206" y="72" fill="#a78bfa" font-size="7" text-anchor="middle" font-family="sans-serif">9V</text>
  <line x1="206" y1="50" x2="206" y2="40" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="206" y1="86" x2="206" y2="96" stroke="#7c3aed" stroke-width="1.5"/>
  <!-- top wire -->
  <line x1="206" y1="40" x2="290" y2="40" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- resistor -->
  <rect x="222" y="33" width="30" height="14" rx="3" fill="#c2410c" stroke="#f59e0b" stroke-width="1"/>
  <text x="237" y="44" fill="#fff" font-size="7" text-anchor="middle" font-family="sans-serif">330Ω</text>
  <!-- right wire + LED -->
  <line x1="290" y1="40" x2="290" y2="55" stroke="#f59e0b" stroke-width="1.5"/>
  <polygon points="283,55 297,55 290,70" fill="#10b981" stroke="#10b981" stroke-width="1"/>
  <line x1="283" y1="70" x2="297" y2="70" stroke="#10b981" stroke-width="2"/>
  <line x1="290" y1="70" x2="290" y2="96" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- bottom wire -->
  <line x1="206" y1="96" x2="290" y2="96" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="245" y="130" fill="#10b981" font-size="8" text-anchor="middle" font-family="sans-serif">Battery → Resistor → LED</text>
  <text x="245" y="143" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Your first real circuit!</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real LEDs — all colors',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Five_LED_colors.jpg/330px-Five_LED_colors.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'LEDs come in many colors — red, green, blue, white, yellow. The transparent/clear ones can show any color based on the semiconductor inside. The flat side on the bottom of the lens tells you which leg is negative (cathode).' },
            hi: { caption: 'LEDs कई रंगों में आती हैं — लाल, हरा, नीला, सफेद, पीला। पारदर्शी वाली अंदर के semiconductor के हिसाब से रंग दिखाती है। लेंस के नीचे flat side negative (cathode) पैर की तरफ होती है।' }
          },
          {
            type: 'learn',
            icon: '🔄',
            en: { title: 'LEDs you may see — all types and colors', body: 'LEDs come in many sizes, shapes and colors. But they all share one rule: ALWAYS use a current-limiting resistor or the LED will burn instantly.', list: ['5mm LED: standard round, flat bottom, 2 legs (long=+, short=−) — most common', '3mm LED: smaller version, same rules', 'SMD LED: flat, no legs, soldered directly on PCB — used in phone screens, indicator lights', 'RGB LED: 3 LEDs in one package (Red, Green, Blue) — 4 legs, can mix any color', 'IR LED: looks like a clear LED but emits invisible infrared light — used in TV remotes', 'High-brightness LED: very bright, needs more current — used in flashlights, LED bulbs', 'ALL types burn without a resistor — 330Ω for 9V battery is the universal beginner formula'] },
            hi: { title: 'LEDs you may see — all types and colors', body: 'LEDs कई sizes, shapes और colors में आती हैं। लेकिन सभी एक rule share करती हैं: हमेशा current-limiting resistor लगाओ वरना LED तुरंत जल जाएगी।', list: ['5mm LED: standard round, flat bottom, 2 legs (long=+, short=−) — सबसे आम', '3mm LED: छोटा version, same rules', 'SMD LED: flat, no legs, PCB पर directly soldered — phone screens, indicator lights में', 'RGB LED: एक में 3 LEDs (Red, Green, Blue) — 4 legs, कोई भी color mix कर सकते हैं', 'IR LED: clear LED जैसी दिखती है पर invisible infrared light emit करती है — TV remotes में', 'High-brightness LED: बहुत bright, ज्यादा current चाहिए — flashlights, LED bulbs में', 'सभी types resistor के बिना जलती हैं — 9V battery के लिए 330Ω universal beginner formula'] }
          },
          {
            type: 'quiz',
            en: { question: 'Why must you always use a resistor with an LED?', options: ['To make it brighter', 'To limit current and prevent burning', 'To reverse the current direction', 'To store extra charge'], correct: 1, feedback: 'Without a resistor, too much current flows through the LED and it burns out instantly. A 330Ω resistor with a 9V battery is the classic beginner LED circuit.' },
            hi: { question: 'LED के साथ हमेशा resistor क्यों लगाते हैं?', options: ['ज्यादा चमक के लिए', 'Current सीमित करने के लिए — नहीं तो जल जाएगी', 'Current की दिशा बदलने के लिए', 'अतिरिक्त charge संग्रहीत करने के लिए'], correct: 1, feedback: 'बिना resistor के बहुत ज्यादा current LED को तुरंत जला देती है। 330Ω resistor + 9V battery = beginners का classic LED circuit।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "LED — done! You now know the most beginner-friendly component in electronics. In the projects module, you'll build an actual LED circuit. Can't wait!" },
            hi: { msg: "LED — पूरी! आप अब electronics का सबसे beginner-friendly पुर्जा जानते हैं। Projects module में आप एक असली LED circuit बनाएंगे!" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  4. TRANSISTORS & ICs
  // ══════════════════════════════════════════════════════
  {
    id: 'transistors',
    icon: '🔲',
    color: '#8b5cf6',
    en: { name: 'Transistors & ICs', phase: 'Components' },
    hi: { name: 'Transistors और ICs', phase: 'पुर्जे' },
    lessons: [
      {
        en: { title: 'Transistor — the switch that changed the world', time: '6 min' },
        hi: { title: 'Transistor — जिसने दुनिया बदल दी', time: '6 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "The transistor is the most important invention in human history. Not a joke. Your phone has about 15 billion transistors in it. They're the reason computers exist. And they work on a simple principle — a small current controls a large current." },
            hi: { text: "Transistor मानव इतिहास का सबसे महत्वपूर्ण आविष्कार है। मजाक नहीं। आपके फोन में लगभग 15 अरब transistors हैं। एक सरल सिद्धांत: छोटा current बड़े current को नियंत्रित करता है।" }
          },
          {
            type: 'learn',
            icon: '🎛️',
            en: { title: 'What does a transistor do?', body: 'A transistor has 3 legs: Base, Collector, Emitter. A tiny current into the Base controls a much larger current between Collector and Emitter.', list: ['Acts as a switch — Base on → current flows through C-E', 'Acts as an amplifier — tiny signal in, big signal out', 'NPN type: most common. Current flows when Base gets +voltage', 'The BC547 is the classic beginner NPN transistor (₹2 each!)', 'Used in: radios, amplifiers, motor drivers, microcontrollers'] },
            hi: { title: 'Transistor क्या करता है?', body: 'Transistor के 3 पैर होते हैं: Base, Collector, Emitter। Base में छोटा current, C-E के बीच बड़े current को नियंत्रित करता है।', list: ['Switch की तरह — Base on → C-E से current बहती है', 'Amplifier की तरह — छोटा signal in, बड़ा signal out', 'NPN type: सबसे आम। Base को +voltage मिले तो on', 'BC547 = classic beginner NPN transistor (₹2 प्रत्येक!)', 'Radio, amplifier, motor driver में उपयोग'] }
          },
          {
            type: 'diagram',
            label: 'NPN Transistor — Symbol & Switch',
            svg: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="170" fill="#1a1d35" rx="12"/>
  <!-- Real BC547 -->
  <text x="60" y="18" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">BC547 (real)</text>
  <rect x="35" y="28" width="50" height="80" rx="8" fill="#1c1c1e" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="60" y="72" fill="#c4b5fd" font-size="8" text-anchor="middle" font-family="sans-serif">BC547</text>
  <!-- 3 legs -->
  <line x1="60" y1="108" x2="45" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <line x1="60" y1="108" x2="60" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <line x1="60" y1="108" x2="75" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <text x="42" y="145" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">C</text>
  <text x="60" y="145" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">B</text>
  <text x="78" y="145" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">E</text>
  <text x="42" y="157" fill="#ef4444" font-size="7" text-anchor="middle" font-family="sans-serif">Col</text>
  <text x="60" y="157" fill="#10b981" font-size="7" text-anchor="middle" font-family="sans-serif">Base</text>
  <text x="78" y="157" fill="#60a5fa" font-size="7" text-anchor="middle" font-family="sans-serif">Em</text>
  <!-- divider -->
  <line x1="130" y1="10" x2="130" y2="165" stroke="#2e3260" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Symbol -->
  <text x="210" y="18" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">NPN Symbol</text>
  <!-- collector line -->
  <line x1="210" y1="30" x2="210" y2="65" stroke="#ef4444" stroke-width="2"/>
  <!-- base line -->
  <line x1="155" y1="85" x2="185" y2="85" stroke="#10b981" stroke-width="2"/>
  <!-- vertical bar -->
  <line x1="185" y1="60" x2="185" y2="110" stroke="#c4b5fd" stroke-width="3"/>
  <!-- emitter diagonal with arrow -->
  <line x1="185" y1="100" x2="210" y2="128" stroke="#60a5fa" stroke-width="2"/>
  <polygon points="210,128 200,120 216,120" fill="#60a5fa"/>
  <!-- emitter line down -->
  <line x1="210" y1="128" x2="210" y2="150" stroke="#60a5fa" stroke-width="2"/>
  <!-- collector connect -->
  <line x1="185" y1="65" x2="210" y2="65" stroke="#ef4444" stroke-width="2"/>
  <!-- labels -->
  <text x="220" y="50" fill="#ef4444" font-size="9" font-family="sans-serif">C</text>
  <text x="145" y="90" fill="#10b981" font-size="9" font-family="sans-serif">B</text>
  <text x="220" y="145" fill="#60a5fa" font-size="9" font-family="sans-serif">E</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real transistors — BC547 and others',
            src: '/img/transistors.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'Different transistors. The small black D-shaped ones (TO-92 package) are the most common — like BC547 and 2N2222 which you will use in projects. The larger metal-can ones (TO-18/TO-39) are older types. All have 3 legs: Base, Collector, Emitter.' },
            hi: { caption: 'अलग-अलग transistors। छोटे काले D-shape वाले (TO-92 package) सबसे आम हैं — जैसे BC547 और 2N2222 जो आप projects में use करेंगे। बड़े metal-can वाले पुराने type हैं। सभी के 3 पैर: Base, Collector, Emitter।' }
          },
          {
            type: 'learn',
            icon: '🔄',
            en: { title: 'Transistors you may see — packages and types', body: 'The transistor symbol and function is universal, but the physical package (shape it comes in) varies a lot. The same NPN transistor principle works in all of them.', list: ['TO-92: small, D-shaped black plastic, 3 legs — BC547, 2N2222, most common for beginners (₹2 each)', 'TO-220: larger, with a metal tab for heatsink — used when more power is needed (TIP31, BD139)', 'TO-3: large metal can — old power transistors, still found in audio amplifiers', 'SOT-23: tiny SMD package, 3 flat legs — in phones, laptops', 'MOSFET: a different type of transistor — controlled by voltage not current. IRFZ44N is a common power MOSFET', 'All behave the same way: small signal controls larger current — whether TO-92 or TO-220'] },
            hi: { title: 'Transistors you may see — packages and types', body: 'Transistor symbol और function universal है, लेकिन physical package (जिस shape में आता है) बहुत vary करता है। NPN transistor principle सभी में एक जैसा काम करता है।', list: ['TO-92: छोटा, D-shaped काला plastic, 3 legs — BC547, 2N2222, beginners के लिए सबसे आम (₹2 प्रत्येक)', 'TO-220: बड़ा, metal tab के साथ heatsink के लिए — ज्यादा power चाहिए तो (TIP31, BD139)', 'TO-3: बड़ा metal can — पुराने power transistors, audio amplifiers में अभी भी', 'SOT-23: tiny SMD package, 3 flat legs — phones, laptops में', 'MOSFET: एक अलग प्रकार का transistor — current नहीं voltage से control होता है। IRFZ44N common power MOSFET है', 'सभी एक जैसे behave करते हैं: छोटा signal बड़े current को control करता है'] }
          },
          {
            type: 'fact',
            en: { text: "Intel's latest chips contain over 100 billion transistors on a piece of silicon smaller than your fingernail. Each transistor is just a few nanometers wide — about 50,000 times thinner than a human hair!" },
            hi: { text: "Intel के latest chips में आपके नाखून से छोटे silicon पर 100 अरब से ज्यादा transistors हैं। हर transistor मात्र कुछ nanometers चौड़ा है — human hair से 50,000 गुना पतला!" }
          },
          {
            type: 'hindi',
            en: { title: 'Key words' },
            hi: { title: 'मुख्य शब्द' },
            pairs: [
              { en: 'Transistor', hi: 'ट्रांजिस्टर — switch/amplifier' },
              { en: 'Base', hi: 'आधार — control pin' },
              { en: 'Collector', hi: 'संग्राहक — main current in' },
              { en: 'Emitter', hi: 'उत्सर्जक — main current out' },
              { en: 'NPN', hi: 'NPN — most common type' }
            ]
          },
          {
            type: 'quiz',
            en: { question: 'In an NPN transistor, which pin controls the others?', options: ['Collector', 'Emitter', 'Base', 'All three equally'], correct: 2, feedback: 'The Base is the control pin. A small current into the Base allows a much larger current to flow from Collector to Emitter. That\'s how it works as both a switch and an amplifier.' },
            hi: { question: 'NPN transistor में कौन सा pin दूसरों को control करता है?', options: ['Collector', 'Emitter', 'Base', 'तीनों समान रूप से'], correct: 2, feedback: 'Base control pin है। Base में छोटा current → Collector से Emitter तक बड़ा current। यही switch और amplifier दोनों की तरह काम करता है।' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: "You understand transistors! This is the component that powers all modern electronics — from the radio in your parents' time to the phone in your pocket. Everything runs on the same principle you just learned." },
            hi: { msg: "आप transistors समझते हैं! यही वो पुर्जा है जो सभी modern electronics चलाता है। आपके माता-पिता के समय के radio से लेकर आपके phone तक — सब उसी सिद्धांत पर।" }
          }
        ]
      },
      {
        en: { title: 'Integrated Circuits — 5 types you must know', time: '10 min' },
        hi: { title: 'Integrated Circuits — 5 types जो जानने जरूरी हैं', time: '10 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "An Integrated Circuit — IC — is a tiny machine. Give it power and an input signal, and it gives you a useful output. One small black chip can contain thousands of transistors, resistors, and capacitors — all working together. Today I will show you the 5 types of ICs you will see in every device you ever repair or build." },
            hi: { text: "Integrated Circuit — IC — एक tiny machine है। इसे power और input signal दो, और यह useful output देती है। एक छोटी काली chip में हजारों transistors, resistors और capacitors हो सकते हैं — सब एक साथ काम करते हुए। आज मैं आपको 5 types की ICs दिखाऊँगा जो हर device में मिलती हैं।" }
          },
          {
            type: 'learn',
            icon: '🔲',
            en: { title: 'What is inside an IC?', body: 'An IC is a miniature circuit etched onto a tiny slice of silicon. The black plastic body just protects it. Think of it like a small automatic machine: Power + Input → IC → Output.', list: ['Transistors: tiny electronic switches (thousands inside one chip)', 'Resistors: limit current flow', 'Capacitors: store and release charge', 'Diodes: allow current in one direction', 'Metal tracks: connect everything together — like ultra-tiny wires', 'A modern phone processor has 10 BILLION transistors in one chip!'] },
            hi: { title: 'IC के अंदर क्या है?', body: 'IC एक tiny circuit है जो silicon के टुकड़े पर etched है। काला plastic body सिर्फ रक्षा करती है। एक छोटी machine की तरह सोचो: Power + Input → IC → Output।', list: ['Transistors: tiny electronic switches (एक chip में हजारों)', 'Resistors: current flow सीमित करते हैं', 'Capacitors: charge store करते हैं', 'Diodes: एक दिशा में current', 'Metal tracks: सब जोड़ते हैं — ultra-tiny wires', 'Modern phone processor में 1000 करोड़ transistors — एक chip में!'] }
          },
          {
            type: 'photo',
            label: 'LM358 — Analog IC (Op-Amp)',
            src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/LM358N.jpg',
            credit: 'Wikimedia Commons (CC-BY)',
            en: { caption: 'Type 1: ANALOG IC — The LM358 is an Op-Amp (Operational Amplifier). Analog ICs process continuously changing signals — like sound, temperature, or light. Used in: audio amplifiers, sensor circuits, microphone pre-amps. This is the type you will find connected to sensors in security systems and home automation.' },
            hi: { caption: 'Type 1: ANALOG IC — LM358 एक Op-Amp (Operational Amplifier) है। Analog ICs continuously बदलते signals process करती हैं — जैसे sound, temperature, या light। Use: audio amplifiers, sensor circuits। Security systems और home automation में sensors के साथ मिलेगी।' }
          },
          {
            type: 'photo',
            label: '7400 — Digital IC (Logic Gate)',
            src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/7400.jpg',
            credit: 'Wikimedia Commons (CC-BY)',
            en: { caption: 'Type 2: DIGITAL IC — The 7400 is a NAND Gate. Digital ICs work with only two states: 0 (off) and 1 (on). Used in: computers, calculators, digital clocks, any device that processes binary data. All computers, phones, and microcontrollers are built from billions of these logic gates.' },
            hi: { caption: 'Type 2: DIGITAL IC — 7400 एक NAND Gate है। Digital ICs केवल दो states के साथ काम करती हैं: 0 (off) और 1 (on)। Use: computers, calculators, digital clocks। सभी computers, phones और microcontrollers अरबों logic gates से बने हैं।' }
          },
          {
            type: 'photo',
            label: 'NE555 — Timer IC',
            src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/NE555P.jpg',
            credit: 'Wikimedia Commons (CC-BY)',
            en: { caption: 'Type 3: TIMER IC — The NE555 is the world\'s most popular IC ever made. Over 1 billion made every year since 1972! It creates time delays, pulses, and oscillations. Used in: LED flashers, buzzers, alarms, PWM motor control, pulse generators. Cost: about ₹5 in Indian markets.' },
            hi: { caption: 'Type 3: TIMER IC — NE555 दुनिया की सबसे popular IC है। 1972 से हर साल 1 अरब से ज्यादा बनती है! Time delays, pulses और oscillations बनाती है। Use: LED flashers, buzzers, alarms, PWM motor control। कीमत: भारतीय बाजार में लगभग ₹5।' }
          },
          {
            type: 'photo',
            label: '7805 — Voltage Regulator IC',
            src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Voltage_regulator_7805.jpg',
            credit: 'Wikimedia Commons (CC-BY)',
            en: { caption: 'Type 4: VOLTAGE REGULATOR IC — The 7805 gives a stable 5V output from any input between 7V and 35V. It is the "pressure controller" of your circuit. Used in: power supplies, Arduino circuits, sensor modules. Every USB charger and voltage converter uses a similar chip. 7805 = 5V, 7812 = 12V, 7815 = 15V.' },
            hi: { caption: 'Type 4: VOLTAGE REGULATOR IC — 7805 किसी भी 7V-35V input से stable 5V output देती है। यह circuit का "pressure controller" है। Use: power supplies, Arduino circuits, sensor modules। हर USB charger में ऐसी ही chip होती है। 7805=5V, 7812=12V, 7815=15V।' }
          },
          {
            type: 'photo',
            label: 'ATmega328P — Microcontroller IC',
            src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/ATmega328P-PU.jpg',
            credit: 'Wikimedia Commons (CC-BY)',
            en: { caption: 'Type 5: MICROCONTROLLER IC — The ATmega328P is the brain of Arduino Uno. A microcontroller is a complete tiny computer: processor + memory + input/output — all in one chip. You can program it! Used in: robots, washing machines, remote controls, Arduino projects, industrial automation. The chip inside every TV remote is a microcontroller.' },
            hi: { caption: 'Type 5: MICROCONTROLLER IC — ATmega328P, Arduino Uno का brain है। Microcontroller एक complete tiny computer है: processor + memory + input/output — एक chip में। इसे program किया जा सकता है! Use: robots, washing machines, TV remotes, Arduino projects। हर TV remote के अंदर एक microcontroller होता है।' }
          },
          {
            type: 'diagram',
            label: 'NE555 Timer IC — Pin Layout (DIP-8)',
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="200" fill="#1a1d35" rx="12"/>
  <text x="150" y="18" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">DIP package — notch/dot marks Pin 1 — count counterclockwise</text>
  <!-- IC body -->
  <rect x="95" y="30" width="110" height="120" rx="6" fill="#1c1c1e" stroke="#8b5cf6" stroke-width="2"/>
  <text x="150" y="82" fill="#c4b5fd" font-size="16" font-weight="bold" text-anchor="middle" font-family="monospace">NE555</text>
  <text x="150" y="100" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="monospace">TIMER</text>
  <!-- notch at top -->
  <path d="M125,30 Q150,20 175,30" fill="#1a1d35" stroke="#8b5cf6" stroke-width="1.5"/>
  <!-- pin 1 dot -->
  <circle cx="105" cy="42" r="4" fill="#f59e0b"/>
  <text x="112" y="46" fill="#f59e0b" font-size="8" font-family="sans-serif">●pin1</text>
  <!-- Left pins 1-4 -->
  <line x1="55" y1="48" x2="95" y2="48" stroke="#f59e0b" stroke-width="2"/>
  <line x1="55" y1="70" x2="95" y2="70" stroke="#f59e0b" stroke-width="2"/>
  <line x1="55" y1="92" x2="95" y2="92" stroke="#ef4444" stroke-width="2.5"/>
  <line x1="55" y1="114" x2="95" y2="114" stroke="#f59e0b" stroke-width="2"/>
  <!-- Right pins 5-8 -->
  <line x1="205" y1="48" x2="245" y2="48" stroke="#10b981" stroke-width="2"/>
  <line x1="205" y1="70" x2="245" y2="70" stroke="#10b981" stroke-width="2"/>
  <line x1="205" y1="92" x2="245" y2="92" stroke="#10b981" stroke-width="2"/>
  <line x1="205" y1="114" x2="245" y2="114" stroke="#f59e0b" stroke-width="2.5"/>
  <!-- Pin labels left -->
  <text x="48" y="52" fill="#9ba3c8" font-size="8" text-anchor="end" font-family="sans-serif">1 GND (−)</text>
  <text x="48" y="74" fill="#9ba3c8" font-size="8" text-anchor="end" font-family="sans-serif">2 TRIGGER</text>
  <text x="48" y="96" fill="#ef4444" font-size="8" text-anchor="end" font-family="sans-serif">3 OUTPUT</text>
  <text x="48" y="118" fill="#9ba3c8" font-size="8" text-anchor="end" font-family="sans-serif">4 RESET</text>
  <!-- Pin labels right -->
  <text x="252" y="52" fill="#f59e0b" font-size="8" font-family="sans-serif">VCC (+) 8</text>
  <text x="252" y="74" fill="#9ba3c8" font-size="8" font-family="sans-serif">DISCHARGE 7</text>
  <text x="252" y="96" fill="#9ba3c8" font-size="8" font-family="sans-serif">THRESHOLD 6</text>
  <text x="252" y="118" fill="#9ba3c8" font-size="8" font-family="sans-serif">CONTROL 5</text>
  <text x="150" y="168" fill="#8b5cf6" font-size="9" text-anchor="middle" font-family="sans-serif">8 pins total — contains 25 transistors inside</text>
  <text x="150" y="184" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Pin 8 = power (+), Pin 1 = ground (−), Pin 3 = output</text>
</svg>`
          },
          {
            type: 'learn',
            icon: '📦',
            en: { title: 'IC packages — what shape they come in', body: 'The same IC circuit can come in different physical packages. You need to recognise these when looking at a PCB.', list: ['DIP (Dual In-line Package): two rows of pins — works on breadboard. Most common for learning.', 'SOIC (Small Outline IC): smaller surface-mount version of DIP — on consumer PCBs', 'QFP (Quad Flat Package): pins on all 4 sides — microcontrollers, phone chips', 'BGA (Ball Grid Array): tiny solder balls underneath — no visible pins — phone processors, RAM chips', 'The chip function is the same in all packages — only the physical shape changes'] },
            hi: { title: 'IC packages — किस shape में आती हैं', body: 'Same IC circuit अलग-अलग physical packages में आ सकती है। PCB देखते समय इन्हें पहचानना जरूरी है।', list: ['DIP (Dual In-line Package): दो rows of pins — breadboard पर काम करता है। Learning के लिए सबसे common।', 'SOIC (Small Outline IC): DIP का छोटा surface-mount version — consumer PCBs पर', 'QFP (Quad Flat Package): चारों sides पर pins — microcontrollers, phone chips', 'BGA (Ball Grid Array): नीचे tiny solder balls — visible pins नहीं — phone processors, RAM chips', 'सभी packages में chip function एक जैसा — केवल physical shape बदलती है'] }
          },
          {
            type: 'quiz',
            en: { question: 'A 7805 IC is marked on a circuit board. What does it most likely do?', options: ['Amplify audio signals', 'Generate timing pulses', 'Provide a stable 5V power supply', 'Act as a digital logic gate'], correct: 2, feedback: '7805 is a voltage regulator IC. It takes an unregulated input (7V–35V) and outputs a stable 5V. The 78xx series all regulate voltage: 7805=5V, 7812=12V, 7815=15V. You will find one in almost every power supply circuit.' },
            hi: { question: 'Circuit board पर 7805 IC marked है। यह सबसे likely क्या करती है?', options: ['Audio signals amplify करती है', 'Timing pulses generate करती है', 'Stable 5V power supply देती है', 'Digital logic gate का काम करती है'], correct: 2, feedback: '7805 एक voltage regulator IC है। यह unregulated input (7V-35V) लेकर stable 5V output देती है। 78xx series: 7805=5V, 7812=12V, 7815=15V। लगभग हर power supply circuit में एक मिलेगी।' }
          },
          {
            type: 'complete', xp: 40,
            en: { msg: "You now know the 5 types of ICs — Analog, Digital, Timer, Voltage Regulator, Microcontroller — and can identify their packages (DIP, SOIC, QFP, BGA). When you open any device, you can now look at the chips and know what role each one plays. That is the knowledge of a real electronics technician." },
            hi: { msg: "अब आप 5 types की ICs जानते हैं — Analog, Digital, Timer, Voltage Regulator, Microcontroller — और उनके packages पहचान सकते हैं। जब भी कोई device खोलें, chips देखकर बता सकते हैं हर chip क्या करती है। यह real electronics technician का ज्ञान है।" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  5. OHM'S LAW
  // ══════════════════════════════════════════════════════
  {
    id: 'ohmslaw',
    icon: '📐',
    color: '#7c3aed',
    en: { name: "Ohm's Law", phase: 'Theory' },
    hi: { name: 'ओम का नियम', phase: 'सिद्धांत' },
    lessons: [
      {
        en: { title: "The golden rule of electronics", time: '6 min' },
        hi: { title: 'इलेक्ट्रॉनिक्स का स्वर्णिम नियम', time: '6 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Every engineer, hobbyist, and electrician knows Ohm's Law. It's three simple variables in one equation. Once you understand this, you can calculate anything in a basic circuit — what resistor to use, how much current flows, what voltage you need." },
            hi: { text: "हर engineer, hobbyist और electrician ओम का नियम जानता है। यह एक समीकरण में तीन सरल variables हैं। एक बार समझ लो, आप किसी भी basic circuit में कुछ भी calculate कर सकते हो।" }
          },
          {
            type: 'learn',
            icon: '📏',
            en: { title: "V = I × R", body: "Ohm's Law: Voltage equals Current multiplied by Resistance. That's it. This one equation explains how every basic circuit works.", list: ['V = Voltage (Volts — the push)', 'I = Current (Amperes — the flow)', 'R = Resistance (Ohms — the opposition)', 'Know any two? You can always find the third!'] },
            hi: { title: 'V = I × R', body: 'ओम का नियम: Voltage = Current × Resistance। बस इतना। यह एक समीकरण हर basic circuit समझाती है।', list: ['V = Voltage (Volts — दबाव)', 'I = Current (Amperes — प्रवाह)', 'R = Resistance (Ohms — विरोध)', 'कोई भी दो जानते हो? तीसरा निकाल सकते हो!'] }
          },
          {
            type: 'diagram',
            label: "Ohm's Law Triangle",
            svg: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="180" fill="#1a1d35" rx="12"/>
  <!-- Triangle -->
  <polygon points="150,20 30,150 270,150" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <line x1="150" y1="20" x2="150" y2="150" stroke="#2e3260" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- V at top -->
  <circle cx="150" cy="38" r="22" fill="#1e2040" stroke="#f59e0b" stroke-width="2"/>
  <text x="150" y="44" fill="#f59e0b" font-size="20" font-weight="bold" text-anchor="middle" font-family="sans-serif">V</text>
  <!-- I left -->
  <circle cx="74" cy="138" r="22" fill="#1e2040" stroke="#10b981" stroke-width="2"/>
  <text x="74" y="144" fill="#10b981" font-size="20" font-weight="bold" text-anchor="middle" font-family="sans-serif">I</text>
  <!-- R right -->
  <circle cx="226" cy="138" r="22" fill="#1e2040" stroke="#ef4444" stroke-width="2"/>
  <text x="226" y="144" fill="#ef4444" font-size="20" font-weight="bold" text-anchor="middle" font-family="sans-serif">R</text>
  <!-- formulas -->
  <text x="150" y="168" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">V = I×R   |   I = V/R   |   R = V/I</text>
  <!-- cover hints -->
  <text x="50" y="175" fill="#7c3aed" font-size="9" text-anchor="middle" font-family="sans-serif">Cover V → I×R</text>
  <text x="250" y="175" fill="#7c3aed" font-size="9" text-anchor="middle" font-family="sans-serif">Cover I → V/R</text>
</svg>`
          },
          {
            type: 'learn',
            icon: '🧮',
            en: { title: 'Real example: LED circuit', body: 'You have a 9V battery and an LED that needs 2V and 20mA (0.02A). What resistor do you need?', list: ['Voltage across resistor = 9V − 2V = 7V', 'R = V ÷ I = 7V ÷ 0.02A = 350Ω', 'Nearest standard value: 330Ω or 390Ω', 'This is how every LED circuit is designed!'] },
            hi: { title: 'असली उदाहरण: LED circuit', body: 'आपके पास 9V battery है और LED को 2V और 20mA चाहिए। कौन सा resistor?', list: ['Resistor पर voltage = 9V − 2V = 7V', 'R = V ÷ I = 7V ÷ 0.02A = 350Ω', 'नजदीकी standard value: 330Ω या 390Ω', 'इस तरह हर LED circuit डिजाइन होती है!'] }
          },
          {
            type: 'quiz',
            en: { question: 'A circuit has 12V and a 4Ω resistor. What is the current?', options: ['48A', '3A', '0.33A', '8A'], correct: 1, feedback: 'I = V ÷ R = 12 ÷ 4 = 3A. Always remember: cover the letter you want to find in the triangle, and the triangle tells you the formula!' },
            hi: { question: 'एक circuit में 12V और 4Ω resistor है। Current क्या है?', options: ['48A', '3A', '0.33A', '8A'], correct: 1, feedback: 'I = V ÷ R = 12 ÷ 4 = 3A। त्रिभुज में जो letter ढूंढना हो उसे ढकें — formula मिल जाएगा!' }
          },
          {
            type: 'quiz',
            en: { question: 'If you double the resistance in a circuit (voltage stays same), what happens to current?', options: ['Current doubles', 'Current halves', 'Current stays the same', 'Current becomes zero'], correct: 1, feedback: 'I = V/R — if R doubles, current halves. More resistance = less flow. This is exactly the water analogy: narrower pipe = less water flow!' },
            hi: { question: 'अगर circuit में resistance दोगुनी हो जाए (voltage same), current का क्या होगा?', options: ['Current दोगुनी होगी', 'Current आधी होगी', 'Current same रहेगी', 'Current शून्य होगी'], correct: 1, feedback: 'I = V/R — R दोगुना = current आधी। पानी का analogy: पाइप पतली = कम पानी!' }
          },
          {
            type: 'complete', xp: 35,
            en: { msg: "You just learned Ohm's Law — V=IR — the single most important equation in electronics. Professional engineers use this every single day. You're thinking like an engineer now!" },
            hi: { msg: "आपने ओम का नियम सीखा — V=IR — इलेक्ट्रॉनिक्स का सबसे महत्वपूर्ण समीकरण। Professional engineers इसे हर रोज उपयोग करते हैं। आप अब engineer की तरह सोच रहे हैं!" }
          }
        ]
      },
      {
        en: { title: 'Calculate anything — practice problems', time: '8 min' },
        hi: { title: 'कुछ भी calculate करो — practice problems', time: '8 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Now let's make Ohm's Law real. Three problems. Each one is a situation you will actually face when repairing or building circuits. Cover up the answer and try to solve it first." },
            hi: { text: "अब ओम के नियम को असली बनाते हैं। तीन problems। हर एक ऐसी situation है जो repair या circuit बनाते समय सामने आएगी। पहले खुद solve करने की कोशिश करो।" }
          },
          {
            type: 'learn',
            icon: '🔋',
            en: { title: 'Problem 1 — What voltage do I need?', body: 'You have a 100Ω resistor and you need 0.05A (50mA) to flow through it. What voltage battery do you need?', list: ['Formula: V = I × R', 'V = 0.05A × 100Ω', 'V = 5 Volts', 'So a 5V USB power bank or phone charger output would be perfect!'] },
            hi: { title: 'Problem 1 — कौन सी voltage चाहिए?', body: 'आपके पास 100Ω resistor है और 0.05A (50mA) current flow करवानी है। कौन सी battery चाहिए?', list: ['Formula: V = I × R', 'V = 0.05A × 100Ω', 'V = 5 Volts', 'तो 5V USB power bank या phone charger output बिल्कुल सही रहेगा!'] }
          },
          {
            type: 'learn',
            icon: '🔌',
            en: { title: 'Problem 2 — What resistor do I need?', body: 'You have a 5V supply (USB) and want to run an LED at 20mA (0.02A). LED uses 2V. What resistor?', list: ['Voltage for resistor = 5V − 2V = 3V', 'Formula: R = V ÷ I', 'R = 3V ÷ 0.02A = 150Ω', 'Use 150Ω or the next available: 180Ω (common in kits)', 'This is the REAL calculation behind every LED circuit!'] },
            hi: { title: 'Problem 2 — कौन सा resistor चाहिए?', body: 'आपके पास 5V supply (USB) है और LED 20mA (0.02A) पर चलानी है। LED 2V use करती है। कौन सा resistor?', list: ['Resistor के लिए voltage = 5V − 2V = 3V', 'Formula: R = V ÷ I', 'R = 3V ÷ 0.02A = 150Ω', 'Use 150Ω या अगला available: 180Ω (kits में common)', 'यह हर LED circuit के पीछे की REAL calculation है!'] }
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'Problem 3 — Is this safe? (check current)', body: 'You plug a 10Ω device into a 12V car battery. How much current flows? Is this dangerous?', list: ['Formula: I = V ÷ R', 'I = 12V ÷ 10Ω = 1.2A', '1.2A is significant current — can heat up thin wires', 'Car battery can supply hundreds of Amps — the 10Ω device is the limiting factor', 'This is why we calculate BEFORE connecting — prevent fires!'] },
            hi: { title: 'Problem 3 — क्या यह safe है? (current check)', body: 'आप 10Ω device को 12V car battery से जोड़ते हैं। कितनी current बहेगी? क्या यह खतरनाक है?', list: ['Formula: I = V ÷ R', 'I = 12V ÷ 10Ω = 1.2A', '1.2A काफी current है — पतले wires गर्म हो सकते हैं', 'Car battery सैकड़ों Amps दे सकती है — 10Ω device limiting factor है', 'इसीलिए connect करने से पहले calculate करते हैं — आग से बचाव!'] }
          },
          {
            type: 'tryit',
            en: { title: 'Try it with your own circuit', steps: ['Get a 9V battery, one LED, and a resistor from your kit', 'LED needs about 2V at 20mA (0.02A)', 'Voltage across resistor = 9 - 2 = 7V', 'Calculate: R = 7V ÷ 0.02A = 350Ω', 'Use 330Ω (nearest standard value)', 'Build the circuit and it should work perfectly', "Now try a 470Ω resistor — LED dims because less current flows (Ohm's Law!)"] },
            hi: { title: 'अपने circuit के साथ try करो', steps: ['अपनी kit से 9V battery, एक LED और एक resistor लो', 'LED को लगभग 2V चाहिए 20mA (0.02A) पर', 'Resistor पर voltage = 9 - 2 = 7V', 'Calculate: R = 7V ÷ 0.02A = 350Ω', '330Ω use करो (नजदीकी standard value)', 'Circuit बनाओ और यह perfectly काम करेगी', "अब 470Ω resistor try करो — LED dim होगी क्योंकि कम current बहेगी (Ohm's Law!)"] }
          },
          {
            type: 'quiz',
            en: { question: 'You have a 9V battery and a 470Ω resistor. How much current flows?', options: ['0.019A (19mA)', '4.3A', '0.05A (50mA)', '461A'], correct: 0, feedback: 'I = V ÷ R = 9V ÷ 470Ω = 0.0191A = 19.1mA. This is exactly the right current for an LED! 470Ω is one of the most common resistor values in beginner kits for this reason.' },
            hi: { question: 'आपके पास 9V battery और 470Ω resistor है। कितनी current बहेगी?', options: ['0.019A (19mA)', '4.3A', '0.05A (50mA)', '461A'], correct: 0, feedback: 'I = V ÷ R = 9V ÷ 470Ω = 0.0191A = 19.1mA। यह LED के लिए बिल्कुल सही current है! इसीलिए 470Ω beginner kits में सबसे common resistor values में से एक है।' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: 'You can now calculate voltage, current, AND resistance for any circuit. This is the core skill every repair technician uses when diagnosing — "is there enough voltage here? how much current is flowing?" You now know how to answer those questions.' },
            hi: { msg: 'अब आप किसी भी circuit के लिए voltage, current और resistance calculate कर सकते हो। यही core skill है जो हर repair technician diagnose करते समय use करता है — "यहाँ पर्याप्त voltage है? कितनी current बह रही है?" अब आप इन सवालों के जवाब जानते हो।' }
          }
        ]
      },
      {
        en: { title: "Power and Watt's Law — why things get hot", time: '6 min' },
        hi: { title: 'Power और Watt Law — चीज़ें गर्म क्यों होती हैं', time: '6 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Here is something Ohm's Law alone does not tell you: how HOT will this get? A component can be destroyed not because the voltage or current is wrong — but because it cannot handle the POWER. This lesson adds the final piece: Watt's Law." },
            hi: { text: "यहाँ कुछ ऐसा है जो अकेला Ohm's Law नहीं बताता: यह कितना HOT होगा? एक component इसलिए नहीं जलता कि voltage या current गलत है — बल्कि इसलिए कि वह POWER handle नहीं कर सकता। यह lesson आखिरी piece जोड़ता है: Watt's Law।" }
          },
          {
            type: 'learn',
            icon: '🌡️',
            en: { title: "P = V × I (Watt's Law)", body: 'Power is how much energy a component consumes per second. Too much power = heat = component fails. This is the #1 cause of component damage in DIY repairs.', list: ['P = Power in Watts (W)', 'P = V × I (voltage times current)', 'Also: P = I² × R (useful when you know current and resistance)', 'Also: P = V² ÷ R (useful when you know voltage and resistance)', 'A 1W resistor can handle 1 Watt of power. Exceed it = it burns!'] },
            hi: { title: "P = V × I (Watt's Law)", body: 'Power वह है जो एक component प्रति second consume करता है। बहुत ज़्यादा power = heat = component fail। DIY repairs में component damage का यह #1 कारण है।', list: ['P = Power in Watts (W)', 'P = V × I (voltage गुना current)', 'Also: P = I² × R (useful जब current और resistance पता हो)', 'Also: P = V² ÷ R (useful जब voltage और resistance पता हो)', '1W resistor 1 Watt power handle कर सकता है। ज़्यादा हो = जल जाएगा!'] }
          },
          {
            type: 'learn',
            icon: '🔥',
            en: { title: 'Real example: choosing the right resistor wattage', body: 'Resistors come in different power ratings: 1/4W (tiny), 1/2W (medium), 1W, 2W, 5W. You MUST choose the right one.', list: ['Example: 470Ω resistor with 9V battery', 'Current: I = 9V ÷ 470Ω = 0.019A', 'Power: P = 9V × 0.019A = 0.17W', '0.17W is well within a 1/4W (0.25W) resistor — safe!', 'If power exceeds the rating, the resistor smokes and burns', 'Rule of thumb: choose a resistor rated at 2× the calculated power'] },
            hi: { title: 'असली उदाहरण: सही resistor wattage चुनना', body: 'Resistors अलग-अलग power ratings में आते हैं: 1/4W (tiny), 1/2W (medium), 1W, 2W, 5W। सही चुनना MUST है।', list: ['उदाहरण: 470Ω resistor और 9V battery', 'Current: I = 9V ÷ 470Ω = 0.019A', 'Power: P = 9V × 0.019A = 0.17W', '0.17W एक 1/4W (0.25W) resistor के अंदर है — safe!', 'अगर power rating से ज़्यादा हो तो resistor जल जाता है', 'Rule: calculated power से 2× rated resistor लो'] }
          },
          {
            type: 'fact',
            en: { text: 'The human body feels warmth above about 45°C. Electronic components typically fail above 85°C to 125°C. So if you touch a component and it feels hot, it is probably dissipating too much power and may fail soon. Cold = good. Warm = watch it. Hot = problem!' },
            hi: { text: 'मानव शरीर लगभग 45°C पर गर्मी महसूस करता है। Electronic components आमतौर पर 85°C से 125°C से ऊपर fail होते हैं। तो अगर आप कोई component छूते हैं और वह गर्म लगता है, तो वह शायद बहुत ज़्यादा power dissipate कर रहा है। ठंडा = अच्छा। गर्म = ध्यान दो। बहुत गर्म = समस्या!' }
          },
          {
            type: 'tryit',
            en: { title: 'Check if your LED circuit is safe', steps: ['Calculate power in the resistor: P = V × I', 'In 9V, 330Ω LED circuit: I = 7V ÷ 330Ω = 0.021A', 'Power in resistor: P = 7V × 0.021A = 0.15W', '0.15W — a standard 1/4W (0.25W) resistor handles this fine', 'Touch the resistor after 1 minute of running — should be barely warm', 'If it is hot, your resistor value is too low!'] },
            hi: { title: 'Check करो कि आपकी LED circuit safe है', steps: ['Resistor में power calculate करो: P = V × I', '9V, 330Ω LED circuit में: I = 7V ÷ 330Ω = 0.021A', 'Resistor में power: P = 7V × 0.021A = 0.15W', '0.15W — standard 1/4W (0.25W) resistor इसे ठीक handle करता है', '1 minute चलाने के बाद resistor छुओ — barely warm होना चाहिए', 'अगर गर्म है तो resistor value बहुत कम है!'] }
          },
          {
            type: 'quiz',
            en: { question: 'A 100Ω resistor has 5V across it. What power does it dissipate?', options: ['0.25W', '500W', '0.05W', '5W'], correct: 0, feedback: 'I = 5V ÷ 100Ω = 0.05A. P = V × I = 5V × 0.05A = 0.25W. You need at least a 1/4W (0.25W) rated resistor. To be safe, use 1/2W (0.5W).' },
            hi: { question: '100Ω resistor पर 5V है। यह कितनी power dissipate करता है?', options: ['0.25W', '500W', '0.05W', '5W'], correct: 0, feedback: 'I = 5V ÷ 100Ω = 0.05A। P = V × I = 5V × 0.05A = 0.25W। कम से कम 1/4W (0.25W) rated resistor चाहिए। Safe रहने के लिए 1/2W (0.5W) use करो।' }
          },
          {
            type: 'complete', xp: 35,
            en: { msg: "V=IR and P=VI — you now have the complete toolkit of basic circuit theory. Ohm's Law tells you current and voltage. Watt's Law tells you heat and power. Professional electronics repair technicians use both every single day. You're one step closer!" },
            hi: { msg: "V=IR और P=VI — अब आपके पास basic circuit theory का complete toolkit है। Ohm's Law current और voltage बताता है। Watt's Law heat और power बताता है। Professional electronics repair technicians दोनों को हर रोज use करते हैं। आप एक कदम और आगे हैं!" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  6. READING SCHEMATICS
  // ══════════════════════════════════════════════════════
  {
    id: 'schematics',
    icon: '📐',
    color: '#0ea5e9',
    en: { name: 'Reading Schematics', phase: 'Theory' },
    hi: { name: 'Schematics पढ़ना', phase: 'सिद्धांत' },
    lessons: [
      {
        en: { title: 'What is a schematic?', time: '5 min' },
        hi: { title: 'Schematic क्या होता है?', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Every electronics project comes with a schematic — a map of the circuit. Without reading schematics, you can only copy circuits blindly. With this skill, you can understand ANY circuit ever designed. It's the language of electronics." },
            hi: { text: "हर electronics project के साथ schematic आता है — circuit का नक्शा। Schematics पढ़े बिना, आप circuits blindly copy कर सकते हैं। इस skill से आप कोई भी circuit समझ सकते हैं।" }
          },
          {
            type: 'learn',
            icon: '🗺️',
            en: { title: 'What a schematic is (and is not)', body: 'A schematic shows HOW components are connected electrically. It does NOT show where they physically sit on the board.', list: ['Lines = wires connecting components', 'Symbols = standardized pictures for each component', 'Labels = values (R1=330Ω, C1=100µF, etc.)', 'Dots at line junctions = wires ARE connected', 'Lines crossing WITHOUT dot = wires are NOT connected'] },
            hi: { title: 'Schematic क्या है (और क्या नहीं)', body: 'Schematic दिखाता है components electrically कैसे जुड़े हैं। यह नहीं दिखाता वो board पर physically कहाँ हैं।', list: ['Lines = components जोड़ने वाले wires', 'Symbols = हर component के standardized pictures', 'Labels = values (R1=330Ω, C1=100µF आदि)', 'Junction पर dots = wires जुड़े हैं', 'Dot बिना crossing lines = wires जुड़े नहीं'] }
          },
          {
            type: 'diagram',
            label: 'Common Schematic Symbols',
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="200" fill="#1a1d35" rx="12"/>
  <!-- Resistor -->
  <text x="40" y="22" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Resistor</text>
  <line x1="10" y1="35" x2="22" y2="35" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="22" y="28" width="36" height="14" rx="3" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="58" y1="35" x2="70" y2="35" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Capacitor -->
  <text x="120" y="22" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Capacitor</text>
  <line x1="90" y1="35" x2="112" y2="35" stroke="#10b981" stroke-width="1.5"/>
  <line x1="112" y1="26" x2="112" y2="44" stroke="#10b981" stroke-width="2.5"/>
  <line x1="118" y1="26" x2="118" y2="44" stroke="#10b981" stroke-width="2.5"/>
  <line x1="118" y1="35" x2="140" y2="35" stroke="#10b981" stroke-width="1.5"/>
  <!-- LED/Diode -->
  <text x="200" y="22" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">LED/Diode</text>
  <line x1="168" y1="35" x2="183" y2="35" stroke="#a78bfa" stroke-width="1.5"/>
  <polygon points="183,26 183,44 200,35" fill="#a78bfa" stroke="#a78bfa" stroke-width="1"/>
  <line x1="200" y1="26" x2="200" y2="44" stroke="#a78bfa" stroke-width="2"/>
  <line x1="200" y1="35" x2="220" y2="35" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="203" y1="24" x2="210" y2="17" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/>
  <line x1="207" y1="29" x2="214" y2="22" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/>
  <!-- Battery -->
  <text x="40" y="75" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Battery</text>
  <line x1="10" y1="88" x2="25" y2="88" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="25" y1="80" x2="25" y2="96" stroke="#60a5fa" stroke-width="2.5"/>
  <line x1="30" y1="84" x2="30" y2="92" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="30" y1="88" x2="45" y2="88" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="45" y1="80" x2="45" y2="96" stroke="#60a5fa" stroke-width="2.5"/>
  <line x1="50" y1="84" x2="50" y2="92" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="50" y1="88" x2="70" y2="88" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="27" y="78" fill="#10b981" font-size="9" font-family="sans-serif">+</text>
  <text x="47" y="78" fill="#ef4444" font-size="9" font-family="sans-serif">−</text>
  <!-- Ground -->
  <text x="120" y="75" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Ground</text>
  <line x1="120" y1="80" x2="120" y2="96" stroke="#9ba3c8" stroke-width="1.5"/>
  <line x1="108" y1="96" x2="132" y2="96" stroke="#9ba3c8" stroke-width="2"/>
  <line x1="112" y1="101" x2="128" y2="101" stroke="#9ba3c8" stroke-width="1.5"/>
  <line x1="116" y1="106" x2="124" y2="106" stroke="#9ba3c8" stroke-width="1"/>
  <!-- Switch -->
  <text x="210" y="75" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Switch (open)</text>
  <line x1="175" y1="88" x2="192" y2="88" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="192" cy="88" r="2.5" fill="#f59e0b"/>
  <line x1="192" y1="88" x2="215" y2="76" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="215" cy="88" r="2.5" fill="#f59e0b"/>
  <line x1="215" y1="88" x2="235" y2="88" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Junction vs crossover -->
  <text x="80" y="140" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Connected</text>
  <line x1="50" y1="152" x2="110" y2="152" stroke="#10b981" stroke-width="1.5"/>
  <line x1="80" y1="135" x2="80" y2="170" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="80" cy="152" r="4" fill="#10b981"/>
  <text x="200" y="140" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">NOT connected</text>
  <line x1="165" y1="152" x2="235" y2="152" stroke="#ef4444" stroke-width="1.5"/>
  <line x1="200" y1="135" x2="200" y2="170" stroke="#ef4444" stroke-width="1.5"/>
  <rect x="194" y="146" width="12" height="12" fill="#1a1d35"/>
  <line x1="196" y1="152" x2="204" y2="152" stroke="#1a1d35" stroke-width="6"/>
  <line x1="200" y1="135" x2="200" y2="170" stroke="#ef4444" stroke-width="1.5"/>
  <text x="80" y="185" fill="#10b981" font-size="8" text-anchor="middle" font-family="sans-serif">• dot = junction</text>
  <text x="200" y="185" fill="#ef4444" font-size="8" text-anchor="middle" font-family="sans-serif">no dot = crossover</text>
</svg>`
          },
          {
            type: 'quiz',
            en: { question: 'Two lines cross on a schematic with NO dot at the crossing. What does this mean?', options: ['The wires are connected at that point', 'The wires are NOT connected — they just cross visually', 'This is an error in the schematic', 'The wires are connected only sometimes'], correct: 1, feedback: 'No dot = no connection. The lines just cross visually but are on different layers/paths. Always look for the dot to confirm a connection.' },
            hi: { question: 'Schematic पर दो lines बिना dot के cross करती हैं। इसका मतलब क्या है?', options: ['Wires उस point पर connected हैं', 'Wires connected नहीं हैं — वो बस visually cross करते हैं', 'Schematic में error है', 'Wires कभी-कभी connected हैं'], correct: 1, feedback: 'No dot = no connection। Lines बस visually cross करती हैं लेकिन अलग paths पर हैं। Connection confirm करने के लिए हमेशा dot देखें।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "Schematic symbols — learned! You can now recognize resistors, capacitors, LEDs, batteries, ground, and switches in any circuit diagram. Next lesson: read a complete real circuit." },
            hi: { msg: "Schematic symbols — सीख लिए! अब आप किसी भी circuit diagram में resistors, capacitors, LEDs, batteries, ground और switches पहचान सकते हैं।" }
          }
        ]
      },
      {
        en: { title: 'Read your first complete schematic', time: '5 min' },
        hi: { title: 'पहला complete schematic पढ़ें', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Time to read a real circuit! We'll look at the classic LED circuit schematic — the same one you'll build in projects. By the end, you'll be able to trace the path of electricity through a schematic and understand what every part does." },
            hi: { text: "अब एक real circuit पढ़ते हैं! हम classic LED circuit schematic देखेंगे। अंत तक आप schematic में electricity का रास्ता trace कर पाएंगे।" }
          },
          {
            type: 'learn',
            icon: '👁️',
            en: { title: 'How to read any schematic — 4 steps', body: 'Use this method on every schematic you see and it will always make sense.', list: ['1. Find the power supply (battery, VCC) — top of diagram', '2. Find ground — bottom/bottom-right. Current flows top to bottom', '3. Trace the path from + to − — follow the line', '4. Identify each component along the path and its job'] },
            hi: { title: 'कोई भी schematic पढ़ें — 4 steps', body: 'हर schematic पर यह method use करें — हमेशा समझ आएगा।', list: ['1. Power supply ढूंढें (battery, VCC) — diagram का ऊपर', '2. Ground ढूंढें — नीचे/नीचे-दाएं। Current ऊपर से नीचे बहती है', '3. + से − तक path trace करें — line follow करें', '4. रास्ते में हर component और उसका काम पहचानें'] }
          },
          {
            type: 'diagram',
            label: 'LED Circuit — Complete Schematic',
            svg: `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px">
  <rect width="280" height="200" fill="#1a1d35" rx="12"/>
  <!-- 9V Battery -->
  <line x1="30" y1="40" x2="30" y2="90" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="22" y1="90" x2="38" y2="90" stroke="#60a5fa" stroke-width="2.5"/>
  <line x1="18" y1="96" x2="42" y2="96" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="22" y1="102" x2="38" y2="102" stroke="#60a5fa" stroke-width="2.5"/>
  <line x1="18" y1="108" x2="42" y2="108" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="30" y1="108" x2="30" y2="160" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="10" y="88" fill="#10b981" font-size="10" font-family="sans-serif">+</text>
  <text x="10" y="112" fill="#ef4444" font-size="10" font-family="sans-serif">−</text>
  <text x="50" y="100" fill="#60a5fa" font-size="9" font-family="sans-serif">9V</text>
  <!-- Top wire + → right -->
  <line x1="30" y1="40" x2="240" y2="40" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- Resistor 330Ω on top wire -->
  <rect x="90" y="32" width="50" height="16" rx="3" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="115" y="44" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="sans-serif">R1 330Ω</text>
  <!-- Right side down to LED -->
  <line x1="240" y1="40" x2="240" y2="70" stroke="#f59e0b" stroke-width="1.5"/>
  <!-- LED symbol -->
  <polygon points="226,70 254,70 240,95" fill="#10b981" stroke="#10b981" stroke-width="1"/>
  <line x1="226" y1="95" x2="254" y2="95" stroke="#10b981" stroke-width="2"/>
  <!-- LED light rays -->
  <line x1="252" y1="68" x2="262" y2="58" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="257" y1="76" x2="267" y2="70" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <text x="240" y="115" fill="#10b981" font-size="8" text-anchor="middle" font-family="sans-serif">D1 LED</text>
  <!-- LED to ground wire -->
  <line x1="240" y1="95" x2="240" y2="160" stroke="#9ba3c8" stroke-width="1.5"/>
  <!-- Bottom wire back to battery -->
  <line x1="30" y1="160" x2="240" y2="160" stroke="#9ba3c8" stroke-width="1.5"/>
  <!-- Ground symbol -->
  <line x1="136" y1="160" x2="136" y2="168" stroke="#9ba3c8" stroke-width="1.5"/>
  <line x1="124" y1="168" x2="148" y2="168" stroke="#9ba3c8" stroke-width="2"/>
  <line x1="128" y1="173" x2="144" y2="173" stroke="#9ba3c8" stroke-width="1.5"/>
  <line x1="132" y1="178" x2="140" y2="178" stroke="#9ba3c8" stroke-width="1"/>
  <text x="160" y="175" fill="#9ba3c8" font-size="8" font-family="sans-serif">GND</text>
  <!-- flow arrows -->
  <text x="136" y="35" fill="#fbbf24" font-size="10" font-family="sans-serif">→</text>
  <text x="246" y="135" fill="#fbbf24" font-size="10" font-family="sans-serif">↓</text>
  <text x="80" y="175" fill="#fbbf24" font-size="10" font-family="sans-serif">←</text>
  <!-- labels -->
  <text x="140" y="190" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Current: + → R1 → D1 → GND</text>
</svg>`
          },
          {
            type: 'tryit',
            en: { title: 'Trace this schematic yourself', steps: ['Find the + terminal of the battery (top-left)', 'Follow the wire right — you hit resistor R1 (330Ω)', 'After R1 the wire reaches LED D1', 'After LED current goes down to the bottom wire', 'The bottom wire returns to the − of the battery (GND)', 'That\'s one complete loop — that\'s a circuit!'] },
            hi: { title: 'खुद इस schematic को trace करें', steps: ['Battery का + terminal ढूंढें (ऊपर-बाएं)', 'Wire दाईं तरफ follow करें — resistor R1 (330Ω) मिलेगा', 'R1 के बाद wire LED D1 तक पहुँचती है', 'LED के बाद current नीचे bottom wire पर जाती है', 'Bottom wire battery के − पर वापस जाती है (GND)', 'यही एक complete loop है — यही circuit है!'] }
          },
          {
            type: 'quiz',
            en: { question: 'In a schematic, which direction does current conventionally flow?', options: ['From − to + (negative to positive)', 'From + to − (positive to negative)', 'It depends on the component', 'Current has no direction in schematics'], correct: 1, feedback: 'Conventional current flows from + to − (positive to negative terminal). In the LED circuit: + battery → resistor → LED → back to − battery.' },
            hi: { question: 'Schematic में current conventionally किस दिशा में बहती है?', options: ['− से + की तरफ', '+ से − की तरफ', 'Component पर depend करता है', 'Schematics में current की कोई दिशा नहीं'], correct: 1, feedback: 'Conventional current + से − की तरफ बहती है। LED circuit में: + battery → resistor → LED → − battery।' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: "You can read a schematic! This is a huge milestone. From now on, when you find a circuit online or in a book — you can understand it, not just copy it. The world of electronics just opened up for you." },
            hi: { msg: "आप schematic पढ़ सकते हैं! यह एक बड़ा milestone है। अब जब आप online या किसी किताब में circuit देखेंगे — आप उसे समझेंगे, सिर्फ copy नहीं करेंगे।" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  7. MEASUREMENT & TOOLS
  // ══════════════════════════════════════════════════════
  {
    id: 'tools',
    icon: '🔧',
    color: '#0ea5e9',
    en: { name: 'Tools & Measurement', phase: 'Practical' },
    hi: { name: 'औजार और माप', phase: 'व्यावहारिक' },
    lessons: [
      {
        en: { title: 'Tools every beginner needs', time: '5 min' },
        hi: { title: 'हर beginner के लिए जरूरी औजार', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Doston, good news — you don't need expensive equipment to start! In India, a full beginner toolkit costs less than a movie ticket combo. I'll show you each tool, what it looks like, and what it actually does. Pay close attention to the breadboard — most beginners get confused about it!" },
            hi: { text: "दोस्तों, खुशखबरी — शुरुआत के लिए महंगा सामान नहीं चाहिए! भारत में पूरी beginner toolkit एक movie ticket जितनी सस्ती है। मैं हर tool दिखाऊँगा — और breadboard के बारे में ध्यान से सुनो, ज्यादातर लोग इसके बारे में confused रहते हैं!" }
          },
          {
            type: 'learn',
            icon: '🍞',
            en: {
              title: 'Breadboard — practice board, NOT a PCB!',
              body: 'IMPORTANT: In local markets and repair shops, many people call a breadboard a "PCB". That is WRONG. A PCB (Printed Circuit Board) is the green board soldered permanently inside your phone or TV. A breadboard is a reusable practice board — you push wires in, test, pull them out, try again. No soldering. Think of it like a notebook — you write and erase. A PCB is like a printed book — permanent.',
              list: ['White/off-white rectangular board with rows of tiny holes', 'Components and wires push in — no soldering needed', 'Pull out and reuse — try 100 circuits on the same board', 'Costs ₹40-80 at local electronics shop or online']
            },
            hi: {
              title: 'Breadboard — practice board है, PCB नहीं!',
              body: 'यह बहुत जरूरी बात है — दोस्तों, बाजार में और repair shops में लोग breadboard को "PCB" बोलते हैं। यह गलत है। PCB यानी Printed Circuit Board वो हरी board होती है जो आपके phone या TV के अंदर permanently soldered होती है। Breadboard एक reusable practice board है — आप wires डालो, test करो, निकालो, दोबारा try करो। बिल्कुल copybook की तरह — जहाँ लिखो और मिटाओ। PCB एक printed किताब की तरह है — permanent।',
              list: ['सफेद/हल्की पीली rectangular board जिसमें छोटे-छोटे holes हों', 'Components और wires सीधे घुसाओ — soldering नहीं', 'निकालो और दोबारा use करो — एक ही board पर 100 circuits', '₹40-80 में local electronics shop या online मिलती है']
            }
          },
          {
            type: 'diagram',
            label: 'Breadboard — How it works inside',
            svg: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="220" fill="#111827" rx="12"/>
  <!-- board body -->
  <rect x="20" y="30" width="260" height="160" rx="8" fill="#f5f0e8" stroke="#d4c89a" stroke-width="2"/>
  <!-- power rail top red -->
  <rect x="24" y="34" width="252" height="18" rx="4" fill="#fca5a5" opacity="0.7"/>
  <text x="150" y="47" fill="#991b1b" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">+ POWER RAIL</text>
  <!-- power rail top blue -->
  <rect x="24" y="55" width="252" height="18" rx="4" fill="#93c5fd" opacity="0.7"/>
  <text x="150" y="68" fill="#1e3a8a" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">− GROUND RAIL</text>
  <!-- divider channel -->
  <rect x="24" y="112" width="252" height="8" rx="2" fill="#9ca3af" opacity="0.4"/>
  <text x="150" y="119" fill="#6b7280" font-size="6" text-anchor="middle" font-family="sans-serif">MIDDLE GAP</text>
  <!-- power rail bottom red -->
  <rect x="24" y="150" width="252" height="18" rx="4" fill="#fca5a5" opacity="0.7"/>
  <text x="150" y="163" fill="#991b1b" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">+ POWER RAIL</text>
  <!-- power rail bottom blue -->
  <rect x="24" y="170" width="252" height="16" rx="4" fill="#93c5fd" opacity="0.7"/>
  <text x="150" y="181" fill="#1e3a8a" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">− GROUND RAIL</text>
  <!-- middle section holes grid rows a-e top half -->
  ${[0,1,2,3,4].map(row => [0,1,2,3,4,5,6,7,8,9,10,11,12].map(col =>
    `<circle cx="${36 + col*18}" cy="${82 + row*6}" r="2.5" fill="#9ca3af" stroke="#6b7280" stroke-width="0.5"/>`
  ).join('')).join('')}
  <!-- horizontal connection lines showing rows connect -->
  ${[0,1,2,3,4].map(row =>
    `<line x1="33" y1="${82 + row*6}" x2="${33 + 12*18}" y2="${82 + row*6}" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>`
  ).join('')}
  <!-- labels -->
  <text x="14" y="85" fill="#f59e0b" font-size="7" text-anchor="middle" font-family="sans-serif" font-weight="bold">a</text>
  <text x="14" y="91" fill="#f59e0b" font-size="7" text-anchor="middle" font-family="sans-serif" font-weight="bold">b</text>
  <text x="14" y="97" fill="#f59e0b" font-size="7" text-anchor="middle" font-family="sans-serif" font-weight="bold">c</text>
  <text x="14" y="103" fill="#f59e0b" font-size="7" text-anchor="middle" font-family="sans-serif" font-weight="bold">d</text>
  <text x="14" y="109" fill="#f59e0b" font-size="7" text-anchor="middle" font-family="sans-serif" font-weight="bold">e</text>
  <!-- annotation: rows connect horizontally -->
  <line x1="240" y1="93" x2="280" y2="75" stroke="#f59e0b" stroke-width="1"/>
  <text x="282" y="70" fill="#f59e0b" font-size="7" font-family="sans-serif">Row connects</text>
  <text x="282" y="79" fill="#f59e0b" font-size="7" font-family="sans-serif">→ horizontal</text>
  <!-- NOT a PCB badge -->
  <rect x="85" y="192" width="130" height="22" rx="6" fill="#ef4444" opacity="0.9"/>
  <text x="150" y="207" fill="white" font-size="9" text-anchor="middle" font-family="sans-serif" font-weight="bold">⚠ NOT a PCB — Practice Board!</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real breadboard — what you will actually buy',
            src: '/img/breadboard.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'This is a real 400-point breadboard. You can see the grid of holes in the middle and the red/blue power rails on the sides. Local market name: "practice board" or incorrectly "PCB" — but now you know the difference! Available for ₹40-80.' },
            hi: { caption: 'यह एक असली 400-point breadboard है। बीच में holes का grid और किनारों पर लाल/नीली power rails दिखती हैं। Local market में इसे "practice board" या गलती से "PCB" कहते हैं — लेकिन अब आप फर्क जानते हैं! ₹40-80 में मिलती है।' }
          },
          {
            type: 'learn',
            icon: '🔌',
            en: {
              title: 'Jumper wires — the connectors',
              body: 'Jumper wires are short colorful wires with metal pins at each end. You use them to connect two holes on the breadboard. Think of them like temporary bridges between components.',
              list: ['Male-to-Male (MM): both ends have pins — for breadboard to breadboard', 'Male-to-Female (MF): one pin, one socket — for breadboard to Arduino', 'Buy a set of 40 or 65 wires — all colors, different lengths', 'Cost: ₹30-60 for a full set — absolutely must have!']
            },
            hi: {
              title: 'Jumper wires — जोड़ने वाली तारें',
              body: 'Jumper wires छोटी रंगीन तारें हैं जिनके दोनों सिरों पर metal pins होते हैं। इनसे breadboard के दो holes को जोड़ते हैं। इन्हें components के बीच temporary bridge समझो।',
              list: ['Male-to-Male (MM): दोनों तरफ pins — breadboard से breadboard', 'Male-to-Female (MF): एक pin, एक socket — breadboard से Arduino के लिए', '40 या 65 wires का set लो — सभी colors, अलग-अलग length', 'कीमत: ₹30-60 पूरे set की — बहुत जरूरी!']
            }
          },
          {
            type: 'diagram',
            label: 'Jumper wires — Male vs Female ends',
            svg: `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="160" fill="#111827" rx="12"/>
  <text x="150" y="20" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">Jumper Wire Types</text>
  <!-- Male end left -->
  <rect x="20" y="35" width="14" height="8" rx="2" fill="#60a5fa"/>
  <rect x="25" y="32" width="4" height="11" rx="1" fill="#93c5fd"/>
  <text x="27" y="55" fill="#93c5fd" font-size="8" text-anchor="middle" font-family="sans-serif">MALE</text>
  <text x="27" y="64" fill="#6b7280" font-size="7" text-anchor="middle" font-family="sans-serif">(pin)</text>
  <!-- wire mm -->
  <rect x="34" y="38" width="80" height="4" rx="2" fill="#3b82f6"/>
  <!-- Male end right MM -->
  <rect x="114" y="35" width="14" height="8" rx="2" fill="#60a5fa"/>
  <rect x="119" y="32" width="4" height="11" rx="1" fill="#93c5fd"/>
  <text x="75" y="55" fill="#e2e8f0" font-size="8" text-anchor="middle" font-family="sans-serif">Male-Male (MM)</text>
  <text x="75" y="64" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="sans-serif">Breadboard to Breadboard</text>
  <!-- Female end -->
  <rect x="180" y="35" width="14" height="10" rx="2" fill="#10b981"/>
  <rect x="183" y="35" width="8" height="10" rx="1" fill="#064e3b"/>
  <circle cx="187" cy="40" r="2.5" fill="#0d9488"/>
  <text x="187" y="55" fill="#34d399" font-size="8" text-anchor="middle" font-family="sans-serif">FEMALE</text>
  <text x="187" y="64" fill="#6b7280" font-size="7" text-anchor="middle" font-family="sans-serif">(socket)</text>
  <!-- wire mf -->
  <rect x="150" y="88" width="80" height="4" rx="2" fill="#a78bfa"/>
  <!-- male end mf -->
  <rect x="130" y="85" width="14" height="8" rx="2" fill="#60a5fa"/>
  <rect x="135" y="82" width="4" height="11" rx="1" fill="#93c5fd"/>
  <!-- female end mf -->
  <rect x="234" y="85" width="14" height="10" rx="2" fill="#10b981"/>
  <rect x="237" y="85" width="8" height="10" rx="1" fill="#064e3b"/>
  <circle cx="241" cy="90" r="2.5" fill="#0d9488"/>
  <text x="190" y="110" fill="#e2e8f0" font-size="8" text-anchor="middle" font-family="sans-serif">Male-Female (MF)</text>
  <text x="190" y="119" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="sans-serif">Breadboard to Arduino/Module</text>
  <!-- color guide -->
  ${['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#a855f7'].map((c,i) =>
    `<circle cx="${30 + i*18}" cy="${145}" r="5" fill="${c}"/>`
  ).join('')}
  <text x="150" y="149" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="sans-serif">Use colors to keep track of connections (red=power, black=ground)</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real jumper wires — what to buy',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/A_small_collection_of_electronics_components.jpg/330px-A_small_collection_of_electronics_components.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'A collection of common electronics components including jumper wires. The colorful wires with metal pins are jumper wires. Buy a set of 40-65 mixed Male-Male and Male-Female wires. The color usually just indicates wire length, but by convention: red = power, black = ground, others = signal.' },
            hi: { caption: 'आम electronics components का collection जिसमें jumper wires हैं। धातु pins वाली रंगीन तारें jumper wires हैं। 40-65 mixed Male-Male और Male-Female wires का set खरीदो। रंग आमतौर पर length दिखाता है, लेकिन convention है: लाल = power, काला = ground।' }
          },
          {
            type: 'learn',
            icon: '🌡️',
            en: {
              title: 'Multimeter — your most important tool',
              body: 'A multimeter is like a doctor\'s stethoscope for circuits. Without it, you are guessing. With it, you know exactly what is happening. Even a basic ₹250 multimeter from a local shop works perfectly for learning. We will learn how to USE it in the next module.',
              list: ['Measures Voltage (V) — is there power? How much?', 'Resistance (Ω) — what value is this component?', 'Continuity beep — are these two points connected?', 'Buy: ANY digital multimeter, ₹250-400, any electronics shop']
            },
            hi: {
              title: 'Multimeter — सबसे जरूरी औजार',
              body: 'Multimeter circuits के लिए वैसा ही है जैसे doctor के लिए stethoscope। इसके बिना आप अंदाजे में काम करते हो। इसके साथ आपको exact पता चलता है क्या हो रहा है। ₹250 का local shop का multimeter भी learning के लिए perfect है। इसे USE कैसे करते हैं यह अगले module में सीखेंगे।',
              list: ['Voltage (V) मापता है — क्या power है? कितनी?', 'Resistance (Ω) — यह component कितने का है?', 'Continuity beep — ये दो points जुड़े हैं क्या?', 'खरीदो: कोई भी digital multimeter, ₹250-400, कोई भी electronics shop']
            }
          },
          {
            type: 'diagram',
            label: 'Multimeter — What each part does',
            svg: `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px">
  <rect width="280" height="210" fill="#111827" rx="12"/>
  <!-- body -->
  <rect x="75" y="15" width="130" height="175" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <!-- display -->
  <rect x="88" y="26" width="104" height="42" rx="6" fill="#0f1a0f" stroke="#10b981" stroke-width="1.5"/>
  <text x="140" y="54" fill="#10b981" font-size="22" font-weight="bold" text-anchor="middle" font-family="monospace">1.5V</text>
  <!-- dial circle -->
  <circle cx="140" cy="115" r="32" fill="#0f172a" stroke="#4f6ef7" stroke-width="2"/>
  <circle cx="140" cy="115" r="12" fill="#1e293b" stroke="#4f6ef7" stroke-width="1.5"/>
  <!-- dial sections -->
  <text x="140" y="90" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">V~</text>
  <text x="165" y="100" fill="#22c55e" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">V—</text>
  <text x="172" y="118" fill="#a78bfa" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">Ω</text>
  <text x="162" y="137" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">A</text>
  <text x="118" y="137" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="sans-serif">OFF</text>
  <text x="112" y="118" fill="#f97316" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">🔈</text>
  <!-- pointer -->
  <line x1="140" y1="115" x2="158" y2="100" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
  <!-- probe jacks -->
  <circle cx="115" cy="165" r="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
  <text x="115" y="181" fill="#ef4444" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">10A</text>
  <circle cx="140" cy="165" r="8" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
  <text x="140" y="181" fill="#94a3b8" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">COM</text>
  <circle cx="165" cy="165" r="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
  <text x="165" y="181" fill="#ef4444" font-size="8" text-anchor="middle" font-family="sans-serif" font-weight="bold">VΩ</text>
  <!-- annotation arrows -->
  <line x1="88" y1="47" x2="55" y2="47" stroke="#94a3b8" stroke-width="1"/>
  <text x="52" y="42" fill="#e2e8f0" font-size="7" text-anchor="end" font-family="sans-serif">Display</text>
  <text x="52" y="51" fill="#94a3b8" font-size="6" text-anchor="end" font-family="sans-serif">shows reading</text>
  <line x1="172" y1="115" x2="215" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <text x="217" y="97" fill="#e2e8f0" font-size="7" font-family="sans-serif">Dial</text>
  <text x="217" y="106" fill="#94a3b8" font-size="6" font-family="sans-serif">select V/A/Ω</text>
  <line x1="165" y1="157" x2="215" y2="140" stroke="#94a3b8" stroke-width="1"/>
  <text x="217" y="137" fill="#e2e8f0" font-size="7" font-family="sans-serif">RED → VΩ</text>
  <text x="217" y="146" fill="#94a3b8" font-size="6" font-family="sans-serif">BLACK → COM</text>
  <!-- probes below -->
  <rect x="113" y="188" width="4" height="16" rx="1" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
  <rect x="138" y="188" width="4" height="16" rx="1" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
  <line x1="115" y1="203" x2="115" y2="206" stroke="#ef4444" stroke-width="1.5"/>
  <line x1="140" y1="203" x2="140" y2="206" stroke="#1d4ed8" stroke-width="1.5"/>
</svg>`
          },
          {
            type: 'photo',
            label: 'Real multimeter — what a ₹300 one looks like',
            src: '/img/multimeter.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'A digital multimeter. You can clearly see the display (top), the large dial in the center to select what to measure (V/A/Ω), and the three probe jacks at the bottom. The red and black probes plug into COM (black) and VΩ (red). The exact model does not matter — any digital multimeter from ₹250 upwards works fine for beginners.' },
            hi: { caption: 'एक digital multimeter। ऊपर display, बीच में बड़ा dial (V/A/Ω select करने के लिए), नीचे तीन probe jacks। काली probe COM में और लाल probe VΩ में जाती है। Model जरूरी नहीं — ₹250 से ऊपर कोई भी digital multimeter beginners के लिए काफी है।' }
          },
          {
            type: 'learn',
            icon: '🔥',
            en: {
              title: 'Soldering iron — for permanent connections',
              body: 'Once you have tested your circuit on a breadboard and it works, you can make it permanent using a soldering iron. It melts a metal called "solder" to join wires and components to a PCB (the real one!). For beginners, a basic 25W iron is enough.',
              list: ['Temperature: ~350°C tip — NEVER touch the tip!', 'Solder wire: rosin-core 60/40, ₹60-100 per roll', 'Basic 25W iron: ₹120-200 at any hardware/electronics shop', 'Always use on a stand — never put a hot iron on the table']
            },
            hi: {
              title: 'Soldering iron — permanent जोड़ बनाने के लिए',
              body: 'जब आपने breadboard पर circuit test कर लिया और वो काम कर गया — तब उसे permanent बनाने के लिए soldering iron use करते हैं। यह एक धातु को पिघलाता है जिसे "solder" कहते हैं, जो wires और components को PCB से जोड़ता है (असली PCB — वो हरी board!). Beginners के लिए basic 25W iron काफी है।',
              list: ['Temperature: ~350°C — tip को कभी मत छुओ!', 'Solder wire: rosin-core 60/40, ₹60-100 प्रति roll', 'Basic 25W iron: ₹120-200 कोई भी hardware/electronics shop', 'हमेशा stand पर रखो — गर्म iron कभी table पर मत रखो']
            }
          },
          {
            type: 'diagram',
            label: 'Soldering iron — parts & safe use',
            svg: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="170" fill="#111827" rx="12"/>
  <!-- handle -->
  <rect x="30" y="75" width="120" height="22" rx="11" fill="#2d3748" stroke="#4a5568" stroke-width="1.5"/>
  <!-- grip lines -->
  ${[0,1,2,3,4].map(i => `<line x1="${50+i*14}" y1="75" x2="${50+i*14}" y2="97" stroke="#1a202c" stroke-width="2" opacity="0.5"/>`).join('')}
  <!-- barrel/ferrule -->
  <rect x="150" y="79" width="30" height="14" rx="3" fill="#718096" stroke="#4a5568" stroke-width="1"/>
  <!-- heating element -->
  <rect x="180" y="80" width="40" height="12" rx="3" fill="#744210" stroke="#92400e" stroke-width="1"/>
  <!-- tip -->
  <polygon points="220,83 255,90 220,97" fill="#a0aec0" stroke="#718096" stroke-width="1"/>
  <!-- heat glow -->
  <ellipse cx="252" cy="90" rx="10" ry="6" fill="#f97316" opacity="0.3"/>
  <ellipse cx="256" cy="90" rx="6" ry="3" fill="#fbbf24" opacity="0.4"/>
  <!-- heat waves -->
  <path d="M258,78 Q262,73 258,68" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.7"/>
  <path d="M264,80 Q268,74 264,68" stroke="#f97316" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- cord -->
  <path d="M30,86 Q15,86 12,100 Q10,120 8,140" stroke="#4a5568" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- power plug -->
  <rect x="4" y="138" width="12" height="18" rx="2" fill="#2d3748" stroke="#4a5568" stroke-width="1"/>
  <rect x="7" y="156" width="3" height="8" rx="1" fill="#94a3b8"/>
  <rect x="12" y="156" width="3" height="8" rx="1" fill="#94a3b8"/>
  <!-- labels -->
  <text x="88" y="70" fill="#94a3b8" font-size="8" text-anchor="middle" font-family="sans-serif">Handle</text>
  <line x1="88" y1="73" x2="88" y2="76" stroke="#94a3b8" stroke-width="1"/>
  <text x="162" y="70" fill="#94a3b8" font-size="8" text-anchor="middle" font-family="sans-serif">Heating</text>
  <line x1="162" y1="73" x2="195" y2="79" stroke="#94a3b8" stroke-width="1"/>
  <text x="235" y="70" fill="#f97316" font-size="8" text-anchor="middle" font-family="sans-serif">HOT TIP</text>
  <text x="235" y="80" fill="#f97316" font-size="7" text-anchor="middle" font-family="sans-serif">~350°C</text>
  <line x1="235" y1="82" x2="245" y2="86" stroke="#f97316" stroke-width="1"/>
  <!-- WARNING -->
  <rect x="60" y="115" width="180" height="40" rx="8" fill="#7f1d1d" opacity="0.8"/>
  <text x="150" y="132" fill="#fca5a5" font-size="9" text-anchor="middle" font-family="sans-serif" font-weight="bold">⚠ NEVER touch the tip!</text>
  <text x="150" y="146" fill="#fca5a5" font-size="8" text-anchor="middle" font-family="sans-serif">Always use iron stand. Keep away from wires.</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Soldering iron setup — real tools',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Soldering_iron_and_accessories.jpg/330px-Soldering_iron_and_accessories.jpg',
            credit: 'Photo: Wikimedia Commons (CC-BY)',
            en: { caption: 'A complete soldering setup: iron with stand, solder wire (silver coil), and flux. The stand (spiral-shaped holder) is ESSENTIAL — never put a hot iron directly on the table. Always wait 5 minutes after switching off before touching the tip. The silver wire is solder — it melts and creates permanent joints.' },
            hi: { caption: 'पूरा soldering setup: stand के साथ iron, solder wire (चांदी का coil), और flux। Stand (spiral holder) बहुत जरूरी है — गर्म iron कभी सीधे table पर मत रखो। Switch off के बाद 5 मिनट रुको tip को छूने से पहले। चांदी की wire solder है — यह पिघलकर permanent joint बनाती है।' }
          },
          {
            type: 'fact',
            en: { text: "Full beginner toolkit for India: Breadboard (₹50) + Jumper wire set (₹50) + Components kit with LEDs/resistors/capacitors (₹100) + Digital multimeter (₹300) + 9V battery + clip (₹30) = Under ₹550 total! Available on Amazon, Flipkart, Robu.in, or local markets: Lajpat Rai (Delhi), Lamington Road (Mumbai), SP Road (Bangalore)." },
            hi: { text: "भारत के लिए पूरी beginner toolkit: Breadboard (₹50) + Jumper wire set (₹50) + Components kit (₹100) + Digital multimeter (₹300) + 9V battery + clip (₹30) = कुल ₹550 से कम! Amazon, Flipkart, Robu.in, या local markets: लाजपत राय (दिल्ली), लैमिंगटन रोड (मुंबई), SP Road (बैंगलोर) पर मिलता है।" }
          },
          {
            type: 'quiz',
            en: { question: 'A classmate says "I bought a PCB to test my circuit." What did he actually buy?', options: ['A real PCB from inside a phone', 'A breadboard — the reusable practice board', 'A multimeter', 'A soldering iron'], correct: 1, feedback: 'Exactly! In Indian markets, people often call a breadboard a "PCB" — but a real PCB is the green soldered board inside devices. The breadboard is a reusable practice board — no soldering needed!' },
            hi: { question: 'एक classmate कहता है "मैंने circuit test के लिए PCB खरीदी।" उसने actually क्या खरीदा?', options: ['Phone के अंदर की असली PCB', 'Breadboard — reusable practice board', 'Multimeter', 'Soldering iron'], correct: 1, feedback: 'बिल्कुल सही! भारतीय बाजार में लोग अक्सर breadboard को "PCB" कहते हैं — लेकिन असली PCB वो हरी soldered board होती है जो devices के अंदर होती है। Breadboard एक reusable practice board है — बिना soldering के!' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: "You now know your tools and — importantly — you know that a breadboard is NOT a PCB! You're ahead of most beginners already. Next module: we learn to actually USE the multimeter — the most powerful skill for any electronics person." },
            hi: { msg: "अब आप tools जानते हैं और — सबसे जरूरी — breadboard को PCB नहीं कहेंगे! आप पहले से ज्यादातर beginners से आगे हैं। अगला module: multimeter actually USE करना सीखेंगे — electronics में सबसे powerful skill।" }
          }
        ]
      },
      {
        en: { title: 'Breadboard mastery — build without soldering', time: '7 min' },
        hi: { title: 'Breadboard mastery — बिना soldering के बनाओ', time: '7 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "The breadboard is your sandbox. You can connect and disconnect components instantly, fix mistakes in seconds, and build entire circuits without permanent commitment. I will show you exactly how the connections work inside." },
            hi: { text: "Breadboard आपका sandbox है। Components तुरंत जोड़ो और हटाओ, seconds में गलतियाँ ठीक करो, और बिना permanent commitment के पूरी circuits बनाओ। मैं आपको बताऊँगा कि अंदर connections कैसे काम करते हैं।" }
          },
          {
            type: 'learn',
            icon: '🗺️',
            en: { title: 'Inside the breadboard — how connections work', body: 'The holes in a breadboard are not all connected. Understanding which holes connect to which is THE most important breadboard skill.', list: ['Top and bottom LONG rows (red/blue) = Power Rails — all connected along the row', 'Red rail (+) connects to battery positive', 'Blue/black rail (−) connects to battery negative', 'Middle section: each SHORT row (5 holes, a-b-c-d-e or f-g-h-i-j) is one connection', 'The CENTER GAP separates the two halves — nothing connects across it!', 'Tip: IC chips straddle this center gap so their two sides are separate'] },
            hi: { title: 'Breadboard के अंदर — connections कैसे काम करते हैं', body: 'Breadboard के सभी holes connected नहीं हैं। कौन से holes किससे connect हैं यह जानना THE most important breadboard skill है।', list: ['ऊपर-नीचे LONG rows (red/blue) = Power Rails — पूरी row में connected', 'Red rail (+) = battery positive से जोड़ो', 'Blue/black rail (−) = battery negative से जोड़ो', 'बीच का हिस्सा: हर SHORT row (5 holes, a-b-c-d-e या f-g-h-i-j) एक connection है', 'CENTER GAP दोनों हिस्सों को अलग करता है — इसके पार कुछ connect नहीं होता!', 'Tip: IC chips इस center gap पर बैठते हैं ताकि दोनों sides अलग रहें'] }
          },
          {
            type: 'learn',
            icon: '⚠️',
            en: { title: "The 3 most common breadboard mistakes", body: 'In 10 years of teaching electronics, these three mistakes are responsible for 80% of "why doesn\'t it work?" problems.', list: ["Mistake 1: Component legs not FULLY inserted — must push down until flush", 'Mistake 2: Connecting across the CENTER GAP by accident — check your column letters', 'Mistake 3: Power rails: assuming both halves of the rail are connected — on some large breadboards they are NOT (check with continuity test!)', 'Always use red wire for + (positive) and black for − (negative)'] },
            hi: { title: '3 सबसे common breadboard गलतियाँ', body: 'Electronics पढ़ाते 10 साल में इन तीन गलतियों से 80% "काम क्यों नहीं कर रहा?" problems आते हैं।', list: ['गलती 1: Component legs पूरी तरह INSIDE नहीं — flush होने तक दबाओ', 'गलती 2: CENTER GAP के पार accidentally connect करना — column letters check करो', 'गलती 3: यह मान लेना कि rail के दोनों हिस्से connected हैं — कुछ large breadboards पर नहीं होते! (continuity test से check करो)', 'हमेशा + के लिए red wire और − के लिए black wire use करो'] }
          },
          {
            type: 'tryit',
            en: { title: 'Build a working LED circuit on breadboard', steps: ['Put the 330Ω resistor: one leg in +power rail, other leg in row 5 column D', 'Put LED: long leg (+) in row 5 column E, short leg (−) in row 6 column E', 'Wire: connect row 6 column E to −power rail', 'Connect 9V battery: red clip to + rail, black clip to − rail', 'LED should LIGHT UP!', 'Now try: pull out one wire from the − rail. LED goes off. Reconnect. LED lights. This is how switches work!'] },
            hi: { title: 'Breadboard पर working LED circuit बनाओ', steps: ['330Ω resistor: एक leg +power rail में, दूसरी row 5 column D में', 'LED: लंबी leg (+) row 5 column E में, छोटी leg (−) row 6 column E में', 'Wire: row 6 column E को −power rail से जोड़ो', '9V battery connect करो: red clip to + rail, black clip to − rail', 'LED जलनी चाहिए!', 'अब try करो: − rail से एक wire निकालो। LED बंद। वापस लगाओ। LED जले। यही switches का तरीका है!'] }
          },
          {
            type: 'fact',
            en: { text: 'The standard breadboard has 830 tie points. Mini breadboards have 170. The 830-point size costs about ₹80–₹120 from Indian electronics markets and allows you to build complex circuits with multiple components. One breadboard can be reused thousands of times!' },
            hi: { text: 'Standard breadboard में 830 tie points होते हैं। Mini breadboards में 170। 830-point size भारतीय electronics markets से ₹80–₹120 में मिलता है और multiple components के साथ complex circuits बनाने देता है। एक breadboard हजारों बार reuse हो सकती है!' }
          },
          {
            type: 'quiz',
            en: { question: 'On a breadboard, which row holes are connected to each other?', options: ['All holes in the entire board', 'The 5 holes in the same short row (a-b-c-d-e)', 'Holes in the same column going top to bottom', 'Any holes that are the same color'], correct: 1, feedback: 'Each short row (5 holes, labeled a through e) forms ONE connection point. Place one leg of a component in column a and another component in column b of the SAME row — they are connected!' },
            hi: { question: 'Breadboard पर कौन से row holes आपस में connected हैं?', options: ['पूरे board के सभी holes', 'एक ही short row के 5 holes (a-b-c-d-e)', 'ऊपर से नीचे एक ही column के holes', 'जो भी holes एक ही रंग के हों'], correct: 1, feedback: 'हर short row (5 holes, a से e तक) एक CONNECTION POINT बनाती है। एक component की leg column a में और दूसरे की SAME row के column b में — ये connected हैं!' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: 'You now understand the breadboard completely — the power rails, the short rows, the center gap, and the common mistakes. With this knowledge, you can build any circuit in this course!' },
            hi: { msg: 'अब आप breadboard पूरी तरह समझते हैं — power rails, short rows, center gap और common mistakes। इस knowledge के साथ आप इस course की कोई भी circuit बना सकते हैं!' }
          }
        ]
      },
      {
        en: { title: 'Soldering basics — making permanent connections', time: '8 min' },
        hi: { title: 'Soldering basics — permanent connections बनाना', time: '8 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Breadboards are for learning and testing. Soldering makes it permanent. Mobile phone repair, PCB work, component replacement — all require soldering. I will teach you what it is, how it works, and the two golden rules that make a perfect solder joint every time." },
            hi: { text: "Breadboards सीखने और testing के लिए हैं। Soldering इसे permanent बनाती है। Mobile phone repair, PCB work, component replacement — सब में soldering चाहिए। मैं बताऊँगा यह क्या है, कैसे काम करती है, और दो golden rules जो हर बार perfect solder joint बनाते हैं।" }
          },
          {
            type: 'learn',
            icon: '🌡️',
            en: { title: 'What is soldering?', body: 'Soldering uses a low-melting-point metal alloy (solder) to permanently join two metal surfaces. The soldering iron heats both surfaces so solder flows between them and bonds permanently when cooled.', list: ['Solder: tin/lead alloy (60/40 most common) or lead-free (95% tin). Melts at ~180–220°C', 'Soldering iron tip reaches ~350°C — HOT! Never touch the tip.', 'Flux inside solder wire cleans the metal surface and helps solder flow', 'A good solder joint is shiny and smooth — like a volcano shape', 'A bad joint (cold joint) is dull, lumpy, grey — it may not conduct at all!'] },
            hi: { title: 'Soldering क्या है?', body: 'Soldering एक low-melting-point metal alloy (solder) से दो metal surfaces को permanently जोड़ती है। Soldering iron दोनों surfaces को गर्म करती है ताकि solder उनके बीच बह जाए और ठंडा होने पर permanently bond बन जाए।', list: ['Solder: tin/lead alloy (60/40 सबसे common) या lead-free (95% tin)। ~180–220°C पर पिघलता है', 'Soldering iron tip ~350°C तक — गर्म! Tip कभी मत छुओ।', 'Solder wire के अंदर flux metal surface को साफ करता है और solder flow में मदद करता है', 'अच्छा solder joint चमकदार और smooth होता है — volcano shape जैसा', 'बुरा joint (cold joint) dull, lumpy, grey होता है — conduct नहीं करता!'] }
          },
          {
            type: 'learn',
            icon: '✅',
            en: { title: 'The 2 golden rules of soldering', body: 'Follow these two rules and your solder joints will always be perfect.', list: ['RULE 1: Heat the JOINT, not the solder. Touch the iron to where the component leg meets the PCB pad. Hold 2-3 seconds until hot. THEN touch solder to the joint — it should melt and flow instantly.', 'RULE 2: Do NOT move the joint while solder is cooling! Hold everything still for 3-5 seconds after removing the iron. Moving creates cold joints.', 'Amount: just enough solder to cover the pad and component leg — not a big blob', 'Speed: aim for 3-4 seconds total per joint. Too long = PCB pad lifts off.'] },
            hi: { title: 'Soldering के 2 golden rules', body: 'इन दो rules को follow करो और solder joints हमेशा perfect होंगे।', list: ['RULE 1: JOINT को गर्म करो, solder को नहीं। Iron को वहाँ लगाओ जहाँ component leg PCB pad से मिलती है। 2-3 seconds रुको जब तक गर्म न हो। फिर solder को joint पर लगाओ — instantly पिघलना और बहना चाहिए।', 'RULE 2: Solder ठंडा होते समय joint को हिलाओ मत! Iron हटाने के बाद 3-5 seconds सब कुछ still रखो। हिलाने से cold joints बनते हैं।', 'Amount: बस इतना solder कि pad और component leg cover हो — बड़ा blob नहीं', 'Speed: हर joint के लिए कुल 3-4 seconds। बहुत ज़्यादा देर = PCB pad उठ जाती है।'] }
          },
          {
            type: 'learn',
            icon: '⚠️',
            en: { title: 'Safety — soldering is hot work', list: ['Soldering iron tip is 350°C — burns happen in milliseconds', 'Always put iron back in the STAND when not holding it — never flat on a table', 'Solder smoke is flux fumes — work near an open window or use a fume extractor', 'Wear safety glasses — tiny solder droplets can splash', 'Keep a damp sponge or brass wool tip-cleaner to wipe the tip', 'Iron heats up in 30-60 seconds. Keep children away from the work area.'] },
            hi: { title: 'Safety — soldering गर्म काम है', list: ['Soldering iron tip 350°C है — milliseconds में जलता है', 'Iron को हमेशा STAND में रखो जब पकड़ नहीं रहे — कभी table पर flat नहीं', 'Solder का धुआँ flux fumes हैं — खुली खिड़की के पास काम करो या fume extractor use करो', 'Safety glasses पहनो — solder की छोटी बूँदें splash हो सकती हैं', 'Tip साफ करने के लिए damp sponge या brass wool tip-cleaner रखो', 'Iron 30-60 seconds में गर्म होती है। काम की जगह से बच्चों को दूर रखो।'] }
          },
          {
            type: 'fact',
            en: { text: 'The most common repair in mobile phone work is reflowing (re-melting) cold solder joints under chips. When a phone has a short-circuit fault or a component that "works sometimes", a cold solder joint is often the cause. A professional heat gun or micro-soldering iron is used to rework these — which is exactly what you are learning to do!' },
            hi: { text: 'Mobile phone work में सबसे common repair है chips के नीचे cold solder joints को reflow (re-melting) करना। जब phone में short-circuit fault हो या कोई component "कभी-कभी काम करे", तो cold solder joint अक्सर कारण होता है। Professional heat gun या micro-soldering iron से यह rework किया जाता है — और यही आप सीख रहे हैं!' }
          },
          {
            type: 'quiz',
            en: { question: 'What is a "cold solder joint"?', options: ['A joint made with cold solder wire from the fridge', "A dull, lumpy joint made when the iron moved during cooling or surfaces weren't hot enough", 'A joint that only works when the circuit is cold', 'Any joint that does not use flux'], correct: 1, feedback: "A cold joint forms when solder is applied to a surface that isn't hot enough, or when the joint is moved while cooling. It looks dull and grey, and may not conduct electricity reliably. Always heat the joint first, not the solder!" },
            hi: { question: '"Cold solder joint" क्या है?', options: ['फ्रिज से ठंडे solder wire से बना joint', 'Dull, lumpy joint जो iron हिलने से या surfaces गर्म न होने से बना', 'Joint जो सिर्फ circuit ठंडी होने पर काम करे', 'कोई भी joint जिसमें flux न हो'], correct: 1, feedback: 'Cold joint तब बनता है जब solder ऐसी surface पर लगाया जाए जो काफी गर्म न हो, या joint ठंडा होते समय हिले। यह dull और grey दिखता है, और electricity reliably conduct नहीं करता। हमेशा पहले joint को गर्म करो, solder को नहीं!' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: 'You now know what soldering is, the 2 golden rules, and how to stay safe. The only way to get better is practice — solder 50 joints on an old PCB and they will become second nature. This is how every professional started.' },
            hi: { msg: 'अब आप जानते हैं soldering क्या है, 2 golden rules, और safe कैसे रहें। बेहतर होने का एक ही तरीका है practice — पुराने PCB पर 50 joints solder करो और यह second nature बन जाएगा। हर professional ऐसे ही शुरू हुआ।' }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  5. MULTIMETER
  // ══════════════════════════════════════════════════════
  {
    id: 'multimeter',
    icon: '📟',
    color: '#ef4444',
    en: { name: 'Using a Multimeter', phase: 'Practical' },
    hi: { name: 'Multimeter चलाना', phase: 'व्यावहारिक' },
    lessons: [
      {
        en: { title: 'Know your multimeter — parts and types', time: '7 min' },
        hi: { title: 'Multimeter को जानो — parts और types', time: '7 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Doston, your multimeter might be yellow, black, red, or silver. It might be digital (shows numbers) or analog (has a needle). They all look slightly different — but they ALL work the same way. I will teach you the universal method that works on any multimeter." },
            hi: { text: "दोस्तों, आपका multimeter पीला, काला, लाल या silver हो सकता है। Digital (numbers दिखाए) या analog (needle वाला) हो सकता है। सब थोड़े अलग दिखते हैं — लेकिन सब एक ही तरह काम करते हैं। मैं वो universal method सिखाऊँगा जो किसी भी multimeter पर काम करेगा।" }
          },
          {
            type: 'photo',
            label: 'Digital multimeter — display, dial, probe jacks',
            src: '/img/multimeter_digital.jpg',
            credit: 'André Karwath (CC BY-SA 2.5)',
            en: { caption: 'This is a typical digital multimeter. Yours might be yellow (Ferve), black (Mastech), or red (Mextech) — the brand and color don\'t matter. The layout is always the same: digital display at top showing your reading, big rotary dial in center to select what you measure, and probe jacks at the bottom.' },
            hi: { caption: 'यह एक typical digital multimeter है। आपका पीला (Ferve), काला (Mastech), या लाल (Mextech) हो सकता है — brand और color से फर्क नहीं पड़ता। Layout हमेशा एक जैसा: ऊपर digital display reading दिखाता है, बीच में बड़ा rotary dial क्या मापना है select करता है, नीचे probe jacks।' }
          },
          {
            type: 'learn',
            icon: '🔍',
            en: { title: 'The 5 parts you MUST know', body: 'Before you touch a multimeter, know these 5 parts. This is the same on every multimeter in the world.', list: ['1. DISPLAY — shows your reading as numbers (e.g. 9.2V, 330Ω)', '2. ROTARY DIAL — big knob in center. Turn it to select what to measure', '3. COM jack — BLACK probe ALWAYS goes here (COM = Common = negative)', '4. VΩ jack — RED probe goes here for Voltage, Resistance, Continuity', '5. 10A jack — RED probe moves HERE only when measuring high current'] },
            hi: { title: 'The 5 parts you MUST know', body: 'Multimeter छूने से पहले ये 5 हिस्से जानो। यह दुनिया के हर multimeter में एक जैसा है।', list: ['1. DISPLAY — reading numbers में दिखाता है (जैसे 9.2V, 330Ω)', '2. ROTARY DIAL — बीच में बड़ा knob। घुमाकर क्या मापना है select करो', '3. COM jack — BLACK probe हमेशा यहाँ (COM = Common = negative)', '4. VΩ jack — Voltage, Resistance, Continuity के लिए RED probe यहाँ', '5. 10A jack — HIGH current मापते समय RED probe यहाँ जाती है'] }
          },
          {
            type: 'diagram',
            label: 'Multimeter — every part explained',
            svg: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="240" fill="#1a1d35" rx="12"/>
  <!-- Multimeter body -->
  <rect x="90" y="14" width="100" height="155" rx="14" fill="#f59e0b" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Display -->
  <rect x="100" y="22" width="80" height="36" rx="5" fill="#0f1a0f" stroke="#10b981" stroke-width="1.5"/>
  <text x="140" y="45" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle" font-family="monospace">12.6</text>
  <!-- Dial -->
  <circle cx="140" cy="112" r="28" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
  <circle cx="140" cy="112" r="10" fill="#333" stroke="#555" stroke-width="1.5"/>
  <text x="140" y="90" fill="#f59e0b" font-size="6.5" text-anchor="middle" font-family="sans-serif">V~</text>
  <text x="162" y="99" fill="#10b981" font-size="6.5" text-anchor="middle" font-family="sans-serif">V⎓</text>
  <text x="168" y="115" fill="#a78bfa" font-size="6.5" text-anchor="middle" font-family="sans-serif">Ω</text>
  <text x="162" y="132" fill="#60a5fa" font-size="6.5" text-anchor="middle" font-family="sans-serif">A</text>
  <text x="118" y="132" fill="#ccc" font-size="6.5" text-anchor="middle" font-family="sans-serif">OFF</text>
  <line x1="140" y1="112" x2="156" y2="98" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
  <!-- Probe jacks -->
  <circle cx="115" cy="155" r="7" fill="#1e2040" stroke="#ef4444" stroke-width="1.5"/>
  <circle cx="140" cy="155" r="7" fill="#1e2040" stroke="#555" stroke-width="1.5"/>
  <circle cx="165" cy="155" r="7" fill="#1e2040" stroke="#ef4444" stroke-width="1.5"/>
  <text x="115" y="174" fill="#ef4444" font-size="6.5" text-anchor="middle" font-family="sans-serif">10A</text>
  <text x="140" y="174" fill="#aaa" font-size="6.5" text-anchor="middle" font-family="sans-serif">COM</text>
  <text x="165" y="174" fill="#ef4444" font-size="6.5" text-anchor="middle" font-family="sans-serif">VΩ</text>
  <!-- Probe wires -->
  <line x1="140" y1="162" x2="50" y2="210" stroke="#222" stroke-width="3"/>
  <line x1="165" y1="162" x2="230" y2="210" stroke="#5a0000" stroke-width="3"/>
  <circle cx="50" cy="214" r="4" fill="#111" stroke="#444" stroke-width="1"/>
  <circle cx="230" cy="214" r="4" fill="#5a0000" stroke="#ef4444" stroke-width="1"/>
  <text x="50" y="228" fill="#aaa" font-size="7.5" text-anchor="middle" font-family="sans-serif">black probe</text>
  <text x="230" y="228" fill="#ef4444" font-size="7.5" text-anchor="middle" font-family="sans-serif">red probe</text>
  <!-- Annotation arrows and labels -->
  <line x1="180" y1="40" x2="212" y2="30" stroke="#10b981" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="214" y="28" fill="#10b981" font-size="7" font-family="sans-serif">Display — reads numbers</text>
  <line x1="168" y1="112" x2="210" y2="98" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="212" y="96" fill="#f59e0b" font-size="7" font-family="sans-serif">Dial — select mode</text>
  <line x1="140" y1="148" x2="100" y2="188" stroke="#aaa" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="2" y="192" fill="#aaa" font-size="6.5" font-family="sans-serif">COM — black</text>
  <text x="2" y="201" fill="#aaa" font-size="6.5" font-family="sans-serif">probe always</text>
  <line x1="165" y1="148" x2="210" y2="188" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="212" y="193" fill="#ef4444" font-size="6.5" font-family="sans-serif">VΩ — red</text>
  <text x="212" y="202" fill="#ef4444" font-size="6.5" font-family="sans-serif">probe here</text>
</svg>`
          },
          {
            type: 'photo',
            label: 'Analog multimeter — needle and scale',
            src: '/img/multimeter_analog.jpg',
            credit: 'Wikimedia Commons (CC-BY-SA)',
            en: { caption: 'This is an analog multimeter. Instead of a digital display, it has a NEEDLE that swings over a printed scale. Notice the arc-shaped scales — different lines for DC voltage, AC voltage, resistance, and current. You read whichever line matches your dial setting.' },
            hi: { caption: 'यह एक analog multimeter है। Digital display की जगह एक NEEDLE है जो printed scale पर swing करती है। Arc-shaped scales देखो — DC voltage, AC voltage, resistance और current के लिए अलग lines। Dial जिस setting पर हो, उसी line को पढ़ो।' }
          },
          {
            type: 'learn',
            icon: '📊',
            en: { title: 'Digital vs Analog — how to read both', body: 'Two types of multimeters exist. Digital (shows numbers on screen) and Analog (moving needle over printed scale). Many older repair shops in India still use analog meters. Here is how to read each type:', list: ['DIGITAL: reading appears directly as numbers — 9.23V. Easy and accurate.', 'ANALOG: needle swings over scale. Read the line that matches your dial setting.', 'Analog resistance scale runs RIGHT TO LEFT — 0Ω on right, ∞ on left (opposite of voltage!)', 'Analog: before measuring resistance, SHORT the probes and zero the needle with the Zero Ω adjuster knob', 'Analog: hold the meter flat to avoid parallax error — read the needle straight on, not from an angle', 'Auto-ranging: modern digital meters select the range automatically', 'Manual-ranging (analog + older digital): always start at HIGHEST range, work down'] },
            hi: { title: 'Digital vs Analog — दोनों कैसे पढ़ें', body: 'दो प्रकार के multimeters। Digital (screen पर numbers) और Analog (printed scale पर needle)। भारत में पुराने repair shops में analog meters अभी भी मिलते हैं।', list: ['DIGITAL: reading directly numbers में — 9.23V। आसान और accurate।', 'ANALOG: needle scale पर swing करती है। Dial की setting वाली line पढ़ो।', 'Analog resistance scale RIGHT TO LEFT होती है — दाईं तरफ 0Ω, बाईं तरफ ∞ (voltage के उल्टा!)', 'Analog resistance: मापने से पहले probes short करो और Zero Ω adjuster knob से needle zero करो', 'Parallax error से बचो — meter flat रखो, needle को सीधे सामने से पढ़ो', 'Auto-ranging: modern digital meters range automatically select करते हैं', 'Manual-ranging (analog + पुराने digital): हमेशा HIGHEST range से शुरू करो'] }
          },
          {
            type: 'quiz',
            en: { question: 'Where does the BLACK probe ALWAYS go?', options: ['VΩ jack', '10A jack', 'COM jack', 'Any jack works'], correct: 2, feedback: 'BLACK probe ALWAYS into COM — this never changes on any multimeter. RED probe goes to VΩ for most measurements (move to 10A only for high current).' },
            hi: { question: 'BLACK probe हमेशा कहाँ जाती है?', options: ['VΩ jack', '10A jack', 'COM jack', 'कोई भी jack'], correct: 2, feedback: 'BLACK probe हमेशा COM में — यह किसी भी multimeter पर कभी नहीं बदलता। RED probe ज्यादातर measurements के लिए VΩ में जाती है।' }
          },
          {
            type: 'complete', xp: 20,
            en: { msg: "You know your multimeter's parts! Now the most important skill — actually USING it. Next lesson: check a battery, test a wire, measure a resistor." },
            hi: { msg: "आप multimeter के parts जानते हैं! अब सबसे जरूरी skill — actually USE करना। अगला पाठ: battery check करना, wire test करना, resistor मापना।" }
          }
        ]
      },
      {
        en: { title: 'Measuring voltage — battery and AC mains', time: '8 min' },
        hi: { title: 'Voltage मापना — battery और AC mains', time: '8 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "The #1 repair skill: is this battery still good? With a multimeter, you know in 5 seconds. I will walk you through it step by step — just follow along." },
            hi: { text: "Repair की #1 skill: क्या यह battery अभी भी अच्छी है? Multimeter से 5 seconds में पता चलता है। मैं आपको step by step बताऊँगा।" }
          },
          {
            type: 'learn',
            icon: '🔋',
            en: { title: 'Step 1 — Measuring DC voltage (batteries)', body: 'DC voltage is what batteries produce. Follow these exact steps every time.', list: ['Plug: BLACK probe → COM jack', 'Plug: RED probe → VΩ jack', 'Turn dial to V⎓ (DC Voltage) — look for straight lines symbol', 'If manual-ranging: choose 20V (above the battery\'s expected voltage)', 'Touch RED probe to battery + (positive/longer end)', 'Touch BLACK probe to battery − (negative/flat end)', 'Read the display!'] },
            hi: { title: 'Step 1 — DC voltage मापना (batteries)', body: 'DC voltage वो है जो batteries produce करती हैं। हर बार ये exact steps follow करो।', list: ['लगाओ: BLACK probe → COM jack', 'लगाओ: RED probe → VΩ jack', 'Dial को V⎓ (DC Voltage) पर घुमाओ — straight lines symbol देखो', 'Manual-ranging है तो: 20V choose करो (battery की expected voltage से ऊपर)', 'RED probe को battery के + (positive) से छुओ', 'BLACK probe को battery के − (negative) से छुओ', 'Display पढ़ो!'] }
          },
          {
            type: 'tryit',
            en: { title: 'Check a 9V battery right now', steps: ['Get a 9V battery from your kit', 'BLACK probe → COM jack, RED probe → VΩ jack', 'Turn dial to V⎓ (DC Voltage), select 20V range if manual', 'Touch RED to the small round + terminal, BLACK to the hexagonal − terminal', 'Read display: 8.5-9.5V = good battery | below 7V = weak | below 5V = dead', 'Try reversing the probes — you\'ll see a negative reading. That\'s fine, just shows you have them backwards.'] },
            hi: { title: '9V battery अभी check करो', steps: ['Kit से 9V battery निकालो', 'BLACK probe → COM, RED probe → VΩ', 'Dial को V⎓ पर घुमाओ, manual है तो 20V select करो', 'RED probe को छोटे गोल + terminal पर, BLACK को hexagonal − terminal पर लगाओ', 'Display पढ़ो: 8.5-9.5V = अच्छी | 7V से कम = कमज़ोर | 5V से कम = मृत', 'Probes उल्टे करके देखो — negative reading आएगी। ठीक है, बस उल्टे लगे हैं।'] }
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'Step 2 — AC voltage (wall sockets)', body: '⚠️ SAFETY FIRST: Never measure AC voltage until you are comfortable. India uses 230V AC which CAN KILL if you short-circuit it. For practice, just verify concepts — don\'t connect to a live socket in your first week.', list: ['India standard: 230V AC at 50 Hz', 'Turn dial to V~ (AC Voltage) — wavy line symbol', 'BLACK → COM, RED → VΩ (same as always)', 'Insert probes one in each slot — reading should show ~230V', 'IMPORTANT: Never touch the metal tips of probes when measuring AC!', 'Auto-ranging meters handle this automatically — manual: select 600V range'] },
            hi: { title: 'Step 2 — AC voltage (wall sockets)', body: '⚠️ पहले SAFETY: AC voltage तभी मापो जब comfortable हो। भारत में 230V AC है जो SHORT CIRCUIT होने पर जान ले सकती है। पहले हफ्ते live socket पर connect मत करो।', list: ['भारत standard: 230V AC, 50 Hz', 'Dial को V~ (AC Voltage) पर घुमाओ — wavy line symbol', 'BLACK → COM, RED → VΩ (जैसा हमेशा)', 'एक probe हर slot में — ~230V आना चाहिए', 'IMPORTANT: AC मापते समय probes की metal tips को कभी मत छुओ!', 'Auto-ranging: खुद handle करता है — manual: 600V range select करो'] }
          },
          {
            type: 'fact',
            en: { text: "A simple way to remember: DC voltage (batteries, circuits) = V⎓ with straight lines. AC voltage (house power, mains) = V~ with a wavy line. The wave symbol literally represents the alternating (back-and-forth) nature of AC power!" },
            hi: { text: "याद रखने का आसान तरीका: DC voltage (batteries) = V⎓ straight lines। AC voltage (घर की बिजली) = V~ wavy line। Wave symbol literally AC power की alternating (आगे-पीछे) nature दर्शाता है!" }
          },
          {
            type: 'quiz',
            en: { question: 'You want to check if a 9V battery is still good. What dial setting do you use?', options: ['V~ (wavy line)', 'V⎓ (straight lines)', 'Ω (resistance)', 'A (current)'], correct: 1, feedback: 'V⎓ (DC voltage with straight lines) is for batteries and electronics circuits. V~ is for AC mains power. A battery is always DC.' },
            hi: { question: '9V battery check करनी है। Dial किस पर set करोगे?', options: ['V~ (wavy line)', 'V⎓ (straight lines)', 'Ω (resistance)', 'A (current)'], correct: 1, feedback: 'V⎓ (DC voltage, straight lines) batteries और electronics circuits के लिए। V~ AC mains के लिए। Battery हमेशा DC होती है।' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: "You can now measure voltage — both battery (DC) and mains (AC). This single skill will let you test every power supply in your repair work. Next: the most used daily skill — continuity and resistance." },
            hi: { msg: "अब आप voltage माप सकते हैं — battery (DC) और mains (AC) दोनों। यह single skill आपको repair work में हर power supply test करने देगी। अगला: रोज़ सबसे ज्यादा use होने वाला skill।" }
          }
        ]
      },
      {
        en: { title: 'Resistance, continuity and current', time: '10 min' },
        hi: { title: 'Resistance, continuity और current', time: '10 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "This lesson has the skill that mobile repair technicians use 100 times every day: continuity. If you learn nothing else from this module, learn the continuity test. It will tell you instantly if a wire is broken, if a solder joint is good, or if a component has failed." },
            hi: { text: "इस lesson में वो skill है जो mobile repair technicians दिन में 100 बार use करते हैं: continuity। अगर इस module से कुछ एक सीखना हो, तो continuity test सीखो। यह instantly बताएगा — wire टूटी है, solder joint अच्छा है, या component fail हो गया।" }
          },
          {
            type: 'learn',
            icon: '🔢',
            en: { title: 'Step 3 — Measuring resistance', body: 'Resistance tells you the value of a component (resistor, etc.) or if something is broken (infinite resistance = open circuit). Always measure resistance with POWER OFF.', list: ['⚠️ Power must be OFF — measuring resistance on a live circuit gives wrong readings', 'Turn dial to Ω (resistance)', 'BLACK → COM, RED → VΩ', 'Touch probes across the component (both legs of the resistor)', 'Read the display: e.g. 330 = 330 Ω, 4.7k = 4700 Ω', 'OL or 1 on display = overload = open circuit (broken or too high range)'] },
            hi: { title: 'Step 3 — Resistance मापना', body: 'Resistance किसी component की value (resistor आदि) या breakage (infinite resistance = open circuit) बताता है। Resistance हमेशा POWER OFF करके मापो।', list: ['⚠️ Power OFF हो — live circuit पर resistance मापने से गलत reading आती है', 'Dial को Ω पर घुमाओ', 'BLACK → COM, RED → VΩ', 'Probes component के दोनों legs के पार लगाओ', 'Display पढ़ो: 330 = 330 Ω, 4.7k = 4700 Ω', 'OL या 1 display पर = overload = open circuit (टूटा या range बड़ी)'] }
          },
          {
            type: 'tryit',
            en: { title: 'Measure a resistor from your kit', steps: ['Pick any resistor from your kit', 'Power off everything', 'Turn dial to Ω', 'BLACK → COM, RED → VΩ', 'Touch one probe to each leg of the resistor', 'Read the value — e.g. 330 Ω or 4.7 kΩ', 'Compare with the color bands on the resistor — they should match!'] },
            hi: { title: 'Kit से एक resistor measure करो', steps: ['Kit से कोई भी resistor लो', 'सब कुछ बंद करो', 'Dial को Ω पर घुमाओ', 'BLACK → COM, RED → VΩ', 'एक probe हर leg पर', 'Value पढ़ो — जैसे 330 Ω या 4.7 kΩ', 'Resistor के color bands से compare करो — match होनी चाहिए!'] }
          },
          {
            type: 'learn',
            icon: '🔔',
            en: { title: 'Step 4 — Continuity test (most important!)', body: 'Continuity tells you: are these two points electrically connected? You will use this every single day in repair work. BEEP = connected. SILENCE = broken.', list: ['Turn dial to continuity symbol (🔔 or ))) or sound wave icon)', 'BLACK → COM, RED → VΩ', 'First test: touch both probe tips together — you should hear a BEEP. If no beep, your meter\'s battery may be low.', 'Now touch probes to two points you want to test', 'BEEP = connected, current can flow', 'NO BEEP = not connected, open circuit, broken wire or joint'] },
            hi: { title: 'Step 4 — Continuity test (सबसे जरूरी!)', body: 'Continuity बताता है: ये दो points electrically जुड़े हैं क्या? यह repair work में रोज़ काम आएगा। BEEP = जुड़े हैं। SILENCE = टूटे हैं।', list: ['Dial को continuity symbol (🔔 या ))) या sound wave) पर घुमाओ', 'BLACK → COM, RED → VΩ', 'पहले test: दोनों probe tips को एक साथ छुओ — BEEP सुनाई देनी चाहिए। No beep तो meter की battery कम हो सकती है।', 'अब उन दो points पर probes लगाओ जो test करने हैं', 'BEEP = जुड़े हैं, current चल सकती है', 'NO BEEP = नहीं जुड़े, open circuit, टूटी wire या joint'] }
          },
          {
            type: 'tryit',
            en: { title: 'Test a wire for continuity', steps: ['Take a jumper wire from your kit', 'Set dial to continuity (beep symbol)', 'Touch one probe to each end of the wire', 'You should hear a BEEP — the wire is complete', 'Now try on a broken or damaged wire — no beep = broken', 'Also try: touch probes to opposite ends of a resistor — you\'ll hear a beep (it\'s connected, just with resistance)'] },
            hi: { title: 'Wire का continuity test करो', steps: ['Kit से कोई jumper wire लो', 'Dial को continuity (beep symbol) पर set करो', 'Wire के दोनों सिरों पर एक-एक probe लगाओ', 'BEEP सुनाई देनी चाहिए — wire पूरी है', 'अब टूटी या damaged wire try करो — no beep = टूटी है', 'यह भी try करो: resistor के दोनों legs पर probes — beep आएगी (connected है, बस resistance के साथ)'] }
          },
          {
            type: 'learn',
            icon: '⚠️',
            en: { title: 'Step 5 — Measuring current (handle with care)', body: 'Current measurement is DIFFERENT from all others. The meter must become PART of the circuit. This is where beginners make dangerous mistakes.', list: ['Move RED probe to 10A jack (not VΩ!)', 'Set dial to A (current)', 'The circuit must be BROKEN — meter connects in series (in between)', 'NEVER connect across a battery or power supply directly — this shorts the meter and can cause injury', 'After measuring, MOVE RED probe BACK to VΩ immediately', 'Most beginners don\'t need current measurement until intermediate level — focus on voltage and continuity first'] },
            hi: { title: 'Step 5 — Current मापना (सावधानी से)', body: 'Current measurement बाकी सब से DIFFERENT है। Meter को circuit का हिस्सा बनना पड़ता है। यहीं beginners से dangerous गलतियाँ होती हैं।', list: ['RED probe को 10A jack में लगाओ (VΩ नहीं!)', 'Dial को A (current) पर set करो', 'Circuit BREAK होनी चाहिए — meter series में जोड़ते हैं (बीच में)', 'Battery या power supply के directly across कभी मत लगाओ — meter short हो जाएगा और चोट लग सकती है', 'Measure करने के बाद RED probe तुरंत वापस VΩ में लगाओ', 'ज्यादातर beginners को intermediate level तक current measurement की जरूरत नहीं — पहले voltage और continuity पर focus करो'] }
          },
          {
            type: 'fact',
            en: { text: "The most common mistake with multimeters: forgetting to move the RED probe back to VΩ after measuring current. If you then try to measure voltage with RED in the 10A jack, you SHORT CIRCUIT the power source through the meter. This can blow the meter's internal fuse or damage it permanently. Always check where your RED probe is before measuring!" },
            hi: { text: "Multimeter के साथ सबसे आम गलती: current measure करने के बाद RED probe वापस VΩ में रखना भूल जाना। अगर फिर RED 10A jack में होते हुए voltage measure करो, तो meter के through power source SHORT हो जाती है। यह meter का internal fuse उड़ा सकता है या permanently damage कर सकता है। Measure करने से पहले हमेशा check करो RED probe कहाँ है!" }
          },
          {
            type: 'quiz',
            en: { question: 'You finished measuring current. What MUST you do immediately before your next measurement?', options: ['Turn off the multimeter', 'Move RED probe back to VΩ jack', 'Replace the battery', 'Set dial to OFF'], correct: 1, feedback: 'Move RED probe back to VΩ immediately after current measurement. Leaving it in 10A and then measuring voltage creates a short circuit through the meter — this blows the fuse or damages the meter.' },
            hi: { question: 'Current measure करने के बाद immediately क्या करना MUST है?', options: ['Multimeter बंद करो', 'RED probe तुरंत वापस VΩ में लगाओ', 'Battery बदलो', 'Dial OFF पर set करो'], correct: 1, feedback: 'RED probe तुरंत वापस VΩ में लगाओ। 10A में छोड़ कर voltage measure करने से meter के through short circuit बनती है।' }
          },
          {
            type: 'complete', xp: 40,
            en: { msg: "You are now a multimeter user! Voltage (DC + AC), resistance, continuity, current — these are the same skills every professional repair technician uses. Practice with a battery and resistors every day for one week and you will never forget it." },
            hi: { msg: "अब आप multimeter user हैं! Voltage (DC + AC), resistance, continuity, current — यही skills हर professional repair technician use करता है। एक हफ्ते तक रोज़ battery और resistors से practice करो और आप इसे कभी नहीं भूलेंगे।" }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  6. PCB & CIRCUITS
  // ══════════════════════════════════════════════════════
  {
    id: 'pcb',
    icon: '🟢',
    color: '#10b981',
    en: { name: 'PCB & Circuits', phase: 'Reading' },
    hi: { name: 'PCB और Circuits', phase: 'पढ़ना' },
    lessons: [
      {
        en: { title: 'What is a PCB?', time: '5 min' },
        hi: { title: 'PCB क्या होता है?', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Every phone, TV remote, and laptop has a PCB inside. PCB stands for Printed Circuit Board. It's the green board with components soldered onto it. Understanding PCBs means you can understand what's inside any device." },
            hi: { text: "हर फोन, TV remote और laptop में PCB होता है। PCB का मतलब है Printed Circuit Board। यह वो हरा board है जिस पर components लगे होते हैं।" }
          },
          {
            type: 'learn',
            icon: '🟢',
            en: { title: 'What is a PCB?', body: 'A PCB is a board that mechanically supports and electrically connects components using copper tracks instead of wires.', list: ['Green color = solder mask (protective coating)', 'Copper traces = the wires, printed onto the board', 'Pads = the spots where components attach', 'Silkscreen = white text/labels you see on top', 'FR4 = the actual board material (fiberglass)'] },
            hi: { title: 'PCB क्या है?', body: 'PCB एक board है जो components को mechanically hold करता है और copper tracks से electrically जोड़ता है।', list: ['हरा रंग = solder mask (सुरक्षात्मक coating)', 'Copper traces = wires, board पर छपे हुए', 'Pads = वो जगहें जहाँ components लगते हैं', 'Silkscreen = सफेद text/labels जो ऊपर दिखते हैं', 'FR4 = actual board material (fiberglass)'] }
          },
          {
            type: 'diagram',
            label: 'PCB — Anatomy',
            svg: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="180" fill="#1a1d35" rx="12"/>
  <!-- PCB board -->
  <rect x="20" y="20" width="260" height="140" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <!-- copper traces -->
  <path d="M50,80 L120,80 L120,60 L200,60" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M50,100 L80,100 L80,130 L220,130" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M200,60 L200,100 L250,100" stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- IC chip -->
  <rect x="110" y="70" width="60" height="50" rx="4" fill="#1a1a2e" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="140" y="92" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="monospace">IC</text>
  <text x="140" y="104" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="monospace">555</text>
  <!-- component pads -->
  <circle cx="50" cy="80" r="5" fill="#c2410c" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="50" cy="100" r="5" fill="#c2410c" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="190" y="50" width="20" height="20" rx="2" fill="#c2410c" stroke="#f59e0b" stroke-width="1"/>
  <!-- LED -->
  <circle cx="230" cy="80" r="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="230" y="84" fill="#10b981" font-size="8" text-anchor="middle" font-family="sans-serif">D1</text>
  <!-- annotations -->
  <line x1="50" y1="80" x2="30" y2="50" stroke="#9ba3c8" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="28" y="46" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="sans-serif">Pad</text>
  <line x1="120" y1="65" x2="105" y2="40" stroke="#9ba3c8" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="100" y="36" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="sans-serif">Trace</text>
  <line x1="200" y1="55" x2="225" y2="35" stroke="#9ba3c8" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="238" y="31" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="sans-serif">Component</text>
  <line x1="140" y1="70" x2="155" y2="45" stroke="#9ba3c8" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="165" y="41" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="sans-serif">IC chip</text>
</svg>`
          },
          {
            type: 'fact',
            en: { text: "The PCB in a modern smartphone has up to 12 layers of copper traces stacked on top of each other — all in a board less than 1mm thick. Engineers design these like a 3D map of connections!" },
            hi: { text: "एक modern smartphone के PCB में 12 तक copper trace layers होती हैं — एक-दूसरे के ऊपर — सब 1mm से कम मोटे board में। Engineers इन्हें 3D map की तरह design करते हैं!" }
          },
          {
            type: 'quiz',
            en: { question: 'What do the copper traces on a PCB replace?', options: ['Components', 'Wires', 'The battery', 'The display'], correct: 1, feedback: 'Copper traces replace wires. Instead of messy wires connecting components, a PCB has neat copper paths printed directly onto the board.' },
            hi: { question: 'PCB पर copper traces क्या replace करते हैं?', options: ['Components', 'Wires', 'Battery', 'Display'], correct: 1, feedback: 'Copper traces wires replace करते हैं। उलझे wires की जगह, PCB पर neat copper paths होते हैं।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "Now when you open a device and see the green board — you know what you're looking at! Traces, pads, silkscreen — you can read a PCB now. One more module to go: your first projects!" },
            hi: { msg: "अब जब आप कोई device खोलें और हरा board देखें — आप जानते हैं क्या देख रहे हैं! Traces, pads, silkscreen — आप PCB पढ़ सकते हैं।" }
          }
        ]
      },
      {
        en: { title: 'Read a PCB — identify components and traces', time: '7 min' },
        hi: { title: 'PCB पढ़ना — components और traces पहचानो', time: '7 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "When you open a phone or any device, a PCB stares back at you. Hundreds of components, tiny traces, mysterious ICs. After this lesson, you will know what you are looking at — and that is the first step to fixing it." },
            hi: { text: "जब आप phone या कोई device खोलते हैं, एक PCB आपको देखती है। सैकड़ों components, tiny traces, रहस्यमय ICs। इस lesson के बाद आप जानेंगे कि आप क्या देख रहे हैं — और यही पहला कदम है इसे ठीक करने का।" }
          },
          {
            type: 'learn',
            icon: '🔍',
            en: { title: 'What you see on a PCB', list: ['GREEN layer = solder mask — protects copper traces. (Can also be red, blue, black, white)', 'SILVER/GOLD pads = where components are soldered', 'THIN LINES between pads = copper TRACES — these are the wires of the PCB', 'SILK SCREEN (white text) = component labels: R1=resistor 1, C3=capacitor 3, U1=IC chip 1, D1=diode/LED 1', 'VIAS = small holes with copper inside — connect traces between layers', 'On phones: the PCB has 6-12 layers of copper traces sandwiched together!'] },
            hi: { title: 'PCB पर क्या दिखता है', list: ['GREEN layer = solder mask — copper traces को protect करता है। (Red, blue, black, white भी हो सकता है)', 'SILVER/GOLD pads = जहाँ components soldered हैं', 'Pads के बीच THIN LINES = copper TRACES — PCB के wires हैं ये', 'SILK SCREEN (white text) = component labels: R1=resistor 1, C3=capacitor 3, U1=IC chip 1, D1=diode/LED 1', 'VIAS = copper के साथ छोटे holes — layers के बीच traces connect करते हैं', 'Phones पर: PCB में 6-12 layers copper traces एक साथ!'] }
          },
          {
            type: 'learn',
            icon: '🗺️',
            en: { title: 'Layers — why PCBs are not just one sheet', body: 'A simple breadboard circuit has 1 layer. Your phone PCB has 6-12 layers. Each layer carries traces, and vias connect them.', list: ['Single-sided PCB: traces on one side only — cheapest, used in simple devices', 'Double-sided PCB: traces on both sides — common in Arduino, affordable gadgets', 'Multi-layer PCB (4-12+ layers): traces sandwiched inside — used in phones, laptops', 'You cannot see inner layers by eye — X-ray or special software shows them', 'As a repair tech, you mainly work on the TOP and BOTTOM surface layers'] },
            hi: { title: 'Layers — PCBs सिर्फ एक sheet नहीं क्यों', body: 'Simple breadboard circuit में 1 layer होती है। आपके phone PCB में 6-12 layers। हर layer traces carry करती है, और vias उन्हें connect करते हैं।', list: ['Single-sided PCB: traces एक ही side पर — सबसे सस्ता, simple devices में', 'Double-sided PCB: traces दोनों sides पर — Arduino, affordable gadgets में common', 'Multi-layer PCB (4-12+ layers): traces अंदर sandwiched — phones, laptops में', 'Inner layers आँखों से नहीं दिखतीं — X-ray या special software दिखाते हैं', 'Repair tech के रूप में आप mainly TOP और BOTTOM surface layers पर काम करते हैं'] }
          },
          {
            type: 'learn',
            icon: '🔎',
            en: { title: 'How to identify components on a PCB', list: ['Large black rectangles = ICs (Integrated Circuits) — read the text on top (e.g. "ATmega328P", "NE555")', 'Tiny 2-pin components = resistors (dark, no markings) or capacitors (brown or grey)', 'Cylindrical with stripe = electrolytic capacitor (polarity matters!)', 'Small 3-leg component = transistor or voltage regulator', 'Large rectangular component with many pins = processor, memory, WiFi/Bluetooth chip', 'Silver box = crystal oscillator (sets the clock speed)', 'Look for the silk-screen reference: R12, C5, U3 — these map to the schematic'] },
            hi: { title: 'PCB पर components कैसे पहचानें', list: ['बड़े black rectangles = ICs (Integrated Circuits) — ऊपर text पढ़ो (जैसे "ATmega328P", "NE555")', 'Tiny 2-pin components = resistors (dark, no markings) या capacitors (brown या grey)', 'Stripe के साथ cylindrical = electrolytic capacitor (polarity matters!)', 'छोटा 3-leg component = transistor या voltage regulator', 'Many pins वाला large rectangular component = processor, memory, WiFi/Bluetooth chip', 'Silver box = crystal oscillator (clock speed set करता है)', 'Silk-screen reference ढूंढो: R12, C5, U3 — ये schematic से match करते हैं'] }
          },
          {
            type: 'fact',
            en: { text: 'A modern smartphone PCB contains over 1,000 surface-mount components. The smallest are 01005 size (0.4mm × 0.2mm) — smaller than a grain of sand. Placing and soldering these at factory scale requires robotic precision. Repair technicians use microscopes and micro-soldering stations to work on these boards.' },
            hi: { text: 'Modern smartphone PCB में 1,000 से ज़्यादा surface-mount components होते हैं। सबसे छोटे 01005 size (0.4mm × 0.2mm) होते हैं — रेत के एक कण से भी छोटे। Factory scale पर इन्हें लगाने और solder करने के लिए robotic precision चाहिए। Repair technicians इन boards पर काम करने के लिए microscopes और micro-soldering stations use करते हैं।' }
          },
          {
            type: 'quiz',
            en: { question: 'On a PCB silk screen, you see "C12". What does this component most likely refer to?', options: ['A coil or inductor', 'The 12th capacitor in the design', 'A crystal oscillator', 'A connector port'], correct: 1, feedback: 'C = Capacitor in standard electronics labeling. C12 is the 12th capacitor in the circuit design. R = Resistor, U = IC chip, D = Diode, Q = Transistor, L = Inductor, J or P = Connector.' },
            hi: { question: 'PCB silk screen पर "C12" लिखा है। यह component सबसे likely क्या है?', options: ['Coil या inductor', 'Design का 12वाँ capacitor', 'Crystal oscillator', 'Connector port'], correct: 1, feedback: 'Standard electronics labeling में C = Capacitor। C12 = circuit design का 12वाँ capacitor। R = Resistor, U = IC chip, D = Diode, Q = Transistor, L = Inductor, J या P = Connector।' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: 'You can now look at a PCB and understand what you are seeing — traces, pads, component labels, layers. This is the foundation of PCB repair. Next: how to troubleshoot and diagnose faults on a real board.' },
            hi: { msg: 'अब आप PCB देख कर समझ सकते हैं — traces, pads, component labels, layers। यह PCB repair की नींव है। आगे: real board पर faults कैसे troubleshoot और diagnose करें।' }
          }
        ]
      },
      {
        en: { title: 'Troubleshoot a PCB — find what is broken', time: '8 min' },
        hi: { title: 'PCB troubleshoot करो — क्या टूटा है खोजो', time: '8 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "A mobile phone is brought to you. It doesn't turn on. Where do you start? Random guessing wastes time. A systematic approach finds the fault in minutes. This is the exact method professional repair technicians use." },
            hi: { text: "एक mobile phone आपके पास आता है। चालू नहीं हो रहा। कहाँ से शुरू करें? Random guessing से समय बर्बाद होता है। Systematic approach minutes में fault ढूंढती है। यही तरीका professional repair technicians use करते हैं।" }
          },
          {
            type: 'learn',
            icon: '🔬',
            en: { title: 'The 5-step troubleshooting approach', list: ['Step 1: VISUAL INSPECTION — look for burnt components (black marks), cracked ICs, missing parts, water damage (white residue or corrosion)', 'Step 2: POWER CHECK — does the board get voltage? Use multimeter to check power input points', 'Step 3: CONTINUITY CHECK — is there a short circuit? (dead short = 0Ω between + and −)', 'Step 4: COMPONENT TEST — test individual components (diodes, transistors, capacitors)', 'Step 5: SIGNAL TRACE — follow the signal path from input to output, find where it stops'] },
            hi: { title: '5-step troubleshooting approach', list: ['Step 1: VISUAL INSPECTION — burnt components (black marks), cracked ICs, missing parts, water damage (white residue या corrosion) देखो', 'Step 2: POWER CHECK — board को voltage मिल रही है? Power input points check करने के लिए multimeter use करो', 'Step 3: CONTINUITY CHECK — short circuit तो नहीं? (dead short = + और − के बीच 0Ω)', 'Step 4: COMPONENT TEST — individual components test करो (diodes, transistors, capacitors)', 'Step 5: SIGNAL TRACE — input से output तक signal path follow करो, कहाँ रुकती है देखो'] }
          },
          {
            type: 'learn',
            icon: '💧',
            en: { title: 'Water damage — the most common PCB fault', list: ['Water itself does not damage electronics — the MINERALS in water cause corrosion', 'Signs: white or green crust on components, corroded traces, rust on metal shields', 'First step: POWER OFF immediately (water + electricity = short circuit = permanent damage)', 'Clean with 99% Isopropyl Alcohol (IPA) and a soft brush', 'Check for shorts after cleaning — replace corroded components', 'Always check under IC chips and connectors — water hides there'] },
            hi: { title: 'Water damage — सबसे common PCB fault', list: ['पानी खुद electronics damage नहीं करता — पानी में MINERALS corrosion करते हैं', 'Signs: components पर white या green crust, corroded traces, metal shields पर rust', 'पहला कदम: तुरंत POWER OFF (पानी + बिजली = short circuit = permanent damage)', '99% Isopropyl Alcohol (IPA) और soft brush से clean करो', 'Clean करने के बाद shorts check करो — corroded components replace करो', 'हमेशा IC chips और connectors के नीचे check करो — पानी वहाँ छुपता है'] }
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'Short circuit diagnosis', list: ['A short circuit is 0Ω (or near 0) between + power and − ground', 'Set multimeter to resistance or continuity mode', 'Touch probes to + and − power rails on the PCB', 'BEEP or 0Ω = short circuit exists somewhere on the board', 'To find WHERE: use thermal camera (board heats at short location) or inject small current and find warm spot', 'Common short causes: water damage, solder bridge between pads, damaged capacitor'] },
            hi: { title: 'Short circuit diagnosis', list: ['Short circuit = + power और − ground के बीच 0Ω (या near 0)', 'Multimeter को resistance या continuity mode पर set करो', 'PCB के + और − power rails पर probes लगाओ', 'BEEP या 0Ω = board पर कहीं short circuit है', 'WHERE ढूंढने के लिए: thermal camera use करो (short location पर board गर्म होता है) या छोटा current inject करो और warm spot ढूंढो', 'Common short causes: water damage, pads के बीच solder bridge, damaged capacitor'] }
          },
          {
            type: 'tryit',
            en: { title: 'Inspect an old PCB from e-waste', steps: ['Find an old broken charger, toy, or any PCB (e-waste)', 'Look for burnt spots (black marks around components)', 'Check for missing components (empty solder pads)', 'Find capacitors that look swollen or cracked at the top (failed electrolytic caps)', 'Use multimeter continuity mode to test a few traces — probe both ends of a trace', 'Practice identifying R (resistors), C (capacitors), U (ICs) from silk screen labels'] },
            hi: { title: 'E-waste से पुरानी PCB inspect करो', steps: ['पुराना टूटा charger, toy, या कोई PCB (e-waste) ढूंढो', 'Burnt spots देखो (components के आसपास black marks)', 'Missing components check करो (खाली solder pads)', 'Capacitors ढूंढो जो ऊपर से swollen या cracked लगें (failed electrolytic caps)', 'Multimeter continuity mode से कुछ traces test करो — trace के दोनों ends probe करो', 'Silk screen labels से R (resistors), C (capacitors), U (ICs) पहचानने की practice करो'] }
          },
          {
            type: 'quiz',
            en: { question: 'A phone PCB shows 0Ω between the + power rail and − ground. What does this mean?', options: ['Perfect — the circuit is complete', 'There is a short circuit somewhere on the board', 'The battery is fully charged', 'The PCB needs new software'], correct: 1, feedback: 'A 0Ω reading between + and − power rails means a SHORT CIRCUIT — something is causing + and − to connect directly. This will drain a battery instantly and can burn components. Finding and removing the shorted component fixes the fault.' },
            hi: { question: 'Phone PCB पर + power rail और − ground के बीच 0Ω दिखता है। इसका क्या मतलब है?', options: ['Perfect — circuit complete है', 'Board पर कहीं short circuit है', 'Battery पूरी तरह charged है', 'PCB को नया software चाहिए'], correct: 1, feedback: '+ और − power rails के बीच 0Ω = SHORT CIRCUIT — कुछ + और − को directly connect कर रहा है। यह battery तुरंत drain करेगा और components जल सकते हैं। Shorted component ढूंढो और हटाओ — fault ठीक हो जाएगी।' }
          },
          {
            type: 'complete', xp: 40,
            en: { msg: 'You now have a systematic approach to PCB troubleshooting: visual inspection, power check, continuity check, component test, signal trace. This is exactly how professional mobile repair technicians approach every fault. Real skill comes from practice — get some old PCBs and start inspecting!' },
            hi: { msg: 'अब आपके पास PCB troubleshooting का systematic approach है: visual inspection, power check, continuity check, component test, signal trace। Professional mobile repair technicians हर fault को exactly इसी तरह approach करते हैं। Real skill practice से आती है — कुछ पुरानी PCBs लो और inspect करना शुरू करो!' }
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  7. FIRST PROJECTS
  // ══════════════════════════════════════════════════════
  {
    id: 'projects',
    icon: '🚀',
    color: '#a78bfa',
    en: { name: 'Your First Projects', phase: 'Projects' },
    hi: { name: 'पहले प्रोजेक्ट', phase: 'प्रोजेक्ट' },
    lessons: [
      {
        en: { title: 'Build an LED circuit on breadboard', time: '8 min' },
        hi: { title: 'Breadboard पर LED circuit बनाएं', time: '8 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "This is the moment everything comes together. You understand electricity, you know components, you've learned Ohm's Law, you can use a multimeter. Now let's BUILD something. Your first real electronic circuit!" },
            hi: { text: "यह वो पल है जब सब कुछ एक साथ आता है। आप बिजली समझते हैं, components जानते हैं, Ohm's Law सीखा है, multimeter चला सकते हैं। अब कुछ बनाते हैं!" }
          },
          {
            type: 'learn',
            icon: '🛒',
            en: { title: 'What you need', body: 'Before you build, gather these components. Total cost: about ₹50 from any electronics shop.', list: ['1 × Breadboard (mini is fine)', '1 × 9V battery + clip/wires', '1 × LED (any color)', '1 × 330Ω resistor (orange-orange-brown)', '2 × jumper wires (or any thin wire)'] },
            hi: { title: 'आपको क्या चाहिए', body: 'बनाने से पहले ये components इकट्ठा करें। कुल लागत: किसी भी electronics shop से ₹50।', list: ['1 × Breadboard (mini भी ठीक है)', '1 × 9V battery + clip/wires', '1 × LED (कोई भी रंग)', '1 × 330Ω resistor (orange-orange-brown)', '2 × jumper wires (या कोई पतला wire)'] }
          },
          {
            type: 'diagram',
            label: 'LED Circuit — Breadboard Layout',
            svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="200" fill="#1a1d35" rx="12"/>
  <!-- Breadboard -->
  <rect x="30" y="50" width="240" height="120" rx="6" fill="#e7e5e4" stroke="#9ba3c8" stroke-width="1"/>
  <!-- power rails -->
  <rect x="32" y="52" width="236" height="16" rx="3" fill="#fef3c7"/>
  <rect x="32" y="152" width="236" height="16" rx="3" fill="#fee2e2"/>
  <text x="42" y="63" fill="#b45309" font-size="7" font-family="sans-serif" font-weight="bold">+ + + + + + + + + + + + + + + + + + +</text>
  <text x="42" y="163" fill="#991b1b" font-size="7" font-family="sans-serif" font-weight="bold">− − − − − − − − − − − − − − − − − − −</text>
  <!-- breadboard holes grid -->
  <g fill="#6b7280">
    <!-- row a-e representation simplified -->
    <rect x="60" y="72" width="180" height="76" rx="2" fill="#d6d3d1"/>
  </g>
  <!-- holes pattern -->
  <g fill="#374151">
    <circle cx="75" cy="85" r="2.5"/><circle cx="90" cy="85" r="2.5"/><circle cx="105" cy="85" r="2.5"/>
    <circle cx="120" cy="85" r="2.5"/><circle cx="135" cy="85" r="2.5"/><circle cx="150" cy="85" r="2.5"/>
    <circle cx="165" cy="85" r="2.5"/><circle cx="180" cy="85" r="2.5"/><circle cx="195" cy="85" r="2.5"/>
    <circle cx="75" cy="100" r="2.5"/><circle cx="90" cy="100" r="2.5"/><circle cx="105" cy="100" r="2.5"/>
    <circle cx="120" cy="100" r="2.5"/><circle cx="135" cy="100" r="2.5"/><circle cx="150" cy="100" r="2.5"/>
    <circle cx="165" cy="100" r="2.5"/><circle cx="180" cy="100" r="2.5"/><circle cx="195" cy="100" r="2.5"/>
    <circle cx="75" cy="115" r="2.5"/><circle cx="90" cy="115" r="2.5"/><circle cx="105" cy="115" r="2.5"/>
    <circle cx="120" cy="115" r="2.5"/><circle cx="135" cy="115" r="2.5"/><circle cx="150" cy="115" r="2.5"/>
    <circle cx="165" cy="115" r="2.5"/><circle cx="180" cy="115" r="2.5"/><circle cx="195" cy="115" r="2.5"/>
    <circle cx="75" cy="130" r="2.5"/><circle cx="90" cy="130" r="2.5"/><circle cx="105" cy="130" r="2.5"/>
    <circle cx="120" cy="130" r="2.5"/><circle cx="135" cy="130" r="2.5"/><circle cx="150" cy="130" r="2.5"/>
    <circle cx="165" cy="130" r="2.5"/><circle cx="180" cy="130" r="2.5"/><circle cx="195" cy="130" r="2.5"/>
  </g>
  <!-- Wire from + rail to resistor -->
  <line x1="75" y1="60" x2="75" y2="85" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Resistor -->
  <rect x="100" y="80" width="40" height="12" rx="3" fill="#c2410c" stroke="#92400e" stroke-width="1"/>
  <line x1="75" y1="86" x2="100" y2="86" stroke="#c2410c" stroke-width="2.5"/>
  <line x1="140" y1="86" x2="165" y2="86" stroke="#c2410c" stroke-width="2.5"/>
  <text x="120" y="90" fill="#fff" font-size="6" text-anchor="middle" font-family="sans-serif">330Ω</text>
  <!-- LED -->
  <ellipse cx="165" cy="103" rx="8" ry="14" fill="#bbf7d0" stroke="#10b981" stroke-width="1.5"/>
  <line x1="158" y1="113" x2="158" y2="130" stroke="#9ba3c8" stroke-width="2"/>
  <line x1="172" y1="113" x2="172" y2="130" stroke="#9ba3c8" stroke-width="2"/>
  <!-- light rays from LED -->
  <line x1="178" y1="92" x2="188" y2="82" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="180" y1="100" x2="192" y2="96" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Wire from LED − to − rail -->
  <line x1="158" y1="130" x2="158" y2="152" stroke="#9ba3c8" stroke-width="2" stroke-linecap="round"/>
  <!-- Battery symbol -->
  <rect x="225" y="75" width="50" height="70" rx="6" fill="#1e2040" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="250" y="108" fill="#a78bfa" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">9V</text>
  <line x1="250" y1="75" x2="250" y2="60" stroke="#f59e0b" stroke-width="2"/>
  <text x="257" y="58" fill="#10b981" font-size="9" font-family="sans-serif">+</text>
  <line x1="250" y1="145" x2="250" y2="160" stroke="#9ba3c8" stroke-width="2"/>
  <text x="257" y="165" fill="#ef4444" font-size="9" font-family="sans-serif">−</text>
  <!-- battery to rails -->
  <line x1="250" y1="60" x2="75" y2="60" stroke="#f59e0b" stroke-width="2"/>
  <line x1="250" y1="160" x2="158" y2="160" stroke="#9ba3c8" stroke-width="2"/>
  <line x1="158" y1="160" x2="158" y2="155" stroke="#9ba3c8" stroke-width="2"/>
</svg>`
          },
          {
            type: 'learn',
            icon: '🔨',
            en: { title: 'Build it — step by step', body: 'Follow these steps exactly and your LED will light up!', list: ['Step 1: Connect 9V battery + (red wire) to the + rail on breadboard', 'Step 2: Connect 9V battery − (black wire) to the − rail', 'Step 3: Put the 330Ω resistor from + rail to column D, row 5', 'Step 4: Put LED longer leg (+) in column D row 5, shorter leg (−) in row 6', 'Step 5: Wire from LED − pin to − rail', 'Step 6: Connect battery — LED should LIGHT UP! 🎉'] },
            hi: { title: 'इसे बनाएं — step by step', body: 'इन steps को ध्यान से follow करें और आपकी LED जलेगी!', list: ['Step 1: 9V battery + (red wire) को breadboard के + rail से जोड़ें', 'Step 2: 9V battery − (black wire) को − rail से', 'Step 3: 330Ω resistor को + rail से column D, row 5 में लगाएं', 'Step 4: LED का लंबा पैर (+) column D row 5 में, छोटा (−) row 6 में', 'Step 5: LED − pin से − rail तक wire', 'Step 6: Battery connect करें — LED जलनी चाहिए! 🎉'] }
          },
          {
            type: 'tryit',
            en: { title: 'If your LED does not light up...', body: '', steps: ['Check: is the LED the right way around? (long = +)', 'Check: is the resistor connected between + rail and LED?', 'Use your multimeter on continuity to test each connection', 'Check the battery with your multimeter (should show ~9V)', 'Try a different LED — sometimes they are faulty'] },
            hi: { title: 'अगर LED नहीं जली...', body: '', steps: ['जाँचें: LED सही तरफ है? (लंबा = +)', 'जाँचें: resistor + rail और LED के बीच है?', 'Multimeter से continuity test करें हर connection का', 'Battery check करें (~9V आनी चाहिए)', 'अलग LED try करें — कभी-कभी वो खराब होती हैं'] }
          },
          {
            type: 'quiz',
            en: { question: 'You built the LED circuit but it does not light. First thing to check?', options: ['Buy a new battery', 'Check LED orientation — long leg must be connected toward +', 'Remove the resistor', 'Add a second battery'], correct: 1, feedback: 'LED polarity is the most common beginner mistake. Long leg = Anode = must connect toward the positive side. Short leg = Cathode = to negative.' },
            hi: { question: 'LED circuit बनाई पर नहीं जली। पहले क्या check करें?', options: ['नई battery खरीदें', 'LED की दिशा जाँचें — लंबा पैर + की तरफ होना चाहिए', 'Resistor हटाएं', 'दूसरी battery जोड़ें'], correct: 1, feedback: 'LED polarity सबसे आम beginner गलती है। लंबा पैर = Anode = positive की तरफ। छोटा पैर = Cathode = negative।' }
          },
          {
            type: 'complete', xp: 50,
            en: { msg: "🎉 YOU BUILT A REAL CIRCUIT! This is not just a lesson — you have physically created something that controls electricity. Every engineer, maker, and inventor started exactly where you are right now. You're one of us now. Keep building!" },
            hi: { msg: "🎉 आपने एक असली CIRCUIT बनाई! यह सिर्फ एक पाठ नहीं है — आपने physically कुछ बनाया है जो बिजली को नियंत्रित करता है। हर engineer, maker और inventor ठीक यहीं से शुरू हुए। आप अब हम में से एक हैं!" }
          }
        ]
      },
      {
        en: { title: 'Add a switch — control your LED', time: '6 min' },
        hi: { title: 'Switch लगाओ — LED को control करो', time: '6 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "Every circuit in the world has some form of switching. Light switches, power buttons, touch screens — all are switches at heart. In this project you will add a tactile push button to your LED circuit and understand exactly how switches work." },
            hi: { text: "दुनिया की हर circuit में किसी न किसी तरह की switching होती है। Light switches, power buttons, touch screens — सब दिल से switches हैं। इस project में आप अपनी LED circuit में एक tactile push button जोड़ेंगे और समझेंगे कि switches exactly कैसे काम करते हैं।" }
          },
          {
            type: 'learn',
            icon: '🔘',
            en: { title: 'How a push button works', body: 'A tactile push button (the small square buttons in kits) has 4 legs. Inside is a simple mechanism: press = connect, release = disconnect.', list: ['4 legs, but only 2 unique connections: A-B are one side, C-D are the other', 'Unpressed: no connection between A-B and C-D sides', 'Pressed: A-B side connects to C-D side — current can flow', 'The button straddles the CENTER GAP of the breadboard', 'Legs on the same side (A and B together, C and D together) are ALWAYS connected — useful to know!'] },
            hi: { title: 'Push button कैसे काम करता है', body: 'Tactile push button (kits में छोटे square buttons) में 4 legs होती हैं। अंदर simple mechanism: press = connect, release = disconnect।', list: ['4 legs, लेकिन केवल 2 unique connections: A-B एक side, C-D दूसरी', 'Unpressed: A-B और C-D sides के बीच कोई connection नहीं', 'Pressed: A-B side C-D side से connect होती है — current बह सकती है', 'Button breadboard के CENTER GAP पर बैठता है', 'एक ही side की legs (A और B साथ, C और D साथ) ALWAYS connected हैं — यह useful है!'] }
          },
          {
            type: 'learn',
            icon: '🗺️',
            en: { title: 'Switch position in the circuit', list: ['A switch is placed IN SERIES with the component it controls', 'In series = the switch is in the same path as the current', 'When switch opens (unpressed) → circuit breaks → LED off', 'When switch closes (pressed) → circuit complete → LED on', 'Where to place it: anywhere in the series path works — before resistor, after LED, before battery'] },
            hi: { title: 'Circuit में switch की position', list: ['Switch उस component के IN SERIES में लगता है जिसे control करना है', 'In series = switch current के same path में है', 'Switch open (unpressed) → circuit टूटती है → LED off', 'Switch close (pressed) → circuit complete → LED on', 'कहाँ लगाएं: series path में कहीं भी काम करता है — resistor से पहले, LED के बाद, battery से पहले'] }
          },
          {
            type: 'tryit',
            en: { title: 'Add a button to your LED circuit', steps: ['Keep your existing LED + 330Ω resistor circuit on the breadboard', 'Place a push button straddling the CENTER GAP, e.g. columns e and f, row 8', 'Disconnect the wire from + power rail to the resistor', 'Instead: wire from + power rail → button pin on one side (e.g. row 8, column d)', 'Wire from other button side (row 8, column g) → resistor → LED → ground', 'Press the button: LED lights up. Release: LED goes off.', 'You just built a light switch!'] },
            hi: { title: 'LED circuit में button जोड़ो', steps: ['Breadboard पर अपनी existing LED + 330Ω resistor circuit रहने दो', 'Push button CENTER GAP पर रखो, जैसे columns e और f, row 8', '+ power rail से resistor तक जाने वाली wire disconnect करो', 'बजाय इसके: + power rail → button pin एक side (जैसे row 8, column d)', 'दूसरी button side (row 8, column g) → resistor → LED → ground', 'Button press करो: LED जले। छोड़ो: LED बंद।', 'आपने एक light switch बनाया!'] }
          },
          {
            type: 'fact',
            en: { text: "A smartphone screen is 1,000 to 3,000 tactile switches in disguise. Each touch-point detects a change in electrical capacitance (how much charge is stored). Your finger changes the capacitance, the chip reads it as a \"press.\" That is why gloves don't work — they block the capacitance change!" },
            hi: { text: "Smartphone screen भेस में 1,000 से 3,000 tactile switches हैं। हर touch-point electrical capacitance में बदलाव detect करता है (कितना charge stored है)। आपकी उंगली capacitance बदलती है, chip इसे \"press\" पढ़ती है। इसीलिए gloves काम नहीं करते — वे capacitance change को block करते हैं!" }
          },
          {
            type: 'quiz',
            en: { question: 'In an LED circuit with a switch in series, the LED stays ON even when the switch is open (unpressed). What is the likely cause?', options: ['The LED is too bright', 'The switch is not in series — it is wired in parallel, bypassing the switch', 'The resistor value is too high', 'The battery is too strong'], correct: 1, feedback: 'If the LED stays on when the switch is open, the switch is wired in PARALLEL (alongside the LED) instead of in SERIES (in the current path). In parallel, the LED has a complete path that bypasses the switch entirely. Re-wire so the switch breaks the series path.' },
            hi: { question: 'Series switch वाली LED circuit में switch open (unpressed) होने पर भी LED ON रहती है। संभावित कारण क्या है?', options: ['LED बहुत bright है', 'Switch series में नहीं है — parallel में wired है, switch को bypass कर रहा है', 'Resistor value बहुत high है', 'Battery बहुत strong है'], correct: 1, feedback: 'अगर switch open होने पर भी LED जले, तो switch PARALLEL में wired है (LED के साथ) SERIES में नहीं (current path में)। Parallel में LED का एक complete path है जो switch को bypass करता है। फिर से wire करो ताकि switch series path तोड़े।' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: 'You built a switch-controlled LED — a real interactive circuit! This concept (switch in series) is the basis of every light switch, keyboard key, power button, and relay in existence. Try adding a second LED in parallel, or a second button in series.' },
            hi: { msg: 'आपने switch-controlled LED बनाई — एक real interactive circuit! यह concept (switch in series) हर light switch, keyboard key, power button और relay की basis है। एक दूसरी LED parallel में जोड़ने की, या दूसरा button series में जोड़ने की try करो।' }
          }
        ]
      },
      {
        en: { title: 'Mini alarm — buzzer and transistor', time: '10 min' },
        hi: { title: 'Mini alarm — buzzer और transistor', time: '10 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "This is your most advanced project yet: a buzzer alarm controlled by a transistor switch. You will use THREE components working together — battery, transistor, buzzer — and wire a light sensor (LDR) so the alarm beeps when a light is blocked. This is the same principle as security alarms and automatic night lights." },
            hi: { text: "यह अब तक का आपका सबसे advanced project है: transistor switch से control होने वाला buzzer alarm। आप तीन components एक साथ use करेंगे — battery, transistor, buzzer — और एक light sensor (LDR) wire करेंगे ताकि light block होने पर alarm beep करे। यही principle security alarms और automatic night lights में होता है।" }
          },
          {
            type: 'learn',
            icon: '📢',
            en: { title: 'What is a buzzer?', list: ['A piezo buzzer is a small disc that vibrates at high frequency when powered — makes a BEEP sound', 'Active buzzer: just needs power (+ and −) to beep continuously. Has a tiny circuit inside.', 'Passive buzzer: needs a rapidly changing signal to make sound (like an Arduino PWM pin)', 'For this project, use an ACTIVE buzzer (usually marked with a + on the top or have tape over the hole)', 'Typical ratings: 3V to 12V, 30mA current', 'In Indian markets: piezo buzzer costs ₹5–₹15'] },
            hi: { title: 'Buzzer क्या है?', list: ['Piezo buzzer एक छोटी disc है जो powered होने पर high frequency पर vibrate करती है — BEEP sound', 'Active buzzer: बस power (+ और −) चाहिए continuously beep के लिए। अंदर tiny circuit है।', 'Passive buzzer: sound के लिए rapidly changing signal चाहिए (जैसे Arduino PWM pin)', 'इस project के लिए ACTIVE buzzer use करो (आमतौर पर ऊपर + marked या hole पर tape)', 'Typical ratings: 3V से 12V, 30mA current', 'भारतीय markets में: piezo buzzer ₹5–₹15'] }
          },
          {
            type: 'learn',
            icon: '🔌',
            en: { title: 'Circuit: transistor as a switch', body: 'The BC547 transistor has 3 legs: Base (B), Collector (C), Emitter (E). A small current into the Base controls a larger current through Collector→Emitter.', list: ['Flat face of BC547 pointing toward you: left=Collector, middle=Base, right=Emitter', 'Buzzer connects between + supply and Collector', 'Emitter connects to − (ground)', 'Base gets a small signal through a 10kΩ resistor', 'When Base gets current → transistor switches ON → buzzer beeps', 'This is how a transistor acts as a RELAY — a small signal controlling a bigger load'] },
            hi: { title: 'Circuit: transistor एक switch की तरह', body: 'BC547 transistor में 3 legs हैं: Base (B), Collector (C), Emitter (E)। Base में छोटा current Collector→Emitter के through बड़े current को control करता है।', list: ['BC547 की flat face आपकी तरफ: left=Collector, middle=Base, right=Emitter', 'Buzzer + supply और Collector के बीच connect', 'Emitter − (ground) से connect', 'Base को 10kΩ resistor के through छोटा signal मिलता है', 'Base को current मिले → transistor ON → buzzer beeps', 'इस तरह transistor RELAY की तरह काम करता है — छोटा signal बड़ा load control करता है'] }
          },
          {
            type: 'tryit',
            en: { title: 'Build the LDR alarm circuit', steps: ['Components needed: BC547 transistor, active buzzer, LDR, 10kΩ resistor, 1kΩ resistor, 9V battery, breadboard', 'LDR + 10kΩ resistor in series between + and − (voltage divider)', 'Midpoint of LDR/10kΩ → through 1kΩ → to Base of BC547', 'Buzzer +ve → 9V supply', 'Buzzer −ve → Collector of BC547', 'Emitter of BC547 → Ground', 'In bright light: LDR resistance low → Base gets current → buzzer beeps', 'Cover LDR: resistance increases → Base current drops → buzzer stops', 'Reverse LDR and 10kΩ positions to flip logic!'] },
            hi: { title: 'LDR alarm circuit बनाओ', steps: ['Components चाहिए: BC547 transistor, active buzzer, LDR, 10kΩ resistor, 1kΩ resistor, 9V battery, breadboard', 'LDR + 10kΩ resistor series में + और − के बीच (voltage divider)', 'LDR/10kΩ का midpoint → 1kΩ के through → BC547 के Base तक', 'Buzzer +ve → 9V supply', 'Buzzer −ve → BC547 का Collector', 'BC547 का Emitter → Ground', 'Bright light में: LDR resistance कम → Base को current → buzzer beeps', 'LDR ढकें: resistance बढ़े → Base current कम → buzzer बंद', 'Logic flip करने के लिए LDR और 10kΩ की positions swap करो!'] }
          },
          {
            type: 'fact',
            en: { text: 'This LDR alarm circuit is the basis of automatic street lights (off in daylight, on at night), burglar alarms (beam broken = alarm), and photocopier paper sensors. The LDR (Light Dependent Resistor) + voltage divider + transistor combination appears in millions of real products. You just built a functional version of it!' },
            hi: { text: 'यह LDR alarm circuit automatic street lights (दिन में बंद, रात में चालू), burglar alarms (beam टूटी = alarm) और photocopier paper sensors की basis है। LDR (Light Dependent Resistor) + voltage divider + transistor combination लाखों real products में है। आपने इसका functional version बनाया!' }
          },
          {
            type: 'quiz',
            en: { question: 'In the LDR alarm circuit, the buzzer beeps in bright light. To make it beep in DARKNESS instead, what do you do?', options: ['Use a different transistor', 'Swap the positions of the LDR and the 10kΩ fixed resistor in the voltage divider', 'Use a brighter LED', 'Increase the battery voltage'], correct: 1, feedback: 'By swapping LDR and fixed resistor positions in the voltage divider, the midpoint voltage is high in darkness (when LDR resistance is high) and low in bright light (when LDR resistance is low). This flips which condition triggers the transistor. The rest of the circuit stays the same.' },
            hi: { question: 'LDR alarm circuit में buzzer bright light में beeps करता है। इसके बजाय DARKNESS में beep करवाने के लिए क्या करें?', options: ['अलग transistor use करो', 'Voltage divider में LDR और 10kΩ fixed resistor की positions swap करो', 'Brighter LED use करो', 'Battery voltage बढ़ाओ'], correct: 1, feedback: 'Voltage divider में LDR और fixed resistor positions swap करने से midpoint voltage अंधेरे में high (LDR resistance high) और bright light में low (LDR resistance low) होती है। यह flip करता है कि कौन सी condition transistor trigger करे। Circuit का बाकी हिस्सा same रहता है।' }
          },
          {
            type: 'complete', xp: 50,
            en: { msg: "You built a light-sensitive alarm using a transistor, LDR, and buzzer — a real sensor-actuator system! This is genuine electronics engineering. From here, the path goes to Arduino, Raspberry Pi, and beyond. You have already taken the hardest step: starting." },
            hi: { msg: "आपने transistor, LDR और buzzer से light-sensitive alarm बनाया — एक real sensor-actuator system! यह genuine electronics engineering है। यहाँ से रास्ता Arduino, Raspberry Pi और आगे जाता है। आप पहले से ही सबसे कठिन कदम उठा चुके हैं: शुरुआत।" }
          }
        ]
      }
    ]
  }
];

const GLOSSARY = [
  {
    en: 'Resistor', hi: 'रेसिस्टर', symbol: 'R', unit: 'Ω (Ohm)',
    desc_en: 'Limits current flow. Higher resistance = less current through the circuit.',
    desc_hi: 'Current को कम करता है। जितना ज़्यादा resistance, उतनी कम current।',
    explain_en: 'Think of a resistor like a narrow section in a water pipe — it slows the flow. In real life: if you connect an LED directly to a battery without a resistor, it burns out instantly. A 330Ω resistor in series protects the LED perfectly.',
    explain_hi: 'Resistor एक तरह की रुकावट है — जैसे पानी की pipe में कोई तंग मोड़ हो। असली ज़िंदगी में: अगर LED को सीधे battery से लगा दो बिना resistor के, तो LED तुरंत जल जाएगी। इसीलिए 330 Ohm का resistor लगाते हैं — current को कम करता है, LED सुरक्षित रहती है।'
  },
  {
    en: 'Capacitor', hi: 'कैपेसिटर', symbol: 'C', unit: 'µF / pF',
    desc_en: 'Stores electrical charge and releases it quickly when needed.',
    desc_hi: 'Charge जमा करता है और ज़रूरत पड़ने पर एकदम से छोड़ता है।',
    explain_en: 'A capacitor is like a small rechargeable tank — it fills with charge and releases it in a burst. Real life: your phone camera flash uses a capacitor to give that sudden bright flash. Also used in phone chargers to smooth out the voltage.',
    explain_hi: 'Capacitor एक छोटी tank की तरह है जो charge भरती है और एक झटके में दे देती है। असली ज़िंदगी में: phone की camera flash capacitor की वजह से इतनी तेज़ रोशनी देती है। Charger के अंदर capacitor होता है जो voltage को smooth रखता है।'
  },
  {
    en: 'LED', hi: 'एल.ई.डी.', symbol: 'D', unit: 'V / mA',
    desc_en: 'Light Emitting Diode — a component that produces light when current flows through it.',
    desc_hi: 'एक component जो current मिलने पर रोशनी देता है।',
    explain_en: 'LED stands for Light Emitting Diode. It only works in one direction — connect it backwards and it will not light up. Always use a resistor with it. Real life: phone charging indicator, TV remote\'s red dot, keyboard backlight — all are LEDs.',
    explain_hi: 'LED का मतलब है Light Emitting Diode — यानी वो component जो current से रोशनी बनाए। इसे हमेशा सही दिशा में लगाओ — उल्टा लगाने पर नहीं जलेगी। साथ में resistor ज़रूरी है। असली ज़िंदगी में: phone की charging light, TV remote की लाल बत्ती, keyboard की backlight — ये सब LED हैं।'
  },
  {
    en: 'Transistor', hi: 'ट्रांजिस्टर', symbol: 'Q', unit: 'gain (β)',
    desc_en: 'Acts as an electronic switch or amplifier. A tiny signal at the Base controls a larger current.',
    desc_hi: 'Electronic switch या amplifier की तरह काम करता है। Base पर छोटा signal, बड़ा current control।',
    explain_en: 'A transistor is like a gate that opens or closes based on a small electrical signal. Real life: your phone processor has billions of transistors — all on a chip smaller than your fingernail. A single transistor can switch on a motor, a relay, or an LED using just a tiny signal from a microcontroller.',
    explain_hi: 'Transistor एक दरवाज़े की तरह है जो एक छोटे signal से खुलता या बंद होता है। असली ज़िंदगी में: आपके phone के processor में अरबों transistors हैं — नाखून से छोटी chip में। एक transistor से आप motor, relay या LED को control कर सकते हो सिर्फ एक छोटे signal से।'
  },
  {
    en: 'Diode', hi: 'डायोड', symbol: 'D', unit: 'V (forward)',
    desc_en: 'One-way valve for electricity — current flows in only one direction.',
    desc_hi: 'बिजली का एकतरफा दरवाज़ा — current सिर्फ एक ही दिशा में जाती है।',
    explain_en: 'A diode is like a one-way valve — electricity goes in only one direction. Real life: inside every phone charger is a diode that converts AC from the wall socket into DC for your phone. Without it your phone would be destroyed.',
    explain_hi: 'Diode एकतरफा रास्ते की तरह है — current सिर्फ एक तरफ जाती है। असली ज़िंदगी में: हर phone charger के अंदर diode होता है जो wall socket की AC current को DC में बदलता है। इसके बिना phone जल जाए।'
  },
  {
    en: 'Voltage', hi: 'वोल्टेज', symbol: 'V', unit: 'Volts (V)',
    desc_en: 'The electrical pressure or push that drives current through a circuit.',
    desc_hi: 'वह "धक्का" जो current को circuit में चलाता है।',
    explain_en: 'Voltage is like water pressure — without pressure water does not flow, without voltage current does not flow. Real life: a phone battery gives 3.7V, a household socket gives 220V AC, a USB charger gives 5V DC. Always check voltage before connecting anything.',
    explain_hi: 'Voltage वह pressure है जो current को circuit में धकेलता है — जैसे पानी को pipe में धकेलने के लिए pressure चाहिए। असली ज़िंदगी में: phone की battery 3.7V देती है, घर का socket 220V देता है, USB charger 5V देता है। कोई भी device connect करने से पहले voltage ज़रूर check करो।'
  },
  {
    en: 'Current', hi: 'करंट', symbol: 'I', unit: 'Amperes (A)',
    desc_en: 'The actual flow of electrons through a conductor. Measured in Amperes.',
    desc_hi: 'Electrons का बहना। जितने ज़्यादा electrons, उतनी ज़्यादा current।',
    explain_en: 'Current is the actual movement of electrons — like water flowing through a pipe. Real life: a phone charger marked "2A" charges faster than a "1A" charger because twice the current flows. Too much current through a component will burn it out.',
    explain_hi: 'Current मतलब electrons का बहना — जैसे pipe में पानी बहता है। असली ज़िंदगी में: जिस charger पर "2A" लिखा हो वो "1A" charger से दोगुना तेज़ charge करता है क्योंकि दोगुनी current बहती है। किसी component में ज़रूरत से ज़्यादा current जाए तो वो जल जाता है।'
  },
  {
    en: 'Resistance', hi: 'रेसिस्टेंस', symbol: 'R', unit: 'Ohms (Ω)',
    desc_en: 'The opposition to current flow. Measured in Ohms (Ω).',
    desc_hi: 'Current के बहने में रुकावट। Ohms में मापते हैं।',
    explain_en: 'Resistance is how much a material fights against current flowing through it. Real life: thin wire has high resistance, thick copper wire has low resistance. A broken circuit wire shows infinite resistance (OL) on a multimeter — that is how you find a fault.',
    explain_hi: 'Resistance मतलब कितना रुकावट है current के रास्ते में। पतली तार में ज़्यादा resistance, मोटी copper wire में कम। Multimeter पर "OL" आए तो मतलब resistance infinite है — यानी वहाँ wire टूटी हुई है।'
  },
  {
    en: "Ohm's Law", hi: "ओम का नियम", symbol: 'V = I × R', unit: '-',
    desc_en: 'V = I × R — the most important formula in electronics. Voltage equals Current times Resistance.',
    desc_hi: 'V = I × R — electronics की सबसे ज़रूरी formula।',
    explain_en: 'This one formula solves most problems. If you know any two values, you can find the third. Real life: want to protect an LED with 5V supply? LED needs 2V and 20mA. Resistor = (5−2) ÷ 0.02 = 150 Ohms. Done.',
    explain_hi: 'यह एक formula ही ज़्यादातर problems solve करती है। तीन में से दो values पता हो तो तीसरी निकाल सकते हो। असली ज़िंदगी में: 5V supply से LED जलानी है, LED चाहिए 2V और 20mA — तो resistor = (5 घटा 2) भाग 0.02 = 150 Ohm। बस।'
  },
  {
    en: 'Breadboard', hi: 'ब्रेडबोर्ड', symbol: '-', unit: '-',
    desc_en: 'A practice board for building circuits without soldering. Components plug in and out.',
    desc_hi: 'Practice के लिए board — बिना टांका लगाए circuit बनाओ, बदलो, सीखो।',
    explain_en: 'A breadboard has hundreds of tiny holes connected in rows. You push components and wires into the holes — no soldering, no glue. Real life: every electronics student or technician uses a breadboard to test a circuit before making it permanent on PCB.',
    explain_hi: 'Breadboard में सैकड़ों छोटे छेद होते हैं जो अंदर से जुड़े हैं। Components और wire डालो — कोई टांका नहीं, कोई गोंद नहीं। असली ज़िंदगी में: हर electronics student और technician पहले breadboard पर circuit test करता है, फिर PCB पर permanent बनाता है।'
  },
  {
    en: 'PCB', hi: 'पी.सी.बी.', symbol: '-', unit: '-',
    desc_en: 'Printed Circuit Board — the green board inside every electronic device with components soldered on it.',
    desc_hi: 'हर electronic device के अंदर का हरा board जिस पर components जुड़े होते हैं।',
    explain_en: 'A PCB is a board made of fiberglass with copper tracks printed on it — like roads for electricity. Components are soldered onto it permanently. Real life: open any phone, TV remote, washing machine — the green board inside is a PCB.',
    explain_hi: 'PCB एक fiberglass board है जिस पर copper के रास्ते बने होते हैं — current के लिए roads की तरह। Components इस पर टांके से permanently जुड़े होते हैं। असली ज़िंदगी में: phone, TV remote, washing machine — किसी भी device को खोलो, अंदर जो हरा board दिखेगा वो PCB है।'
  },
  {
    en: 'Multimeter', hi: 'मल्टीमीटर', symbol: '-', unit: 'V / A / Ω',
    desc_en: 'A technician\'s most important tool — measures voltage, current, resistance, and continuity.',
    desc_hi: 'Technician का सबसे ज़रूरी tool — voltage, current, resistance, और continuity मापता है।',
    explain_en: 'A multimeter is the stethoscope of electronics — it tells you what is happening inside a circuit. Real life: battery dead or not? Put multimeter in DC voltage mode, touch probes to battery terminals. 12V = good, below 10V = dead. Continuity mode beeps if a wire is connected properly.',
    explain_hi: 'Multimeter electronics का stethoscope है — circuit के अंदर क्या हो रहा है बताता है। असली ज़िंदगी में: battery dead है या नहीं? Multimeter को DC voltage पर रखो, probes battery पर लगाओ। 12V आए तो ठीक है, 10V से कम हो तो battery खराब। Continuity mode में beep आए तो wire सही से जुड़ी है।'
  },
  {
    en: 'DC', hi: 'डी.सी. (Direct Current)', symbol: 'DC', unit: '-',
    desc_en: 'Direct Current — flows in one fixed direction. From batteries and phone chargers.',
    desc_hi: 'सीधी धारा — हमेशा एक ही दिशा में बहती है। Battery और charger से मिलती है।',
    explain_en: 'DC is steady — always flows in the same direction, from + to −. All modern electronics (phones, laptops, LEDs) run on DC. Real life: your phone battery gives 3.7V DC, your power bank gives 5V DC through USB.',
    explain_hi: 'DC हमेशा एक ही दिशा में बहती है — plus से minus की तरफ। सभी modern electronics phone, laptop, LED DC पर चलते हैं। असली ज़िंदगी में: phone की battery 3.7V DC देती है, power bank का USB 5V DC देता है।'
  },
  {
    en: 'AC', hi: 'ए.सी. (Alternating Current)', symbol: 'AC', unit: '220V / 50Hz',
    desc_en: 'Alternating Current — reverses direction 50 times per second. This is what comes from wall sockets.',
    desc_hi: 'प्रत्यावर्ती धारा — एक सेकंड में 50 बार दिशा बदलती है। घर के socket से यही आती है।',
    explain_en: 'AC flips direction 50 times per second (50Hz in India). It is dangerous — 220V AC from a wall socket can kill. Never touch live AC wires. Your phone charger converts 220V AC to 5V DC inside the adapter.',
    explain_hi: 'AC एक सेकंड में 50 बार दिशा बदलती है — इसे 50 Hertz कहते हैं। यह खतरनाक है — घर का 220V AC जानलेवा हो सकता है। कभी live AC wire मत छुओ। Phone charger के अंदर का circuit 220V AC को 5V DC में बदलता है।'
  },
  {
    en: 'Ground', hi: 'ग्राउंड / अर्थ', symbol: 'GND / −', unit: '0V',
    desc_en: 'The reference point of a circuit — always 0 Volts. Black probe of multimeter connects here.',
    desc_hi: 'Circuit का reference point — हमेशा 0 Volt। Multimeter का black probe यहाँ लगता है।',
    explain_en: 'Ground is the baseline everything is measured from — like sea level for height. Real life: when you use a multimeter, always clip the black wire to GND first. The negative terminal of a battery is ground. On PCBs it is usually marked GND or the minus symbol.',
    explain_hi: 'Ground circuit का base है — जैसे समुद्र तल से ऊँचाई नापते हैं, वैसे ground से voltage नापते हैं। असली ज़िंदगी में: multimeter use करते वक्त पहले black wire ground पर लगाओ। Battery का negative terminal ही ground है। PCB पर GND या minus का निशान होता है।'
  },
  {
    en: 'Short Circuit', hi: 'शॉर्ट सर्किट', symbol: '-', unit: '-',
    desc_en: 'When + and − connect directly without any load. Causes extreme heat, sparks, or fire.',
    desc_hi: 'जब + और − सीधे मिल जाते हैं। बहुत गर्मी, चिंगारी, या आग लग सकती है।',
    explain_en: 'A short circuit creates a path with almost zero resistance, so massive current flows instantly. Real life: touching a screwdriver across a charged capacitor will spark. A short in a phone battery causes overheating and potential explosion. Always discharge capacitors before working.',
    explain_hi: 'Short circuit में लगभग zero resistance होता है तो एक झटके में बहुत ज़्यादा current बह जाती है। असली ज़िंदगी में: charged capacitor पर screwdriver लगा दो — चिंगारी निकलेगी। Phone battery में short हो तो overheating और explosion हो सकता है। काम शुरू करने से पहले capacitor discharge ज़रूर करो।'
  },
  {
    en: 'Open Circuit', hi: 'ओपन सर्किट', symbol: '-', unit: '-',
    desc_en: 'A break in the circuit — current cannot flow. Like a broken wire or lifted component.',
    desc_hi: 'Circuit में कहीं टूटन — current नहीं बह सकती। जैसे टूटी हुई तार।',
    explain_en: 'An open circuit is like a broken road — the car (current) cannot pass. Real life: if your LED is not lighting up, it might be an open circuit — check with multimeter continuity mode. A lifted solder joint on a PCB also causes an open circuit.',
    explain_hi: 'Open circuit टूटे हुए रास्ते की तरह है — current आगे नहीं जा सकती। असली ज़िंदगी में: अगर LED नहीं जल रही, multimeter की continuity mode से check करो — कहाँ तार टूटी है मिल जाएगी। PCB पर उठा हुआ टांका भी open circuit करता है।'
  },
  {
    en: 'Soldering', hi: 'सोल्डरिंग (टांका लगाना)', symbol: '-', unit: '-',
    desc_en: 'Permanently joining components to a PCB by melting metal solder with a hot iron.',
    desc_hi: 'गर्म iron से metal पिघलाकर components को PCB पर permanently जोड़ना।',
    explain_en: 'Soldering is like welding but for small electronics. You heat the iron to 350°C, touch solder wire to the joint — it melts and bonds the component to the board. Real life: every phone repair involves re-soldering a lifted component. A cold solder joint (dull, grey) causes intermittent faults.',
    explain_hi: 'Soldering छोटे electronics के लिए welding की तरह है। Iron को 350 degree तक गर्म करो, solder wire joint पर लगाओ — पिघलेगा और component board पर जुड़ जाएगा। असली ज़िंदगी में: phone repair में अक्सर उठे हुए component को फिर से solder करना पड़ता है। फीका और धूसर टांका "cold joint" होता है और intermittent fault देता है।'
  },
  {
    en: 'Fuse', hi: 'फ्यूज़', symbol: 'F', unit: 'A (Amperes)',
    desc_en: 'A safety component that breaks the circuit if too much current flows — protecting everything else.',
    desc_hi: 'Safety component — ज़्यादा current बहे तो circuit तोड़ देता है।',
    explain_en: 'A fuse is the sacrifice piece — if something goes wrong and too much current flows, the fuse wire melts and breaks the circuit before anything expensive gets damaged. Real life: your home has main fuses. Electronics have tiny glass or SMD fuses on PCBs. Always replace a fuse with the same rating.',
    explain_hi: 'Fuse वो component है जो खुद जलकर बाकी सब बचाता है। अगर circuit में कोई गड़बड़ हो और ज़्यादा current बहे, fuse की wire पिघल जाती है और circuit टूट जाता है। असली ज़िंदगी में: घर में main fuse होता है। Electronics में PCB पर छोटे glass या SMD fuse होते हैं। हमेशा same rating का fuse ही लगाओ।'
  },
  {
    en: 'Relay', hi: 'रिले', symbol: 'K', unit: '-',
    desc_en: 'An electrically-controlled switch — a small signal switches a large current on or off.',
    desc_hi: 'बिजली से चलने वाला switch — छोटा signal बड़ी current को on/off करता है।',
    explain_en: 'A relay uses an electromagnet to physically move a switch. When you send 5V to a relay coil, it clicks and switches on 220V AC for a motor or heater. Real life: home automation, automatic water pumps, car central locking — all use relays. Safe way to control high-voltage loads from a microcontroller.',
    explain_hi: 'Relay में एक electromagnet होता है जो एक switch को physically हिलाता है। 5V देने पर relay click करती है और 220V का motor या heater on हो जाता है। असली ज़िंदगी में: home automation, automatic water pump, car central locking — सब में relay होती है। Microcontroller से safely high voltage control करने का यही तरीका है।'
  },
  {
    en: 'Voltage Regulator', hi: 'वोल्टेज रेगुलेटर', symbol: 'VR', unit: 'V',
    desc_en: 'Keeps voltage steady and constant regardless of load or input fluctuations.',
    desc_hi: 'Voltage को stable रखता है — चाहे load कुछ भी हो।',
    explain_en: 'A voltage regulator is like a pressure valve — even if input voltage changes, output stays fixed. Real life: 7805 is a common IC that always outputs exactly 5V, even if input is 9V or 12V. Used to protect sensitive circuits from voltage spikes in cheap power supplies.',
    explain_hi: 'Voltage regulator एक pressure valve की तरह है — input voltage बदले तो भी output fixed रहती है। असली ज़िंदगी में: 7805 एक famous IC है जो हमेशा exactly 5V देती है, चाहे input 9V हो या 12V। Sensitive circuits को voltage spikes से बचाने के लिए use होता है।'
  },
  {
    en: 'IC (Integrated Circuit)', hi: 'आई.सी. (Integrated Circuit)', symbol: 'U', unit: '-',
    desc_en: 'A tiny chip containing thousands of transistors, resistors, and capacitors all on one piece of silicon.',
    desc_hi: 'एक छोटी chip जिसमें हज़ारों components एक साथ हैं।',
    explain_en: 'An IC packs an entire circuit onto a chip smaller than your thumbnail. Real life: the processor inside your phone is an IC with billions of transistors. A simple 555 timer IC has only 25 components inside but does the job of a full circuit board of discrete components.',
    explain_hi: 'IC एक छोटी chip में पूरा circuit समेट देती है। असली ज़िंदगी में: phone का processor एक IC है जिसमें अरबों transistors हैं। एक simple 555 timer IC में सिर्फ 25 components हैं लेकिन वो काम करती है जो पूरा circuit board करता था।'
  },
  {
    en: '555 Timer IC', hi: '555 टाइमर आई.सी.', symbol: 'U1', unit: '-',
    desc_en: 'The most popular IC ever made. Creates timing signals, blinking effects, and oscillations.',
    desc_hi: 'सबसे ज़्यादा बिकने वाली IC। Blinking, timing, और oscillation के लिए।',
    explain_en: 'The 555 timer is the first IC every electronics student learns. It has 8 pins and can be wired in two modes: Monostable (one pulse) or Astable (continuous blinking). Real life: build a blinking LED alarm, a metronome, a door buzzer — all with just a 555 timer, a capacitor, and two resistors.',
    explain_hi: '555 timer वो पहली IC है जो हर electronics student सीखता है। इसके 8 pins हैं और दो तरीके से काम करती है: एक pulse देना, या लगातार blink करना। असली ज़िंदगी में: blinking LED alarm, door buzzer, metronome — सब 555 timer, एक capacitor और दो resistor से बन जाते हैं।'
  },
  {
    en: 'Transistor (NPN)', hi: 'NPN ट्रांजिस्टर', symbol: 'Q', unit: 'β (gain)',
    desc_en: 'A 3-pin transistor: Base, Collector, Emitter. Small Base current switches large Collector current.',
    desc_hi: '3 legs वाला transistor। Base पर थोड़ा signal दो — बड़ी current on/off।',
    explain_en: 'NPN transistor has three legs: Base (B), Collector (C), Emitter (E). Apply a small signal to the Base and a large current flows from Collector to Emitter. Real life: BC547 is a common NPN — plug it into a breadboard, connect a small signal to Base, and it can switch on an LED, a motor, or a buzzer.',
    explain_hi: 'NPN transistor की तीन legs होती हैं: Base, Collector, Emitter। Base पर थोड़ा signal दो — Collector से Emitter तक बड़ी current बहती है। असली ज़िंदगी में: BC547 एक common NPN है — breadboard पर लगाओ, Base पर signal दो, LED या motor on हो जाएगी।'
  },
  {
    en: 'ESD', hi: 'ई.एस.डी. (Static Electricity)', symbol: '-', unit: '-',
    desc_en: 'Electrostatic Discharge — the hidden zap of static electricity that can silently destroy ICs.',
    desc_hi: 'Static electricity का झटका — ICs को बिना बताए damage कर सकता है।',
    explain_en: 'ESD is the invisible enemy of electronics. Even touching an IC can transfer static from your body and damage it permanently — without any visible spark or burn. Real life: always wear an anti-static wrist band when repairing phones or handling bare PCBs. Touch a grounded metal surface before picking up any IC.',
    explain_hi: 'ESD electronics का अदृश्य दुश्मन है। आपके शरीर की static electricity IC को touch करते ही permanently damage कर सकती है — बिना कोई चिंगारी या जलन दिखे। असली ज़िंदगी में: phone repair करते वक्त हमेशा anti-static wrist band पहनो। कोई भी IC उठाने से पहले grounded metal surface छुओ।'
  },
  {
    en: 'Schematic', hi: 'स्कीमैटिक (सर्किट डायग्राम)', symbol: '-', unit: '-',
    desc_en: 'A map of a circuit using standard symbols — shows how every component is connected.',
    desc_hi: 'Circuit का नक्शा — standard symbols से दिखाता है कि क्या किससे जुड़ा है।',
    explain_en: 'A schematic is the blueprint of a circuit. Every component has a standard symbol. Real life: when a technician repairs a TV or phone, they look at the service schematic to trace the fault. Learning to read a schematic is like learning to read a map — once you know the symbols, any circuit becomes clear.',
    explain_hi: 'Schematic circuit का blueprint है। हर component का एक standard symbol होता है। असली ज़िंदगी में: TV या phone repair करते वक्त technician service schematic देखकर fault ढूंढता है। Schematic पढ़ना सीखना नक्शा पढ़ना सीखने जैसा है — symbols पता हों तो कोई भी circuit समझ में आ जाए।'
  },
  {
    en: 'Anode', hi: 'एनोड (+)', symbol: '+', unit: '-',
    desc_en: 'The positive terminal of a diode or LED. Current enters here. Longer leg on an LED.',
    desc_hi: 'Diode या LED का plus (+) वाला सिरा। Current यहाँ से अंदर जाती है। LED की लंबी leg।',
    explain_en: 'Anode is the positive side — connect it to the + supply. Real life: when inserting an LED, the longer leg is the Anode (positive). If your LED is not lighting up, you may have it backwards — swap the legs.',
    explain_hi: 'Anode plus वाला हिस्सा है — इसे + supply से जोड़ो। असली ज़िंदगी में: LED लगाते वक्त लंबी leg Anode होती है जो + से जुड़ती है। LED नहीं जल रही? शायद उल्टी लगी है — legs बदलकर लगाओ।'
  },
  {
    en: 'Cathode', hi: 'कैथोड (−)', symbol: '−', unit: '-',
    desc_en: 'The negative terminal of a diode or LED. Current exits here. Shorter leg on an LED.',
    desc_hi: 'Diode या LED का minus (−) वाला सिरा। Current यहाँ से बाहर जाती है। LED की छोटी leg।',
    explain_en: 'Cathode is the negative side — connect it to GND. Real life: the shorter leg of an LED is the Cathode. Also, the flat side on the bottom rim of an LED body marks the Cathode.',
    explain_hi: 'Cathode minus वाला हिस्सा है — इसे GND से जोड़ो। असली ज़िंदगी में: LED की छोटी leg Cathode है। LED की body पर नीचे एक flat cut होती है — वो Cathode side है।'
  },
  {
    en: 'Watt (Power)', hi: 'वाट (पावर)', symbol: 'P', unit: 'Watts (W)',
    desc_en: 'Electrical power = Voltage × Current. How much energy a device uses per second.',
    desc_hi: 'बिजली की ताकत = Voltage × Current। Device एक second में कितनी energy use करता है।',
    explain_en: 'Watts = Volts × Amps. Real life: a 5W phone charger puts out 5V at 1A. A fast charger is 18W (9V × 2A). A 100W light bulb uses much more power than a 10W LED bulb that gives the same brightness. Lower watts = less electricity bill.',
    explain_hi: 'Watts = Volts गुणा Amps। असली ज़िंदगी में: 5W charger मतलब 5V पर 1A। Fast charger 18W होता है मतलब 9V पर 2A। 100W bulb और 10W LED bulb बराबर रोशनी देते हैं — लेकिन LED का बिजली बिल 10 गुना कम आता है।'
  },
  {
    en: 'Frequency', hi: 'फ्रीक्वेंसी (आवृत्ति)', symbol: 'f', unit: 'Hz (Hertz)',
    desc_en: 'How many times a signal repeats per second. AC in India = 50Hz.',
    desc_hi: 'Signal एक second में कितनी बार repeat होता है। भारत में AC = 50Hz।',
    explain_en: 'Frequency tells you how fast a signal cycles. Real life: India\'s AC power is 50Hz — it flips direction 50 times every second. Phone processors run at 2-3 GHz = 2-3 billion cycles per second. Radio stations broadcast at specific MHz frequencies.',
    explain_hi: 'Frequency बताती है signal एक second में कितनी बार बदलता है। असली ज़िंदगी में: India की AC power 50Hz है — एक second में 50 बार दिशा बदलती है। Phone processor 2-3 GHz पर चलता है मतलब एक second में 2-3 अरब cycles। Radio stations specific MHz frequency पर broadcast करते हैं।'
  },
  {
    en: 'Inductor', hi: 'इंडक्टर (कॉइल)', symbol: 'L', unit: 'Henry (H)',
    desc_en: 'A coil of wire that stores energy in a magnetic field. Resists sudden changes in current.',
    desc_hi: 'Wire की coil जो magnetic field में energy जमा करती है।',
    explain_en: 'An inductor is just a coil of wire, but it creates a magnetic field when current flows. It resists sudden changes in current. Real life: phone charger adapters and power supplies use inductors to smooth out ripples in DC output. Also used in filters to block high-frequency noise.',
    explain_hi: 'Inductor बस wire की एक coil है लेकिन जब current बहती है तो magnetic field बनाती है। Current अचानक बदलने पर resist करती है। असली ज़िंदगी में: phone charger और power supply में inductor होता है जो DC output को smooth रखता है। High-frequency noise को filter करने में भी use होता है।'
  },
  {
    en: 'Arduino', hi: 'अरदुइनो', symbol: '-', unit: '-',
    desc_en: 'A beginner-friendly microcontroller board that you can program to control LEDs, motors, sensors.',
    desc_hi: 'एक programmable board जिससे LEDs, motors, sensors सब control कर सकते हो।',
    explain_en: 'Arduino is like a small computer you can program. Write simple code, upload it, and the board does what you programmed — blink an LED, read a sensor, control a motor. Real life: traffic light projects, automatic plant watering, door alarm, line-following robot — all can be made with Arduino as a beginner.',
    explain_hi: 'Arduino एक छोटा computer है जिसे आप program कर सकते हो। Simple code लिखो, upload करो — board वही करेगा जो tune किया। असली ज़िंदगी में: traffic light project, automatic pani wali machine, door alarm, line following robot — beginner भी Arduino से ये सब बना सकता है।'
  }
];
