const APP_VERSION = '2.0.0';

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
    next: 'Next →', back: '‹ Back', finish: 'Finish Lesson',
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
    next: 'आगे →', back: '‹ वापस', finish: 'पाठ पूरा करें',
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
            en: { title: 'Think of water in a pipe', body: 'Electricity is easiest to understand if you imagine water flowing through a pipe. This analogy is so accurate that engineers use it all the time.', list: ['Water flowing = Electric current (current = flow of electrons)', 'Water pressure = Voltage (voltage = the push)', 'A narrow pipe = Resistance (resistance = opposition to flow)', 'Water pump = Battery (battery = the source of push)'] },
            hi: { title: 'पाइप में पानी सोचो', body: 'बिजली को समझने का सबसे आसान तरीका है — पाइप में बहते पानी की कल्पना करो।', list: ['बहता पानी = विद्युत धारा (Current)', 'पानी का दबाव = वोल्टेज (Voltage)', 'पतली पाइप = प्रतिरोध (Resistance)', 'पंप = बैटरी (Battery)'] }
          },
          {
            type: 'diagram',
            label: 'Water vs Electricity',
            svg: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
  <rect width="320" height="180" fill="#1a1d35" rx="12"/>
  <!-- Water side -->
  <text x="80" y="22" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">WATER</text>
  <rect x="20" y="30" width="40" height="70" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="40" y="60" fill="#60a5fa" font-size="9" text-anchor="middle" font-family="sans-serif">PUMP</text>
  <text x="40" y="72" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">Battery</text>
  <rect x="60" y="58" width="80" height="14" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="60" y="78" width="80" height="14" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <!-- flow arrows -->
  <text x="75" y="68" fill="#3b82f6" font-size="14" font-family="sans-serif">→</text>
  <text x="95" y="68" fill="#3b82f6" font-size="14" font-family="sans-serif">→</text>
  <circle cx="145" cy="70" r="12" fill="#1e3a5f" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="145" y="74" fill="#f59e0b" font-size="9" text-anchor="middle" font-family="sans-serif">R</text>
  <text x="140" y="100" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">narrow</text>
  <text x="140" y="110" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">pipe</text>
  <!-- labels -->
  <text x="40" y="115" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="sans-serif">Voltage</text>
  <text x="40" y="125" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">(Push)</text>
  <text x="100" y="115" fill="#60a5fa" font-size="8" text-anchor="middle" font-family="sans-serif">Current</text>
  <text x="100" y="125" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">(Flow)</text>
  <!-- divider -->
  <line x1="172" y1="20" x2="172" y2="160" stroke="#2e3260" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Electricity side -->
  <text x="246" y="22" fill="#9ba3c8" font-size="10" text-anchor="middle" font-family="sans-serif">ELECTRICITY</text>
  <rect x="184" y="30" width="36" height="70" rx="6" fill="#1e2040" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="202" y="60" fill="#a78bfa" font-size="9" text-anchor="middle" font-family="sans-serif">BAT-</text>
  <text x="202" y="72" fill="#a78bfa" font-size="9" text-anchor="middle" font-family="sans-serif">TERY</text>
  <rect x="220" y="58" width="60" height="14" rx="4" fill="#1e2040" stroke="#7c3aed" stroke-width="1.5"/>
  <rect x="220" y="78" width="60" height="14" rx="4" fill="#1e2040" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="233" y="68" fill="#7c3aed" font-size="14" font-family="sans-serif">→</text>
  <text x="251" y="68" fill="#7c3aed" font-size="14" font-family="sans-serif">→</text>
  <circle cx="288" cy="70" r="12" fill="#1e2040" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="288" y="74" fill="#f59e0b" font-size="9" text-anchor="middle" font-family="sans-serif">Ω</text>
  <text x="202" y="115" fill="#a78bfa" font-size="8" text-anchor="middle" font-family="sans-serif">Voltage (V)</text>
  <text x="250" y="115" fill="#a78bfa" font-size="8" text-anchor="middle" font-family="sans-serif">Current (A)</text>
  <text x="288" y="115" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="sans-serif">Resistance</text>
  <text x="288" y="125" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">(Ω)</text>
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
            en: { title: 'DC — Direct Current', body: 'DC means electrons always flow in one direction — like water flowing steadily downstream. Batteries give DC.', list: ['Flows in one direction only', 'Used in: phones, laptops, LED lights, Arduino', 'Safe for small electronics', 'Example: 1.5V AA battery, 9V battery, 5V USB'] },
            hi: { title: 'DC — सीधी धारा', body: 'DC का मतलब है electrons हमेशा एक दिशा में बहते हैं — जैसे पानी एक तरफ बहता है।', list: ['सिर्फ एक दिशा में बहती है', 'उपयोग: फोन, लैपटॉप, LED, Arduino', 'छोटे electronics के लिए सुरक्षित', 'उदाहरण: AA बैटरी, 9V बैटरी, 5V USB'] }
          },
          {
            type: 'learn',
            icon: '🔌',
            en: { title: 'AC — Alternating Current', body: 'AC means electrons constantly reverse direction — back and forth, 50 times per second in India. This is what comes from your wall socket.', list: ['Reverses direction 50 times/second (50 Hz)', 'Used in: fans, TVs, fridges, washing machines', '230V in India — can be dangerous, respect it!', 'Easier to transmit over long distances'] },
            hi: { title: 'AC — प्रत्यावर्ती धारा', body: 'AC का मतलब है electrons लगातार दिशा बदलते हैं — आगे-पीछे, भारत में 1 सेकंड में 50 बार।', list: ['50 बार/सेकंड दिशा बदलती है (50 Hz)', 'उपयोग: पंखे, TV, फ्रिज, वॉशिंग मशीन', 'भारत में 230V — सावधान रहें!', 'लंबी दूरी भेजना आसान'] }
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
            en: { title: 'What does a resistor do?', body: 'A resistor resists (opposes) the flow of current. Think of it as a speed bump on a road — it slows down the traffic (current) without stopping it completely.', list: ['Controls how much current flows', 'Protects other components from too much current', 'Converts electrical energy into heat', 'Measured in Ohms (Ω)'] },
            hi: { title: 'Resistor क्या करता है?', body: 'एक resistor current के प्रवाह को रोकता है। इसे सड़क पर speed bump की तरह सोचो — यातायात (current) को धीमा करता है, रोकता नहीं।', list: ['Current की मात्रा नियंत्रित करता है', 'दूसरे पुर्जों को ज्यादा current से बचाता है', 'बिजली को गर्मी में बदलता है', 'Ohms (Ω) में मापा जाता है'] }
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
        en: { title: 'Integrated Circuits — many components in one', time: '5 min' },
        hi: { title: 'Integrated Circuits — एक में कई पुर्जे', time: '5 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "An Integrated Circuit — IC — is a complete circuit packed into a tiny chip. Instead of building 20 components on a breadboard, an IC puts them all inside one package the size of your thumbnail. Let's understand what's inside." },
            hi: { text: "Integrated Circuit — IC — एक complete circuit है जो छोटी chip में पैक है। Breadboard पर 20 components बनाने की जगह, IC उन्हें अपने नाखून के आकार के package में रखती है।" }
          },
          {
            type: 'learn',
            icon: '🔲',
            en: { title: 'What is an IC?', body: 'An IC (or chip) contains transistors, resistors, capacitors and more — all etched onto a tiny slice of silicon. The black plastic package just protects what\'s inside.', list: ['The 555 Timer IC — the world\'s most used IC ever', 'Op-Amp (741) — amplifies signals', 'Logic gates (AND, OR, NOT) — for digital decisions', 'Microcontrollers (Arduino) — programmable ICs', 'Each pin has a specific purpose — always check the datasheet!'] },
            hi: { title: 'IC क्या है?', body: 'IC (या chip) में transistors, resistors, capacitors — सब silicon के टुकड़े पर etched। काला plastic package सिर्फ अंदर की चीजों की रक्षा करता है।', list: ['555 Timer IC — दुनिया की सबसे ज्यादा use होने वाली IC', 'Op-Amp (741) — signals amplify करती है', 'Logic gates (AND, OR, NOT) — digital decisions के लिए', 'Microcontrollers (Arduino) — programmable ICs', 'हर pin का specific purpose — datasheet जरूर देखें!'] }
          },
          {
            type: 'diagram',
            label: '555 Timer IC — Pin Layout',
            svg: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
  <rect width="300" height="180" fill="#1a1d35" rx="12"/>
  <!-- IC body -->
  <rect x="100" y="40" width="100" height="100" rx="6" fill="#1c1c1e" stroke="#8b5cf6" stroke-width="2"/>
  <text x="150" y="88" fill="#c4b5fd" font-size="14" font-weight="bold" text-anchor="middle" font-family="monospace">555</text>
  <text x="150" y="104" fill="#9ba3c8" font-size="9" text-anchor="middle" font-family="monospace">TIMER</text>
  <!-- notch -->
  <path d="M130,40 Q150,30 170,40" fill="#1a1d35" stroke="#8b5cf6" stroke-width="1.5"/>
  <!-- Left pins 1-4 -->
  <line x1="70" y1="55" x2="100" y2="55" stroke="#f59e0b" stroke-width="2"/>
  <line x1="70" y1="73" x2="100" y2="73" stroke="#f59e0b" stroke-width="2"/>
  <line x1="70" y1="91" x2="100" y2="91" stroke="#f59e0b" stroke-width="2"/>
  <line x1="70" y1="109" x2="100" y2="109" stroke="#f59e0b" stroke-width="2"/>
  <!-- Right pins 5-8 -->
  <line x1="200" y1="55" x2="230" y2="55" stroke="#10b981" stroke-width="2"/>
  <line x1="200" y1="73" x2="230" y2="73" stroke="#10b981" stroke-width="2"/>
  <line x1="200" y1="91" x2="230" y2="91" stroke="#10b981" stroke-width="2"/>
  <line x1="200" y1="109" x2="230" y2="109" stroke="#10b981" stroke-width="2"/>
  <!-- Pin labels left -->
  <text x="60" y="59" fill="#9ba3c8" font-size="8" text-anchor="end" font-family="sans-serif">1 GND</text>
  <text x="60" y="77" fill="#9ba3c8" font-size="8" text-anchor="end" font-family="sans-serif">2 TRIG</text>
  <text x="60" y="95" fill="#ef4444" font-size="8" text-anchor="end" font-family="sans-serif">3 OUT</text>
  <text x="60" y="113" fill="#9ba3c8" font-size="8" text-anchor="end" font-family="sans-serif">4 RST</text>
  <!-- Pin labels right -->
  <text x="240" y="59" fill="#9ba3c8" font-size="8" font-family="sans-serif">VCC 8</text>
  <text x="240" y="77" fill="#9ba3c8" font-size="8" font-family="sans-serif">DIS 7</text>
  <text x="240" y="95" fill="#9ba3c8" font-size="8" font-family="sans-serif">THR 6</text>
  <text x="240" y="113" fill="#9ba3c8" font-size="8" font-family="sans-serif">CTL 5</text>
  <!-- labels -->
  <text x="150" y="160" fill="#8b5cf6" font-size="9" text-anchor="middle" font-family="sans-serif">8 pins — 25+ transistors inside</text>
  <text x="150" y="173" fill="#9ba3c8" font-size="8" text-anchor="middle" font-family="sans-serif">makes timers, oscillators, pulse generators</text>
</svg>`
          },
          {
            type: 'fact',
            en: { text: "The 555 Timer IC was invented in 1972 and has never stopped being used. Over 1 billion are still made every year. It can blink an LED, make sound, control a motor, or generate pulses — all for about ₹5!" },
            hi: { text: "555 Timer IC 1972 में बना था और आज भी use हो रहा है। हर साल 1 अरब से ज्यादा बनते हैं। LED blink करना, आवाज बनाना, motor control करना — सब ₹5 में!" }
          },
          {
            type: 'quiz',
            en: { question: 'What makes an IC different from individual components on a breadboard?', options: ['ICs only work with AC power', 'An IC contains many components integrated into one tiny chip', 'ICs cannot be used by beginners', 'ICs only contain resistors'], correct: 1, feedback: 'Integrated Circuit = many components (transistors, resistors, etc.) integrated into one small chip. Much smaller, more reliable, and cheaper than building the same circuit from individual parts.' },
            hi: { question: 'IC को breadboard के individual components से अलग क्या बनाता है?', options: ['ICs केवल AC power से काम करते हैं', 'IC में कई components एक छोटी chip में integrated होते हैं', 'ICs beginners के लिए नहीं हैं', 'ICs में केवल resistors होते हैं'], correct: 1, feedback: 'Integrated Circuit = कई components (transistors, resistors आदि) एक छोटी chip में। बहुत छोटा, ज्यादा reliable, और individual parts से सस्ता।' }
          },
          {
            type: 'complete', xp: 30,
            en: { msg: "Transistors and ICs — done! You now understand the building blocks that make all modern electronics possible. Next: the mathematical law that ties everything together." },
            hi: { msg: "Transistors और ICs — पूरे! आप अब उन building blocks को समझते हैं जो सभी modern electronics को possible बनाते हैं। अगला: वो mathematical law जो सब कुछ जोड़ती है।" }
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
            en: { text: "You don't need expensive equipment to start with electronics. A few basic tools will take you a long way. Let me show you what actually matters — and what you can skip for now." },
            hi: { text: "इलेक्ट्रॉनिक्स शुरू करने के लिए महंगे उपकरण नहीं चाहिए। कुछ basic tools बहुत काम आते हैं। मैं आपको बताता हूँ क्या जरूरी है।" }
          },
          {
            type: 'learn',
            icon: '🍞',
            en: { title: 'Breadboard — your best friend', body: 'A breadboard lets you build circuits WITHOUT soldering. You push components and wires into the holes and they connect. Perfect for learning and experimenting.', list: ['No soldering needed — just push wires in', 'Reusable — pull out components and try again', 'Holes connect in rows (horizontally)', 'Two long rails on edges = power (+) and ground (−)'] },
            hi: { title: 'Breadboard — आपका सबसे अच्छा दोस्त', body: 'Breadboard से आप बिना soldering के circuits बना सकते हैं। बस holes में components और wires डालें।', list: ['Soldering की जरूरत नहीं — बस wires डालें', 'दोबारा उपयोग करें — components निकालें और फिर try करें', 'Holes rows में जुड़ते हैं (horizontally)', 'किनारों पर दो लंबी rails = power (+) और ground (−)'] }
          },
          {
            type: 'learn',
            icon: '🔌',
            en: { title: 'Jumper wires & components kit', body: 'Jumper wires connect points on a breadboard. A basic components kit is all you need to start.', list: ['Male-to-male jumper wires (most common for breadboard)', 'Basic kit: LEDs, resistors (assorted), capacitors, buttons', 'One 9V battery + clip for power', 'Total cost: ₹200-500 gets you started!'] },
            hi: { title: 'Jumper wires और components kit', body: 'Jumper wires breadboard पर points जोड़ते हैं। एक basic components kit शुरू करने के लिए काफी है।', list: ['Male-to-male jumper wires (breadboard के लिए सबसे आम)', 'Basic kit: LEDs, resistors, capacitors, buttons', 'Power के लिए एक 9V battery + clip', 'कुल लागत: ₹200-500 में शुरुआत!'] }
          },
          {
            type: 'learn',
            icon: '🌡️',
            en: { title: 'Multimeter — your most important tool', body: 'A multimeter measures voltage, current, resistance, and continuity. It is THE essential tool for electronics. We cover how to use it in detail in the next module!', list: ['Measures Voltage (V), Current (A), Resistance (Ω)', 'Continuity beep: tells you if two points are connected', 'Even a ₹300 budget multimeter works well for beginners', 'You cannot do electronics without one — buy one first!'] },
            hi: { title: 'Multimeter — आपका सबसे महत्वपूर्ण औजार', body: 'Multimeter voltage, current, resistance और continuity मापता है। यह electronics का THE जरूरी औजार है।', list: ['Voltage (V), Current (A), Resistance (Ω) मापता है', 'Continuity beep: बताता है दो points जुड़े हैं या नहीं', '₹300 का budget multimeter भी beginners के लिए काफी है', 'इसके बिना electronics नहीं होती — पहले खरीदें!'] }
          },
          {
            type: 'fact',
            en: { text: "A basic starter kit (breadboard + jumper wires + components + multimeter) costs around ₹500-800 in India and is available on Amazon, Flipkart, or local electronics markets like Lajpat Rai (Delhi) or Lamington Road (Mumbai)." },
            hi: { text: "एक basic starter kit (breadboard + jumper wires + components + multimeter) भारत में ₹500-800 में मिलती है — Amazon, Flipkart, या लाजपत राय (दिल्ली) या लैमिंगटन रोड (मुंबई) जैसे electronics बाजार में।" }
          },
          {
            type: 'quiz',
            en: { question: 'What is the main advantage of a breadboard for beginners?', options: ['It generates electricity', 'You can build circuits without soldering', 'It measures voltage automatically', 'It protects against short circuits'], correct: 1, feedback: 'Breadboards are perfect for beginners because you can experiment, make mistakes, and change your circuit easily — no soldering iron needed!' },
            hi: { question: 'Beginners के लिए breadboard का मुख्य फायदा क्या है?', options: ['यह बिजली उत्पन्न करता है', 'Soldering के बिना circuits बना सकते हैं', 'यह स्वचालित रूप से voltage मापता है', 'यह short circuits से बचाता है'], correct: 1, feedback: 'Breadboard beginners के लिए perfect है — experiment करें, गलतियाँ करें, circuit बदलें — कोई soldering iron नहीं चाहिए!' }
          },
          {
            type: 'complete', xp: 25,
            en: { msg: "You now know what tools you need to get started. The good news: it's affordable! Next up — the most powerful skill a beginner can learn: using a multimeter." },
            hi: { msg: "अब आप जानते हैं शुरुआत के लिए कौन से tools चाहिए। अच्छी खबर: यह सस्ता है! अगला — सबसे महत्वपूर्ण skill: multimeter चलाना।" }
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
        en: { title: 'Read voltage like a pro', time: '6 min' },
        hi: { title: 'Voltage की तरह pro बनें', time: '6 मिनट' },
        steps: [
          {
            type: 'spark',
            en: { text: "The multimeter is your eyes in a circuit. You can't see electricity — but with a multimeter, you can measure it precisely. This is the single most useful skill you'll learn today." },
            hi: { text: "Multimeter आपकी circuit में आँखें है। आप बिजली देख नहीं सकते — लेकिन multimeter से आप उसे सटीक माप सकते हैं।" }
          },
          {
            type: 'learn',
            icon: '📟',
            en: { title: 'Parts of a multimeter', body: 'Every multimeter has 3 essential parts you need to know before you start.', list: ['Display — shows the reading', 'Dial/selector — choose what to measure (V, A, Ω)', 'Probes — two wires: RED (+) and BLACK (−)', 'COM jack — always connect BLACK probe here', 'VΩ jack — connect RED probe here for voltage and resistance'] },
            hi: { title: 'Multimeter के हिस्से', body: 'हर multimeter में 3 जरूरी हिस्से हैं।', list: ['Display — reading दिखाता है', 'Dial/selector — क्या मापना है चुनें (V, A, Ω)', 'Probes — दो wires: RED (+) और BLACK (−)', 'COM jack — BLACK probe हमेशा यहाँ', 'VΩ jack — voltage और resistance के लिए RED probe यहाँ'] }
          },
          {
            type: 'diagram',
            label: 'Multimeter — Anatomy',
            svg: `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px">
  <rect width="280" height="200" fill="#1a1d35" rx="12"/>
  <!-- Multimeter body -->
  <rect x="80" y="10" width="120" height="170" rx="14" fill="#1a1a2e" stroke="#4f6ef7" stroke-width="2"/>
  <!-- Display -->
  <rect x="92" y="22" width="96" height="40" rx="6" fill="#0f1a0f" stroke="#10b981" stroke-width="1.5"/>
  <text x="140" y="48" fill="#10b981" font-size="20" font-weight="bold" text-anchor="middle" font-family="monospace">12.6V</text>
  <!-- Dial -->
  <circle cx="140" cy="108" r="28" fill="#232748" stroke="#4f6ef7" stroke-width="2"/>
  <circle cx="140" cy="108" r="10" fill="#1a1d35" stroke="#4f6ef7" stroke-width="1.5"/>
  <!-- dial labels -->
  <text x="140" y="86" fill="#f59e0b" font-size="7" text-anchor="middle" font-family="sans-serif">V~</text>
  <text x="162" y="95" fill="#10b981" font-size="7" text-anchor="middle" font-family="sans-serif">V</text>
  <text x="168" y="112" fill="#a78bfa" font-size="7" text-anchor="middle" font-family="sans-serif">Ω</text>
  <text x="162" y="130" fill="#60a5fa" font-size="7" text-anchor="middle" font-family="sans-serif">A</text>
  <text x="118" y="130" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">OFF</text>
  <!-- dial pointer -->
  <line x1="140" y1="108" x2="155" y2="95" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
  <!-- jacks -->
  <circle cx="120" cy="158" r="7" fill="#1e2040" stroke="#9ba3c8" stroke-width="1.5"/>
  <circle cx="140" cy="158" r="7" fill="#1e2040" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="160" cy="158" r="7" fill="#1e2040" stroke="#ef4444" stroke-width="1.5"/>
  <text x="120" y="175" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">A</text>
  <text x="140" y="175" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">COM</text>
  <text x="160" y="175" fill="#9ba3c8" font-size="7" text-anchor="middle" font-family="sans-serif">VΩ</text>
  <!-- probes -->
  <line x1="140" y1="165" x2="35" y2="190" stroke="#1a3a1a" stroke-width="3"/>
  <line x1="160" y1="165" x2="245" y2="190" stroke="#3a1a1a" stroke-width="3"/>
  <text x="25" y="198" fill="#10b981" font-size="9" text-anchor="middle" font-family="sans-serif">BLACK −</text>
  <text x="255" y="198" fill="#ef4444" font-size="9" text-anchor="middle" font-family="sans-serif">RED +</text>
</svg>`
          },
          {
            type: 'learn',
            icon: '⚡',
            en: { title: 'Measure DC Voltage — step by step', body: 'Measuring the voltage of a battery is the first thing every electronics person learns.', list: ['Set dial to V (DC) — look for straight lines symbol', 'Black probe → COM jack', 'Red probe → VΩ jack', 'Touch red to + (positive) of battery, black to − (negative)', 'Read the display — that is your voltage!', 'For a AA battery: should read ~1.5V'] },
            hi: { title: 'DC Voltage मापें — step by step', body: 'Battery का voltage मापना electronics सीखने वाले पहले चीज सीखते हैं।', list: ['Dial को V (DC) पर सेट करें', 'Black probe → COM jack', 'Red probe → VΩ jack', 'Red probe को battery के + पर, Black को − पर लगाएं', 'Display पढ़ें — यही आपका voltage है!', 'AA battery के लिए: ~1.5V आना चाहिए'] }
          },
          {
            type: 'learn',
            icon: '🔊',
            en: { title: 'Continuity — is it connected?', body: 'The most used feature! Set to continuity mode (looks like a speaker/sound symbol) and touch the probes to two points. If connected — it BEEPS!', list: ['Beep = connected (circuit is complete)', 'No beep = not connected (broken wire, open circuit)', 'Use it to: test wires, check solder joints, find broken paths', 'Safe to use — even on powered-off circuits'] },
            hi: { title: 'Continuity — जुड़ा है या नहीं?', body: 'सबसे ज्यादा इस्तेमाल होने वाला feature! Continuity mode सेट करें और दो points पर probes लगाएं। जुड़े हैं तो — BEEP!', list: ['Beep = जुड़ा है (circuit complete है)', 'No beep = जुड़ा नहीं (टूटा wire)', 'उपयोग: wires test करें, solder joints जाँचें', 'Safe है — बंद circuits पर भी'] }
          },
          {
            type: 'quiz',
            en: { question: 'Where does the RED probe always go?', options: ['COM jack', 'VΩ jack', 'Either jack is fine', 'The jack labeled A (current)'], correct: 1, feedback: 'RED probe always goes into the VΩ jack (for voltage and resistance). BLACK probe always into COM. This is universal across all multimeters!' },
            hi: { question: 'RED probe हमेशा कहाँ जाता है?', options: ['COM jack में', 'VΩ jack में', 'कोई भी jack', 'A (current) jack में'], correct: 1, feedback: 'RED probe हमेशा VΩ jack में। BLACK probe हमेशा COM में। यह सभी multimeters में एक जैसा है!' }
          },
          {
            type: 'quiz',
            en: { question: 'You hear a BEEP when testing continuity between two wire ends. What does this mean?', options: ['The wire is broken', 'The wire is complete and conducting electricity', 'The multimeter is broken', 'The voltage is too high'], correct: 1, feedback: 'A beep means continuity — the two points are electrically connected. No beep means the path is broken somewhere.' },
            hi: { question: 'Continuity test में BEEP सुनाई दे तो क्या मतलब है?', options: ['Wire टूटी है', 'Wire पूरी है और बिजली चल रही है', 'Multimeter खराब है', 'Voltage बहुत ज्यादा है'], correct: 1, feedback: 'Beep = continuity — दोनों points electrically जुड़े हैं। No beep = कहीं टूटी है।' }
          },
          {
            type: 'complete', xp: 35,
            en: { msg: "You can now use a multimeter! Voltage, continuity — these two measurements will solve 90% of beginner problems. You're officially a practical electronics learner now." },
            hi: { msg: "अब आप multimeter चला सकते हैं! Voltage, continuity — ये दो measurements 90% beginner problems हल करेंगे। आप अब officially एक practical electronics learner हैं।" }
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
      }
    ]
  }
];

const GLOSSARY = [
  { en: 'Resistor', hi: 'प्रतिरोधक', symbol: 'R', unit: 'Ω', desc_en: 'Limits current flow. Higher resistance = less current.', desc_hi: 'Current सीमित करता है।' },
  { en: 'Capacitor', hi: 'संधारित्र', symbol: 'C', unit: 'F / µF', desc_en: 'Stores and releases charge quickly.', desc_hi: 'Charge संग्रहीत और तेजी से छोड़ता है।' },
  { en: 'LED', hi: 'प्रकाश उत्सर्जक डायोड', symbol: 'D', unit: 'V / mA', desc_en: 'Light Emitting Diode — converts electricity to light.', desc_hi: 'बिजली को प्रकाश में बदलता है।' },
  { en: 'Transistor', hi: 'ट्रांजिस्टर', symbol: 'Q', unit: 'gain (β)', desc_en: 'Amplifies or switches electrical signals.', desc_hi: 'Signal amplify या switch करता है।' },
  { en: 'Diode', hi: 'डायोड', symbol: 'D', unit: 'V (forward)', desc_en: 'Allows current in one direction only.', desc_hi: 'एक दिशा में ही current जाने देता है।' },
  { en: 'Inductor', hi: 'प्रेरक', symbol: 'L', unit: 'H (Henry)', desc_en: 'Stores energy in magnetic field. Resists current change.', desc_hi: 'Magnetic field में energy संग्रहीत करता है।' },
  { en: 'Voltage', hi: 'वोल्टेज / विभव', symbol: 'V', unit: 'V (Volts)', desc_en: 'The electrical pressure / push. Measured in Volts.', desc_hi: 'बिजली का दबाव। Volts में मापा जाता है।' },
  { en: 'Current', hi: 'धारा', symbol: 'I', unit: 'A (Amperes)', desc_en: 'The flow of electrons. Measured in Amperes.', desc_hi: 'Electrons का प्रवाह। Amperes में मापा जाता है।' },
  { en: 'Resistance', hi: 'प्रतिरोध', symbol: 'R', unit: 'Ω (Ohms)', desc_en: 'Opposition to current flow. Measured in Ohms.', desc_hi: 'Current के प्रवाह का विरोध। Ohms में मापा जाता है।' },
  { en: 'Ohm\'s Law', hi: 'ओम का नियम', symbol: 'V=IR', unit: '-', desc_en: 'V = I × R. The fundamental equation of electronics.', desc_hi: 'V = I × R। इलेक्ट्रॉनिक्स का बुनियादी समीकरण।' },
  { en: 'Breadboard', hi: 'ब्रेडबोर्ड', symbol: '-', unit: '-', desc_en: 'Prototyping board — no soldering needed.', desc_hi: 'Prototyping board — soldering नहीं चाहिए।' },
  { en: 'PCB', hi: 'मुद्रित परिपथ बोर्ड', symbol: '-', unit: '-', desc_en: 'Printed Circuit Board — permanent circuit base.', desc_hi: 'स्थायी circuit का आधार।' },
  { en: 'Multimeter', hi: 'मल्टीमीटर', symbol: '-', unit: 'V/A/Ω', desc_en: 'Measures voltage, current, resistance, continuity.', desc_hi: 'Voltage, current, resistance, continuity मापता है।' },
  { en: 'DC', hi: 'सीधी धारा', symbol: 'DC', unit: '-', desc_en: 'Direct Current — flows in one direction. From batteries.', desc_hi: 'एक दिशा में बहती है। Batteries से।' },
  { en: 'AC', hi: 'प्रत्यावर्ती धारा', symbol: 'AC', unit: '50Hz', desc_en: 'Alternating Current — reverses direction. From wall sockets.', desc_hi: 'दिशा बदलती रहती है। Wall socket से।' },
  { en: 'Ground', hi: 'भूमि / ग्राउंड', symbol: 'GND / −', unit: '0V', desc_en: 'The reference point — 0 Volts. Always connect black probe here.', desc_hi: 'Reference point — 0 Volts।' },
  { en: 'Short circuit', hi: 'शॉर्ट सर्किट', symbol: '-', unit: '-', desc_en: 'Direct unintended connection between + and −. Can cause fire!', desc_hi: 'सीधा अनचाहा + और − का connection। आग लग सकती है!' },
  { en: 'Open circuit', hi: 'खुला सर्किट', symbol: '-', unit: '-', desc_en: 'A break in the circuit — current cannot flow.', desc_hi: 'Circuit में टूटन — current नहीं बह सकती।' },
  { en: 'Soldering', hi: 'टांका लगाना', symbol: '-', unit: '-', desc_en: 'Permanently joining components to PCB using molten metal.', desc_hi: 'पिघली धातु से components को PCB पर स्थायी जोड़ना।' },
  { en: 'Arduino', hi: 'अरदुइनो', symbol: '-', unit: '-', desc_en: 'Beginner-friendly microcontroller board for making projects.', desc_hi: 'Projects बनाने के लिए beginner-friendly microcontroller board।' },
  { en: 'Transistor (NPN)', hi: 'ट्रांजिस्टर NPN', symbol: 'Q', unit: 'β (gain)', desc_en: 'Base controls Collector-Emitter current. Small signal controls large current.', desc_hi: 'Base, Collector-Emitter current को control करता है।' },
  { en: 'IC (Integrated Circuit)', hi: 'एकीकृत परिपथ', symbol: 'U / IC', unit: '-', desc_en: 'Many transistors/resistors/capacitors on one silicon chip.', desc_hi: 'एक silicon chip पर कई transistors और resistors।' },
  { en: '555 Timer', hi: '555 टाइमर', symbol: 'U1', unit: '-', desc_en: 'The most used IC ever. Creates timing pulses, oscillations.', desc_hi: 'सबसे ज्यादा use होने वाली IC। Timing pulses बनाती है।' },
  { en: 'ESD', hi: 'स्थैतिक विद्युत निर्वहन', symbol: '-', unit: '-', desc_en: 'Electrostatic Discharge — static electricity that can destroy ICs.', desc_hi: 'Static electricity जो ICs को नष्ट कर सकती है।' },
  { en: 'Schematic', hi: 'सर्किट आरेख', symbol: '-', unit: '-', desc_en: 'Diagram showing electrical connections using standard symbols.', desc_hi: 'Standard symbols से electrical connections दिखाने वाला diagram।' },
  { en: 'Anode', hi: 'एनोड', symbol: '+', unit: '-', desc_en: 'Positive terminal of a diode/LED. Current enters here.', desc_hi: 'Diode/LED का positive terminal। Current यहाँ enter करती है।' },
  { en: 'Cathode', hi: 'कैथोड', symbol: '−', unit: '-', desc_en: 'Negative terminal of a diode/LED. Current exits here.', desc_hi: 'Diode/LED का negative terminal। Current यहाँ से exit होती है।' }
];
