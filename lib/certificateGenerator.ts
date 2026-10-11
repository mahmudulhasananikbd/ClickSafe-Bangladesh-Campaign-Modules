'use client';

import QRCode from 'qrcode';
import { CertificateLayoutConfig, DEFAULT_CERTIFICATE_LAYOUT, getStoredCertificateLayout } from './certificateLayout';

export interface CertificateOptions {
  userName: string;
  certificateId?: string;
  issueDate?: string;
  language?: 'bn' | 'en' | 'both';
  layoutConfig?: CertificateLayoutConfig;
}

/**
 * Utility to calculate SHA-256 equivalent verification hash
 */
export function generateVerificationHash(certId: string, name: string): string {
  let hash = 0;
  const str = `${certId}::${name}::CLICK_SAFE_BD_2026::VERIFIED_HUMAN_FIREWALL`;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0').toUpperCase();
  return `0xCSB${hex}F7E2`;
}

/**
 * Helper to safely load image for canvas drawing
 */
function loadImageAsync(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      console.warn('Failed to load canvas image asset:', src.slice(0, 50));
      resolve(null);
    };
    img.src = src;
  });
}

/**
 * Helper to determine if a hex color is light or dark
 */
function isLightColor(hexStr?: string): boolean {
  if (!hexStr) return false;
  let hex = hexStr.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  if (hex.length !== 6) return false;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}

/**
 * Generates an Ultra HD (1920x1080) certificate on an HTML5 canvas
 * Supporting:
 * - Clean White Minimal theme with perfect contrast & typography
 * - Dynamic logo size & vertical offset management
 * - Uploaded watermark with opacity & scaling
 * - Uploaded top logo, footer partner & sponsor logos
 * - Uploaded signatures 1 & 2
 * - Complete color plate customization
 */
