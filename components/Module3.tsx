'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Link2, 
  Clock, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Search, 
  ShieldCheck, 
  ExternalLink,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function Module3() {
  // Decision tree simulation state
  const [treeAnswers, setTreeAnswers] = useState<{
    q1: 'clear' | 'unclear' | null;
    q2: 'clear' | 'unclear' | null;
    q3: 'clear' | 'unclear' | null;
  }>({
    q1: null,
    q2: null,
    q3: null
  });

  // VirusTotal mock input state
  const [checkUrl, setCheckUrl] = useState('');
  const [scanResult, setScanResult] = useState<{
    scanned: boolean;
    malicious: number;
    total: number;
    status: 'safe' | 'danger' | 'idle';
  }>({
    scanned: false,
    malicious: 0,
    total: 72,
    status: 'idle'
  });

  const handleSimulateScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkUrl.trim()) return;

    const isSuspicious = checkUrl.toLowerCase().includes('verify') || 
                         checkUrl.toLowerCase().includes('reward') || 
                         checkUrl.toLowerCase().includes('4') || 
                         checkUrl.toLowerCase().includes('xyz');

    if (isSuspicious) {
      setScanResult({
        scanned: true,
        malicious: 14,
        total: 72,
        status: 'danger'
      });
    } else {
      setScanResult({
        scanned: true,
        malicious: 0,
        total: 72,
        status: 'safe'
      });
    }
  };

  const isAllClear = treeAnswers.q1 === 'clear' && treeAnswers.q2 === 'clear' && treeAnswers.q3 === 'clear';
  const hasAnyUnclear = treeAnswers.q1 === 'unclear' || treeAnswers.q2 === 'unclear' || treeAnswers.q3 === 'unclear';

  return (
    <section id="module-3" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 28) */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-800/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <span className="w-6 h-6 rounded-md bg-rose-500/20 flex items-center justify-center font-mono font-bold">৩</span>
                <span>মডিউল ৩ · ফিশিং ও সোশ্যাল ইঞ্জিনিয়ারিং</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১৫ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                ফিশিং, ভুয়া লিংক ও সোশ্যাল ইঞ্জিনিয়ারিং
              </h2>
              <p className="text-sm sm:text-base text-rose-200/90 max-w-2xl">
                শেখার ফল — প্রেরক, ডোমেইন ও চাওয়া তথ্য দেখে ফিশিং (Phishing) প্রতিরোধ করতে সক্ষম হওয়া।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>১৫ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 29: গল্প: একই লিংক — দুটি সিদ্ধান্ত */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ৩ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                একই লিংক — দুটি সিদ্ধান্ত
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>জাহিদের ভুল সিদ্ধান্ত:</strong> মেসেঞ্জারে আসা &ldquo;প্রধানমন্ত্রীর শিক্ষাবৃত্তি পেতে এখনই আবেদন করুন&rdquo; শীর্ষক নকল লিংকে গিয়ে নিজের Student ID ও ই-মেইল পাসওয়ার্ড দিয়ে দেয়।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>পরিণতি:</strong> একই পাসওয়ার্ড অন্য অ্যাকাউন্টেও থাকায় পুরো Account Takeover হয়ে যায় এবং পরিচিতদের কাছে জাহিদের নামে জরুরি টাকা চাওয়া শুরু হয়।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>মাসুমের সঠিক সিদ্ধান্ত:</strong> মাসুম লিংকে ক্লিক করার আগে প্রেরক, অদ্ভুত ডোমেইন (.xyz) ও ব্যক্তিগত পাসওয়ার্ড চাওয়ার অসঙ্গতি দেখে লিংক না খুলে সরকারি পোর্টালে সরাসরি যাচাই করে রক্ষা পায়।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/60 text-xs sm:text-sm text-emerald-300">
                <strong>ক্লিকের আগে তিন প্রশ্ন:</strong> কে পাঠিয়েছে? কোথায় নিচ্ছে? কী চাইছে?
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4">
              <h4 className="text-sm font-bold text-white text-center pb-2 border-b border-slate-800">
                জাহিদ বনাম মাসুম: সিদ্ধান্তের তুলনা
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40">
                  <div className="font-bold text-rose-400 mb-1">জাহিদ: অসতর্ক ক্লিক</div>
                  <p className="text-slate-300">• তাড়াহুড়োয় পাসওয়ার্ড প্রদান</p>
                  <p className="text-slate-300">• অ্যাকাউন্ট বেহাত ও সম্মানহানি</p>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                  <div className="font-bold text-emerald-400 mb-1">মাসুম: সচেতন বিশ্লেষণ</div>
                  <p className="text-slate-300">• ৩টি প্রশ্ন দিয়ে ডোমেইন যাচাই</p>
                  <p className="text-slate-300">• নিরাপদ অ্যাকাউন্ট ও মানসিক স্বস্তি</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Slide 30: ক্লিক করার আগে — তিনটি প্রশ্নের ডিসিশন ট্রি */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৩ · সিদ্ধান্ত-ট্রি</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              ক্লিক করার আগে — তিনটি প্রশ্নের ডিসিশন ট্রি
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              ইন্টারেক্টিভ সিমুলেটর: ৩টি প্রশ্নের উত্তর দিন এবং ফলাফল দেখুন
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Question 1 */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">
                ১
              </span>
              <h4 className="text-sm font-bold text-white">কে পাঠিয়েছে?</h4>
              <p className="text-xs text-slate-400">প্রেরকের ঠিকানা ও ভাষা কি স্বাভাবিক?</p>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setTreeAnswers(prev => ({ ...prev, q1: 'clear' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    treeAnswers.q1 === 'clear' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  হ্যাঁ, স্পষ্ট ও চেনা
                </button>
                <button
                  onClick={() => setTreeAnswers(prev => ({ ...prev, q1: 'unclear' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    treeAnswers.q1 === 'unclear' ? 'bg-rose-500/20 border-rose-500 text-rose-300' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  অচেনা / অদ্ভুত ভাষা
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">
                ২
              </span>
              <h4 className="text-sm font-bold text-white">কোথায় নিয়ে যাচ্ছে?</h4>
              <p className="text-xs text-slate-400">ডোমেইনের বানান বা এক্সটেনশন কি বদলেছে?</p>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setTreeAnswers(prev => ({ ...prev, q2: 'clear' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    treeAnswers.q2 === 'clear' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  আসল অফিসিয়াল URL
                </button>
                <button
                  onClick={() => setTreeAnswers(prev => ({ ...prev, q2: 'unclear' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    treeAnswers.q2 === 'unclear' ? 'bg-rose-500/20 border-rose-500 text-rose-300' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  বানান ভুল / .xyz / ভুয়া
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="w-7 h-7 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs">
                ৩
              </span>
              <h4 className="text-sm font-bold text-white">কী চাইছে?</h4>
              <p className="text-xs text-slate-400">পাসওয়ার্ড, OTP, PIN বা টাকা চাইছে কি?</p>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setTreeAnswers(prev => ({ ...prev, q3: 'clear' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    treeAnswers.q3 === 'clear' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  কোনো সিক্রেট চায়নি
                </button>
                <button
                  onClick={() => setTreeAnswers(prev => ({ ...prev, q3: 'unclear' }))}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    treeAnswers.q3 === 'unclear' ? 'bg-rose-500/20 border-rose-500 text-rose-300' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  OTP/PIN/পাসওয়ার্ড চাইছে
                </button>
              </div>
            </div>

          </div>

          {/* Decision Outcome */}
          <div className="mt-8">
            {isAllClear && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/80 text-center space-y-1">
                <div className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>তিনটিরই উত্তর স্পষ্ট ও নিরাপদ!</span>
                </div>
                <p className="text-xs text-slate-300">
                  তবেই এগোন — তা-ও অফিশিয়াল অ্যাপ বা নিজে ব্রাউজারে টাইপ করা ঠিকানা দিয়ে।
                </p>
              </div>
            )}

            {hasAnyUnclear && (
              <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/80 text-center space-y-1">
                <div className="text-rose-400 font-bold text-sm flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5" />
                  <span>উত্তর অস্পষ্ট বা সন্দেহজনক!</span>
                </div>
                <p className="text-xs text-rose-200">
                  ক্লিক নয় • উত্তর নয় • কাউকে ফরোয়ার্ডও করবেন না। সঙ্গে সঙ্গে মুছে ফেলুন বা রিপোর্ট করুন।
                </p>
              </div>
            )}

            {!isAllClear && !hasAnyUnclear && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-400">
                উপরের ৩টি প্রশ্নে ক্লিক করে আপনার মেসেজ বা লিংকের নিরাপত্তা পরীক্ষা করুন।
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-400">
            লিংক নয় — পরিচিত ও স্বাধীন উৎসকে বিশ্বাস করুন।
          </div>
        </div>

        {/* Slide 31: ‘নকলটি খুঁজুন’ — আসল বনাম ভুয়া */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৩ · কুইজ</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              &lsquo;নকলটি খুঁজুন&rsquo; — আসল বনাম ভুয়া
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              কে প্রথম নকলটির তিনটি পার্থক্য বলতে পারবে? (৬০ সেকেন্ডের কুইজ)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Real Domain Box */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/50 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-900/60">
                <span className="text-xs font-bold text-emerald-400 uppercase">আসল (Authentic)</span>
                <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> নিরাপদ
                </span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg font-mono text-emerald-400 text-base font-bold text-center border border-emerald-900/40">
                bkash.com
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>সঠিক বানান, অফিশিয়াল ডোমেইন ও বৈধ SSL সার্টিফিকেট</li>
                <li>কখনো মেসেজে বা লিংকে OTP বা PIN চায় না</li>
                <li>অফিসিয়াল অ্যাপের ভেতরেই সব লেনদেন যাচাই করা যায়</li>
              </ul>
            </div>

            {/* Fake Domain Box */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border-2 border-rose-500/50 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-rose-900/60">
                <span className="text-xs font-bold text-rose-400 uppercase">ভুয়া (Phishing)</span>
                <span className="text-xs text-rose-300 font-semibold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> ফাঁদ
                </span>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg font-mono text-rose-400 text-base font-bold text-center border border-rose-900/40">
                bk4sh-verify.com
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>একটি অক্ষর বদল: <strong className="text-rose-300">a → 4</strong> (Typosquatting)</li>
                <li>অদ্ভুত সাবডোমেইন, হাইফেন ও ভেরিফিকেশনের তাড়া</li>
                <li>&lsquo;২০,০০০ টাকা জিতেছেন&rsquo; বলে লগইন ও পিন হাতানোর ফাঁদ</li>
              </ul>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            বার্তার লিংকে নয় — নিজে ব্রাউজারে ঠিকানা লিখুন বা অফিশিয়াল অ্যাপ খুলুন।
          </div>
        </div>

        {/* Slide 32: দলগত অনুশীলন — সন্দেহজনক বার্তা */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৩ · অংশগ্রহণ</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                দলগত অনুশীলন — সন্দেহজনক বার্তা বিশ্লেষণ
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ৩টি সতর্ক সংকেত খুঁজুন: পুরস্কার • জরুরি চাপ • অগ্রিম টাকা (সময়: ৩ মিনিট)
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-950/60 border border-amber-800/80 px-3 py-1.5 rounded-lg">
              সময়: ৩ মিনিট
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Suspicious Message Card */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-rose-800/50 space-y-4">
              <span className="text-xs font-mono font-bold text-rose-400 uppercase block">
                বাস্তব উদাহরণ বার্তা (SMS/WhatsApp):
              </span>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
                &ldquo;অভিনন্দন! আপনি ২০,০০০ টাকা জিতেছেন। <br />
                আজই দাবি করুন: <span className="text-rose-400 underline">bkash-reward.xyz</span> <br />
                প্রসেসিং ফি ২০০ টাকা পাঠান। অফার আজ রাতেই শেষ!&rdquo;
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                <div className="p-2 rounded bg-rose-950/40 text-rose-300 border border-rose-900/60">
                  ১. পুরস্কার (লোভ)
                </div>
                <div className="p-2 rounded bg-amber-950/40 text-amber-300 border border-amber-900/60">
                  ২. জরুরি চাপ (তাড়া)
                </div>
                <div className="p-2 rounded bg-sky-950/40 text-sky-300 border border-sky-900/60">
                  ৩. অগ্রিম ফি (টাকা)
                </div>
              </div>
            </div>

            {/* Steps Guide */}
            <div className="lg:col-span-5 space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">১</span>
                <span>দলে বার্তাটি মনোযোগ দিয়ে পড়ুন</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">২</span>
                <span>তিনটি সংকেত চিহ্নিত করুন</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">৩</span>
                <span>একটি নিরাপদ পদক্ষেপ খাতায় লিখুন</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">৪</span>
                <span>৩০ সেকেন্ডে পুরো ক্লাসে উপস্থাপন করুন</span>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-rose-300">
            লোগো ও ভাষা আসল মনে হলেই বার্তা সত্য হয় না।
          </div>
        </div>

        {/* Slide 33: VirusTotal দিয়ে Malware এবং Phishing যাচাই */}
        <div id="simulator" className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase">
                <Search className="w-4 h-4" />
                <span>virustotal.com ইন্টারেক্টিভ গাইড</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                VirusTotal দিয়ে Malware এবং Phishing যাচাই
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                সন্দেহজনক লিংক, ফাইল বা APK খোলার আগেই ৭০+ অ্যান্টিভাইরাস ইঞ্জিন দিয়ে বিনামূল্যে পরীক্ষা করুন।
              </p>
            </div>
            <span className="text-xs text-slate-300 font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              ১০ মিনিট ইন্টারেক্টিভ
            </span>
          </div>

          {/* Interactive URL Scanner Simulator */}
          <div className="my-6 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <form onSubmit={handleSimulateScan} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={checkUrl}
                onChange={e => setCheckUrl(e.target.value)}
                placeholder="সন্দেহজনক লিংক দিন (যেমন: bk4sh-verify.com বা bkash.com)..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>স্ক্যান সিমুলেট করুন</span>
              </button>
            </form>

            {/* Scan Result Simulator View */}
            {scanResult.scanned && (
              <div className={`p-4 rounded-lg border flex items-center justify-between gap-4 ${
                scanResult.status === 'danger'
                  ? 'bg-rose-950/40 border-rose-600 text-rose-200'
                  : 'bg-emerald-950/40 border-emerald-600 text-emerald-200'
              }`}>
                <div>
                  <span className="text-xs font-mono font-bold block uppercase">স্ক্যান ফলাফল:</span>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {scanResult.status === 'danger' ? (
                      <span className="text-rose-400">
                        {scanResult.malicious}/{scanResult.total} সিকিউরিটি ভেন্ডর একে ক্ষতিকর (Malicious/Phishing) চিহ্নিত করেছে!
                      </span>
                    ) : (
                      <span className="text-emerald-400">
                        ০/{scanResult.total} কোনো ক্ষতিকর ফাইল বা লিংক শনাক্ত হয়নি (ক্লিন)।
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {scanResult.status === 'danger' 
                      ? 'সাবধান! এই লিংকে ভুলেও ক্লিক করবেন না বা কোনো তথ্য দেবেন না।'
                      : 'অফিসিয়াল ডোমেইন নিশ্চিত হয়ে তবেই প্রবেশ করুন।'}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-xl font-mono font-black ${scanResult.status === 'danger' ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {scanResult.malicious} / {scanResult.total}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 4 Steps from Slide 33 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs mb-2">১</span>
              <h4 className="text-sm font-bold text-white">লিংক পরীক্ষা</h4>
              <p className="text-xs text-slate-400 mt-1">URL ট্যাবে সন্দেহজনক লিংক পেস্ট করে Enter চাপুন।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs mb-2">২</span>
              <h4 className="text-sm font-bold text-white">ফাইল পরীক্ষা</h4>
              <p className="text-xs text-slate-400 mt-1">FILE ট্যাবে APK বা PDF আপলোড করুন (৬৫০ MB পর্যন্ত)।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs mb-2">৩</span>
              <h4 className="text-sm font-bold text-white">ফল পড়ুন</h4>
              <p className="text-xs text-slate-400 mt-1">লাল সংখ্যা = ইঞ্জিন ম্যালওয়্যার পেয়েছে → খুলবেন না।</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center text-xs mb-2">৪</span>
              <h4 className="text-sm font-bold text-white">সিদ্ধান্ত</h4>
              <p className="text-xs text-slate-400 mt-1">১টি ডিটেকশন থাকলেও শুধু অফিসিয়াল উৎস থেকেই অ্যাপ নামান।</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-amber-300">
              ⚠️ ব্যক্তিগত সংবেদনশীল ফাইল আপলোড নয় — আপলোড করা ফাইল গবেষক ও অন্যরাও দেখতে পারে।
            </span>
            <span className="text-emerald-400 font-semibold">
              অভ্যাস: অচেনা লিংক এলে আগে VirusTotal, পরে ক্লিক।
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
