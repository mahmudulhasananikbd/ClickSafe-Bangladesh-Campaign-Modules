'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, ChevronRight, X, RotateCcw, Bookmark, Sparkles, BookOpen, Trophy, Award } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';

export default function ResumeBanner() {
  const { 
    lastVisitedModule, 
    lastVisitedTimestamp, 
    completedModules, 
    completedCount, 
    totalCount, 
    progressPercentage,
    resumeJourney, 
    getNextUncompletedModule,
    unlockedBadgeIds,
    setIsBadgesModalOpen,
    isAllModulesCompleted,
    setIsCertificateModalOpen,
    isLoaded 
  } = useProgress();

  const { isBn } = useLanguage();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(Date.now());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // If not loaded or no progress yet (0 completed and no lastVisitedModule), don't show
  if (!isLoaded || isDismissed) {
    return null;
  }

  const hasProgress = completedCount > 0 || lastVisitedModule !== null;
  if (!hasProgress) {
    return null;
  }

  const targetModule = lastVisitedModule || getNextUncompletedModule();
  if (!targetModule) return null;

  // Format time elapsed
  const getTimeAgo = () => {
    if (!lastVisitedTimestamp || !currentTime) return null;
    const diffMin = Math.round((currentTime - lastVisitedTimestamp) / (1000 * 60));
    if (diffMin < 1) return isBn ? 'এইমাত্র' : 'just now';
    if (diffMin < 60) return isBn ? `${diffMin} মিনিট আগে` : `${diffMin}m ago`;
    const diffHours = Math.round(diffMin / 60);
    if (diffHours < 24) return isBn ? `${diffHours} ঘণ্টা আগে` : `${diffHours}h ago`;
    const diffDays = Math.round(diffHours / 24);
    return isBn ? `${diffDays} দিন আগে` : `${diffDays}d ago`;
  };

  const timeAgo = getTimeAgo();

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-sm sm:max-w-md w-[calc(100vw-2.5rem)]">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized-pill"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className="ml-auto flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-slate-900/95 border border-emerald-500/50 hover:border-emerald-400 text-white shadow-2xl backdrop-blur-md hover:scale-105 transition-all text-xs font-semibold group"
            title={isBn ? 'শেখা চালিয়ে যান' : 'Resume Learning'}
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <Bookmark className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span>
              {isBn ? `মডিউল ${targetModule.numberBn} folytাতুন (${progressPercentage}%)` : `Resume M${targetModule.numberEn} (${progressPercentage}%)`}
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="expanded-card"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/95 border border-emerald-500/40 shadow-2xl shadow-emerald-950/60 backdrop-blur-md flex flex-col gap-3 relative"
          >
            {/* Top row with controls */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-emerald-400">
                  {isBn ? 'পূর্বের অগ্রগতি সংরক্ষিত' : 'SAVED LEARNING JOURNEY'}
                </span>
                {timeAgo && (
                  <span className="text-[10px] text-slate-500 font-mono">
                    · {timeAgo}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 text-xs transition-colors"
                  title={isBn ? 'সংক্ষিপ্ত করুন' : 'Minimize'}
                >
                  <span className="sr-only">Minimize</span>
                  —
                </button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                  title={isBn ? 'বন্ধ করুন' : 'Dismiss'}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Target module details */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {isBn ? 'যেখান থেকে বিরতি নিয়েছিলেন:' : 'Resume where you left off:'}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  {isBn ? `মডিউল ${targetModule.numberBn}` : `M${targetModule.numberEn}`}
                </span>
                <span className="line-clamp-1">
                  {isBn ? targetModule.titleBn : targetModule.titleEn}
                </span>
              </h4>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>
                  {isBn 
                    ? `${totalCount}-টির মধ্যে ${completedCount}টি মডিউল সম্পন্ন` 
                    : `${completedCount} of ${totalCount} modules completed`}
                </span>
                <span className="text-emerald-400 font-bold">{progressPercentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                />
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={() => resumeJourney(targetModule.id)}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-900/30 flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{isBn ? 'শেখা শুরু করুন' : 'Resume Journey'}</span>
              </button>

              <button
                onClick={() => setIsBadgesModalOpen(true)}
                className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-amber-500/30 hover:border-amber-400 text-amber-300 font-semibold text-xs transition-all flex items-center justify-center gap-1 active:scale-98"
                title={isBn ? 'আপনার অর্জিত মেডেল দেখুন' : 'View unlocked medals'}
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{unlockedBadgeIds.length}</span>
              </button>

              {/* Certificate Quick Button */}
              <button
                onClick={() => setIsCertificateModalOpen(true)}
                className={`py-2 px-2.5 rounded-xl border font-semibold text-xs transition-all flex items-center justify-center gap-1 active:scale-98 ${
                  isAllModulesCompleted
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/50'
                    : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-300'
                }`}
                title={isBn ? 'চ্যাম্পিয়ন সনদপত্র দেখুন বা ডাউনলোড করুন' : 'View champion certificate'}
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">{isBn ? 'সনদ' : 'Cert'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
