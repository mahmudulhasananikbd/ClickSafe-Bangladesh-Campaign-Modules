'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  PhoneOff, 
  RotateCcw, 
  Play, 
  AlertTriangle, 
  Smile, 
  Award, 
  Zap, 
  Heart, 
  HelpCircle as QuestionIcon, 
  Building 
} from 'lucide-react';

export default function Module2() {
  const [roleplayTime, setRoleplayTime] = useState(90);
  const [isRoleplayRunning, setIsRoleplayRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    if (!isRoleplayRunning) return;
    const timer = setInterval(() => {
       setRoleplayTime(prev => {
        if (prev <= 1) {
          setIsRoleplayRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRoleplayRunning]);

  return (
    <section id="module-2" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 18) */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-800/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <span className="w-6 h-6 rounded-md bg-rose-500/20 flex items-center justify-center font-mono font-bold">২</span>
                <span>মডিউল ২ · মানুষের আবেগ হ্যাকিং</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১২ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                প্রতারক কীভাবে মানুষকে প্রভাবিত করে
              </h2>
              <p className="text-sm sm:text-base text-rose-200/90 max-w-2xl">
                শেখার ফল — ছয় আবেগের ফাঁদ চিনে ৫ সেকেন্ডের বিরতি নিতে পারা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>১২ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 19: হিউম্যান সাইকোলজি যা প্রতারক ব্যবহার করে */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-rose-400 uppercase">মডিউল ২ · ঝুঁকি</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              হিউম্যান সাইকোলজি যা প্রতারক ব্যবহার করে
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              প্রতারক সিস্টেম হ্যাক করার চেয়ে বেশি ভালোবাসে মানুষের মন ও আবেগকে হ্যাক করতে।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">১. ভয়</h4>
              <p className="text-xs text-rose-300 font-medium mt-1">&lsquo;অ্যাকাউন্ট এখনই বন্ধ হয়ে যাবে&rsquo;</p>
              <p className="text-xs text-slate-400 mt-2">ভয় পেলে মানুষের যুক্তিবোধ সাময়িকভাবে কাজ করা বন্ধ করে দেয়।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">২. লোভ</h4>
              <p className="text-xs text-amber-300 font-medium mt-1">&lsquo;২০,০০০ টাকা লটারিতে জিতেছেন&rsquo;</p>
              <p className="text-xs text-slate-400 mt-2">বিনা পরিশ্রমে বড় লাভের প্রস্তাব দিয়ে অগ্রিম ফি হাতিয়ে নেয়।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">৩. জরুরি তাড়া</h4>
              <p className="text-xs text-orange-300 font-medium mt-1">&lsquo;এখনই করুন, নইলে চিরতরে শেষ&rsquo;</p>
              <p className="text-xs text-slate-400 mt-2">যাচাই করার সুযোগ না দিতে চরম সময়সীমা তৈরি করে।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">৪. বিশ্বাস</h4>
              <p className="text-xs text-sky-300 font-medium mt-1">&lsquo;আমি তোমার বাল্যবন্ধু / বড় ভাই&rsquo;</p>
              <p className="text-xs text-slate-400 mt-2">পরিচিত সম্পর্কের সুযোগ নিয়ে তথ্য ও টাকা হাতিয়ে নেওয়া হয়।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                <QuestionIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">৫. কৌতূহল</h4>
              <p className="text-xs text-purple-300 font-medium mt-1">&lsquo;এই ভাইরাল ছবিতে আপনি? লিংক দেখুন&rsquo;</p>
              <p className="text-xs text-slate-400 mt-2">উদ্বেগ ও কৌতূহলে মানুষ যাচাই ছাড়া ক্ষতিকর ফিশিং লিংকে ক্লিক করে।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">৬. কর্তৃত্ব (Authority)</h4>
              <p className="text-xs text-emerald-300 font-medium mt-1">&lsquo;আমি হেড অফিস / ব্যাংক অফিসার বলছি&rsquo;</p>
              <p className="text-xs text-slate-400 mt-2">অফিসিয়াল কণ্ঠ নকল করে গ্রাহককে বশ মানানোর চেষ্টা করে।</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-center text-xs sm:text-sm text-rose-200">
            <strong>প্রতারক সিস্টেম নয় — মানুষের আবেগ হ্যাক করে।</strong>
          </div>
        </div>

        {/* Slide 20: প্রতারণার চক্র — ছয় ধাপ বনাম আপনার নিরাপদ প্রতিক্রিয়া */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-rose-400 uppercase">মডিউল ২ · ডায়াগ্রাম</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              প্রতারণার চক্র (৬ ধাপ) বনাম নিরাপদ প্রতিক্রিয়া
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              চাপ যত বেশি, থামার প্রয়োজন তত বেশি। চক্রটি কীভাবে ভাংবেন দেখুন:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Scam Cycle 6 Steps */}
            <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-rose-900/40 space-y-4">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>প্রতারণার চক্র — ৬টি বিপজ্জনক ধাপ</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
                  <span>১. প্রলোভন বা ভীতি প্রদর্শন</span>
                  <span className="text-rose-400 font-mono">Hook</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
                  <span>২. বিশ্বাস তৈরি (নকল পরিচয় বা সম্পর্ক)</span>
                  <span className="text-rose-400 font-mono">Trust</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
                  <span>৩. জরুরি চাপ (&ldquo;দেরি হলেই সর্বনাশ&rdquo;)</span>
                  <span className="text-rose-400 font-mono">Urgency</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
                  <span>৪. পদক্ষেপ (OTP বা পাসওয়ার্ড শেয়ার)</span>
                  <span className="text-rose-400 font-mono">Action</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
                  <span>৫. ক্ষতি (টাকা বা অ্যাকাউন্ট খোয়ানো)</span>
                  <span className="text-rose-400 font-mono">Loss</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-between">
                  <span>৬. নীরবতা (লজ্জা বা ভয়ে চুপ থাকা)</span>
                  <span className="text-rose-400 font-mono">Silence</span>
                </div>
              </div>
            </div>

            {/* Right: Your Safe Response 6 Steps */}
            <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-emerald-900/40 space-y-4">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>আপনার নিরাপদ প্রতিক্রিয়া — ৬টি প্রতিরক্ষা ঢাল</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span>১. উৎস যাচাই করুন</span>
                  <span className="text-emerald-400 font-mono font-bold">Verify</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span>২. আলাদা মাধ্যমে নিশ্চিত হোন</span>
                  <span className="text-emerald-400 font-mono font-bold">2nd Channel</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span>৩. পাঁচ সেকেন্ড থামুন (শ্বাস নিন)</span>
                  <span className="text-emerald-400 font-mono font-bold">5s Pause</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span>৪. কিছু পাঠাবেন না (OTP/PIN/টাকা)</span>
                  <span className="text-emerald-400 font-mono font-bold">Zero Share</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span>৫. দ্রুত অফিশিয়াল সহায়তা নিন</span>
                  <span className="text-emerald-400 font-mono font-bold">Official Line</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-between">
                  <span>৬. বিশ্বস্ত মানুষকে জানান ও রিপোর্ট করুন</span>
                  <span className="text-emerald-400 font-mono font-bold">Break Silence</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-amber-300">
            চাপ যত বেশি, থামার প্রয়োজন তত বেশি।
          </div>
        </div>

        {/* Slide 21: রোল-প্লে ও পাঁচ সেকেন্ডের নিয়ম */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ২ · অংশগ্রহণ</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                রোল-প্লে ও পাঁচ সেকেন্ডের নিয়ম
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ৩ জনের দল: প্রতারক, শিক্ষার্থী, পর্যবেক্ষক। জোড়ায় ৯০ সেকেন্ড রোল-প্লে করুন।
              </p>
            </div>

            {/* 90s Timer */}
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl shrink-0">
              <div className="text-center px-2">
                <span className="text-2xl font-mono font-bold text-amber-400">
                  {roleplayTime}s
                </span>
                <span className="text-[10px] text-slate-400 block uppercase">রোল-প্লে টাইমার</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsRoleplayRunning(!isRoleplayRunning)}
                  className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg"
                >
                  {isRoleplayRunning ? 'বিরতি' : 'শুরু'}
                </button>
                <button
                  onClick={() => {
                    setIsRoleplayRunning(false);
                    setRoleplayTime(90);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 3 Roles Dialogue Box */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-2">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs">
                ১
              </div>
              <h4 className="text-sm font-bold text-rose-300">প্রতারক (দলের সদস্য ১)</h4>
              <p className="text-xs text-slate-300 italic bg-slate-950/60 p-3 rounded border border-slate-800">
                &ldquo;বিকাশ কাস্টমার কেয়ার থেকে বলছি স্যার! আপনার অ্যাকাউন্ট সাময়িকভাবে আটকে গেছে। ভেরিফিকেশনের জন্য মেসেজে যাওয়া OTP কোডটি এখনই বলুন!&rdquo;
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">
                ২
              </div>
              <h4 className="text-sm font-bold text-emerald-300">শিক্ষার্থী (দলের সদস্য ২)</h4>
              <p className="text-xs text-slate-300 font-medium bg-slate-950/60 p-3 rounded border border-slate-800">
                &ldquo;আমি ফোনে কাউকে কখনো OTP বা PIN বলব না।&rdquo; <br />
                <span className="text-[11px] text-emerald-400 font-semibold block mt-1">
                  [কল কেটে দেওয়া এবং অফিশিয়াল অ্যাপ থেকে হেল্পলাইনে কল করা]
                </span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-800/40 space-y-2">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">
                ৩
              </div>
              <h4 className="text-sm font-bold text-sky-300">পর্যবেক্ষক (দলের সদস্য ৩)</h4>
              <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded border border-slate-800">
                সঠিক ৫ সেকেন্ড বিরতি নেওয়া হয়েছে কি না তা নোট করা এবং এক বাক্যে প্রতিক্রিয়া দেওয়া: &ldquo;চমৎকার শান্ত সিদ্ধান্ত!&rdquo;
              </p>
            </div>
          </div>

          {/* 5-Second Countdown visual sequence */}
          <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">৫-সেকেন্ড নিয়ম:</span>
              <div className="flex items-center gap-1.5 font-mono font-bold text-xs">
                <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">৫</span>
                <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">৪</span>
                <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">৩</span>
                <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">২</span>
                <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">১</span>
              </div>
            </div>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-4">
              <span>১. থামুন</span>
              <span aria-hidden="true">→</span>
              <span>২. ভাবুন</span>
              <span aria-hidden="true">→</span>
              <span>৩. যাচাই করুন</span>
            </div>
          </div>

          <div className="mt-4 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            এই পাঁচ সেকেন্ড পুরো প্রতারণার পরিকল্পনা ভেঙে দিতে পারে।
          </div>
        </div>

        {/* Slide 22: গল্প: “অ্যাকাউন্ট বন্ধ হবে”—শাওনের ফাঁদ */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <Flame className="w-4 h-4" />
                <span>মডিউল ২ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                “অ্যাকাউন্ট বন্ধ হবে” — শাওনের ফাঁদ
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>লোগোসহ আসলের মতো support ই-মেইল:</strong> পরীক্ষার আগের দিন শাওনের মেলে বার্তা এলো—&ldquo;জরুরি নোটিশ: ২৪ ঘণ্টার মধ্যে ভেরিফাই না করলে আপনার গুগল/ফেসবুক অ্যাকাউন্ট চিরতরে ডিলিট হবে।&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>তাড়াহুড়োয় নকল login page-এ তথ্য দেওয়া:</strong> চরম আতঙ্কে মেইলের লিংকে ক্লিক করে হুবহু দেখতে নকল লগইন পেজে শাওন তার ই-মেইল ও পাসওয়ার্ড টাইপ করে দিলো।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>অ্যাকাউন্ট দখল করে পরিচিতদের কাছে টাকা চাওয়া:</strong> সঙ্গে সঙ্গে স্ক্যামাররা পাসওয়ার্ড বদলে অ্যাকাউন্ট হাইজ্যাক করল এবং শাওনের ফ্রেন্ডলিস্টে সবার কাছে বিপদের কথা বলে টাকা চাইল।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> প্রতারক প্রযুক্তি নয় — মানুষের ভয়, বিশ্বাস ও তাড়াহুড়োকে অস্ত্র বানিয়েছে।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-rose-950/50 border border-rose-700/60 flex items-center justify-center text-rose-400">
                <PhoneOff className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">ফিশিং ই-মেইল প্রতিরোধের উপায়</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  প্রেরকের আসল ই-মেইল অ্যাড্রেস ডোমেইন চেক করুন। সরাসরি ব্রাউজারে অফিসিয়াল সাইটে গিয়ে লগইন করুন।
                </p>
              </div>
              <div className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-left text-xs font-mono text-slate-300 space-y-1">
                <div className="text-emerald-400 font-bold">নিরাপদ নিয়ম:</div>
                <div>• ইমেইলের ভেতরের লগইন বাটনে ক্লিক নয়</div>
                <div>• অ্যাকাউন্ট নিয়ে দ্বিধা থাকলে অফিসিয়াল হেল্পলাইনে যোগাযোগ</div>
                <div>• 2-ফ্যাক্টর অথেনটিকেশন (2FA) চালু রাখুন</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
