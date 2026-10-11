'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LifeBuoy, 
  Clock, 
  ShieldAlert, 
  FileText, 
  PhoneCall, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle,
  Smartphone,
  ExternalLink,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function Module10() {
  const [selectedIncidentPhase, setSelectedIncidentPhase] = useState<'5m' | '30m' | '24h'>('5m');

  return (
    <section id="module-10" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 68) */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <span className="w-6 h-6 rounded-md bg-rose-500/20 flex items-center justify-center font-mono font-bold">১০</span>
                <span>মডিউল ১০ · ইনসিডেন্ট রেসপন্স ও উদ্ধার</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১০–১৫ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                ভুল হয়ে গেলে কী করবেন (Incident Response)
              </h2>
              <p className="text-sm sm:text-base text-rose-200/90 max-w-2xl">
                শেখার ফল — সাইবার দুর্ঘটনার প্রথম ৫ মিনিট, ৩০ মিনিট ও ২৪ ঘণ্টা সামলানোর স্পষ্ট রোডম্যাপ।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>১৫ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 69: গল্প: “No network” — রায়হানের প্রথম সংকেত */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ১০ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                “No network” — রায়হানের প্রথম সংকেত
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>সকালে “No Service” — রিস্টার্টেও সিগন্যাল গায়েব:</strong> সকালে ঘুম থেকে উঠে রায়হান দেখে ফোনে কোনো নেটওয়ার্ক নেই। বেশ কয়েকবার ফোন অন-অফ করেও কোনো সিম নেটওয়ার্ক ফিরে এলো না।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>একই সময়ে ওয়াইফাইয়ে ই-মেইল লগইন সতর্কবার্তা:</strong> ওয়াইফাই অন করতেই জিমেইলে অ্যালার্ট আসে—নতুন ডিভাইসে অ্যাকাউন্ট লগইন হয়েছে এবং বিকাশ থেকে টাকা ক্যাশ-আউটের নোটিফিকেশন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>SIM Replacement করে OTP হাতিয়ে নেওয়া:</strong> প্রতারকরা ভুয়া বায়োমেট্রিক বা এনআইডি দিয়ে কাস্টমার কেয়ার থেকে সিম রিপ্লেস করে ওটিপি নিজেদের ডিভাইসে নিয়ে রায়হানের অ্যাকাউন্ট দখল করেছে।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> হঠাৎ No Network + Login Alert = সম্ভাব্য বড় ধরনের সাইবার দুর্ঘটনা! সঙ্গে সঙ্গে মোবাইল অপারেটরে কল দিয়ে সিম ও ব্যাংক অ্যাকাউন্ট ফ্রিজ করুন।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-rose-950/40 border border-rose-700/60 flex items-center justify-center text-rose-400 mx-auto">
                <Smartphone className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">SIM Swap স্ক্যাম সংকেত</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                সিম হঠাৎ বন্ধ হয়ে গেলে তাকে কখনো সাধারণ নেটওয়ার্ক সমস্যা মনে করে সারাদিন বসে থাকবেন না।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 70: প্রথম ৫ মিনিট · ৩০ মিনিট · ২৪ ঘণ্টা টাইমলাইন */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১০ · টাইমলাইন</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                প্রথম ৫ মিনিট · ৩০ মিনিট · ২৪ ঘণ্টা
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                আতঙ্কে সব একসঙ্গে নয় — ধাপে ধাপে ঠান্ডা মাথায় সামলান।
              </p>
            </div>

            {/* Time Toggle Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl">
              <button
                onClick={() => setSelectedIncidentPhase('5m')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedIncidentPhase === '5m' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ৫ মিনিট
              </button>
              <button
                onClick={() => setSelectedIncidentPhase('30m')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedIncidentPhase === '30m' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ৩০ মিনিট
              </button>
              <button
                onClick={() => setSelectedIncidentPhase('24h')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedIncidentPhase === '24h' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ২৪ ঘণ্টা
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 5 Min Column */}
            <div className={`p-5 rounded-xl border transition-all ${
              selectedIncidentPhase === '5m' ? 'bg-rose-950/20 border-rose-500 ring-2 ring-rose-500/30' : 'bg-slate-950 border-slate-800'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-rose-400 uppercase">জরুরি উইন্ডো</span>
                <span className="text-xs font-mono font-bold text-white bg-rose-600 px-2 py-0.5 rounded">৫ মিনিট</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">✓ পাসওয়ার্ড বদল ও 2FA চালু করুন</li>
                <li className="flex items-start gap-2">✓ অফিশিয়াল হেল্পলাইনে কল দিয়ে ফ্রিজ করান</li>
                <li className="flex items-start gap-2">✓ Find My Device দিয়ে চুরি হওয়া ফোন লক করুন</li>
                <li className="flex items-start gap-2">✓ স্ক্রিনশট ও প্রমাণ সংরক্ষণ করুন</li>
              </ul>
            </div>

            {/* 30 Min Column */}
            <div className={`p-5 rounded-xl border transition-all ${
              selectedIncidentPhase === '30m' ? 'bg-amber-950/20 border-amber-500 ring-2 ring-amber-500/30' : 'bg-slate-950 border-slate-800'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase">নিয়ন্ত্রণ উইন্ডো</span>
                <span className="text-xs font-mono font-bold text-white bg-amber-600 px-2 py-0.5 rounded">৩০ মিনিট</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">✓ অন্য সব ডিভাইস থেকে Session Sign-Out করুন</li>
                <li className="flex items-start gap-2">✓ অ্যাকাউন্ট ব্লকের লিখিত অনুরোধ বা মেইল দিন</li>
                <li className="flex items-start gap-2">✓ সিম অপারেটরকে জানিয়ে SIM কার্ড ব্লক করুন</li>
                <li className="flex items-start gap-2">✓ পরিচিতদের সতর্ক করে মেসেজ দিন</li>
              </ul>
            </div>

            {/* 24 Hours Column */}
            <div className={`p-5 rounded-xl border transition-all ${
              selectedIncidentPhase === '24h' ? 'bg-emerald-950/20 border-emerald-500 ring-2 ring-emerald-500/30' : 'bg-slate-950 border-slate-800'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 uppercase">আইনি ও ফলো-আপ</span>
                <span className="text-xs font-mono font-bold text-white bg-emerald-600 px-2 py-0.5 rounded">২৪ ঘণ্টা</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">✓ প্ল্যাটফর্মে Account Hacked রিকভারি ফরম সাবমিট</li>
                <li className="flex items-start gap-2">✓ থানায় সাধারণ ডায়েরি (GD) ও সাইবার ইউনিটে অভিযোগ</li>
                <li className="flex items-start gap-2">✓ ডিভাইসের IMEI দিয়ে পুলিশের কাছে রিপোর্ট</li>
                <li className="flex items-start gap-2">✓ ব্যাংক লেনদেন নজরদারি ও অফিসিয়াল ফলো-আপ</li>
              </ul>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            আতঙ্কে সব একসঙ্গে নয় — ধাপে ধাপে সুনির্দিষ্ট পদক্ষেপ নিন।
          </div>
        </div>

        {/* Slide 71: সাহায্য কোথায় — সিদ্ধান্ত-ট্রি ও জিডি (GD) গাইড */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-sky-400 uppercase">মডিউল ১০ · সিদ্ধান্ত-ট্রি</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              সাহায্য কোথায় পাবেন?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              সমস্যার ধরন অনুযায়ী সঠিক প্রতিষ্ঠানে যোগাযোগ করুন:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-rose-400 uppercase block">টাকা বা MFS লেনদেন</span>
              <p className="text-xs text-slate-300">
                অফিসিয়াল হেল্পলাইনে কল → অ্যাকাউন্ট সাময়িক ব্লক ও ট্রানজ্যাকশন রিভার্সাল রিকোয়েস্ট।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase block">সোশ্যাল অ্যাকাউন্ট হ্যাক</span>
              <p className="text-xs text-slate-300">
                পাসওয়ার্ড রিসেট → অন্য ডিভাইস লগআউট → প্ল্যাটফর্মের ভেরিফিকেশন ফর্মে আসল এনআইডি সাবমিট।
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase block">হুমকি বা ব্ল্যাকমেইল</span>
              <p className="text-xs text-slate-300">
                স্ক্রিনশট সংরক্ষণ → নিকটস্থ থানায় জিডি (GD) → CID সাইবার পুলিশ সেন্টারে রিপোর্ট।
              </p>
            </div>
          </div>

          {/* GD (General Diary) Guideline Box from Slide 71 */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-sky-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <strong className="text-white text-sm block">GD (সাধারণ ডায়েরি) করার নিয়ম:</strong>
              <span className="text-sky-300">
                থানায় করা লিখিত রেকর্ড • সঙ্গে নিন: নিজের NID কার্ডের ফটোকপি, প্রমাণ স্ক্রিনশট ও ঘটনার সঠিক সময়-তারিখের বিবরণ।
              </span>
            </div>
            <div className="p-2.5 rounded bg-rose-950/60 border border-rose-700/60 text-rose-300 text-[11px] font-bold text-center shrink-0">
              OTP বা PIN কারও কাছে নয় — এমনকি সেবাকর্মীর কাছেও নয়!
            </div>
          </div>
        </div>

        {/* Slide 72 & 73: Incident Response 8-Step Full Playbook */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১০ · কমপ্লিট প্লেবুক</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Incident Response — ৮ ধাপের পূর্ণ প্লেবুক
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              STOP → VERIFY → SECURE → CONTAIN → PRESERVE → RECOVER → REPORT → LEARN
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-rose-400">01 STOP</span>
              <h4 className="text-sm font-bold text-white">থামুন</h4>
              <p className="text-xs text-slate-400">Click, reply বা payment অবিলম্বে বন্ধ করুন।</p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-400">02 VERIFY</span>
              <h4 className="text-sm font-bold text-white">যাচাই করুন</h4>
              <p className="text-xs text-slate-400">কী ঘটেছে? কখন ঘটেছে? কোন অ্যাকাউন্ট আক্রান্ত?</p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-emerald-400">03 SECURE</span>
              <h4 className="text-sm font-bold text-white">সুরক্ষিত করুন</h4>
              <p className="text-xs text-slate-400">নতুন পাসওয়ার্ড ও 2FA চালু করে সুরক্ষিত করুন।</p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-sky-400">04 CONTAIN</span>
              <h4 className="text-sm font-bold text-white">সীমাবদ্ধ করুন</h4>
              <p className="text-xs text-slate-400">সব সেশন Logout করুন, ব্লক করুন ও পরিচিতদের Alert দিন।</p>
            </div>

            {/* Step 5 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-purple-400">05 PRESERVE</span>
              <h4 className="text-sm font-bold text-white">প্রমাণ রাখুন</h4>
              <p className="text-xs text-slate-400">Screenshot, URL ও সঠিক সময় সংরক্ষণ করুন।</p>
            </div>

            {/* Step 6 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-teal-400">06 RECOVER</span>
              <h4 className="text-sm font-bold text-white">পুনরুদ্ধার করুন</h4>
              <p className="text-xs text-slate-400">অফিসিয়াল রিকভারি ফরম ও ব্যাকআপ দিয়ে ডেটা রিস্টোর করুন।</p>
            </div>

            {/* Step 7 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-rose-400">07 REPORT</span>
              <h4 className="text-sm font-bold text-white">রিপোর্ট করুন</h4>
              <p className="text-xs text-slate-400">Provider, Social Platform ও Police-এ জানান।</p>
            </div>

            {/* Step 8 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-emerald-400">08 LEARN</span>
              <h4 className="text-sm font-bold text-white">শিক্ষা নিন</h4>
              <p className="text-xs text-slate-400">ভুলের কারণ বুঝে ভবিষ্যতে নিজের ডিজিটাল অভ্যাস বদলান।</p>
            </div>

          </div>
        </div>

        {/* Slide 74: Evidence আগে—cleanup পরে */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-semibold text-rose-400 uppercase">মডিউল ১০ · প্রমাণ সংগ্রহ</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Evidence আগে — Cleanup পরে
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              তড়িঘড়ি করে চ্যাট ডিলিট করবেন না! নিচের ৮টি প্রমাণ সংরক্ষণ করুন:
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • Screenshot / Audio Recording
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • Message / e-mail টেক্সট
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • Sender / Username প্রোফাইল
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • URL / Phone Number
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • Transaction ID + Amount
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • সুনির্দিষ্ট তারিখ ও সময়
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • File / Alert / System Log
            </div>
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-slate-200">
              • সংক্ষিপ্ত Chronology (ধারাবাহিকতা)
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-amber-300">
            Malware সক্রিয় থাকলে নিরাপত্তা আগে; সম্ভব হলে অন্য কোনো Trusted Device ব্যবহার করে প্রমাণ ব্যাকআপ রাখুন।
          </div>
        </div>

        {/* Slide 75: সমস্যা বুঝুন—তারপর সঠিক সহায়তা (ম্যাট্রিক্স) */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১০ · সহায়তা ম্যাট্রিক্স</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              সমস্যা বুঝুন — তারপর সঠিক সহায়তা
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-bold text-white w-48">MFS / Bank সংক্রান্ত ক্ষতি</span>
              <span className="text-emerald-400">Provider হেল্পলাইন → Transaction Stop/Block</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-bold text-white w-48">Account Hacked (অ্যাকাউন্ট চুরি)</span>
              <span className="text-sky-400">Official Recovery Page → Logout Sessions → Report</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-bold text-white w-48">Cyberbullying / Blackmail</span>
              <span className="text-purple-400">Evidence → Trusted Adult → Legal/Police Support</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-bold text-white w-48">শিশু/কিশোর Harm বা যৌন নিপীড়ন</span>
              <span className="text-amber-400">Trusted Adult → Appropriate National Authority (1098)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-bold text-white w-48">Immediate Threat (তাত্ক্ষণিক শারীরিক ঝুঁকি)</span>
              <span className="text-rose-400 font-bold">নিরাপদ স্থান → বিশ্বস্তজন → জাতীয় জরুরি সেবা ৯৯৯</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-400">
            রোল-প্লে সংলাপ: Account + সময় + পরিমাণ + Block Request (OTP বা PIN কখনো কাউকে নয়)।
          </div>
        </div>

      </div>
    </section>
  );
}
