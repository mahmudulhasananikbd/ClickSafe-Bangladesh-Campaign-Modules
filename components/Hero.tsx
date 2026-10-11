'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, ShieldAlert, CheckCircle2, ArrowDown, Users, Lock, Sparkles, Play, Bookmark, Trophy, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';

export default function Hero() {
  const { isBn } = useLanguage();
  const { 
    lastVisitedModule, 
    completedCount, 
    totalCount, 
    progressPercentage, 
    resumeJourney,
    unlockedBadgeIds,
    setIsBadgesModalOpen,
    isAllModulesCompleted,
    setIsCertificateModalOpen,
    isLoaded 
  } = useProgress();

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-850">
      {/* Background glow and subtle cyber grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Campaign Headline and Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Unboxed Metadata Header */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="tracking-wide">CYBERSECURITY AWARENESS 2026</span>
              <span aria-hidden="true">·</span>
              <span>ORGANIZED BY INFOGUARD+</span>
              <span aria-hidden="true">·</span>
              <span>BANGLADESH</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {isBn ? 'ক্লিক সেফ বাংলাদেশ' : 'Click Safe Bangladesh'}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-emerald-400">
                {isBn ? 'সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬' : 'Cyber Security Awareness Campaign 2026'}
              </p>
            </div>

            {/* 4 Core Mantras */}
            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {isBn ? 'থামুন' : 'Stop'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {isBn ? 'ভাবুন' : 'Think'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {isBn ? 'যাচাই করুন' : 'Verify'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {isBn ? 'সুরক্ষিত থাকুন' : 'Stay Safe'}
              </span>
            </div>

            {/* Human Firewall Core Statement (from Slide 10 & 84) */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{isBn ? 'আপনিই Human Firewall' : 'You are the Human Firewall'}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isBn 
                  ? 'প্রযুক্তির ফায়ারওয়াল ডিভাইস বাঁচায়; আপনার সচেতন বিরতি ভুল সিদ্ধান্ত ঠেকায়। ভয় • তাড়া • বিশ্বাস • লোভ — আবেগ চিনুন, থামুন, স্বাধীনভাবে যাচাই করুন।'
                  : 'A technical firewall saves devices; your conscious pause prevents wrong decisions. Fear • Urgency • Trust • Greed — recognize emotions, pause, and independently verify.'}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {lastVisitedModule ? (
                <button
                  onClick={() => resumeJourney(lastVisitedModule.id)}
                  className="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-950 transition-all flex items-center gap-2 whitespace-nowrap active:scale-98"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>
                    {isBn 
                      ? `মডিউল ${lastVisitedModule.numberBn}-এ শেখা চালিয়ে যান (${progressPercentage}%)` 
                      : `Resume Learning: M${lastVisitedModule.numberEn} (${progressPercentage}%)`}
                  </span>
                </button>
              ) : (
                <a
                  href="#roadmap"
                  className="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-950 transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <span>{isBn ? '১৩টি মডিউল শুরু করুন' : 'Start 13 Modules'}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              )}

              <a
                href="#roadmap"
                className="px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                {isBn ? 'পথনকশা দেখুন' : 'View Roadmap'}
              </a>

              <button
                onClick={() => setIsBadgesModalOpen(true)}
                className="px-4 py-3 text-sm font-semibold text-amber-300 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/40 rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 shadow-sm active:scale-98"
                title={isBn ? 'আপনার অর্জিত সাইবার মেডেল দেখুন' : 'View your unlocked medals'}
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>
                  {isBn 
                    ? `মেডেল (${unlockedBadgeIds.length})` 
                    : `Medals (${unlockedBadgeIds.length})`}
                </span>
              </button>

              {/* Cybersecurity Champion Certificate Button */}
              <button
                onClick={() => setIsCertificateModalOpen(true)}
                className={`px-4 py-3 text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 shadow-sm active:scale-98 ${
                  isAllModulesCompleted
                    ? 'text-amber-200 bg-gradient-to-r from-amber-500/30 to-emerald-500/30 border border-amber-400 ring-1 ring-amber-400/50 shadow-amber-900/30'
                    : 'text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80'
                }`}
                title={isBn ? 'সাইবার সিকিউরিটি চ্যাম্পিয়ন সনদপত্র' : 'Cybersecurity Champion Certificate'}
              >
                <Award className={`w-4 h-4 ${isAllModulesCompleted ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{isBn ? 'চ্যাম্পিয়ন সনদ' : 'Champion Certificate'}</span>
              </button>

              <a
                href="#worksheet"
                className="px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
              >
                {isBn ? 'চেকলিস্ট (মুদ্রণযোগ্য)' : 'Checklist (Printable)'}
              </a>
            </div>

            {/* Campaign Proof Indicators */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-400 border-t border-slate-800">
              <div>
                <span className="font-bold text-slate-200 text-sm block">{isBn ? '১৩টি পূর্ণ মডিউল' : '13 Full Modules'}</span>
                <span>{isBn ? 'বাস্তব কেস স্টাডি ও গাইড' : 'Real case studies & guide'}</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="font-bold text-slate-200 text-sm block">{isBn ? '১০০% শিক্ষামূলক' : '100% Educational'}</span>
                <span>{isBn ? 'বাংলাদেশ প্রেক্ষাপট' : 'Bangladesh context'}</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="font-bold text-slate-200 text-sm block">InfoGuard+</span>
                <span>{isBn ? 'জাতীয় সাইবার উদ্যোগ' : 'National Cyber Initiative'}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Human Firewall Graphic Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
              
              {/* Graphic Header / Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Human Firewall Core</h3>
                    <p className="text-[10px] text-slate-400">{isBn ? 'ব্যক্তি থেকে পরিবার ও সমাজ' : 'From Individual to Family & Society'}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950 border border-emerald-800/80 px-2 py-0.5 rounded">
                  Active 2026
                </span>
              </div>

              {/* Visual Diagram: Central Smartphone & Shield Wall */}
              <div className="py-6 flex flex-col items-center justify-center text-center relative">
                {/* Pulsing Shield Ring */}
                <div className="relative w-44 h-44 rounded-full border border-dashed border-emerald-500/40 flex items-center justify-center p-2 mb-4">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-600/30 to-teal-500/20 border border-emerald-500/50 flex flex-col items-center justify-center shadow-inner relative">
                    <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/10 pointer-events-none" />
                    <Shield className="w-12 h-12 text-emerald-400 mb-1" />
                    <span className="text-[11px] font-mono font-bold text-white tracking-widest uppercase">FIREWALL</span>
                    <span className="text-[9px] text-emerald-300 font-medium">YOU ARE THE SHIELD</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">
                    {isBn ? 'মানুষ থেকেই তৈরি হয় সাইবার নিরাপত্তা' : 'Cyber Security Originates with People'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    {isBn 
                      ? 'প্রতারক প্রযুক্তি নয় — মানুষের আবেগ হ্যাক করে। থামুন, ৫ সেকেন্ড ভাবুন, মূল উৎসে যাচাই করুন।'
                      : 'Fraudsters hack human emotions, not systems. Stop, pause 5 seconds, and verify with original sources.'}
                  </p>
                </div>
              </div>

              {/* 3 Pillars Footer in Card */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
                <div className="p-2 rounded bg-slate-900/60 border border-slate-850">
                  <span className="block text-[11px] font-bold text-emerald-400">{isBn ? '১. নিজে শিখুন' : '1. Learn'}</span>
                  <span className="text-[10px] text-slate-400">{isBn ? 'সঠিক সিদ্ধান্ত' : 'Wise decisions'}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-850">
                  <span className="block text-[11px] font-bold text-emerald-400">{isBn ? '২. পরিবারে ছড়ান' : '2. Share'}</span>
                  <span className="text-[10px] text-slate-400">{isBn ? 'নিরাপদ পরিবার' : 'Safe family'}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-850">
                  <span className="block text-[11px] font-bold text-emerald-400">{isBn ? '৩. সমাজকে শক্ত' : '3. Empower'}</span>
                  <span className="text-[10px] text-slate-400">{isBn ? 'ঐক্যবদ্ধ প্রতিরোধ' : 'United defense'}</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
