'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sparkles, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { BadgeIcon } from '@/components/BadgeIcon';

export default function BadgeUnlockToast() {
  const { activeBadgeNotification, dismissBadgeNotification, setIsBadgesModalOpen } = useProgress();
  const { isBn } = useLanguage();

  if (!activeBadgeNotification) return null;

  const { badge } = activeBadgeNotification;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-sm sm:max-w-md w-full"
      >
        <div className="relative overflow-hidden rounded-2xl bg-slate-900/95 border-2 border-amber-400/60 shadow-2xl shadow-amber-950/50 backdrop-blur-md p-4 sm:p-5">
          {/* Animated Glow Backdrop */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={dismissBadgeNotification}
            className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Dismiss badge notification"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-4">
            {/* Medal Icon Badge with Sparkle Animation */}
            <motion.div
              animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${badge.bgGradient} flex items-center justify-center shrink-0 border shadow-md relative`}
            >
              <BadgeIcon name={badge.iconName} className="w-6 h-6 text-amber-300" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
                <Sparkles className="w-2 h-2 text-slate-950" />
              </div>
            </motion.div>

            {/* Badge Info */}
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-0.5">
                <Award className="w-3.5 h-3.5" />
                <span>{isBn ? 'নতুন মেডেল আনলক হয়েছে!' : 'New Medal Unlocked!'}</span>
              </div>
              <h4 className="text-base font-bold text-white tracking-tight">
                {isBn ? badge.titleBn : badge.titleEn}
              </h4>
              <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {isBn ? badge.descriptionBn : badge.descriptionEn}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => {
                    dismissBadgeNotification();
                    setIsBadgesModalOpen(true);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors flex items-center gap-1 shadow-sm active:scale-95"
                >
                  <span>{isBn ? 'সব মেডেল দেখুন' : 'View All Medals'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={dismissBadgeNotification}
                  className="px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {isBn ? 'বন্ধ করুন' : 'Got it'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
