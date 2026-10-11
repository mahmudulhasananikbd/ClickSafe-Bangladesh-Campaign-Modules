'use client';

export type CertificateTheme = 
  | 'cyber-midnight' 
  | 'academic-gold' 
  | 'clean-white' 
  | 'minimal-white'
  | 'royal-blue' 
  | 'crimson-prestige';

export type BorderStyle = 'ornate-gold' | 'cyber-corners' | 'minimal-modern' | 'double-frame' | 'thin-hairline' | 'none';
export type SealStyle = 'gold-star' | 'shield-insignia' | 'cyber-hexagon' | 'official-round' | 'minimal-stamp' | 'none';
export type WatermarkPattern = 'grid' | 'hexagons' | 'waves' | 'dots' | 'none';

export interface ColorPlate {
  id: string;
  nameEn: string;
  nameBn: string;
  primaryAccent: string;
  secondaryAccent: string;
  backgroundDark: string;
  backgroundLight: string;
  borderColor: string;
  sealColor: string;
  titleTextColor: string;
  recipientNameColor: string;
}

export const COLOR_PLATES: ColorPlate[] = [
  {
    id: 'minimal-white',
    nameEn: 'Minimal Clean White (New)',
    nameBn: 'মিনিমাল ক্লিন হোয়াইট (সাদা থিম)',
    primaryAccent: '#0f172a',
    secondaryAccent: '#2563eb',
    backgroundDark: '#ffffff',
    backgroundLight: '#f8fafc',
    borderColor: '#e2e8f0',
    sealColor: '#1e293b',
    titleTextColor: '#0f172a',
    recipientNameColor: '#1d4ed8'
  },
  {
    id: 'cyber-emerald',
    nameEn: 'Cyber Emerald',
    nameBn: 'সাইবার এমারেল্ড (ডিফল্ট)',
    primaryAccent: '#f59e0b',
    secondaryAccent: '#10b981',
    backgroundDark: '#071326',
    backgroundLight: '#030813',
    borderColor: '#f59e0b',
    sealColor: '#f59e0b',
    titleTextColor: '#f59e0b',
    recipientNameColor: '#6ee7b7'
  },
  {
    id: 'imperial-gold',
    nameEn: 'Imperial Gold & Obsidian',
    nameBn: 'ইম্পেরিয়াল গোল্ড ও অবসিডিয়ান',
    primaryAccent: '#f59e0b',
    secondaryAccent: '#fbbf24',
    backgroundDark: '#1c1917',
    backgroundLight: '#0c0a09',
    borderColor: '#d97706',
    sealColor: '#f59e0b',
    titleTextColor: '#fbbf24',
    recipientNameColor: '#fde68a'
  },
  {
    id: 'royal-sapphire',
    nameEn: 'Royal Sapphire',
    nameBn: 'রয়্যাল স্যাফায়ার ও নেভি',
    primaryAccent: '#38bdf8',
    secondaryAccent: '#60a5fa',
    backgroundDark: '#0f172a',
    backgroundLight: '#020617',
    borderColor: '#0284c7',
    sealColor: '#2563eb',
    titleTextColor: '#38bdf8',
    recipientNameColor: '#93c5fd'
  },
  {
    id: 'crimson-prestige',
    nameEn: 'Crimson Prestige',
    nameBn: 'ক্রিমসন প্রেস্টিজ ও রুবি',
    primaryAccent: '#f43f5e',
    secondaryAccent: '#fb7185',
    backgroundDark: '#3b0716',
    backgroundLight: '#180208',
    borderColor: '#e11d48',
    sealColor: '#be123c',
    titleTextColor: '#fda4af',
    recipientNameColor: '#fecdd3'
  },
  {
    id: 'amethyst-violet',
    nameEn: 'Amethyst Violet',
    nameBn: 'অ্যামেথিস্ট ভায়োলেট ও পার্পল',
    primaryAccent: '#a855f7',
    secondaryAccent: '#c084fc',
    backgroundDark: '#2e1065',
    backgroundLight: '#170633',
    borderColor: '#9333ea',
    sealColor: '#7e22ce',
    titleTextColor: '#d8b4fe',
    recipientNameColor: '#e9d5ff'
  },
  {
    id: 'cyberpunk-neon',
    nameEn: 'Cyberpunk Neon Cyan',
    nameBn: 'সাইবারপাঙ্ক নিয়ন সায়ান',
    primaryAccent: '#06b6d4',
    secondaryAccent: '#ec4899',
    backgroundDark: '#082f49',
    backgroundLight: '#020617',
    borderColor: '#06b6d4',
    sealColor: '#0891b2',
    titleTextColor: '#22d3ee',
    recipientNameColor: '#67e8f9'
  },
  {
    id: 'forest-guardian',
    nameEn: 'Forest Guardian',
    nameBn: 'ফরেস্ট গার্ডিয়ান গ্রিন',
    primaryAccent: '#84cc16',
    secondaryAccent: '#22c55e',
    backgroundDark: '#14532d',
    backgroundLight: '#052e16',
    borderColor: '#65a30d',
    sealColor: '#16a34a',
    titleTextColor: '#a3e635',
    recipientNameColor: '#bbf7d0'
  },
  {
    id: 'sunset-amber',
    nameEn: 'Sunset Amber',
    nameBn: 'সানসেট অ্যাম্বার ও ব্রোঞ্জ',
    primaryAccent: '#f97316',
    secondaryAccent: '#fb923c',
    backgroundDark: '#431407',
    backgroundLight: '#1c0803',
    borderColor: '#ea580c',
    sealColor: '#c2410c',
    titleTextColor: '#fdba74',
    recipientNameColor: '#fed7aa'
  },
  {
    id: 'titanium-steel',
    nameEn: 'Titanium Steel & Platinum',
    nameBn: 'টাইটানিয়াম স্টিল ও সিলভার',
    primaryAccent: '#94a3b8',
    secondaryAccent: '#cbd5e1',
    backgroundDark: '#1e293b',
    backgroundLight: '#0f172a',
    borderColor: '#64748b',
    sealColor: '#475569',
    titleTextColor: '#e2e8f0',
    recipientNameColor: '#f1f5f9'
  }
];

