'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  CheckCircle, 
  AlertOctagon, 
  HelpCircle, 
  Play, 
  RotateCcw, 
  Smartphone, 
  UserCheck, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function Module0() {
  // 30 second timer for Slide 9
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // 5 second timer for Slide 13
  const [fiveSecLeft, setFiveSecLeft] = useState(5);
  const [isFiveSecRunning, setIsFiveSecRunning] = useState(false);

  // Poll answers state for Slide 9
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null,
    2: null,
    3: null
  });

  // Slide 13 answers
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<number, 'yes' | 'no' | null>>({
    1: null,
    2: null,
    3: null
  });

  useEffect(() => {
    if (!isTimerRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    if (!isFiveSecRunning) return;
    const interval = setInterval(() => {
      setFiveSecLeft(prev => {
        if (prev <= 1) {
          setIsFiveSecRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isFiveSecRunning]);

  return (
    <section id="module-0" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header Card (Slide 8) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-950 border border-sky-800/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                <span className="w-6 h-6 rounded-md bg-sky-500/20 flex items-center justify-center font-mono font-bold">০</span>
                <span>মডিউল ০ · স্বাগতম ও প্রস্তুতি</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ৫ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                স্বাগতম ও নিরাপদ সিদ্ধান্তের প্রস্তুতি
              </h2>
              <p className="text-sm sm:text-base text-sky-200/90 max-w-2xl">
                শেখার ফল — <strong>Human Firewall</strong> হয়ে থামতে, ভাবতে ও যাচাই করতে সক্ষম হওয়া।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>৫ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 9: প্রথম ৩০ সেকেন্ড (Interactive Icebreaker) */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ০ · শুরু</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                প্রথম ৩০ সেকেন্ড: আত্ম-নিরীক্ষণ
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ফোনটি স্ক্রিন-নিচে রাখুন। এবার হাত তুলে বা বাটনে ক্লিক করে উত্তর দিন—
              </p>
            </div>

            {/* 30s Interactive Countdown Widget */}
            <div className="flex items-center gap-4 bg-slate-950 border border-slate-800 p-3 rounded-2xl">
              <div className="text-center px-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
                  0:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                </span>
                <span className="text-[10px] text-slate-400 block uppercase">টাইমার</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg flex items-center gap-1"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isTimerRunning ? 'বিরতি' : 'শুরু'}</span>
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setSecondsLeft(30);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                  title="রিসেট"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 3 Questions Grid */}
          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    ঘুম থেকে উঠে প্রথম ৫ মিনিটে ফোন দেখেছেন?
                  </h4>
                  <p className="text-xs text-slate-400">সকালে অবচেতন মনে যেকোনো মেসেজে ক্লিক করার ঝুঁকি সর্বোচ্চ থাকে।</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, 1: true }))}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    answers[1] === true 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  হ্যাঁ দেখেছি
                </button>
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, 1: false }))}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    answers[1] === false 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  না, দেখিনি
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    আজ MFS (বিকাশ/নগদ) বা সামাজিক যোগাযোগমাধ্যম ব্যবহার করেছেন?
                  </h4>
                  <p className="text-xs text-slate-400">প্রতিদিনের সাধারণ কাজেই হ্যাকাররা ওত পেতে থাকে।</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, 2: true }))}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    answers[2] === true 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  হ্যাঁ, করেছি
                </button>
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, 2: false }))}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    answers[2] === false 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  না, করিনি
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    পরিচিত অ্যাকাউন্ট টাকা চাইলে আগে অন্য মাধ্যমে পরিচয় যাচাই করবেন?
                  </h4>
                  <p className="text-xs text-slate-400">মেসেঞ্জারে পরিচিত বন্ধু লিখলেই টাকা পাঠিয়ে দেওয়া সবচেয়ে বড় ফাঁদ।</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, 3: true }))}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    answers[3] === true 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  হ্যাঁ, করব
                </button>
                <button
                  onClick={() => setAnswers(prev => ({ ...prev, 3: false }))}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    answers[3] === false 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                      : 'border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  না, সরাসরি পাঠাই
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 10: আপনিই Human Firewall Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-800/80 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            আপনিই Human Firewall
          </h3>
          <p className="text-base sm:text-lg text-emerald-300 max-w-3xl mx-auto font-medium">
            প্রযুক্তির ফায়ারওয়াল ডিভাইস বাঁচায়; আপনার সচেতন বিরতি ভুল সিদ্ধান্ত ঠেকায়।
          </p>
          <div className="pt-2 text-xs sm:text-sm font-semibold text-amber-400">
            ভয় • তাড়া • বিশ্বাস • লোভ — আবেগ চিনুন, থামুন, স্বাধীনভাবে যাচাই করুন
          </div>
        </div>

        {/* Slide 11: গল্প: রফিকের ৫,০০০ টাকার ভুল */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Story narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertOctagon className="w-4 h-4" />
                <span>মডিউল ০ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                রফিকের ৫,০০০ টাকার ভুল
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>বন্ধুর হ্যাক হওয়া অ্যাকাউন্ট থেকে “জরুরি” টাকা চাওয়া:</strong> রাতে মেসেঞ্জারে ক্লোজ ফ্রেন্ডের আইডি থেকে মেসেজ এলো—&ldquo;দোস্ত, হাসপাতালে আছি, জরুরি ৫,০০০ টাকা বিকাশ কর এখনই!&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>বন্ধুকে কল না করেই অচেনা নম্বরে ৳৫,০০০ পাঠানো:</strong> রফিক আতঙ্কিত হয়ে বন্ধুকে ফোনে সরাসরি কল না করে মেসেজে দেওয়া অচেনা নম্বরে টাকা পাঠিয়ে দিল।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>পুরোনো নম্বরে কল করে জানা—বন্ধুর অ্যাকাউন্ট হ্যাক হয়েছে:</strong> টাকা পাঠানোর পর বন্ধুকে ফোন করতেই বন্ধু জানাল তার ফেসবুক ৩ দিন আগে হ্যাক হয়েছে এবং সে কোনো টাকা চায়নি।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> নাম–ছবি পরিচিত হলেও টাকা পাঠানোর আগে আলাদা মাধ্যমে (সরাসরি ভয়েস কল বা দেখা করে) যাচাই করুন।
              </div>
            </div>

            {/* Right Story Visual representation */}
            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-rose-950/50 border border-rose-700/60 flex items-center justify-center text-rose-400">
                <Smartphone className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">নকল মেসেঞ্জার চ্যাট ফাঁদ</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  &ldquo;জরুরি ৫০০০ টাকা পাঠাও, আমার ফোন অফ হয়ে যাচ্ছে...&rdquo; — চেনা ডিপি আর চেনা নাম কখনোই পরিচয়ের চূড়ান্ত প্রমাণ নয়।
                </p>
              </div>
              <div className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-left text-xs font-mono text-slate-300 space-y-1">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত (Red Flag):</div>
                <div>• রাতের বেলা হঠাৎ টাকা চাওয়া</div>
                <div>• নিজের নম্বর বাদ দিয়ে অচেনা MFS নম্বর</div>
                <div>• &ldquo;কল দিস না&rdquo; বলে অজুহাত দেওয়া</div>
              </div>
            </div>

          </div>
        </div>

        {/* Slide 12: THINK — পোস্ট বা পদক্ষেপের আগে ৫ প্রশ্ন */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ০ · সিদ্ধান্ত</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              THINK — পোস্ট বা পদক্ষেপের আগে ৫ প্রশ্ন
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              অনলাইনে যেকোনো কিছু শেয়ার, ক্লিক বা পদক্ষেপ নেওয়ার আগে এই ৫টি অক্ষরের উত্তর খুঁজুন:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-sky-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto shadow-md">
                T
              </div>
              <h4 className="text-sm font-bold text-white">True?</h4>
              <p className="text-xs text-slate-300">তথ্যটি কি প্রমাণিত ও হালনাগাদ?</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-rose-500 text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
                H
              </div>
              <h4 className="text-sm font-bold text-white">Harmful?</h4>
              <p className="text-xs text-slate-300">এতে কারও কোনো ক্ষতি বা অপমান হবে?</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto shadow-md">
                I
              </div>
              <h4 className="text-sm font-bold text-white">Information?</h4>
              <p className="text-xs text-slate-300">ব্যক্তিগত বা গোপন তথ্য ফাঁস হচ্ছে কি?</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto shadow-md">
                N
              </div>
              <h4 className="text-sm font-bold text-white">Necessary?</h4>
              <p className="text-xs text-slate-300">পোস্ট বা পদক্ষেপটি কি সত্যিই প্রয়োজন?</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-teal-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto shadow-md">
                K
              </div>
              <h4 className="text-sm font-bold text-white">Known source?</h4>
              <p className="text-xs text-slate-300">মূল উৎসটি চেনা, নির্ভরযোগ্য ও যাচাইযোগ্য?</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center text-xs sm:text-sm text-emerald-200">
            কোনো প্রশ্নে সন্দেহ থাকলে থামুন — মূল উৎসে যাচাই করে তারপর পোস্ট বা পদক্ষেপ নিন।
          </div>
        </div>

        {/* Slide 13: শুরুর অনুশীলন — ফোন উল্টে রাখুন & ৫ সেকেন্ডের নিয়ম */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ০ · হ্যান্ডস-অন</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                শুরুর অনুশীলন: ফোন উল্টে রাখুন (৫ সেকেন্ডের নিয়ম)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                স্ক্রিন নিচে — মনোযোগ উপরে। উত্তর দেওয়ার আগে পাঁচ সেকেন্ড থামুন — তারপর হাত তুলুন।
              </p>
            </div>

            {/* 5-sec Timer */}
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl shrink-0">
              <div className="text-center px-2">
                <span className="text-2xl font-mono font-bold text-emerald-400">
                  {fiveSecLeft}s
                </span>
                <span className="text-[10px] text-slate-400 block">বিরতি</span>
              </div>
              <button
                onClick={() => {
                  setFiveSecLeft(5);
                  setIsFiveSecRunning(true);
                }}
                className="px-3 py-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg whitespace-nowrap"
              >
                ৫ সেকেন্ড বিরতি দিন
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white">
                হঠাৎ কোন বন্ধুর অ্যাকাউন্ট থেকে টাকা চাইলে পাঠাবেন?
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setExerciseAnswers(prev => ({ ...prev, 1: 'no' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border ${
                    exerciseAnswers[1] === 'no' 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  না, কল দিয়ে যাচাই করব
                </button>
                <button
                  onClick={() => setExerciseAnswers(prev => ({ ...prev, 1: 'yes' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border ${
                    exerciseAnswers[1] === 'yes' 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  হ্যাঁ পাঠাব
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white">
                ‘কাস্টমার কেয়ার’ OTP চাইলে বলবেন?
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setExerciseAnswers(prev => ({ ...prev, 2: 'no' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border ${
                    exerciseAnswers[2] === 'no' 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  কখনোই না!
                </button>
                <button
                  onClick={() => setExerciseAnswers(prev => ({ ...prev, 2: 'yes' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border ${
                    exerciseAnswers[2] === 'yes' 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  হ্যাঁ বলব
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white">
                পরিচিত কণ্ঠ শুনেই বিশ্বাস করবেন?
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setExerciseAnswers(prev => ({ ...prev, 3: 'no' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border ${
                    exerciseAnswers[3] === 'no' 
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  না, কোড-ওয়ার্ড/কলব্যাক
                </button>
                <button
                  onClick={() => setExerciseAnswers(prev => ({ ...prev, 3: 'yes' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border ${
                    exerciseAnswers[3] === 'yes' 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  হ্যাঁ বিশ্বাস করব
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <span className="text-sm font-bold text-amber-300">
              আগে থামব, বুঝব — তারপর সিদ্ধান্ত।
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
