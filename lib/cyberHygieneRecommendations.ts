import { CYBER_DOMAINS, CyberDomain, calculateDomainProficiencies } from '@/lib/cyberDomains';

export interface HygieneActionItem {
  id: string;
  stepNumber: number;
  titleEn: string;
  titleBn: string;
  actionEn: string;
  actionBn: string;
  estimatedMinutes: number;
  priority: 'critical' | 'high' | 'medium';
  deviceTarget: 'all' | 'mobile' | 'browser' | 'account';
  relatedModuleId: string;
  relatedModuleAnchor: string;
}

export interface CategoryRecommendation {
  categoryId: string;
  categoryNameEn: string;
  categoryNameBn: string;
  score: number; // 0 - 100
  riskLevel: 'critical' | 'high' | 'moderate' | 'low';
  riskDescriptionEn: string;
  riskDescriptionBn: string;
  hygieneAuditQuoteEn: string;
  hygieneAuditQuoteBn: string;
  actionItems: HygieneActionItem[];
}

export interface CyberHygienePlan {
  generatedAt: string;
  overallScore: number;
  lowestCategories: CategoryRecommendation[];
  strongestCategories: {
    id: string;
    nameEn: string;
    nameBn: string;
    score: number;
  }[];
  summaryEn: string;
  summaryBn: string;
  immediateChecklist: HygieneActionItem[];
  totalEstimatedTimeMinutes: number;
}

export interface AssessmentScoreInput {
  categoryId: string;
  score: number;
  nameEn?: string;
  nameBn?: string;
}

export interface RecommendationOptions {
  maxCategoriesToRecommend?: number; // default: 2 or 3 lowest
  completedModules?: string[];
  rawCategoryScores?: Record<string, number> | AssessmentScoreInput[];
}

/**
 * Knowledge base of tailored cyber-hygiene actions mapped to each security domain
 */
