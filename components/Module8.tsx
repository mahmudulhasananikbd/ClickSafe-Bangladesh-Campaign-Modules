'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  Clock, 
  Volume2, 
  Mic, 
  ShieldCheck, 
  AlertTriangle, 
  KeyRound, 
  PhoneCall, 
  Radio, 
  Vote,
  Sparkles,
  PhoneForwarded,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function Module8() {
  const [audioVote, setAudioVote] = useState<'clip1' | 'clip2' | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [familyCodeWord, setFamilyCodeWord] = useState('');

  return (
    <section id="module-8" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 55) */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-slate-950 border border-purple-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                <span className="w-6 h-6 rounded-md bg-purple-500/20 flex items-center justify-center font-mono font-bold">৮</span>
                <span>মডিউল ৮ ও ৯ · এআই ডিপফেক ও অডিও ক্লোনিং</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ৭ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                AI, ডিপফেক ও নকল কণ্ঠস্বর
              </h2>
              <p className="text-sm sm:text-base text-purple-200/90 max-w-2xl">
                শেখার ফল — নকল কণ্ঠ ও Deepfake ভিডিও তিনটি কার্যকর উপায়ে যাচাই করতে পারা।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>৭ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 56: গল্প: মায়ের কণ্ঠ—কিন্তু মা নয় */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ৮ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                মায়ের কণ্ঠ — কিন্তু মা নয়
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>অচেনা নম্বরে মায়ের মতো অবিকল কণ্ঠ:</strong> হোস্টেলে থাকা তানভীরের কাছে অচেনা নম্বর থেকে কল আসে। ফোনের ওপার থেকে মায়ের হুবহু কণ্ঠ, ব্যাকগ্রাউন্ডে সাইরেন ও কান্নার আওয়াজ!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>“দুর্ঘটনা—এখনই ৫০,০০০ পাঠাও, কাউকে বলো না”:</strong> কণ্ঠটি কাঁপা গলায় বলে—&ldquo;বাবা আমার এক্সিডেন্ট হয়েছে, ক্লিনিকের এই নম্বরে এখনই ৫০,০০০ টাকা বিকাশ কর, আত্মীয়দের কাউকে বলিস না!&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>পরিচিত নম্বরে কলব্যাক করে সত্য জানা:</strong> তানভীর টাকা পাঠানোর আগে কলটি কেটে মায়ের ব্যক্তিগত ফোন নম্বরে কল দেয়। মা সুস্থ অবস্থায় বাড়িতে ভাত খাচ্ছিলেন! কণ্ঠটি ছিল এআই দিয়ে ক্লোন করা।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> কণ্ঠ, ছবি বা ভিডিও পরিচয়ের চূড়ান্ত প্রমাণ নয় — কল কেটে Known Channel-এ নিজে কল ব্যাক করুন।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-purple-950/40 border border-purple-700/60 flex items-center justify-center text-purple-400 mx-auto">
                <Radio className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">AI Voice Cloning কীভাবে হয়?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                সোশ্যাল মিডিয়ায় আপলোড করা মাত্র ৩ সেকেন্ডের ভিডিও ক্লিপ থেকে অপরাধীরা AI সফটওয়্যার দিয়ে যেকোনো মানুষের কণ্ঠ হুবহু নকল করতে পারে।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 57: নকল কণ্ঠ ও পরিবারের কোড-ওয়ার্ড */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৯ · নিরাপত্তা কৌশল</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              নকল কণ্ঠ ও পরিবারের কোড-ওয়ার্ড
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              AI ভয়েস ক্লোন প্রতিরোধে পরিবারের সাথে একটি গোপন কোড-ওয়ার্ড ঠিক করে রাখুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Family Secret Word Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-800/60 space-y-4">
              <div className="flex items-center gap-3">
                <KeyRound className="w-6 h-6 text-emerald-400" />
                <h4 className="text-base font-bold text-white">পারিবারিক কোড-ওয়ার্ড কী?</h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                এটি কোনো নাম বা জন্মদিন নয় — এটি সম্পূর্ণ অদ্ভুত ও অপ্রত্যাশিত একটি ছোট বাক্য। যেমন:
              </p>

              <div className="p-3 bg-emerald-950/40 border border-emerald-700/60 rounded-xl text-center font-bold text-emerald-300 text-sm">
                &ldquo;রান্নাঘরে সবুজ ছাতা&rdquo; (Rannaghore Sobuj Chata)
              </div>

              <p className="text-xs text-slate-400">
                পরিবারের কেবল ৩–৪ জন ছাড়া এই বাক্যটি বাইরের কেউ জানবে না। যে কেউ বিপদের কথা বলে টাকা চাইলে এই কোড জিজ্ঞেস করবেন।
              </p>

              {/* Interactive Code-Word Generator Input */}
              <div className="pt-2">
                <input
                  type="text"
                  value={familyCodeWord}
                  onChange={e => setFamilyCodeWord(e.target.value)}
                  placeholder="আপনার পরিবারের জন্য একটি গোপন বাক্য ভাবুন..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                {familyCodeWord && (
                  <span className="text-[11px] text-emerald-400 mt-1 block">
                    ✓ চমৎকার! এই বাক্যটি আজই পরিবারের সদস্যদের সাথে একান্তে আলোচনা করে ঠিক করুন।
                  </span>
                )}
              </div>
            </div>

            {/* Right: 3 Verification Steps */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white pb-2 border-b border-slate-800">
                জরুরি মুহূর্তে ৩ ধাপে যাচাই (3 Verification Steps)
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0 mt-0.5">১</span>
                  <div>
                    <strong className="text-white block">পরিচিত নম্বরে আলাদা করে ফোন করুন:</strong>
                    <span className="text-slate-400">চলতি কল কেটে সেভ থাকা নিজস্ব নম্বরে ফিরতি কল দিন।</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 mt-0.5">২</span>
                  <div>
                    <strong className="text-white block">কোড-ওয়ার্ড বা ব্যক্তিগত প্রশ্ন করুন:</strong>
                    <span className="text-slate-400">এমন প্রশ্ন যা বাইরের কেউ বা এআই ইন্টারনেটে পাবে না।</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center shrink-0 mt-0.5">৩</span>
                  <div>
                    <strong className="text-white block">আরেকজন বিশ্বস্ত মানুষকে যুক্ত করুন:</strong>
                    <span className="text-slate-400">একা একা কোনো সিদ্ধান্ত নয়, পরিবারের অন্য কাউকে পাশে নিন।</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-300">
            পরিচিত কণ্ঠ বা ভিডিও পরিচয়ের চূড়ান্ত প্রমাণ নয় — আলাদা মাধ্যমে সরাসরি যাচাই করাই একমাত্র প্রমাণ।
          </div>
        </div>

        {/* Slide 58: ডিপফেক চিনুন — পাঁচটি সংকেত ও লাইভ চ্যালেঞ্জ */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase">মডিউল ৯ · লাইভ চ্যালেঞ্জ</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                ডিপফেক চিনুন — ৫টি সংকেত ও লাইভ চ্যালেঞ্জ
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                ভিডিও ও অডিওতে সামান্য লক্ষ্য করলেই নকল সিন্থেটিক কনটেন্ট চেনা সম্ভব।
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950 px-3 py-1.5 rounded-lg border border-amber-800">
              ৪ মিনিট অংশগ্রহণমূলক
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* 5 Signs Grid */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-sm font-bold text-rose-400 pb-1">
                সন্দেহের ৫টি প্রধান সংকেত (কণ্ঠ ও ভিডিওতে):
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0">১</span>
                  <span><strong>আবেগ ও তাড়াহুড়ো:</strong> &lsquo;এখনই টাকা পাঠাও, কাউকে বলো না&rsquo; জাতীয় চরম ভীতি তৈরি।</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0">২</span>
                  <span><strong>ঠোঁট ও কণ্ঠের অমিল:</strong> ভিডিওতে ঠোঁটের নড়াচড়ার সাথে কথার মিল নেই বা হঠাৎ অস্বাভাবিক থেমে যাওয়া।</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0">৩</span>
                  <span><strong>চোখের পলক ও ত্বক:</strong> পলক অত্যন্ত কম ফেলা, কান বা চশমার চারপাশে আলো-ছায়ার অদ্ভুত ব্লার।</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0">৪</span>
                  <span><strong>ফিরতি কল করতে বাধা:</strong> &lsquo;ফোন ব্যাক করিস না, লাইন কেটে যাবে&rsquo; বা রেগে যাওয়ার নাটক।</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <span className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0">৫</span>
                  <span><strong>নতুন নম্বর বা নতুন অ্যাকাউন্টে টাকা চাওয়া:</strong> পরিচিত নম্বর ছেড়ে অচেনা ওয়ালেটে টাকা ট্রান্সফারের চাপ।</span>
                </div>
              </div>
            </div>

            {/* Interactive Live Challenge Poll Box */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
                <Vote className="w-4 h-4" />
                <span>লাইভ চ্যালেঞ্জ — আসল নাকি নকল?</span>
              </div>

              <p className="text-xs text-slate-300">
                ফেসিলিটেটরের অডিও টেস্ট: নিচের কোন অডিও ক্লিপটি AI-জেনারেটেড নকল কণ্ঠ?
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setAudioVote('clip1')}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                    audioVote === 'clip1' ? 'bg-amber-950/40 border-amber-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-amber-400" />
                    <span>অডিও ক্লিপ ১: &ldquo;বাবা কেমন আছো? বাড়ি আসবা কবে?&rdquo;</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase">ভোট দিন</span>
                </button>

                <button
                  onClick={() => setAudioVote('clip2')}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                    audioVote === 'clip2' ? 'bg-rose-950/40 border-rose-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-rose-400" />
                    <span>অডিও ক্লিপ ২: &ldquo;জরুরি এক্সিডেন্ট! এখনই ৫০ হাজার পাঠাও!&rdquo;</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase">ভোট দিন</span>
                </button>
              </div>

              {audioVote && !revealed && (
                <button
                  onClick={() => setRevealed(true)}
                  className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
                >
                  ফলাফল দেখুন
                </button>
              )}

              {revealed && (
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-emerald-400 block">✓ সঠিক উত্তর: ক্লিপ ২ ছিল AI নকল কণ্ঠ!</span>
                  <p className="text-slate-300 text-[11px]">
                    কারণ: চরম রোবোটিক তাড়াহুড়ো, অপ্রাকৃতিক শ্বাসপ্রশ্বাস এবং অচেনা বিকাশ অ্যাকাউন্টে দ্রুত টাকা চাওয়া।
                  </p>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-emerald-400 block">সোনালি নিয়ম:</span>
                <span className="text-[11px] text-slate-300">
                  কল কেটে পরিচিত নম্বরে নিজে ফিরতি কল করুন।
                </span>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-emerald-400">
            পরিচিত কণ্ঠ বা ভিডিও পরিচয়ের প্রমাণ নয় — আলাদা মাধ্যমে যাচাই করাই একমাত্র প্রমাণ।
          </div>
        </div>

      </div>
    </section>
  );
}
