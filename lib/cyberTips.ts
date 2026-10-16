export interface CyberTip {
  id: string;
  categoryEn: string;
  categoryBn: string;
  titleEn: string;
  titleBn: string;
  tipEn: string;
  tipBn: string;
  actionEn: string;
  actionBn: string;
  moduleId: string;
  moduleAnchor: string;
  iconName: string;
  badgeColor: string; // for border/glow accent
}

export const CYBER_TIPS: CyberTip[] = [
  {
    id: 'tip-1',
    categoryEn: 'Human Firewall · Psychology',
    categoryBn: 'হিউম্যান ফায়ারওয়াল · সাইকোলজি',
    titleEn: 'The 30-Second Pause Rule',
    titleBn: '৩০ সেকেন্ডের বিরতি নীতি',
    tipEn: 'When an unexpected message creates intense panic or sudden excitement ("Account closing in 10 minutes!" or "You won ৳50,000!"), stop and breathe for 30 seconds.',
    tipBn: 'আকস্মিক ভীতি বা তীব্র লোভনীয় মেসেজ পেলে ("১০ মিনিটের মধ্যে একাউন্ট বন্ধ হবে!" বা "৫০,০০০ টাকা জিতেছেন!"), কোনো ক্লিক না করে ৩০ সেকেন্ড থামুন।',
    actionEn: 'Manufactured urgency causes 80% of scam clicks. Pause, think, and verify independently.',
    actionBn: 'কৃত্রিম তাড়াহুড়োই প্রতারকদের মূল হাতিয়ার। ৩০ সেকেন্ড শান্তভাবে ভাবলে ফাঁদটি স্পষ্ট হয়ে ওঠে।',
    moduleId: 'm0',
    moduleAnchor: '#module-0',
    iconName: 'Shield',
    badgeColor: 'border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'tip-2',
    categoryEn: 'Mobile Privacy · OTP',
    categoryBn: 'মোবাইল গোপনীয়তা · ওটিপি',
    titleEn: 'Hide Notification Content on Lock Screen',
    titleBn: 'লক স্ক্রিনে নোটিফিকেশন লুকান',
    tipEn: 'Disable message previews on your phone lock screen. Anyone who glances at your locked device can easily read incoming OTPs and bank confirmation texts.',
    tipBn: 'ফোনের লক স্ক্রিনে মেসেজ প্রিভিউ দেখানো বন্ধ রাখুন। ফোন লক থাকলেও যে কেউ আপনার ওটিপি ও ব্যাংক অ্যালার্ট পড়ে নিতে পারে।',
    actionEn: 'Settings > Notifications > Lock Screen > Set to "Hide Sensitive Content".',
    actionBn: 'Settings > Notifications > Lock Screen এ গিয়ে "Hide Content" নির্বাচন করুন।',
    moduleId: 'm1',
    moduleAnchor: '#module-1',
    iconName: 'Lock',
    badgeColor: 'border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'tip-3',
    categoryEn: 'Account Security · Passwords',
    categoryBn: 'একাউন্ট নিরাপত্তা · পাসওয়ার্ড',
    titleEn: 'Adopt 4-Word Passphrases',
    titleBn: '৪-শব্দের শক্তিশালী পাসফ্রেজ ব্যবহার করুন',
    tipEn: 'Instead of complex unmemorable passwords like "P@$$w0rd!", string together 4 memorable, unrelated words (e.g., "Shurjo-Pahar-Nodi-2026").',
    tipBn: 'কঠিন ও ভুলে যাওয়ার মতো পাসওয়ার্ডের বদলে ৪টি সম্পর্কহীন শব্দ জুড়ে দিন (যেমন: "Shurjo-Pahar-Nodi-2026")।',
    actionEn: 'Passphrases are astronomically harder for hackers to brute-force yet effortless for you to remember.',
    actionBn: 'পাসফ্রেজ ক্র্যাক করা হ্যাকারদের জন্য প্রায় অসম্ভব, অথচ আপনার মনে রাখা অত্যন্ত সহজ।',
    moduleId: 'm4',
    moduleAnchor: '#module-4',
    iconName: 'Key',
    badgeColor: 'border-amber-500/40 text-amber-400'
  },
  {
    id: 'tip-4',
    categoryEn: 'Financial Defense · Zero Trust',
    categoryBn: 'আর্থিক সুরক্ষা · জিরো ট্রাস্ট',
    titleEn: 'Never Speak or Type Your OTP to Callers',
    titleBn: 'কাউকে ওটিপি বা পিন বলবেন না',
    tipEn: 'Real bank representatives, police officers, and bKash/Nagad agents will NEVER ask for your OTP or PIN over phone calls. An OTP is your personal digital key.',
    tipBn: 'ব্যাংক কর্মকর্তা, পুলিশ বা বিকাশ/নগদ প্রতিনিধি কখনোই ফোনে আপনার ওটিপি বা পিন চাইবেন না। এটি আপনার ব্যক্তিগত চাবি।',
    actionEn: 'If a caller asks for an OTP, hang up immediately and contact the official helpline.',
    actionBn: 'কেউ ওটিপি চাইলেই তৎক্ষণাৎ কল কেটে দিন এবং সরাসরি অফিসিয়াল হেল্পলাইনে যোগাযোগ করুন।',
    moduleId: 'm7',
    moduleAnchor: '#module-7',
    iconName: 'ShieldAlert',
    badgeColor: 'border-rose-500/40 text-rose-400'
  },
  {
    id: 'tip-5',
    categoryEn: 'Phishing Defense · URLs',
    categoryBn: 'ফিশিং প্রতিরোধ · ইউআরএল',
    titleEn: 'Inspect the Real Root Domain',
    titleBn: 'লিংকের মূল ডোমেনটি ভালো করে দেখুন',
    tipEn: 'Scammers frequently craft deceptive subdomains like "bkash.offer-bonus-2026.xyz". Always look at what sits right before the final top-level domain.',
    tipBn: 'প্রতারকরা "bkash.offer-bonus-2026.xyz" এর মতো ভুয়া লিংক তৈরি করে। সর্বদা ডোমেনের একদম শেষের মূল অংশটি লক্ষ্য করুন।',
    actionEn: 'The true host here is "offer-bonus-2026.xyz", NOT bKash. When in doubt, search VirusTotal.com.',
    actionBn: 'এখানে আসল সাইট "offer-bonus-2026.xyz", বিকাশ নয়। সন্দেহ হলে VirusTotal.com এ লিংকটি যাচাই করুন।',
    moduleId: 'm3',
    moduleAnchor: '#module-3',
    iconName: 'Compass',
    badgeColor: 'border-sky-500/40 text-sky-400'
  },
  {
    id: 'tip-6',
    categoryEn: 'AI Threats · Voice Clones',
    categoryBn: 'এআই হুমকি · ভয়েস ক্লোন',
    titleEn: 'Set an Emergency Family Code-Word',
    titleBn: 'পারিবারিক গোপন সিক্রেট কোড-ওয়ার্ড নির্ধারণ করুন',
    tipEn: 'With only 3 seconds of audio from social media, generative AI can clone your child or parents voice. Agree on a secret family word in advance.',
    tipBn: 'সোশ্যাল মিডিয়া থেকে মাত্র ৩ সেকেন্ডের অডিও দিয়েই এআই যে কারও কণ্ঠ অবিকল নকল করতে পারে। পরিবারের সবার সাথে একটি গোপন শব্দ ঠিক রাখুন।',
    actionEn: 'If a "family member" calls demanding urgent emergency cash, ask for the code-word before sending a single taka.',
    actionBn: 'বিপদে পড়ে দ্রুত টাকা চেয়ে স্বজন পরিচয়ে ফোন এলে আগে কোড-ওয়ার্ডটি জানতে চেয়ে সত্যতা যাচাই করুন।',
    moduleId: 'm8',
    moduleAnchor: '#module-8',
    iconName: 'Cpu',
    badgeColor: 'border-pink-500/40 text-pink-400'
  },
  {
    id: 'tip-7',
    categoryEn: 'Social Privacy · Physical Safety',
    categoryBn: 'সোশ্যাল গোপনীয়তা · বাস্তব নিরাপত্তা',
    titleEn: 'Delay Posting Vacation Pictures',
    titleBn: 'ভ্রমণের ছবি সবসময় ফিরে এসে পোস্ট করুন',
    tipEn: 'Broadcasting live airport check-ins and hotel stories informs opportunistic burglars and scammers that your home is empty.',
    tipBn: 'লাইভ এয়ারপোর্ট চেক-ইন বা হোটেলের ছবি তাৎক্ষণিক পোস্ট করলে অপরাধীরা নিশ্চিত হয়ে যায় যে আপনার বাড়ি খালি।',
    actionEn: 'Enjoy your moments offline and share your highlights after you are safely back home.',
    actionBn: 'ভ্রমণ উপভোগ করুন নিরিবিলিতে এবং নিরাপদে ঘরে ফেরার পরই স্মৃতির ছবিগুলো শেয়ার করুন।',
    moduleId: 'm5',
    moduleAnchor: '#module-5',
    iconName: 'EyeOff',
    badgeColor: 'border-purple-500/40 text-purple-400'
  },
  {
    id: 'tip-8',
    categoryEn: 'Device Security · Permissions',
    categoryBn: 'ডিভাইস নিরাপত্তা · পারমিশন',
    titleEn: 'Audit Background App Permissions',
    titleBn: 'অপ্রয়োজনীয় অ্যাপ পারমিশন বন্ধ করুন',
    tipEn: 'A simple flashlight, calculator, or wallpaper app does NOT need access to your contacts, SMS, or microphone.',
    tipBn: 'সাধারণ টর্চলাইট, ক্যালকুলেটর বা ওয়ালপেপার অ্যাপের আপনার কন্টাক্ট, মেসেজ বা মাইক্রোফোনের কোনো প্রয়োজন নেই।',
    actionEn: 'Go to Settings > Privacy > Permission Manager and revoke access for suspicious apps.',
    actionBn: 'Settings > Privacy > Permission Manager এ গিয়ে সন্দেহজনক অ্যাপগুলোর অতিরিক্ত পারমিশন বাতিল করুন।',
    moduleId: 'm6',
    moduleAnchor: '#module-6',
    iconName: 'Smartphone',
    badgeColor: 'border-amber-500/40 text-amber-400'
  },
  {
    id: 'tip-9',
    categoryEn: 'Malware Defense · APK Scams',
    categoryBn: 'ম্যালওয়্যার প্রতিরোধ · এপিকে ফাঁদ',
    titleEn: 'Never Sideload Predatory Loan APKs',
    titleBn: 'অপরিচিত লোন অ্যাপ APK কখনোই ইনস্টল করবেন না',
    tipEn: 'Fraudulent quick-loan apps sent via WhatsApp secretly harvest your entire contact list, gallery, and blackmail your relatives with manipulated photos.',
    tipBn: 'হোয়াটসঅ্যাপে পাঠানো লোভনীয় লোন অ্যাপ গোপনে আপনার পুরো ফোনবুক ও গ্যালারি চুরি করে এবং স্বজনদের ব্ল্যাকমেল করে।',
    actionEn: 'Only install banking and financial utilities from Google Play Store or Apple App Store.',
    actionBn: 'শুধুমাত্র অফিসিয়াল গুগল প্লে স্টোর বা অ্যাপল অ্যাপ স্টোর থেকেই ভেরিফায়েড অ্যাপ নামান।',
    moduleId: 'm6',
    moduleAnchor: '#module-6',
    iconName: 'ShieldAlert',
    badgeColor: 'border-rose-500/40 text-rose-400'
  },
  {
    id: 'tip-10',
    categoryEn: 'Incident Response · Containment',
    categoryBn: 'জরুরি পদক্ষেপ · নিয়ন্ত্রণ',
    titleEn: 'The 5-Minute Hack Reaction Rule',
    titleBn: 'অ্যাকাউন্ট হ্যাক হলে প্রথম ৫ মিনিটের কাজ',
    tipEn: 'If an account is compromised, panicking solves nothing. Speed and containment are your best defense.',
    tipBn: 'অ্যাকাউন্টে অস্বাভাবিক গতিবিধি দেখলে আতঙ্কিত না হয়ে দ্রুত পদক্ষেপ নেওয়াই শ্রেষ্ঠ উপায়।',
    actionEn: '1. Disconnect Wi-Fi/data. 2. Login from clean PC. 3. Click "Log out all devices". 4. Freeze financial ties.',
    actionBn: '১. ডেটা/ওয়াইফাই বন্ধ করুন। ২. নিরাপদ ডিভাইস থেকে লগইন করুন। ৩. "Log out all sessions" দিন। ৪. লেনদেন ফ্রিজ করুন।',
    moduleId: 'm10',
    moduleAnchor: '#module-10',
    iconName: 'LifeBuoy',
    badgeColor: 'border-blue-500/40 text-blue-400'
  },
  {
    id: 'tip-11',
    categoryEn: 'Network Safety · Public Wi-Fi',
    categoryBn: 'নেটওয়ার্ক নিরাপত্তা · পাবলিক ওয়াইফাই',
    titleEn: 'Avoid Financial Transactions on Free Wi-Fi',
    titleBn: 'পাবলিক ওয়াইফাইতে ব্যাংক বা বিকাশ লেনদেন এড়িয়ে চলুন',
    tipEn: 'Public Wi-Fi networks in airports, hotels, and cafes often lack encryption. Attackers can sniff traffic or deploy "Evil Twin" spoofed hotspots.',
    tipBn: 'রেস্তোরাঁ বা হোটেলের উন্মুক্ত ফ্রি ওয়াইফাই অনিরাপদ হতে পারে। হ্যাকাররা সহজেই ডেটা পর্যবেক্ষণ করতে পারে।',
    actionEn: 'Always switch to cellular data (4G/5G) or activate a verified VPN before logging into banking apps.',
    actionBn: 'ব্যাংকিং বা জরুরি লেনদেনের সময় ফ্রি ওয়াইফাই বন্ধ করে মোবাইলের নিজস্ব ইন্টারনেট ব্যবহার করুন।',
    moduleId: 'm1',
    moduleAnchor: '#module-1',
    iconName: 'Shield',
    badgeColor: 'border-emerald-500/40 text-emerald-400'
  },
  {
    id: 'tip-12',
    categoryEn: 'Phishing Defense · Quishing',
    categoryBn: 'ফিশিং প্রতিরোধ · কিউআর কোড',
    titleEn: 'Inspect Physical QR Code Stickers',
    titleBn: 'কাউন্টারে সাঁটানো কিউআর কোড স্টিকারটি ভালোভাবে দেখুন',
    tipEn: 'Criminals often paste a counterfeit QR sticker on top of real merchant payment stands at petrol pumps, shops, and restaurants.',
    tipBn: 'প্রতারকরা অনেক সময় দোকানের আসল পেমেন্ট কিউআর কোডের ওপর নিজেদের ভুয়া স্টিকার সেঁটে দেয়।',
    actionEn: 'Gently feel if a sticker has been overlaid on the original board, and confirm the merchant name on your screen before sending money.',
    actionBn: 'স্টিকারটি আলতো করে পরীক্ষা করুন এবং টাকা পাঠানোর আগে স্ক্রিনে প্রদর্শিত মার্চেন্ট নাম মিলিয়ে নিন।',
    moduleId: 'm6',
    moduleAnchor: '#module-6',
    iconName: 'Compass',
    badgeColor: 'border-cyan-500/40 text-cyan-400'
  },
  {
    id: 'tip-13',
    categoryEn: 'Account Security · 2FA Priority',
    categoryBn: 'একাউন্ট নিরাপত্তা · ২এফএ অগ্রাধিকার',
    titleEn: 'Protect Your Master Email with 2FA First',
    titleBn: 'সবার আগে প্রধান ইমেইলে 2FA চালু করুন',
    tipEn: 'Your primary email is the master key to your digital life. If an attacker breaches it, they can reset passwords for Facebook, banks, and LinkedIn.',
    tipBn: 'আপনার মূল ইমেইলই হলো সব অ্যাকাউন্টের নিয়ন্ত্রক। এটি বেদখল হলে হ্যাকার অন্যান্য সব একাউন্টের পাসওয়ার্ড রিসেট করে নিতে পারে।',
    actionEn: 'Activate Google Authenticator or SMS 2FA on your primary Gmail/Outlook account today.',
    actionBn: 'আজই আপনার প্রধান ইমেইলে গুগল অথেনটিকেটর বা টু-ফ্যাক্টর অথেনটিকেশন (2FA) চালু করুন।',
    moduleId: 'm4',
    moduleAnchor: '#module-4',
    iconName: 'Key',
    badgeColor: 'border-amber-500/40 text-amber-400'
  },
  {
    id: 'tip-14',
    categoryEn: 'Cyberbullying · Legal Evidence',
    categoryBn: 'সাইবার বুলিং · আইনি প্রমাণ',
    titleEn: 'Never Delete Harassment Messages Immediately',
    titleBn: 'হুমকি বা ব্ল্যাকমেলের মেসেজ সাথে সাথে ডিলিট করবেন না',
    tipEn: 'In digital blackmail and cyber harassment, raw messages, timestamps, profile URLs, and audio notes constitute vital admissible evidence.',
    tipBn: 'সাইবার হেনস্তা বা ব্ল্যাকমেলের শিকার হলে ভীতিবশত মেসেজ ডিলিট করবেন না। টাইমস্ট্যাম্প ও প্রোফাইল লিংকসহ পুরো প্রমাণ সংরক্ষণ করুন।',
    actionEn: 'Take comprehensive screenshots, save voice notes, and contact Cyber Police Centre (01320000888) or 999.',
    actionBn: 'স্ক্রিনশট ও প্রমাণ সংরক্ষণ করে সাইবার পুলিশ সেন্টার (01320000888) অথবা ৯৯৯-এ যোগাযোগ করুন।',
    moduleId: 'm9',
    moduleAnchor: '#module-9',
    iconName: 'LifeBuoy',
    badgeColor: 'border-rose-500/40 text-rose-400'
  },
  {
    id: 'tip-15',
    categoryEn: 'Digital Wellbeing · Mindfulness',
    categoryBn: 'ডিজিটাল সুস্থতা · সচেতনতা',
    titleEn: 'Flip Your Phone Face Down at Night',
    titleBn: 'রাতে ঘুমানোর ৩০ মিনিট আগে ফোন দূরে রাখুন',
    tipEn: 'Tired, late-night scrolling causes cognitive fatigue, making users 3x more prone to clicking phishing links and downloading rogue files.',
    tipBn: 'অতিরিক্ত ক্লান্তিতে গভীর রাতে ফোন ঘাঁটার সময় মানুষ না বুঝে ভুল লিংকে বেশি ক্লিক করে।',
    actionEn: 'Practice phone flip 30 minutes before sleep. A well-rested mind is your best frontline defense.',
    actionBn: 'ঘুমানোর ৩০ মিনিট আগে ফোন স্ক্রিন উল্টো করে দূরে রাখুন। সুস্থ ও সতেজ মনই সবচেয়ে বড় নিরাপত্তা ঢাল।',
    moduleId: 'm9a',
    moduleAnchor: '#module-9a',
    iconName: 'Shield',
    badgeColor: 'border-emerald-500/40 text-emerald-400'
  }
];

/**
 * Returns a deterministic initial tip based on day of year for SSR safety.
 */
export function getDailyTip(date: Date = new Date(2026, 0, 1)): CyberTip {
  // Simple deterministic day-of-year index
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = (date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = Math.abs(dayOfYear) % CYBER_TIPS.length;
  return CYBER_TIPS[index];
}

/**
 * Returns a random tip from the pool (client-side only).
 */
export function getRandomTip(excludeId?: string): CyberTip {
  const candidates = excludeId 
    ? CYBER_TIPS.filter(t => t.id !== excludeId) 
    : CYBER_TIPS;
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index] || CYBER_TIPS[0];
}