const DOMAIN_HYGIENE_PLAYBOOKS: Record<string, {
  riskDescriptionEn: string;
  riskDescriptionBn: string;
  auditQuoteEn: string;
  auditQuoteBn: string;
  actions: Omit<HygieneActionItem, 'stepNumber'>[];
}> = {
  password_auth: {
    riskDescriptionEn: 'Elevated vulnerability to credential stuffing, password reuse leaks, and social engineering OTP extraction.',
    riskDescriptionBn: 'পাসওয়ার্ড পুনরাবৃত্তি ও ওটিপি হাতানোর ঝুঁকিপূর্ণ অবস্থায় রয়েছেন। একটি অ্যাকাউন্ট বেদখল হলে অন্যগুলোও ঝুঁকির মুখে পড়বে।',
    auditQuoteEn: 'Weak credentials and shared OTPs are the direct cause of over 70% of unauthorized mobile wallet draining incidents.',
    auditQuoteBn: 'দুর্বল পাসওয়ার্ড ও অসাবধানতাবশত ওটিপি ফাঁস হওয়াই মোবাইল ওয়ালেট বেদখল হওয়ার ৭০% ঘটনার প্রধান কারণ।',
    actions: [
      {
        id: 'act-pwd-1',
        titleEn: 'Replace Single Passwords with 4-Word Passphrases',
        titleBn: 'একক পাসওয়ার্ডের বদলে ৪-শব্দের পাসফ্রেজ ব্যবহার করুন',
        actionEn: 'Change your master email and financial accounts to 4 unrelated, memorable words (e.g. "Shurjo-Pahar-Nodi-2026").',
        actionBn: 'আপনার মূল ইমেইল ও ব্যাংকিং অ্যাকাউন্টে ৪টি সম্পর্কহীন শব্দের শক্তিশালী পাসফ্রেজ সেট করুন (যেমন: "Shurjo-Pahar-Nodi-2026")।',
        estimatedMinutes: 5,
        priority: 'critical',
        deviceTarget: 'account',
        relatedModuleId: 'm4',
        relatedModuleAnchor: '#module-4'
      },
      {
        id: 'act-pwd-2',
        titleEn: 'Activate App-Based Authenticator (2FA)',
        titleBn: 'অ্যাপ-ভিত্তিক টু-ফ্যাক্টর অথেনটিকেশন (2FA) চালু করুন',
        actionEn: 'Switch from SMS verification to Google Authenticator or Microsoft Authenticator to neutralize SIM swap attacks.',
        actionBn: 'এসএমএস কোডের বদলে গুগল অথেনটিকেটর অ্যাপ ব্যবহার করুন যাতে সিম ক্লোন হলেও অ্যাকাউন্ট সুরক্ষিত থাকে।',
        estimatedMinutes: 4,
        priority: 'high',
        deviceTarget: 'mobile',
        relatedModuleId: 'm4',
        relatedModuleAnchor: '#module-4'
      },
      {
        id: 'act-pwd-3',
        titleEn: 'Enforce Zero-Trust OTP Rule',
        titleBn: 'কঠোর জিরো-ট্রাস্ট ওটিপি নিয়ম মেনে চলুন',
        actionEn: 'Never recite, type, or forward an OTP to any incoming caller, even if they claim to represent your bank or police.',
        actionBn: 'ব্যাংক বা পুলিশ কর্মকর্তা পরিচয় দিলেও কোনো অবস্থাতেই ফোনে কাউকে ওটিপি বা পিন নম্বর দেবেন না।',
        estimatedMinutes: 1,
        priority: 'critical',
        deviceTarget: 'all',
        relatedModuleId: 'm7',
        relatedModuleAnchor: '#module-7'
      }
    ]
  },

  phishing_fraud: {
    riskDescriptionEn: 'Susceptibility to urgent psychological pressure, fake bKash promotions, and deceptive lookalike URLs.',
    riskDescriptionBn: 'কৃত্রিম আতঙ্ক বা অতিরিক্ত লোভের ফাঁদে পা দিয়ে ভুয়া লিংকে ক্লিক করার সম্ভাবনা বেশি।',
    auditQuoteEn: 'Phishers exploit natural human emotions rather than technical firewalls. The 30-second pause is your strongest barrier.',
    auditQuoteBn: 'ফিশাররা প্রযুক্তির বদলে মানুষের অনুভূতির দুর্বলতাকে লক্ষ্য করে। ৩০ সেকেন্ডের বিরতিই সবচেয়ে বড় প্রতিরক্ষা।',
    actions: [
      {
        id: 'act-phish-1',
        titleEn: 'Institute the 30-Second Breath Pause',
        titleBn: 'আকস্মিক মেসেজে ৩০ সেকেন্ডের বিরতি নীতি মেনে চলুন',
        actionEn: 'When an unexpected message warns your account will be deleted or promises cash prizes, pause for 30 seconds before touching anything.',
        actionBn: 'হঠাৎ ভয় দেখানো বা পুরস্কারের লোভনীয় মেসেজ এলে কোনো পদক্ষেপ নেওয়ার আগে ৩০ সেকেন্ড থামুন ও শান্তভাবে ভাবুন।',
        estimatedMinutes: 1,
        priority: 'critical',
        deviceTarget: 'all',
        relatedModuleId: 'm0',
        relatedModuleAnchor: '#module-0'
      },
      {
        id: 'act-phish-2',
        titleEn: 'Inspect the Real Root Domain Before Clicking',
        titleBn: 'ক্লিকের আগে লিংকের আসল রুট ডোমেনটি পরীক্ষা করুন',
        actionEn: 'In URLs like "bkash.promo-claim.xyz", the true host is "promo-claim.xyz". Check domains via VirusTotal.com before inputting credentials.',
        actionBn: '"bkash.promo-claim.xyz" জাতীয় লিংকে মূল ডোমেন হলো "promo-claim.xyz", বিকাশ নয়। সন্দেহজনক লিংক VirusTotal-এ যাচাই করুন।',
        estimatedMinutes: 3,
        priority: 'high',
        deviceTarget: 'browser',
        relatedModuleId: 'm3',
        relatedModuleAnchor: '#module-3'
      },
      {
        id: 'act-phish-3',
        titleEn: 'Cross-Check Unknown Caller Requests Via Verified Contacts',
        titleBn: 'নতুন নম্বর থেকে আসা অনুরোধ পুরোনো নম্বরে যাচাই করুন',
        actionEn: 'If a caller claims to be a relative in urgent medical or police trouble, immediately hang up and call their verified number.',
        actionBn: 'স্বজন পরিচয়ে নতুন নম্বর থেকে জরুরি টাকা পাঠানোর অনুরোধ এলে কল কেটে তার পুরোনো পরিচিত নম্বরে কল দিন।',
        estimatedMinutes: 2,
        priority: 'critical',
        deviceTarget: 'mobile',
        relatedModuleId: 'm2',
        relatedModuleAnchor: '#module-2'
      }
    ]
  },

  privacy_footprint: {
    riskDescriptionEn: 'Excessive public digital footprints, lock screen preview leaks, and puzzle-piece identity overexposure.',
    riskDescriptionBn: 'সোশ্যাল মিডিয়ায় অতিরিক্ত ব্যক্তিগত তথ্য প্রকাশ ও ফোনের লক-স্ক্রিন থেকে তথ্য ফাঁসের ঝুঁকি রয়েছে।',
    auditQuoteEn: 'Scammers assemble fragmented public posts to convincingly impersonate you and bypass security verification.',
    auditQuoteBn: 'সোশ্যাল মিডিয়ার বিচ্ছিন্ন পাবলিক পোস্ট জুড়েই প্রতারকরা আপনার পরিচয় নকল করে ব্ল্যাকমেলিংয়ের ফাঁদ পাতে।',
    actions: [
      {
        id: 'act-priv-1',
        titleEn: 'Hide Notification Content on Lock Screen',
        titleBn: 'লক স্ক্রিনে নোটিফিকেশনের সংবেদনশীল তথ্য লুকান',
        actionEn: 'Navigate to Settings > Notifications > Lock Screen and select "Hide Content" so passersby cannot view your incoming OTPs.',
        actionBn: 'Settings > Notifications > Lock Screen-এ গিয়ে "Hide Content" চালু করুন যাতে লক করা অবস্থায় ওটিপি পড়া না যায়।',
        estimatedMinutes: 2,
        priority: 'critical',
        deviceTarget: 'mobile',
        relatedModuleId: 'm1',
        relatedModuleAnchor: '#module-1'
      },
      {
        id: 'act-priv-2',
        titleEn: 'Implement Delayed Vacation Posting',
        titleBn: 'ভ্রমণের ছবি সবসময় ভ্রমণ শেষে ফিরে এসে পোস্ট করুন',
        actionEn: 'Do not post live airport check-ins or hotel tags that advertise your home is empty to local thieves and social engineers.',
        actionBn: 'লাইভ এয়ারপোর্ট চেক-ইন বা হোটেলের লোকেশন পোস্ট করবেন না। নিরাপদে বাড়ি ফেরার পর স্মৃতির ছবি শেয়ার করুন।',
        estimatedMinutes: 1,
        priority: 'high',
        deviceTarget: 'account',
        relatedModuleId: 'm5',
        relatedModuleAnchor: '#module-5'
      },
      {
        id: 'act-priv-3',
        titleEn: 'Switch Social Media Posts to Friends Only',
        titleBn: 'সোশ্যাল মিডিয়ার পোস্ট প্রাইভেসি "Friends Only" করুন',
        actionEn: 'Audit your Facebook, Instagram, and LinkedIn settings; restrict personal family photos and contact info from public visibility.',
        actionBn: 'আপনার সোশ্যাল মিডিয়ার অতীত পোস্টের পাবলিক অডিয়েন্স পরিবর্তন করে কেবল পরিচিত বন্ধুদের দৃশ্যমান করুন।',
        estimatedMinutes: 8,
        priority: 'medium',
        deviceTarget: 'account',
        relatedModuleId: 'm5',
        relatedModuleAnchor: '#module-5'
      }
    ]
  },

  device_malware: {
    riskDescriptionEn: 'Risk of malicious APK sideloads, predatory loan spyware, excessive background permissions, and rogue QR stickers.',
    riskDescriptionBn: 'ক্ষতিকর লোন অ্যাপ APK, অ্যাপের অতিরিক্ত পারমিশন ও ভুয়া কিউআর কোডের মাধ্যমে তথ্য চুরির ঝুঁকি।',
    auditQuoteEn: 'A single rogue APK with contact book permissions can compromise the privacy and safety of your entire family and peer network.',
    auditQuoteBn: 'কন্টাক্ট পারমিশন পাওয়া একটি ক্ষতিকর অ্যাপ আপনার পুরো পরিবারের নম্বর ও গোপনীয়তা ঝুঁকির মুখে ফেলে দেয়।',
    actions: [
      {
        id: 'act-dev-1',
        titleEn: 'Audit and Revoke Suspicious App Permissions',
        titleBn: 'অপ্রয়োজনীয় অ্যাপ পারমিশন অডিট করে বাতিল করুন',
        actionEn: 'Open Settings > Privacy > Permission Manager. Remove Contact, SMS, and Microphone access from flashlight, calculator, and wallpaper apps.',
        actionBn: 'Settings > Privacy > Permission Manager এ গিয়ে টর্চলাইট, ক্যালকুলেটর বা গেম অ্যাপের কন্টাক্ট ও মাইক্রোফোন পারমিশন বন্ধ করুন।',
        estimatedMinutes: 5,
        priority: 'high',
        deviceTarget: 'mobile',
        relatedModuleId: 'm6',
        relatedModuleAnchor: '#module-6'
      },
      {
        id: 'act-dev-2',
        titleEn: 'Block Sideloading of Unknown APKs',
        titleBn: 'অজানা APK ইনস্টলেশন বন্ধ রাখুন',
        actionEn: 'Ensure "Install Unknown Apps" is disabled in your phone settings. Never download loan or lottery APKs received via WhatsApp.',
        actionBn: 'ফোনে "Install Unknown Apps" পারমিশন বন্ধ রাখুন। মেসেঞ্জারে আসা কোনো লোন বা অফারের APK কখনো ইন্সটল করবেন না।',
        estimatedMinutes: 2,
        priority: 'critical',
        deviceTarget: 'mobile',
        relatedModuleId: 'm6',
        relatedModuleAnchor: '#module-6'
      },
      {
        id: 'act-dev-3',
        titleEn: 'Verify Physical Payment QR Code Stickers',
        titleBn: 'দোকানের কিউআর কোড স্ক্যান করার আগে স্টিকার যাচাই করুন',
        actionEn: 'Gently check if a fake payment QR sticker was overlaid on the real merchant board, and check the receiver name before sending funds.',
        actionBn: 'আসল কিউআর বোর্ডের ওপর ভুয়া স্টিকার লাগানো আছে কি না তা হাত দিয়ে দেখুন এবং টাকা পাঠানোর আগে মার্চেন্ট নাম মিলিয়ে নিন।',
        estimatedMinutes: 1,
        priority: 'medium',
        deviceTarget: 'mobile',
        relatedModuleId: 'm6',
        relatedModuleAnchor: '#module-6'
      }
    ]
  },

  ai_deepfakes: {
    riskDescriptionEn: 'Susceptibility to generative AI voice cloning, deepfake video impersonation, and synthetic emergency scams.',
    riskDescriptionBn: 'এআই ভয়েস ক্লোনিং ও ডিপফেক ভিডিও দিয়ে স্বজন সেজে প্রতারণার বিরুদ্ধে সতর্কতা বৃদ্ধির প্রয়োজন।',
    auditQuoteEn: 'Modern audio AI needs only 3 seconds of sample voice. Sounding like your loved one is no longer proof of their identity.',
    auditQuoteBn: 'আধুনিক এআই মাত্র ৩ সেকেন্ডের নমুনা অডিও দিয়ে যে কারও কণ্ঠ নকল করতে পারে। তাই কণ্ঠ শোনাই পরিচয়ের প্রমাণ নয়।',
    actions: [
      {
        id: 'act-ai-1',
        titleEn: 'Establish a Family Emergency Code-Word Today',
        titleBn: 'পরিবারের সাথে একটি গোপন ইমার্জেন্সি কোড-ওয়ার্ড ঠিক করুন',
        actionEn: 'Agree upon an offline secret word with your parents, spouse, or children that must be spoken if calling for urgent monetary help.',
        actionBn: 'পরিবারের সবার সাথে এমন একটি গোপন শব্দ নির্ধারণ করুন যা বিপদে পড়ে জরুরি টাকা চাওয়ার সময় উচ্চারণ করতে হবে।',
        estimatedMinutes: 5,
        priority: 'critical',
        deviceTarget: 'all',
        relatedModuleId: 'm8',
        relatedModuleAnchor: '#module-8'
      },
      {
        id: 'act-ai-2',
        titleEn: 'Deploy Real-Time Video Liveness Challenge',
        titleBn: 'সন্দেহজনক ভিডিও কলে লাইভনেস চ্যালেঞ্জ দিন',
        actionEn: 'In suspicious video calls, ask the person to turn their head sideways, wave a hand in front of their face, or blink rapidly to break AI masks.',
        actionBn: 'সন্দেহ হলে ব্যক্তিকে মুখ পাশে ঘোরাতে, মুখের সামনে হাত নাড়াতে বা কোনো ব্যক্তিগত প্রশ্ন জিজ্ঞেস করতে বলুন যাতে এআই মাস্ক ত্রুটি ধরা পড়ে।',
        estimatedMinutes: 2,
        priority: 'high',
        deviceTarget: 'all',
        relatedModuleId: 'm8',
        relatedModuleAnchor: '#module-8'
      }
    ]
  },

  incident_defense: {
    riskDescriptionEn: 'Lack of an immediate incident containment playbook, evidence loss, and delayed escalation during a breach.',
    riskDescriptionBn: 'অ্যাকাউন্ট বেদখল হলে কী করতে হবে সে সংক্রান্ত প্লেবুক ও আইনি পদক্ষেপের প্রস্তুতি সীমিত।',
    auditQuoteEn: 'Speed and composure in the first 5 minutes prevent a compromised account from escalating into financial ruin.',
    auditQuoteBn: 'প্রথম ৫ মিনিটের ক্ষিপ্র পদক্ষেপ ও প্রমাণ সংরক্ষণ একটি সাধারণ ভুলকে বড় বিপর্যয় হওয়া থেকে রক্ষা করে।',
    actions: [
      {
        id: 'act-inc-1',
        titleEn: 'Memorize the 5m-30m-24h Breach Playbook',
        titleBn: '৫মি-৩০মি-২৪ঘণ্টার ইনসিডেন্ট রেসপন্স প্লেবুক আয়ত্ত করুন',
        actionEn: 'If hacked: 5m: disconnect internet & revoke sessions; 30m: freeze banking & alert close contacts; 24h: file official GD with evidence.',
        actionBn: 'হ্যাক হলে: ৫মি: ইন্টারনেট বন্ধ ও সেশন রিভোক; ৩০মি: ব্যাংক ফ্রিজ ও পরিচিতদের সতর্কীকরণ; ২৪ঘণ্টা: জিডি ও সাইবার পুলিশে অভিযোগ।',
        estimatedMinutes: 6,
        priority: 'critical',
        deviceTarget: 'all',
        relatedModuleId: 'm10',
        relatedModuleAnchor: '#module-10'
      },
      {
        id: 'act-inc-2',
        titleEn: 'Save National Cyber Helplines in Your Phone Contacts',
        titleBn: 'জাতীয় সাইবার হেল্পলাইনগুলো ফোনে সংরক্ষণ করুন',
        actionEn: 'Save Bangladesh National Emergency (999), Cyber Police Centre (01320000888), and BTRC Complaint (100) right now.',
        actionBn: 'জাতীয় জরুরি সেবা (৯৯৯), সাইবার পুলিশ সেন্টার (০১৩২-০০০০৮৮৮) এবং বিটিআরসি (১০০) নম্বরগুলো আজই ফোনে সেভ করে রাখুন।',
        estimatedMinutes: 3,
        priority: 'high',
        deviceTarget: 'mobile',
        relatedModuleId: 'm10',
        relatedModuleAnchor: '#module-10'
      },
      {
        id: 'act-inc-3',
        titleEn: 'Capture Admissible Digital Evidence Before Deleting',
        titleBn: 'ডিলিট না করে সময় ও লিংকসহ পুরো ডিজিটাল প্রমাণ রাখুন',
        actionEn: 'Never delete blackmail or harassment chats in panic; take complete screenshots showing timestamps, usernames, and URL bars for police reports.',
        actionBn: 'ভয় পেয়ে ব্ল্যাকমেলের মেসেজ ডিলিট করবেন না; টাইমস্ট্যাম্প ও প্রোফাইল লিংকসহ পুরো স্ক্রিনশট ও কল রেকর্ড সংরক্ষণ করুন।',
        estimatedMinutes: 3,
        priority: 'high',
        deviceTarget: 'all',
        relatedModuleId: 'm9',
        relatedModuleAnchor: '#module-9'
      }
    ]
  }
};

