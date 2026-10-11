'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  Moon, 
  BookOpen, 
  Users, 
  Smartphone, 
  Scale, 
  CheckCircle2, 
  AlertCircle,
  Footprints
} from 'lucide-react';

export default function Module9A() {
  const [selectedHabit, setSelectedHabit] = useState<number | null>(null);

  const habits = [
    {
      id: 1,
      title: 'ঘুমানোর ৩০ মিনিট আগে ফোন দূরে রাখা',
      desc: 'বিছানায় ফোন না নিয়ে বই পড়া বা আরামদায়ক ঘুম নিশ্চিত করা।'
    },
    {
      id: 2,
      title: 'পড়ার সময় নোটিফিকেশন বন্ধ (DND) রাখা',
      desc: 'পড়াশোনার সময় মনোযোগ অটুট রাখতে ডু নট ডিস্টার্ব অন করা।'
    },
    {
      id: 3,
      title: 'প্রতিদিন হাঁটা বা মুখোমুখি আড্ডা দেওয়া',
      desc: 'স্ক্রিন থেকে চোখ সরিয়ে প্রকৃতিতে সময় কাটানো বা পরিবারকে সময় দেওয়া।'
    }
  ];

  return (
    <section id="module-9a" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 65) */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-slate-950 border border-amber-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center font-mono font-bold">৭ক</span>
                <span>মডিউল ৭ক ও ৯ক · ডিজিটাল সুস্থতা ও ভারসাম্য</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ৫ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                ডিজিটাল সুস্থতা (Digital Wellbeing)
              </h2>
              <p className="text-sm sm:text-base text-amber-200/90 max-w-2xl">
                শেখার ফল — ডিজিটাল মানসিক চাপের সংকেত চিনে বাস্তব জীবনের জন্য একটি কার্যকর Offline অভ্যাস বেছে নেওয়া।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>৫ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 66: স্ক্রিন-টাইমের আগে দেখুন—কী হারাচ্ছেন? */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৯ক · ভারসাম্য</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              স্ক্রিন-টাইমের আগে দেখুন — কী হারাচ্ছেন?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              দিনের ২৪ ঘণ্টায় আপনার জীবনের কোন অংশ কতটুকু সময় পাচ্ছে?
            </p>
          </div>

          {/* 24 Hour Visual Bar */}
          <div className="space-y-2 mb-8">
            <div className="text-xs font-mono font-bold text-slate-300 flex justify-between">
              <span>২৪ ঘণ্টার বিভাজন:</span>
              <span className="text-amber-400">ব্যক্তিগত মূল্যায়ন</span>
            </div>
            <div className="h-10 rounded-xl overflow-hidden flex text-xs font-bold shadow-inner">
              <div className="bg-sky-600 text-white flex items-center justify-center w-[30%]" title="ঘুম (৭-৮ ঘণ্টা)">
                ঘুম (৩০%)
              </div>
              <div className="bg-emerald-600 text-white flex items-center justify-center w-[25%]" title="পড়াশোনা ও কাজ (৬ ঘণ্টা)">
                পড়াশোনা (২৫%)
              </div>
              <div className="bg-purple-600 text-white flex items-center justify-center w-[15%]" title="সম্পর্ক ও খেলা (৩-৪ ঘণ্টা)">
                সম্পর্ক/খেলা (১৫%)
              </div>
              <div className="bg-rose-600 text-white flex items-center justify-center w-[30%]" title="অনলাইন ও সোশ্যাল মিডিয়া (৭+ ঘণ্টা)">
                অনলাইন (৩০%+)
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-sky-600" /> ঘুম (৭-৮ ঘণ্টা)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-600" /> পড়াশোনা</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-purple-600" /> খেলা ও পারিবারিক সময়</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-rose-600" /> স্ক্রিন ও অনলাইন</span>
            </div>
          </div>

          {/* 4 Self-Assessment Symptoms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                <Moon className="w-4 h-4" />
                <span>ঘুমের সংকট</span>
              </div>
              <p className="text-xs text-slate-300">দেরিতে ঘুমাতে যাওয়া বা রাতে বারবার ঘুম ভেঙে যাওয়া?</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                <AlertCircle className="w-4 h-4" />
                <span>মনোযোগের ক্ষতি</span>
              </div>
              <p className="text-xs text-slate-300">একটি নোটিফিকেশনে পড়ার টেবিল থেকে ঘণ্টার পর ঘণ্টা বিচ্যুত হওয়া?</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                <Smartphone className="w-4 h-4" />
                <span>অস্থিরতা ও FOMO</span>
              </div>
              <p className="text-xs text-slate-300">ফোন পকেটে না থাকলে অদ্ভুত মানসিক অস্থিরতা অনুভব করা?</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                <Clock className="w-4 h-4" />
                <span>সীমাহীন স্ক্রোলিং</span>
              </div>
              <p className="text-xs text-slate-300">নিজেকে আধা ঘণ্টার কথা বলে রিলস বা শর্টসে ৩ ঘণ্টা হারিয়ে ফেলা?</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-amber-300">
            Diagnosis নয় — নিজের জীবনের উপর প্রযুক্তির প্রভাব লক্ষ্য করুন এবং ছোট পরিবর্তন আনুন।
          </div>
        </div>

        {/* Slide 67: ভারসাম্য, সংকেত ও ছোট অভ্যাস */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৭ক · অভ্যাস পরিবর্তন</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              ভারসাম্য, সংকেত ও ছোট অভ্যাস
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              অনলাইন বনাম অফলাইন: দিনে একটি ছোট অভ্যাস বেছে নিন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Addiction Signs */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-rose-900/40 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <Scale className="w-5 h-5" />
                <span>আসক্তির ৪টি সংকেত</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="p-2 rounded bg-slate-900 border border-slate-800">
                  ⚠️ ঘুমানোর সময় বিছানায় শুয়ে বারবার ফোন চেক করা
                </li>
                <li className="p-2 rounded bg-slate-900 border border-slate-800">
                  ⚠️ পড়ার টেবিলে বইয়ের পাশে ফোন খোলা রাখা
                </li>
                <li className="p-2 rounded bg-slate-900 border border-slate-800">
                  ⚠️ ইন্টারনেট না থাকলে তীব্র অস্বস্তি ও খিটখিটে মেজাজ
                </li>
                <li className="p-2 rounded bg-slate-900 border border-slate-800">
                  ⚠️ স্বাভাবিক খেলাধুলা ও পরিবারের মানুষের সাথে কথা কমে যাওয়া
                </li>
              </ul>
            </div>

            {/* Right 1 Daily Micro-Habit Selection */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-900/40 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>দিনে ১টি ছোট অভ্যাস বেছে নিন:</span>
              </div>

              <div className="space-y-3">
                {habits.map(habit => (
                  <div
                    key={habit.id}
                    onClick={() => setSelectedHabit(habit.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedHabit === habit.id
                        ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold">{habit.title}</h4>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedHabit === habit.id ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-600'
                      }`}>
                        {selectedHabit === habit.id && '✓'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{habit.desc}</p>
                  </div>
                ))}
              </div>

              {selectedHabit && (
                <div className="text-xs text-emerald-400 font-semibold pt-1">
                  ✓ আজ থেকেই এই অভ্যাসটি নিয়মিত পালন শুরু করুন!
                </div>
              )}
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            প্রযুক্তি জীবনের একটি অংশ মাত্র — পুরো জীবন নয়।
          </div>
        </div>

      </div>
    </section>
  );
}
