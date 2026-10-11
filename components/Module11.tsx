'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  ShieldCheck, 
  Users,
  Check
} from 'lucide-react';

export default function Module11() {
  const [tasksCompleted, setTasksCompleted] = useState({
    tonight: false,
    friday: false,
    thisWeek: false
  });

  const toggleTask = (key: keyof typeof tasksCompleted) => {
    setTasksCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="module-11" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 76) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center font-mono font-bold">১১</span>
                <span>মডিউল ১১ · ব্যক্তিগত কর্মপরিকল্পনা</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ৬ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                ব্যক্তিগত সাইবার নিরাপত্তা পরিকল্পনা
              </h2>
              <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl">
                শেখার ফল — নিজের দৈনিক, সাপ্তাহিক ও মাসিক নিরাপত্তা পরিকল্পনা তৈরি ও বাস্তবায়নে সক্ষম হওয়া।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>৬ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 77: গল্প: টাকা দিয়েও আরিফের হুমকি থামেনি */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ১১ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                টাকা দিয়েও আরিফের হুমকি থামেনি
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>ভুয়া পরিচয়ে বিশ্বাস তৈরি করে ভিডিও কলে নেওয়া:</strong> অনলাইনে নতুন পরিচিত একজন তরুণী সেজে আরিফের সঙ্গে মিষ্টি আলাপ করে এবং কিছুদিন পর ইমো/হোয়াটসঅ্যাপে প্রাইভেট ভিডিও কল দেওয়ার অনুরোধ জানায়।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>রেকর্ডিংয়ের ভয় দেখিয়ে ব্ল্যাকমেইল:</strong> ভিডিও কলে আরিফের স্ক্রিন রেকর্ড করে এডিট করা আপত্তিকর ভিডিও পরিবার ও আত্মীয়দের কাছে পাঠিয়ে দেওয়ার হুমকি দিয়ে ৫০,০০০ টাকা দাবি করে। আরিফ ভয়ে প্রথম দফায় ২০,০০০ টাকা ধার করে পাঠায়। কিন্তু পরদিনই তারা আবার আরও ৪০,০০০ টাকা দাবি করে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>নীরবতা ভেঙে সহায়তা নেওয়া:</strong> বুঝতে পেরে যে টাকা দিলে কখনোই মুক্তি মিলবে না, আরিফ তার এক বিশ্বস্ত বড় ভাইকে সব জানায়। তারা সব স্ক্রিনশট ও নম্বর সংরক্ষণ করে সাইবার ক্রাইম ইউনিটে অভিযোগ দেয় এবং অ্যাকাউন্ট ব্লক করে দেয়।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> টাকা দিলে ব্ল্যাকমেইল হুমকি থামার কোনো নিশ্চয়তা নেই — নীরবতা ভেঙে দ্রুত বিশ্বস্ত কাউকে জানান ও সহায়তা নিন।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-rose-950/40 border border-rose-700/60 flex items-center justify-center text-rose-400 mx-auto">
                <Target className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">ব্ল্যাকমেইলারকে কখনো টাকা নয়</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                অপরাধীদের টাকা দিলে তারা ভাববে আপনি আরও ভয় পেয়েছেন। ভয় জয় করে আইনি ও পারিবারিক সুরক্ষা নেওয়াই একমাত্র স্থায়ী সমাধান।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 78: ব্যক্তিগত পরিকল্পনা — তিনটি নির্দিষ্ট কাজ */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১১ · অ্যাকশন প্ল্যান</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              ব্যক্তিগত পরিকল্পনা — ৩টি সুনির্দিষ্ট কাজ
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              &lsquo;আরও সতর্ক হব&rsquo; কোনো নির্দিষ্ট কাজ নয়। নির্দিষ্ট তারিখ ও কাজের দায়িত্ব নিন:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Task 1 */}
            <div 
              onClick={() => toggleTask('tonight')}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                tasksCompleted.tonight 
                  ? 'bg-emerald-950/50 border-emerald-500 text-white' 
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase">কাজ ১</span>
                <span className="text-xs font-bold text-white bg-sky-600 px-2.5 py-0.5 rounded">আজ রাতে</span>
              </div>
              <h4 className="text-base font-bold text-white mt-4">
                ই-মেইলে 2FA চালু করব
              </h4>
              <p className="text-xs text-slate-400 mt-2">
                গুগল বা ইয়াহু অ্যাকাউন্টে গিয়ে টু-স্টেপ ভেরিফিকেশন অন করে রিকভারি কোড সংরক্ষণ করব।
              </p>
              <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-xs">
                <span>সম্পন্ন হয়েছে?</span>
                <span className={`w-5 h-5 rounded border flex items-center justify-center ${
                  tasksCompleted.tonight ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                }`}>
                  {tasksCompleted.tonight && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </span>
              </div>
            </div>

            {/* Task 2 */}
            <div 
              onClick={() => toggleTask('friday')}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                tasksCompleted.friday 
                  ? 'bg-emerald-950/50 border-emerald-500 text-white' 
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">কাজ ২</span>
                <span className="text-xs font-bold text-slate-950 bg-amber-500 px-2.5 py-0.5 rounded">শুক্রবার</span>
              </div>
              <h4 className="text-base font-bold text-white mt-4">
                MFS অ্যাপের Permission ও Security দেখব
              </h4>
              <p className="text-xs text-slate-400 mt-2">
                বিকাশ ও নগদ অ্যাপে অযাচিত কোনো পারমিশন দেওয়া আছে কি না তা সেটিংস থেকে নিরীক্ষা করব।
              </p>
              <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-xs">
                <span>সম্পন্ন হয়েছে?</span>
                <span className={`w-5 h-5 rounded border flex items-center justify-center ${
                  tasksCompleted.friday ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                }`}>
                  {tasksCompleted.friday && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </span>
              </div>
            </div>

            {/* Task 3 */}
            <div 
              onClick={() => toggleTask('thisWeek')}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                tasksCompleted.thisWeek 
                  ? 'bg-emerald-950/50 border-emerald-500 text-white' 
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase">কাজ ৩</span>
                <span className="text-xs font-bold text-white bg-purple-600 px-2.5 py-0.5 rounded">এই সপ্তাহে</span>
              </div>
              <h4 className="text-base font-bold text-white mt-4">
                পরিবারের সঙ্গে কোড-ওয়ার্ড ঠিক করব
              </h4>
              <p className="text-xs text-slate-400 mt-2">
                মা-বাবা ও ভাইবোনদের সাথে বসে একটি অদ্ভুত পারিবারিক গোপন সিক্রেট কোড-ওয়ার্ড নির্ধারণ করব।
              </p>
              <div className="mt-4 pt-3 border-t border-slate-855 flex items-center justify-between text-xs">
                <span>সম্পন্ন হয়েছে?</span>
                <span className={`w-5 h-5 rounded border flex items-center justify-center ${
                  tasksCompleted.thisWeek ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                }`}>
                  {tasksCompleted.thisWeek && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </span>
              </div>
            </div>

          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-slate-300">
                পাশে বসা বন্ধুকে কাজগুলো দেখান — সে আপনার জবাবদিহিতার সাক্ষী থাকবে এবং এক সপ্তাহ পরে জিজ্ঞেস করবে, আপনি কাজগুলো করেছেন কি না।
              </p>
            </div>
            <span className="text-emerald-400 font-bold whitespace-nowrap">ছোট অভ্যাস = বড় নিরাপত্তা</span>
          </div>
        </div>

        {/* Slide 79: STOP → THINK → VERIFY → PROTECT */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-2 border-emerald-500 text-center space-y-6 shadow-2xl">
          <div className="flex items-center justify-center gap-2 sm:gap-4 font-mono font-black text-xl sm:text-3xl text-white">
            <span className="text-emerald-400">STOP</span>
            <span className="text-slate-600">→</span>
            <span className="text-sky-400">THINK</span>
            <span className="text-slate-600">→</span>
            <span className="text-amber-400">VERIFY</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-300">PROTECT</span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            বার্তা, link, QR, call বা payment request — প্রতারক আগে আপনার <strong>আবেগ ও সময়ের চাপকে</strong> লক্ষ্য করে।
          </p>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-emerald-800/60 max-w-xl mx-auto text-xs sm:text-sm text-emerald-300 font-semibold">
            থামুন → উদ্দেশ্য ভাবুন → স্বাধীন উৎসে যাচাই করুন → Account, Data ও মানুষকে সুরক্ষিত করুন।
          </div>
        </div>

      </div>
    </section>
  );
}
