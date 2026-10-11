'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import Leaderboard from './Leaderboard';

export default function LeaderboardModal() {
  const { isLeaderboardModalOpen, setIsLeaderboardModalOpen } = useProgress();

  if (!isLeaderboardModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsLeaderboardModalOpen(false)}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl z-10 my-auto custom-scrollbar"
        >
          {/* Close button */}
          <div className="sticky top-3 right-3 z-30 flex justify-end px-4 pt-2">
            <button
              onClick={() => setIsLeaderboardModalOpen(false)}
              className="p-2 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 shadow-md"
              aria-label="Close leaderboard modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-2 pb-6 px-3 sm:px-6">
            <Leaderboard isModalView={true} onCloseModal={() => setIsLeaderboardModalOpen(false)} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
