export interface CyberDomain {
  id: string;
  nameEn: string;
  nameBn: string;
  shortNameEn: string;
  shortNameBn: string;
  iconName: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  moduleIds: string[];
  descriptionEn: string;
  descriptionBn: string;
  defensePrincipleEn: string;
  defensePrincipleBn: string;
}

export const CYBER_DOMAINS: CyberDomain[] = [
  {
    id: 'phishing_fraud',
    nameEn: 'Phishing & Fraud Defense',
    nameBn: 'ফিশিং ও প্রতারণা প্রতিরোধ',
    shortNameEn: 'Phishing Defense',
    shortNameBn: 'ফিশিং প্রতিরোধ',
    iconName: 'ShieldAlert',
    color: '#06b6d4', // cyan-500
    accentBg: 'bg-cyan-950/40',
    accentBorder: 'border-cyan-500/40',
    accentText: 'text-cyan-400',
    moduleIds: ['m2', 'm3a', 'm3'],
    descriptionEn: 'Recognizing psychological urgency traps, fake lottery/bKash fraud, fake links, and URL verification.',
    descriptionBn: 'ভীতি ও লোভের ফাঁদ, ভুয়া বিকাশ/নগদ ক্যাম্পেইন, প্রতারণামূলক লিংক ও ইউআরএল যাচাইয়ের দক্ষতা।',
    defensePrincipleEn: 'Manufactured urgency is the scammer’s #1 weapon. Pause 30 seconds and independently verify.',
    defensePrincipleBn: 'কৃত্রিম তাড়াহুড়ো প্রতারকের প্রধান হাতিয়ার। ৩০ সেকেন্ড বিরতি নিন এবং নিজে যাচাই করুন।'
  },
  {
    id: 'password_auth',
    nameEn: 'Password & Authentication',
    nameBn: 'পাসওয়ার্ড ও একাউন্ট নিরাপত্তা',
    shortNameEn: 'Passwords & 2FA',
    shortNameBn: 'পাসওয়ার্ড ও 2FA',
    iconName: 'Key',
    color: '#10b981', // emerald-500
    accentBg: 'bg-emerald-950/40',
    accentBorder: 'border-emerald-500/40',
    accentText: 'text-emerald-400',
    moduleIds: ['m4', 'm7'],
    descriptionEn: 'Strong 4-word passphrases, Multi-Factor Authentication (2FA/MFA), and zero-compromise OTP discipline.',
    descriptionBn: 'শক্তিশালী ৪ শব্দের পাসফ্রেজ, টু-ফ্যাক্টর অথেনটিকেশন (2FA), এবং কঠোর ওটিপি গোপনীয়তা।',
    defensePrincipleEn: 'OTPs are your digital house keys. Never speak, type, or forward them to any caller.',
    defensePrincipleBn: 'ওটিপি হলো আপনার ঘরের চাবি। ব্যাংক বা পুলিশ বললেও কাউকে কখনো ওটিপি দেবেন না।'
  },
  {
    id: 'privacy_footprint',
    nameEn: 'Privacy & Social Footprint',
    nameBn: 'ব্যক্তিগত তথ্য ও গোপনীয়তা',
    shortNameEn: 'Data Privacy',
    shortNameBn: 'ব্যক্তিগত তথ্য',
    iconName: 'EyeOff',
    color: '#a855f7', // purple-500
    accentBg: 'bg-purple-950/40',
    accentBorder: 'border-purple-500/40',
    accentText: 'text-purple-400',
    moduleIds: ['m1', 'm5'],
    descriptionEn: 'Locking down phone sensors, stopping vacation oversharing, and neutralizing social engineering clues.',
    descriptionBn: 'ফোনের সেন্সর ও কন্টাক্ট লক রাখা, লাইভ লোকেশন শেয়ার পরিহার এবং পাবলিক পোস্টের গোপনীয়তা বজায় রাখা।',
    defensePrincipleEn: 'Every public post is a puzzle piece. Stop giving social engineers the clues to impersonate you.',
    defensePrincipleBn: 'সোশ্যাল মিডিয়ার প্রতিটি পাবলিক পোস্টই এক একটি ধাঁধার টুকরো যা প্রতারকরা জোড়া লাগায়।'
  },
  {
    id: 'device_malware',
    nameEn: 'Device & Malware Defense',
    nameBn: 'ডিভাইস ও ম্যালওয়্যার সুরক্ষা',
    shortNameEn: 'Device Safety',
    shortNameBn: 'ডিভাইস সুরক্ষা',
    iconName: 'Smartphone',
    color: '#f59e0b', // amber-500
    accentBg: 'bg-amber-950/40',
    accentBorder: 'border-amber-500/40',
    accentText: 'text-amber-400',
    moduleIds: ['m6'],
    descriptionEn: 'Predatory loan app APKs, dangerous background permissions, and counterfeit QR code stickers.',
    descriptionBn: 'অননুমোদিত লোন অ্যাপের ফাঁদ, অতিরিক্ত পারমিশন অডিট এবং সন্দেহজনক কিউআর কোড স্ক্যানিং সতর্কতা।',
    defensePrincipleEn: 'Only install verified store apps. A single malicious permission can compromise your whole contact list.',
    defensePrincipleBn: 'শুধু অফিসিয়াল স্টোর থেকে অ্যাপ নিন। একটি বিপজ্জনক পারমিশনই পুরো কন্টাক্ট লিস্ট ফাঁস করতে পারে।'
  },
  {
    id: 'ai_deepfakes',
    nameEn: 'AI Threats & Deepfakes',
    nameBn: 'এআই ও ডিপফেক সচেতনতা',
    shortNameEn: 'AI & Deepfakes',
    shortNameBn: 'এআই ও ডিপফেক',
    iconName: 'Cpu',
    color: '#ec4899', // pink-500
    accentBg: 'bg-pink-950/40',
    accentBorder: 'border-pink-500/40',
    accentText: 'text-pink-400',
    moduleIds: ['m8'],
    descriptionEn: 'Voice cloning calls, synthetic video face swaps, and confidential family emergency code-words.',
    descriptionBn: 'কণ্ঠ নকল করে স্বজন পরিচয়ে ফোন, ডিপফেক ভিডিও এবং পরিবারের জরুরি গোপন কোড-ওয়ার্ড নির্ধারণ।',
    defensePrincipleEn: 'In the age of synthetic AI, hearing is no longer believing. Always challenge with your secret family word.',
    defensePrincipleBn: 'এআইয়ের যুগে কণ্ঠ শুনেই বিশ্বাস করবেন না। পূর্বনির্ধারিত পারিবারিক কোড-ওয়ার্ড দিয়ে নিশ্চিত হোন।'
  },
  {
    id: 'incident_defense',
    nameEn: 'Incident Response & Strategy',
    nameBn: 'জরুরি পদক্ষেপ ও সাইবার প্রস্তুতি',
    shortNameEn: 'Response & Strategy',
    shortNameBn: 'জরুরি পদক্ষেপ',
    iconName: 'LifeBuoy',
    color: '#3b82f6', // blue-500
    accentBg: 'bg-blue-950/40',
    accentBorder: 'border-blue-500/40',
    accentText: 'text-blue-400',
    moduleIds: ['m0', 'm9', 'm9a', 'm10', 'm11', 'm12'],
    descriptionEn: 'The Human Firewall ethos, 5m-30m-24h breach containment playbook, cyberbullying support, and action plans.',
    descriptionBn: 'হিউম্যান ফায়ারওয়াল মানসিকতা, অ্যাকাউন্ট হ্যাক হলে ৫মি-৩০মি-২৪ঘণ্টার প্লেবুক এবং সার্বিক সাইবার শপথ।',
    defensePrincipleEn: 'Mistakes happen; panic is what causes damage. Disconnect, report, freeze accounts, and protect your peers.',
    defensePrincipleBn: 'ভুল হতেই পারে, কিন্তু ভয় না পেয়ে দ্রুত সংযোগ বিচ্ছিন্ন করুন, একাউন্ট ফ্রিজ করুন এবং হেল্পলাইনে জানান।'
  }
];