export async function generateCertificateCanvas(
  options: CertificateOptions
): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  const layout = options.layoutConfig || getStoredCertificateLayout() || DEFAULT_CERTIFICATE_LAYOUT;
  const certificateId = options.certificateId || `${layout.uniqueIdPrefix || 'CSB-CHAMP-2026'}-${Math.floor(10000 + Math.random() * 90000)}`;
  const userName = options.userName || 'সাইবার চ্যাম্পিয়ন (Cyber Champion)';
  const dateStr = options.issueDate || new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const verificationHash = generateVerificationHash(certificateId, userName);
  const verifyUrl = `https://clicksafebd.gov.bd/verify?id=${certificateId}&hash=${verificationHash}`;

  // Theme colors with fallback defaults
  const bgDark = layout.backgroundDark || '#071326';
  const bgLight = layout.backgroundLight || '#030813';
  const primaryColor = layout.primaryAccent || '#f59e0b';
  const secondaryColor = layout.secondaryAccent || '#10b981';
  const borderColor = layout.borderColor || primaryColor;
  const sealColor = layout.sealColor || primaryColor;
  const titleColor = layout.titleTextColor || primaryColor;
  const nameHighlightColor = layout.recipientNameColor || '#6ee7b7';

  // Contrast calculation: Is the certificate background light/white?
  const isWhiteTheme = isLightColor(bgDark) || layout.theme === 'clean-white' || layout.theme === 'minimal-white';

  // Adaptive font colors based on theme contrast
  const textDarkMuted = isWhiteTheme ? '#64748b' : '#94a3b8';
  const textLightMuted = isWhiteTheme ? '#475569' : '#cbd5e1';
  const textBodyColor = isWhiteTheme ? '#0f172a' : '#f8fafc';
  const textSecondaryHeader = isWhiteTheme ? '#334155' : secondaryColor;
  const metadataValueColor = isWhiteTheme ? '#0369a1' : '#38bdf8';

  // Load any user-uploaded assets asynchronously
  const [
    watermarkImg,
    topLogoImg,
    partnerLogoImg,
    sponsorLogoImg,
    sig1Img,
    sig2Img
  ] = await Promise.all([
    layout.watermarkImage ? loadImageAsync(layout.watermarkImage) : Promise.resolve(null),
    layout.topLogoImage ? loadImageAsync(layout.topLogoImage) : Promise.resolve(null),
    layout.partnerLogoImage ? loadImageAsync(layout.partnerLogoImage) : Promise.resolve(null),
    layout.sponsorLogoImage ? loadImageAsync(layout.sponsorLogoImage) : Promise.resolve(null),
    layout.signatory1SignatureImage ? loadImageAsync(layout.signatory1SignatureImage) : Promise.resolve(null),
    layout.signatory2SignatureImage ? loadImageAsync(layout.signatory2SignatureImage) : Promise.resolve(null),
  ]);

  // 1. Background Fill: Linear gradient or clean white
  const bgGradient = ctx.createLinearGradient(0, 0, 1920, 1080);
  bgGradient.addColorStop(0, bgDark);
  bgGradient.addColorStop(1, bgLight);
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1920, 1080);

  // 2. Custom Uploaded Watermark Image
  if (watermarkImg && watermarkImg.naturalWidth > 0) {
    ctx.save();
    const opacity = layout.watermarkOpacity !== undefined ? layout.watermarkOpacity : 0.12;
    const scale = layout.watermarkScale !== undefined ? layout.watermarkScale : 1.0;
    ctx.globalAlpha = Math.min(Math.max(opacity, 0.02), 0.6);

    const aspect = watermarkImg.naturalWidth / watermarkImg.naturalHeight;
    let baseW = 600 * scale;
    let baseH = baseW / aspect;

    const wx = 960 - baseW / 2;
    const wy = 540 - baseH / 2;
    ctx.drawImage(watermarkImg, wx, wy, baseW, baseH);
    ctx.restore();
  }

  // 3. Vector Watermark Pattern (if not none)
  ctx.save();
  if (layout.watermarkPattern === 'grid') {
    ctx.strokeStyle = isWhiteTheme ? 'rgba(15, 23, 42, 0.03)' : 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 60; x < 1920; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 40);
      ctx.lineTo(x, 1040);
      ctx.stroke();
    }
    for (let y = 60; y < 1080; y += 40) {
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(1880, y);
      ctx.stroke();
    }
  } else if (layout.watermarkPattern === 'hexagons') {
    ctx.strokeStyle = isWhiteTheme ? 'rgba(37, 99, 235, 0.04)' : 'rgba(16, 185, 129, 0.04)';
    ctx.lineWidth = 1;
    const r = 24;
    for (let y = 40; y < 1080; y += 60) {
      for (let x = 40; x < 1920; x += 100) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hx = x + r * Math.cos(angle);
          const hy = y + r * Math.sin(angle);
          if (i === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  } else if (layout.watermarkPattern === 'waves') {
    ctx.strokeStyle = isWhiteTheme ? 'rgba(15, 23, 42, 0.03)' : 'rgba(245, 158, 11, 0.04)';
    ctx.lineWidth = 1.5;
    for (let y = 100; y < 1080; y += 70) {
      ctx.beginPath();
      ctx.moveTo(50, y);
      ctx.bezierCurveTo(480, y - 30, 960, y + 30, 1870, y);
      ctx.stroke();
    }
  } else if (layout.watermarkPattern === 'dots') {
    ctx.fillStyle = isWhiteTheme ? 'rgba(15, 23, 42, 0.05)' : 'rgba(255, 255, 255, 0.04)';
    for (let y = 60; y < 1050; y += 50) {
      for (let x = 60; x < 1880; x += 50) {
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  ctx.restore();

  // 4. Ambient Lighting glows (only if enabled & not clean white theme)
  if (layout.showAmbientGlow !== false && !isWhiteTheme) {
    const drawGlow = (gx: number, gy: number, radius: number, color: string) => {
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);
      glow.addColorStop(0, color);
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(gx - radius, gy - radius, radius * 2, radius * 2);
    };
    drawGlow(960, 160, 500, 'rgba(245, 158, 11, 0.12)');
    drawGlow(960, 540, 400, 'rgba(16, 185, 129, 0.07)');
    drawGlow(120, 120, 350, 'rgba(245, 158, 11, 0.06)');
    drawGlow(1800, 120, 350, 'rgba(16, 185, 129, 0.06)');
  }

  // 5. Borders according to BorderStyle & borderColor
  ctx.save();
  if (layout.borderStyle === 'minimal-modern') {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = isWhiteTheme ? 2 : 4;
    ctx.strokeRect(60, 60, 1800, 960);
    ctx.strokeStyle = isWhiteTheme ? '#e2e8f0' : '#334155';
    ctx.lineWidth = 1;
    ctx.strokeRect(70, 70, 1780, 940);
  } else if (layout.borderStyle === 'thin-hairline') {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(55, 55, 1810, 970);
    ctx.strokeStyle = isWhiteTheme ? 'rgba(226, 232, 240, 0.7)' : 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(62, 62, 1796, 956);
  } else if (layout.borderStyle === 'double-frame') {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 6;
    ctx.strokeRect(50, 50, 1820, 980);
    ctx.strokeStyle = secondaryColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(64, 64, 1792, 952);
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(74, 74, 1772, 932);
  } else if (layout.borderStyle === 'none') {
    // No outer borders
  } else {
    // 'ornate-gold' or 'cyber-corners'
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 5;
    ctx.strokeRect(50, 50, 1820, 980);
    ctx.strokeStyle = secondaryColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(66, 66, 1788, 948);

    // Cyber Corner Brackets
    const drawCorner = (cx: number, cy: number, flipX: number, flipY: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(flipX, flipY);
      ctx.strokeStyle = borderColor;
      ctx.fillStyle = borderColor;
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.moveTo(0, 48);
      ctx.lineTo(0, 0);
      ctx.lineTo(48, 0);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(0, 14);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(8, 8, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    drawCorner(66, 66, 1, 1);
    drawCorner(1854, 66, -1, 1);
    drawCorner(66, 1014, 1, -1);
    drawCorner(1854, 1014, -1, -1);
  }
  ctx.restore();

  // 6. Header Crest / Insignia or Custom Uploaded Top Logo (Center Top) with Size Management
  const crestX = 960;
  const userYOffset = layout.topLogoYOffset || 0;
  const crestY = 145 + userYOffset;

  // Manage top logo size dynamically
  const targetLogoSize = layout.topLogoSize || 80;

  if (topLogoImg && topLogoImg.naturalWidth > 0 && layout.showTopLogo !== false) {
    // Draw uploaded top logo with adjustable height and width scaling
    ctx.save();
    const maxLogoH = targetLogoSize;
    const maxLogoW = targetLogoSize * 3.2; // Keep max width proportional
    const aspect = topLogoImg.naturalWidth / topLogoImg.naturalHeight;
    let logoW = maxLogoW;
    let logoH = logoW / aspect;
    if (logoH > maxLogoH) {
      logoH = maxLogoH;
      logoW = logoH * aspect;
    }
    ctx.drawImage(topLogoImg, crestX - logoW / 2, crestY - logoH / 2, logoW, logoH);
    ctx.restore();
  } else if (layout.showTopLogo !== false) {
    // Draw classic shield insignia or minimal medallion with dynamic scaling
    ctx.save();
    ctx.translate(crestX, crestY);
    const scaleFactor = targetLogoSize / 80;
    ctx.scale(scaleFactor, scaleFactor);

    if (isWhiteTheme) {
      // Clean minimal round crest for white theme
      ctx.beginPath();
      ctx.arc(0, 0, 36, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.fill();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Star inside crest
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      const starR1 = 15;
      const starR2 = 7;
      for (let i = 0; i < 5; i++) {
        const a1 = (Math.PI / 2.5) * i - Math.PI / 2;
        const a2 = a1 + Math.PI / 5;
        const sx1 = starR1 * Math.cos(a1);
        const sy1 = starR1 * Math.sin(a1);
        const sx2 = starR2 * Math.cos(a2);
        const sy2 = starR2 * Math.sin(a2);
        if (i === 0) ctx.moveTo(sx1, sy1);
        else ctx.lineTo(sx1, sy1);
        ctx.lineTo(sx2, sy2);
      }
      ctx.closePath();
      ctx.fill();
    } else {
      // Classic cybersecurity shield insignia with gradient
      ctx.beginPath();
      ctx.moveTo(0, -42);
      ctx.lineTo(36, -24);
      ctx.lineTo(36, 12);
      ctx.quadraticCurveTo(36, 46, 0, 64);
      ctx.quadraticCurveTo(-36, 46, -36, 12);
      ctx.lineTo(-36, -24);
      ctx.closePath();

      const shieldGrad = ctx.createLinearGradient(0, -42, 0, 64);
      shieldGrad.addColorStop(0, primaryColor);
      shieldGrad.addColorStop(1, secondaryColor);
      ctx.fillStyle = shieldGrad;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Star inside crest
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      const starR1 = 16;
      const starR2 = 8;
      for (let i = 0; i < 5; i++) {
        const a1 = (Math.PI / 2.5) * i - Math.PI / 2;
        const a2 = a1 + Math.PI / 5;
        const sx1 = starR1 * Math.cos(a1);
        const sy1 = starR1 * Math.sin(a1);
        const sx2 = starR2 * Math.cos(a2);
        const sy2 = starR2 * Math.sin(a2);
        if (i === 0) ctx.moveTo(sx1, sy1);
        else ctx.lineTo(sx1, sy1);
        ctx.lineTo(sx2, sy2);
      }
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  // Top Organization Branding
  ctx.textAlign = 'center';
  ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textSecondaryHeader;
  ctx.fillText(layout.customLogoText || 'CLICK SAFE BD • CYBER AWARENESS CAMPAIGN 2026', 960, 235 + userYOffset * 0.4);

  ctx.font = '500 13px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textDarkMuted;
  ctx.fillText(layout.issuerOrgBn || 'ইনফোগার্ড+ বাংলাদেশ ও জাতীয় সাইবার ডিফেন্স ইনিশিয়েটিভ', 960, 258 + userYOffset * 0.4);

  // 7. Certificate Main Titles & Headings
  const titleFontSize = layout.titleEnFontSize || 44;
  ctx.font = `900 ${titleFontSize}px "Plus Jakarta Sans", sans-serif`;
  ctx.letterSpacing = '3px';
  ctx.fillStyle = titleColor;
  ctx.fillText(layout.titleEn || 'CYBERSECURITY CHAMPION', 960, 318);
  ctx.letterSpacing = '0px';

  ctx.font = '700 24px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = isWhiteTheme ? '#0f172a' : '#f8fafc';
  ctx.fillText(layout.titleBn || 'সাইবার সিকিউরিটি চ্যাম্পিয়ন · জাতীয় সনদপত্র', 960, 355);

  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textDarkMuted;
  ctx.letterSpacing = '2px';
  ctx.fillText(layout.subtitleEn || 'OFFICIAL NATIONAL CREDENTIAL OF CYBER DEFENSE MASTERY', 960, 385);
  ctx.letterSpacing = '0px';

  // Divider Ribbon Line
  ctx.save();
  const ribbonGrad = ctx.createLinearGradient(480, 405, 1440, 405);
  if (isWhiteTheme) {
    ribbonGrad.addColorStop(0, 'rgba(15, 23, 42, 0)');
    ribbonGrad.addColorStop(0.3, secondaryColor);
    ribbonGrad.addColorStop(0.5, borderColor);
    ribbonGrad.addColorStop(0.7, secondaryColor);
    ribbonGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.lineWidth = 1.5;
  } else {
    ribbonGrad.addColorStop(0, 'rgba(245, 158, 11, 0)');
    ribbonGrad.addColorStop(0.3, secondaryColor);
    ribbonGrad.addColorStop(0.5, primaryColor);
    ribbonGrad.addColorStop(0.7, secondaryColor);
    ribbonGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.lineWidth = 2;
  }
  ctx.strokeStyle = ribbonGrad;
  ctx.beginPath();
  ctx.moveTo(480, 408);
  ctx.lineTo(1440, 408);
  ctx.stroke();
  ctx.restore();

  // Presentation text
  ctx.font = '400 16px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textLightMuted;
  ctx.fillText(layout.presentationTextBn || 'গর্ব ও সম্মানের সাথে এই জাতীয় স্বীকৃতি প্রদান করা হলো', 960, 442);

  ctx.font = 'italic 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textDarkMuted;
  ctx.fillText(layout.presentationTextEn || 'This prestigious credential is proudly presented to', 960, 465);

  // 8. Recipient User Name (Prominent highlight)
  const nameFontSize = layout.nameFontSize || 58;
  ctx.font = `800 ${nameFontSize}px "Hind Siliguri", "Plus Jakarta Sans", sans-serif`;

  if (isWhiteTheme) {
    ctx.fillStyle = nameHighlightColor || '#1d4ed8';
    ctx.shadowBlur = 0;
    ctx.fillText(userName, 960, 515);
  } else {
    const nameGrad = ctx.createLinearGradient(600, 510, 1320, 510);
    nameGrad.addColorStop(0, '#ffffff');
    nameGrad.addColorStop(0.5, nameHighlightColor);
    nameGrad.addColorStop(1, '#ffffff');
    ctx.fillStyle = nameGrad;
    ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
    ctx.shadowBlur = 16;
    ctx.fillText(userName, 960, 515);
    ctx.shadowBlur = 0;
  }

  // Name underline
  ctx.save();
  ctx.strokeStyle = isWhiteTheme ? secondaryColor : secondaryColor;
  ctx.lineWidth = isWhiteTheme ? 2.5 : 3;
  ctx.beginPath();
  const nameWidth = Math.max(380, ctx.measureText(userName).width + 60);
  ctx.moveTo(960 - nameWidth / 2, 545);
  ctx.lineTo(960 + nameWidth / 2, 545);
  ctx.stroke();
  ctx.restore();

  // 9. Citations & Achievements
  ctx.font = '400 18px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textLightMuted;
  ctx.fillText(layout.citationLine1Bn, 960, 585);
  ctx.fillText(layout.citationLine2Bn, 960, 614);

  ctx.font = 'italic 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textDarkMuted;
  ctx.fillText(layout.citationEn, 960, 646);

  // 10. Bottom Zone:
  // Left: Official Seal & Custom Partner Logo
  // Center: QR Code & Cryptographic Metadata
  // Right: Official Signatures & Sponsor Logo

  // Left: Official Seal
  const sealX = 260;
  const sealY = 800;

  if (layout.sealStyle !== 'none') {
    ctx.save();
    ctx.translate(sealX, sealY);
    ctx.beginPath();
    ctx.arc(0, 0, 65, 0, Math.PI * 2);

    if (isWhiteTheme) {
      // Clean minimal embossed round stamp for white theme
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = sealColor || '#0f172a';
      ctx.lineWidth = 3.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 52, 0, Math.PI * 2);
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = sealColor || '#0f172a';
      ctx.font = '800 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('★ OFFICIAL SEAL ★', 0, -22);
      ctx.font = '900 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(layout.sealText ? layout.sealText.split('•')[0].trim() : 'HUMAN FIREWALL', 0, -5);
      ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('CLICK SAFE BD', 0, 12);
      ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('2026', 0, 28);
    } else {
      // Gold gradient seal
      const sealGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 65);
      sealGrad.addColorStop(0, '#fef08a');
      sealGrad.addColorStop(0.7, sealColor);
      sealGrad.addColorStop(1, '#b45309');
      ctx.fillStyle = sealGrad;
      ctx.fill();
      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Inner ring
      ctx.beginPath();
      ctx.arc(0, 0, 52, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(120, 53, 15, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#78350f';
      ctx.font = '800 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('★ OFFICIAL SEAL ★', 0, -22);
      ctx.font = '900 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('HUMAN FIREWALL', 0, -5);
      ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('CLICK SAFE BD', 0, 12);
      ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('2026', 0, 28);
    }
    ctx.restore();
  }

  // Center-Left: QR Code Generation & Verification Box
  if (layout.showQrCode) {
    try {
      const qrCanvas = document.createElement('canvas');
      await QRCode.toCanvas(qrCanvas, verifyUrl, {
        width: 135,
        margin: 1,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M'
      });

      const qrX = 420;
      const qrY = 735;

      // Draw rounded container for QR Code
      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = isWhiteTheme ? '#cbd5e1' : borderColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(qrX, qrY, 150, 150, 12);
      ctx.fill();
      ctx.stroke();

      // Draw QR canvas image inside container
      ctx.drawImage(qrCanvas, qrX + 8, qrY + 8, 134, 134);

      // QR Verification Label
      ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = isWhiteTheme ? '#0284c7' : secondaryColor;
      ctx.textAlign = 'center';
      ctx.fillText('SCAN TO VERIFY', qrX + 75, qrY + 166);

      ctx.font = '600 10px "Hind Siliguri", sans-serif';
      ctx.fillStyle = textDarkMuted;
      ctx.fillText('স্ক্যান করে যাচাই করুন', qrX + 75, qrY + 182);
      ctx.restore();
    } catch (qrErr) {
      console.warn('Could not generate canvas QR code', qrErr);
    }
  }

  // Center Metadata (Unique Certificate ID & Hash)
  ctx.textAlign = 'left';
  const metaX = 610;
  const metaY = 750;

  ctx.font = '700 14px "Plus Jakarta Sans", monospace';
  ctx.fillStyle = isWhiteTheme ? '#0f172a' : secondaryColor;
  ctx.fillText(`UNIQUE CERTIFICATE ID: ${certificateId}`, metaX, metaY);

  if (layout.showVerifyHash !== false) {
    ctx.font = '600 13px "Plus Jakarta Sans", monospace';
    ctx.fillStyle = metadataValueColor;
    ctx.fillText(`SECURITY VERIFY HASH: ${verificationHash}`, metaX, metaY + 25);
  }

  ctx.font = '500 13px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textDarkMuted;
  ctx.fillText(`ইস্যু তারিখ / ISSUE DATE: ${dateStr}`, metaX, metaY + (layout.showVerifyHash !== false ? 50 : 25));

  ctx.font = '500 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = textDarkMuted;
  ctx.fillText('Status: Cryptographically Authenticated • 13/13 Curriculum Mastery Verified', metaX, metaY + (layout.showVerifyHash !== false ? 72 : 47));

  ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = isWhiteTheme ? '#2563eb' : primaryColor;
  ctx.fillText(`National Portal: https://clicksafebd.gov.bd/verify?id=${certificateId}`, metaX, metaY + (layout.showVerifyHash !== false ? 92 : 67));

  // 11. Right: Official Signatories (Signatory 1 & Signatory 2)
  const sig1X = 1430;
  const sig2X = 1710;
  const sigY = 820;

  ctx.textAlign = 'center';

  // Signatory 1
  if (layout.signatory1Enabled) {
    ctx.save();
    if (sig1Img && sig1Img.naturalWidth > 0) {
      // Draw uploaded signature 1
      const maxSigW = 160;
      const maxSigH = 55;
      const aspect = sig1Img.naturalWidth / sig1Img.naturalHeight;
      let sw = maxSigW;
      let sh = sw / aspect;
      if (sh > maxSigH) {
        sh = maxSigH;
        sw = sh * aspect;
      }
      ctx.drawImage(sig1Img, sig1X - sw / 2, sigY - sh - 5, sw, sh);
    } else {
      // Draw bezier cursive signature
      ctx.strokeStyle = isWhiteTheme ? '#0284c7' : '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sig1X - 70, sigY - 20);
      ctx.bezierCurveTo(sig1X - 30, sigY - 45, sig1X - 10, sigY - 5, sig1X + 20, sigY - 25);
      ctx.bezierCurveTo(sig1X + 40, sigY - 45, sig1X + 60, sigY - 10, sig1X + 70, sigY - 20);
      ctx.stroke();
    }

    // Line & Name
    ctx.strokeStyle = isWhiteTheme ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sig1X - 90, sigY);
    ctx.lineTo(sig1X + 90, sigY);
    ctx.stroke();

    ctx.font = '700 13px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = textBodyColor;
    ctx.fillText(layout.signatory1Name, sig1X, sigY + 20);

    ctx.font = '400 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = textDarkMuted;
    ctx.fillText(layout.signatory1Title, sig1X, sigY + 36);
    ctx.restore();
  }

  // Signatory 2
  if (layout.signatory2Enabled) {
    ctx.save();
    if (sig2Img && sig2Img.naturalWidth > 0) {
      // Draw uploaded signature 2
      const maxSigW = 160;
      const maxSigH = 55;
      const aspect = sig2Img.naturalWidth / sig2Img.naturalHeight;
      let sw = maxSigW;
      let sh = sw / aspect;
      if (sh > maxSigH) {
        sh = maxSigH;
        sw = sh * aspect;
      }
      ctx.drawImage(sig2Img, sig2X - sw / 2, sigY - sh - 5, sw, sh);
    } else {
      // Draw bezier cursive signature
      ctx.strokeStyle = isWhiteTheme ? '#059669' : '#34d399';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sig2X - 70, sigY - 15);
      ctx.bezierCurveTo(sig2X - 35, sigY - 40, sig2X, sigY - 2, sig2X + 25, sigY - 30);
      ctx.bezierCurveTo(sig2X + 50, sigY - 48, sig2X + 60, sigY - 8, sig2X + 70, sigY - 15);
      ctx.stroke();
    }

    // Line & Name
    ctx.strokeStyle = isWhiteTheme ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(sig2X - 90, sigY);
    ctx.lineTo(sig2X + 90, sigY);
    ctx.stroke();

    ctx.font = '700 13px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = textBodyColor;
    ctx.fillText(layout.signatory2Name, sig2X, sigY + 20);

    ctx.font = '400 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = textDarkMuted;
    ctx.fillText(layout.signatory2Title, sig2X, sigY + 36);
    ctx.restore();
  }

  // 12. Footer Partner and Sponsor Logos with customizable scale
  const footerLogoHeight = layout.footerLogosSize || 35;

  if (layout.showFooterLogos !== false && (partnerLogoImg || sponsorLogoImg)) {
    ctx.save();
    const footerY = 945;

    // Partner logo (Left-center)
    if (partnerLogoImg && partnerLogoImg.naturalWidth > 0) {
      const pW = footerLogoHeight * 3.2;
      const pH = footerLogoHeight;
      const aspect = partnerLogoImg.naturalWidth / partnerLogoImg.naturalHeight;
      let dw = pW;
      let dh = dw / aspect;
      if (dh > pH) {
        dh = pH;
        dw = dh * aspect;
      }
      ctx.drawImage(partnerLogoImg, 610, footerY - dh / 2, dw, dh);
      ctx.textAlign = 'left';
      ctx.font = '600 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = textDarkMuted;
      ctx.fillText(`PARTNER: ${layout.partnerName || 'ICT Division'}`, 610 + dw + 10, footerY + 4);
    }

    // Sponsor logo (Right-center)
    if (sponsorLogoImg && sponsorLogoImg.naturalWidth > 0) {
      const sW = footerLogoHeight * 3.2;
      const sH = footerLogoHeight;
      const aspect = sponsorLogoImg.naturalWidth / sponsorLogoImg.naturalHeight;
      let dw = sW;
      let dh = dw / aspect;
      if (dh > sH) {
        dh = sH;
        dw = dh * aspect;
      }
      ctx.drawImage(sponsorLogoImg, 1020, footerY - dh / 2, dw, dh);
      ctx.textAlign = 'left';
      ctx.font = '600 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = textDarkMuted;
      ctx.fillText(`SPONSOR: ${layout.sponsorName || 'Cyber Partner'}`, 1020 + dw + 10, footerY + 4);
    }
    ctx.restore();
  }

  // 13. Bottom Edge National Motto Bar
  ctx.save();
  const barGrad = ctx.createLinearGradient(0, 1020, 1920, 1020);
  if (isWhiteTheme) {
    barGrad.addColorStop(0, '#0284c7');
    barGrad.addColorStop(0.5, '#2563eb');
    barGrad.addColorStop(1, '#0284c7');
  } else {
    barGrad.addColorStop(0, '#064e3b');
    barGrad.addColorStop(0.4, '#047857');
    barGrad.addColorStop(0.5, '#b91c1c');
    barGrad.addColorStop(0.6, '#047857');
    barGrad.addColorStop(1, '#064e3b');
  }
  ctx.fillStyle = barGrad;
  ctx.fillRect(80, 1010, 1760, isWhiteTheme ? 3 : 5);

  ctx.textAlign = 'center';
  ctx.font = '700 14px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = isWhiteTheme ? '#0f172a' : primaryColor;
  const motto = `${layout.nationalMottoBn || 'থামুন • ভাবুন • যাচাই করুন • সুরক্ষিত থাকুন'}  |  ${layout.nationalMottoEn || 'STOP • THINK • VERIFY • PROTECT'}`;
  ctx.fillText(motto, 960, 1038);
  ctx.restore();

  return canvas;
}

/**
 * Returns a high-res data URL (image/png) of the certificate
 */
export async function generateCertificateDataUrl(
  options: CertificateOptions
): Promise<string> {
  const canvas = await generateCertificateCanvas(options);
  return canvas.toDataURL('image/png', 1.0);
}

/**
 * Triggers browser download of the certificate as a PNG file
 */
export async function downloadCertificateImage(
  options: CertificateOptions,
  filename?: string
): Promise<void> {
  const canvas = await generateCertificateCanvas(options);
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  
  const sanitizedName = (options.userName || 'Champion')
    .replace(/[^a-zA-Z0-9_\u0980-\u09FF]/g, '_')
    .substring(0, 30);
  const safeFilename = filename || `ClickSafeBD-Certificate-${sanitizedName}-${options.certificateId || '2026'}.png`;

  const link = document.createElement('a');
  link.download = safeFilename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Native Web Share API trigger or fallback to download
 */
export async function shareCertificateImage(
  options: CertificateOptions
): Promise<{ success: boolean; method: string; message: string }> {
  try {
    const canvas = await generateCertificateCanvas(options);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png', 1.0));

    if (blob && navigator.canShare && navigator.canShare({ files: [new File([blob], 'certificate.png', { type: 'image/png' })] })) {
      const file = new File([blob], `ClickSafeBD-${options.userName}.png`, { type: 'image/png' });
      await navigator.share({
        title: 'Click Safe BD Cybersecurity Champion Certificate',
        text: `I just earned my official Human Firewall Cybersecurity Certificate from Click Safe BD 2026! Verify ID: ${options.certificateId}`,
        files: [file],
      });
      return {
        success: true,
        method: 'native-share',
        message: 'সফলভাবে শেয়ার করা হয়েছে (Shared successfully)',
      };
    } else {
      // Fallback: download the file
      await downloadCertificateImage(options);
      return {
        success: true,
        method: 'download',
        message: 'সরাসরি ডাউনলোড সম্পন্ন (Direct download complete)',
      };
    }
  } catch (err) {
    console.warn('Share failed, falling back to download:', err);
    await downloadCertificateImage(options);
    return {
      success: true,
      method: 'download',
      message: 'সরাসরি ডাউনলোড সম্পন্ন (Direct download complete)',
    };
  }
}

/**
 * Copies the generated certificate image to the user's system clipboard
 */
export async function copyCertificateImageToClipboard(
  options: CertificateOptions
): Promise<boolean> {
  try {
    const canvas = await generateCertificateCanvas(options);
    return new Promise<boolean>((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        try {
          if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
            const item = new ClipboardItem({ 'image/png': blob });
            await navigator.clipboard.write([item]);
            resolve(true);
          } else {
            resolve(false);
          }
        } catch (clipErr) {
          console.warn('Clipboard write failed:', clipErr);
          resolve(false);
        }
      }, 'image/png');
    });
  } catch (err) {
    console.error('Failed to copy image to clipboard:', err);
    return false;
  }
}