export interface CertificateLayoutConfig {
  id: string;
  theme: CertificateTheme;
  colorPlateId?: string;
  primaryAccent: string;      // e.g. '#f59e0b'
  secondaryAccent: string;    // e.g. '#10b981'
  backgroundDark: string;     // e.g. '#071326' or '#ffffff'
  backgroundLight: string;    // e.g. '#030813' or '#f8fafc'
  borderColor?: string;
  sealColor?: string;
  titleTextColor?: string;
  recipientNameColor?: string;
  
  // Custom font styling & sizes
  fontSizeMultiplier?: number; // 0.85 to 1.3
  titleEnFontSize?: number;    // default 44
  nameFontSize?: number;       // default 58
  showAmbientGlow?: boolean;   // default true (false for clean white minimal)
  
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  presentationTextEn: string;
  presentationTextBn: string;
  citationLine1Bn: string;
  citationLine2Bn: string;
  citationEn: string;
  issuerOrgEn: string;
  issuerOrgBn: string;
  
  // Signatures
  signatory1Name: string;
  signatory1Title: string;
  signatory1Enabled: boolean;
  signatory1SignatureImage?: string; // Data URL for uploaded signature 1
  signatory2Name: string;
  signatory2Title: string;
  signatory2Enabled: boolean;
  signatory2SignatureImage?: string; // Data URL for uploaded signature 2

  // Logos & Branding Uploads with Size Management
  topLogoImage?: string;            // Data URL for uploaded top logo
  showTopLogo?: boolean;
  topLogoSize?: number;             // Scale / size management: 40 to 220px (default 80)
  topLogoYOffset?: number;          // Vertical offset adjustment (-40 to +60, default 0)
  
  partnerLogoImage?: string;        // Data URL for footer partner logo
  partnerName?: string;
  sponsorLogoImage?: string;        // Data URL for footer sponsor logo
  sponsorName?: string;
  showFooterLogos?: boolean;
  footerLogosSize?: number;         // Scale / height for footer logos: 20 to 60px (default 35)

  // Watermark
  watermarkPattern: WatermarkPattern;
  watermarkImage?: string;          // Data URL for uploaded watermark image
  watermarkOpacity?: number;        // 0.02 to 0.40
  watermarkScale?: number;          // 0.5 to 1.8

  // Seals & Frames
  sealStyle: SealStyle;
  sealText: string;
  borderStyle: BorderStyle;
  showQrCode: boolean;
  showVerifyHash?: boolean;
  uniqueIdPrefix: string;
  nationalMottoEn: string;
  nationalMottoBn: string;
  customLogoText: string;
  updatedAt: string;
  updatedBy: string;
}

