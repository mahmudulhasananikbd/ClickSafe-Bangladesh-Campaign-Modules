/**
 * Cybersecurity Campaign Search Index & Matching Engine
 * Supports bilingual (Bengali & English) full-text query matching across
 * all 15 campaign modules, security terms/glossary, and interactive tools.
 */

export type SearchItemType = 'module' | 'term' | 'action' | 'quiz';

export interface SearchItem {
  id: string;
  type: SearchItemType;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  category: string;
  categoryLabelEn: string;
  categoryLabelBn: string;
  iconName: string;
  keywords: string[];
  anchor?: string;
  moduleId?: string;
  action?: 'jump-module' | 'open-quiz' | 'open-certificate' | 'open-leaderboard' | 'open-hygiene' | 'open-badges' | 'open-tip' | 'open-emergency';
  badgeTextEn?: string;
  badgeTextBn?: string;
  relevanceScore?: number;
}

export const CAMPAIGN_SEARCH_DATABASE: SearchItem[] = [
  // ==========================================
  // 15 CAMPAIGN MODULES
  // ==========================================
  {
    id: 'search-m0',
    type: 'module',
    moduleId: 'm0',
    anchor: '#module-0',
    action: 'jump-module',
    titleEn: 'Module 0: Orientation & The Human Firewall',
    titleBn: 'মডিউল ০: পরিচিতি ও মানবিক ফায়ারওয়াল',
    subtitleEn: 'Welcome, 30s icebreaker, Rafiq\'s story, and the 5-letter THINK framework for online safety.',
    subtitleBn: 'স্বাগতম, ৩০ সেকেন্ডের আইসব্রেকার, রফিকের সত্য গল্প এবং ৫ অক্ষরের THINK ফ্রেমওয়ার্ক।',
    category: 'foundation',
    categoryLabelEn: 'Core Foundation',
    categoryLabelBn: 'মূল ভিত্তি',
    iconName: 'Shield',
    badgeTextEn: 'Module 0',
    badgeTextBn: 'মডিউল ০',
    keywords: [
      'module 0', 'm0', 'welcome', 'human firewall', 'think framework', 'rafiq', 'icebreaker', 
      'foundation', 'rules', 'মানবিক ফায়ারওয়াল', 'থিংক ফ্রেমওয়ার্ক', 'রফিক', 'পরিচিতি', 'আইসব্রেকার'
    ]
  },
  {
    id: 'search-m1',
    type: 'module',
    moduleId: 'm1',
    anchor: '#module-1',
    action: 'jump-module',
    titleEn: 'Module 1: Digital Value & Your Footprint',
    titleBn: 'মডিউল ১: আপনার ডিজিটাল ফুটপ্রিন্ট ও সম্পদ',
    subtitleEn: 'Digital footprint treasure map, 3 quick phone privacy tests, and Nusrat\'s personal data story.',
    subtitleBn: 'ডিজিটাল ফুটপ্রিন্ট ম্যাপ, ৩টি দ্রুত ফোন সিকিউরিটি টেস্ট এবং নুসরাতের ব্যক্তিগত তথ্যের গল্প।',
    category: 'foundation',
    categoryLabelEn: 'Core Foundation',
    categoryLabelBn: 'মূল ভিত্তি',
    iconName: 'Compass',
    badgeTextEn: 'Module 1',
    badgeTextBn: 'মডিউল ১',
    keywords: [
      'module 1', 'm1', 'footprint', 'treasure map', 'nusrat', 'phone test', 'personal data', 
      'ডিজিটাল ফুটপ্রিন্ট', 'নুসরাত', 'ফোন টেস্ট', 'ব্যক্তিগত তথ্য'
    ]
  },
  {
    id: 'search-m2',
    type: 'module',
    moduleId: 'm2',
    anchor: '#module-2',
    action: 'jump-module',
    titleEn: 'Module 2: 6 Psychological Traps & Scam Cycles',
    titleBn: 'মডিউল ২: প্রতারকের ৬টি মনস্তাত্ত্বিক ফাঁদ ও চক্র',
    subtitleEn: 'Fear, urgency, greed, authority, sympathy, and curiosity. 6-stage fraud anatomy & Shaon\'s story.',
    subtitleBn: 'ভীতি, জরুরি চাপ, লোভ, কর্তৃত্ব, সহানুভূতি ও কৌতূহল। প্রতারণার ৬ ধাপ ও শাওনের সত্য ঘটনা।',
    category: 'risk',
    categoryLabelEn: 'Threat Awareness',
    categoryLabelBn: 'ঝুঁকি সচেতনতা',
    iconName: 'AlertTriangle',
    badgeTextEn: 'Module 2',
    badgeTextBn: 'মডিউল ২',
    keywords: [
      'module 2', 'm2', 'psychology', 'social engineering', 'traps', 'urgency', 'greed', 'fear', 
      'shaon', 'scam cycle', 'সাইকোলজি', 'সোশ্যাল ইঞ্জিনিয়ারিং', 'ফাঁদ', 'জরুরি চাপ', 'লোভ', 'শাওন'
    ]
  },
  {
    id: 'search-m3a',
    type: 'module',
    moduleId: 'm3a',
    anchor: '#module-3a',
    action: 'jump-module',
    titleEn: 'Module 3A: AI Phishing, Deepfakes & Local Hotspots',
    titleBn: 'মডিউল ৩ক: এআই ফিশিং, ডিপফেক ও স্থানীয় প্রতারণা হটস্পট',
    subtitleEn: 'Voice cloning extortion, synthetic video deepfakes, and 6 active cyber scam hotspots in Bangladesh.',
    subtitleBn: 'ভয়েস ক্লোন মুক্তিপণ, ডিপফেক ভিডিও এবং বাংলাদেশে সক্রিয় ৬টি প্রতারণা হটস্পট যাচাই।',
    category: 'risk',
    categoryLabelEn: 'Threat Awareness',
    categoryLabelBn: 'ঝুঁকি সচেতনতা',
    iconName: 'Cpu',
    badgeTextEn: 'Module 3A',
    badgeTextBn: 'মডিউল ৩ক',
    keywords: [
      'module 3a', 'm3a', 'ai phishing', 'deepfake', 'voice clone', 'hotspots', 'local scam', 'bangladesh scams', 
      'এআই ফিশিং', 'ডিপফেক', 'ভয়েস ক্লোন', 'হটস্পট', 'স্থানীয় প্রতারণা'
    ]
  },
  {
    id: 'search-m3',
    type: 'module',
    moduleId: 'm3',
    anchor: '#module-3',
    action: 'jump-module',
    titleEn: 'Module 3: Anatomy of Phishing & Fake Links',
    titleBn: 'মডিউল ৩: ফিশিংয়ের ব্যবচ্ছেদ ও ভুয়া লিংক শনাক্তকরণ',
    subtitleEn: '3-question decision tree, fake URL dissection, typosquatting domains, and VirusTotal analysis.',
    subtitleBn: '৩টি প্রশ্নের ডিসিশন ট্রি, ভুয়া ইউআরএল বিশ্লেষণ, টাইপো ডোমেইন ও VirusTotal লিংক যাচাই।',
    category: 'risk',
    categoryLabelEn: 'Threat Awareness',
    categoryLabelBn: 'ঝুঁকি সচেতনতা',
    iconName: 'Fish',
    badgeTextEn: 'Module 3',
    badgeTextBn: 'মডিউল ৩',
    keywords: [
      'module 3', 'm3', 'phishing', 'fake links', 'url', 'virustotal', 'typosquatting', 'decision tree', 
      'ফিশিং', 'ভুয়া লিংক', 'লিংক যাচাই', 'ডিসিশন ট্রি'
    ]
  },
  {
    id: 'search-m4',
    type: 'module',
    moduleId: 'm4',
    anchor: '#module-4',
    action: 'jump-module',
    titleEn: 'Module 4: Passwords, Passphrases & 2FA Priority',
    titleBn: 'মডিউল ৪: পাসওয়ার্ড, পাসফ্রেজ ও দ্বি-স্তরীয় নিরাপত্তা (2FA)',
    subtitleEn: 'Weak passwords vs 4-word passphrases, Bitwarden password managers, and MFA priority pyramid.',
    subtitleBn: 'দুর্বল পাসওয়ার্ড বনাম ৪ শব্দের পাসফ্রেজ, পাসওয়ার্ড ম্যানেজার ও MFA প্রায়োরিটি পিরামিড।',
    category: 'action',
    categoryLabelEn: 'Defensive Action',
    categoryLabelBn: 'সুরক্ষা পদক্ষেপ',
    iconName: 'Key',
    badgeTextEn: 'Module 4',
    badgeTextBn: 'মডিউল ৪',
    keywords: [
      'module 4', 'm4', 'password', 'passphrase', '2fa', 'mfa', 'authenticator', 'bitwarden', 'pyramid', 
      'পাসওয়ার্ড', 'পাসফ্রেজ', 'টু ফ্যাক্টর', 'দ্বি-স্তরীয় নিরাপত্তা', 'অথেনটিকেটার'
    ]
  },
  {
    id: 'search-m5',
    type: 'module',
    moduleId: 'm5',
    anchor: '#module-5',
    action: 'jump-module',
    titleEn: 'Module 5: Device Hardening & Physical Security',
    titleBn: 'মডিউল ৫: ডিভাইস হার্ডেনিং ও ফিজিক্যাল নিরাপত্তা',
    subtitleEn: 'Screen pinning for borrowed phones, 6-digit PIN vs biometrics, OS security updates, and lost device lock.',
    subtitleBn: 'অন্যকে ফোন দেওয়ার স্ক্রিন পিনিং, পিন কোড বনাম বায়োমেট্রিক, ওএস আপডেট ও লক সুরক্ষা।',
    category: 'action',
    categoryLabelEn: 'Defensive Action',
    categoryLabelBn: 'সুরক্ষা পদক্ষেপ',
    iconName: 'Smartphone',
    badgeTextEn: 'Module 5',
    badgeTextBn: 'মডিউল ৫',
    keywords: [
      'module 5', 'm5', 'device', 'hardening', 'screen pinning', 'pin', 'lock screen', 'biometrics', 'updates', 
      'ডিভাইস হার্ডেনিং', 'স্ক্রিন পিনিং', 'পিন কোড', 'লক স্ক্রিন', 'বায়োমেট্রিক'
    ]
  },
  {
    id: 'search-m6',
    type: 'module',
    moduleId: 'm6',
    anchor: '#module-6',
    action: 'jump-module',
    titleEn: 'Module 6: Privacy Guard & App Permissions',
    titleBn: 'মডিউল ৬: প্রাইভেসির সুরক্ষা ও অ্যাপ পারমিশন অডিট',
    subtitleEn: 'App permission revocation (camera, mic, contacts, location), cookie consent, and advertising tracking IDs.',
    subtitleBn: 'ক্যামেরা, মাইক্রোফোন, কন্টাক্ট পারমিশন প্রত্যাহার, ট্র্যাকিং কুকিজ ও ডেটা ব্রোকার নিয়ন্ত্রণ।',
    category: 'privacy',
    categoryLabelEn: 'Privacy & Data',
    categoryLabelBn: 'গোপনীয়তা ও তথ্য',
    iconName: 'EyeOff',
    badgeTextEn: 'Module 6',
    badgeTextBn: 'মডিউল ৬',
    keywords: [
      'module 6', 'm6', 'privacy', 'permissions', 'camera', 'microphone', 'location', 'cookies', 'tracking', 
      'প্রাইভেসি', 'পারমিশন', 'ক্যামেরা', 'মাইক্রোফোন', 'কুকিজ', 'ট্র্যাকিং'
    ]
  },
  {
    id: 'search-m7',
    type: 'module',
    moduleId: 'm7',
    anchor: '#module-7',
    action: 'jump-module',
    titleEn: 'Module 7: Public Wi-Fi Risks & Encrypted Browsing',
    titleBn: 'মডিউল ৭: উন্মুক্ত ওয়াই-ফাই ঝুঁকি ও নিরাপদ ব্রাউজিং',
    subtitleEn: 'Evil twin hotspots, coffee shop packet sniffing, HTTPS padlock rules, and VPN tunnel defenses.',
    subtitleBn: 'ফেক হটস্পট, ক্যাফে ও বাস টার্মিনালের প্যাকেট স্নিফিং, HTTPS প্যাডলক ও বিশ্বস্ত ভিপিএন ব্যবহার।',
    category: 'privacy',
    categoryLabelEn: 'Privacy & Data',
    categoryLabelBn: 'গোপনীয়তা ও তথ্য',
    iconName: 'Wifi',
    badgeTextEn: 'Module 7',
    badgeTextBn: 'মডিউল ৭',
    keywords: [
      'module 7', 'm7', 'wifi', 'public wifi', 'vpn', 'https', 'ssl', 'sniffing', 'evil twin', 
      'ওয়াইফাই', 'পাবলিক ওয়াই-ফাই', 'ভিপিএন', 'নিরাপদ ব্রাউজিং'
    ]
  },
  {
    id: 'search-m8',
    type: 'module',
    moduleId: 'm8',
    anchor: '#module-8',
    action: 'jump-module',
    titleEn: 'Module 8: Mobile Financial Services (MFS) Security',
    titleBn: 'মডিউল ৮: মোবাইল ব্যাংকিং (bKash/Nagad/Rocket) নিরাপত্তা',
    subtitleEn: 'bKash, Nagad, Rocket PIN protection rules, fake customer care calls, and OTP theft prevention.',
    subtitleBn: 'বিকাশ, নগদ, রকেটের পিন সুরক্ষা, ভুয়া কাস্টমার কেয়ার প্রতারণা এবং ওটিপি ছিনতাই প্রতিরোধ।',
    category: 'financial',
    categoryLabelEn: 'Financial Security',
    categoryLabelBn: 'আর্থিক নিরাপত্তা',
    iconName: 'CreditCard',
    badgeTextEn: 'Module 8',
    badgeTextBn: 'মডিউল ৮',
    keywords: [
      'module 8', 'm8', 'mfs', 'bkash', 'nagad', 'rocket', 'pin', 'otp', 'mobile banking', 'customer care fraud', 
      'বিকাশ', 'নগদ', 'রকেট', 'মোবাইল ব্যাংকিং', 'পিন কোড', 'ওটিপি', 'টাকা চুরি'
    ]
  },
  {
    id: 'search-m9',
    type: 'module',
    moduleId: 'm9',
    anchor: '#module-9',
    action: 'jump-module',
    titleEn: 'Module 9: E-Commerce Fraud & Fake Online Shops',
    titleBn: 'মডিউল ৯: ই-কমার্স প্রতারণা ও ভুয়া অনলাইন শপ',
    subtitleEn: 'Fake Facebook pages, cash on delivery inspection, escrow payment gateways, and unreal discount traps.',
    subtitleBn: 'ভুয়া ফেসবুক পেজ, অবিশ্বাস্য ছাড়ের ফাঁদ, ক্যাশ অন ডেলিভারি যাচাই ও বিশ্বস্ত পেমেন্ট গেটওয়ে।',
    category: 'financial',
    categoryLabelEn: 'Financial Security',
    categoryLabelBn: 'আর্থিক নিরাপত্তা',
    iconName: 'ShoppingBag',
    badgeTextEn: 'Module 9',
    badgeTextBn: 'মডিউল ৯',
    keywords: [
      'module 9', 'm9', 'ecommerce', 'shopping', 'fake shop', 'facebook shop', 'cash on delivery', 'payment gateway', 
      'ই-কমার্স', 'ভুয়া শপ', 'ফেসবুক পেজ', 'অনলাইন কেনাকাটা', 'ক্যাশ অন ডেলিভারি'
    ]
  },
  {
    id: 'search-m9a',
    type: 'module',
    moduleId: 'm9a',
    anchor: '#module-9a',
    action: 'jump-module',
    titleEn: 'Module 9A: Freelancer & Remote Work Protection',
    titleBn: 'মডিউল ৯ক: ফ্রিল্যান্সার ও রিমোট ওয়ার্ক নিরাপত্তা',
    subtitleEn: 'Fake job offers, advance fee work scams, off-platform payment lures, and malware in client test files.',
    subtitleBn: 'ভুয়া কাজের অফার, অগ্রিম জামানত দাবি, প্ল্যাটফর্মের বাইরে পেমেন্টের লোভ ও ক্লায়েন্ট ফাইলের ম্যালওয়্যার।',
    category: 'financial',
    categoryLabelEn: 'Financial Security',
    categoryLabelBn: 'আর্থিক নিরাপত্তা',
    iconName: 'Briefcase',
    badgeTextEn: 'Module 9A',
    badgeTextBn: 'মডিউল ৯ক',
    keywords: [
      'module 9a', 'm9a', 'freelancer', 'upwork', 'fiverr', 'remote work', 'fake jobs', 'escrow', 
      'ফ্রিল্যান্সার', 'রিমোট কাজ', 'ভুয়া চাকরি', 'এসক্রো', 'ক্লায়েন্ট প্রতারণা'
    ]
  },
  {
    id: 'search-m10',
    type: 'module',
    moduleId: 'm10',
    anchor: '#module-10',
    action: 'jump-module',
    titleEn: 'Module 10: Social Media Account Takeover & Recovery',
    titleBn: 'মডিউল ১০: সোশ্যাল মিডিয়া অ্যাকাউন্ট হ্যাকিং ও পুনরুদ্ধার',
    subtitleEn: 'Facebook, WhatsApp, Instagram account recovery, trusted contacts, login alert audit, and passkey setup.',
    subtitleBn: 'ফেসবুক, হোয়াটসঅ্যাপ, ইনস্টাগ্রাম আইডি রক্ষা, ট্রাস্টেড কন্টাক্ট, লগইন অ্যালার্ট ও পাসকি সেটআপ।',
    category: 'action',
    categoryLabelEn: 'Defensive Action',
    categoryLabelBn: 'সুরক্ষা পদক্ষেপ',
    iconName: 'UserCheck',
    badgeTextEn: 'Module 10',
    badgeTextBn: 'মডিউল ১০',
    keywords: [
      'module 10', 'm10', 'social media', 'facebook', 'whatsapp', 'instagram', 'account recovery', 'takeover', 'hacked', 
      'সোশ্যাল মিডিয়া', 'ফেসবুক হ্যাক', 'হোয়াটসঅ্যাপ', 'অ্যাকাউন্ট রিকভারি', 'লগইন অ্যালার্ট'
    ]
  },
  {
    id: 'search-m11',
    type: 'module',
    moduleId: 'm11',
    anchor: '#module-11',
    action: 'jump-module',
    titleEn: 'Module 11: Malware, Spyware & APK Sideloading Risks',
    titleBn: 'মডিউল ১১: ম্যালওয়্যার, স্পাইওয়্যার ও এপিকে সাইডলোডিং',
    subtitleEn: 'Modded APKs, cracked software, keyloggers, phone spyware indicators, and Play Protect scanning.',
    subtitleBn: 'মোড করা এপিকে, ক্র্যাকড সফটওয়্যার, কি-লগার, ফোনে আড়িপাতা স্পাইওয়্যার ও প্লে প্রটেক্ট স্ক্যান।',
    category: 'risk',
    categoryLabelEn: 'Threat Awareness',
    categoryLabelBn: 'ঝুঁকি সচেতনতা',
    iconName: 'Bug',
    badgeTextEn: 'Module 11',
    badgeTextBn: 'মডিউল ১১',
    keywords: [
      'module 11', 'm11', 'malware', 'spyware', 'apk', 'sideloading', 'virus', 'keylogger', 'trojan', 
      'ম্যালওয়্যার', 'স্পাইওয়্যার', 'এপিকে', 'সাইডলোডিং', 'ভাইরাস', 'মোড অ্যাপ'
    ]
  },
  {
    id: 'search-m12',
    type: 'module',
    moduleId: 'm12',
    anchor: '#module-12',
    action: 'jump-module',
    titleEn: 'Module 12: Incident Response, Hotline 999 & Certification',
    titleBn: 'মডিউল ১২: জরুরি রিপোর্ট, হটলাইন ৯৯৯ ও সার্টিফিকেট অর্জন',
    subtitleEn: 'National Emergency 999, BGD e-GOV CIRT, CID Cyber Police, evidence preservation, and final certification.',
    subtitleBn: 'জাতীয় জরুরি সেবা ৯৯৯, সিআইডি সাইবার পুলিশ, ডিজিটাল আলামত সংরক্ষণ ও চ্যাম্পিয়ন সার্টিফিকেট।',
    category: 'mastery',
    categoryLabelEn: 'Mastery & Certification',
    categoryLabelBn: 'দক্ষতা ও স্বীকৃতি',
    iconName: 'Award',
    badgeTextEn: 'Module 12',
    badgeTextBn: 'মডিউল ১২',
    keywords: [
      'module 12', 'm12', 'incident response', 'emergency', '999', 'cirt', 'police', 'certificate', 'mastery', 
      'জরুরি সেবা ৯৯৯', 'সাইবার পুলিশ', 'সার্টিফিকেট', 'ডিজিটাল আলামত', 'রিপোর্টিং'
    ]
  },

  // ==========================================
  // CYBERSECURITY GLOSSARY TERMS & CONCEPTS
  // ==========================================
  {
    id: 'term-phishing',
    type: 'term',
    anchor: '#module-3',
    action: 'jump-module',
    titleEn: 'Phishing (ফিশিং)',
    titleBn: 'ফিশিং (Phishing)',
    subtitleEn: 'Deceptive messages or websites imitating legitimate brands to trick you into entering credentials.',
    subtitleBn: 'পরিচিত প্রতিষ্ঠান বা ব্যক্তির ছদ্মবেশে প্রতারণামূলক বার্তা বা ওয়েবসাইটের মাধ্যমে পাসওয়ার্ড হাতিয়ে নেওয়া।',
    category: 'threat',
    categoryLabelEn: 'Cyber Threat',
    categoryLabelBn: 'সাইবার হুমকি',
    iconName: 'Fish',
    badgeTextEn: 'Module 3 Concept',
    badgeTextBn: 'মডিউল ৩ ধারণা',
    keywords: ['phishing', 'fake link', 'spoofing', 'scam', 'ফিশিং', 'ভুয়া বার্তা', 'প্রতারণা লিংক']
  },
  {
    id: 'term-2fa',
    type: 'term',
    anchor: '#module-4',
    action: 'jump-module',
    titleEn: 'Two-Factor Authentication / 2FA (দ্বি-স্তরীয় সুরক্ষা)',
    titleBn: 'টু-ফ্যাক্টর অথেনটিকেশন / 2FA (দ্বি-স্তরীয় সুরক্ষা)',
    subtitleEn: 'Requiring two independent proofs of identity (e.g. password + authenticator app code) before granting access.',
    subtitleBn: 'পাসওয়ার্ড ছাড়াও একটি অতিরিক্ত যাচাইকরণ কোড (যেমন অথেনটিকেটার অ্যাপ) ছাড়া প্রবেশ রোধ করার পদ্ধতি।',
    category: 'defense',
    categoryLabelEn: 'Defense Mechanism',
    categoryLabelBn: 'সুরক্ষা কৌশল',
    iconName: 'Key',
    badgeTextEn: 'Module 4 Concept',
    badgeTextBn: 'মডিউল ৪ ধারণা',
    keywords: ['2fa', 'two-factor', 'mfa', 'authenticator', 'totp', 'টু-ফ্যাক্টর', 'দ্বি-স্তরীয়', 'অথেনটিকেটার']
  },
  {
    id: 'term-bkash-pin',
    type: 'term',
    anchor: '#module-8',
    action: 'jump-module',
    titleEn: 'bKash / Nagad / Rocket PIN Security (পিন কোড নিরাপত্তা)',
    titleBn: 'বিকাশ / নগদ / রকেট পিন কোড নিরাপত্তা',
    subtitleEn: 'Never disclose your 5-digit PIN or 6-digit OTP to anyone, including callers claiming to be customer service agents.',
    subtitleBn: 'কাস্টমার কেয়ার দাবি করা ব্যক্তি সহ কখনোই কাউকে আপনার গোপন পিন বা ওটিপি শেয়ার করবেন না।',
    category: 'financial',
    categoryLabelEn: 'MFS Security',
    categoryLabelBn: 'মোবাইল ফিন্যান্স',
    iconName: 'CreditCard',
    badgeTextEn: 'Module 8 Concept',
    badgeTextBn: 'মডিউল ৮ ধারণা',
    keywords: ['bkash pin', 'nagad pin', 'rocket pin', 'otp', 'mfs safety', 'বিকাশ পিন', 'নগদ পিন', 'ওটিপি', 'টাকা চুরি']
  },
  {
    id: 'term-deepfake',
    type: 'term',
    anchor: '#module-3a',
    action: 'jump-module',
    titleEn: 'Deepfake & AI Voice Cloning (ডিপফেক ও এআই কণ্ঠ ক্লোনিং)',
    titleBn: 'ডিপফেক ও এআই কণ্ঠ ক্লোনিং (Deepfake & Voice Clone)',
    subtitleEn: 'Using artificial intelligence to fabricate realistic videos or synthesize a family member\'s distress voice.',
    subtitleBn: 'কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে স্বজনের গলার স্বর বা অবিকল চেহারা তৈরি করে অর্থ দাবির প্রতারণা।',
    category: 'threat',
    categoryLabelEn: 'AI Threats',
    categoryLabelBn: 'এআই হুমকি',
    iconName: 'Cpu',
    badgeTextEn: 'Module 3A Concept',
    badgeTextBn: 'মডিউল ৩ক ধারণা',
    keywords: ['deepfake', 'voice clone', 'ai fraud', 'synthetic media', 'ডিপফেক', 'ভয়েস ক্লোন', 'এআই প্রতারণা']
  },
  {
    id: 'term-passphrase',
    type: 'term',
    anchor: '#module-4',
    action: 'jump-module',
    titleEn: 'Passphrase vs Password (পাসফ্রেজ বনাম পাসওয়ার্ড)',
    titleBn: 'পাসফ্রেজ বনাম পাসওয়ার্ড (Passphrase Concept)',
    subtitleEn: 'Combining 4 or more random, memorable words (e.g. "PadmaBridgeTeaSpoon2026") that take centuries to crack.',
    subtitleBn: '৪টি বা ততোধিক অপ্রাসঙ্গিক শব্দের সমন্বয়ে তৈরি শক্তিশালী দীর্ঘ পাসওয়ার্ড যা ক্র্যাক করা অসম্ভব।',
    category: 'defense',
    categoryLabelEn: 'Defense Mechanism',
    categoryLabelBn: 'সুরক্ষা কৌশল',
    iconName: 'Lock',
    badgeTextEn: 'Module 4 Concept',
    badgeTextBn: 'মডিউল ৪ ধারণা',
    keywords: ['passphrase', 'strong password', 'password length', 'পাসফ্রেজ', 'শক্তিশালী পাসওয়ার্ড']
  },
  {
    id: 'term-screen-pinning',
    type: 'term',
    anchor: '#module-5',
    action: 'jump-module',
    titleEn: 'Screen Pinning (স্ক্রিন পিনিং)',
    titleBn: 'স্ক্রিন পিনিং (Screen Pinning Security)',
    subtitleEn: 'Android / iOS safety feature that locks the phone to a single application before handing it to someone else.',
    subtitleBn: 'অন্য কারও হাতে ফোন দেওয়ার আগে একটি নির্দিষ্ট অ্যাপেই স্ক্রিন আটকে রাখার গোপন নিরাপত্তা ফিচার।',
    category: 'defense',
    categoryLabelEn: 'Device Hardening',
    categoryLabelBn: 'ডিভাইস সুরক্ষা',
    iconName: 'Smartphone',
    badgeTextEn: 'Module 5 Concept',
    badgeTextBn: 'মডিউল ৫ ধারণা',
    keywords: ['screen pinning', 'app pin', 'phone lock', 'privacy feature', 'স্ক্রিন পিনিং', 'অ্যাপ লক']
  },
  {
    id: 'term-ransomware',
    type: 'term',
    anchor: '#module-11',
    action: 'jump-module',
    titleEn: 'Ransomware (র‍্যানসমওয়্যার)',
    titleBn: 'র‍্যানসমওয়্যার (Ransomware Attack)',
    subtitleEn: 'Extortion malware that encrypts all user documents and photos, demanding cryptocurrency for the unlock key.',
    subtitleBn: 'ক্ষতিকর সফটওয়্যার যা আপনার সব ফাইল ও ছবি এনক্রিপ্ট করে আটকে রেখে মুক্তিপণ দাবি করে।',
    category: 'threat',
    categoryLabelEn: 'Cyber Threat',
    categoryLabelBn: 'সাইবার হুমকি',
    iconName: 'Bug',
    badgeTextEn: 'Module 11 Concept',
    badgeTextBn: 'মডিউল ১১ ধারণা',
    keywords: ['ransomware', 'crypto malware', 'file lock', 'extortion', 'র‍্যানসমওয়্যার', 'মুক্তিপণ ভাইরাস']
  },
  {
    id: 'term-vpn',
    type: 'term',
    anchor: '#module-7',
    action: 'jump-module',
    titleEn: 'Virtual Private Network / VPN (ভার্চুয়াল প্রাইভেট নেটওয়ার্ক)',
    titleBn: 'ভার্চুয়াল প্রাইভেট নেটওয়ার্ক (VPN)',
    subtitleEn: 'Encrypted tunnel protecting your internet traffic from eavesdropping on unencrypted public Wi-Fi networks.',
    subtitleBn: 'উন্মুক্ত পাবলিক ওয়াই-ফাই নেটওয়ার্কে আপনার ইন্টারনেট তথ্য গোপন রাখার সুরক্ষিত এনক্রিপ্টেড টানেল।',
    category: 'defense',
    categoryLabelEn: 'Network Defense',
    categoryLabelBn: 'নেটওয়ার্ক সুরক্ষা',
    iconName: 'Wifi',
    badgeTextEn: 'Module 7 Concept',
    badgeTextBn: 'মডিউল ৭ ধারণা',
    keywords: ['vpn', 'virtual private network', 'public wifi', 'encryption', 'ভিপিএন', 'ওয়াইফাই নিরাপত্তা']
  },
  {
    id: 'term-hotline999',
    type: 'term',
    anchor: '#module-12',
    action: 'open-emergency',
    titleEn: 'National Emergency Service 999 & BGD e-GOV CIRT',
    titleBn: 'জাতীয় জরুরি হেল্পলাইন ৯৯৯ ও সরকারি CIRT',
    subtitleEn: 'Official 24/7 emergency hotlines in Bangladesh for immediate reporting of cyber harassment and digital theft.',
    subtitleBn: 'অনলাইন হয়রানি, ব্ল্যাকমেইল বা আর্থিক প্রতারণার তাৎক্ষণিক অভিযোগ জানাতে ২৪/৭ জরুরি হটলাইন।',
    category: 'emergency',
    categoryLabelEn: 'Emergency Hotline',
    categoryLabelBn: 'জরুরি হেল্পলাইন',
    iconName: 'PhoneCall',
    badgeTextEn: 'Hotline 999 & CIRT',
    badgeTextBn: 'জরুরি ৯৯৯',
    keywords: ['999', 'cirt', 'police', 'cyber police', 'emergency', 'hotline', 'সাহায্য', 'পুলিশ', 'হেল্পলাইন', '৯৯৯']
  },

  // ==========================================
  // INTERACTIVE TOOLS & QUICK ACTIONS
  // ==========================================
  {
    id: 'action-radar',
    type: 'action',
    anchor: '#proficiency-radar',
    action: 'jump-module',
    titleEn: 'Cyber Defense Proficiency Radar',
    titleBn: 'সাইবার প্রতিরক্ষা দক্ষতা রাডার',
    subtitleEn: 'View interactive spider radar chart across 6 security domains based on completed modules.',
    subtitleBn: 'সম্পন্ন মডিউলের ভিত্তিতে ৬টি সাইবার নিরাপত্তা ডোমেইনে আপনার দক্ষতা রাডার চার্ট দেখুন।',
    category: 'tool',
    categoryLabelEn: 'Interactive Tool',
    categoryLabelBn: 'ইন্টারেক্টিভ টুল',
    iconName: 'Radar',
    badgeTextEn: 'Live Tool',
    badgeTextBn: 'টুল',
    keywords: ['radar', 'proficiency', 'spider chart', 'progress', 'domains', 'রাডার', 'দক্ষতা', 'চার্ট']
  },
  {
    id: 'action-tip',
    type: 'action',
    anchor: '#daily-tip',
    action: 'open-tip',
    titleEn: 'Cyber Tip of the Day',
    titleBn: 'আজকের সাইবার টিপ (Cyber Tip of the Day)',
    subtitleEn: 'Daily actionable cybersecurity advice tailored for Bangladeshi digital citizens.',
    subtitleBn: 'বাংলাদেশি ইন্টারনেট ব্যবহারকারীদের জন্য দৈনন্দিন প্রয়োজনীয় সাইবার সুরক্ষা টিপস।',
    category: 'tool',
    categoryLabelEn: 'Interactive Tool',
    categoryLabelBn: 'ইন্টারেক্টিভ টুল',
    iconName: 'Sparkles',
    badgeTextEn: 'Daily Tip',
    badgeTextBn: 'দৈনিক টিপ',
    keywords: ['tip', 'daily tip', 'cyber tip', 'advice', 'টিপ', 'দৈনিক টিপস', 'পরামর্শ']
  },
  {
    id: 'action-hygiene-plan',
    type: 'action',
    action: 'open-hygiene',
    titleEn: 'Custom Cyber-Hygiene Action Plan',
    titleBn: 'ব্যক্তিগত সাইবার পরিচ্ছন্নতা পরিকল্পনা',
    subtitleEn: 'Generate tailored recommendations based on your lowest-scoring defense categories.',
    subtitleBn: 'আপনার দুর্বলতম সাইবার প্রতিরক্ষা ক্ষেত্রগুলোর জন্য ধাপে ধাপে কার্যকর সমাধান পরিকল্পনা।',
    category: 'tool',
    categoryLabelEn: 'Interactive Tool',
    categoryLabelBn: 'ইন্টারেক্টিভ টুল',
    iconName: 'ClipboardCheck',
    badgeTextEn: 'Action Plan',
    badgeTextBn: 'পরিকল্পনা',
    keywords: ['hygiene', 'recommendations', 'action plan', 'improvement', 'পরিকল্পনা', 'দুর্বলতা', 'পরামর্শ']
  },
  {
    id: 'action-certificate',
    type: 'action',
    action: 'open-certificate',
    titleEn: 'Cybersecurity Champion Certificate',
    titleBn: 'সাইবার সিকিউরিটি চ্যাম্পিয়ন সার্টিফিকেট',
    subtitleEn: 'Customize and download your verified completion certificate with QR verification.',
    subtitleBn: 'কিউআর কোড ভেরিফিকেশন সহ আপনার সম্পূর্ণ অফিসিয়াল সার্টিফিকেট কাস্টমাইজ ও ডাউনলোড করুন।',
    category: 'tool',
    categoryLabelEn: 'Interactive Tool',
    categoryLabelBn: 'ইন্টারেক্টিভ টুল',
    iconName: 'Award',
    badgeTextEn: 'Certificate',
    badgeTextBn: 'সার্টিফিকেট',
    keywords: ['certificate', 'champion', 'download', 'pdf', 'সার্টিফিকেট', 'ডাউনলোড', 'স্বীকৃতি']
  },
  {
    id: 'action-leaderboard',
    type: 'action',
    action: 'open-leaderboard',
    titleEn: 'National Cyber Champions Leaderboard',
    titleBn: 'জাতীয় সাইবার চ্যাম্পিয়ন লিডারবোর্ড',
    subtitleEn: 'Compare points, speed, and badges with participants across all 64 districts.',
    subtitleBn: 'বাংলাদেশের ৬৪ জেলার অংশগ্রহণকারীদের সাথে আপনার পয়েন্ট ও ব্যাজ তুলনা করুন।',
    category: 'tool',
    categoryLabelEn: 'Interactive Tool',
    categoryLabelBn: 'ইন্টারেক্টিভ টুল',
    iconName: 'Trophy',
    badgeTextEn: 'Leaderboard',
    badgeTextBn: 'লিডারবোর্ড',
    keywords: ['leaderboard', 'rank', 'district', 'champions', 'লিডারবোর্ড', 'র‌্যাংক', 'জেলা']
  },
  {
    id: 'action-badges',
    type: 'action',
    action: 'open-badges',
    titleEn: 'Badges & Achievements Showcase',
    titleBn: 'অর্জিত ব্যাজ ও মেডেলসমূহ',
    subtitleEn: 'Unlock 8 distinct cyber warrior badges by progressing through the campaign.',
    subtitleBn: 'অভিযান সম্পন্ন করে ৮টি অনন্য সাইবার ডিফেন্ডার মেডেল ও ব্যাজ আনলক করুন।',
    category: 'tool',
    categoryLabelEn: 'Interactive Tool',
    categoryLabelBn: 'ইন্টারেক্টিভ টুল',
    iconName: 'Medal',
    badgeTextEn: 'Badges',
    badgeTextBn: 'ব্যাজ',
    keywords: ['badges', 'medals', 'achievements', 'unlock', 'ব্যাজ', 'মেডেল', 'অর্জন']
  }
];

