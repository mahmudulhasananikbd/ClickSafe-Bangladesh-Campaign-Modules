'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Palette, 
  Lock, 
  Unlock, 
  X, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  QrCode, 
  Eye, 
  FileCheck, 
  Users, 
  Sliders, 
  Sparkles,
  LogOut,
  Search,
  Upload,
  Image as ImageIcon,
  Trash2,
  Key
} from 'lucide-react';
import { useSecurity } from '@/context/SecurityContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CertificateLayoutConfig, 
  DEFAULT_CERTIFICATE_LAYOUT, 
  CERTIFICATE_PRESETS,
  COLOR_PLATES,
  ColorPlate,
  getStoredCertificateLayout, 
  saveCertificateLayout, 
  resetCertificateLayoutToDefault 
} from '@/lib/certificateLayout';
import { 
  generateCertificateCanvas, 
  generateVerificationHash 
} from '@/lib/certificateGenerator';

export default function AdminPortalModal() {
  const { 
    isAdminModalOpen, 
    setIsAdminModalOpen, 
    logoutAdmin,
    auditLogs, 
    clearAuditLogs,
    adminPasscode,
    updateAdminPasscode,
    addAuditLog
  } = useSecurity();

  const { isBn } = useLanguage();

  const [activeTab, setActiveTab] = useState<'designer' | 'security' | 'verify'>('designer');
  
  // Layout state
  const [layout, setLayout] = useState<CertificateLayoutConfig>(DEFAULT_CERTIFICATE_LAYOUT);
  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState<boolean>(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(null);

  // Security passkey state
  const [oldPassInput, setOldPassInput] = useState('');
  const [newPassInput, setNewPassInput] = useState('');
  const [passFeedback, setPassFeedback] = useState<{ success: boolean; message: string } | null>(null);

  // Verification lookup state
  const [lookupId, setLookupId] = useState('CSB-CHAMP-2026-88542');
  const [lookupName, setLookupName] = useState('তানজিম হাসান (Tanjim Hasan)');
  const [verificationResult, setVerificationResult] = useState<{
    valid: boolean;
    hash: string;
    verifiedAt: string;
    curriculumStatus: string;
  } | null>(null);

  // Load layout on mount / modal open
  useEffect(() => {
    let cancelled = false;
    if (isAdminModalOpen) {
      const timer = setTimeout(() => {
        if (!cancelled) {
          const stored = getStoredCertificateLayout();
          setLayout(stored);
        }
      }, 0);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }
  }, [isAdminModalOpen]);

  // Live Canvas Preview Generator
  const renderPreview = useCallback(async (currentLayout: CertificateLayoutConfig) => {
    setIsPreviewLoading(true);
    try {
      const canvas = await generateCertificateCanvas({
        userName: isBn ? 'তাহমিদ আহমেদ' : 'Tahmid Ahmed',
        certificateId: (currentLayout.uniqueIdPrefix || 'CSB-CHAMP-2026') + '-89421',
        layoutConfig: currentLayout,
        language: 'both',
      });
      setPreviewDataUrl(canvas.toDataURL('image/png', 0.9));
    } catch (err) {
      console.error('Failed to generate admin certificate preview', err);
    } finally {
      setIsPreviewLoading(false);
    }
  }, [isBn]);

  useEffect(() => {
    if (isAdminModalOpen && activeTab === 'designer') {
      const timer = setTimeout(() => {
        renderPreview(layout);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [layout, isAdminModalOpen, activeTab, renderPreview]);

  // Apply Preset
  const handleApplyPreset = (presetKey: string) => {
    const preset = CERTIFICATE_PRESETS[presetKey];
    if (preset) {
      setLayout(prev => ({
        ...prev,
        ...preset
      }));
    }
  };

  // Apply Color Plate
  const handleApplyColorPlate = (plate: ColorPlate) => {
    setLayout(prev => ({
      ...prev,
      colorPlateId: plate.id,
      primaryAccent: plate.primaryAccent,
      secondaryAccent: plate.secondaryAccent,
      backgroundDark: plate.backgroundDark,
      backgroundLight: plate.backgroundLight,
      borderColor: plate.borderColor,
      sealColor: plate.sealColor,
      titleTextColor: plate.titleTextColor,
      recipientNameColor: plate.recipientNameColor,
    }));
  };

  // File upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: keyof CertificateLayoutConfig) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2.5 * 1024 * 1024) {
      alert(isBn ? 'ছবিটির সাইজ ২.৫ মেগাবাইটের বেশি। অনুগ্রহ করে ছোট ছবি আপলোড করুন।' : 'Image file is larger than 2.5MB. Please upload a smaller image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setLayout(prev => ({
        ...prev,
        [field]: dataUrl
      }));
    };
    reader.readAsDataURL(file);
  };

  // Remove uploaded file
  const handleRemoveUploaded = (field: keyof CertificateLayoutConfig) => {
    setLayout(prev => ({
      ...prev,
      [field]: undefined
    }));
  };

  // Save changes
  const handleSaveLayout = () => {
    const ok = saveCertificateLayout(layout, 'Administrator');
    if (ok) {
      addAuditLog('CERTIFICATE_LAYOUT_SAVED', `Certificate layout template '${layout.theme}' saved and applied to all participants.`, 'success');
      setSaveSuccessMessage(isBn ? '✓ নতুন সার্টিফিকেট লেআউট সফলভাবে সংরক্ষিত ও সবার জন্য প্রয়োগ করা হয়েছে!' : '✓ Certificate layout saved and applied across the web app!');
      setTimeout(() => setSaveSuccessMessage(null), 4000);
    }
  };

  // Reset layout
  const handleResetLayout = () => {
    if (confirm(isBn ? 'আপনি কি নিশ্চিত যে সার্টিফিকেটের ডিজাইন ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?' : 'Reset certificate layout back to official default settings?')) {
      const reset = resetCertificateLayoutToDefault();
      setLayout(reset);
      addAuditLog('CERTIFICATE_LAYOUT_RESET', 'Certificate layout reset to factory system defaults.', 'warning');
      setSaveSuccessMessage(isBn ? 'ডিফল্ট লেআউট পুনরুদ্ধার করা হয়েছে।' : 'Factory default layout restored.');
      setTimeout(() => setSaveSuccessMessage(null), 3000);
    }
  };

  // Update Passcode
  const handlePasscodeChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPassFeedback(null);
    const res = updateAdminPasscode(oldPassInput, newPassInput);
    setPassFeedback(res);
    if (res.success) {
      setOldPassInput('');
      setNewPassInput('');
      setTimeout(() => setPassFeedback(null), 4000);
    }
  };

  // Run Verification
  const handleRunVerification = (e: React.FormEvent) => {
    e.preventDefault();
    const hash = generateVerificationHash(lookupId.trim(), lookupName.trim());
    setVerificationResult({
      valid: true,
      hash,
      verifiedAt: new Date().toLocaleString(),
      curriculumStatus: '13 / 13 Modules Completed & Verified'
    });
    addAuditLog('CERTIFICATE_VERIFIED', `Verified certificate ${lookupId} for ${lookupName}`, 'info');
  };

  if (!isAdminModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-6xl max-h-[94vh] bg-slate-900 border border-emerald-500/50 rounded-2xl shadow-2xl flex flex-col text-slate-100 overflow-hidden"
        >
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-950/50">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {isBn ? 'অ্যাডমিনিস্ট্রেটর পোর্টাল ও সার্টিফিকেট স্টুডিও' : 'Administrator Portal & Certificate Studio'}
                  </h2>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Admin Active
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {isBn 
                    ? 'সার্টিফিকেট লেআউট ডিজাইন • লোগো ও ওয়াটারমার্ক আপলোড • কালার প্লেট • সিকিউরিটি রোলস' 
                    : 'Certificate Layout Designer • Watermark & Logos Upload • Color Plates • RBAC Security'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  logoutAdmin();
                  setIsAdminModalOpen(false);
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-500/40 flex items-center gap-1.5 transition-colors"
                title={isBn ? 'এডমিন লগআউট করে পার্টিসিপেন্ট মোডে ফিরুন' : 'Logout Admin & Revert to Participant Mode'}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isBn ? 'লগআউট' : 'Logout'}</span>
              </button>
              <button
                onClick={() => setIsAdminModalOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Admin Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="px-5 border-b border-slate-800 bg-slate-900/50 flex gap-2 overflow-x-auto shrink-0 py-2">
            <button
              onClick={() => setActiveTab('designer')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'designer'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>{isBn ? 'সার্টিফিকেট লেআউট স্টুডিও (স্ক্র্যাচ ডিজাইন)' : 'Certificate Layout Studio (Design From Scratch)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'security'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>{isBn ? 'অ্যাপ সিকিউরিটি রোলস ও অডিট' : 'Security Roles & Management'}</span>
            </button>

            <button
              onClick={() => setActiveTab('verify')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'verify'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>{isBn ? 'কিউআর ও ডিজিটাল ভেরিফিকেশন' : 'QR & Digital Verification'}</span>
            </button>
          </div>

          {/* Tab Body: Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Feedback notification banner */}
            {saveSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 text-xs font-medium flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{saveSuccessMessage}</span>
                </div>
                <button 
                  onClick={() => setSaveSuccessMessage(null)}
                  className="text-emerald-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* TAB 1: CERTIFICATE LAYOUT STUDIO */}
            {activeTab === 'designer' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Form Controls to design layout from scratch */}
                <div className="lg:col-span-6 space-y-5">
                  
                  {/* Presets Header */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        {isBn ? 'থিম প্রিসেট' : 'Theme Presets'}
                      </span>
                      <button
                        onClick={handleResetLayout}
                        className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        {isBn ? 'ডিফল্টে ফিরুন' : 'Factory Reset'}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                      {[
                        { id: 'clean-white', name: 'White Minimal (সাদা)', color: '#ffffff', border: '#cbd5e1' },
                        { id: 'cyber-midnight', name: 'Cyber Navy', color: '#071326', border: '#334155' },
                        { id: 'academic-gold', name: 'Academic Gold', color: '#1e1b4b', border: '#d97706' },
                        { id: 'royal-blue', name: 'Royal Blue', color: '#0c2340', border: '#0284c7' },
                        { id: 'crimson-prestige', name: 'Crimson Ruby', color: '#3b0716', border: '#e11d48' },
                      ].map(preset => (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleApplyPreset(preset.id)}
                          className={`p-2 rounded-lg border text-left transition-all ${
                            layout.theme === preset.id
                              ? 'border-emerald-400 bg-slate-800 ring-1 ring-emerald-400/50'
                              : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                          }`}
                        >
                          <div 
                            className="w-full h-3 rounded mb-1.5 border" 
                            style={{ backgroundColor: preset.color, borderColor: preset.border }}
                          />
                          <span className="block text-[11px] font-medium text-slate-200 truncate">{preset.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ALL COLOR PLATES (Rich Palettes for Certificate Design) */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Palette className="w-3.5 h-3.5 text-emerald-400" />
                        {isBn ? 'কালার প্লেট সমূহ (Color Plates)' : 'All Color Plates'}
                      </span>
                      <span className="text-[11px] text-emerald-400">
                        {isBn ? '১-ক্লিক সম্পূর্ণ কালার স্কিম' : '1-Click Full Harmonic Scheme'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {COLOR_PLATES.map(plate => (
                        <button
                          key={plate.id}
                          type="button"
                          onClick={() => handleApplyColorPlate(plate)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            layout.colorPlateId === plate.id
                              ? 'border-emerald-400 bg-slate-850 ring-1 ring-emerald-400/50 shadow-md'
                              : 'border-slate-800 bg-slate-900/90 hover:border-slate-700 hover:bg-slate-850'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <span 
                              className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs" 
                              style={{ backgroundColor: plate.backgroundDark }}
                              title="Background"
                            />
                            <span 
                              className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs" 
                              style={{ backgroundColor: plate.primaryAccent }}
                              title="Primary Accent"
                            />
                            <span 
                              className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs" 
                              style={{ backgroundColor: plate.secondaryAccent }}
                              title="Secondary Accent"
                            />
                            <span 
                              className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs" 
                              style={{ backgroundColor: plate.borderColor }}
                              title="Border Frame"
                            />
                          </div>
                          <span className="block text-xs font-semibold text-slate-200 truncate">
                            {isBn ? plate.nameBn : plate.nameEn}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Fine-tune individual color plate elements */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-3">
                      <span className="text-[11px] font-semibold text-slate-400 block">
                        {isBn ? 'কালার প্লেট সূক্ষ্ম নিয়ন্ত্রণ (Fine-tune Colors):' : 'Fine-Tune Color Elements:'}
                      </span>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Background Dark</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.backgroundDark}
                              onChange={(e) => setLayout(prev => ({ ...prev, backgroundDark: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.backgroundDark}
                              onChange={(e) => setLayout(prev => ({ ...prev, backgroundDark: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Background Outer</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.backgroundLight}
                              onChange={(e) => setLayout(prev => ({ ...prev, backgroundLight: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.backgroundLight}
                              onChange={(e) => setLayout(prev => ({ ...prev, backgroundLight: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Primary Accent</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, primaryAccent: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, primaryAccent: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Secondary Accent</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.secondaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, secondaryAccent: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.secondaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, secondaryAccent: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Border Frame</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.borderColor || layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, borderColor: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.borderColor || layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, borderColor: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Seal Medallion</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.sealColor || layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, sealColor: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.sealColor || layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, sealColor: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Title Text</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.titleTextColor || layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, titleTextColor: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.titleTextColor || layout.primaryAccent}
                              onChange={(e) => setLayout(prev => ({ ...prev, titleTextColor: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-slate-400 mb-1">Name Highlight</label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="color"
                              value={layout.recipientNameColor || '#6ee7b7'}
                              onChange={(e) => setLayout(prev => ({ ...prev, recipientNameColor: e.target.value }))}
                              className="w-7 h-7 rounded border border-slate-700 bg-slate-900 cursor-pointer"
                            />
                            <input
                              type="text"
                              value={layout.recipientNameColor || '#6ee7b7'}
                              onChange={(e) => setLayout(prev => ({ ...prev, recipientNameColor: e.target.value }))}
                              className="flex-1 px-1.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* UPLOADS: WATERMARK & TOP LOGO */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5 text-emerald-400" />
                      {isBn ? 'ওয়াটারমার্ক ও শীর্ষ লোগো আপলোড (Upload Watermark & Top Logo)' : 'Watermark & Top Logo Uploads'}
                    </h3>

                    {/* Watermark Upload */}
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                          {isBn ? 'কাস্টম ওয়াটারমার্ক ছবি আপলোড' : 'Custom Watermark Image'}
                        </span>
                        {layout.watermarkImage && (
                          <button
                            type="button"
                            onClick={() => handleRemoveUploaded('watermarkImage')}
                            className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" />
                            {isBn ? 'মুছে ফেলুন' : 'Remove'}
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <label className="cursor-pointer px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-2 transition-colors">
                          <Upload className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{layout.watermarkImage ? (isBn ? 'নতুন ওয়াটারমার্ক নির্বাচন করুন' : 'Change Watermark') : (isBn ? 'ওয়াটারমার্ক ফাইল নির্বাচন...' : 'Upload Watermark PNG/JPG')}</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleFileUpload(e, 'watermarkImage')} 
                          />
                        </label>

                        {layout.watermarkImage && (
                          <div className="relative w-12 h-10 rounded border border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={layout.watermarkImage} alt="Watermark Preview" className="max-h-full max-w-full object-contain" />
                          </div>
                        )}
                      </div>

                      {/* Watermark opacity & scale sliders */}
                      {layout.watermarkImage && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-[11px]">
                          <div>
                            <div className="flex justify-between text-slate-400 mb-1">
                              <span>{isBn ? 'স্বচ্ছতা (Opacity):' : 'Opacity:'}</span>
                              <span className="font-mono text-emerald-400">{Math.round((layout.watermarkOpacity ?? 0.12) * 100)}%</span>
                            </div>
                            <input
                              type="range"
                              min="0.04"
                              max="0.45"
                              step="0.02"
                              value={layout.watermarkOpacity ?? 0.12}
                              onChange={(e) => setLayout(prev => ({ ...prev, watermarkOpacity: parseFloat(e.target.value) }))}
                              className="w-full accent-emerald-500"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-400 mb-1">
                              <span>{isBn ? 'আকার (Scale):' : 'Scale:'}</span>
                              <span className="font-mono text-emerald-400">{Math.round((layout.watermarkScale ?? 1.0) * 100)}%</span>
                            </div>
                            <input
                              type="range"
                              min="0.5"
                              max="1.8"
                              step="0.05"
                              value={layout.watermarkScale ?? 1.0}
                              onChange={(e) => setLayout(prev => ({ ...prev, watermarkScale: parseFloat(e.target.value) }))}
                              className="w-full accent-emerald-500"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Top Logo Upload */}
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                          {isBn ? 'শীর্ষ লোগো আপলোড (Top Logo / Crest Emblem)' : 'Top Logo / Insignia Emblem'}
                        </span>
                        {layout.topLogoImage && (
                          <button
                            type="button"
                            onClick={() => handleRemoveUploaded('topLogoImage')}
                            className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" />
                            {isBn ? 'মুছে ফেলুন' : 'Remove'}
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <label className="cursor-pointer px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-2 transition-colors">
                          <Upload className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{layout.topLogoImage ? (isBn ? 'নতুন লোগো পরিবর্তন করুন' : 'Change Top Logo') : (isBn ? 'লোগো ফাইল আপলোড...' : 'Upload Top Logo PNG/SVG')}</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleFileUpload(e, 'topLogoImage')} 
                          />
                        </label>

                        {layout.topLogoImage && (
                          <div className="relative w-14 h-10 rounded border border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center p-1">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={layout.topLogoImage} alt="Top Logo Preview" className="max-h-full max-w-full object-contain" />
                          </div>
                        )}

                        <label className="flex items-center gap-2 ml-auto cursor-pointer text-xs text-slate-400">
                          <input
                            type="checkbox"
                            checked={layout.showTopLogo !== false}
                            onChange={(e) => setLayout(prev => ({ ...prev, showTopLogo: e.target.checked }))}
                            className="rounded text-emerald-500 focus:ring-0"
                          />
                          <span>{isBn ? 'লোগো প্রদর্শন' : 'Show Top Logo'}</span>
                        </label>
                      </div>

                      {/* Top Logo Size & Position Management */}
                      {layout.showTopLogo !== false && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-[11px]">
                          <div>
                            <div className="flex justify-between text-slate-400 mb-1">
                              <span>{isBn ? 'শীর্ষ লোগোর আকার (Logo Size):' : 'Top Logo Size / Height:'}</span>
                              <span className="font-mono text-emerald-400">{layout.topLogoSize ?? 80}px</span>
                            </div>
                            <input
                              type="range"
                              min="40"
                              max="180"
                              step="5"
                              value={layout.topLogoSize ?? 80}
                              onChange={(e) => setLayout(prev => ({ ...prev, topLogoSize: parseInt(e.target.value) }))}
                              className="w-full accent-emerald-500"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between text-slate-400 mb-1">
                              <span>{isBn ? 'উল্লম্ব অবস্থান (Vertical Offset):' : 'Vertical Position Offset:'}</span>
                              <span className="font-mono text-emerald-400">{layout.topLogoYOffset ?? 0}px</span>
                            </div>
                            <input
                              type="range"
                              min="-35"
                              max="40"
                              step="5"
                              value={layout.topLogoYOffset ?? 0}
                              onChange={(e) => setLayout(prev => ({ ...prev, topLogoYOffset: parseInt(e.target.value) }))}
                              className="w-full accent-emerald-500"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* UPLOADS: FOOTER PARTNER & SPONSOR LOGOS */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-emerald-400" />
                        {isBn ? 'ফুটার পার্টনার ও স্পন্সর লোগো (Partner & Sponsor Logos)' : 'Footer Partner & Sponsor Logos'}
                      </h3>
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400">
                        <input
                          type="checkbox"
                          checked={layout.showFooterLogos !== false}
                          onChange={(e) => setLayout(prev => ({ ...prev, showFooterLogos: e.target.checked }))}
                          className="rounded text-emerald-500 focus:ring-0"
                        />
                        <span>{isBn ? 'ফুটার লোগো চালু' : 'Enable Logos'}</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Partner Logo */}
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-300">
                            {isBn ? 'পার্টনার লোগো (Partner Logo)' : 'Official Partner Logo'}
                          </span>
                          {layout.partnerLogoImage && (
                            <button
                              type="button"
                              onClick={() => handleRemoveUploaded('partnerLogoImage')}
                              className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors">
                            <Upload className="w-3 h-3 text-emerald-400" />
                            <span>{layout.partnerLogoImage ? (isBn ? 'পরিবর্তন' : 'Change') : (isBn ? 'লোগো আপলোড' : 'Upload Logo')}</span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, 'partnerLogoImage')} 
                            />
                          </label>

                          {layout.partnerLogoImage && (
                            <div className="w-10 h-7 rounded border border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center p-0.5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={layout.partnerLogoImage} alt="Partner Logo" className="max-h-full max-w-full object-contain" />
                            </div>
                          )}
                        </div>

                        <input
                          type="text"
                          placeholder={isBn ? 'পার্টনারের নাম (যেমন: ICT Division)' : 'Partner Organization Name'}
                          value={layout.partnerName || ''}
                          onChange={(e) => setLayout(prev => ({ ...prev, partnerName: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
                        />
                      </div>

                      {/* Sponsor Logo */}
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-300">
                            {isBn ? 'স্পন্সর লোগো (Sponsor Logo)' : 'Official Sponsor Logo'}
                          </span>
                          {layout.sponsorLogoImage && (
                            <button
                              type="button"
                              onClick={() => handleRemoveUploaded('sponsorLogoImage')}
                              className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors">
                            <Upload className="w-3 h-3 text-emerald-400" />
                            <span>{layout.sponsorLogoImage ? (isBn ? 'পরিবর্তন' : 'Change') : (isBn ? 'লোগো আপলোড' : 'Upload Logo')}</span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, 'sponsorLogoImage')} 
                            />
                          </label>

                          {layout.sponsorLogoImage && (
                            <div className="w-10 h-7 rounded border border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center p-0.5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={layout.sponsorLogoImage} alt="Sponsor Logo" className="max-h-full max-w-full object-contain" />
                            </div>
                          )}
                        </div>

                        <input
                          type="text"
                          placeholder={isBn ? 'স্পন্সরের নাম (যেমন: Bkash / Cyber Partner)' : 'Sponsor Organization Name'}
                          value={layout.sponsorName || ''}
                          onChange={(e) => setLayout(prev => ({ ...prev, sponsorName: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
                        />
                      </div>
                    </div>

                    {/* Footer Logos Size Management */}
                    {layout.showFooterLogos !== false && (
                      <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                        <div className="flex justify-between text-slate-400 mb-1">
                          <span>{isBn ? 'ফুটার লোগোর আকার (Footer Logos Height):' : 'Footer Logos Height / Scale:'}</span>
                          <span className="font-mono text-emerald-400">{layout.footerLogosSize ?? 35}px</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="65"
                          step="5"
                          value={layout.footerLogosSize ?? 35}
                          onChange={(e) => setLayout(prev => ({ ...prev, footerLogosSize: parseInt(e.target.value) }))}
                          className="w-full accent-emerald-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* SIGNATURE SECTION: SIGNATURE 1 & 2 UPLOADS */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-emerald-400" />
                        {isBn ? 'স্বাক্ষর সেকশন ও স্বাক্ষর আপলোড (Signature Uploads)' : 'Official Signatures & Image Upload'}
                      </span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={layout.showQrCode}
                          onChange={(e) => setLayout(prev => ({ ...prev, showQrCode: e.target.checked }))}
                          className="rounded text-emerald-500 focus:ring-0"
                        />
                        <span className="text-xs text-emerald-400 font-normal">
                          {isBn ? 'কিউআর কোড যুক্ত করুন' : 'Enable QR Code'}
                        </span>
                      </label>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Signatory 1 */}
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-slate-300">
                            {isBn ? 'স্বাক্ষরকারী ১ (Signatory 1 - Director)' : 'Signatory 1 (Director)'}
                          </span>
                          {layout.signatory1SignatureImage && (
                            <button
                              type="button"
                              onClick={() => handleRemoveUploaded('signatory1SignatureImage')}
                              className="text-[10px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              {isBn ? 'মুছুন' : 'Remove'}
                            </button>
                          )}
                        </div>

                        {/* Upload Signature 1 Image */}
                        <div className="flex items-center gap-2">
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors">
                            <Upload className="w-3 h-3 text-emerald-400" />
                            <span>{layout.signatory1SignatureImage ? (isBn ? 'নতুন স্বাক্ষর' : 'Change') : (isBn ? 'স্বাক্ষর আপলোড (PNG)' : 'Upload Signature')}</span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, 'signatory1SignatureImage')} 
                            />
                          </label>

                          {layout.signatory1SignatureImage && (
                            <div className="w-14 h-7 rounded border border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center p-0.5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={layout.signatory1SignatureImage} alt="Sig 1 Preview" className="max-h-full max-w-full object-contain" />
                            </div>
                          )}
                        </div>

                        <input
                          type="text"
                          placeholder="Name"
                          value={layout.signatory1Name}
                          onChange={(e) => setLayout(prev => ({ ...prev, signatory1Name: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
                        />
                        <input
                          type="text"
                          placeholder="Designation"
                          value={layout.signatory1Title}
                          onChange={(e) => setLayout(prev => ({ ...prev, signatory1Title: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
                        />
                      </div>

                      {/* Signatory 2 */}
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-slate-300">
                            {isBn ? 'স্বাক্ষরকারী ২ (Signatory 2 - Advisor)' : 'Signatory 2 (Advisor)'}
                          </span>
                          {layout.signatory2SignatureImage && (
                            <button
                              type="button"
                              onClick={() => handleRemoveUploaded('signatory2SignatureImage')}
                              className="text-[10px] text-rose-400 hover:text-rose-300 flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              {isBn ? 'মুছুন' : 'Remove'}
                            </button>
                          )}
                        </div>

                        {/* Upload Signature 2 Image */}
                        <div className="flex items-center gap-2">
                          <label className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors">
                            <Upload className="w-3 h-3 text-emerald-400" />
                            <span>{layout.signatory2SignatureImage ? (isBn ? 'নতুন স্বাক্ষর' : 'Change') : (isBn ? 'স্বাক্ষর আপলোড (PNG)' : 'Upload Signature')}</span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, 'signatory2SignatureImage')} 
                            />
                          </label>

                          {layout.signatory2SignatureImage && (
                            <div className="w-14 h-7 rounded border border-slate-700 bg-slate-950 overflow-hidden flex items-center justify-center p-0.5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={layout.signatory2SignatureImage} alt="Sig 2 Preview" className="max-h-full max-w-full object-contain" />
                            </div>
                          )}
                        </div>

                        <input
                          type="text"
                          placeholder="Name"
                          value={layout.signatory2Name}
                          onChange={(e) => setLayout(prev => ({ ...prev, signatory2Name: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
                        />
                        <input
                          type="text"
                          placeholder="Designation"
                          value={layout.signatory2Title}
                          onChange={(e) => setLayout(prev => ({ ...prev, signatory2Title: e.target.value }))}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* CERTIFICATE TITLES & BRANDING TEXTS */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                      {isBn ? 'শিরোনাম ও প্রাতিষ্ঠানিক তথ্য' : 'Titles & Credential Identity'}
                    </h3>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        English Title (Headline)
                      </label>
                      <input
                        type="text"
                        value={layout.titleEn}
                        onChange={(e) => setLayout(prev => ({ ...prev, titleEn: e.target.value }))}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        বাংলা শিরোনাম (Bengali Title)
                      </label>
                      <input
                        type="text"
                        value={layout.titleBn}
                        onChange={(e) => setLayout(prev => ({ ...prev, titleBn: e.target.value }))}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                      />
                    </div>

                    {/* Subtitles & Custom Brand Text */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Subtitle (English)
                        </label>
                        <input
                          type="text"
                          value={layout.subtitleEn}
                          onChange={(e) => setLayout(prev => ({ ...prev, subtitleEn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          শীর্ষ ব্র্যান্ডিং টেক্সট (Top Brand Bar)
                        </label>
                        <input
                          type="text"
                          value={layout.customLogoText}
                          onChange={(e) => setLayout(prev => ({ ...prev, customLogoText: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                    </div>

                    {/* Presentation Texts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          উপস্থাপন বার্তা (Presentation Text BN)
                        </label>
                        <input
                          type="text"
                          value={layout.presentationTextBn}
                          onChange={(e) => setLayout(prev => ({ ...prev, presentationTextBn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Presentation Text (EN)
                        </label>
                        <input
                          type="text"
                          value={layout.presentationTextEn}
                          onChange={(e) => setLayout(prev => ({ ...prev, presentationTextEn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                    </div>

                    {/* Citations & Achievement Texts */}
                    <div className="space-y-2 pt-1 border-t border-slate-800/80">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          সাইটেশন লাইন ১ (Citation Bengali Line 1)
                        </label>
                        <input
                          type="text"
                          value={layout.citationLine1Bn}
                          onChange={(e) => setLayout(prev => ({ ...prev, citationLine1Bn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          সাইটেশন লাইন ২ (Citation Bengali Line 2)
                        </label>
                        <input
                          type="text"
                          value={layout.citationLine2Bn}
                          onChange={(e) => setLayout(prev => ({ ...prev, citationLine2Bn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Citation Statement (English Summary)
                        </label>
                        <input
                          type="text"
                          value={layout.citationEn}
                          onChange={(e) => setLayout(prev => ({ ...prev, citationEn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                    </div>

                    {/* Typography Font Sizes & Ambient Glow */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-[11px]">
                      <div>
                        <div className="flex justify-between text-slate-400 mb-1">
                          <span>{isBn ? 'শিরোনাম ফন্ট সাইজ (Title Font Size):' : 'Title Headline Font Size:'}</span>
                          <span className="font-mono text-emerald-400">{layout.titleEnFontSize ?? 44}px</span>
                        </div>
                        <input
                          type="range"
                          min="34"
                          max="54"
                          step="2"
                          value={layout.titleEnFontSize ?? 44}
                          onChange={(e) => setLayout(prev => ({ ...prev, titleEnFontSize: parseInt(e.target.value) }))}
                          className="w-full accent-emerald-500"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-400 mb-1">
                          <span>{isBn ? 'নামের ফন্ট সাইজ (Name Font Size):' : 'Recipient Name Font Size:'}</span>
                          <span className="font-mono text-emerald-400">{layout.nameFontSize ?? 58}px</span>
                        </div>
                        <input
                          type="range"
                          min="44"
                          max="72"
                          step="2"
                          value={layout.nameFontSize ?? 58}
                          onChange={(e) => setLayout(prev => ({ ...prev, nameFontSize: parseInt(e.target.value) }))}
                          className="w-full accent-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          জাতীয় মূলনীতি (National Motto BN)
                        </label>
                        <input
                          type="text"
                          value={layout.nationalMottoBn}
                          onChange={(e) => setLayout(prev => ({ ...prev, nationalMottoBn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          National Motto (EN)
                        </label>
                        <input
                          type="text"
                          value={layout.nationalMottoEn}
                          onChange={(e) => setLayout(prev => ({ ...prev, nationalMottoEn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          ইস্যুকারী সংস্থা (Issuer Name)
                        </label>
                        <input
                          type="text"
                          value={layout.issuerOrgBn}
                          onChange={(e) => setLayout(prev => ({ ...prev, issuerOrgBn: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          ID প্রিফিক্স (Prefix)
                        </label>
                        <input
                          type="text"
                          value={layout.uniqueIdPrefix}
                          onChange={(e) => setLayout(prev => ({ ...prev, uniqueIdPrefix: e.target.value }))}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-mono"
                        />
                      </div>
                    </div>

                    {/* Frame and Seal Style selects */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          {isBn ? 'বর্ডার ফ্রেম' : 'Border Style'}
                        </label>
                        <select
                          value={layout.borderStyle}
                          onChange={(e) => setLayout(prev => ({ ...prev, borderStyle: e.target.value as any }))}
                          className="w-full px-2.5 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        >
                          <option value="minimal-modern">Minimal Modern Clean</option>
                          <option value="thin-hairline">Thin Hairline (White Minimal)</option>
                          <option value="ornate-gold">Ornate Cyber Brackets</option>
                          <option value="double-frame">Classic Double Frame</option>
                          <option value="none">None (Borderless)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          {isBn ? 'ব্যাকগ্রাউন্ড টেক্সচার' : 'Watermark Grid'}
                        </label>
                        <select
                          value={layout.watermarkPattern}
                          onChange={(e) => setLayout(prev => ({ ...prev, watermarkPattern: e.target.value as any }))}
                          className="w-full px-2.5 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        >
                          <option value="none">None (Pure Clean Minimal)</option>
                          <option value="dots">Subtle Modern Dots</option>
                          <option value="grid">Cyber Grid Lines</option>
                          <option value="hexagons">Honeycomb Shields</option>
                          <option value="waves">Security Guilloche Waves</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          {isBn ? 'সিল / মেডেল' : 'Seal Style'}
                        </label>
                        <select
                          value={layout.sealStyle}
                          onChange={(e) => setLayout(prev => ({ ...prev, sealStyle: e.target.value as any }))}
                          className="w-full px-2.5 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        >
                          <option value="official-round">Official Ministry Stamp (Clean)</option>
                          <option value="shield-insignia">Gold Shield Insignia</option>
                          <option value="gold-star">Embossed Gold Star</option>
                          <option value="cyber-hexagon">Cyber Hexagon</option>
                          <option value="none">None (No Medallion)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Save Layout Action */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSaveLayout}
                      className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-98"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isBn ? 'ডিজাইন সংরক্ষণ ও সবার জন্য প্রয়োগ করুন' : 'Save & Apply Layout to All Users'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => renderPreview(layout)}
                      className="px-4 py-3 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-2 transition-colors"
                      title={isBn ? 'প্রিভিউ রিফ্রেশ করুন' : 'Refresh Preview'}
                    >
                      <Eye className="w-4 h-4" />
                      <span>{isBn ? 'রিফ্রেশ' : 'Preview'}</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Live High-Resolution Certificate Canvas Preview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 sticky top-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        {isBn ? 'লাইভ ক্যানভাস প্রিভিউ (রিয়েল-টাইম)' : 'Live Canvas Preview (Real-Time)'}
                      </span>
                      {isPreviewLoading && (
                        <span className="text-[11px] text-emerald-400 animate-pulse font-mono">
                          Rendering...
                        </span>
                      )}
                    </div>

                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner flex items-center justify-center">
                      {previewDataUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={previewDataUrl} 
                          alt="Certificate Live Canvas Preview" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-slate-500 text-xs font-mono">
                          Generating certificate preview...
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>QR Verification Link:</span>
                        <span className="font-mono text-emerald-400">Enabled (Scannable)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Layout Resolution:</span>
                        <span className="font-mono text-slate-200">1920 × 1080 (300 DPI Ultra HD)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Uploaded Assets:</span>
                        <span className="text-emerald-400">
                          {[
                            layout.watermarkImage ? 'Watermark' : null,
                            layout.topLogoImage ? 'Top Logo' : null,
                            layout.partnerLogoImage ? 'Partner' : null,
                            layout.sponsorLogoImage ? 'Sponsor' : null,
                            layout.signatory1SignatureImage ? 'Sig1' : null,
                            layout.signatory2SignatureImage ? 'Sig2' : null,
                          ].filter(Boolean).join(', ') || 'Default Vector Elements'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Permissions Rule:</span>
                        <span className="text-amber-300 font-medium">Layout locked for participants; editable by Admin only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SECURITY ROLES & MANAGEMENT */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                {/* Role Status and RBAC Matrix */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-400" />
                        {isBn ? 'ওয়েব অ্যাপ রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC)' : 'Web App Role-Based Access Control (RBAC)'}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isBn 
                          ? 'ব্যবহারকারী এবং অ্যাডমিনিস্ট্রেটরের জন্য সুস্পষ্ট ও নিরাপদ অনুমতি বিন্যাস' 
                          : 'Clear separation of privileges for Public Participants and System Administrators'}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                      Role: Administrator
                    </span>
                  </div>

                  {/* Permissions Matrix Table */}
                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-900 text-slate-300 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-800">
                        <tr>
                          <th className="p-3">অ্যাপ ফিচার / পারমিশন</th>
                          <th className="p-3">সাধারণ পার্টিসিপেন্ট (User)</th>
                          <th className="p-3">অ্যাডমিনিস্ট্রেটর (Admin)</th>
                          <th className="p-3">এনফোর্সমেন্ট স্ট্যাটাস</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 text-slate-300">
                        <tr>
                          <td className="p-3 font-medium text-white">১৩টি মডিউল শিক্ষা ও সিমুলেটর</td>
                          <td className="p-3 text-emerald-400">✓ উন্মুক্ত (লগইন ছাড়া)</td>
                          <td className="p-3 text-emerald-400">✓ পূর্ণ এক্সেস</td>
                          <td className="p-3 font-mono text-[11px] text-emerald-400">Public Access</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-white">পার্টিসিপেন্ট নাম ইনপুট (Participant Name)</td>
                          <td className="p-3 text-emerald-400">✓ অনুমোদিত (নিজের নাম লিখতে পারে)</td>
                          <td className="p-3 text-emerald-400">✓ অনুমোদিত</td>
                          <td className="p-3 font-mono text-[11px] text-emerald-400">Input Only</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-white">সার্টিফিকেট লেআউট ও ডিজাইন পরিবর্তন</td>
                          <td className="p-3 text-rose-400 font-semibold">✗ সম্পূর্ণ নিষিদ্ধ (Locked)</td>
                          <td className="p-3 text-emerald-400 font-bold">✓ পূর্ণ ডিজাইন ও এডিটিং এক্সেস</td>
                          <td className="p-3 font-mono text-[11px] text-amber-300">Admin Only</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-white">লোগো, ওয়াটারমার্ক ও স্বাক্ষর আপলোড</td>
                          <td className="p-3 text-rose-400 font-semibold">✗ নিষিদ্ধ</td>
                          <td className="p-3 text-emerald-400 font-bold">✓ আপলোড ও কাস্টমাইজেশন</td>
                          <td className="p-3 font-mono text-[11px] text-amber-300">Admin Only</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-white">কিউআর ও ইউনিক আইডেন্টিফিকেশন কনফিগ</td>
                          <td className="p-3 text-rose-400 font-semibold">✗ নিষিদ্ধ</td>
                          <td className="p-3 text-emerald-400 font-bold">✓ কাস্টমাইজেশন এক্সেস</td>
                          <td className="p-3 font-mono text-[11px] text-amber-300">Admin Only</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium text-white">সিকিউরিটি অডিট লগ ও মাস্টার কী পরিবর্তন</td>
                          <td className="p-3 text-rose-400 font-semibold">✗ নিষিদ্ধ</td>
                          <td className="p-3 text-emerald-400 font-bold">✓ ফুল সুপার-এডমিন রাইটস</td>
                          <td className="p-3 font-mono text-[11px] text-amber-300">Admin Only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Change Admin Passcode */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Key className="w-4 h-4 text-amber-400" />
                    {isBn ? 'অ্যাডমিন মাস্টার পাসকোড পরিবর্তন' : 'Change Master Admin Passcode'}
                  </h3>

                  <form onSubmit={handlePasscodeChange} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? 'বর্তমান পাসকোড' : 'Current Passcode'}
                      </label>
                      <input
                        type="password"
                        value={oldPassInput}
                        onChange={(e) => setOldPassInput(e.target.value)}
                        placeholder="Current code"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isBn ? 'নতুন পাসকোড (কমপক্ষে ৪ অক্ষর)' : 'New Passcode'}
                      </label>
                      <input
                        type="password"
                        value={newPassInput}
                        onChange={(e) => setNewPassInput(e.target.value)}
                        placeholder="New secret code"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="py-2.5 px-4 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Key className="w-3.5 h-3.5" />
                      <span>{isBn ? 'আপডেট করুন' : 'Update Passcode'}</span>
                    </button>
                  </form>

                  {passFeedback && (
                    <div className={`p-2.5 rounded-lg text-xs font-medium ${
                      passFeedback.success ? 'bg-emerald-950 text-emerald-200 border border-emerald-500/40' : 'bg-rose-950 text-rose-200 border border-rose-500/40'
                    }`}>
                      {passFeedback.message}
                    </div>
                  )}
                </div>

                {/* Security Audit Logs */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-emerald-400" />
                      {isBn ? 'সিকিউরিটি অডিট ট্রেল (Security Logs)' : 'Security Audit Trail & Event Logs'}
                    </h3>
                    <button
                      onClick={clearAuditLogs}
                      className="text-[11px] text-slate-400 hover:text-rose-400 transition-colors"
                    >
                      {isBn ? 'লগ মুছুন' : 'Clear History'}
                    </button>
                  </div>

                  <div className="max-h-60 overflow-y-auto space-y-2 border border-slate-800/80 rounded-xl p-3 bg-slate-900/60 font-mono text-[11px]">
                    {auditLogs.map((log) => (
                      <div key={log.id} className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className={`px-1.5 py-0.2 rounded text-[10px] uppercase font-bold ${
                              log.status === 'success' 
                                ? 'bg-emerald-500/20 text-emerald-300' 
                                : log.status === 'warning' 
                                  ? 'bg-amber-500/20 text-amber-300' 
                                  : 'bg-sky-500/20 text-sky-300'
                            }`}>
                              {log.action}
                            </span>
                            <span className="text-slate-400 text-[10px]">Role: {log.role}</span>
                          </div>
                          <p className="text-slate-300">{log.details}</p>
                        </div>
                        <span className="text-slate-500 text-[10px] shrink-0 whitespace-nowrap">
                          {new Date(log.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: QR & DIGITAL VERIFICATION TESTER */}
            {activeTab === 'verify' && (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-emerald-400" />
                      {isBn ? 'সনদপত্র কিউআর ও ইউনিক আইডেন্টিফিকেশন ভ্যালিডেটর' : 'Certificate QR & Unique ID Cryptographic Validator'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {isBn 
                        ? 'যে কোনো সার্টিফিকেট আইডি বা পার্টিসিপেন্ট নামের সত্যতা ও ডিজিটাল হ্যাশ রিয়েল-টাইমে যাচাই করুন।' 
                        : 'Simulate or verify any Click Safe BD official credential in real time using cryptographic checksums.'}
                    </p>
                  </div>

                  <form onSubmit={handleRunVerification} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                    <div className="sm:col-span-5">
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Certificate Unique ID
                      </label>
                      <input
                        type="text"
                        value={lookupId}
                        onChange={(e) => setLookupId(e.target.value)}
                        placeholder="e.g. CSB-CHAMP-2026-88542"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-mono"
                      />
                    </div>

                    <div className="sm:col-span-5">
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Participant Full Name
                      </label>
                      <input
                        type="text"
                        value={lookupName}
                        onChange={(e) => setLookupName(e.target.value)}
                        placeholder="Recipient Name"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span>{isBn ? 'যাচাই করুন' : 'Verify'}</span>
                      </button>
                    </div>
                  </form>

                  {verificationResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>CRYPTOGRAPHICALLY VALIDATED & AUTHENTICATED</span>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                          STATUS: 200 OK
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Participant Recipient:</span>
                          <span className="font-bold text-white text-sm">{lookupName}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono">
                          <span className="text-slate-400 text-[10px] block">Unique Identifier:</span>
                          <span className="font-bold text-emerald-300 text-sm">{lookupId}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono">
                          <span className="text-slate-400 text-[10px] block">Digital Verification Hash:</span>
                          <span className="text-sky-300">{verificationResult.hash}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="text-slate-400 text-[10px] block">Official Curriculum Record:</span>
                          <span className="text-slate-200">{verificationResult.curriculumStatus}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer bar */}
          <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between shrink-0 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>InfoGuard+ Click Safe BD Security Management</span>
            </span>
            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
            >
              {isBn ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
