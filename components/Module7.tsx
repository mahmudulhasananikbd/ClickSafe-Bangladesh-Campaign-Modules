'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Clock, 
  KeyRound, 
  CheckCircle, 
  XCircle, 
  PhoneCall, 
  TrendingDown, 
  Gamepad2, 
  ShieldAlert, 
  PhoneOff,
  AlertOctagon,
  Copy,
  Check
} from 'lucide-react';

export default function Module7() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <section id="module-7" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 48) */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <span className="w-6 h-6 rounded-md bg-rose-500/20 flex items-center justify-center font-mono font-bold">৭</span>
                <span>মডিউল ৭ ও ৪ · আর্থিক নিরাপত্তা</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১২ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                আর্থিক প্রতারণা, OTP ও মোবাইল ফাইন্যান্স
              </h2>
              <p className="text-sm sm:text-base text-rose-200/90 max-w-2xl">
                শেখার ফল — OTP/MFS প্রতারণা চিনে তাৎক্ষণিকভাবে আর্থিক ক্ষতি থামাতে পারা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>১২ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 49: গল্প: ব্যস্ত দোকানে আনোয়ারের ৫০,০০০ টাকার ভুল */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertOctagon className="w-4 h-4" />
                <span>মডিউল ৭ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                ব্যস্ত দোকানে আনোয়ারের ৫০,০০০ টাকার ভুল
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>ব্যস্ত সময়ে স্পুফড কলার আইডি থেকে ফোন:</strong> দোকানে ক্রেতাদের ভিড়ের সময় আনোয়ারের ফোনে &ldquo;bKash Support&rdquo; নামে ট্রু-কলারে প্রদর্শিত একটি কল আসে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>“KYC না করলে এখনই অ্যাকাউন্ট বন্ধ”:</strong> কলার অত্যন্ত কর্তৃত্বপূর্ণ সুরে দ্রুত কথা বলে ভয় দেখায় যে জাতীয় পরিচয়পত্র আপডেট না করায় তার মার্চেন্ট ও পার্সোনাল ব্যালেন্স ফ্রিজ হতে চলেছে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>OTP বলার সঙ্গে সঙ্গে ৫০,০০০ টাকা গায়েব:</strong> বিভ্রান্ত হয়ে আনোয়ার ফোনে আসা কোডটি বলে দেওয়ার সাথে সাথে প্রতারক তার অ্যাকাউন্ট নতুন ফোনে লগইন করে ৫০,০০০ টাকা অন্য নম্বরে ট্রান্সফার করে দেয়।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> OTP, PIN বা পাসওয়ার্ড কাউকে ফোনে কখনো বলবেন না — কল কেটে অফিসিয়াল অ্যাপের ভেতরে হেল্পলাইনে যোগাযোগ করুন।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-rose-950/40 border border-rose-700/60 flex items-center justify-center text-rose-400 mx-auto">
                <CreditCard className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">কলার আইডি স্পুফিংয়ের ফাঁদ</h4>
              <p className="text-xs text-slate-400">
                প্রযুক্তির মাধ্যমে স্ক্রিনে যেকোনো ব্যাংকের নাম বা নম্বর দেখানো সম্ভব। স্ক্রিনে ব্যাংকের নাম দেখলেই অন্ধবিশ্বাস করবেন না।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 50: OTP = আপনার চাবি (কখনোই শেয়ার নয়) */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৪ · মূল ধারণা</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              OTP = আপনার চাবি
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              ঘরের চাবি কাউকে দিলে যেমন আলমারির নিয়ন্ত্রণ আপনার থাকে না, OTP-ও ঠিক তেমন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Key Box */}
            <div className="md:col-span-5 bg-slate-950 p-6 rounded-2xl border border-amber-600/40 text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <KeyRound className="w-8 h-8 text-amber-400" />
                <span className="text-2xl font-black font-mono tracking-widest text-white">
                  ৪ ৮ ২ ৯ ১ ৭
                </span>
              </div>
              <div className="text-xs text-amber-300 font-semibold">
                চাবি কাউকে দিলে দরজা আর আপনার থাকে না।
              </div>
            </div>

            {/* Never Share List */}
            <div className="md:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                কখনোই কারও সঙ্গে শেয়ার করবেন না:
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/40 font-bold text-rose-300 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>OTP (ওয়ান টাইম পিন)</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/40 font-bold text-rose-300 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>গোপন PIN নম্বর</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/40 font-bold text-rose-300 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>পাসওয়ার্ড</span>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/40 font-bold text-rose-300 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>স্ক্রিন-শেয়ার অ্যাপ (AnyDesk)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Group Pledge Bar */}
          <div className="mt-8 p-4 rounded-xl bg-amber-950/30 border border-amber-600/50 text-center">
            <span className="text-sm sm:text-base font-extrabold text-white">
              একসঙ্গে বলুন: &ldquo;আমি ফোনে কাউকে কখনো OTP বলব না!&rdquo;
            </span>
            <p className="text-xs text-amber-300 mt-1">
              OTP আপনার ব্যক্তিগত নিরাপত্তা-কোড — কারও সঙ্গে নয়, কখনোই নয়।
            </p>
          </div>
        </div>

        {/* Slide 51: স্ক্রিনশট নয়—নিজের অ্যাপই প্রমাণ */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৭ · যাচাই কৌশল</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              স্ক্রিনশট নয় — নিজের অ্যাপই চূড়ান্ত প্রমাণ
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              ছবি বা স্ক্রিনশট ফটোশপ করে কয়েক সেকেন্ডে নকল করা যায়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-3">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>যা কখনোই বিশ্বাস করবেন না:</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>&ldquo;টাকা পাঠিয়েছি&rdquo; বলে মেসেজে পাঠানো ছবি/স্ক্রিনশট</li>
                <li>&ldquo;ভুল করে আপনার নম্বরে টাকা গেছে, ফেরত দিন&rdquo; ফোনের দাবি</li>
                <li>মূল নম্বর বাদ দিয়ে অন্য কোনো নম্বরে টাকা ব্যাক চাওয়া</li>
                <li>ব্যাংক সাপোর্ট বলে AnyDesk বা স্ক্রিন-শেয়ার অ্যাপ ইনস্টল করানো</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>যা নিশ্চিতভাবে করবেন:</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>নিজের ফোনে অফিশিয়াল বিকাশ/নগদ অ্যাপ খুলে Balance দেখুন</li>
                <li>Statement ও Transaction ID মিলিয়ে দেখুন টাকা ঢুকেছে কি না</li>
                <li>অপরিচিতের কথায় তৎক্ষণাৎ রিফান্ড বা ওটিপি দেবেন না</li>
                <li>দ্বিধা হলে অফিশিয়াল হেল্পলাইনে কল করে হোল্ড করান</li>
              </ul>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-rose-300">
            Screenshot কোনো লেনদেনের চূড়ান্ত প্রমাণ নয়।
          </div>
        </div>

        {/* Slide 52: সহজ টাকার ফাঁদ—লাভ দেখিয়ে ক্ষতি বাড়ায় */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৭ · ইজি মানি স্ক্যাম</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              সহজ টাকার ফাঁদ — লাভ দেখিয়ে ক্ষতি বাড়ায়
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              টাস্ক স্ক্যাম, টেলিগ্রাম ইনভেস্টমেন্ট ও ভুয়া ক্রিপ্টো প্ল্যাটফর্মের ৫টি ক্রমিক ধাপ:
            </p>
          </div>

          {/* 5 Progression Steps */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">১</span>
                <div>
                  <h4 className="text-sm font-bold text-white">৳১,০০০ ছোট &ldquo;টাস্ক&rdquo; বা ইনভেস্টমেন্ট</h4>
                  <p className="text-xs text-slate-400">ইউটিউব ভিডিও লাইক বা রেটিং দেওয়ার ছলে শুরু।</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                ফাঁদের শুরু
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">২</span>
                <div>
                  <h4 className="text-sm font-bold text-white">৳১,৩০০ ফেরত (আংশিক লাভ ফেরত)</h4>
                  <p className="text-xs text-slate-400">বিশ্বাস অর্জন করতে প্রথম দফায় ৩০০ টাকা বোনাস পাঠিয়ে দেয়।</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                বিশ্বাস অর্জন
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">৩</span>
                <div>
                  <h4 className="text-sm font-bold text-white">৳১০,০০০ বড় deposit ও VIP লেভেলের চাপ</h4>
                  <p className="text-xs text-slate-400">বড় প্রফিট পেতে বড় অঙ্কের টাকা জমা দিতে বাধ্য করে।</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950 px-2.5 py-1 rounded border border-amber-800">
                বড় ফাঁদ
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs">৪</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Withdrawal-এর আগে &ldquo;Tax/Release Fee&rdquo; দাবি</h4>
                  <p className="text-xs text-slate-400">টাকা তোলার রিকোয়েস্ট দিলে বলে আরও ৫,০০০ টাকা ফি দিলে সব ফেরত পাবেন।</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950 px-2.5 py-1 rounded border border-rose-800">
                ব্ল্যাকমেইল ফি
              </span>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/40 border-2 border-rose-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-rose-600 text-white font-bold flex items-center justify-center text-xs">৫</span>
                <div>
                  <h4 className="text-sm font-bold text-white">BLOCKED (এজেন্ট গায়েব ও প্ল্যাটফর্ম বন্ধ)</h4>
                  <p className="text-xs text-rose-200">মূলধন ও ফি সহ সম্পূর্ণ টাকার ক্ষতি।</p>
                </div>
              </div>
              <span className="text-xs font-mono font-black text-rose-300 bg-rose-900 px-3 py-1 rounded">
                সর্বশান্ত
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-amber-300">
            বাংলাদেশে ক্রিপ্টো বা ইজি-মানি প্রস্তাব দেখলে বাংলাদেশ ব্যাংকের অফিশিয়াল নির্দেশনা যাচাই করুন।
          </div>
        </div>

        {/* Slide 53: বেটিং ও গেমিং—দুটি ফাঁদ, একই ক্ষতি */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-rose-400 uppercase">মডিউল ৭ · তরুণদের ঝুঁকি</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              বেটিং ও গেমিং — দুটি ফাঁদ, একই ক্ষতি
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              লোভ → install/payment → account ও contact data চুরি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <TrendingDown className="w-4 h-4" />
                <span>বেটিং / জুয়া সাইবার ফাঁদ</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>&ldquo;Sure tip&rdquo; বা Fixed match-এর প্রলোভন</li>
                <li>প্রথমে ছোট জয় বা বোনাস দেখিয়ে নেশা ধরানো</li>
                <li>ধারদেনা করে বড় bet ধরার মানসিক চাপ</li>
                <li>অচেনা প্ল্যাটফর্ম বা টেলিগ্রাম এজেন্ট দ্বারা অর্থ আত্মসাৎ</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Gamepad2 className="w-4 h-4" />
                <span>Gaming Fraud (অনলাইন গেম স্ক্যাম)</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Free Diamond বা Hack tool দেওয়ার নামে ক্ষতিকর APK</li>
                <li>Fake tournament registration fee হাতিয়ে নেওয়া</li>
                <li>গেমের আইডিতে ঢুকে জিমেইল পাসওয়ার্ড চুরি ও বিক্রয়</li>
                <li>Advance টাকা বিকাশ নেওয়ার পর ব্লক করে দেওয়া</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Slide 54: ভুল করে OTP বা PIN বলে ফেললে — ৫ ধাপ */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৪ · জরুরি অ্যাকশন</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                ভুল করে OTP বা PIN বলে ফেললে — ৫টি জরুরি উদ্ধার ধাপ
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                লজ্জায় চুপ থাকবেন না — দ্রুত জানালেই ক্ষতি সর্বনিম্নে নামিয়ে আনা সম্ভব।
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800">
              জরুরি হেল্পলাইন সক্রিয়
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs">১</span>
              <h4 className="text-sm font-bold text-white">কল কেটে দিন</h4>
              <p className="text-xs text-slate-400">প্রতারকের সঙ্গে আর কোনো কথা নয়, তাৎক্ষণিক সংযোগ বিচ্ছিন্ন করুন।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">২</span>
              <h4 className="text-sm font-bold text-white">অফিসিয়াল অ্যাপ থেকে নম্বর নিন</h4>
              <p className="text-xs text-slate-400">মেসেজের নম্বরে নয়, অ্যাপ বা আসল ওয়েবসাইট থেকে হেল্পলাইন খুঁজুন।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">৩</span>
              <h4 className="text-sm font-bold text-white">সেবাদাতাকে কল করে ব্লক করুন</h4>
              <p className="text-xs text-slate-400">বিকাশ/নগদ হেল্পলাইনে ফোন দিয়ে অ্যাকাউন্ট সাময়িক ফ্রিজ করার অনুরোধ জানান।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">৪</span>
              <h4 className="text-sm font-bold text-white">প্রমাণ সংরক্ষণ</h4>
              <p className="text-xs text-slate-400">কলের নম্বর, সময় ও এসএমএসের স্ক্রিনশট নিয়ে রাখুন।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs">৫</span>
              <h4 className="text-sm font-bold text-white">বিশ্বস্তজনকে জানান</h4>
              <p className="text-xs text-slate-400">অভিভাবক, বড় ভাই বা শিক্ষককে সত্য জানান এবং আইনি সহায়তা নিন।</p>
            </div>
          </div>

          {/* Quick Helplines Strip */}
          <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-6 font-mono font-bold">
              <button 
                onClick={() => copyToClipboard('16247')}
                className="hover:text-emerald-400 flex items-center gap-1.5"
              >
                <span>বিকাশ: ১৬২৪৭</span>
                {copiedNumber === '16247' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>

              <button 
                onClick={() => copyToClipboard('16167')}
                className="hover:text-emerald-400 flex items-center gap-1.5"
              >
                <span>নগদ: ১৬১৬৭</span>
                {copiedNumber === '16167' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>

              <button 
                onClick={() => copyToClipboard('999')}
                className="text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
              >
                <span>জরুরি পুলিশ: ৯৯৯</span>
                {copiedNumber === '999' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>
            </div>

            <span className="text-slate-400">
              ডায়াল করার আগে অফিশিয়াল ওয়েবসাইটে নম্বরটি মিলিয়ে নিন।
            </span>
          </div>

          <div className="mt-4 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            লজ্জায় চুপ থাকবেন না — দ্রুত জানালেই বড় ক্ষতি কমে যায়।
          </div>
        </div>

      </div>
    </section>
  );
}
