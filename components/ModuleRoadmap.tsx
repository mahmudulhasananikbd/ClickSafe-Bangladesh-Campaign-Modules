'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck, 
  Users, 
  ArrowRight,
  Filter,
  CheckCircle2,
  Circle,
  Play,
  RotateCcw,
  Bookmark,
  Trophy,
  Award,
  Target
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';

interface ModuleItem {
  id: string;
  numberBn: string;
  numberEn: string;
  titleBn: string;
  titleEn: string;
  category: 'core' | 'risk' | 'action' | 'participate';
  targetAnchor: string;
  descriptionBn: string;
  descriptionEn: string;
}

const modules: ModuleItem[] = [
  { id: 'm0', numberBn: '০', numberEn: '0', titleBn: 'স্বাগতম ও প্রস্তুতি', titleEn: 'Welcome & Preparation', category: 'core', targetAnchor: '#module-0', descriptionBn: 'Human Firewall পরিচিতি ও প্রথম ৩০ সেকেন্ড', descriptionEn: 'Human Firewall intro & the crucial first 30 seconds' },
  { id: 'm1', numberBn: '১', numberEn: '1', titleBn: 'কেন আপনি লক্ষ্য', titleEn: 'Why You Are a Target', category: 'core', targetAnchor: '#module-1', descriptionBn: 'ফোনের ট্রেজার ম্যাপ ও ৩টি দ্রুত পরীক্ষা', descriptionEn: 'Digital treasure map & 3 quick phone security tests' },
  { id: 'm2', numberBn: '২', numberEn: '2', titleBn: 'প্রতারকের কৌশল', titleEn: 'Psychological Traps', category: 'risk', targetAnchor: '#module-2', descriptionBn: '৬টি হিউম্যান সাইকোলজি ফাঁদ ও প্রতারণার চক্র', descriptionEn: '6 emotional traps & the 6-stage fraud cycle' },
  { id: 'm3a', numberBn: '৩ক', numberEn: '3A', titleBn: 'স্থানীয় প্রতারণা', titleEn: 'Local Scam Hotspots', category: 'risk', targetAnchor: '#module-3a', descriptionBn: 'বাংলাদেশে ৬টি স্ক্যাম হটস্পট ও যাচাই সংকেত', descriptionEn: '6 common scam hotspots in Bangladesh & how to verify' },
  { id: 'm3', numberBn: '৩', numberEn: '3', titleBn: 'ফিশিং ও ভুয়া লিংক', titleEn: 'Phishing & Fake Links', category: 'risk', targetAnchor: '#module-3', descriptionBn: '৩টি প্রশ্নের ডিসিশন ট্রি ও VirusTotal', descriptionEn: '3-question decision tree & VirusTotal URL analysis' },
  { id: 'm4', numberBn: '৪', numberEn: '4', titleBn: 'পাসওয়ার্ড ও 2FA', titleEn: 'Passwords & 2FA', category: 'action', targetAnchor: '#module-4', descriptionBn: 'দুর্বল বনাম শক্তিশালী পাসওয়ার্ড ও MFA অগ্রাধিকার', descriptionEn: 'Passphrase vs weak password lab & MFA priority pyramid' },
  { id: 'm5', numberBn: '৫', numberEn: '5', titleBn: 'গোপনীয়তা ও পোস্ট', titleEn: 'Social Privacy & Footprint', category: 'action', targetAnchor: '#module-5', descriptionBn: 'সাদিয়ার গল্প, ধাঁধার টুকরো ও ৪টি প্রশ্ন', descriptionEn: 'Vacation posting risks, puzzle pieces & privacy settings' },
  { id: 'm6', numberBn: '৬', numberEn: '6', titleBn: 'ম্যালওয়্যার ও ডিভাইস', titleEn: 'Malware & Device Safety', category: 'action', targetAnchor: '#module-6', descriptionBn: 'লোন অ্যাপ ফাঁদ, QR সংকেত ও Permission Audit', descriptionEn: 'Loan app extortion, QR code warnings & permission audit' },
  { id: 'm7', numberBn: '৭', numberEn: '7', titleBn: 'OTP ও ফাইন্যান্স', titleEn: 'OTP & Finance Defense', category: 'risk', targetAnchor: '#module-7', descriptionBn: 'চাবি কাউকে দিলে দরজা থাকে না & ইজি মানি ফাঁদ', descriptionEn: 'Key metaphor, easy money traps & financial defense' },
  { id: 'm8', numberBn: '৮', numberEn: '8', titleBn: 'AI ও ডিপফেক', titleEn: 'AI & Deepfakes', category: 'risk', targetAnchor: '#module-8', descriptionBn: 'নকল কণ্ঠ, পারিবারিক কোড-ওয়ার্ড ও লাইভ টেস্ট', descriptionEn: 'AI voice clones, family secret code-words & live test' },
  { id: 'm9', numberBn: '৯', numberEn: '9', titleBn: 'সাইবার বুলিং', titleEn: 'Cyberbullying Defense', category: 'action', targetAnchor: '#module-9', descriptionBn: '৪ ধাপের সহায়তা-ঢাল ও সহায়তা-বৃত্ত', descriptionEn: '4-step shield, blackmail defense & circle of support' },
  { id: 'm9a', numberBn: '৭ক', numberEn: '7A', titleBn: 'ডিজিটাল সুস্থতা', titleEn: 'Digital Wellbeing', category: 'participate', targetAnchor: '#module-9a', descriptionBn: '২৪ ঘণ্টা ভারসাম্য ও দিনে একটি ছোট অভ্যাস', descriptionEn: '24-hour balance bar & adopting 1 daily offline micro-habit' },
  { id: 'm10', numberBn: '১০', numberEn: '10', titleBn: 'ভুল হলে করণীয়', titleEn: 'Incident Response', category: 'action', targetAnchor: '#module-10', descriptionBn: '৫মিনিট-৩০মিনিট-২৪ঘণ্টা ইনসিডেন্ট রেসপন্স', descriptionEn: '5min-30min-24hr playbook, GD guidelines & evidence log' },
  { id: 'm11', numberBn: '১১', numberEn: '11', titleBn: 'ব্যক্তিগত পরিকল্পনা', titleEn: 'Personal Security Plan', category: 'core', targetAnchor: '#module-11', descriptionBn: '৩টি সুনির্দিষ্ট কাজ ও STOP-THINK-VERIFY', descriptionEn: '3 tangible security goals & STOP-THINK-VERIFY-PROTECT' },
  { id: 'm12', numberBn: '১২', numberEn: '12', titleBn: 'কুইজ ও শপথ', titleEn: 'Quiz & Pledge', category: 'participate', targetAnchor: '#pledge', descriptionBn: 'রিয়েল-টাইম কুইজ, ডিজিটাল শপথ ও সনদ', descriptionEn: 'Real-time 6-question quiz, digital oath & certificate' },
];