/**
 * Normalizes any category score input into a consistent domain score record
 */
function normalizeCategoryScores(options?: RecommendationOptions): Record<string, number> {
  const result: Record<string, number> = {};

  // If completedModules provided, calculate standard 6 domains
  if (options?.completedModules) {
    const proficiencies = calculateDomainProficiencies(options.completedModules);
    proficiencies.forEach(p => {
      result[p.domain.id] = p.percentage;
    });
    return result;
  }

  // If rawCategoryScores object provided
  if (options?.rawCategoryScores) {
    if (Array.isArray(options.rawCategoryScores)) {
      options.rawCategoryScores.forEach(item => {
        result[item.categoryId] = Math.max(0, Math.min(100, item.score));
      });
    } else {
      Object.entries(options.rawCategoryScores).forEach(([k, v]) => {
        result[k] = Math.max(0, Math.min(100, Number(v) || 0));
      });
    }
    return result;
  }

  // Default: check all 6 domains as 0 if nothing provided
  CYBER_DOMAINS.forEach(d => {
    result[d.id] = 0;
  });

  return result;
}

/**
 * PRIMARY FUNCTION:
 * Generates custom cyber-hygiene recommendations based on the user's lowest-scoring categories in assessment results.
 * 
 * @param options - Configuration containing either completedModules, rawCategoryScores, or assessment results
 * @returns CyberHygienePlan containing prioritized lowest categories, concrete action items, and time estimates
 */
