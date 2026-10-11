'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  PhoneCall, 
  Heart, 
  Sparkles, 
  Download, 
  Share2, 
  Printer, 
  FileCheck,
  Trophy
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

export default function Module12() {
  const { userName, setUserName, setIsCertificateModalOpen } = useProgress();

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, 'safe' | 'risky' | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
  });

  const [showQuizResults, setShowQuizResults] = useState(false);

  // Digital Oath Certificate state
  const [citizenName, setCitizenName] = useState(userName || '');
  const [pledgeTaken, setPledgeTaken] = useState(false);
  const [certificateId, setCertificateId] = useState('CSB-2026-84920');

  const handleTakePledge = () => {
    if (!citizenName.trim()) return;
    setUserName(citizenName.trim());
    const randomNum = Math.floor(10000 + (citizenName.length * 7919) % 89999);
    setCertificateId(`CSB-2026-${randomNum}`);
    setPledgeTaken(true);
  };

  const quizQuestions = [
    {
      id: 1,
      text: '‘কাস্টমার কেয়ার বলেছে, তাই ফোনে আসা OTP দিলাম’',
      correct: 'risky',
      explanation: 'চরম ঝুঁকিপূর্ণ! কোনো অফিশিয়াল কাস্টমার কেয়ার কখনো গ্রাহকের কাছে OTP চাইতে পারে না।'
    },
    {
      id: 2,
      text: '‘নতুন নম্বর থেকে বিপদের আবদার পেয়ে পুরোনো পরিচিত নম্বরে যাচাই করলাম’',
      correct: 'safe',
      explanation: 'নিরাপদ! যেকোনো অচেনা অনুরোধ পুরোনো যাচাইকৃত চ্যানেলে ক্রস-চেক করাই সঠিক নিয়ম।'
    },
    {
      id: 3,
      text: '‘মনে রাখার সুবিধার জন্য ফেসবুক, জিমেইল ও ব্যাংকে একই পাসওয়ার্ড রাখলাম’',
      correct: 'risky',
      explanation: 'ঝুঁকিপূর্ণ! একটি সাইট হ্যাক হলে Credential Stuffing দিয়ে সব অ্যাকাউন্ট বেহাত হবে।'
    },
    {
      id: 4,
      text: '‘টর্চলাইট ও ক্যালকুলেটরের অপ্রয়োজনীয় Microphone অনুমতি বন্ধ রাখলাম’',
      correct: 'safe',
      explanation: 'নিরাপদ! কাজের সাথে অমিল থাকা পারমিশন বন্ধ রাখাই প্রাইভেসি সুরক্ষার চাবিকাঠি।'
    },
    {
      id: 5,
      text: '‘ভুল লিংকে ক্লিক করে পাসওয়ার্ড দিয়ে ফেলার পর লজ্জায় কাউকে না বলে লুকিয়ে রাখলাম’',
      correct: 'risky',
      explanation: 'চরম ঝুঁকিপূর্ণ! যত দ্রুত জানাবেন, তত দ্রুত অ্যাকাউন্ট ফ্রিজ করে ক্ষতি ঠেকানো সম্ভব।'
    },
    {
      id: 6,
      text: '‘কোড-ওয়ার্ড জিজ্ঞেস করে জরুরি সাহায্য চাওয়া মায়ের মতো অচেনা কণ্ঠ যাচাই করলাম’',
      correct: 'safe',
      explanation: 'নিরাপদ! AI ভয়েস ক্লোন প্রতিরোধে পরিবারের গোপন সিক্রেট কোড-ওয়ার্ডই অব্যর্থ অস্ত্র।'
    }
  ];

  const handleSelectAnswer = (qId: number, answer: 'safe' | 'risky') => {
    setUserAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <section id="pledge" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 80) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center font-mono font-bold">১২</span>
                <span>মডিউল ১২ · সমাপনী মূল্যায়ন ও শপথ</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ৫ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                চূড়ান্ত কুইজ, প্রশ্নোত্তর ও সাইবার নিরাপত্তা শপথ
              </h2>
              <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl">
                শেখার ফল — ক্যাম্পেইনের মূল নিয়মগুলো যাচাই করে দায়িত্বশীল ডিজিটাল নাগরিকের আনুষ্ঠানিক শপথ গ্রহণ।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>৫ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 80 Resource Directory Strip */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>ক্যাম্পেইন রিসোর্স ও সার্বক্ষণিক জাতীয় হেল্পলাইন</span>
            </h4>
            <span className="text-xs text-slate-400">জরুরি প্রয়োজনে তাৎক্ষণিক ডায়াল করুন</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">জাতীয় জরুরি পুলিশ</span>
              <span className="text-xl font-bold font-mono text-rose-400">৯৯৯</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">সরকারি আইনি সহায়তা</span>
              <span className="text-xl font-bold font-mono text-sky-400">১৬৪৩০</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">বিকাশ সাপোর্ট</span>
              <span className="text-xl font-bold font-mono text-emerald-400">১৬২৪৭</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">নগদ সাপোর্ট</span>
              <span className="text-xl font-bold font-mono text-amber-400">১৬১৬৭</span>
            </div>
          </div>
        </div>

        {/* Slide 81: দ্রুত কুইজ — নিরাপদ নাকি ঝুঁকিপূর্ণ? */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ১২ · দ্রুত কুইজ</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                দ্রুত কুইজ — নিরাপদ নাকি ঝুঁকিপূর্ণ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ৬টি বাস্তব পরিস্থিতি: উত্তর নির্বাচন করুন এবং যাচাই করুন।
              </p>
            </div>

            <button
              onClick={() => setShowQuizResults(!showQuizResults)}
              className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              {showQuizResults ? 'ফলাফল লুকান' : 'ফলাফল ও স্কোর দেখুন'}
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {quizQuestions.map(q => {
              const isAnswered = userAnswers[q.id] !== null;
              const isCorrect = userAnswers[q.id] === q.correct;
              return (
                <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-slate-800 text-slate-300 font-bold font-mono flex items-center justify-center text-xs shrink-0 mt-0.5">
                        {q.id}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-100">
                        {q.text}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleSelectAnswer(q.id, 'safe')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                          userAnswers[q.id] === 'safe'
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                            : 'border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        নিরাপদ
                      </button>
                      <button
                        onClick={() => handleSelectAnswer(q.id, 'risky')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                          userAnswers[q.id] === 'risky'
                            ? 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold'
                            : 'border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        ঝুঁকিপূর্ণ
                      </button>
                    </div>
                  </div>

                  {showQuizResults && (
                    <div className={`p-2.5 rounded-lg text-xs flex items-center justify-between ${
                      isCorrect 
                        ? 'bg-emerald-950/40 border border-emerald-800 text-emerald-300' 
                        : 'bg-rose-950/40 border border-rose-800 text-rose-300'
                    }`}>
                      <span>{q.explanation}</span>
                      <span className="font-bold shrink-0 ml-2">
                        {isCorrect ? '✓ সঠিক' : `ভুল (সঠিক: ${q.correct === 'safe' ? 'নিরাপদ' : 'ঝুঁকিপূর্ণ'})`}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {showQuizResults && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/80 text-center">
              <span className="text-base sm:text-lg font-bold text-white">
                আপনার স্কোর: ৬ এর মধ্যে {calculateScore()} টি সঠিক!
              </span>
              <p className="text-xs text-emerald-300 mt-1">
                {calculateScore() === 6 
                  ? 'অসাধারণ! আপনি একজন পূর্ণাঙ্গ সার্টিফাইড Human Firewall!' 
                  : 'বেশ ভালো! ভুল উত্তরগুলোর ব্যাখ্যা পড়ে নিয়ে আরো প্রস্তুত থাকুন।'}
              </p>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-amber-300">
            উত্তর দেখানোর আগে হাত তুলে ভোট দিন — সবুজ হাত = নিরাপদ!
          </div>
        </div>

        {/* Slide 82: সাইবার নিরাপত্তা শপথ (Cybersecurity Pledge) */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/80 p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              অঙ্গীকারপত্র · ক্লিক সেফ বাংলাদেশ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              সাইবার নিরাপত্তা শপথ
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              সবাই একসঙ্গে দাঁড়িয়ে উচ্চারণ করুন:
            </p>
          </div>

          {/* 7 Pledge Items from Slide 82 */}
          <div className="max-w-3xl mx-auto space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">আমি ক্লিক করার আগে থামব।</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">আমি লিংক, কল ও বার্তা যাচাই করব।</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">আমি OTP, PIN ও পাসওয়ার্ড কারও সঙ্গে শেয়ার করব না।</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">আমি ব্যক্তিগত তথ্য ও অন্যের গোপনীয়তার সম্মান করব।</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">আমি সন্দেহজনক অ্যাপ ও অনুমতি নিয়মিত পর্যালোচনা করব।</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">ভুল হলে আমি লুকাব না — রিপোর্ট করব ও সাহায্য নেব।</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-100">আমি আক্রান্ত মানুষকে কখনো দোষ দেব না; পাশে দাঁড়াব।</span>
            </div>
          </div>

          <div className="text-center font-bold text-base sm:text-lg text-emerald-300">
            &ldquo;আমি বাংলাদেশের একজন দায়িত্বশীল ডিজিটাল নাগরিক।&rdquo;
          </div>

          {/* Interactive Digital Citizen Certificate Generator */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 max-w-xl mx-auto space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider text-center">
              আপনার ডিজিটাল নাগরিক সার্টিফিকেট তৈরি করুন
            </h4>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={citizenName}
                onChange={e => setCitizenName(e.target.value)}
                placeholder="আপনার নাম বাংলায় লিখুন (যেমন: রাফিদ হাসান)..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleTakePledge}
                disabled={!citizenName.trim()}
                className="px-5 py-2 text-xs font-bold bg-emerald-400 hover:bg-emerald-300 disabled:bg-slate-800 text-slate-950 disabled:text-slate-500 rounded-lg transition-colors whitespace-nowrap"
              >
                শপথ গ্রহণ ও সনদ
              </button>
            </div>

            {pledgeTaken && citizenName.trim() && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border-2 border-emerald-500 text-center space-y-4 mt-4 shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-xs text-emerald-300 font-mono tracking-wider uppercase">
                  সার্টিফিকেট অফ কমিটমেন্ট ২০২৬
                </div>
                <h4 className="text-2xl font-extrabold text-white">
                  {citizenName}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  ক্লিক সেফ বাংলাদেশ ক্যাম্পেইনে সফলভাবে অংশ নিয়ে একজন সচেতন <strong>Human Firewall</strong> ও দায়িত্বশীল ডিজিটাল নাগরিক হিসেবে শপথ গ্রহণ করেছেন।
                </p>
                <div className="text-[11px] text-slate-400 font-mono pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span>ইস্যুকারী: InfoGuard+ Bangladesh</span>
                  <span className="text-emerald-400 font-bold">আইডি: {certificateId}</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (citizenName.trim()) setUserName(citizenName.trim());
                      setIsCertificateModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95"
                  >
                    <Trophy className="w-4 h-4 text-slate-950" />
                    <span>অফিশিয়াল &apos;Cybersecurity Champion&apos; ইমেজ সনদ ডাউনলোড ও শেয়ার করুন</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Slide 83: পাঁচটি শব্দ — সারা জীবনের জন্য */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১২ · সারা জীবনের শিক্ষা</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              পাঁচটি শব্দ — সারা জীবনের জন্য
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center mx-auto text-xs">১</span>
              <h4 className="text-base font-bold text-white">থামুন</h4>
              <p className="text-xs text-slate-400">তাড়াহুড়ো নয়, বিরতি নিন</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mx-auto text-xs">২</span>
              <h4 className="text-base font-bold text-white">যাচাই করুন</h4>
              <p className="text-xs text-slate-400">স্বাধীন উৎসে নিশ্চিত হোন</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center mx-auto text-xs">৩</span>
              <h4 className="text-base font-bold text-white">সুরক্ষিত রাখুন</h4>
              <p className="text-xs text-slate-400">2FA ও পাসফ্রেজ ব্যবহার</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mx-auto text-xs">৪</span>
              <h4 className="text-base font-bold text-white">রিপোর্ট করুন</h4>
              <p className="text-xs text-slate-400">প্রমাণ রেখে হেল্পলাইনে জানান</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center mx-auto text-xs">৫</span>
              <h4 className="text-base font-bold text-white">পাশে দাঁড়ান</h4>
              <p className="text-xs text-slate-400">ভুক্তভোগীকে সহমর্মিতা দিন</p>
            </div>
          </div>

          {/* Core Closing Philosophy */}
          <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-2">
            <p className="text-sm sm:text-base text-emerald-200 font-medium leading-relaxed max-w-3xl mx-auto">
              &ldquo;নিরাপদ মানুষ সে নয় যে কখনো ভুল করে না — নিরাপদ মানুষ হলো সে, যে ভুল বুঝতে পারে, দ্রুত থামে, যাচাই করে, রিপোর্ট করে এবং অন্যকে সাহায্য করে।&rdquo;
            </p>
            <span className="text-xs font-bold text-white block pt-1">
              সবাইকে আন্তরিক ধন্যবাদ • ক্লিক সেফ বাংলাদেশ • InfoGuard+
            </span>
          </div>
        </div>

        {/* Slide 84: সমাপনী আহ্বান */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-slate-800 text-center space-y-4">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            থামুন • ভাবুন • যাচাই করুন • সুরক্ষিত থাকুন
          </h3>
          <p className="text-base sm:text-lg text-emerald-300 max-w-2xl mx-auto">
            প্রযুক্তি সহায়তা করে; কিন্তু click, share, login ও payment-এর আগে শেষ নিরাপদ সিদ্ধান্তটি নেন <strong>আপনি</strong>।
          </p>
          <div className="pt-2 text-xs sm:text-sm text-slate-400">
            আপনিই Human Firewall — নিজে অনুশীলন করুন, পরিবারে শেখান, সন্দেহে সাহায্য নিন।
          </div>
        </div>

      </div>
    </section>
  );
}