export default function ModuleRoadmap() {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const { isBn } = useLanguage();
  const { 
    isCompleted, 
    toggleCompleted, 
    lastVisitedId, 
    completedCount, 
    totalCount, 
    progressPercentage,
    resumeJourney,
    resetProgress,
    lastVisitedModule,
    unlockedBadgeIds,
    setIsBadgesModalOpen,
    isAllModulesCompleted,
    setIsCertificateModalOpen,
    setIsLeaderboardModalOpen
  } = useProgress();

  const filtered = filterCategory === 'all' 
    ? modules 
    : modules.filter(m => m.category === filterCategory);

  const getCategoryTheme = (cat: ModuleItem['category']) => {
    switch (cat) {
      case 'core':
        return {
          bg: 'bg-sky-950/40 border-sky-600/50 hover:border-sky-400 text-sky-400',
          badge: 'bg-sky-500 text-slate-950',
          border: 'border-sky-500',
          label: isBn ? 'নীল = মূল ধারণা' : 'Blue = Core Concept'
        };
      case 'risk':
        return {
          bg: 'bg-rose-950/40 border-rose-600/50 hover:border-rose-400 text-rose-400',
          badge: 'bg-rose-500 text-white',
          border: 'border-rose-500',
          label: isBn ? 'লাল = ঝুঁকি' : 'Red = Risk'
        };
      case 'action':
        return {
          bg: 'bg-emerald-950/40 border-emerald-600/50 hover:border-emerald-400 text-emerald-400',
          badge: 'bg-emerald-500 text-slate-950',
          border: 'border-emerald-500',
          label: isBn ? 'সবুজ = করণীয়' : 'Green = Action'
        };
      case 'participate':
        return {
          bg: 'bg-amber-950/40 border-amber-600/50 hover:border-amber-400 text-amber-400',
          badge: 'bg-amber-500 text-slate-950',
          border: 'border-amber-500',
          label: isBn ? 'হলুদ = অংশগ্রহণ' : 'Yellow = Participation'
        };
    }
  };

  return (
    <section id="roadmap" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>{isBn ? 'রোডম্যাপ ও পাঠ্যসূচি' : 'Roadmap & Syllabus'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isBn ? 'কর্মশালার পথনকশা — ১৩টি মডিউল' : 'Curriculum Roadmap — 13 Modules'}
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              {isBn 
                ? 'ক্লিক করে সরাসরি যেকোনো মডিউলে চলে যান। প্রতিটি মডিউলে রয়েছে বাস্তব ঘটনা, সঠিক কৌশল ও হ্যান্ডস-অন প্র্যাকটিস।'
                : 'Click to navigate directly to any module. Each module features real case studies, proven defensive tactics, and hands-on exercises.'}
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'all' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isBn ? 'সব মডিউল' : 'All Modules'}
            </button>
            <button
              onClick={() => setFilterCategory('core')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'core' ? 'bg-sky-600 text-white shadow-sm' : 'text-sky-400 hover:text-sky-300'
              }`}
            >
              {isBn ? 'নীল = মূল ধারণা' : 'Blue = Core'}
            </button>
            <button
              onClick={() => setFilterCategory('risk')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'risk' ? 'bg-rose-600 text-white shadow-sm' : 'text-rose-400 hover:text-rose-300'
              }`}
            >
              {isBn ? 'লাল = ঝুঁকি' : 'Red = Risk'}
            </button>
            <button
              onClick={() => setFilterCategory('action')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'action' ? 'bg-emerald-600 text-slate-950 font-bold shadow-sm' : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              {isBn ? 'সবুজ = করণীয়' : 'Green = Action'}
            </button>
            <button
              onClick={() => setFilterCategory('participate')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filterCategory === 'participate' ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' : 'text-amber-400 hover:text-amber-300'
              }`}
            >
              {isBn ? 'হলুদ = অংশগ্রহণ' : 'Yellow = Activity'}
            </button>
          </div>
        </div>

        {/* Interactive Progress Tracking Summary Bar */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white">
                  {isBn ? 'আপনার শেখার অগ্রগতি:' : 'Your Learning Journey:'}
                </span>
                <span className="text-emerald-400 font-mono font-semibold">
                  {isBn 
                    ? `${totalCount}-টির মধ্যে ${completedCount}টি মডিউল সম্পন্ন` 
                    : `${completedCount} of ${totalCount} modules completed`}
                </span>
              </div>
              <span className="font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                {progressPercentage}%
              </span>
            </div>

            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-end md:self-auto shrink-0">
            {/* View Proficiency Radar Button */}
            <a
              href="#proficiency-radar"
              className="px-3.5 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5 active:scale-98"
              title={isBn ? '৬টি সাইবার ডোমেন পারদর্শিতা রাডার চার্ট দেখুন' : 'View 6-Domain Cyber Defense Radar'}
            >
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isBn ? 'দক্ষতা রাডার' : 'Defense Radar'}</span>
            </a>

            {/* View Leaderboard Button */}
            <button
              onClick={() => setIsLeaderboardModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5 active:scale-98"
              title={isBn ? 'জাতীয় ১৩-মডিউল চ্যাম্পিয়ন লিডারবোর্ড দেখুন' : 'View National 13-Module Champions Leaderboard'}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{isBn ? 'লিডারবোর্ড' : 'Leaderboard'}</span>
            </button>

            {/* View Badges Button */}
            <button
              onClick={() => setIsBadgesModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5 active:scale-98"
              title={isBn ? 'আপনার অর্জিত মেডেল ও ব্যাজ দেখুন' : 'View unlocked medals and achievements'}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {isBn 
                  ? `মেডেল (${unlockedBadgeIds.length}/১১)` 
                  : `Medals (${unlockedBadgeIds.length}/11)`}
              </span>
            </button>

            {/* Champion Certificate Button */}
            <button
              onClick={() => setIsCertificateModalOpen(true)}
              className={`px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all shadow-sm flex items-center gap-1.5 active:scale-98 ${
                isAllModulesCompleted
                  ? 'bg-gradient-to-r from-amber-500/30 to-emerald-500/30 border-amber-400 text-amber-200 ring-1 ring-amber-400/50'
                  : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title={isBn ? 'চ্যাম্পিয়ন সনদপত্র দেখুন বা ডাউনলোড করুন' : 'View or download champion certificate'}
            >
              <Award className={`w-3.5 h-3.5 ${isAllModulesCompleted ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>
                {isAllModulesCompleted
                  ? (isBn ? 'সনদপত্র ডাউনলোড' : 'Download Certificate')
                  : (isBn ? 'সনদপত্র প্রিভিউ' : 'Certificate')}
              </span>
            </button>

            {lastVisitedModule && (
              <button
                onClick={() => resumeJourney(lastVisitedModule.id)}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 active:scale-98"
                title={isBn ? 'যেখানে শেষ করেছিলেন সেখান থেকে শুরু করুন' : 'Resume where you left off'}
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>
                  {isBn ? `মডিউল ${lastVisitedModule.numberBn}-এ ফিরুন` : `Resume M${lastVisitedModule.numberEn}`}
                </span>
              </button>
            )}

            {completedCount > 0 && (
              <>
                {showResetConfirm ? (
                  <div className="flex items-center gap-1.5 bg-rose-950/60 border border-rose-500/40 px-2.5 py-1 rounded-xl text-xs">
                    <span className="text-rose-300 text-[11px]">
                      {isBn ? 'মুছে ফেলবেন?' : 'Reset all?'}
                    </span>
                    <button
                      onClick={() => {
                        resetProgress();
                        setShowResetConfirm(false);
                      }}
                      className="text-white bg-rose-600 hover:bg-rose-500 px-2 py-0.5 rounded text-[11px] font-bold"
                    >
                      {isBn ? 'হ্যাঁ' : 'Yes'}
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="text-slate-400 hover:text-white px-1 text-[11px]"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowResetConfirm(true)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 text-xs"
                    title={isBn ? 'অগ্রগতি রিসেট করুন' : 'Reset progress'}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* 13-Module Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filtered.map((item) => {
            const theme = getCategoryTheme(item.category);
            const done = isCompleted(item.id);
            const isCurrent = lastVisitedId === item.id;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between relative group ${theme.bg} ${
                  isCurrent ? 'ring-2 ring-emerald-400/80 shadow-lg shadow-emerald-950/50' : ''
                } ${done ? 'bg-opacity-80' : ''}`}
              >
                {/* Active/Current Marker */}
                {isCurrent && (
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-slate-950 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                    <span>{isBn ? 'বর্তমান' : 'Current'}</span>
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-lg font-extrabold flex items-center justify-center text-sm shadow-sm ${theme.badge}`}>
                        {isBn ? item.numberBn : item.numberEn}
                      </span>
                      {done && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>{isBn ? 'সম্পন্ন' : 'Done'}</span>
                        </span>
                      )}
                    </div>

                    {/* Quick completion toggle button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleCompleted(item.id);
                      }}
                      className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title={done 
                        ? (isBn ? 'অসম্পূর্ণ চিহ্নিত করুন' : 'Mark incomplete') 
                        : (isBn ? 'সম্পন্ন হিসেবে চিহ্নিত করুন' : 'Mark complete')}
                    >
                      {done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-500 hover:text-slate-300" />
                      )}
                    </button>
                  </div>

                  <a 
                    href={item.targetAnchor}
                    className="block group-hover:text-emerald-300 transition-colors"
                  >
                    <h3 className="text-base font-bold text-white line-clamp-1">
                      {isBn ? item.titleBn : item.titleEn}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {isBn ? item.descriptionBn : item.descriptionEn}
                    </p>
                  </a>
                </div>

                <a 
                  href={item.targetAnchor}
                  className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-white"
                >
                  <span>{done ? (isBn ? 'পুনরায় দেখুন' : 'Review Module') : (isBn ? 'অনুশীলন দেখুন' : 'Explore Module')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