export interface SearchResult {
  item: SearchItem;
  score: number;
  matchedField: 'title' | 'keyword' | 'subtitle';
}

/**
 * Filter and rank search items by query and category filter.
 */
export function searchCyberCampaign(
  query: string, 
  filterCategory: 'all' | 'module' | 'term' | 'action' = 'all'
): SearchResult[] {
  const cleanQuery = query.trim().toLowerCase();
  
  // If query is empty, return popular / featured items
  if (!cleanQuery) {
    const featured = CAMPAIGN_SEARCH_DATABASE.filter(item => {
      if (filterCategory === 'all') return true;
      return item.type === filterCategory;
    }).slice(0, 8);

    return featured.map(item => ({
      item,
      score: 1,
      matchedField: 'title'
    }));
  }

  const results: SearchResult[] = [];

  for (const item of CAMPAIGN_SEARCH_DATABASE) {
    if (filterCategory !== 'all' && item.type !== filterCategory) {
      continue;
    }

    const titleEn = item.titleEn.toLowerCase();
    const titleBn = item.titleBn.toLowerCase();
    const subtitleEn = item.subtitleEn.toLowerCase();
    const subtitleBn = item.subtitleBn.toLowerCase();
    
    let score = 0;
    let matchedField: 'title' | 'keyword' | 'subtitle' = 'subtitle';

    // 1. Exact title start (highest priority)
    if (titleEn.startsWith(cleanQuery) || titleBn.startsWith(cleanQuery)) {
      score += 100;
      matchedField = 'title';
    } 
    // 2. Substring in title
    else if (titleEn.includes(cleanQuery) || titleBn.includes(cleanQuery)) {
      score += 70;
      matchedField = 'title';
    }

    // 3. Keyword matches
    const matchedKeyword = item.keywords.some(kw => {
      const lowerKw = kw.toLowerCase();
      return lowerKw === cleanQuery || lowerKw.includes(cleanQuery);
    });

    if (matchedKeyword) {
      score += 50;
      if (score < 70) matchedField = 'keyword';
    }

    // 4. Substring in subtitle / description
    if (subtitleEn.includes(cleanQuery) || subtitleBn.includes(cleanQuery)) {
      score += 25;
    }

    // 5. Module ID match (e.g. "m4" or "4")
    if (item.moduleId) {
      const modQuery = cleanQuery.replace(/^module\s*/i, 'm');
      if (item.moduleId.toLowerCase() === cleanQuery || item.moduleId.toLowerCase() === modQuery) {
        score += 90;
        matchedField = 'title';
      }
    }

    if (score > 0) {
      results.push({ item, score, matchedField });
    }
  }

  // Sort descending by relevance score
  return results.sort((a, b) => b.score - a.score);
}

const STORAGE_KEY_RECENT_SEARCHES = 'clicksafe_recent_searches';

export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RECENT_SEARCHES);
    if (!raw) return ['bKash PIN', '2FA', 'Phishing', 'Deepfake', 'Module 4'];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, 6) : [];
  } catch {
    return [];
  }
}

export function saveRecentSearch(query: string): void {
  if (typeof window === 'undefined' || !query.trim()) return;
  try {
    const existing = getRecentSearches();
    const updated = [query.trim(), ...existing.filter(q => q.toLowerCase() !== query.trim().toLowerCase())].slice(0, 6);
    localStorage.setItem(STORAGE_KEY_RECENT_SEARCHES, JSON.stringify(updated));
  } catch (e) {
    console.warn('Could not save recent search:', e);
  }
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY_RECENT_SEARCHES);
  } catch (e) {
    console.warn('Could not clear recent searches:', e);
  }
}