export interface DomainProficiency {
  domain: CyberDomain;
  completedCount: number;
  totalCount: number;
  percentage: number;
  statusLabelEn: string;
  statusLabelBn: string;
  isFortified: boolean;
}

/**
 * Calculates domain proficiency scores based on completed module IDs
 */
export function calculateDomainProficiencies(completedModuleIds: string[]): DomainProficiency[] {
  const completedSet = new Set(completedModuleIds);

  return CYBER_DOMAINS.map(domain => {
    const totalCount = domain.moduleIds.length;
    const completedCount = domain.moduleIds.filter(id => completedSet.has(id)).length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    let statusLabelEn = 'Needs Training';
    let statusLabelBn = 'প্রস্তুতি প্রয়োজন';

    if (percentage === 100) {
      statusLabelEn = 'Fortified';
      statusLabelBn = 'সম্পূর্ণ সুরক্ষিত';
    } else if (percentage >= 50) {
      statusLabelEn = 'Proficient';
      statusLabelBn = 'উন্নত প্রতিরক্ষা';
    } else if (percentage > 0) {
      statusLabelEn = 'In Progress';
      statusLabelBn = 'বিকাশমান';
    }

    return {
      domain,
      completedCount,
      totalCount,
      percentage,
      statusLabelEn,
      statusLabelBn,
      isFortified: percentage === 100
    };
  });
}

/**
 * Helper to get overall defense index from domain proficiencies
 */
export function getOverallDefenseScore(proficiencies: DomainProficiency[]): number {
  if (proficiencies.length === 0) return 0;
  const sum = proficiencies.reduce((acc, p) => acc + p.percentage, 0);
  return Math.round(sum / proficiencies.length);
}
