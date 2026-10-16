'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Download, 
  Share2, 
  Copy, 
  Printer, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  Edit3,
  RefreshCw,
  QrCode,
  Lock,
  Palette,
  Sliders
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { useSecurity } from '@/context/SecurityContext';
import { 
  generateCertificateCanvas, 
  downloadCertificateImage, 
  shareCertificateImage, 
  copyCertificateImageToClipboard,
  generateVerificationHash 
} from '@/lib/certificateGenerator';
import { getStoredCertificateLayout, DEFAULT_CERTIFICATE_LAYOUT, CertificateLayoutConfig } from '@/lib/certificateLayout';

export default function CertificateModal() {
  const { 
    isCertificateModalOpen, 
    setIsCertificateModalOpen,
    setIsLeaderboardModalOpen,
    completedCount,
    totalCount,
    isAllModulesCompleted,
    userName,
    setUserName,
    completeAllModulesDemo
  } = useProgress();
  
  const { role, isAdmin, setIsAdminModalOpen, setIsAdminAuthModalOpen } = useSecurity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [inputName, setInputName] = useState(userName || '');
  const [certLanguage, setCertLanguage] = useState<'both' | 'bn' | 'en'>('both');
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [certificateId, setCertificateId] = useState('CSB-CHAMP-2026-88542');
  const [currentLayout, setCurrentLayout] = useState<CertificateLayoutConfig>(DEFAULT_CERTIFICATE_LAYOUT);
  
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Set randomized certificate ID on client mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const stored = getStoredCertificateLayout();
      const prefix = stored.uniqueIdPrefix || 'CSB-CHAMP-2026';
      setCertificateId(prefix + '-' + Math.floor(10000 + Math.random() * 90000));
      setCurrentLayout(stored);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Listen to admin layout changes live
  useEffect(() => {
    const handleLayoutChange = (e: Event) => {
      const customEvt = e as CustomEvent<CertificateLayoutConfig>;
      if (customEvt.detail) {
        setCurrentLayout(customEvt.detail);
      } else {
        setCurrentLayout(getStoredCertificateLayout());
      }
    };
    window.addEventListener('csb_certificate_layout_changed', handleLayoutChange);
    return () => {
      window.removeEventListener('csb_certificate_layout_changed', handleLayoutChange);
    };
  }, []);

  // Sync input name with context
  useEffect(() => {
    const timer = setTimeout(() => {
      if (userName) {
        setInputName(userName);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [userName]);

  // Re-generate canvas image whenever name, language or open state changes
  const renderCertificate = useCallback(async () => {
    setIsGenerating(true);
    try {
      const activeName = (inputName.trim() || userName.trim()) || (isBn ? 'সাইবার চ্যাম্পিয়ন' : 'Cyber Champion');
      const canvas = await generateCertificateCanvas({
        userName: activeName,
        certificateId,
        language: certLanguage,
        layoutConfig: currentLayout,
      });
      const dataUrl = canvas.toDataURL('image/png', 0.95);
      setPreviewDataUrl(dataUrl);
    } catch (err) {
      console.error('Failed to render certificate preview:', err);
    } finally {
      setIsGenerating(false);
    }
  }, [inputName, userName, isBn, certificateId, certLanguage, currentLayout]);

  useEffect(() => {
    let cancelled = false;
    if (isCertificateModalOpen) {
      const timer = setTimeout(() => {
        if (!cancelled) {
          renderCertificate();
        }
      }, 0);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }
  }, [isCertificateModalOpen, renderCertificate]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setInputName(newName);
    if (newName.trim()) {
      setUserName(newName.trim());
    }
  };

  const handleDownload = async () => {
    const activeName = inputName.trim() || userName.trim() || 'Champion';
    setFeedbackMessage(isBn ? 'সার্টিফিকেট ডাউনলোড হচ্ছে...' : 'Downloading certificate...');
    try {
      await downloadCertificateImage({
        userName: activeName,
        certificateId,
        language: certLanguage,
        layoutConfig: currentLayout,
      });
      setFeedbackMessage(isBn ? '✓ সনদপত্র সফলভাবে ডাউনলোড হয়েছে!' : '✓ Certificate downloaded successfully!');
      setTimeout(() => setFeedbackMessage(null), 4000);
    } catch (e) {
      console.error(e);
      setFeedbackMessage(isBn ? 'ডাউনলোড সম্পন্ন হয়েছে।' : 'Download completed.');
      setTimeout(() => setFeedbackMessage(null), 3000);
    }
  };

  const handleShare = async () => {
    const activeName = inputName.trim() || userName.trim() || 'Champion';
    setFeedbackMessage(isBn ? 'শেয়ার অপশন প্রস্তুত হচ্ছে...' : 'Preparing share options...');
    try {
      const result = await shareCertificateImage({
        userName: activeName,
        certificateId,
        language: certLanguage,
        layoutConfig: currentLayout,
      });
      setFeedbackMessage(result.message);
      setTimeout(() => setFeedbackMessage(null), 5000);
    } catch (e) {
      console.error(e);
      setFeedbackMessage(isBn ? 'শেয়ার প্রস্তুত করা যায়নি। ডাউনলোড বিকল্প ব্যবহার করুন।' : 'Could not share. Please download instead.');
      setTimeout(() => setFeedbackMessage(null), 3000);
    }
  };

  const handleCopy = async () => {
    const activeName = inputName.trim() || userName.trim() || 'Champion';
    setFeedbackMessage(isBn ? 'ক্লিপবোর্ডে কপি করা হচ্ছে...' : 'Copying image to clipboard...');
    const copied = await copyCertificateImageToClipboard({
      userName: activeName,
      certificateId,
      language: certLanguage,
      layoutConfig: currentLayout,
    });
    if (copied) {
      setFeedbackMessage(isBn ? '✓ সনদপত্রের ছবি ক্লিপবোর্ডে কপি হয়েছে!' : '✓ Certificate image copied to clipboard!');
    } else {
      setFeedbackMessage(isBn ? 'ব্রাউজার সরাসরি ইমেজ কপি সাপোর্ট করে না, ডাউনলোড বোতাম ব্যবহার করুন।' : 'Browser does not support direct image copying, please download.');
    }
    setTimeout(() => setFeedbackMessage(null), 4500);
  };

  const handlePrint = () => {
    if (!previewDataUrl) return;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Cybersecurity Champion Certificate - ${inputName}</title>
            <style>
              @page { size: landscape; margin: 0; }
              body { margin: 0; display: flex; align-items: center; justify-content: center; background: #000; min-height: 100vh; }
              img { max-width: 100%; max-height: 100vh; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="${previewDataUrl}" onload="window.print();window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const verificationHash = generateVerificationHash(certificateId, inputName || userName);

  if (!isCertificateModalOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-slate-950/85"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-title"
      >
        {/* Background Click to Dismiss */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCertificateModalOpen(false)}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-amber-950/40 overflow-hidden z-10 my-auto flex flex-col max-h-[94vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-5 py-4 bg-gradient-to-r from-amber-950/50 via-slate-900 to-emerald-950/40 border-b border-amber-500/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
                <Trophy className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="cert-title" className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {isBn ? 'সাইবার সিকিউরিটি চ্যাম্পিয়ন সনদ' : 'Cybersecurity Champion Certificate'}
                  </h3>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {isAllModulesCompleted ? (isBn ? 'ভেরিফায়েড' : 'Verified') : (isBn ? 'প্রিভিউ' : 'Preview')}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {isBn 
                    ? 'ক্লিক সেফ বাংলাদেশ · জাতীয় সাইবার নিরাপত্তা ক্যাম্পেইন ২০২৬' 
                    : 'Click Safe Bangladesh · National Cybersecurity Campaign 2026'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCertificateModalOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close certificate dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
            {/* Completion Banner or Incomplete Motivation */}
            {isAllModulesCompleted ? (
              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/60 flex items-start sm:items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-200 flex-1">
                  <span className="font-bold text-emerald-400">
                    {isBn ? '🎉 অসাধারণ কৃতিত্ব!' : '🎉 Outstanding Achievement!'}
                  </span>{' '}
                  {isBn 
                    ? `আপনি সবগুলো ১৩টি মডিউল সফলভাবে সম্পন্ন করে জাতীয় "Cybersecurity Champion" পদমর্যাদা অর্জন করেছেন। নিজের নামে সনদটি ডাউনলোড বা শেয়ার করুন!`
                    : `You have successfully completed all 13 modules and earned the national "Cybersecurity Champion" title. Download or share your certificate with pride!`}
                </div>
              </div>
            ) : (
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200">
                    <span className="font-bold text-amber-300">
                      {isBn ? 'কারিকুলাম অগ্রগতি:' : 'Curriculum Progress:'} {completedCount}/{totalCount} {isBn ? 'মডিউল সম্পন্ন' : 'Modules Completed'}
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {isBn 
                        ? 'অফিশিয়াল সনদের জন্য ১৩টি মডিউল সম্পন্ন করতে হয়। আপনি এখনই আপনার নাম দিয়ে প্রিভিউ দেখতে পারেন!' 
                        : 'Official accreditation unlocks upon completing 13 modules. You can preview with your name now!'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={completeAllModulesDemo}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 transition-colors whitespace-nowrap self-end sm:self-auto shrink-0"
                  title="Testing shortcut to mark all modules complete"
                >
                  {isBn ? 'সব মডিউল সম্পন্ন করুন (ডেমো)' : 'Unlock All Modules (Demo)'}
                </button>
              </div>
            )}

            {/* Role Notice & Admin Layout Designer Action */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs">
                {isAdmin ? (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Admin Access
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 font-mono font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Participant Access
                  </span>
                )}
                <span className="text-slate-300">
                  {isAdmin 
                    ? (isBn ? 'অ্যাডমিন অধিকার সক্রিয়: আপনি লেআউট ডিজাইন পরিবর্তন করতে পারেন।' : 'Administrator active: You can edit the certificate layout from scratch.')
                    : (isBn ? 'পার্টিসিপেন্ট শুধুমাত্র নিজের নাম ইনপুট করতে পারবেন। প্রতিটি এডিটিং এডমিন দ্বারা সংরক্ষিত।' : 'Participants can input their name. Certificate layout editing is strictly reserved for Admin.')}
                </span>
              </div>

              {isAdmin ? (
                <button
                  type="button"
                  onClick={() => setIsAdminModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto shadow-sm"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>{isBn ? 'লেআউট এডিট করুন (Admin Studio)' : 'Edit Layout From Scratch'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsAdminAuthModalOpen(true)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isBn ? 'এডমিন লগইন' : 'Admin Login'}</span>
                </button>
              )}
            </div>

            {/* Customization Controls: Name input (ONLY editable field for users) & Language */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                {/* Participant Name Input */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="cert-name-input" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isBn ? 'অংশগ্রহণকারীর নাম (Participant Full Name):' : 'Participant Name Input:'}</span>
                    </label>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      {isBn ? 'পার্টিসিপেন্ট ইনপুট সক্রিয়' : 'Participant input allowed'}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      id="cert-name-input"
                      type="text"
                      value={inputName}
                      onChange={handleNameChange}
                      placeholder={isBn ? 'যেমন: তানভীর আহমেদ / Tanvir Ahmed' : 'e.g. Tanvir Ahmed'}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all"
                      maxLength={50}
                    />
                  </div>
                </div>

                {/* Certificate Language toggle */}
                <div className="sm:w-48 space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    {isBn ? 'ভাষার বিন্যাস:' : 'Certificate Language:'}
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700 text-xs">
                    <button
                      type="button"
                      onClick={() => setCertLanguage('both')}
                      className={`py-1 rounded text-center font-medium transition-colors ${
                        certLanguage === 'both' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isBn ? 'উভয়' : 'Dual'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setCertLanguage('bn')}
                      className={`py-1 rounded text-center font-medium transition-colors ${
                        certLanguage === 'bn' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      বাংলা
                    </button>
                    <button
                      type="button"
                      onClick={() => setCertLanguage('en')}
                      className={`py-1 rounded text-center font-medium transition-colors ${
                        certLanguage === 'en' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={renderCertificate}
                    disabled={isGenerating}
                    className="w-full sm:w-auto px-3.5 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    title={isBn ? 'প্রিভিউ রিফ্রেশ করুন' : 'Refresh Preview'}
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin text-amber-400' : ''}`} />
                    <span>{isBn ? 'আপডেট' : 'Update'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Live Certificate Image Preview */}
            <div 
              ref={canvasContainerRef}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 shadow-xl flex items-center justify-center group"
            >
              {previewDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={previewDataUrl}
                  alt={`Cybersecurity Champion Certificate for ${inputName}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 text-slate-400 text-sm">
                  <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
                  <span>{isBn ? 'সনদপত্র তৈরি হচ্ছে...' : 'Generating certificate image...'}</span>
                </div>
              )}

              {/* Watermark badge if preview mode */}
              {!isAllModulesCompleted && (
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/90 border border-amber-500/60 text-[11px] font-mono text-amber-300 font-bold shadow-lg">
                  PREVIEW MODE · {completedCount}/{totalCount}
                </div>
              )}
            </div>

            {/* QR Verification Bar & Unique Cryptographic ID Badge */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <QrCode className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block">QR Verification:</span>
                  <span className="font-semibold text-emerald-400">Scannable On-Canvas</span>
                </div>
              </div>

              <div className="text-slate-300">
                <span className="text-[10px] text-slate-400 block">Unique Certificate ID:</span>
                <span className="font-mono font-bold text-amber-300">{certificateId}</span>
              </div>

              <div className="text-slate-300">
                <span className="text-[10px] text-slate-400 block">Cryptographic Hash:</span>
                <span className="font-mono text-sky-400">{verificationHash}</span>
              </div>
            </div>

            {/* Feedback notification toast */}
            <AnimatePresence>
              {feedbackMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs text-center font-medium shadow-md"
                >
                  {feedbackMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons Toolbar Footer */}
          <div className="px-5 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-slate-400 font-mono hidden sm:block">
              ID: <span className="text-amber-400">{certificateId}</span> • 1920×1080 Ultra HD
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {/* Leaderboard Jump Button */}
              <button
                onClick={() => {
                  setIsCertificateModalOpen(false);
                  setIsLeaderboardModalOpen(true);
                }}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-500/40 transition-all flex items-center gap-1.5 active:scale-95"
                title={isBn ? 'জাতীয় লিডারবোর্ডে অবস্থান দেখুন' : 'View National Leaderboard Standing'}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{isBn ? 'লিডারবোর্ড' : 'Leaderboard'}</span>
              </button>

              {/* Copy Image Button */}
              <button
                onClick={handleCopy}
                disabled={isGenerating || !previewDataUrl}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
                title={isBn ? 'সনদের ছবি ক্লিপবোর্ডে কপি করুন' : 'Copy Certificate Image'}
              >
                <Copy className="w-3.5 h-3.5 text-slate-300" />
                <span>{isBn ? 'ছবি কপি' : 'Copy Image'}</span>
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                disabled={isGenerating || !previewDataUrl}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
                title={isBn ? 'সনদপত্র প্রিন্ট করুন' : 'Print Certificate'}
              >
                <Printer className="w-3.5 h-3.5 text-slate-300" />
                <span>{isBn ? 'প্রিন্ট' : 'Print'}</span>
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                disabled={isGenerating || !previewDataUrl}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
                title={isBn ? 'সনদপত্র সোশ্যাল মিডিয়া বা বন্ধুদের সাথে শেয়ার করুন' : 'Share Certificate via Web Share'}
              >
                <Share2 className="w-3.5 h-3.5 text-slate-300" />
                <span>{isBn ? 'শেয়ার' : 'Share'}</span>
              </button>

              {/* Primary Download Button */}
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="flex-1 sm:flex-none px-5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-950/50 transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50"
                title={isBn ? 'হাই-রেজ্যুলেশন PNG সনদপত্র ডাউনলোড করুন' : 'Download Full HD PNG Certificate'}
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>{isBn ? 'সনদপত্র ডাউনলোড' : 'Download Certificate'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
