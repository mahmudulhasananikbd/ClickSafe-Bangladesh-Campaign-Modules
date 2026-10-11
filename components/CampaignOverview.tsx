'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  AlertCircle, 
  Hand, 
  HelpCircle, 
  ShieldCheck, 
  HeartHandshake, 
  Users2, 
  Sparkles,
  Info,
  CheckCircle,
  PhoneCall
} from 'lucide-react';

export default function CampaignOverview() {
  const [handRaised, setHandRaised] = useState(false);
  const [handCount, setHandCount] = useState(1420);

  const toggleHand = () => {
    if (!handRaised) {
      setHandRaised(true);
      setHandCount(prev => prev + 1);
    } else {
      setHandRaised(false);
      setHandCount(prev => prev - 1);
    }
  };

  return (
    <section id="overview" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: Campaign Introduction (Page 3) */}
        <div>
          <div className="text-xs font-semibold text-emerald-400 mb-2">ক্যাম্পেইন পরিচিতি</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            একজন সচেতন তরুণ — একটি নিরাপদ পরিবার
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-base">
            Human Firewall তৈরি হবে মানুষ থেকে মানুষে। সাইবার সুরক্ষায় প্রতিটি তরুণই পরিবারের প্রথম প্রতিরোধক।
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Mission Statement */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  ক্যাম্পেইনের লক্ষ্য
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                  শিক্ষার্থীকে শুধু জানানো নয় — বিপদের মুহূর্তে সঠিক সিদ্ধান্ত নিতে সক্ষম করা।
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-2">
                    ১
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">নিজে শিখুন</h4>
                  <p className="text-xs text-slate-400 mt-1">প্রতারণার ফাঁদ চিনে থামতে ও যাচাই করতে শিখুন।</p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="w-7 h-7 rounded bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm mb-2">
                    ২
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">পরিবারে ছড়ান</h4>
                  <p className="text-xs text-slate-400 mt-1">বাবা-মা ও ভাইবোনদের অ্যাকাউন্ট সুরক্ষিত রাখুন।</p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="w-7 h-7 rounded bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-sm mb-2">
                    ৩
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">সমাজকে শক্ত করুন</h4>
                  <p className="text-xs text-slate-400 mt-1">সচেতন নেটওয়ার্ক তৈরি করে অপরাধীদের প্রতিরোধ করুন।</p>
                </div>
              </div>
            </div>

            {/* Right: Campaign Banner / Speaker Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-900/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>InfoGuard+ জাতীয় উদ্যোগ</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  বক্তার ছবি বা ক্যাম্পেইন ব্যানার
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  বক্তা: সাইবার বিশেষজ্ঞ দল • [পদবি ও প্রশিক্ষকবৃন্দ] • InfoGuard+ ক্যাম্পেইন ২০২৬
                </p>
                <div className="p-3 bg-emerald-950/60 border border-emerald-800/40 rounded-lg text-xs text-emerald-200">
                  &ldquo;Human Firewall তৈরি হবে মানুষ থেকে মানুষে — প্রযুক্তি যেখানে থামে, মানুষের সচেতনতা সেখান থেকে রক্ষা করে।&rdquo;
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>ক্যাম্পেইন কোড: C-SEC-2026</span>
                <span className="text-emerald-400 font-semibold">সবার জন্য উন্মুক্ত</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Disclaimer (Page 4) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Disclaimer (ঘোষণাপত্র)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                শিক্ষামূলক উদ্দেশ্য ও দায়িত্বশীল ব্যবহারের অঙ্গীকার
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              এই কর্মশালার সব গল্প, নাম ও উদাহরণ কেবল শিক্ষামূলক — কাউকে ব্যক্তিগতভাবে ইঙ্গিত করা হয়নি।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs font-mono font-bold text-sky-400">০১</span>
              <h4 className="text-sm font-bold text-white mt-1">সব গল্প কাল্পনিক</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                রফিক, মিতুসহ সব চরিত্র ও ঘটনা শেখার সুবিধার্থে তৈরি। বাস্তব কারও সঙ্গে মিল সম্পূর্ণ কাকতালীয়।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs font-mono font-bold text-amber-400">০২</span>
              <h4 className="text-sm font-bold text-white mt-1">নাম ও ব্র্যান্ড</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                যেকোনো প্রতিষ্ঠান, অ্যাপ বা সেবার নাম শুধু উদাহরণ — এটি কোনো অভিযোগ, মূল্যায়ন বা প্রচার নয়।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs font-mono font-bold text-purple-400">০৩</span>
              <h4 className="text-sm font-bold text-white mt-1">স্ক্রিনশট ও ছবি</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                দেখানো স্ক্রিনশট, বার্তা ও নম্বর সচেতনতার জন্য পুনর্নির্মিত বা অস্পষ্ট করা; কারও ব্যক্তিগত তথ্য নেই।
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs font-mono font-bold text-emerald-400">০৪</span>
              <h4 className="text-sm font-bold text-white mt-1">দায়িত্বশীল ব্যবহার</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                এখানে শেখানো কৌশল কেবল আত্মরক্ষার জন্য। অপব্যবহার আইনত দণ্ডনীয় এবং ক্যাম্পেইনের নীতিবিরুদ্ধ।
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-emerald-200">
              <strong className="text-white">মূল কথা:</strong> উদ্দেশ্য একটাই — সচেতনতা। কেউ যেন আক্রান্ত না হয়, কেউ যেন আক্রমণকারীও না হয়।
            </div>
            <div className="text-xs text-slate-300 font-mono flex items-center gap-2 whitespace-nowrap">
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>জরুরি প্রয়োজনে ৯৯৯ / ৩৩৩</span>
              <span aria-hidden="true">·</span>
              <span>InfoGuard+</span>
            </div>
          </div>
        </div>

        {/* Section 3: Workshop Objectives & Interactive Hand Raise (Page 5) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold text-emerald-400">কর্মশালার উদ্দেশ্য · শুরু</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                কর্মশালার মূল ৫টি উদ্দেশ্য
              </h3>
            </div>
            <span className="text-sm font-medium text-slate-400">
              এটি Boring Lecture নয় — এটি অংশগ্রহণমূলক অনুশীলন
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">নিরাপদ সিদ্ধান্ত নেওয়ার অনুশীলন</h4>
              <p className="text-xs text-slate-400 mt-2">চাপের মুখে মাথা ঠান্ডা রেখে সঠিক সিদ্ধান্ত নেওয়া।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">স্থানীয় প্রতারণা দ্রুত শনাক্ত</h4>
              <p className="text-xs text-slate-400 mt-2">বিকাশ, নগদ, এটিএম ও ভর্তি স্ক্যাম চেনা।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">তথ্য ও অ্যাকাউন্ট সুরক্ষা</h4>
              <p className="text-xs text-slate-400 mt-2">শক্তিশালী পাসওয়ার্ড ও 2FA চালু রাখা।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">ডিজিটাল সুস্থতা ও ভারসাম্য</h4>
              <p className="text-xs text-slate-400 mt-2">স্ক্রিন টাইম নিয়ন্ত্রণ ও মানসিক শান্তি বজায় রাখা।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <Users2 className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">দ্রুত সঠিক সহায়তা নেওয়া</h4>
              <p className="text-xs text-slate-400 mt-2">লজ্জা না পেয়ে অভিযোগ ও পুনরুদ্ধার পদক্ষেপে যাওয়া।</p>
            </div>
          </div>

          {/* Interactive Hand-Raise Tool (Page 5 bottom) */}
          <div className="mt-8 p-6 rounded-2xl bg-amber-950/20 border-2 border-dashed border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">ইন্টারেক্টিভ পোল</div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                যারা কখনো সন্দেহজনক লিংক বা কল পেয়েছেন — হাত তুলুন!
              </h4>
              <p className="text-xs text-slate-300">
                ক্যাম্পেইনে এ পর্যন্ত <span className="font-bold text-amber-300 font-mono">{handCount}</span> জন শিক্ষার্থী হাত তুলেছেন।
              </p>
            </div>

            <button
              onClick={toggleHand}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap shadow-md ${
                handRaised
                  ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/30'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
            >
              <Hand className={`w-5 h-5 ${handRaised ? 'animate-bounce' : ''}`} />
              <span>{handRaised ? 'হাত তোলা হয়েছে! (ধন্যবাদ)' : 'আমি পেয়েছি (হাত তুলুন)'}</span>
            </button>
          </div>
        </div>

        {/* Section 4: Participation Rules (Page 6) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-semibold text-emerald-400">নিরাপদ পরিবেশ ও বিশ্বাস</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-6">
            অংশগ্রহণের তিনটি নিয়ম
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>নিরাপদ পরিবেশ</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>ব্যক্তিগত ঘটনা বলা বাধ্যতামূলক নয়</li>
                <li>সংবেদনশীল বিষয়ে কাল্পনিক উদাহরণ ব্যবহার করা হবে</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span>ভুক্তভোগীকে দোষ নয়</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>কাউকে লজ্জা দেওয়া হবে না</li>
                <li>নিরাপদ সহায়তা ও সহমর্মিতার দিকে পথনির্দেশ করা হবে</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>সক্রিয় অংশগ্রহণ</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>হাত তোলা, রোল-প্লে, দলীয় কাজে স্বতঃস্ফূর্ত অংশ নিন</li>
                <li>ভুল উত্তর বলে কিছু নেই — শেখাই মূল লক্ষ্য</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center sm:text-left">
            <p className="text-xs sm:text-sm font-semibold text-emerald-400">
              প্রশ্ন করা ও সাহায্য চাওয়া দুর্বলতা নয় — এটি একটি অত্যন্ত সাহসী পদক্ষেপ।
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
