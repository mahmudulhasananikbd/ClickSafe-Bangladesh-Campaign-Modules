'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Share2, 
  Clock, 
  HelpCircle, 
  ShieldAlert, 
  Eye, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Lock,
  Puzzle
} from 'lucide-react';

export default function Module5() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const scenarios = [
    {
      id: 1,
      title: 'বোর্ডিং পাস বা টিকিটের স্পষ্ট ছবি',
      status: 'পোস্ট নয়',
      statusType: 'danger',
      description: 'বারকোড বা PNR কোড দিয়ে আপনার পাসপোর্ট নম্বর ও ব্যক্তিগত ফ্লাইট হিস্ট্রি যে কেউ বের করতে পারে।'
    },
    {
      id: 2,
      title: 'ছোট শিশুর স্কুল ও ইউনিফর্মের লোগো',
      status: 'তথ্য আড়াল করুন',
      statusType: 'warning',
      description: 'স্কুলের ব্যাজ ব্লার করে পোস্ট করুন। শিশুর নিরাপত্তা ও নিয়মিত রুটিন যেন অপরাধীর নজরে না আসে।'
    },
    {
      id: 3,
      title: '‘অবশেষে চাকরি পেয়েছি’ (অফার লেটার গোপন রেখে)',
      status: 'তুলনামূলক নিরাপদ',
      statusType: 'safe',
      description: 'কোম্পানির নাম শেয়ার করতে পারেন, তবে বেতনের অঙ্ক, নিয়োগপত্র বা আইডি কার্ডের ছবি কখনই নয়।'
    },
    {
      id: 4,
      title: 'MFS (বিকাশ/নগদ) ব্যালেন্স বা ট্রানজ্যাকশন স্ক্রিনশট',
      status: 'কখনোই নয়',
      statusType: 'danger',
      description: 'ব্যালেন্স ও ট্রানজ্যাকশন আইডি দেখালে হ্যাকাররা প্রতারণার নতুন জাল তৈরি করে টাকা হাতিয়ে নেয়।'
    }
  ];

  return (
    <section id="module-5" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 39) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center font-mono font-bold">৫</span>
                <span>মডিউল ৫ ও ৬ · ডিজিটাল ফুটপ্রিন্ট</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১০ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                সামাজিক যোগাযোগ, গোপনীয়তা ও ডিজিটাল পরিচয়
              </h2>
              <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl">
                শেখার ফল — পোস্টের Audience, সময় ও Privacy Risk সঠিকভাবে যাচাই করার দক্ষতা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>১০ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 40: গল্প: সাদিয়ার পোস্টে লুকানো তিন সংকেত */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <ShieldAlert className="w-4 h-4" />
                <span>মডিউল ৫ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                সাদিয়ার পোস্টে লুকানো তিন সংকেত
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>ভ্রমণের আগে পাবলিক পোস্ট:</strong> সাদিয়া বাড়ি ছাড়ার আগেই ফেসবুকে পাবলিক পোস্ট দেয়—&ldquo;Off to Cox&apos;s Bazar for 5 days!&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>কমেন্টে আরও তথ্য ফাঁস:</strong> এক আত্মীয়ের কমেন্টে সাদিয়া লিখল—&ldquo;হাঁ খালামণি, আমরা ফ্যামিলির সবাই যাচ্ছি, বাসায় কেউ থাকবে না।&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>বিপদ ডেকে আনা:</strong> একই সাথে বর্তমান লোকেশন + বাড়ি কতদিন ফাঁকা + ফেরার রুট প্রকাশ পাওয়ায় চোরেরা ফাঁকা বাসায় চুরির সুযোগ পেয়ে যায়।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>ঝুঁকির সমীকরণ:</strong> একসাথে Location + অনুপস্থিতির সময় + যাতায়াতের Route প্রকাশ করা মানে অপরাধীদের নিমন্ত্রণ জানানো।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-950/40 border border-amber-700/60 flex items-center justify-center text-amber-400 mx-auto">
                <Puzzle className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">ভ্রমণ পরবর্তী পোস্টের নিয়ম</h4>
              <p className="text-xs text-slate-400">
                ভ্রমণ শেষ করে নিরাপদে বাড়ি ফিরে ছবি অ্যালবাম আপলোড করুন। আগে থেকে বাড়ি ফাঁকা থাকার খবর বিশ্বকে জানানোর কোনো প্রয়োজন নেই।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 41: একটি পোস্ট = ধাঁধার টুকরো & পোস্টের আগে ৪টি প্রশ্ন */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৬ · সচেতনতা ফ্রেমওয়ার্ক</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              একটি পোস্ট = ধাঁধার টুকরো
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              কয়েক মাসের পোস্ট মিলিয়ে যে কেউ আপনার পুরো জীবনের রুটিন বুঝে ফেলতে পারে।
            </p>
          </div>

          {/* Puzzle Pieces Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-950 border border-rose-800/50 text-center">
              <span className="text-xs font-mono text-rose-400 uppercase font-bold block mb-1">ধাঁধার টুকরো ১</span>
              <h4 className="text-sm font-bold text-white">বর্তমান অবস্থান (Location)</h4>
              <p className="text-xs text-slate-400 mt-1">কোথায় আছেন এবং কতক্ষণ থাকবেন</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-rose-800/50 text-center">
              <span className="text-xs font-mono text-rose-400 uppercase font-bold block mb-1">ধাঁধার টুকরো ২</span>
              <h4 className="text-sm font-bold text-white">দৈনন্দিন সময়সূচি (Routine)</h4>
              <p className="text-xs text-slate-400 mt-1">কখন বাসা থেকে বের হন ও ফেরেন</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-rose-800/50 text-center">
              <span className="text-xs font-mono text-rose-400 uppercase font-bold block mb-1">ধাঁধার টুকরো ৩</span>
              <h4 className="text-sm font-bold text-white">বাড়ি ফাঁকা থাকার নিশ্চয়তা</h4>
              <p className="text-xs text-slate-400 mt-1">পরিবারের সবাই একসঙ্গে দূরে</p>
            </div>
          </div>

          {/* 4 Questions Before Posting */}
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-white text-center pb-2 border-b border-slate-800">
              পোস্ট করার আগে ৪টি আত্মজিজ্ঞাসা (4 Check Questions)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold block">✓ ১. কী পোস্ট করছি?</span>
                <p className="text-slate-300">কোনো আইডি কার্ড, নম্বর বা গোপন তথ্য প্রকাশ পাচ্ছে না তো?</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold block">✓ ২. কারা দেখতে পারবে?</span>
                <p className="text-slate-300">অডিয়েন্স কি Public নাকি বিশ্বস্ত Friends তালিকা?</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold block">✓ ৩. কখন পোস্ট করছি?</span>
                <p className="text-slate-300">এখনই নাকি ঘটনাস্থল থেকে নিরাপদে ফেরার পর?</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold block">✓ ৪. কার গোপনীয়তা জড়িত?</span>
                <p className="text-slate-300">অনুমতি ছাড়া অন্য কারও ছবি বা শিশুর তথ্য শেয়ার করছি না তো?</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-400">
            কয়েক মাসের সাধারণ পোস্ট মিলিয়ে অপরাধীরা পুরো রুটিন বানিয়ে ফেলে — সতর্ক থাকুন।
          </div>
        </div>

        {/* Slide 42: ‘পোস্ট করব কি না?’ — চারটি দৃশ্য ও Privacy Settings */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৬ · দ্রুত কুইজ</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              ‘পোস্ট করব কি না?’ — ৪টি বাস্তব দৃশ্য
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              যেকোনো দৃশ্যে ক্লিক করে বিস্তারিত বিশ্লেষণ ও করণীয় জেনে নিন:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map(sc => (
              <div
                key={sc.id}
                onClick={() => setSelectedScenario(sc.id)}
                className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedScenario === sc.id
                    ? 'bg-slate-950 border-emerald-500 shadow-lg'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{sc.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{sc.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className={`text-xs font-bold px-2 py-1 rounded block text-center ${
                    sc.statusType === 'danger'
                      ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60'
                      : sc.statusType === 'warning'
                      ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                      : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                  }`}>
                    {sc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy Settings Quick Guide */}
          <div className="mt-8 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              দ্রুত প্রদর্শন — Privacy Settings টিপস:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-emerald-400 block mb-1">ভবিষ্যৎ পোস্ট:</strong>
                Default Audience কখনোই Public নয়, সবসময় &lsquo;Friends&rsquo; রাখুন।
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-sky-400 block mb-1">পুরোনো পোস্ট ও ট্যাগ:</strong>
                Profile Tag Review চালু রাখুন এবং পুরোনো পাবলিক পোস্ট Limit Past Posts করুন।
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-amber-400 block mb-1">সার্চ ইঞ্জিন ইনডেক্সিং:</strong>
                গুগলে যেন আপনার ফেসবুক প্রোফাইল না দেখায় তা সেটিংস থেকে অফ রাখুন।
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-300">
            অপরিচিত কেউ যেন আপনার পোস্ট জোড়া লাগিয়ে বেশি কিছু না জানে।
          </div>
        </div>

      </div>
    </section>
  );
}
