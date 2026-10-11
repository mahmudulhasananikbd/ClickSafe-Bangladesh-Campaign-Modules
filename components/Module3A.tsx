'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Gift, 
  CreditCard, 
  Play, 
  RotateCcw, 
  CheckCircle, 
  Building2,
  Users
} from 'lucide-react';

export default function Module3A() {
  const [groupTimer, setGroupTimer] = useState(240); // 4 minutes = 240 seconds
  const [isGroupTimerRunning, setIsGroupTimerRunning] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<number>(1);

  useEffect(() => {
    if (!isGroupTimerRunning) return;
    const timer = setInterval(() => {
      setGroupTimer(prev => {
        if (prev <= 1) {
          setIsGroupTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isGroupTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="module-3a" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 23) */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-800/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <span className="w-6 h-6 rounded-md bg-rose-500/20 flex items-center justify-center font-mono font-bold">৩ক</span>
                <span>মডিউল ৩ক · স্থানীয় প্রেক্ষিত</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১০ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                স্থানীয় প্রতারণার ধরন
              </h2>
              <p className="text-sm sm:text-base text-rose-200/90 max-w-2xl">
                শেখার ফল — স্থানীয় স্ক্যামের সংকেত দেখে স্বাধীনভাবে যাচাই করতে পারা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>১০ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 24: বাংলাদেশে ছয়টি প্রতারণা-হটস্পট */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-rose-400 uppercase">মডিউল ৩ক · প্রেক্ষাপট</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              বাংলাদেশে ছয়টি প্রতারণা-হটস্পট
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              আমাদের সমাজে প্রতিদিন এই ছয়টি পরিচিত পরিস্থিতিতে অপরাধীরা ফাঁদ তৈরি করে:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              onClick={() => setSelectedHotspot(1)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedHotspot === 1 ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                  ১
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ATM ও bKash/Nagad বুথ</h4>
                  <p className="text-xs text-slate-400">সাহায্য করার নামে পিন হাতিয়ে নেওয়া</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedHotspot(2)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedHotspot === 2 ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                  ২
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">&lsquo;সন্তান হাসপাতালে&rsquo; ফোন</h4>
                  <p className="text-xs text-slate-400">বাবা-মাকে আতঙ্কিত করে তাৎক্ষণিক টাকা চাওয়া</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedHotspot(3)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedHotspot === 3 ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                  ৩
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">চাকরি ও ইন্টার্নশিপ</h4>
                  <p className="text-xs text-slate-400">নিয়োগের নামে রেজিস্ট্রেশন বা জামানত ফি</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedHotspot(4)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedHotspot === 4 ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                  ৪
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">বিশ্ববিদ্যালয় ভর্তি মৌসুম</h4>
                  <p className="text-xs text-slate-400">ভেতরের কোটায় চান্স পাইয়ে দেওয়ার ভুয়া আশ্বাস</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedHotspot(5)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedHotspot === 5 ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                  ৫
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">বিয়ের প্রস্তাব (ম্যাট্রিমোনিয়াল)</h4>
                  <p className="text-xs text-slate-400">প্রবাসী বা পার্সেল উপহারের গল্প ফাঁদ</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedHotspot(6)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedHotspot === 6 ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                  ৬
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">দুর্যোগ বা রমজানের অনুদান</h4>
                  <p className="text-xs text-slate-400">বন্যা ও অসুস্থতার ভুয়া ছবি দিয়ে ব্যক্তিগত ফান্ডরাইজিং</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-rose-300">
            পরিচিত ভাষা ও পরিচিত নাম — সত্যতার প্রমাণ নয়।
          </div>
        </div>

        {/* Slide 25 & 26: স্থানীয় প্রতারণা বিশ্লেষণ কার্ড ১-৬ */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৩ক · বিস্তারিত কার্ড ১-৬</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              সতর্ক সংকেত ও স্বাধীন যাচাই পদ্ধতি
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">ATM ও bKash/Nagad</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত:</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>সাহায্যের নামে PIN লক্ষ্য করা</li>
                  <li>&lsquo;লেনদেন আটকে গেছে&rsquo; বলে ফোনে ফোন দেওয়া</li>
                  <li>ভুয়া লেনদেনের এডিটেড স্ক্রিনশট পাঠানো</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
                <span className="text-emerald-400 font-bold block mb-1">যাচাই করুন:</span>
                <p className="text-slate-300">নিজের হাতে লেনদেন করুন; নিজের অ্যাপে ব্যালেন্স ও স্টেটমেন্ট মিলিয়ে দেখুন।</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">&lsquo;সন্তান হাসপাতালে&rsquo;</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত:</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>চরম আতঙ্ক তৈরি করে অবিলম্বে টাকা চাওয়া</li>
                  <li>&lsquo;কাউকে বলবেন না, রক্ত লাগবে&rsquo;</li>
                  <li>&lsquo;এখনই পাঠান, এক মিনিটও দেরি নয়&rsquo;</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
                <span className="text-emerald-400 font-bold block mb-1">যাচাই করুন:</span>
                <p className="text-slate-300">সন্তানের পরিচিত নম্বরে বা স্কুলের/হাসপাতালের অফিশিয়াল ল্যান্ডলাইনে ফোন করে নিশ্চিত হোন।</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">চাকরি ও ইন্টার্নশিপ</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত:</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>&lsquo;রেজিস্ট্রেশন ফি&rsquo; বা &lsquo;সিকিউরিটি মানি&rsquo; চাওয়া</li>
                  <li>ভুয়া নিয়োগপত্র ও ফেসবুক পেজ</li>
                  <li>ইন্টারভিউয়ের আগেই ব্যাংক অ্যাকাউন্ট তথ্য চাওয়া</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
                <span className="text-emerald-400 font-bold block mb-1">যাচাই করুন:</span>
                <p className="text-slate-300">অফিসিয়াল ক্যারিয়ার পোর্টাল, সরকারি গেজেট ও ই-মেইল ডোমেইন (@company.com) দেখুন।</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">বিশ্ববিদ্যালয় ভর্তি</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত:</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>&lsquo;ভেতরের বড় লোক আছে, আসন কনফার্ম&rsquo;</li>
                  <li>&lsquo;টাকা দিলে মেধা তালিকায় তুলে দেব&rsquo;</li>
                  <li>ইনবক্সে প্রশ্ন বা গোপন সিটের নিশ্চয়তা দেওয়া</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
                <span className="text-emerald-400 font-bold block mb-1">যাচাই করুন:</span>
                <p className="text-slate-300">আসন, ফল, ফি ও তারিখ — কেবল বিশ্ববিদ্যালয়ের অফিসিয়াল ওয়েবসাইট ও জাতীয় নোটিশ বোর্ড।</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">বিয়ের প্রস্তাব</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত:</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>খুব দ্রুত অতি-ঘনিষ্ঠতা তৈরি করা</li>
                  <li>বিদেশ-ব্যবসা-উপহার বা কাস্টমস ফি&rsquo;র গল্প</li>
                  <li>ব্যক্তিগত সংবেদনশীল ছবি ও এনআইডি চাওয়া</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
                <span className="text-emerald-400 font-bold block mb-1">যাচাই করুন:</span>
                <p className="text-slate-300">পরিবার বা বিশ্বস্ত মুরুব্বির সঙ্গে খোলামেলা আলোচনা করুন; অপরিচিত কারও সাথে কখনো একা দেখা নয়।</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Gift className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">ভুয়া অনুদান আবেদন</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-rose-400 font-bold">সতর্ক সংকেত:</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>বন্যা, অগ্নিকাণ্ড বা রমজানের ধর্মীয় আবেগ কাজে লাগানো</li>
                  <li>অচেনা ব্যক্তির ব্যক্তিগত নম্বরে সরাসরি টাকা চাওয়া</li>
                  <li>&lsquo;এখনই পাঠান&rsquo; বলে মানসিকভাবে চাপ দেওয়া</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs">
                <span className="text-emerald-400 font-bold block mb-1">যাচাই করুন:</span>
                <p className="text-slate-300">সংগঠনের সরকারি নিবন্ধন ও অফিসিয়াল ব্যাংক/MFS মার্চেন্ট অ্যাকাউন্ট নম্বর মিলিয়ে নিন।</p>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/50 text-center text-xs sm:text-sm text-rose-200">
            <strong>অগ্রিম টাকা, গোপনীয়তার দাবি ও টাকার তাড়া — এই তিনটেই প্রতারণার চেনা লক্ষণ।</strong>
          </div>
        </div>

        {/* Slide 27: দলীয় অনুশীলন — প্রতারণা শনাক্ত করুন */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৩ক · অংশগ্রহণ</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                দলীয় অনুশীলন — প্রতারণা শনাক্ত করুন
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ৪–৫ জনের দল • একজন উপস্থাপক। প্রতিটি দল ১টি ধরন বেছে নিয়ে ৩টি প্রশ্নের উত্তর তৈরি করুন (৩০ সেকেন্ডে উপস্থাপন)।
              </p>
            </div>

            {/* 4-Minute Timer */}
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl shrink-0">
              <div className="text-center px-2">
                <span className="text-2xl font-mono font-bold text-amber-400">
                  {formatTimer(groupTimer)}
                </span>
                <span className="text-[10px] text-slate-400 block uppercase">দলীয় আলোচনা টাইমার</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsGroupTimerRunning(!isGroupTimerRunning)}
                  className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg"
                >
                  {isGroupTimerRunning ? 'বিরতি' : 'শুরু'}
                </button>
                <button
                  onClick={() => {
                    setIsGroupTimerRunning(false);
                    setGroupTimer(240);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                ১
              </span>
              <h4 className="text-sm font-bold text-white">কোন হিউম্যান সাইকোলজি ব্যবহার করছে?</h4>
              <p className="text-xs text-slate-400">ভয়, লোভ, তাড়া, বিশ্বাস নাকি কর্তৃত্ব?</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                ২
              </span>
              <h4 className="text-sm font-bold text-white">প্রতারক কী চাইছে?</h4>
              <p className="text-xs text-slate-400">OTP, টাকা, পাসওয়ার্ড নাকি ব্যক্তিগত ছবি?</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                ৩
              </span>
              <h4 className="text-sm font-bold text-white">কীভাবে স্বাধীনভাবে যাচাই করবেন?</h4>
              <p className="text-xs text-slate-400">অফিসিয়াল হেল্পলাইন, স্বতন্ত্র কল নাকি স্বশরীরে দেখা?</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <span className="text-xs sm:text-sm font-bold text-amber-300">
              আবেগ চিনলে অপরাধীদের সব কৌশল নিমিষেই ভেঙে যায়।
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