export function generateCyberHygieneRecommendations(options?: RecommendationOptions): CyberHygienePlan {
  const scores = normalizeCategoryScores(options);
  const maxToRecommend = options?.maxCategoriesToRecommend || 3;

  // Map scores into structured domain entries
  const domainScoreEntries = CYBER_DOMAINS.map(domain => {
    const score = scores[domain.id] !== undefined ? scores[domain.id] : 0;
    return {
      domain,
      score
    };
  });

  // Calculate overall score
  const totalScore = domainScoreEntries.reduce((sum, item) => sum + item.score, 0);
  const overallScore = Math.round(totalScore / domainScoreEntries.length);

  // Sort ascending by score to find lowest-scoring categories
  const sortedByScore = [...domainScoreEntries].sort((a, b) => a.score - b.score);

  // Take lowest categories
  const lowestEntries = sortedByScore.slice(0, maxToRecommend);

  // Take strongest categories (highest scoring)
  const strongestEntries = [...domainScoreEntries]
    .sort((a, b) => b.score - a.score)
    .filter(item => !lowestEntries.some(low => low.domain.id === item.domain.id))
    .slice(0, 2)
    .map(item => ({
      id: item.domain.id,
      nameEn: item.domain.nameEn,
      nameBn: item.domain.nameBn,
      score: item.score
    }));

  // Build tailored CategoryRecommendations for the lowest scoring categories
  let globalStepCounter = 1;
  const lowestCategories: CategoryRecommendation[] = lowestEntries.map(item => {
    const playbook = DOMAIN_HYGIENE_PLAYBOOKS[item.domain.id] || DOMAIN_HYGIENE_PLAYBOOKS['phishing_fraud'];
    
    let riskLevel: CategoryRecommendation['riskLevel'] = 'low';
    if (item.score < 40) riskLevel = 'critical';
    else if (item.score < 70) riskLevel = 'high';
    else if (item.score < 100) riskLevel = 'moderate';

    const actionItems: HygieneActionItem[] = playbook.actions.map(act => {
      const stepItem: HygieneActionItem = {
        ...act,
        stepNumber: globalStepCounter++
      };
      return stepItem;
    });

    return {
      categoryId: item.domain.id,
      categoryNameEn: item.domain.nameEn,
      categoryNameBn: item.domain.nameBn,
      score: item.score,
      riskLevel,
      riskDescriptionEn: playbook.riskDescriptionEn,
      riskDescriptionBn: playbook.riskDescriptionBn,
      hygieneAuditQuoteEn: playbook.auditQuoteEn,
      hygieneAuditQuoteBn: playbook.auditQuoteBn,
      actionItems
    };
  });

  // Flatten prioritized immediate checklist
  const immediateChecklist: HygieneActionItem[] = lowestCategories
    .flatMap(c => c.actionItems)
    .sort((a, b) => {
      const priorityWeights = { critical: 1, high: 2, medium: 3 };
      return priorityWeights[a.priority] - priorityWeights[b.priority];
    });

  const totalEstimatedTimeMinutes = immediateChecklist.reduce((acc, curr) => acc + curr.estimatedMinutes, 0);

  // Generate dynamic contextual summaries based on specific lowest categories
  const primaryVulnerability = lowestCategories[0];
  const summaryEn = primaryVulnerability
    ? `Based on your assessment results, your highest-priority vulnerability area is ${primaryVulnerability.categoryNameEn} (${primaryVulnerability.score}%). Following these ${immediateChecklist.length} custom hygiene steps will seal key entry points in under ${totalEstimatedTimeMinutes} minutes.`
    : 'Your cyber defense posture is fortified across all domains. Maintain periodic audits and 2FA hygiene.';

  const summaryBn = primaryVulnerability
    ? `আপনার মূল্যায়নের ফলাফল অনুযায়ী সবচেয়ে সংবেদনশীল দুর্বলতা হলো "${primaryVulnerability.categoryNameBn}" (${primaryVulnerability.score}%)। নিচের ${immediateChecklist.length}টি সুনির্দিষ্ট হাইজিন পদক্ষেপ মাত্র ${totalEstimatedTimeMinutes} মিনিটে আপনার প্রতিরক্ষা নিশ্ছিদ্র করবে।`
    : 'আপনার সাইবার প্রতিরক্ষা প্রস্তুতি সব ডোমেনেই অত্যন্ত চমৎকার। নিয়মিত অডিট ও পাসফ্রেজ নীতি বজায় রাখুন।';

  return {
    generatedAt: new Date().toISOString(),
    overallScore,
    lowestCategories,
    strongestCategories: strongestEntries,
    summaryEn,
    summaryBn,
    immediateChecklist,
    totalEstimatedTimeMinutes
  };
}
