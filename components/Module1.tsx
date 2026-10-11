'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Mail, 
  Image as ImageIcon, 
  Users, 
  MapPin, 
  CreditCard, 
  FileText, 
  Lock, 
  EyeOff, 
  Laptop, 
  Clock, 
  Check, 
  RotateCcw,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export default function Module1() {
  // 60-second test timer
  const [testTime, setTestTime] = useState(60);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [completedTests, setCompletedTests] = useState<{ [key: string]: boolean }>({
    lock: false,
    preview: false,
    devices: false
  });

  useEffect(() => {
    if (!isTestRunning) return;
    const timer = setInterval(() => {
      setTestTime(prev => {
        if (prev <= 1) {
          setIsTestRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isTestRunning]);

  const toggleTest = (key: string) => {
    setCompletedTests(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="module-1" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header Card (Slide 14) */}
        <div className="rounded-2xl bg-gradient-to-r from-sky-950/70 via-slate-900 to-slate-950 border border-sky-800/60 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                <span className="w-6 h-6 rounded-md bg-sky-500/20 flex items-center justify-center font-mono font-bold">১</span>
                <span>মডিউল ১ · ডিজিটাল মূল্যায়ন</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১০ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                আপনার ডিজিটাল জীবন কেন মূল্যবান
              </h2>
              <p className="text-sm sm:text-base text-sky-200/90 max-w-2xl">
                শেখার ফল — ফোনের মূল্যবান তথ্য ও তিনটি সুরক্ষা পরীক্ষা চিহ্নিত করতে পারা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>১০ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 15: ডিজিটাল ট্রেজার ম্যাপ — ফোনে কী আছে */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১ · ট্রেজার ম্যাপ</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              ডিজিটাল ট্রেজার ম্যাপ — ফোনে কী আছে
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              আপনার ফোনটি কেবল একটি যন্ত্র নয়, এটি আপনার পুরো জীবনের ডিজিটাল ভল্ট।
            </p>
          </div>

          {/* Interactive Treasure Map Central Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left 3 Items */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ই-মেইল</h4>
                  <p className="text-xs text-slate-400">সব অ্যাকাউন্টের পাসওয়ার্ড রিসেট কি</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ছবি ও ভিডিও</h4>
                  <p className="text-xs text-slate-400">ব্যক্তিগত মুহূর্ত, পরিবার ও ব্ল্যাকমেইল ঝুঁকি</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">কন্টাক্ট তালিকা</h4>
                  <p className="text-xs text-slate-400">আত্মীয়-স্বজন ও বন্ধুদের ফোন নম্বর</p>
                </div>
              </div>
            </div>

            {/* Center Phone Vault Representation */}
            <div className="md:col-span-4 flex flex-col items-center justify-center">
              <div className="relative w-48 h-80 rounded-[2.5rem] bg-slate-950 border-4 border-slate-700 shadow-2xl p-4 flex flex-col items-center justify-between">
                <div className="w-16 h-4 bg-slate-800 rounded-full" />
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-white block">আপনার ফোন</span>
                  <span className="text-[10px] text-emerald-400 font-mono">ট্রেজার কোর</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
              </div>
            </div>

            {/* Right 3 Items */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">লাইভ অবস্থান (Location)</h4>
                  <p className="text-xs text-slate-400">বাড়ি, ক্যাম্পাস ও চলাচলের সময়সূচি</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">মোবাইল ফাইন্যান্স (MFS)</h4>
                  <p className="text-xs text-slate-400">বিকাশ, নগদ ও ব্যাংকিং সঞ্চয়</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">পরিচয়পত্র (NID/Student)</h4>
                  <p className="text-xs text-slate-400">আইডি ক্লোনিং ও সিম প্রতিস্থাপনের ঝুঁকি</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs sm:text-sm font-semibold text-emerald-300">
              আপনার ডিজিটাল পরিচয় অত্যন্ত মূল্যবান — লক্ষ্যবস্তু হওয়া আপনার দোষ নয়।
            </p>
          </div>
        </div>

        {/* Slide 16: ফোনের তিনটি দ্রুত পরীক্ষা (করণীয়) */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ১ · করণীয়</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                ফোনের তিনটি দ্রুত পরীক্ষা
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ফোন হাতে নিন — ৬০ সেকেন্ডে তিনটি সেটিং নিজে পরীক্ষা করে টিক দিন।
              </p>
            </div>

            {/* 60s Timer */}
            <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-xl shrink-0">
              <div className="text-center px-2">
                <span className="text-2xl font-mono font-bold text-emerald-400">
                  {testTime}s
                </span>
                <span className="text-[10px] text-slate-400 block uppercase">অডিট টাইমার</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsTestRunning(!isTestRunning)}
                  className="px-3 py-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg"
                >
                  {isTestRunning ? 'বিরতি' : 'শুরু'}
                </button>
                <button
                  onClick={() => {
                    setIsTestRunning(false);
                    setTestTime(60);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Test 1 */}
            <div 
              onClick={() => toggleTest('lock')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                completedTests.lock 
                  ? 'bg-emerald-950/40 border-emerald-500/80 text-white' 
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                  completedTests.lock ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                }`}>
                  {completedTests.lock && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </div>
              <h4 className="text-sm font-bold text-white">১. স্ক্রিন লক</h4>
              <p className="text-xs text-slate-400 mt-1">শক্তিশালী লক আছে কি?</p>
              <div className="mt-3 text-[11px] font-medium text-emerald-300/80 bg-slate-900/60 p-2 rounded border border-slate-850">
                সহজ PIN (যেমন 1234) বা সহজ প্যাটার্ন এড়িয়ে চলুন। জটিল আলফানিউমেরিক বা বায়োমেট্রিক ব্যবহার করুন।
              </div>
            </div>

            {/* Test 2 */}
            <div 
              onClick={() => toggleTest('preview')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                completedTests.preview 
                  ? 'bg-emerald-950/40 border-emerald-500/80 text-white' 
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <EyeOff className="w-5 h-5" />
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                  completedTests.preview ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                }`}>
                  {completedTests.preview && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </div>
              <h4 className="text-sm font-bold text-white">২. নোটিফিকেশন প্রিভিউ</h4>
              <p className="text-xs text-slate-400 mt-1">লক স্ক্রিনে OTP দেখা যায় কি?</p>
              <div className="mt-3 text-[11px] font-medium text-emerald-300/80 bg-slate-900/60 p-2 rounded border border-slate-850">
                প্রিভিউ ‘লক থাকা অবস্থায় সংবেদনশীল তথ্য গোপন রাখুন’ (Hide sensitive content) অপশনে সেট করুন।
              </div>
            </div>

            {/* Test 3 */}
            <div 
              onClick={() => toggleTest('devices')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                completedTests.devices 
                  ? 'bg-emerald-950/40 border-emerald-500/80 text-white' 
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                  completedTests.devices ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-700'
                }`}>
                  {completedTests.devices && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </div>
              <h4 className="text-sm font-bold text-white">৩. সক্রিয় ডিভাইস</h4>
              <p className="text-xs text-slate-400 mt-1">অচেনা লগইন আছে কি?</p>
              <div className="mt-3 text-[11px] font-medium text-emerald-300/80 bg-slate-900/60 p-2 rounded border border-slate-850">
                গুগল বা ফেসবুকের ‘Where You&apos;re Logged In’ তালিকায় কোনো অপরিচিত ডিভাইস পেলে সঙ্গে সঙ্গে Sign out করুন।
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-400">
            আজই এই তিনটি সেটিং নিজের ফোনে পরীক্ষা করুন এবং সুরক্ষিত থাকুন।
          </div>
        </div>

        {/* Slide 17: গল্প: একটি সেলফি থেকে নুসরাতের নকল পরিচয় */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <ShieldAlert className="w-4 h-4" />
                <span>মডিউল ১ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                একটি সেলফি থেকে নুসরাতের নকল পরিচয়
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>পাবলিক প্রোফাইলে কলেজের ছবি, নাম ও পরিচয় দৃশ্যমান:</strong> নুসরাত নতুন কলেজে ভর্তির পর আইডি কার্ড গলায় ঝুলিয়ে পাবলিকলি সেলফি পোস্ট করেছিল।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>ছবি–নাম নকল করে বিশ্বাসযোগ্য ভুয়া প্রোফাইল তৈরি:</strong> স্ক্যামার সেই ছবি ও নাম ব্যবহার করে হুবহু একটি ডুপ্লিকেট ক্লোন ফেসবুক আইডি খুলে বন্ধুদের অ্যাড পাঠায়।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>বন্ধু তালিকার মানুষদের কাছে নুসরাতের নামে জরুরি টাকা চাওয়া:</strong> বন্ধুদের ইনবক্সে মেসেজ পাঠিয়ে বলা হয়—&ldquo;আমার ফোন বিকাশ লক, এই নম্বরে দ্রুত ১৫০০ টাকা দে&rdquo;। অনেকেই টাকা দিয়ে দেয়।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল সমীকরণ:</strong> সাধারণ ছবি + পরিচয় + যোগাযোগের নেটওয়ার্ক = বিশ্বাসযোগ্য প্রতারণার উপকরণ।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-sky-950/50 border border-sky-700/60 flex items-center justify-center text-sky-400">
                <Users className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">প্রোফাইল ক্লোনিং প্রতিরোধ</h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  ফ্রেন্ডলিস্ট হাইড রাখুন, ব্যক্তিগত পরিচয়পত্র/রোলযুক্ত ছবি পাবলিক করবেন না এবং প্রোফাইল লক/গার্ড ব্যবহার করুন।
                </p>
              </div>
              <div className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg text-left text-xs font-mono text-slate-300 space-y-1">
                <div className="text-emerald-400 font-bold">প্রতিরোধ টিপস:</div>
                <div>• Friend List প্রাইভেসি &lsquo;Only Me&rsquo; করুন</div>
                <div>• স্টুডেন্ট আইডি ও জন্মতারিখ ছবি থেকে ব্লার করুন</div>
                <div>• সন্দেহ হলে ক্লোন প্রোফাইল অবিলম্বে রিপোর্ট করুন</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
