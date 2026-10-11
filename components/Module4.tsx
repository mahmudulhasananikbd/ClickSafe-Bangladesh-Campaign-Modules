'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Key, 
  Clock, 
  ShieldCheck, 
  Check, 
  X, 
  Lock, 
  Layers, 
  ExternalLink,
  Laptop,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function Module4() {
  const [testPassword, setTestPassword] = useState('');
  const [targetAccount, setTargetAccount] = useState('');

  // Password analysis
  const hasMinLength = testPassword.length >= 12;
  const hasMixedWords = /[a-zA-Z\u0980-\u09FF]+[-_\s][a-zA-Z\u0980-\u09FF]+/.test(testPassword);
  const hasNumbersOrSymbols = /[0-9!@#$%^&*()_+]/.test(testPassword);
  const isWeakCommon = /^(123456|password|admin|12345678|bangladesh)$/i.test(testPassword.trim());

  return (
    <section id="module-4" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 34) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center font-mono font-bold">৪</span>
                <span>মডিউল ৪ ও ৫ · পরিচয় ও সুরক্ষা তালা</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১২ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                অ্যাকাউন্ট নিরাপত্তা: পাসওয়ার্ড ও 2FA
              </h2>
              <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl">
                শেখার ফল — ইউনিক পাসওয়ার্ড ও 2FA (Two-Factor Authentication) দিয়ে গুরুত্বপূর্ণ অ্যাকাউন্ট সুরক্ষিত রাখা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>১২ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 35: গল্প: নাজমার একটি চাবি—অনেক দরজা */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ৪ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                নাজমার একটি চাবি — অনেক দরজা
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>সব অ্যাকাউন্টে একই পাসওয়ার্ড:</strong> নাজমা তার ই-মেইল, ফেসবুক, ইনস্টাগ্রাম ও অনলাইন শপিং অ্যাকাউন্টে মনে রাখার সুবিধার্থে হুবহু একই পাসওয়ার্ড ব্যবহার করত।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>একটি সাধারণ সাইট থেকে তথ্য ফাঁস:</strong> অনিরাপদ একটি স্থানীয় অনলাইন শপের ডেটাবেজ হ্যাক হয়ে নাজমার ই-মেইল ও সাধারণ পাসওয়ার্ড ডার্ক ওয়েবে ছড়িয়ে পড়ে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>Credential Stuffing আক্রমণ:</strong> হ্যাকাররা সফটওয়্যার দিয়ে সেই ফাঁস হওয়া পাসওয়ার্ড স্বয়ংক্রিয়ভাবে তার ফেসবুক, বিকাশ ও গুগল অ্যাকাউন্টে বসিয়ে সবগুলোতে ঢুকে পড়ে।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/60 text-xs sm:text-sm text-emerald-300">
                <strong>নাজমার শিক্ষা:</strong> প্রতিটি অ্যাকাউন্টে সম্পূর্ণ আলাদা পাসওয়ার্ড ব্যবহার করুন। পাসওয়ার্ড ম্যানেজার ব্যবহার করলে মাস্টার পাসওয়ার্ডও অত্যন্ত শক্তিশালী হতে হবে।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/50 border border-emerald-700/60 flex items-center justify-center text-emerald-400 mx-auto">
                <Key className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">এক চাবি = সব তালা খোলা</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                একটি ঘরের চাবি হারিয়ে গেলে যেমন বাড়ির অন্য ঘরের মূল্যবান জিনিসও খোয়া যায়, ডিজিটাল দুনিয়াতেও ঠিক তেমনই।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 36: দুর্বল বনাম শক্তিশালী পাসওয়ার্ড */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৫ · তুলনা</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              দুর্বল বনাম শক্তিশালী পাসওয়ার্ড
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              একটি পাসওয়ার্ড ফাঁসে একাধিক দরজা ঝুঁকিতে পড়ে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Weak Password Column */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/40 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-rose-900/40 text-rose-400 font-bold text-sm">
                <X className="w-5 h-5" />
                <span>দুর্বল পাসওয়ার্ড (সহজে অনুমানযোগ্য)</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-center gap-2 text-rose-300 font-mono">✕ 123456</li>
                <li className="flex items-center gap-2 text-rose-300 font-mono">✕ password / admin</li>
                <li className="flex items-center gap-2 text-rose-300">✕ নিজের নাম + জন্মসাল (যেমন: anik2005)</li>
                <li className="flex items-center gap-2 text-rose-300">✕ মোবাইল নম্বর বা রোল নম্বর</li>
                <li className="flex items-center gap-2 text-rose-300">✕ সব অ্যাকাউন্টে একই পাসওয়ার্ড রাখা</li>
              </ul>
            </div>

            {/* Strong Password Column */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-emerald-900/40 text-emerald-400 font-bold text-sm">
                <Check className="w-5 h-5" />
                <span>শক্তিশালী পাসওয়ার্ড (পাসফ্রেজ কৌশল)</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-center gap-2 text-emerald-300">✓ অন্তত ১২ অক্ষরের দীর্ঘ পাসফ্রেজ</li>
                <li className="flex items-center gap-2 text-emerald-300">✓ প্রতিটি অ্যাকাউন্টে আলাদা ও ইউনিক</li>
                <li className="flex items-center gap-2 text-emerald-300">✓ কয়েকটি অপ্রত্যাশিত শব্দ একত্রীকরণ</li>
                <li className="p-2 rounded bg-slate-950 border border-emerald-900/50 font-mono text-emerald-400 text-xs font-bold">
                  উদাহরণ: সবুজ-ছাতা-চা-৭২ (Sobuj-Chata-Cha-72)
                </li>
                <li className="flex items-center gap-2 text-emerald-300">✓ কাগজে নয় — মনে রাখুন বা পাসওয়ার্ড ম্যানেজারে</li>
              </ul>
            </div>

          </div>

          {/* Interactive Password Strength Tester */}
          <div className="mt-8 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              পাসফ্রেজ টেস্ট ল্যাব (আপনার কৌশল পরীক্ষা করুন)
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={testPassword}
                onChange={e => setTestPassword(e.target.value)}
                placeholder="একটি পাসফ্রেজ টাইপ করুন (যেমন: nodi-pakhi-boithok-89)..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>

            {testPassword && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className={`p-2 rounded border flex items-center gap-2 ${
                  hasMinLength ? 'bg-emerald-950/40 border-emerald-600 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}>
                  {hasMinLength ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>১২+ অক্ষর সম্পন্ন ({testPassword.length} অক্ষর)</span>
                </div>
                <div className={`p-2 rounded border flex items-center gap-2 ${
                  hasMixedWords ? 'bg-emerald-950/40 border-emerald-600 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}>
                  {hasMixedWords ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>শব্দগুচ্ছ / পাসফ্রেজ প্যাটার্ন</span>
                </div>
                <div className={`p-2 rounded border flex items-center gap-2 ${
                  hasNumbersOrSymbols && !isWeakCommon ? 'bg-emerald-950/40 border-emerald-600 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}>
                  {hasNumbersOrSymbols && !isWeakCommon ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  <span>সংখ্যা বা বিশেষ চিহ্ন বিদ্যমান</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-600/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-amber-300">
              <strong>জোড়ায় কাজ:</strong> আজ কোন একটি অ্যাকাউন্টের পাসওয়ার্ড আলাদা করবেন? পাশের বন্ধুকে এখনই বলুন।
            </span>
            <span className="text-slate-400 font-mono">নাজমার শিক্ষা: ১টি পাসওয়ার্ড ফাঁসে সব দরজা ঝুঁকির মুখে!</span>
          </div>
        </div>

        {/* Slide 37: আপনার গুগল একাউন্ট হ্যাক হলে কি ঘটতে পারে? */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase">myactivity.google.com গাইড</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                আপনার গুগল একাউন্ট হ্যাক হলে কী ঘটতে পারে?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                myactivity.google.com — আপনার তথ্যের রেকর্ড আপনি নিজেই নিয়ন্ত্রণ করুন।
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-lg">
              ১০ মিনিট হ্যান্ডস-অন
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">১</span>
              <h4 className="text-sm font-bold text-white">খুলুন</h4>
              <p className="text-xs text-slate-400">
                myactivity.google.com-এ গিয়ে সার্চ, ইউটিউব ও লোকেশন ইতিহাস দেখুন।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">২</span>
              <h4 className="text-sm font-bold text-white">মুছুন</h4>
              <p className="text-xs text-slate-400">
                Delete → Last 90 days দিন; অটো-ডিলিট ৩ মাসে সেট করুন।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">৩</span>
              <h4 className="text-sm font-bold text-white">ডিভাইস দেখুন</h4>
              <p className="text-xs text-slate-400">
                Security → Your devices-এ গিয়ে অচেনা ডিভাইস থাকলে Sign out করুন।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">৪</span>
              <h4 className="text-sm font-bold text-white">সুরক্ষা যাচাই</h4>
              <p className="text-xs text-slate-400">
                Security Checkup-এ গিয়ে 2FA চালু করুন ও রিকভারি নম্বর আপডেট করুন।
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-emerald-400 font-semibold">
            মনে রাখুন: যে ডিভাইস আপনি চেনেন না, সেটি এখনই সাইন-আউট করুন — অটো-ডিলিট চালু রাখলে পুরোনো তথ্য নিজেই মুছে যায়।
          </div>
        </div>

        {/* Slide 38: MFA — দ্বিতীয় তালা ও অগ্রাধিকার */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৫ · করণীয়</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              MFA — দ্বিতীয় তালা ও অগ্রাধিকার
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              একটি দরজা, দুটি তালা: পাসওয়ার্ড প্রথম তালা, MFA দ্বিতীয় তালা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Metaphor Box */}
            <div className="md:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    তালা ১
                  </div>
                  <span className="text-sm font-bold text-white">শক্তিশালী পাসওয়ার্ড</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    তালা ২
                  </div>
                  <span className="text-sm font-bold text-white">MFA কোড / অ্যাপ টোকেন</span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                হ্যাকার পাসওয়ার্ড জেনে ফেললেও দ্বিতীয় তালা (MFA) ছাড়া আপনার অ্যাকাউন্টে ঢুকতে পারবে না।
              </p>
            </div>

            {/* Right Priority Hierarchy */}
            <div className="md:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white pb-2 border-b border-slate-800">
                আগে কোনটি সুরক্ষিত করবেন? (অগ্রাধিকার তালিকা)
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-600/60 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-sky-400 block">১. সবার আগে: ই-মেইল</span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      কারণ ই-মেইল দিয়েই বাকি সব অ্যাকাউন্টের পাসওয়ার্ড রিসেট করা যায়!
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-sky-300 bg-sky-900/60 px-2 py-1 rounded shrink-0">
                    সর্বোচ্চ অগ্রাধিকার
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/60 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 block">২. ব্যাংক ও মোবাইল ফাইন্যান্স (MFS)</span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      আর্থিক ক্ষতি প্রতিরোধে ২-ফ্যাক্টর ও শক্তিশালী পিন রাখুন।
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-300 bg-emerald-900/60 px-2 py-1 rounded shrink-0">
                    আর্থিক নিরাপত্তা
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-600/60 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-purple-400 block">৩. সামাজিক যোগাযোগমাধ্যম (Facebook/Insta)</span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      পরিচয় চুরি, ব্ল্যাকমেইল ও বন্ধুদের প্রতারণা থেকে বাঁচাতে।
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-purple-300 bg-purple-900/60 px-2 py-1 rounded shrink-0">
                    সামাজিক মানরক্ষা
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-emerald-400">
            পাসওয়ার্ড প্রথম তালা, MFA দ্বিতীয় তালা — দুটি তালাই সুরক্ষিত রাখুন।
          </div>
        </div>

      </div>
    </section>
  );
}