export const DEFAULT_CERTIFICATE_LAYOUT: CertificateLayoutConfig = {
  id: 'default-cyber-layout',
  theme: 'cyber-midnight',
  colorPlateId: 'cyber-emerald',
  primaryAccent: '#f59e0b',
  secondaryAccent: '#10b981',
  backgroundDark: '#071326',
  backgroundLight: '#030813',
  borderColor: '#f59e0b',
  sealColor: '#f59e0b',
  titleTextColor: '#f59e0b',
  recipientNameColor: '#6ee7b7',
  fontSizeMultiplier: 1.0,
  titleEnFontSize: 44,
  nameFontSize: 58,
  showAmbientGlow: true,
  titleEn: 'CYBERSECURITY CHAMPION',
  titleBn: 'সাইবার সিকিউরিটি চ্যাম্পিয়ন · জাতীয় সনদপত্র',
  subtitleEn: 'OFFICIAL NATIONAL CREDENTIAL OF CYBER DEFENSE MASTERY',
  subtitleBn: 'বাংলাদেশ সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬',
  presentationTextEn: 'This prestigious credential is proudly presented to',
  presentationTextBn: 'গর্ব ও সম্মানের সাথে এই জাতীয় স্বীকৃতি প্রদান করা হলো',
  citationLine1Bn: 'ক্লিক সেফ বাংলাদেশ-এর ১৩টি সাইবার নিরাপত্তা মডিউল সফলভাবে সম্পন্ন করে ফিশিং, ওটিপি স্ক্যাম, এআই ডিপফেক ও',
  citationLine2Bn: 'মনস্তাত্ত্বিক প্রতারণা প্রতিহত করার পূর্ণ সক্ষমতা অর্জন করেছেন এবং সক্রিয় "Human Firewall" হিসেবে জাতীয় ডিজিটাল নিরাপত্তা শপথ গ্রহণ করেছেন।',
  citationEn: 'For successfully mastering all 13 cybersecurity defense modules, demonstrating elite digital vigilance, and serving as a certified Human Firewall.',
  issuerOrgEn: 'InfoGuard+ Bangladesh & Click Safe BD',
  issuerOrgBn: 'ইনফোগার্ড+ বাংলাদেশ ও ক্লিক সেফ বিডি',
  signatory1Name: 'ড. মাহফুজুর রহমান (Dr. Mahfuzur Rahman)',
  signatory1Title: 'Executive Director, InfoGuard+ Bangladesh',
  signatory1Enabled: true,
  signatory1SignatureImage: undefined,
  signatory2Name: 'তানভীর আহমেদ চৌধুরী (Tanvir A. Chowdhury)',
  signatory2Title: 'National Cyber Security Advisor, Click Safe BD',
  signatory2Enabled: true,
  signatory2SignatureImage: undefined,
  topLogoImage: undefined,
  showTopLogo: true,
  topLogoSize: 80,
  topLogoYOffset: 0,
  partnerLogoImage: undefined,
  partnerName: 'ICT Division Bangladesh',
  sponsorLogoImage: undefined,
  sponsorName: 'National Cyber Security Partner',
  showFooterLogos: true,
  footerLogosSize: 35,
  sealStyle: 'shield-insignia',
  sealText: 'HUMAN FIREWALL • VERIFIED 2026',
  borderStyle: 'ornate-gold',
  watermarkPattern: 'grid',
  watermarkImage: undefined,
  watermarkOpacity: 0.12,
  watermarkScale: 1.0,
  showQrCode: true,
  showVerifyHash: true,
  uniqueIdPrefix: 'CSB-CHAMP-2026',
  nationalMottoEn: 'STOP • THINK • VERIFY • PROTECT',
  nationalMottoBn: 'থামুন • ভাবুন • যাচাই করুন • সুরক্ষিত থাকুন',
  customLogoText: 'CLICK SAFE BD',
  updatedAt: new Date().toISOString(),
  updatedBy: 'System Default'
};

