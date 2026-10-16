'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Shuffle, 
  Sparkles, 
  Trophy, 
  Lightbulb, 
  ArrowRight, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Award,
  Loader2,
  Cpu
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import { QuizQuestion, getRandomModuleQuestions, getDefaultModuleQuestions } from '@/lib/moduleQuizzes';

interface ModuleQuizProps {
  moduleId: string;
  className?: string;
  defaultExpanded?: boolean;
}

export default function ModuleQuiz({ 
  moduleId, 
  className = '', 
  defaultExpanded = true 
}: ModuleQuizProps) {
  const { isBn } = useLanguage();
  const { isCompleted, markCompleted } = useProgress();

  // Initial state uses deterministic curated questions for SSR & client hydration match
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => getDefaultModuleQuestions(moduleId, 3));
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [isAiGenerated, setIsAiGenerated] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Dynamically generate 3 unique multiple-choice questions via Gemini API
  const generateGeminiQuestions = useCallback(async () => {
    setIsLoadingAi(true);
    setAiError(null);
    try {
      const response = await fetch('/api/quiz/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleId })
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      if (data.questions && Array.isArray(data.questions) && data.questions.length > 0) {
        setQuestions(data.questions);
        setSelectedAnswers({});
        setCurrentIndex(0);
        setIsAiGenerated(data.source === 'gemini_api');
      } else {
        // Fallback to random local pool
        setQuestions(getRandomModuleQuestions(moduleId, 3));
        setSelectedAnswers({});
        setCurrentIndex(0);
        setIsAiGenerated(false);
      }
    } catch (err: any) {
      console.warn('Gemini quiz generation issue, using instant fallback pool:', err);
      setAiError(isBn ? 'এআই সংযোগ ব্যাহত, অফলাইন ব্যাংক থেকে প্রশ্ন দেওয়া হলো' : 'AI network issue, loaded offline questions');
      setQuestions(getRandomModuleQuestions(moduleId, 3));
      setSelectedAnswers({});
      setCurrentIndex(0);
      setIsAiGenerated(false);
    } finally {
      setIsLoadingAi(false);
    }
  }, [moduleId, isBn]);

  // Quick offline shuffle
  const shuffleOfflineQuestions = useCallback(() => {
    setQuestions(getRandomModuleQuestions(moduleId, 3));
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsAiGenerated(false);
    setAiError(null);
  }, [moduleId]);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const isCurrentAnswered = selectedAnswers[currentIndex] !== undefined;
  const hasCompletedQuiz = totalQuestions > 0 && answeredCount === totalQuestions;

  // Calculate score
  const score = useMemo(() => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correct += 1;
      }
    });
    return correct;
  }, [questions, selectedAnswers]);

  const handleSelectOption = (optionIndex: number) => {
    if (isCurrentAnswered) return; // Prevent changing answer once selected
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleMarkModuleDone = () => {
    markCompleted(moduleId);
  };

  if (questions.length === 0) return null;

  const optionLetters = ['A', 'B', 'C', 'D'];
  const moduleIsDone = isCompleted(moduleId);

  return (
    <div className={`w-full my-6 transition-all ${className}`}>
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md transition-all duration-300 hover:border-slate-700/80">
        
        {/* Header Bar */}
        <div className="px-4 py-3.5 sm:px-6 sm:py-4 bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border-b border-slate-800/80 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <HelpCircle className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>{isBn ? 'জেমিনাই এআই জ্ঞান যাচাই' : 'Gemini AI Knowledge Check'}</span>
                </span>
                
                {isAiGenerated ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                    <Cpu className="w-2.5 h-2.5 text-cyan-400" />
                    <span>Gemini 3.8 Flash</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {isBn ? 'স্ট্যান্ডার্ড ব্যাংক' : 'Curated Pool'}
                  </span>
                )}

                <span className="text-[11px] text-slate-400 font-mono">
                  {answeredCount}/{totalQuestions} {isBn ? 'সম্পন্ন' : 'answered'}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                {isBn 
                  ? 'এই মডিউলের কনসেপ্ট ভিত্তিক ৩টি অনন্য চ্যালেঞ্জিং প্রশ্ন' 
                  : '3 unique, challenging questions tailored to this module'}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Primary Action: Dynamically generate with Gemini API */}
            <button
              onClick={generateGeminiQuestions}
              disabled={isLoadingAi}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950/50 disabled:opacity-50"
              title={isBn ? 'জেমিনাই এআই দিয়ে এই মডিউলের ওপর ৩টি নতুন ইউনিক প্রশ্ন তৈরি করুন' : 'Generate 3 new unique questions with Gemini API'}
            >
              {isLoadingAi ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>{isBn ? 'এআই তৈরি করছে...' : 'Generating...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isBn ? '✨ এআই দিয়ে ৩টি নতুন প্রশ্ন' : '✨ Generate with AI'}</span>
                </>
              )}
            </button>

            {/* Secondary Action: Fast local shuffle */}
            <button
              onClick={shuffleOfflineQuestions}
              disabled={isLoadingAi}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm disabled:opacity-50"
              title={isBn ? 'প্রশ্ন রদবদল করুন' : 'Shuffle curated questions'}
            >
              <Shuffle className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">{isBn ? 'রিমিক্স' : 'Shuffle'}</span>
            </button>

            {/* Expand / Collapse */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title={isExpanded ? (isBn ? 'সংকুচিত করুন' : 'Collapse') : (isBn ? 'প্রসারিত করুন' : 'Expand')}
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                
                {/* AI Error Note if any */}
                {aiError && (
                  <div className="mb-4 px-3 py-2 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
                    <span>{aiError}</span>
                    <button onClick={() => setAiError(null)} className="text-amber-400 hover:text-white text-xs ml-2">✕</button>
                  </div>
                )}

                {/* Loading state when Gemini is thinking */}
                {isLoadingAi ? (
                  <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center animate-pulse">
                        <Cpu className="w-7 h-7 text-cyan-400 animate-spin" />
                      </div>
                      <Sparkles className="w-4 h-4 text-amber-300 absolute -top-1 -right-1 animate-bounce" />
                    </div>

                    <div className="space-y-1.5 max-w-md">
                      <h5 className="text-sm font-semibold text-slate-100 flex items-center justify-center gap-2">
                        <span>{isBn ? 'জেমিনাই এআই মডিউল বিশ্লেষণ করছে' : 'Gemini AI is analyzing module content'}</span>
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isBn 
                          ? 'এই মডিউলের বিষয়বস্তু থেকে ৩টি সম্পূর্ণ অনন্য, চ্যালেঞ্জিং ও বাস্তবিক সাইবার পরিস্থিতির প্রশ্ন তৈরি করা হচ্ছে...' 
                          : 'Synthesizing 3 unique, challenging, scenario-based multiple choice questions for this specific module...'}
                      </p>
                    </div>

                    <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 animate-[pulse_1s_ease-in-out_infinite]" />
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Stepper Dots & Progress */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
                      <div className="flex items-center gap-2">
                        {questions.map((q, idx) => {
                          const answered = selectedAnswers[idx] !== undefined;
                          const isCorrect = selectedAnswers[idx] === q.correctIndex;
                          const isCurrent = idx === currentIndex;

                          return (
                            <button
                              key={q.id || idx}
                              onClick={() => setCurrentIndex(idx)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                                isCurrent
                                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                                  : answered
                                  ? isCorrect
                                    ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-rose-950/40 text-rose-400 border border-rose-500/30'
                                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-slate-200'
                              }`}
                            >
                              <span>{isBn ? `প্রশ্ন ${idx + 1}` : `Q${idx + 1}`}</span>
                              {answered && (
                                isCorrect ? (
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                ) : (
                                  <XCircle className="w-3 h-3 text-rose-400" />
                                )
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {currentQ?.generatedByAI && (
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-1.5 py-0.5 rounded">
                            AI Generated
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-slate-400">
                          {currentQ?.conceptKey}
                        </span>
                      </div>
                    </div>

                    {/* Active Question Area */}
                    {currentQ && (
                      <div className="space-y-4">
                        {/* Question text */}
                        <div className="p-3.5 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                          <div className="flex items-start gap-2.5">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold shrink-0 mt-0.5">
                              {currentIndex + 1}/3
                            </span>
                            <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                              {isBn ? (currentQ.questionBn || currentQ.questionEn) : (currentQ.questionEn || currentQ.questionBn)}
                            </p>
                          </div>
                        </div>

                        {/* Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {((isBn ? currentQ.optionsBn : currentQ.optionsEn) || currentQ.optionsEn || currentQ.optionsBn || []).map((optionText, optIdx) => {
                            const isSelected = selectedAnswers[currentIndex] === optIdx;
                            const isCorrectAnswer = currentQ.correctIndex === optIdx;
                            const showResult = isCurrentAnswered;

                            let cardStyle = 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 border-slate-700/70 hover:border-slate-600';
                            let badgeStyle = 'bg-slate-700 text-slate-300';

                            if (showResult) {
                              if (isCorrectAnswer) {
                                cardStyle = 'bg-emerald-950/70 text-emerald-200 border-emerald-500 shadow-sm shadow-emerald-900/30 font-medium ring-1 ring-emerald-500/40';
                                badgeStyle = 'bg-emerald-500 text-slate-950 font-bold';
                              } else if (isSelected && !isCorrectAnswer) {
                                cardStyle = 'bg-rose-950/70 text-rose-200 border-rose-500 font-medium ring-1 ring-rose-500/40';
                                badgeStyle = 'bg-rose-500 text-white font-bold';
                              } else {
                                cardStyle = 'bg-slate-900/40 text-slate-500 border-slate-800/80 opacity-60';
                                badgeStyle = 'bg-slate-800 text-slate-500';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isCurrentAnswered}
                                onClick={() => handleSelectOption(optIdx)}
                                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all text-xs sm:text-sm ${cardStyle}`}
                              >
                                <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 mt-0.5 ${badgeStyle}`}>
                                  {optionLetters[optIdx]}
                                </span>
                                <span className="flex-1 leading-snug">{optionText}</span>
                                {showResult && isCorrectAnswer && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                )}
                                {showResult && isSelected && !isCorrectAnswer && (
                                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Callout (appears once answered) */}
                        <AnimatePresence>
                          {isCurrentAnswered && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className={`p-3.5 sm:p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                                selectedAnswers[currentIndex] === currentQ.correctIndex
                                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                                  : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                              }`}
                            >
                              <Lightbulb className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                              <div>
                                <span className="font-semibold block mb-0.5 text-slate-100">
                                  {selectedAnswers[currentIndex] === currentQ.correctIndex
                                    ? (isBn ? '✓ সঠিক উত্তর! সাইবার প্রতিরক্ষা অন্তর্দৃষ্টি:' : '✓ Correct! Cyber Defense Insight:')
                                    : (isBn ? '✕ সঠিক উত্তরটি জানা প্রয়োজন:' : '✕ Takeaway to Remember:')}
                                </span>
                                <p className="text-slate-300">
                                  {isBn ? (currentQ.explanationBn || currentQ.explanationEn) : (currentQ.explanationEn || currentQ.explanationBn)}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Action Bar inside question */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="text-[11px] text-slate-400">
                            {isCurrentAnswered ? (
                              currentIndex < totalQuestions - 1 ? (
                                <span className="text-cyan-400">{isBn ? 'পরবর্তী প্রশ্নে যান ➔' : 'Proceed to next question ➔'}</span>
                              ) : (
                                <span className="text-emerald-400">{isBn ? 'কুইজ সম্পন্ন হয়েছে!' : 'Quiz completed!'}</span>
                              )
                            ) : (
                              <span>{isBn ? 'যেকোনো একটি বিকল্পে ক্লিক করুন' : 'Select an option to check'}</span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {currentIndex < totalQuestions - 1 ? (
                              <button
                                onClick={handleNext}
                                className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                              >
                                <span>{isBn ? 'পরবর্তী প্রশ্ন' : 'Next Question'}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Final Score Banner when all 3 answered */}
                    {hasCompletedQuiz && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-6 pt-5 border-t border-slate-800/80 bg-slate-950/60 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            score === 3 
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                              : score >= 2
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          }`}>
                            {score === 3 ? (
                              <Trophy className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <Award className="w-5 h-5 text-cyan-400" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="text-sm font-bold text-slate-100">
                                {score === 3
                                  ? (isBn ? 'অসাধারণ! ৩টিতে ৩টিই সঠিক!' : 'Perfect! 3 out of 3!')
                                  : score === 2
                                  ? (isBn ? 'খুব ভালো! ৩টিতে ২টি সঠিক!' : 'Well done! 2 out of 3!')
                                  : (isBn ? 'আরও মনোযোগ প্রয়োজন: ৩টিতে ১টি সঠিক' : 'Review needed: 1 out of 3')}
                              </h5>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 font-mono font-semibold">
                                {Math.round((score / 3) * 100)}%
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {score === 3 
                                ? (isBn ? 'এই মডিউলের মূল নীতিগুলো আপনি নিখুঁতভাবে আয়ত্ত করেছেন।' : 'You have mastered the core concepts of this module.')
                                : (isBn ? 'জেমিনাই এআই দিয়ে নতুন ৩টি প্রশ্ন তৈরি করে পুনরায় অনুশীলন করতে পারেন।' : 'Generate 3 new AI questions to test yourself again.')}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-wrap">
                          <button
                            onClick={generateGeminiQuestions}
                            disabled={isLoadingAi}
                            className="px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>{isBn ? '✨ নতুন AI প্রশ্ন' : '✨ New AI Questions'}</span>
                          </button>

                          <button
                            onClick={shuffleOfflineQuestions}
                            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>{isBn ? 'পুনরায় খেলুন' : 'Try Again'}</span>
                          </button>

                          {!moduleIsDone && (
                            <button
                              onClick={handleMarkModuleDone}
                              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                            >
                              <ShieldCheck className="w-4 h-4" />
                              <span>{isBn ? 'মডিউল সম্পন্ন করুন' : 'Mark Completed'}</span>
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
