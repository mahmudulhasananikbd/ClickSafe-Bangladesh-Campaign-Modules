'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, ArrowRight, ArrowLeft, BookmarkCheck, Sparkles } from 'lucide-react';
import { useProgress, MODULE_LIST } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import ModuleQuiz from '@/components/ModuleQuiz';

interface ModuleProgressFooterProps {
  currentModuleId: string;
}

export default function ModuleProgressFooter({ currentModuleId }: ModuleProgressFooterProps) {
  const { isCompleted, toggleCompleted, markCompleted, setLastVisited } = useProgress();
  const { isBn } = useLanguage();

  const currentIndex = MODULE_LIST.findIndex(m => m.id === currentModuleId);
  const currentModule = MODULE_LIST[currentIndex];
  if (!currentModule) return null;

  const prevModule = currentIndex > 0 ? MODULE_LIST[currentIndex - 1] : null;
  const nextModule = currentIndex < MODULE_LIST.length - 1 ? MODULE_LIST[currentIndex + 1] : null;
  const done = isCompleted(currentModule.id);

  const handleNext = () => {
    if (nextModule) {
      // Mark current as completed if not already, or just move
      const nextEl = document.getElementById(nextModule.sectionId);
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setLastVisited(nextModule.id);
      }
    }
  };

  const handlePrev = () => {
    if (prevModule) {
      const prevEl = document.getElementById(prevModule.sectionId);
      if (prevEl) {
        prevEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setLastVisited(prevModule.id);
      }
    }
  };

  return (
    <div className="w-full">
      {/* Interactive Lightweight Quiz Component (3 Random Questions tailored to this module) */}
      <ModuleQuiz moduleId={currentModule.id} />

      {/* Module Completion & Navigation Bar */}
      <div className="mt-4 pt-5 border-t border-slate-800/80 bg-slate-900/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Complete toggle checkbox button */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button
          onClick={() => toggleCompleted(currentModule.id)}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-sm ${
            done
              ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 hover:bg-emerald-900/80'
              : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:border-emerald-500/50 hover:text-white'
          }`}
          title={isBn ? 'মডিউল সম্পন্ন হিসেবে চিহ্নিত করুন' : 'Toggle module completion'}
        >
          {done ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="w-4 h-4 text-slate-500 shrink-0" />
          )}
          <span>
            {done
              ? (isBn ? `মডিউল ${currentModule.numberBn} সম্পন্ন হয়েছে` : `Module ${currentModule.numberEn} Completed`)
              : (isBn ? `মডিউল ${currentModule.numberBn} সম্পন্ন চিহ্নিত করুন` : `Mark Module ${currentModule.numberEn} as Completed`)}
          </span>
        </button>

        {done && (
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
            <Sparkles className="w-3 h-3" />
            <span>{isBn ? 'সংরক্ষিত' : 'Saved'}</span>
          </span>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        {prevModule && (
          <button
            onClick={handlePrev}
            className="px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">
              {isBn ? `মডিউল ${prevModule.numberBn}` : `M${prevModule.numberEn}`}
            </span>
          </button>
        )}

        {nextModule ? (
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white border border-slate-700 hover:border-emerald-500 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group"
          >
            <span>
              {isBn ? `পরবর্তী: মডিউল ${nextModule.numberBn}` : `Next: Module ${nextModule.numberEn}`}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <a
            href="#pledge"
            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>{isBn ? 'চূড়ান্ত সনদ ও শপথ' : 'Final Pledge & Certificate'}</span>
          </a>
        )}
      </div>
    </div>
  </div>
  );
}
