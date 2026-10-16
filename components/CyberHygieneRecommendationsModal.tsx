'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  Circle, 
  X, 
  ArrowRight, 
  Clock, 
  AlertTriangle, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  RotateCcw,
  BookOpen,
  Key,
  Shield,
  LifeBuoy
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { generateCyberHygieneRecommendations, CyberHygienePlan } from '@/lib/cyberHygieneRecommendations';

export default function CyberHygieneRecommendationsModal() {
  const { 
    isHygieneModalOpen, 
    setIsHygieneModalOpen, 
    completedModules, 
    toggleCompleted, 
    modules 
  } = useProgress();
  const { isBn } = useLanguage();

  const [completedActionIds, setCompletedActionIds] = useState<Record<string, boolean>>({});
  const [isCopied, setIsCopied] = useState(false);

  // Dynamically generate tailored hygiene recommendations based on lowest-scoring categories
  const plan: CyberHygienePlan = useMemo(() => {
    return generateCyberHygieneRecommendations({
      completedModules,
      maxCategoriesToRecommend: 3
    });
  }, [completedModules]);

  const toggleActionDone = useCallback((actionId: string) => {
    setCompletedActionIds(prev => ({
      ...prev,
      [actionId]: !prev[actionId]
    }));
  }, []);

  const totalActions = plan.immediateChecklist.length;
  const doneActionsCount = Object.values(completedActionIds).filter(Boolean).length;
  const actionsProgressPct = totalActions > 0 ? Math.round((doneActionsCount / totalActions) * 100) : 0;

  const handleCopyPlan = useCallback(() => {
    const lines = [
      isBn ? '🛡️ কাস্টম সাইবার হাইজিন অ্যাকশন প্ল্যান (Click Safe BD ২০২৬)' : '🛡️ Custom Cyber-Hygiene Action Plan (Click Safe BD 2026)',
      `\n${isBn ? 'দুর্বলতার সারসংক্ষেপ:' : 'Vulnerability Summary:'}`,
      isBn ? plan.summaryBn : plan.summaryEn,
      `\n${isBn ? 'অগ্রাধিকার পদক্ষেপসমূহ (মোট সময়: ' : 'Priority Action Items (Est. time: '}${plan.totalEstimatedTimeMinutes} ${isBn ? 'মিনিট):' : 'mins):'}`
    ];

    plan.immediateChecklist.forEach((item, idx) => {
      lines.push(`${idx + 1}. [${item.priority.toUpperCase()}] ${isBn ? item.titleBn : item.titleEn}`);
      lines.push(`   ${isBn ? item.actionBn : item.actionEn} (~${item.estimatedMinutes}m)`);
    });

    if (navigator.clipboard) {
      navigator.clipboard.writeText(lines.join('\n')).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2200);
      });
    }
  }, [plan, isBn]);

  if (!isHygieneModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Ambient header glow */}
          <div 
            aria-hidden="true" 
            className="absolute -top-32 -right-32 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
          />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/40 shrink-0">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-amber-400 font-semibold tracking-wider uppercase">
                  {isBn ? 'ব্যক্তিগত নিরাপত্তা চিকিৎসা' : 'Targeted Defense Prescription'}
                </span>
                <span aria-hidden="true">·</span>
                <span>{plan.lowestCategories.length} {isBn ? 'টি দুর্বল ডোমেন চিহ্নিত' : 'Priority Domains Identified'}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">~{plan.totalEstimatedTimeMinutes}m {isBn ? 'সময়' : 'to seal'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0" />
                <span>{isBn ? 'কাস্টম সাইবার হাইজিন অ্যাকশন প্ল্যান' : 'Custom Cyber-Hygiene Action Plan'}</span>
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyPlan}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                title={isBn ? 'প্ল্যানটি কপি করুন' : 'Copy hygiene plan'}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{isBn ? 'কপি হয়েছে' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isBn ? 'কপি' : 'Copy Plan'}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsHygieneModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Dynamic Assessment Synthesis Summary */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-white block">
                  {isBn ? 'মূল্যায়ন ভিত্তিক দুর্বলতা পর্যবেক্ষণ:' : 'Assessment-Driven Vulnerability Diagnosis:'}
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {isBn ? plan.summaryBn : plan.summaryEn}
                </p>
              </div>
            </div>

            {/* Checklist Completion Progress */}
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/70 space-y-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-slate-300">
                  {isBn ? 'হাইজিন চেকলিস্ট বাস্তবায়ন অগ্রগতি:' : 'Hygiene Checklist Execution Progress:'}
                </span>
                <span className="font-mono text-emerald-400 font-bold">
                  {doneActionsCount}/{totalActions} {isBn ? 'সম্পন্ন' : 'completed'} ({actionsProgressPct}%)
                </span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-cyan-400 transition-all duration-300"
                  style={{ width: `${actionsProgressPct}%` }}
                />
              </div>
            </div>

            {/* Lowest-Scoring Categories Deep Dive & Action Items */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                {isBn ? 'সর্বনিম্ন স্কোর পাওয়া ডোমেনসমূহের জন্য সুনির্দিষ্ট সুপারিশ:' : 'Targeted Recommendations for Lowest-Scoring Categories:'}
              </h4>

              {plan.lowestCategories.map((cat, catIdx) => (
                <div 
                  key={cat.categoryId} 
                  className="rounded-2xl bg-slate-800/40 border border-slate-800 p-5 space-y-4"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center font-bold text-xs">
                        #{catIdx + 1}
                      </span>
                      <div>
                        <h5 className="text-base font-bold text-white">
                          {isBn ? cat.categoryNameBn : cat.categoryNameEn}
                        </h5>
                        <span className="text-xs text-rose-400 font-mono">
                          {cat.riskLevel.toUpperCase()} RISK · {isBn ? `বর্তমান স্কোর: ${cat.score}%` : `Current Score: ${cat.score}%`}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 max-w-sm sm:text-right">
                      {isBn ? cat.riskDescriptionBn : cat.riskDescriptionEn}
                    </div>
                  </div>

                  {/* Audit quote */}
                  <div className="text-xs text-slate-400 italic bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                    &ldquo;{isBn ? cat.hygieneAuditQuoteBn : cat.hygieneAuditQuoteEn}&rdquo;
                  </div>

                  {/* Action Items List */}
                  <div className="space-y-2.5 pt-1">
                    {cat.actionItems.map((act) => {
                      const isDone = Boolean(completedActionIds[act.id]);

                      return (
                        <div
                          key={act.id}
                          className={`p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                            isDone 
                              ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-300' 
                              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200'
                          }`}
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            {/* Checkbox button */}
                            <button
                              onClick={() => toggleActionDone(act.id)}
                              className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors shrink-0 mt-0.5 ${
                                isDone 
                                  ? 'bg-emerald-500 text-slate-950 font-bold' 
                                  : 'border border-slate-600 hover:border-emerald-400 text-transparent'
                              }`}
                              title={isDone ? (isBn ? 'অসম্পূর্ণ চিহ্নিত করুন' : 'Mark incomplete') : (isBn ? 'সম্পন্ন চিহ্নিত করুন' : 'Mark complete')}
                            >
                              {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-3.5 h-3.5 text-slate-600" />}
                            </button>

                            <div className="space-y-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold ${
                                  act.priority === 'critical'
                                    ? 'bg-rose-950 text-rose-300 border border-rose-500/40'
                                    : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                                }`}>
                                  {act.priority}
                                </span>
                                
                                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                                  <Clock className="w-3 h-3 text-slate-500" />
                                  <span>~{act.estimatedMinutes}m</span>
                                </span>

                                <span className="text-xs font-semibold text-white">
                                  {isBn ? act.titleBn : act.titleEn}
                                </span>
                              </div>

                              <p className="text-xs text-slate-300 leading-relaxed">
                                {isBn ? act.actionBn : act.actionEn}
                              </p>
                            </div>
                          </div>

                          {/* Quick Navigation to the corresponding Campaign Module */}
                          <a
                            href={act.relatedModuleAnchor}
                            onClick={() => setIsHygieneModalOpen(false)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 text-xs font-medium flex items-center gap-1 transition-colors shrink-0"
                            title={isBn ? 'এই মডিউলে গিয়ে বিস্তারিত শিখুন' : 'Open related campaign module'}
                          >
                            <span>{isBn ? 'মডিউলে যান' : 'Learn'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition of Strongest Categories */}
            {plan.strongestCategories.length > 0 && (
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isBn ? 'আপনার শক্তিশালী প্রতিরোধ ক্ষেত্রসমূহ:' : 'Your Fortified Security Strengths:'}</span>
                </span>
                
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {plan.strongestCategories.map((st) => (
                    <div 
                      key={st.id}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-medium">{isBn ? st.nameBn : st.nameEn}</span>
                      <span className="font-mono text-emerald-400 font-bold">{st.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              {isBn 
                ? 'এই পদক্ষেপগুলো বাস্তবায়ন করলে যেকোনো সাইবার আক্রমণে ক্ষতিগ্রস্ত হওয়ার ঝুঁকি ৮০% হ্রাস পায়।' 
                : 'Implementing these steps reduces susceptibility to social engineering breaches by up to 80%.'}
            </div>

            <button
              onClick={() => setIsHygieneModalOpen(false)}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-950/50"
            >
              {isBn ? 'বুঝেছি, অনুশীলন করব' : 'Done / Apply Habits'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
