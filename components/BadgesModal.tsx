'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, CheckCircle2, Lock, Sparkles, Trophy, ShieldCheck, ExternalLink } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { BadgeIcon } from '@/components/BadgeIcon';

export default function BadgesModal() {
  const { 
    isBadgesModalOpen, 
    setIsBadgesModalOpen, 
    allBadges, 
    unlockedBadgeIds,
    isBadgeUnlocked,
    getBadgeProgress,
    resumeJourney,
    modules,
    setIsCertificateModalOpen,
    isAllModulesCompleted,
    setIsLeaderboardModalOpen
  } = useProgress();

  const { isBn } = useLanguage();

  if (!isBadgesModalOpen) return null;

  const unlockedCount = unlockedBadgeIds.length;
  const totalBadges = allBadges.length;
  const percentage = Math.round((unlockedCount / totalBadges) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsBadgesModalOpen(false)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-b from-slate-850 to-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <Trophy className="w-4 h-4" />
                <span>{isBn ? 'ডিজিটাল সম্মাননা ও মেডেল' : 'Achievements & Medals'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {isBn ? 'আপনার অর্জিত সাইবার ব্যাজ' : 'Your Cyber Defense Badges'}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {isBn 
                  ? 'প্রতিটি নির্দিষ্ট মডিউল সম্পন্ন করার মাধ্যমে নতুন মেডেল ও স্বীকৃতি অর্জন করুন।'
                  : 'Complete specific modules to unlock defensive medals and master cybersecurity skills.'}
              </p>
            </div>

            {/* Score pill & Close button */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs text-amber-300/80 font-medium">
                    {isBn ? 'অর্জিত মেডেল' : 'Unlocked'}
                  </div>
                  <div className="text-sm font-bold text-amber-400 font-mono">
                    {unlockedCount} / {totalBadges} ({percentage}%)
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsBadgesModalOpen(false)}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allBadges.map((badge) => {
                const unlocked = isBadgeUnlocked(badge.id);
                const progress = getBadgeProgress(badge.id);

                return (
                  <div
                    key={badge.id}
                    className={`relative p-5 rounded-2xl border transition-all ${
                      unlocked
                        ? 'bg-slate-850/90 border-slate-700 shadow-lg shadow-black/20'
                        : 'bg-slate-900/60 border-slate-800/80 opacity-75'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                          unlocked
                            ? `bg-gradient-to-br ${badge.bgGradient} shadow-md`
                            : 'bg-slate-800/80 border-slate-700/60 text-slate-500'
                        }`}
                      >
                        {unlocked ? (
                          <BadgeIcon name={badge.iconName} className="w-7 h-7" />
                        ) : (
                          <Lock className="w-6 h-6 text-slate-500" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-base font-bold truncate ${unlocked ? 'text-white' : 'text-slate-300'}`}>
                            {isBn ? badge.titleBn : badge.titleEn}
                          </h4>
                          {unlocked ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                              {isBn ? 'অর্জিত' : 'Unlocked'}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full shrink-0">
                              {progress.current}/{progress.total}
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {isBn ? badge.descriptionBn : badge.descriptionEn}
                        </p>

                        {/* Requirements list */}
                        <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                          <div className="text-[11px] text-slate-400">
                            <span className="text-slate-500 mr-1.5">{isBn ? 'প্রয়োজনীয়:' : 'Req:'}</span>
                            {badge.requiredModuleIds.map((modId) => {
                              const mod = modules.find(m => m.id === modId);
                              return (
                                <span
                                  key={modId}
                                  className="inline-block bg-slate-800/90 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-mono mr-1"
                                >
                                  {mod ? (isBn ? `ম${mod.numberBn}` : `M${mod.numberEn}`) : modId}
                                </span>
                              );
                            })}
                          </div>

                          {badge.id === 'grand_champion' && (
                            <button
                              onClick={() => {
                                setIsBadgesModalOpen(false);
                                setIsCertificateModalOpen(true);
                              }}
                              className="text-[11px] font-semibold text-amber-300 hover:text-amber-200 bg-amber-950/60 hover:bg-amber-900 border border-amber-500/50 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
                            >
                              <Award className="w-3 h-3 text-amber-400" />
                              <span>{isBn ? 'সনদপত্র তৈরি ও ডাউনলোড' : 'Generate Certificate'}</span>
                            </button>
                          )}

                          {!unlocked && badge.id !== 'grand_champion' && (
                            <button
                              onClick={() => {
                                setIsBadgesModalOpen(false);
                                // Resume the first missing required module
                                const firstMissing = badge.requiredModuleIds[0];
                                if (firstMissing) resumeJourney(firstMissing);
                              }}
                              className="text-[11px] font-medium text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-0.5"
                            >
                              <span>{isBn ? 'মডিউল শুরু করুন' : 'Start Module'}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setIsBadgesModalOpen(false);
                  setIsLeaderboardModalOpen(true);
                }}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 transition-colors flex items-center gap-1.5"
              >
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{isBn ? 'জাতীয় লিডারবোর্ড দেখুন' : 'View National Leaderboard'}</span>
              </button>

              <button
                onClick={() => {
                  setIsBadgesModalOpen(false);
                  setIsCertificateModalOpen(true);
                }}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{isBn ? 'চ্যাম্পিয়ন সনদপত্র' : 'Champion Certificate'}</span>
              </button>
            </div>
            
            <button
              onClick={() => setIsBadgesModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              {isBn ? 'বন্ধ করুন' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
