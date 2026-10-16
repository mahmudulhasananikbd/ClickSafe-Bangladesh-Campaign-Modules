export interface QuizQuestion {
  id: string;
  moduleId: string;
  questionBn: string;
  questionEn: string;
  optionsBn: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationBn: string;
  explanationEn: string;
  conceptKey: string;
  generatedByAI?: boolean;
}

export const MODULE_QUIZ_POOL: Record<string, QuizQuestion[]> = {
  // Module 0: Welcome & Preparation
  m0: [
    {
      id: 'm0-q1',
      moduleId: 'm0',
      conceptKey: "Rafiq's 30s Rule",
      questionBn: 'রফিক সাহেবের মতো আকস্মিক ভীতি বা লোভনীয় মেসেজ পেলে সাইবার ডিফেন্সের প্রথম নিয়ম কী?',
      questionEn: "When facing an urgent threat or alluring offer like Rafiq's story, what is the #1 cyber defense rule?",
      optionsBn: [
        'তাড়াহুড়ো করে দ্রুত লিংকে ক্লিক করা',
        '৩০ সেকেন্ড থামুন, গভীর শ্বাস নিন এবং কোনো পদক্ষেপ নেওয়ার আগে চিন্তা করুন',
        'মেসেজটি সব বন্ধু ও গ্রুপে ফরওয়ার্ড করে দেওয়া',
        'তাৎক্ষণিকভাবে সব ব্যালেন্স অন্য অ্যাকাউন্টে পাঠানো'
      ],
      optionsEn: [
        'Click the link as fast as possible',
        'Pause for 30 seconds, breathe, and think before taking any action',
        'Forward the message to all friends and groups',
        'Immediately transfer all funds to another wallet'
      ],
      correctIndex: 1,
      explanationBn: 'স্ক্যামাররা সর্বদা কৃত্রিম তাড়াহুড়ো তৈরি করে যাতে মানুষ চিন্তা না করেই ভুল করে। ৩০ সেকেন্ডের বিরতিই আপনাকে ৮০% ফাঁদ থেকে বাঁচায়।',
      explanationEn: 'Scammers deliberately manufacture panic and urgency so you react without thinking. A 30-second pause protects you from 80% of digital traps.'
    },
    {
      id: 'm0-q2',
      moduleId: 'm0',
      conceptKey: 'Human Firewall',
      questionBn: '‘হিউম্যান ফায়ারওয়াল (Human Firewall)’ বলতে সাইবার নিরাপত্তায় কী বোঝায়?',
      questionEn: 'What does "Human Firewall" mean in cybersecurity awareness?',
      optionsBn: [
        'কম্পিউটারের দামি অ্যান্টিভাইরাস সফটওয়্যার',
        'সচেতন ও সতর্ক মানুষ যারা প্রযুক্তিগত সুরক্ষার বাইরে প্রথম প্রতিরক্ষা ঢাল হিসেবে কাজ করে',
        'সার্ভার রুমের অগ্নিনির্বাপক কর্মী',
        'শুধু আইটি বিশেষজ্ঞদের একটি দল'
      ],
      optionsEn: [
        'Expensive antivirus software on a PC',
        'Conscious, vigilant humans acting as the frontline shield alongside technology',
        'Firefighters stationed at data centers',
        'An exclusive team of IT engineers'
      ],
      correctIndex: 1,
      explanationBn: 'যেকোনো প্রতিষ্ঠানের বা ব্যক্তিগত সুরক্ষার সবচেয়ে শক্তিশালী ও দুর্বলতম জায়গা হলো মানুষ। সচেতন আচরণই সবচেয়ে বড় নিরাপত্তা ঢাল।',
      explanationEn: 'Technology alone cannot stop social engineering. Educated and alert individuals form the ultimate frontline defense.'
    },
    {
      id: 'm0-q3',
      moduleId: 'm0',
      conceptKey: 'THINK Framework',
      questionBn: 'ক্যাম্পেইনের THINK ফ্রেমওয়ার্কে ‘T’ এবং ‘N’ এর অর্থ কী?',
      questionEn: 'In the campaign THINK framework, what do "T" and "N" stand for?',
      optionsBn: [
        'T = True (সত্য কি?) এবং N = Necessary (প্রয়োজনীয় কি?)',
        'T = Telegram এবং N = Netflix',
        'T = Transfer এবং N = Network',
        'T = Time এবং N = Normal'
      ],
      optionsEn: [
        'T = True (Is it true?) and N = Necessary (Is it necessary?)',
        'T = Telegram and N = Netflix',
        'T = Transfer and N = Network',
        'T = Time and N = Normal'
      ],
      correctIndex: 0,
      explanationBn: 'THINK ফ্রেমওয়ার্ক: True (সত্য?), Helpful (উপকারী?), Inspiring (উৎসাহব্যঞ্জক?), Necessary (প্রয়োজনীয়?), Kind (সদয়?)। তথ্যের সত্যতা ও প্রয়োজনীয়তা যাচাই অত্যন্ত জরুরি।',
      explanationEn: 'THINK stands for True, Helpful, Inspiring, Necessary, Kind. Verifying truth and necessity stops viral misinformation and phishing.'
    },
    {
      id: 'm0-q4',
      moduleId: 'm0',
      conceptKey: 'Phone Flip Habit',
      questionBn: 'গুরুত্বপূর্ণ কাজ বা পড়ার সময় ‘Phone Flip’ পদ্ধতির মূল উপকারিতা কী?',
      questionEn: 'What is the primary benefit of the "Phone Flip" habit during study or critical meetings?',
      optionsBn: [
        'ফোনের ব্যাটারি ৫০% দ্রুত চার্জ হয়',
        'স্ক্রিন নিচের দিকে রাখলে অপ্রয়োজনীয় পপ-আপের ডিজিটাল বিভ্রান্তি ও আবেগজনিত রিফ্লেক্স কমে',
        'ফোনের ক্যামেরা স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যায়',
        'ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়ে যায়'
      ],
      optionsEn: [
        'The phone charges 50% faster',
        'Flipping the screen face-down eliminates visual panic triggers and impulsive reflexes',
        'The camera permanently powers down',
        'Internet completely disconnects'
      ],
      correctIndex: 1,
      explanationBn: 'স্ক্রিন চোখের আড়ালে থাকলে নোটিফিকেশন দেখে তাৎক্ষণিক আবেগতাড়িত সিদ্ধান্ত নেওয়ার প্রবণতা নাটকীয়ভাবে হ্রাস পায়।',
      explanationEn: 'Hiding notification previews breaks the impulse loop, keeping you calm and preventing hasty clicks on malicious alerts.'
    },
    {
      id: 'm0-q5',
      moduleId: 'm0',
      conceptKey: 'Zero Trust Mindset',
      questionBn: 'সাইবার নিরাপত্তার স্বর্ণসূত্র কী?',
      questionEn: 'What is the foundational golden rule of digital safety?',
      optionsBn: [
        'সব অচেনা লিংকেই ক্লিক করে দেখা উচিত কী আছে',
        'কখনোই যাচাই ছাড়া বিশ্বাস করবেন না, সর্বদা অফিশিয়াল চ্যানেলে সত্যতা প্রমাণ করুন',
        'পাসওয়ার্ড কাউকে লিখে দিলে সমস্যা নেই',
        'ব্যাংক এসএমএস পাঠালেই সাথে সাথে পাসওয়ার্ড লিখে পাঠানো'
      ],
      optionsEn: [
        'Click every unfamiliar link to see what is inside',
        'Never trust blindly; always verify independently through official channels',
        'Writing passwords on sticky notes is harmless',
        'Immediately reply to SMS with your wallet password'
      ],
      correctIndex: 1,
      explanationBn: 'জিরো ট্রাস্ট (Zero Trust) নীতি: কোনো কল, মেসেজ বা লিংকে অন্ধবিশ্বাস না করে সরাসরি অফিশিয়াল সোর্সে যাচাই করা।',
      explanationEn: 'Zero Trust: Never blindly trust digital communication; always authenticate independently through verified contacts.'
    }
  ],

  // Module 1: Why You Are a Target
  m1: [
    {
      id: 'm1-q1',
      moduleId: 'm1',
      conceptKey: 'Digital Treasure Map',
      questionBn: 'একজন সাধারণ মানুষের স্মার্টফোনে হ্যাকারদের দৃষ্টিতে সবচেয়ে বড় ‘ট্রেজার (সম্পদ)’ কোনটি?',
      questionEn: 'In a digital treasure map, what is the most prized asset scammers seek in your phone?',
      optionsBn: [
        'শুধুমাত্র ক্যালকুলেটর হিস্ট্রি',
        'কন্টাক্ট লিস্ট, ফটো গ্যালারি, ব্যাংকিং অ্যাপস এবং আর্থিক এসএমএস/ওটিপি',
        'ফোনের রিংটোন ও ওয়ালপেপার',
        'মোবাইল কভারের রঙ'
      ],
      optionsEn: [
        'Just the calculator history',
        'Contact lists, photo galleries, banking apps, and financial SMS/OTPs',
        'Ringtone and wallpaper files',
        'The phone case color'
      ],
      correctIndex: 1,
      explanationBn: 'আপনার কন্টাক্ট ও ছবি দিয়ে ব্ল্যাকমেইল বা আত্মীয়দের কাছে টাকা দাবি করা যায়, এবং ব্যাংকিং এসএমএস দিয়ে তহবিল হাতিয়ে নেওয়া যায়।',
      explanationEn: 'Your contacts enable identity impersonation, galleries enable extortion, and SMS/financial apps give direct wallet access.'
    },
    {
      id: 'm1-q2',
      moduleId: 'm1',
      conceptKey: 'Nusrat Story',
      questionBn: 'নুসরাতের মতো সাধারণ শিক্ষার্থী বা নাগরিকরা প্রায়ই ভুল ধারণায় থাকেন যে—',
      questionEn: 'Like Nusrat, what common dangerous misconception do many regular citizens hold?',
      optionsBn: [
        '‘আমার অ্যাকাউন্টে তো কোটি টাকা নেই, আমাকে হ্যাকাররা কেন টার্গেট করবে?’',
        '‘আমার ফোন সবসময় আপডেট রাখা উচিত’',
        '‘টু-ফ্যাক্টর অথেনটিকেশন অন রাখা দরকার’',
        '‘অচেনা অ্যাপ ইনস্টল করা ঝুঁকিপূর্ণ’'
      ],
      optionsEn: [
        '"I don’t have millions in my account, why would any hacker target me?"',
        '"I should always keep my device updated"',
        '"Two-factor authentication is mandatory"',
        '"Unknown apps are hazardous"'
      ],
      correctIndex: 0,
      explanationBn: 'স্ক্যামারদের কাছে প্রতিটি সচল সিম ও পরিচয় মূল্যবান। বট বা অটোমেশন দিয়ে তারা কোটি কোটি সাধারণ মানুষের ছোট ছোট তথ্য একত্র করে বড় ক্ষতি করে।',
      explanationEn: 'Attackers target ordinary accounts for botnet relays, extortion, contact harvesting, and micro-fraud regardless of your bank balance.'
    },
    {
      id: 'm1-q3',
      moduleId: 'm1',
      conceptKey: 'Lock Screen Notification Test',
      questionBn: 'ফোনের লক-স্ক্রিনে সংবেদনশীল নোটিফিকেশন প্রিভিউ অন রাখার ঝুঁকি কী?',
      questionEn: 'What is the danger of showing sensitive notification previews on your lock screen?',
      optionsBn: [
        'ফোনের চার্জ তাড়াতাড়ি শেষ হয়',
        'ফোন লক থাকা অবস্থাতেও যে কেউ আপনার ওটিপি (OTP) ও ব্যক্তিগত মেসেজ স্ক্রিনে পড়ে নিতে পারে',
        'স্ক্রিনের উজ্জ্বলতা কমে যায়',
        'ওয়াইফাই স্পিড ধীরগতির হয়ে যায়'
      ],
      optionsEn: [
        'Battery drains slightly quicker',
        'Anyone can read your OTPs and private bank codes even when your phone is locked',
        'Screen brightness dims permanently',
        'Wi-Fi bandwidth is restricted'
      ],
      correctIndex: 1,
      explanationBn: 'লক স্ক্রিনে ওটিপি দেখা গেলে ফোন পাশে রেখে কোথাও গেলেও যে কেউ কোড দেখে লগইন করে ফেলতে পারে। লক স্ক্রিনে কন্টেন্ট হাইড রাখা উচিত।',
      explanationEn: 'If sensitive content is visible on lock screen, nearby actors can view 2FA OTP codes without unlocking your phone.'
    },
    {
      id: 'm1-q4',
      moduleId: 'm1',
      conceptKey: 'App Permission Audit',
      questionBn: 'একটি সাধারণ ফ্ল্যাশলাইট বা ক্যালকুলেটর অ্যাপ যদি আপনার ‘Contacts’ ও ‘Storage’ পারমিশন চায়, তবে কী করবেন?',
      questionEn: 'If a basic flashlight or calculator app requests access to "Contacts" and "Storage", what should you do?',
      optionsBn: [
        'সব পারমিশন দিয়ে ইনস্টল করবেন',
        'অনুমতি প্রত্যাখ্যান করবেন এবং অবিলম্বে অ্যাপটি আনইনস্টল করবেন',
        'বন্ধুদের সাথে অ্যাপটি শেয়ার করবেন',
        'ফোনের ব্রাইটনেস ফুল করে দেবেন'
      ],
      optionsEn: [
        'Grant all requested permissions',
        'Deny the permissions and uninstall the suspicious app immediately',
        'Share the app with friends',
        'Turn screen brightness to maximum'
      ],
      correctIndex: 1,
      explanationBn: 'ক্যালকুলেটর বা ফ্ল্যাশলাইটের কন্টাক্ট বা স্টোরেজের প্রয়োজন নেই। এমন অপ্রাসঙ্গিক পারমিশন চাওয়া ম্যালওয়্যার ও স্পাইওয়্যারের সুস্পষ্ট লক্ষণ।',
      explanationEn: 'Basic utilities have zero legitimate need for contact or gallery access; such requests signal surveillance malware or spyware.'
    }
  ],

  // Module 2: Psychological Traps
  m2: [
    {
      id: 'm2-q1',
      moduleId: 'm2',
      conceptKey: '6 Human Traps',
      questionBn: '‘আপনার অ্যাকাউন্ট ২৪ ঘণ্টার মধ্যে বন্ধ হবে, এখনই ক্লিক করে ভেরিফাই করুন!’—এখানে কোন মনস্তাত্ত্বিক ফাঁদ ব্যবহার করা হয়েছে?',
      questionEn: '"Your account will be suspended within 24 hours, click to verify now!"—which psychological trap is at play?',
      optionsBn: [
        'সহানুভূতি ও দানশীলতা',
        'ভয় ও কৃত্রিম তাড়া (Fear & Artificial Urgency)',
        'কৌতূহল ও প্রশংসা',
        'নীরবতা ও উদাসীনতা'
      ],
      optionsEn: [
        'Sympathy and charity',
        'Fear & Artificial Urgency',
        'Curiosity and compliments',
        'Silence and indifference'
      ],
      correctIndex: 1,
      explanationBn: 'ভয় ও তাড়াহুড়ো মানুষের মস্তিষ্কের যৌক্তিক চিন্তা করার অংশটিকে দুর্বল করে দেয়, যাতে দ্রুত অসতর্ক সিদ্ধান্ত নেওয়া হয়।',
      explanationEn: 'Fear and ticking clocks hijack your amygdala, inducing panic and forcing hurried mistakes before logical scrutiny.'
    },
    {
      id: 'm2-q2',
      moduleId: 'm2',
      conceptKey: 'Greed Trap',
      questionBn: '‘অভিনন্দন! আপনি লটারিতে ৫০,০০০ টাকা জিতেছেন! ফি হিসেবে ৫০০ টাকা পাঠান।’—এখানে সঠিক প্রতিক্রিয়া কী?',
      questionEn: '"Congratulations! You won 50,000 BDT lottery! Send 500 BDT processing fee to claim." What is the proper response?',
      optionsBn: [
        'তাত্ক্ষণিকভাবে ৫০০ টাকা পাঠানো',
        'এটি লোভের ফাঁদ (Greed Trap)—কোনো বৈধ লটারি পাওয়ার জন্য আগে ফি দিতে হয় না; এটি ব্লক ও রিপোর্ট করুন',
        'আরও বন্ধুদের ৫০০ টাকা পাঠাতে বলা',
        'নিজের ন্যাশনাল আইডি কার্ডের ছবি পাঠানো'
      ],
      optionsEn: [
        'Immediately send 500 BDT',
        'This is a classic Greed Trap—legitimate lotteries never demand advance fees; block & report',
        'Ask friends to contribute the fee',
        'Send photos of your National ID card'
      ],
      correctIndex: 1,
      explanationBn: 'অপ্রত্যাশিত পুরষ্কারের লোভ দেখিয়ে অগ্রিম টাকা চাওয়া হলো বহুল প্রচলিত অ্যাডভান্স-ফি স্ক্যাম (Advance-fee fraud)।',
      explanationEn: 'Advance-fee scams exploit greed. If you did not enter a contest, you cannot win; never pay money to receive money.'
    },
    {
      id: 'm2-q3',
      moduleId: 'm2',
      conceptKey: '6-Stage Fraud Cycle',
      questionBn: 'স্ক্যামারদের প্রতারণা চক্রের প্রথম ধাপ কোনটি?',
      questionEn: 'What is the very first stage in the 6-stage cyber fraud cycle?',
      optionsBn: [
        'টাকা তুলে নিখোঁজ হওয়া',
        'তথ্য সংগ্রহ ও টার্গেট নির্বাচন (Reconnaissance)',
        'ওটিপি চাওয়া',
        'পুলিশের ভয় দেখানো'
      ],
      optionsEn: [
        'Cashing out and disappearing',
        'Information Gathering & Target Reconnaissance',
        'Demanding the OTP',
        'Threatening police arrest'
      ],
      correctIndex: 1,
      explanationBn: 'প্রথমে তারা সোশ্যাল মিডিয়া বা পাবলিক তথ্য ঘেঁটে ভিকটিম সম্পর্কে তথ্য সংগ্রহ করে (Reconnaissance), এরপর বিশ্বাস তৈরি করে ফাঁদ পাতে।',
      explanationEn: 'Attackers begin with reconnaissance—harvesting public data from social media to craft personalized, believable pretexts.'
    },
    {
      id: 'm2-q4',
      moduleId: 'm2',
      conceptKey: 'Authority Trap',
      questionBn: 'ফোন করে কেউ যদি নিজেকে ‘পুলিশ অফিসার’ বা ‘ব্যাংক ম্যানেজার’ পরিচয় দিয়ে গোপন তথ্য চায়, কী করবেন?',
      questionEn: 'If a caller claims to be a "Police Officer" or "Bank Manager" demanding private PIN/credentials, what should you do?',
      optionsBn: [
        'ভয়ে সমস্ত পাসওয়ার্ড ও পিন বলে দেওয়া',
        'কল কেটে দিন এবং সংশ্লিষ্ট প্রতিষ্ঠান বা ব্যাংকের অফিসিয়াল হটলাইনে সরাসরি ফোন করে যাচাই করুন',
        'তাত্ক্ষণিক মোবাইল রিচার্জ করে দেওয়া',
        'কাউকে না জানিয়ে লুকিয়ে রাখা'
      ],
      optionsEn: [
        'Comply out of intimidation and share passwords',
        'Hang up immediately and call the official verified hotline of that institution directly',
        'Send mobile airtime balance',
        'Keep it secret without informing anyone'
      ],
      correctIndex: 1,
      explanationBn: 'আইনশৃঙ্খলা রক্ষাকারী বাহিনী বা ব্যাংক ম্যানেজার কখনোই ফোনে আপনার ব্যক্তিগত পিন, ওটিপি বা অ্যাকাউন্টের পাসওয়ার্ড চাইবেন না।',
      explanationEn: 'Legitimate law enforcement and bank officials will never demand confidential PINs or OTPs over phone calls.'
    }
  ],

  // Module 3A: Local Scam Hotspots
  m3a: [
    {
      id: 'm3a-q1',
      moduleId: 'm3a',
      conceptKey: 'bKash/Nagad Cash-in Trap',
      questionBn: '‘ভুলবশত আপনার নম্বরে ৩,০০০ টাকা ক্যাশ-ইন চলে গেছে, দয়া করে ফেরত দিন’—মেসেজ এলে কী পরীক্ষা করবেন?',
      questionEn: '"I mistakenly sent 3,000 BDT to your bKash, please refund it"—what must you inspect first?',
      optionsBn: [
        'মেসেজ দেখেই সাথে সাথে নিজের অ্যাকাউন্ট থেকে টাকা পাঠিয়ে দেওয়া',
        'মেসেজের প্রেরক নম্বর খেয়াল করুন এবং অফিসিয়াল bKash/Nagad অ্যাপে লগইন করে প্রকৃত ব্যালেন্স ও লেনদেন হিস্ট্রি চেক করুন',
        'মেসেজটি ফেসবুক ওয়ালে পোস্ট করা',
        'ফোনটি বন্ধ করে রাখা'
      ],
      optionsEn: [
        'Immediately transfer money back based solely on their SMS',
        'Check the sender ID and open your official wallet app to verify actual statement history & balance',
        'Post the screenshot on Facebook',
        'Turn off your phone'
      ],
      correctIndex: 1,
      explanationBn: 'স্ক্যামাররা সাধারণ নম্বর থেকে ভুয়া ‘bKash Cash-in’ টেক্সট সাজিয়ে পাঠিয়ে বিভ্রান্ত করে। সর্বদা অফিশিয়াল ওয়ালেট অ্যাপের হিস্ট্রি দেখে নিশ্চিত হোন।',
      explanationEn: 'Scammers spoof SMS texts from personal numbers. Always open your verified wallet app statement to check genuine balance changes.'
    },
    {
      id: 'm3a-q2',
      moduleId: 'm3a',
      conceptKey: 'Foreign WhatsApp Call',
      questionBn: 'হোয়াটসঅ্যাপে +92 বা অজানা বিদেশি কোড থেকে আসা চাকরির অফার বা ক্রিপ্টো কারেন্সি মেসেজের ক্ষেত্রে কী করা উচিত?',
      questionEn: 'What should you do with WhatsApp job offers or crypto links arriving from +92 or unfamiliar international prefixes?',
      optionsBn: [
        'লিংকে ঢুকে সিভি এবং পাসপোর্টের কপি আপলোড করা',
        'কোনো উত্তর না দিয়ে নম্বরটি অবিলম্বে Block এবং Report করা',
        'তাদের সাথে বন্ধুত্ব করা ও পারিবারিক গল্প বলা',
        'ভিডিও কলে কথা বলা'
      ],
      optionsEn: [
        'Upload your CV and passport scan to their link',
        'Do not reply; immediately Block and Report the unknown international number',
        'Befriend them and share personal stories',
        'Accept their video call'
      ],
      correctIndex: 1,
      explanationBn: 'বিদেশি প্রিফিক্স থেকে টেলিগ্রাম টাস্ক বা ক্রিপ্টো কাজের নামে অর্থ আত্মসাতের আন্তর্জাতিক চক্র সক্রিয়। নম্বর ব্লক ও রিপোর্ট করাই সেরা সমাধান।',
      explanationEn: 'Cross-border syndicate scams lure users into fraudulent task/crypto Ponzi traps. Always report and block unsolicited international outreach.'
    },
    {
      id: 'm3a-q3',
      moduleId: 'm3a',
      conceptKey: 'Facebook Page Courier Scam',
      questionBn: 'ফেসবুক পেজে অবিশ্বাস্য কম দামে পণ্য কেনার ক্ষেত্রে কোন ঝুঁকিটি সবচেয়ে বেশি দেখা যায়?',
      questionEn: 'What is the top scam indicator when buying heavily discounted goods from unofficial Facebook pages?',
      optionsBn: [
        'ক্যাশ অন ডেলিভারিতে পণ্য দেখে টাকা দেওয়া',
        'অগ্রিম পুরো টাকা পার্সোনাল বিকাশ/নগদে নিয়ে পেজ ব্লক করে দেওয়া',
        'কুরিয়ারের ট্র্যাকিং নম্বর চেক করা',
        'রিভিউ যাচাই করা'
      ],
      optionsEn: [
        'Insisting on Cash-On-Delivery with open-box inspection',
        'Demanding 100% advance payment via personal bKash/Nagad followed by immediate page block',
        'Verifying courier tracking numbers',
        'Checking customer feedback'
      ],
      correctIndex: 1,
      explanationBn: 'ভুয়া পেজ খুলে অগ্রিম বুকিং ফি বা পুরো দাম হাতিয়ে নিয়ে গ্রাহককে ব্লক করা বাংলাদেশে সবচেয়ে বড় ই-কমার্স প্রতারণা।',
      explanationEn: 'Fake pages solicit advance non-refundable transfers via personal wallets, then vanish. Insist on verified merchants and Cash on Delivery.'
    },
    {
      id: 'm3a-q4',
      moduleId: 'm3a',
      conceptKey: 'Govt Scholarship SMS',
      questionBn: '‘প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট থেকে ১০,০০০ টাকা বৃত্তি দেওয়া হচ্ছে, ফর্ম পূরণ করুন’—এরকম লিংকে প্রবেশের আগে কী দেখা উচিত?',
      questionEn: 'A message claims: "Prime Minister Education Trust scholarship 10,000 BDT awarded, fill form"—what must you examine first?',
      optionsBn: [
        'লিংকের ডোমেইন নেম সরকারি কিনা (যেমন: .gov.bd আছে কি না)',
        'লিংকটি কত সুন্দর দেখতে',
        'মেসেজটি কোনো গ্রুপের বড় ভাই পাঠিয়েছেন কিনা',
        'ফোন চার্জে দেওয়া আছে কিনা'
      ],
      optionsEn: [
        'Inspect the domain to see if it ends in legitimate official ".gov.bd"',
        'Whether the link looks visually pretty',
        'Whether a senior group member forwarded it',
        'Whether the phone battery is charged'
      ],
      correctIndex: 0,
      explanationBn: 'বাংলাদেশ সরকারের সব অফিশিয়াল ওয়েবসাইট ও স্কলারশিপের ঠিকানা .gov.bd ডোমেইনে থাকে। .xyz, .top বা ব্লগস্পট লিংকের সবই ভুয়া।',
      explanationEn: 'Official Bangladesh government initiatives strictly use ".gov.bd" domains. TLDs like .xyz, .tk, or blogspot are spoofed phishing links.'
    }
  ],

  // Module 3: Phishing & Fake Links
  m3: [
    {
      id: 'm3-q1',
      moduleId: 'm3',
      conceptKey: 'Decision Tree',
      questionBn: 'একটি অচেনা লিংকে ক্লিক করার আগে ৩-প্রশ্নের ডিসিশন ট্রির ৩টি মূল প্রশ্ন কী কী?',
      questionEn: 'Before clicking an unknown link, what are the 3 essential decision tree questions?',
      optionsBn: [
        'কে পাঠিয়েছে? কেন এত তাড়া? লিংকটি প্রকৃতপক্ষে কোন ডোমেইনে যাচ্ছে?',
        'আমার ফোন গরম হচ্ছে কেন? ওয়াইফাই চালু আছে কি? ব্যাটারি কত?',
        'লিংকটি কি বড়? লেখাটি বাংলায় নাকি ইংরেজিতে? ফন্ট সাইজ কত?',
        'মেসেজটি সকালের না বিকালের? মোবাইল নম্বরটি কার নামে নিবন্ধিত? কত মেগাবাইট ফ্রি?'
      ],
      optionsEn: [
        'Who sent it? Why the urgency? Where does the URL actually lead?',
        'Why is my phone warm? Is Wi-Fi on? What is the battery percentage?',
        'Is the link long? Is it in Bangla or English? What is font size?',
        'Was it sent morning or evening? Who owns the SIM? How many MB free?'
      ],
      correctIndex: 0,
      explanationBn: 'প্রেরক যাচাই, কৃত্রিম তাড়ার কারণ বোঝা এবং প্রকৃত ডোমেইন ঠিকানা বিশ্লেষণ করলেই ৯৯% ফিশিং লিংক শনাক্ত করা যায়।',
      explanationEn: 'Analyzing the sender identity, questioning manufactured urgency, and inspecting the actual destination domain foils 99% of phishing.'
    },
    {
      id: 'm3-q2',
      moduleId: 'm3',
      conceptKey: 'Domain Spoofing',
      questionBn: 'নিচের কোন ওয়েব ঠিকানাটি bKash এর প্রকৃত অফিশিয়াল ঠিকানা নয়?',
      questionEn: 'Which of the following URLs is a fraudulent, spoofed bKash domain?',
      optionsBn: [
        'https://www.bkash.com',
        'https://bkash.com/app',
        'https://bkash-reward-2026.xyz/claim',
        'https://www.bkash.com/campaign'
      ],
      optionsEn: [
        'https://www.bkash.com',
        'https://bkash.com/app',
        'https://bkash-reward-2026.xyz/claim',
        'https://www.bkash.com/campaign'
      ],
      correctIndex: 2,
      explanationBn: 'আসল ডোমেইন হলো bkash.com। ‘bkash-reward-2026.xyz’ হলো আক্রমণকারীর তৈরি নকল ফিশিং সাইট যা তথ্য চুরির উদ্দেশ্যে বানানো।',
      explanationEn: '"bkash.com" is the legitimate corporate domain. Additions like "-reward-2026.xyz" indicate an attacker-controlled phishing clone.'
    },
    {
      id: 'm3-q3',
      moduleId: 'm3',
      conceptKey: 'VirusTotal Analysis',
      questionBn: 'সন্দেহজনক কোনো ওয়েবসাইট বা ফাইল স্বয়ংক্রিয়ভাবে ৭০টির বেশি অ্যান্টিভাইরাস ইঞ্জিন দিয়ে যাচাই করতে কোন ফ্রি টুল ব্যবহার করা যায়?',
      questionEn: 'Which free security tool scans suspicious URLs or files against 70+ global antivirus engines simultaneously?',
      optionsBn: [
        'VirusTotal (virustotal.com)',
        'MS Paint',
        'YouTube Shorts',
        'Calculator App'
      ],
      optionsEn: [
        'VirusTotal (virustotal.com)',
        'MS Paint',
        'YouTube Shorts',
        'Calculator App'
      ],
      correctIndex: 0,
      explanationBn: 'VirusTotal হলো গুগলের বিশ্বস্ত প্ল্যাটফর্ম যেখানে যেকোনো সন্দেহজনক লিংক বা ফাইল স্ক্যান করে ক্ষতিকর কিনা তা যাচাই করা যায়।',
      explanationEn: 'VirusTotal aggregates scores across dozens of cybersecurity engines to detect malware payloads and deceptive phishing hosts.'
    },
    {
      id: 'm3-q4',
      moduleId: 'm3',
      conceptKey: 'Zahid vs Masum Story',
      questionBn: 'ক্যাম্পেইনের জাহিদ ও মাসুমের বাস্তব গল্প থেকে কী প্রধান শিক্ষা পাওয়া যায়?',
      questionEn: 'What is the main takeaway from the Zahid vs Masum case study in the campaign?',
      optionsBn: [
        'সব লিংকেই দ্রুত ক্লিক করা বীরত্ব',
        'লিংক যাচাই না করে লগইন তথ্য দিলে মুহূর্তেই সামাজিক যোগাযোগমাধ্যমের নিয়ন্ত্রণ হারিয়ে যায়',
        'পাসওয়ার্ড কাউকে লিখে দিলে ভালো',
        'ফোনে সবসময় গেম খেলা উচিত'
      ],
      optionsEn: [
        'Clicking links rapidly is commendable',
        'Entering credentials on an unverified link leads to instantaneous account hijacking',
        'Writing passwords on sticky notes is safe',
        'Gaming on mobile prevents hacking'
      ],
      correctIndex: 1,
      explanationBn: 'মাসুম ভুয়া লিংকে ফেসবুক লগইন পেজ দেখে পাসওয়ার্ড দিয়ে দেয় এবং তার আইডি হ্যাক হয়; আর জাহিদ ডোমেইন যাচাই করে নিজেকে রক্ষা করে।',
      explanationEn: 'Masum fell for a cloned login screen and forfeited his credentials; Zahid paused to verify the domain bar and saved his identity.'
    }
  ],

  // Module 4: Passwords & 2FA
  m4: [
    {
      id: 'm4-q1',
      moduleId: 'm4',
      conceptKey: 'Passphrase vs Password',
      questionBn: 'নিচের কোনটি হ্যাকারদের ক্র্যাক করা সবচেয়ে কঠিন এবং মনে রাখাও সহজ?',
      questionEn: 'Which of the following is most resilient against brute-force cracking while being easy to remember?',
      optionsBn: [
        '12345678',
        'admin@2026',
        'Sundarban-Hilsha-Rocket-Sky#99 (৪টি র‍্যান্ডম শব্দের পাসফ্রেজ)',
        'password123'
      ],
      optionsEn: [
        '12345678',
        'admin@2026',
        'Sundarban-Hilsha-Rocket-Sky#99 (A 4-word passphrase)',
        'password123'
      ],
      correctIndex: 2,
      explanationBn: 'পাসফ্রেজ (Passphrase) দৈর্ঘ্যে বড় হওয়ায় ব্রুট-ফোর্স বা অভিধান আক্রমণে ক্র্যাক করতে কোটি কোটি বছর লেগে যায়।',
      explanationEn: 'Passphrases leverage high entropy from multiple unrelated words, rendering brute-force cracking computationally infeasible.'
    },
    {
      id: 'm4-q2',
      moduleId: 'm4',
      conceptKey: 'MFA Priority Pyramid',
      questionBn: 'MFA প্রায়োরিটি পিরামিড অনুযায়ী কোন অ্যাকাউন্টে সবার আগে টু-ফ্যাক্টর অথেনটিকেশন (2FA) চালু করা আবশ্যক?',
      questionEn: 'According to the MFA Priority Pyramid, which account must be secured with 2FA first?',
      optionsBn: [
        'গেমের সাধারণ ডেমো অ্যাকাউন্ট',
        'প্রাইমারি ইমেইল ও আর্থিক ওয়ালেট/ব্যাংক অ্যাকাউন্ট',
        'মিউজিক প্লেয়ার',
        'ফোনের ওয়ালপেপার অ্যাপ'
      ],
      optionsEn: [
        'A casual mobile game demo account',
        'Primary Email (Google/Outlook) and Financial Wallets/Banking',
        'Offline music player',
        'Wallpaper browser'
      ],
      correctIndex: 1,
      explanationBn: 'প্রাইমারি ইমেইল হ্যাক হলে সেখান থেকে ‘পাসওয়ার্ড রিসেট’ দিয়ে আপনার ফেসবুক, ব্যাংক ও অন্যান্য সব অ্যাকাউন্ট হ্যাকার দখলে নিতে পারে।',
      explanationEn: 'Your master email holds password recovery keys for all other accounts; securing it with 2FA prevents cascade takeovers.'
    },
    {
      id: 'm4-q3',
      moduleId: 'm4',
      conceptKey: 'Authenticator App vs SMS',
      questionBn: 'এসএমএস ওটিপির চেয়ে গুগল অথেনটিকেটর (Authenticator App) কেন অধিক নিরাপদ?',
      questionEn: 'Why is an Authenticator app (TOTP) safer than traditional SMS OTPs?',
      optionsBn: [
        'কারণ এতে ইন্টারনেট লাগে না',
        'কারণ এসএমএস ইন্টারসেপ্ট বা সিম সোয়াপিং (SIM Swap) এর মাধ্যমে হ্যাকার চুরি করতে পারে, কিন্তু অ্যাপ ডিভাইসের বাইরে যায় না',
        'কারণ এটি রঙিন',
        'কারণ এতে কোনো কোড আসে না'
      ],
      optionsEn: [
        'Because it requires no internet connection',
        'SMS can be intercepted via SIM-swapping or SS7 attacks, whereas authenticator app keys reside locally on the device',
        'Because the app has colorful icons',
        'Because it never displays numbers'
      ],
      correctIndex: 1,
      explanationBn: 'সিম সোয়াপিং বা টেলিকম নেটওয়ার্কের ত্রুটি কাজে লাগিয়ে এসএমএস হ্যাক হতে পারে, কিন্তু অথেনটিকেটর অ্যাপ অফলাইনেও সম্পূর্ণ নিরাপদ কোড দেয়।',
      explanationEn: 'SIM swap fraud allows attackers to reroute cellular SMS, whereas hardware-tied TOTP apps remain immune to telecom interception.'
    },
    {
      id: 'm4-q4',
      moduleId: 'm4',
      conceptKey: 'Najma Story',
      questionBn: 'নাজমা বেগমের ফেসবুক আইডির সুরক্ষায় পাসওয়ার্ড পরিবর্তনের পাশাপাশি কোন কাজটি রক্ষা করেছিল?',
      questionEn: "In Najma's case study, what critical security layer stopped unauthorized access?",
      optionsBn: [
        'শুধুমাত্র প্রোফাইল ছবি গোপন রাখা',
        'টু-ফ্যাক্টর অথেনটিকেশন (2FA) সক্রিয় থাকা',
        'বন্ধুদের আনফ্রেন্ড করা',
        'মোবাইল রিস্টার্ট দেওয়া'
      ],
      optionsEn: [
        'Hiding her profile picture',
        'Having Two-Factor Authentication (2FA) actively enabled',
        'Unfriending contacts',
        'Rebooting her phone'
      ],
      correctIndex: 1,
      explanationBn: 'পাসওয়ার্ড চুরি হলেও 2FA সক্রিয় থাকলে হ্যাকার দ্বিতীয় কোড ছাড়া অ্যাকাউন্টে প্রবেশ করতে পারে না।',
      explanationEn: 'Even if an attacker breaches the password, enabled 2FA denies entry without physical access to the secondary authorization code.'
    }
  ],

  // Module 5: Social Privacy & Footprint
  m5: [
    {
      id: 'm5-q1',
      moduleId: 'm5',
      conceptKey: 'Sadia Vacation Story',
      questionBn: 'সাদিয়ার পরিবারের অবকাশ যাপনের লাইভ ছবি ও ‘Checking in at Cox’s Bazar’ পোস্ট দেখে চোরেরা কী করেছিল?',
      questionEn: "In Sadia's vacation story, how did burglars exploit real-time check-ins and travel photos?",
      optionsBn: [
        'সাদিয়ার পোস্টে লাইক দিয়েছিল',
        'নিশ্চিত হয়েছিল যে তাদের বাড়ি ফাঁকা এবং নির্বিঘ্নে বাড়িতে চুরি করেছিল',
        'সাদিয়ার হোটেল বুকিং বাড়িয়ে দিয়েছিল',
        'পুলিশকে খবর দিয়েছিল'
      ],
      optionsEn: [
        'Liked and commented on her posts',
        'Confirmed their home was unoccupied and carried out a burglary without hindrance',
        'Extended their hotel reservation',
        'Notified local law enforcement'
      ],
      correctIndex: 1,
      explanationBn: 'ভ্রমণে থাকাকালীন লাইভ লোকেশন দিলে অপরাধীরা জেনে যায় আপনার বাড়ি বা কর্মস্থল ফাঁকা। ভ্রমণ শেষে ফিরে এসে ছবি পোস্ট করাই নিরাপদ।',
      explanationEn: 'Broadcasting live travel locations informs bad actors that your residence is empty; wait until returning home before sharing vacation photos.'
    },
    {
      id: 'm5-q2',
      moduleId: 'm5',
      conceptKey: 'Digital Jigsaw Puzzle',
      questionBn: '‘ডিজিটাল জিগস পাজল (Digital Jigsaw Puzzle)’ ধারণা বলতে সাইবার নিরাপত্তার ক্ষেত্রে কী বোঝানো হয়েছে?',
      questionEn: 'What does the "Digital Jigsaw Puzzle" concept illustrate regarding online privacy?',
      optionsBn: [
        'একটি অনলাইন ভিডিও গেম',
        'সোশ্যাল মিডিয়ায় আপনার পোস্ট করা ছোট ছোট তথ্য (স্কুল, জন্মতারিখ, পোষা প্রাণীর নাম, লোকেশন) জোড়া দিয়ে হ্যাকাররা পূর্ণাঙ্গ নিরাপত্তা তথ্য বানিয়ে ফেলে',
        'কম্পিউটারের গ্রাফিক্স কার্ডের নাম',
        'ফেসবুক রিলস বানানোর নিয়ম'
      ],
      optionsEn: [
        'A casual online board game',
        'Seemingly harmless tidbits (school, pet names, birthdate, check-ins) pieced together by hackers to crack security questions',
        'The name of a graphics card',
        'Rules for making video reels'
      ],
      correctIndex: 1,
      explanationBn: 'আলাদা আলাদা পোস্ট সাধারণ মনে হলেও অপরাধীরা এগুলো মিলিয়ে আপনার গোপন উত্তর বা পাসওয়ার্ড রিসেট প্রশ্নের উত্তর বের করে ফেলে।',
      explanationEn: 'Fragmented public trivia enables OSINT actors to reconstruct your identity, guess password recovery challenges, or impersonate you.'
    },
    {
      id: 'm5-q3',
      moduleId: 'm5',
      conceptKey: '4 Questions Before Posting',
      questionBn: 'সোশ্যাল মিডিয়ায় কোনো কিছু পোস্ট করার আগে ৪টি আত্মজিজ্ঞাসার একটি কোনটি?',
      questionEn: 'Which question should you ask yourself before hitting "Publish" on social media?',
      optionsBn: [
        'এটি কয়টা লাইক পাবে?',
        'এই তথ্যটি কি কোনো অপরিচিত বা খারাপ ব্যক্তির হাতে গেলে আমার বা পরিবারের ক্ষতি হতে পারে?',
        'এটি পোস্ট করলে কি ইন্টারনেট খরচ বাড়বে?',
        'আমার ফোন কি গরম হবে?'
      ],
      optionsEn: [
        'How many likes will this collect?',
        'Could this information be weaponized against me or my family if viewed by an adversary?',
        'Will this upload consume excess cellular data?',
        'Will my phone temperature rise?'
      ],
      correctIndex: 1,
      explanationBn: 'পাবলিক পোস্ট চিরদিনের জন্য ডিজিটাল ফুটপ্রিন্টে থেকে যায়। খারাপ উদ্দেশ্যে যে কেউ এটি ব্যবহার করতে পারে কিনা তা ভাবা জরুরি।',
      explanationEn: 'The internet never forgets. Evaluating whether location, family, or schedule details can be weaponized protects your physical safety.'
    }
  ],

  // Module 6: Malware & Device Safety
  m6: [
    {
      id: 'm6-q1',
      moduleId: 'm6',
      conceptKey: 'Loan App Extortion',
      questionBn: 'রাহাতের মতো অনেকেই চটকদার বিজ্ঞাপনের অবৈধ লোন অ্যাপ ইনস্টল করে কী চরম বিপদে পড়েছিল?',
      questionEn: "In Rahat's loan app case, how did predatory mobile apps execute extortion?",
      optionsBn: [
        'অ্যাপটি তাকে উপহার দিয়েছিল',
        'অ্যাপটি ফোনের কন্টাক্ট ও ব্যক্তিগত ছবি চুরি করে আত্মীয়-স্বজনের কাছে বিকৃত ছবি পাঠিয়ে চাঁদা দাবি করেছিল',
        'ফোনটি স্বয়ংক্রিয়ভাবে বন্ধ হয়ে গিয়েছিল',
        'সিম কার্ড নষ্ট হয়ে গিয়েছিল'
      ],
      optionsEn: [
        'The app gifted him loyalty tokens',
        'The app scraped private contacts & gallery photos, using edited pictures to extort and harass relatives',
        'The phone simply shut down',
        'The SIM card was physically disabled'
      ],
      correctIndex: 1,
      explanationBn: 'অবৈধ লোন অ্যাপস মাইক্রোফোন, কন্টাক্ট ও গ্যালারি পারমিশন নিয়ে ব্ল্যাকমেইল নেটওয়ার্ক পরিচালনা করে। অফিসিয়াল স্টোরের বাইরে অপরিচিত লোন অ্যাপ নিষিদ্ধ।',
      explanationEn: 'Predatory lending apps demand excessive permissions to siphon contacts and photos for extortion, cyberbullying, and coercive blackmail.'
    },
    {
      id: 'm6-q2',
      moduleId: 'm6',
      conceptKey: 'Quishing / Rogue QR Codes',
      questionBn: 'দোকান বা রেস্তোরাঁর টেবিলে থাকা QR কোড স্ক্যান করার আগে কোন সতর্কতা নেওয়া উচিত?',
      questionEn: 'What safety check should you perform before scanning payment or menu QR codes in public venues?',
      optionsBn: [
        'চোখ বন্ধ করে স্ক্যান করা',
        'লক্ষ্য করুন আসল কিউআর কোডের ওপর কোনো স্টিকার বা নকল কিউআর কোড সাঁটা আছে কিনা এবং প্রদর্শিত URL পরীক্ষা করুন',
        'ফোনটি উল্টো করে ধরা',
        'ব্লুটুথ অন রাখা'
      ],
      optionsEn: [
        'Scan with your eyes closed',
        'Verify if a rogue sticker has been pasted over the genuine QR code and inspect the target URL preview',
        'Hold the phone upside down',
        'Keep Bluetooth permanently discovered'
      ],
      correctIndex: 1,
      explanationBn: 'স্ক্যামাররা আসল পেমেন্ট কিউআরের ওপর নিজের স্টিকার সেঁটে দেয় (Quishing)। স্ক্যান করে গন্তব্য লিঙ্ক এবং প্রতিষ্ঠানের নাম দেখে নিতে হয়।',
      explanationEn: 'Attackers paste sticker overlays on public payment QR codes (Quishing) redirecting payments or credential phishing. Always verify the decoded URL.'
    },
    {
      id: 'm6-q3',
      moduleId: 'm6',
      conceptKey: 'App Sideloading APK',
      questionBn: 'হোয়াটসঅ্যাপ বা মেসেঞ্জারে আসা ‘Free Internet.apk’ বা ‘Free Game.apk’ ফাইল ইনস্টল করার ঝুঁকি কী?',
      questionEn: 'What danger accompanies installing unsolicited ".apk" files shared over messaging apps?',
      optionsBn: [
        'ফোন দ্রুত চার্জ হবে',
        'এতে ট্রোজান বা স্পাইওয়্যার থাকতে পারে যা আপনার ব্যাংক ওটিপি এবং স্ক্রিনের সমস্ত লেখা হ্যাকারের কাছে পাঠিয়ে দেবে',
        'মেমোরি কার্ড বড় হয়ে যাবে',
        'কথা বলার সাউন্ড কোয়ালিটি বাড়বে'
      ],
      optionsEn: [
        'Phone battery charges faster',
        'It likely contains spyware or banking Trojans that siphon keystrokes, SMS OTPs, and screen recordings',
        'Memory capacity expands',
        'Call audio clarity improves'
      ],
      correctIndex: 1,
      explanationBn: 'অপরিচিত সোর্স থেকে APK ইনস্টল করা ম্যালওয়্যার প্রবেশের প্রধান পথ। গুগল প্লে প্রোটেক্ট বা অফিশিয়াল অ্যাপ স্টোর ছাড়া কোনো অ্যাপ ইনস্টল করবেন না।',
      explanationEn: 'Sideloading unverified APKs bypasses platform sandbox defenses, granting persistent spyware background permissions.'
    }
  ],

  // Module 7: OTP & Financial Fraud
  m7: [
    {
      id: 'm7-q1',
      moduleId: 'm7',
      conceptKey: 'OTP is Your House Key',
      questionBn: '‘OTP হলো আপনার ডিজিটাল সিন্দুকের চাবি’—এর মূল অর্থ কী?',
      questionEn: '"OTP is your digital house key"—what is the primary meaning of this metaphor?',
      optionsBn: [
        'যে কেউ চাইলে ওটিপি দিয়ে দেওয়া যায়',
        'চাবি যেমন ডাকাতকে দিলে ঘরের সব সম্পদ লুট হয়, তেমনই ওটিপি কাউকে দিলে সে আপনার সম্পূর্ণ টাকা তুলে নিতে পারে',
        'ওটিপি ফেসবুক স্ট্যাটাসে দেওয়া উচিত',
        'ওটিপি প্রতিদিন বদলাতে হয়'
      ],
      optionsEn: [
        'You can give away OTPs to anyone who asks nicely',
        'Handing over an OTP is equivalent to giving a burglar the key to your bank safe; unauthorized transactions become instant',
        'OTPs should be shared in social media statuses',
        'OTPs must be changed daily'
      ],
      correctIndex: 1,
      explanationBn: 'OTP কোনো সাধারণ কোড নয়, এটি আপনার অ্যাকাউন্ট থেকে অর্থ ছাড়ের চূড়ান্ত স্বাক্ষর। বিকাশ, নগদ বা ব্যাংকের কর্মচারীও কখনো OTP চাইবে না।',
      explanationEn: 'An OTP is your cryptographic authorization for funds release. No legitimate bank or wallet technician will ever request your OTP.'
    },
    {
      id: 'm7-q2',
      moduleId: 'm7',
      conceptKey: 'Anwar 50k Story',
      questionBn: 'আনোয়ার সাহেবের ৫০,০০০ টাকা খোয়া যাওয়ার মূল কারণ কী ছিল?',
      questionEn: "What was the root cause of Anwar losing 50,000 BDT in the financial fraud case?",
      optionsBn: [
        'তার ফোন হারিয়ে গিয়েছিল',
        'তিনি তথাকথিত বিকাশ হেল্পলাইন অফিসারের মিষ্টি কথায় বিশ্বাস করে ওটিপি ও পিন বলে দিয়েছিলেন',
        'তিনি বাজার করতে গিয়েছিলেন',
        'তিনি ইন্টারনেট রিচার্জ করেছিলেন'
      ],
      optionsEn: [
        'His phone was physically stolen',
        'He trusted a deceptive caller posing as a bKash representative and verbally surrendered his OTP and PIN',
        'He was out grocery shopping',
        'He recharged mobile data'
      ],
      correctIndex: 1,
      explanationBn: 'স্ক্যামার অত্যন্ত মিষ্টি কথায় বিশ্বাসযোগ্যতা তৈরি করেছিল। নিয়ম একটাই: কল যিনিই করুন, OTP কাউকে দেওয়া সম্পূর্ণ নিষিদ্ধ।',
      explanationEn: 'The scammer cultivated false authority through smooth persuasion. The golden rule is absolute: never disclose OTP to anyone.'
    },
    {
      id: 'm7-q3',
      moduleId: 'm7',
      conceptKey: 'Pin vs OTP',
      questionBn: 'মোবাইল ফিন্যান্সিয়াল সার্ভিস (MFS) এর গোপন পিন (PIN) ও ওটিপি (OTP) সম্পর্কে কোন বাক্যটি সত্য?',
      questionEn: 'Which statement regarding MFS secret PIN and OTP is universally TRUE?',
      optionsBn: [
        'ব্যাংক অফিসার বললে পিন দেওয়া জায়েজ',
        'বিশ্বের কোনো ব্যাংক, পুলিশ বা সরকার কর্মকর্তা গ্রাহকের পিন বা ওটিপি জানার অধিকার রাখেন না; এটি কেবল আপনার নিজের জন্য',
        'কাছের বন্ধুদের সাথে পিন শেয়ার করা নিরাপদ',
        'কাগজে পিন লিখে ফোনের পেছনে সেঁটে রাখা উচিত'
      ],
      optionsEn: [
        'Disclosing PIN is acceptable if a bank manager requests it',
        'No bank, police, or government entity has any legitimate authority to ask for your PIN or OTP; it is exclusively yours',
        'Sharing your wallet PIN with close acquaintances is safe',
        'Taping your written PIN to the back of your phone is recommended'
      ],
      correctIndex: 1,
      explanationBn: 'অফিসিয়াল সিস্টেম স্বয়ংক্রিয়ভাবে কাজ করে, মানুষের সহায়তায় পিন বা ওটিপি জানার কোনো টেকনিক্যাল প্রয়োজন ব্যাংকের নেই।',
      explanationEn: 'Banking software validates hashes automatically. No human employee requires your raw PIN or OTP to deliver customer support.'
    }
  ],

  // Module 8: AI & Deepfakes
  m8: [
    {
      id: 'm8-q1',
      moduleId: 'm8',
      conceptKey: 'AI Voice Cloning',
      questionBn: 'আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) দিয়ে মাত্র কত সেকেন্ডের অডিও স্যাম্পল ব্যবহার করে কারো হুবহু কণ্ঠ নকল করা সম্ভব?',
      questionEn: 'With modern generative AI voice models, how many seconds of audio sample can clone someone’s exact voice?',
      optionsBn: [
        'কমপক্ষে ৩ বছর কথা শুনতে হয়',
        'মাত্র ৩ থেকে ৫ সেকেন্ডের স্পষ্ট অডিও থেকেই কণ্ঠ ক্লোন করা সম্ভব',
        'ক্লোনিং কখনোই সম্ভব নয়',
        'কমপক্ষে ১০ ঘণ্টা রেকর্ডিং লাগে'
      ],
      optionsEn: [
        'Requires at least 3 years of continuous listening',
        'As few as 3 to 5 seconds of clear audio is sufficient to clone a vocal profile',
        'Voice cloning is technically impossible',
        'Requires at least 10 hours of studio recordings'
      ],
      correctIndex: 1,
      explanationBn: 'আজকের ডিপ-লার্নিং মডেল সোশ্যাল মিডিয়ার ছোট ভিডিও বা ভয়েস মেসেজ থেকেই মানুষের গলার স্বর, টান ও আবেগ নকল করতে পারে।',
      explanationEn: 'Deep generative voice synthesizers need only a short social media snippet to recreate cadence, pitch, and timbre convincingly.'
    },
    {
      id: 'm8-q2',
      moduleId: 'm8',
      conceptKey: 'Family Secret Code-Word',
      questionBn: '‘মা হাসপাতালে, দ্রুত ৫০,০০০ টাকা পাঠান’—এমন অচেনা নম্বর থেকে আসা প্রিয়জনের কণ্ঠ যাচাইয়ে অব্যর্থ অস্ত্র কোনটি?',
      questionEn: 'When receiving an urgent call imitating a family member in distress demanding money, what is your silver bullet defense?',
      optionsBn: [
        'কান্নাকাটি করে দ্রুত টাকা পাঠিয়ে দেওয়া',
        'পরিবারের আগে থেকে ঠিক করা ‘গোপন কোড-ওয়ার্ড’ জিজ্ঞেস করা এবং প্রিয়জনের মূল নম্বরে কল দেওয়া',
        'ফেসবুকে পোস্ট দিয়ে সাহায্য চাওয়া',
        'ফোনটি ড্রয়ারে রেখে দেওয়া'
      ],
      optionsEn: [
        'Panic, weep, and instantly transfer money',
        'Ask for your pre-arranged "Family Secret Code-Word" and call the relative back on their known primary number',
        'Post on Facebook asking for donations',
        'Lock the phone in a drawer'
      ],
      correctIndex: 1,
      explanationBn: 'পরিবারের সদস্যরা নিজেদের মধ্যে একটি গোপন শব্দ ঠিক করে রাখলে কোনো এআই বা ভুয়া কলার তা কখনোই বলতে পারবে না।',
      explanationEn: 'A pre-shared family duress codeword cannot be guessed by generative models, instantly exposing impostor extortion attempts.'
    },
    {
      id: 'm8-q3',
      moduleId: 'm8',
      conceptKey: 'Deepfake Video Glitches',
      questionBn: 'লাইভ ভিডিও কলে কথা বলার সময় ডিপফেক এআই ভিডিও শনাক্ত করার একটি কার্যকর কৌশল কী?',
      questionEn: 'What is an effective diagnostic technique to unmask a live video deepfake during a video call?',
      optionsBn: [
        'কল কেটে গান শোনা',
        'ব্যক্তিকে মুখের সামনে হাত নাড়াতে বা পাশ ফিরে তাকাতে বলা (এআই রেন্ডারিংয়ে বিকৃতি বা গ্লিচ ধরা পড়ে)',
        'স্ক্রিনের উজ্জ্বলতা বাড়ানো',
        'সাউন্ড মিউট করে রাখা'
      ],
      optionsEn: [
        'Hang up and listen to music',
        'Ask the person to wave their hand across their face or turn their head sideways (causes AI occlusion artifacts & warping)',
        'Increase screen backlight',
        'Keep the microphone muted'
      ],
      correctIndex: 1,
      explanationBn: 'মুখের সামনে হাত নাড়ালে বা দ্রুত মাথা ঘোরালে বর্তমান ডিপফেক সফটওয়্যারের ম্যাপিং এলোমেলো হয়ে যায় এবং মুখে ডিজিটাল ব্লার/গ্লিচ দেখা যায়।',
      explanationEn: 'Occlusion (passing a hand in front of the nose or turning 90 degrees) disrupts real-time neural face mapping, revealing visual warping.'
    }
  ],

  // Module 9: Cyberbullying & Blackmail
  m9: [
    {
      id: 'm9-q1',
      moduleId: 'm9',
      conceptKey: '4-Step Shield',
      questionBn: 'অনলাইনে ব্যক্তিগত ছবি বা তথ্য নিয়ে ব্ল্যাকমেইল ও বুলিংয়ের শিকার হলে ৪-ধাপের সুরক্ষা ঢালের ১ম ও ২য় নিয়ম কী?',
      questionEn: 'If targeted by online extortion or cyberbullying, what are steps #1 and #2 of the 4-step shield?',
      optionsBn: [
        'প্যানিক হওয়া এবং অপরাধীর দাবি অনুযায়ী টাকা দেওয়া',
        'আতঙ্কিত হবেন না এবং অপরাধীকে কোনো টাকা বা আপস করবেন না (Do Not Panic, Do Not Pay)',
        'কাউকে কিছু না বলে সোশ্যাল মিডিয়া চিরতরে ডিলিট করা',
        'নিজের সমস্ত ব্যক্তিগত ফাইল ইন্টারনেটে আপলোড করা'
      ],
      optionsEn: [
        'Panic and pay whatever money the perpetrator demands',
        'Do Not Panic, Do Not Pay or Negotiate (money never stops blackmail; it invites bigger demands)',
        'Suffer in silence and delete all traces',
        'Upload all personal data publicly'
      ],
      correctIndex: 1,
      explanationBn: 'টাকা দিলে ব্ল্যাকমেইলার কখনোই থামে না, বরং দুর্বলতা পেয়ে আরও বেশি টাকা দাবি করে। শান্ত থাকুন এবং টাকা বা আপস করা বন্ধ রাখুন।',
      explanationEn: 'Paying extortionists guarantees further demands. Remaining calm, refusing payment, and securing evidence is paramount.'
    },
    {
      id: 'm9-q2',
      moduleId: 'm9',
      conceptKey: 'Preserve Evidence',
      questionBn: 'সাইবার বুলিং বা ব্ল্যাকমেইলিংয়ের ক্ষেত্রে আইনি ব্যবস্থা নিতে সবচেয়ে জরুরি কাজ কোনটি?',
      questionEn: 'What is the most crucial action needed to pursue legal justice against online blackmail?',
      optionsBn: [
        'চ্যাট ও মেসেজ সাথে সাথে ডিলিট করে দেওয়া',
        'তারিখ, সময়, মেসেজ, লিংক ও প্রোফাইলের স্পষ্ট স্ক্রিনশট এবং ইউআরএল সংরক্ষণ করে রাখা',
        'অপরাধীকে গালাগালি করে পাল্টা মেসেজ দেওয়া',
        'সিম কার্ড ভেঙে ফেলা'
      ],
      optionsEn: [
        'Deleting the chat history immediately out of embarrassment',
        'Preserving screenshots showing timestamp, messages, profile URLs, and payment requests as digital evidence',
        'Retaliating with aggressive insults',
        'Physically breaking the SIM card'
      ],
      correctIndex: 1,
      explanationBn: 'প্রমাণ ডিলিট করলে পুলিশ বা সাইবার ক্রাইম ইউনিট অপরাধীকে চিহ্নিত করতে পারে না। প্রমাণাদি সংরক্ষণ করাই আইনগত সুরক্ষার প্রথম শর্ত।',
      explanationEn: 'Forensic evidence (timestamps, complete URLs, uncropped screenshots) is essential for law enforcement to track the perpetrator.'
    },
    {
      id: 'm9-q3',
      moduleId: 'm9',
      conceptKey: 'Helpline Support',
      questionBn: 'বাংলাদেশে নারী ও কিশোরীদের সাইবার হয়রানি প্রতিরোধে পুলিশের বিশেষ সেল কোনটি?',
      questionEn: 'Which dedicated police service supports women and girls facing cyber harassment in Bangladesh?',
      optionsBn: [
        'ট্রাফিক পুলিশ হেল্প ডেস্ক',
        'Police Cyber Support for Women (PCSW) ও জাতীয় জরুরি সেবা ৯৯৯',
        'ফায়ার সার্ভিস হটলাইন',
        'রেলওয়ে তথ্যকেন্দ্র'
      ],
      optionsEn: [
        'Traffic police desk',
        'Police Cyber Support for Women (PCSW) & National Emergency 999',
        'Fire service dispatch',
        'Railway schedule line'
      ],
      correctIndex: 1,
      explanationBn: 'PCSW ফেসবুক পেজ, হটলাইন ও ৯৯৯ এ সম্পূর্ণ গোপনীয়তার সাথে অভিজ্ঞ নারী পুলিশ অফিসারদের দ্বারা অভিযোগ গ্রহণ ও ব্যবস্থা নেওয়া হয়।',
      explanationEn: 'Police Cyber Support for Women provides confidential, prompt investigative assistance managed by specialized officers.'
    }
  ],

  // Module 9A: Digital Wellbeing
  m9a: [
    {
      id: 'm9a-q1',
      moduleId: 'm9a',
      conceptKey: '24-Hour Balance Bar',
      questionBn: '২৪ ঘণ্টার ডিজিটাল ব্যালেন্স বারের মূল লক্ষ্য কী?',
      questionEn: 'What is the core philosophy of the 24-Hour Digital Wellbeing Balance Bar?',
      optionsBn: [
        'দিনরাত ২৪ ঘণ্টাই একটানা রিলস ও টিকটক দেখা',
        'ঘুম (৭-৮ ঘণ্টা), কাজ/পড়াশোনা, শারীরিক সুস্থতা এবং স্ক্রিন টাইমের মধ্যে স্বাস্থ্যকর ভারসাম্য বজায় রাখা',
        'ফোন পানিতে ভিজিয়ে রাখা',
        'সব ডিজিটাল ডিভাইস ফেলে দেওয়া'
      ],
      optionsEn: [
        'Watching reels and short videos continuously for 24 hours',
        'Maintaining a healthy equilibrium between sleep (7-8h), productive work/study, physical activity, and screen exposure',
        'Submerging devices in water',
        'Abandoning all digital tools completely'
      ],
      correctIndex: 1,
      explanationBn: 'প্রযুক্তি আমাদের সহায়ক, দাস নয়। সঠিক ঘুম ও অফলাইন জীবনের ভারসাম্য বজায় রাখলে মানসিক চাপ ও অসতর্ক ক্লিক কমে।',
      explanationEn: 'Conscious boundaries between sleep, physical vitality, and intentional digital use restore focus and mental sharpness.'
    },
    {
      id: 'm9a-q2',
      moduleId: 'm9a',
      conceptKey: 'Dopamine Loop',
      questionBn: 'সোশ্যাল মিডিয়া অ্যাপগুলোর নোটিফিকেশন ও অসীম স্ক্রলিং (Infinite Scroll) আমাদের মস্তিষ্কে কী তৈরি করে?',
      questionEn: 'What psychological phenomenon do infinite scroll feeds and notification pings trigger?',
      optionsBn: [
        'ডোপামিন লুপ ও অবচেতন আসক্তি (Dopamine reward loop)',
        'চোখের দৃষ্টিশক্তি দ্বিগুণ করে',
        'পড়াশোনার মনোযোগ বাড়ায়',
        'শরীর ঠান্ডা করে'
      ],
      optionsEn: [
        'A compulsive dopamine reward loop and unconscious behavioral addiction',
        'Doubles optical eyesight',
        'Enhances study concentration',
        'Cools body temperature'
      ],
      correctIndex: 0,
      explanationBn: 'অ্যালগরিদমগুলো অনিয়মিত পুরষ্কারের ডোপামিন ট্রিগার ব্যবহার করে মানুষকে ঘণ্টার পর ঘণ্টা স্ক্রিনে আটকে রাখে। সচেতন বিরতি নেওয়া দরকার।',
      explanationEn: 'Variable reward schedules trigger dopamine releases, creating compulsive checking loops designed for platform monetization.'
    },
    {
      id: 'm9a-q3',
      moduleId: 'm9a',
      conceptKey: 'Offline Micro-Habit',
      questionBn: 'ডিজিটাল ক্লান্তি কমাতে ক্যাম্পেইনের প্রস্তাবিত একটি কার্যকর অফলাইন মাইক্রো-হ্যাবিট কোনটি?',
      questionEn: 'Which micro-habit is recommended by the campaign to conquer digital fatigue?',
      optionsBn: [
        'ঘুমাতে যাওয়ার আগে বিছানায় অন্ধকারে ২ ঘণ্টা ফোন ব্রাউজ করা',
        'ঘুমানোর অন্তত ৩০ মিনিট আগে স্ক্রিন দূরে রাখা এবং সকালে ঘুম থেকে উঠেই প্রথম ২০ মিনিট ফোন স্পর্শ না করা',
        'একসাথে ৩টি ফোনে ভিডিও চালানো',
        'ফোনে চোখ রেখে রাস্তা পার হওয়া'
      ],
      optionsEn: [
        'Browsing in pitch darkness for 2 hours before sleeping',
        'Keeping screens away 30 minutes before sleep and avoiding phone checks during the first 20 minutes of morning',
        'Streaming videos on 3 devices simultaneously',
        'Crossing the street while glued to your phone'
      ],
      correctIndex: 1,
      explanationBn: 'ঘুমের আগে নীল আলো মেলাটোনিন হরমোন কমায়। সকালের প্রথম মুহূর্ত ফোনমুক্ত রাখলে সারাদিনের মানসিক একাগ্রতা বৃদ্ধি পায়।',
      explanationEn: 'Blue light suppresses melatonin before sleep. Protecting the first 20 minutes of your morning preserves executive brain function.'
    }
  ],

  // Module 10: Incident Response
  m10: [
    {
      id: 'm10-q1',
      moduleId: 'm10',
      conceptKey: '5-Minute Action',
      questionBn: 'অ্যাকাউন্ট হ্যাক বা কার্ড জালিয়াতি টের পাওয়ার প্রথম ৫ মিনিটে সবচেয়ে জরুরি পদক্ষেপ কোনটি?',
      questionEn: 'Within the first 5 minutes of realizing an account compromise or financial fraud, what is priority #1?',
      optionsBn: [
        'ফেসবুকে পোস্ট দিয়ে মানুষকে গালি দেওয়া',
        'তাৎক্ষণিকভাবে সংশ্লিষ্ট ব্যাংক/বিকাশ হেল্পলাইনে কল করে কার্ড ও অ্যাকাউন্ট সাময়িক ফ্রিজ (Freeze) করা',
        'ফোন বন্ধ করে ঘুমিয়ে যাওয়া',
        'কাউকে না জানিয়ে চেপে যাওয়া'
      ],
      optionsEn: [
        'Vent angrily on social media',
        'Immediately call your bank/MFS customer service to freeze accounts and debit cards to halt outgoing outflows',
        'Switch off your phone and sleep',
        'Conceal the breach from everyone'
      ],
      correctIndex: 1,
      explanationBn: 'প্রথম ৫ মিনিটের দ্রুত ব্যবস্থা আর্থিক ক্ষতি শূন্য বা সর্বনিম্ন রাখতে পারে। টাকা অন্য অ্যাকাউন্টে সড়ে যাওয়ার আগেই ট্রান্সফার ব্লক করা যায়।',
      explanationEn: 'Freezing cards and accounts in the first golden 5 minutes stops unauthorized outgoing transactions before funds are laundered.'
    },
    {
      id: 'm10-q2',
      moduleId: 'm10',
      conceptKey: '30-Minute Playbook',
      questionBn: 'ইনসিডেন্ট রেসপন্সের ৩০ মিনিটের মধ্যে কোন প্রযুক্তিগত কাজ সম্পন্ন করা উচিত?',
      questionEn: 'In the 30-minute window of the incident response playbook, which step should you execute?',
      optionsBn: [
        'নতুন সিনেমা ডাউনলোড করা',
        'মাস্টার ইমেইলের পাসওয়ার্ড পরিবর্তন করা, ‘Log out of all other sessions’ দেওয়া এবং ২FA ডিভাইস যাচাই করা',
        'বন্ধুদের একসাথে পার্টি দেওয়া',
        'ফোন ফ্যাক্টরি রিসেট না করে ফেলে দেওয়া'
      ],
      optionsEn: [
        'Download a movie',
        'Reset master email passwords, force-terminate all active sessions ("Log out everywhere"), and verify 2FA devices',
        'Throw a celebratory party',
        'Discard the phone without backing up data'
      ],
      correctIndex: 1,
      explanationBn: 'হ্যাকার সেশন ধরে রাখতে পারে। তাই পাসওয়ার্ড বদলে সমস্ত ডিভাইস থেকে লগআউট নিশ্চিত করলে হ্যাকারের অ্যাক্সেস বিচ্ছিন্ন হয়ে যায়।',
      explanationEn: 'Invalidating active authorization tokens by logging out all connected devices shuts out persistent backdoor intruders.'
    },
    {
      id: 'm10-q3',
      moduleId: 'm10',
      conceptKey: '24-Hour GD & CERT',
      questionBn: 'সাইবার অপরাধের শিকার হলে ২৪ ঘণ্টার মধ্যে আইনগত নিরাপত্তার জন্য কী করা উচিত?',
      questionEn: 'Within 24 hours of a cybercrime event, what formal legal safeguard should be completed?',
      optionsBn: [
        'নিকটস্থ থানায় গিয়ে সমস্ত ডিজিটাল প্রমাণসহ সাধারণ ডায়েরি (GD) করা এবং BTRC / Cyber Police-এ রিপোর্ট করা',
        'লজ্জায় ঘটনাটি গোপন রাখা',
        'অপরাধীর কাছে ক্ষমা চাওয়া',
        'সিম কার্ডটি নদী বা ড্রেনে ফেলে দেওয়া'
      ],
      optionsEn: [
        'File a formal General Diary (GD) at the nearest police station with digital evidence and report to BTRC/Cyber Police',
        'Keep the incident completely secret out of shame',
        'Beg the attacker for forgiveness',
        'Throw your SIM card into a canal'
      ],
      correctIndex: 0,
      explanationBn: 'জিডি করা থাকলে অপরাধী আপনার সিম বা আইডি দিয়ে কোনো অপরাধ করলে আপনি আইনি সুরক্ষা পাবেন এবং নম্বর উদ্ধারে সহায়তা হবে।',
      explanationEn: 'A formal police GD establishes legal liability defense and provides documentary standing required for SIM/account recovery.'
    }
  ],

  // Module 11: Personal Security Plan
  m11: [
    {
      id: 'm11-q1',
      moduleId: 'm11',
      conceptKey: 'STOP-THINK-VERIFY-PROTECT',
      questionBn: 'ব্যক্তিগত সাইবার নিরাপত্তা পরিকল্পনার মূল চার স্তরের নীতি কোনটি?',
      questionEn: 'What is the core 4-stage personal security doctrine taught in Module 11?',
      optionsBn: [
        'CLICK - RUN - HIDE - CRY',
        'STOP - THINK - VERIFY - PROTECT',
        'LIKE - SHARE - COMMENT - SUBSCRIBE',
        'SLEEP - EAT - REPEAT - FORGET'
      ],
      optionsEn: [
        'CLICK - RUN - HIDE - CRY',
        'STOP - THINK - VERIFY - PROTECT',
        'LIKE - SHARE - COMMENT - SUBSCRIBE',
        'SLEEP - EAT - REPEAT - FORGET'
      ],
      correctIndex: 1,
      explanationBn: 'STOP (থামুন) - THINK (ভাবুন) - VERIFY (যাচাই করুন) - PROTECT (নিজেকে ও পরিবারকে সুরক্ষিত করুন)—এই মন্ত্রই সাইবার সুরক্ষার চালিকাশক্তি।',
      explanationEn: 'STOP, THINK, VERIFY, PROTECT form an actionable reflex loop that halts social engineering attacks in their tracks.'
    },
    {
      id: 'm11-q2',
      moduleId: 'm11',
      conceptKey: 'Concrete Tasks',
      questionBn: 'ব্যক্তিগত নিরাপত্তা পরিকল্পনায় অবিলম্বে করার মতো ৩টি বাস্তবসম্মত কাজের মধ্যে কোনটি অন্তর্ভুক্ত?',
      questionEn: 'Which concrete action is highlighted for immediate execution in personal security planning?',
      optionsBn: [
        'সব অ্যাকাউন্টে ১টি পাসওয়ার্ড রেখে দেওয়া',
        'প্রাইমারি ইমেইলে Authenticator 2FA চালু করা, পাসফ্রেজ ব্যবহার ও লকস্ক্রিন নোটিফিকেশন প্রাইভেট করা',
        'সব অচেনা বন্ধু রিকোয়েস্ট এক্সেপ্ট করা',
        'ফোন কখনো লক না রাখা'
      ],
      optionsEn: [
        'Consolidating all accounts into a single universal password',
        'Enabling Authenticator 2FA on primary email, switching to passphrases, and making lock screen previews private',
        'Accepting all pending stranger requests',
        'Leaving devices permanently unlocked'
      ],
      correctIndex: 1,
      explanationBn: 'এই ৩টি সহজ কাজ বাস্তবায়নে মাত্র ১০ মিনিট সময় লাগে, যা আপনার বাস্তব সাইবার ঝুঁকি ৯০% পর্যন্ত হ্রাস করে।',
      explanationEn: 'These three fundamental micro-tasks take under 10 minutes to configure yet mitigate over 90% of opportunistic attacks.'
    },
    {
      id: 'm11-q3',
      moduleId: 'm11',
      conceptKey: 'Arif Story',
      questionBn: 'আরিফ কীভাবে সাইবার সচেতন হয়ে নিজের পরিবার ও বন্ধুদের আর্থিক প্রতারণা থেকে রক্ষা করেছিলেন?',
      questionEn: 'How did Arif leverage cyber awareness to shield his community from financial deception?',
      optionsBn: [
        'নিজে প্রতারকদের সাথে মিলে কাজ করেছিলেন',
        'ক্যাম্পেইনের জ্ঞান পরিবারে শেয়ার করে পরিবারের জন্য সিক্রেট কোড-ওয়ার্ড চালু ও সন্দেহজনক লিংক যাচাই করেছিলেন',
        'সবাইকে স্মার্টফোন ব্যবহার বন্ধ করতে বলেছিলেন',
        'কাউকে কিছু না জানিয়ে একা একা ছিলেন'
      ],
      optionsEn: [
        'Joined forces with the fraudsters',
        'Shared campaign lessons with family, established a secret safety codeword, and audited suspicious community links',
        'Advised everyone to abandon digital devices forever',
        'Kept isolated without helping anyone'
      ],
      correctIndex: 1,
      explanationBn: 'জ্ঞান একা রাখার জন্য নয়। নিজের পরিবার ও বন্ধুমহলে ছড়িয়ে দিলেই গড়ে ওঠে একটি অটুট সাইবার-নিরাপদ সমাজ।',
      explanationEn: 'Digital defense flourishes through community transmission. Educating your household creates a resilient human firewall.'
    }
  ],

  // Module 12: Resource Directory & Digital Pledge
  m12: [
    {
      id: 'm12-q1',
      moduleId: 'm12',
      conceptKey: 'Emergency Helplines',
      questionBn: 'বাংলাদেশে সাইবার জালিয়াতি বা জরুরি প্রয়োজনে জাতীয় হেল্পলাইন নম্বর কোনটি?',
      questionEn: 'What is the national emergency response helpline in Bangladesh for urgent cybercrime dispatch?',
      optionsBn: [
        '১০০',
        '৯৯৯ (National Emergency Service) এবং বিটিআরসি হটলাইন ১০০/১৩২১৯',
        '১২৩৪',
        '০০০'
      ],
      optionsEn: [
        '100',
        '999 (National Emergency Service) & BTRC Helpline 100/13219',
        '1234',
        '000'
      ],
      correctIndex: 1,
      explanationBn: '৯৯৯ সার্বক্ষণিক পুলিশ সহায়তা প্রদান করে এবং বিটিআরসির ১৩২১৯ বা ১০০ নম্বর ভুয়া ওয়েবসাইট ও টেলিকম অভিযোগ গ্রহণ করে।',
      explanationEn: '999 provides 24/7 emergency police dispatch, while 13219 / 100 handles telecommunication fraud and unlawful site takedowns.'
    },
    {
      id: 'm12-q2',
      moduleId: 'm12',
      conceptKey: 'Cyber Citizen Pledge',
      questionBn: 'ক্যাম্পেইনের ডিজিটাল সাইবার প্রতিজ্ঞার (Pledge) মূল প্রতিপাদ্য কী?',
      questionEn: 'What is the core pledge of a certified Cyber Champion citizen?',
      optionsBn: [
        'আমি গুজবে বিশ্বাস করব এবং সবার আগে ফরওয়ার্ড করব',
        'আমি কখনোই যাচাই ছাড়া কিছু শেয়ার বা ক্লিক করব না এবং অন্যের ডিজিটাল মর্যাদা ও নিরাপত্তাকে সম্মান করব',
        'আমি পাসওয়ার্ড কাউকে বলব না কিন্তু ওটিপি চাইলে দিয়ে দেব',
        'আমি শুধু আমার নিজের কথা ভাবব'
      ],
      optionsEn: [
        'I will forward unverified rumors as quickly as possible',
        'I pledge to never click or share without verification and to actively uphold digital dignity and safety for all',
        'I will keep passwords secret but share OTPs freely',
        'I will exclusively care about myself'
      ],
      correctIndex: 1,
      explanationBn: 'একজন সচেতন নাগরিক হিসেবে দায়িত্বশীল আচরণই সমগ্র দেশের সাইবার নিরাপত্তাকে শক্তিশালী করে তোলে।',
      explanationEn: 'A certified Cyber Champion practices disciplined online hygiene, refuses to spread viral falsehoods, and safeguards others.'
    },
    {
      id: 'm12-q3',
      moduleId: 'm12',
      conceptKey: '5 Golden Words',
      questionBn: 'ক্যাম্পেইনের সমাপনী ৫টি মূল শব্দ কী যা প্রতিনিয়ত আমাদের মনে রাখতে হবে?',
      questionEn: 'What are the 5 golden words summarized in the campaign conclusion to remember forever?',
      optionsBn: [
        'টাকা - সম্পদ - ক্ষমতা - গতি - জয়',
        'সচেতনতা - যাচাই - বিরতি - সুরক্ষা - ঐক্য (Awareness, Verification, Pause, Defense, Community)',
        'ক্লিক - শেয়ার - লাইক - সাবস্ক্রাইব - কমেন্ট',
        'ভয় - তাড়া - লোভ - মিথ্যা - ফাঁদ'
      ],
      optionsEn: [
        'Money, Wealth, Power, Speed, Victory',
        'Awareness, Verification, Pause, Defense, Community',
        'Click, Share, Like, Subscribe, Comment',
        'Fear, Rush, Greed, Lie, Trap'
      ],
      correctIndex: 1,
      explanationBn: 'সচেতনতা ও সম্মিলিত সুরক্ষার মাধ্যমেই আমরা যেকোনো সাইবার আক্রমণকে পরাস্ত করতে পারি।',
      explanationEn: 'Cultivating mindfulness, independent verification, and communal vigilance ensures enduring protection in cyberspace.'
    }
  ]
};
/**
 * Returns deterministic default questions (first `count` questions) for the given module ID.
 * This guarantees SSR and initial client hydration match 100% identically with no hydration error.
 */
export function getDefaultModuleQuestions(moduleId: string, count: number = 3): QuizQuestion[] {
  const pool = MODULE_QUIZ_POOL[moduleId] || MODULE_QUIZ_POOL['m0'];
  if (!pool || pool.length === 0) return [];
  return pool.slice(0, Math.min(count, pool.length));
}

/**
 * Returns `count` randomly selected questions for the given module ID.
 * Falls back to default module 0 questions if specific module not found.
 */
export function getRandomModuleQuestions(moduleId: string, count: number = 3): QuizQuestion[] {
  const pool = MODULE_QUIZ_POOL[moduleId] || MODULE_QUIZ_POOL['m0'];
  if (!pool || pool.length === 0) return [];

  // Fisher-Yates shuffle on a copy
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

