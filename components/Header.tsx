'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  PhoneCall, 
  Languages, 
  Play, 
  CheckCircle2, 
  Award, 
  Trophy, 
  Lock,
  ShieldCheck,
  Search
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import { useSecurity } from '@/context/SecurityContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const { language, toggleLanguage, isBn } = useLanguage();
  const { 
    lastVisitedModule, 
    completedCount, 
    totalCount, 
    resumeJourney,
    unlockedBadgeIds,
    setIsBadgesModalOpen,
    isAllModulesCompleted,
    setIsCertificateModalOpen,
    setIsLeaderboardModalOpen,
    setIsSearchOpen,
  } = useProgress();

  const {
    isAdmin,
    setIsAdminModalOpen,
    setIsAdminAuthModalOpen
  } = useSecurity();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark Logo */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-950/50 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white text-base leading-tight group-hover:text-emerald-400 transition-colors">
              Click Safe BD
            </span>
            <span className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase font-semibold">
              {isBn ? 'সাইবার সচেতনতা ২০২৬' : 'Cyber Awareness 2026'}
            </span>
          </div>
        </a>

        {/* Zone 2: Streamlined Nav Links (Redundancy Removed) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            {isBn ? 'পরিচিতি' : 'Overview'}
          </a>
          <a href="#roadmap" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            {isBn ? '১৩ মডিউল' : '13 Modules'}
          </a>
          <a href="#proficiency-radar" className="hover:text-emerald-400 text-emerald-400/90 font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1">
            <span>{isBn ? 'দক্ষতা রাডার' : 'Defense Radar'}</span>
          </a>
          <a href="#simulator" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            {isBn ? 'সিমুলেটর' : 'Simulators'}
          </a>
          <a href="#worksheet" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            {isBn ? 'চেকলিস্ট' : 'Checklist'}
          </a>
          <a 
            href="#leaderboard" 
            className="hover:text-amber-300 text-amber-400 font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>{isBn ? 'জাতীয় লিডারবোর্ড' : 'Leaderboard'}</span>
          </a>
        </nav>

        {/* Zone 3: Essential Controls & Elevated Administrator Portal */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Global Search Button with ⌘K Badge */}
          <button
            onClick={() => setIsSearchOpen(true)}
            type="button"
            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/60 text-slate-300 hover:text-white transition-all shadow-sm active:scale-95 group"
            title={isBn ? 'মডিউল বা সাইবার টার্ম খুঁজুন (⌘K / Ctrl+K)' : 'Search modules or cyber terms (⌘K / Ctrl+K)'}
            aria-label={isBn ? 'অনুসন্ধান করুন' : 'Search campaign'}
          >
            <Search className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline text-slate-400 group-hover:text-slate-200">
              {isBn ? 'অনুসন্ধান...' : 'Search...'}
            </span>
            <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
              <span>⌘K</span>
            </kbd>
          </button>

          {/* Resume Journey Quick Button if available */}
          {lastVisitedModule && (
            <button
              onClick={() => resumeJourney(lastVisitedModule.id)}
              className="hidden sm:flex px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 hover:border-emerald-400 text-emerald-300 transition-all items-center gap-1.5 shadow-sm shadow-emerald-950/40"
              title={isBn ? `মডিউল ${lastVisitedModule.numberBn}-এ ফিরুন` : `Resume Module ${lastVisitedModule.numberEn}`}
            >
              <Play className="w-3 h-3 fill-emerald-400 text-emerald-400" />
              <span className="font-mono">{isBn ? `ফিরুন: ম${lastVisitedModule.numberBn}` : `Resume M${lastVisitedModule.numberEn}`}</span>
            </button>
          )}

          {/* ADMINISTRATOR ACCESS BUTTON */}
          {isAdmin ? (
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="px-2.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-emerald-950 to-slate-900 hover:from-emerald-900 hover:to-slate-850 border border-emerald-500/60 text-emerald-300 hover:text-emerald-200 transition-all flex items-center gap-1.5 shadow-sm shadow-emerald-950/30 active:scale-95 ring-1 ring-emerald-500/30"
              title={isBn ? 'অ্যাডমিনিস্ট্রেটর পোর্টাল ও সার্টিফিকেট স্টুডিও' : 'Administrator Portal & Certificate Studio'}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">{isBn ? 'এডমিন' : 'Admin'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </button>
          ) : (
            <button
              onClick={() => setIsAdminAuthModalOpen(true)}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              title={isBn ? 'অ্যাডমিনিস্ট্রেটর মোডে লগইন করুন (লেআউট এডিটিং)' : 'Login as Administrator to design certificate layout'}
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[11px] font-semibold">{isBn ? 'এডমিন' : 'Admin'}</span>
            </button>
          )}

          {/* Badges Modal Showcase Button */}
          <button
            onClick={() => setIsBadgesModalOpen(true)}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-850 border border-amber-500/40 hover:border-amber-400 text-amber-300 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            title={isBn ? 'আপনার অর্জিত মেডেল ও ব্যাজ দেখুন' : 'View Your Earned Medals & Badges'}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-amber-300 font-bold">{unlockedBadgeIds.length}</span>
            <span className="hidden xl:inline text-[11px] text-amber-200/80">{isBn ? 'মেডেল' : 'Badges'}</span>
          </button>

          {/* Cybersecurity Champion Certificate Button */}
          <button
            onClick={() => setIsCertificateModalOpen(true)}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
              isAllModulesCompleted
                ? 'bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-400 text-amber-300 ring-1 ring-amber-400/50 animate-pulse'
                : 'bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white'
            }`}
            title={isBn ? 'সাইবার সিকিউরিটি চ্যাম্পিয়ন সনদপত্র দেখুন বা ডাউনলোড করুন' : 'Generate & Download Cybersecurity Champion Certificate'}
          >
            <Award className={`w-3.5 h-3.5 ${isAllModulesCompleted ? 'text-amber-400' : 'text-slate-400'}`} />
            <span className="hidden sm:inline">{isBn ? 'সনদপত্র' : 'Certificate'}</span>
          </button>

          {/* Language Switcher Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            title={isBn ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono">{isBn ? 'EN' : 'বাং'}</span>
          </button>

          {/* Emergency 999 Call Button */}
          <a
            href="tel:999"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            title={isBn ? 'জরুরি জাতীয় সেবা ৯৯৯' : 'Emergency National Service 999'}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isBn ? '৯৯৯' : '999'}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Global Scroll Progress Bar across the top header bottom boundary */}
      <div className="relative w-full h-[3px] bg-slate-900 overflow-hidden">
        <motion.div
          className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.7)]"
          style={{ scaleX, transformOrigin: '0%' }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2.5 text-sm">
          {/* Mobile Global Search Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/60 text-slate-300 hover:text-white text-xs font-medium transition-all group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isBn ? 'মডিউল বা সাইবার টার্ম অনুসন্ধান...' : 'Search modules or cyber terms...'}</span>
            </div>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
              ⌘K
            </kbd>
          </button>

          <div className="pb-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>{isBn ? 'কারিকুলাম অগ্রগতি:' : 'Curriculum Progress:'}</span>
            <span className="text-emerald-400 font-mono font-bold">
              {completedCount}/{totalCount} {isBn ? 'মডিউল' : 'Modules'} ({scrollPercent}%)
            </span>
          </div>

          {/* Navigation Links in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isBn ? 'পরিচিতি' : 'Overview'}
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isBn ? '১৩টি মডিউল' : '13 Modules'}
            </a>
            <a
              href="#proficiency-radar"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:text-white font-medium"
            >
              {isBn ? '🎯 দক্ষতা রাডার' : '🎯 Defense Radar'}
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isBn ? 'সিমুলেটর' : 'Simulators'}
            </a>
            <a
              href="#worksheet"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isBn ? 'চেকলিস্ট' : 'Checklist'}
            </a>
          </div>

          {/* Administrator Action in Mobile Drawer */}
          <button
            onClick={() => {
              if (isAdmin) {
                setIsAdminModalOpen(true);
              } else {
                setIsAdminAuthModalOpen(true);
              }
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/50 text-emerald-300 font-semibold text-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isBn ? 'অ্যাডমিনিস্ট্রেটর পোর্টাল (ডিজাইন স্টুডিও)' : 'Administrator Portal (Design Studio)'}</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 font-bold">
              {isAdmin ? 'ACTIVE' : 'LOGIN'}
            </span>
          </button>

          {/* Leaderboard Button in Mobile Drawer */}
          <button
            onClick={() => {
              setIsLeaderboardModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg bg-slate-950/60 border border-amber-500/40 text-amber-300 font-semibold text-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{isBn ? 'জাতীয় চ্যাম্পিয়ন লিডারবোর্ড' : 'National Champions Leaderboard'}</span>
            </div>
            <span className="text-[10px] font-mono bg-amber-500/20 px-2 py-0.5 rounded text-amber-300 font-bold">
              ১,৪২৮+
            </span>
          </button>

          {/* Certificate Button in Mobile Drawer */}
          <button
            onClick={() => {
              setIsCertificateModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 rounded-lg bg-slate-950/60 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isBn ? 'চ্যাম্পিয়ন সনদপত্র (কিউআর ভেরিফাইড)' : 'Champion Certificate (QR Verified)'}</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300 font-bold">
              {isAllModulesCompleted ? 'VERIFIED' : 'PREVIEW'}
            </span>
          </button>

        </div>
      )}
    </header>
  );
}