export const CERTIFICATE_PRESETS: { [key: string]: Partial<CertificateLayoutConfig> } = {
  'clean-white': {
    theme: 'clean-white',
    colorPlateId: 'minimal-white',
    primaryAccent: '#0f172a',
    secondaryAccent: '#2563eb',
    backgroundDark: '#ffffff',
    backgroundLight: '#f8fafc',
    borderColor: '#cbd5e1',
    sealColor: '#0f172a',
    titleTextColor: '#0f172a',
    recipientNameColor: '#1d4ed8',
    showAmbientGlow: false,
    borderStyle: 'minimal-modern',
    sealStyle: 'official-round',
    watermarkPattern: 'none',
    topLogoSize: 85,
    topLogoYOffset: 0,
    titleEnFontSize: 42,
    nameFontSize: 56,
  },
  'cyber-midnight': {
    theme: 'cyber-midnight',
    colorPlateId: 'cyber-emerald',
    primaryAccent: '#f59e0b',
    secondaryAccent: '#10b981',
    backgroundDark: '#071326',
    backgroundLight: '#030813',
    borderColor: '#f59e0b',
    sealColor: '#f59e0b',
    titleTextColor: '#f59e0b',
    recipientNameColor: '#6ee7b7',
    showAmbientGlow: true,
    borderStyle: 'ornate-gold',
    sealStyle: 'shield-insignia',
    watermarkPattern: 'grid',
    topLogoSize: 80,
    topLogoYOffset: 0,
  },
  'academic-gold': {
    theme: 'academic-gold',
    colorPlateId: 'imperial-gold',
    primaryAccent: '#d97706',
    secondaryAccent: '#2563eb',
    backgroundDark: '#1e1b4b',
    backgroundLight: '#0f172a',
    borderColor: '#d97706',
    sealColor: '#d97706',
    titleTextColor: '#fbbf24',
    recipientNameColor: '#fde68a',
    showAmbientGlow: true,
    borderStyle: 'double-frame',
    sealStyle: 'official-round',
    watermarkPattern: 'waves',
    topLogoSize: 85,
    topLogoYOffset: 0,
  },
  'royal-blue': {
    theme: 'royal-blue',
    colorPlateId: 'royal-sapphire',
    primaryAccent: '#38bdf8',
    secondaryAccent: '#fbbf24',
    backgroundDark: '#0c2340',
    backgroundLight: '#051020',
    borderColor: '#38bdf8',
    sealColor: '#2563eb',
    titleTextColor: '#38bdf8',
    recipientNameColor: '#93c5fd',
    showAmbientGlow: true,
    borderStyle: 'cyber-corners',
    sealStyle: 'cyber-hexagon',
    watermarkPattern: 'hexagons',
    topLogoSize: 80,
    topLogoYOffset: 0,
  },
  'crimson-prestige': {
    theme: 'crimson-prestige',
    colorPlateId: 'crimson-prestige',
    primaryAccent: '#f43f5e',
    secondaryAccent: '#fbbf24',
    backgroundDark: '#3b0716',
    backgroundLight: '#180208',
    borderColor: '#e11d48',
    sealColor: '#be123c',
    titleTextColor: '#fda4af',
    recipientNameColor: '#fecdd3',
    showAmbientGlow: true,
    borderStyle: 'ornate-gold',
    sealStyle: 'official-round',
    watermarkPattern: 'waves',
    topLogoSize: 80,
    topLogoYOffset: 0,
  }
};

const STORAGE_KEY_LAYOUT = 'csb_certificate_layout_config';

export function getStoredCertificateLayout(): CertificateLayoutConfig {
  if (typeof window === 'undefined') {
    return DEFAULT_CERTIFICATE_LAYOUT;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LAYOUT);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_CERTIFICATE_LAYOUT, ...parsed };
    }
  } catch (err) {
    console.warn('Failed to read certificate layout from localStorage', err);
  }
  return DEFAULT_CERTIFICATE_LAYOUT;
}

export function saveCertificateLayout(config: CertificateLayoutConfig, adminIdentifier = 'Administrator'): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const toSave: CertificateLayoutConfig = {
      ...config,
      updatedAt: new Date().toISOString(),
      updatedBy: adminIdentifier
    };
    localStorage.setItem(STORAGE_KEY_LAYOUT, JSON.stringify(toSave));
    window.dispatchEvent(new CustomEvent('csb_certificate_layout_changed', { detail: toSave }));
    return true;
  } catch (err) {
    console.error('Failed to save certificate layout', err);
    return false;
  }
}

export function resetCertificateLayoutToDefault(): CertificateLayoutConfig {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY_LAYOUT);
      window.dispatchEvent(new CustomEvent('csb_certificate_layout_changed', { detail: DEFAULT_CERTIFICATE_LAYOUT }));
    } catch (err) {
      console.warn('Failed to reset layout', err);
    }
  }
  return DEFAULT_CERTIFICATE_LAYOUT;
}
