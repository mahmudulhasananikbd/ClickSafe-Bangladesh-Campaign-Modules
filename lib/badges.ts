'use client';

export interface BadgeDefinition {
  id: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  category: 'defense' | 'awareness' | 'mastery' | 'action' | 'champion';
  iconName: string; // Lucide icon name representation
  color: string;    // Accent color class
  bgGradient: string;
  requiredModuleIds: string[]; // Module IDs that must be completed to earn this badge
  secret?: boolean;
}

export const BADGES_LIST: BadgeDefinition[] = [
  {
    id: 'first_firewall',
    titleEn: 'Human Firewall Initiate',
    titleBn: 'হিউম্যান ফায়ারওয়াল দীক্ষা',
    descriptionEn: 'Completed Module 0 & began the digital defense journey with the first 30 seconds rule.',
    descriptionBn: 'মডিউল ০ সম্পন্ন করে প্রথম ৩০ সেকেন্ডের নিয়মে ডিজিটাল নিরাপত্তা যাত্রা শুরু করেছেন।',
    category: 'awareness',
    iconName: 'ShieldAlert',
    color: 'emerald',
    bgGradient: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300',
    requiredModuleIds: ['m0']
  },
  {
    id: 'target_aware',
    titleEn: 'Digital Treasure Guard',
    titleBn: 'ডিজিটাল সম্পদ প্রহরী',
    descriptionEn: 'Learned why anyone can be a target and audited their smartphone security perimeter.',
    descriptionBn: 'কেন সবাই লক্ষ্যবস্তু তা জেনে ফোনের ডিজিটাল সম্পদ ও নিরাপত্তা পরীক্ষা করেছেন।',
    category: 'awareness',
    iconName: 'Smartphone',
    color: 'sky',
    bgGradient: 'from-sky-500/20 to-blue-500/10 border-sky-500/40 text-sky-300',
    requiredModuleIds: ['m1']
  },
  {
    id: 'scam_spotter',
    titleEn: 'Local Scam Spotter',
    titleBn: 'স্ক্যাম স্পটার',
    descriptionEn: 'Decoded psychological manipulation traps & Bangladesh local fraud hotspots.',
    descriptionBn: 'মনস্তাত্ত্বিক ফাঁদ এবং বাংলাদেশের ৬টি স্থানীয় স্ক্যাম হটস্পট বিশ্লেষণ করেছেন।',
    category: 'defense',
    iconName: 'Eye',
    color: 'amber',
    bgGradient: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-300',
    requiredModuleIds: ['m2', 'm3a']
  },
  {
    id: 'phishing_hunter',
    titleEn: 'Phishing Hunter',
    titleBn: 'ফিশিং হান্টার',
    descriptionEn: 'Mastered the 3-question link decision tree and VirusTotal verification.',
    descriptionBn: '৩টি প্রশ্নের লিংক ডিসিশন ট্রি ও VirusTotal দিয়ে ভুয়া লিংক শনাক্তে পারদর্শী হয়েছেন।',
    category: 'defense',
    iconName: 'FishOff',
    color: 'rose',
    bgGradient: 'from-rose-500/20 to-pink-500/10 border-rose-500/40 text-rose-300',
    requiredModuleIds: ['m3']
  },
  {
    id: 'password_master',
    titleEn: 'Password Master',
    titleBn: 'পাসওয়ার্ড মাস্টার',
    descriptionEn: 'Built unbreakable passphrases and configured multi-factor authentication (2FA).',
    descriptionBn: 'অভেদ্য পাসফ্রেজ তৈরি এবং শক্তিশালী 2FA/MFA স্তর সক্রিয় করেছেন।',
    category: 'mastery',
    iconName: 'KeyRound',
    color: 'purple',
    bgGradient: 'from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-300',
    requiredModuleIds: ['m4']
  },
  {
    id: 'privacy_guardian',
    titleEn: 'Privacy Guardian',
    titleBn: 'প্রাইভেসি অভিভাবক',
    descriptionEn: 'Locked down social media footprints, photo tags, and app permission access.',
    descriptionBn: 'সোশ্যাল মিডিয়া পদচিহ্ন, লোকেশন পোস্ট এবং বিপজ্জনক অ্যাপ পারমিশন নিয়ন্ত্রণ করেছেন।',
    category: 'defense',
    iconName: 'Lock',
    color: 'teal',
    bgGradient: 'from-teal-500/20 to-cyan-500/10 border-teal-500/40 text-teal-300',
    requiredModuleIds: ['m5', 'm6']
  },
  {
    id: 'financial_shield',
    titleEn: 'bKash/Nagad Vault Keeper',
    titleBn: 'ভল্ট কিপার (বিকাশ/নগদ)',
    descriptionEn: 'Guarded financial OTPs and recognized high-yield easy money lottery traps.',
    descriptionBn: 'আর্থিক OTP গোপন রাখা ও দ্বিগুণ লাভের লোভনীয় ফাঁদ প্রতিহত করেছেন।',
    category: 'mastery',
    iconName: 'Wallet',
    color: 'emerald',
    bgGradient: 'from-emerald-500/20 to-lime-500/10 border-emerald-500/40 text-emerald-300',
    requiredModuleIds: ['m7']
  },
  {
    id: 'ai_detective',
    titleEn: 'AI & Deepfake Detective',
    titleBn: 'ডিপফেক গোয়েন্দা',
    descriptionEn: 'Mastered family safe-word protocols and AI voice clone detection.',
    descriptionBn: 'পারিবারিক গোপন কোড-ওয়ার্ড এবং ক্লোন করা ভয়েস/ডিপফেক শনাক্তকরণ শিখেছেন।',
    category: 'defense',
    iconName: 'Bot',
    color: 'indigo',
    bgGradient: 'from-indigo-500/20 to-violet-500/10 border-indigo-500/40 text-indigo-300',
    requiredModuleIds: ['m8']
  },
  {
    id: 'cyber_defender',
    titleEn: 'Cyber Shield & Ally',
    titleBn: 'সাইবার ঢাল ও সঙ্গী',
    descriptionEn: 'Learned harassment response, cyberbullying defense & digital wellbeing balance.',
    descriptionBn: 'অনলাইন হেনস্তা প্রতিরোধ, সহায়তা-বৃত্ত ও সুস্থ ডিজিটাল ভারসাম্য বজায় রাখা শিখেছেন।',
    category: 'awareness',
    iconName: 'HeartHandshake',
    color: 'pink',
    bgGradient: 'from-pink-500/20 to-rose-500/10 border-pink-500/40 text-pink-300',
    requiredModuleIds: ['m9', 'm9a']
  },
  {
    id: 'rapid_responder',
    titleEn: 'Crisis Commander',
    titleBn: 'ক্রাইসিস কমান্ডার',
    descriptionEn: 'Mastered the 5min-30min-24hr response playbook, GD filing & 3 tangible goals.',
    descriptionBn: 'জরুরি পরিস্থিতিতে ৫মি-৩০মি-২৪ঘণ্টার জরুরি গাইড, জিডি ও ৩টি বাস্তব লক্ষ্য নির্ধারণ।',
    category: 'action',
    iconName: 'ClockAlert',
    color: 'amber',
    bgGradient: 'from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-300',
    requiredModuleIds: ['m10', 'm11']
  },
  {
    id: 'grand_champion',
    titleEn: 'ClickSafe Grand Champion',
    titleBn: 'ক্লিকসেফ গ্র্যান্ড চ্যাম্পিয়ন',
    descriptionEn: 'Completed all 13 modules, took the digital oath, and pledged community cyber safety.',
    descriptionBn: 'সবগুলো ১৩টি মডিউল সমাপ্ত করে ডিজিটাল শপথ গ্রহণ ও সনদ অর্জন করেছেন!',
    category: 'champion',
    iconName: 'Trophy',
    color: 'yellow',
    bgGradient: 'from-yellow-500/30 via-amber-500/20 to-emerald-500/20 border-yellow-500/60 text-yellow-300 ring-1 ring-yellow-400/50',
    requiredModuleIds: ['m0', 'm1', 'm2', 'm3a', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm9a', 'm10', 'm11', 'm12']
  }
];
