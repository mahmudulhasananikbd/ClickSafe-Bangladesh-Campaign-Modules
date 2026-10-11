'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  UserX, 
  CheckCircle, 
  XCircle, 
  Users, 
  LifeBuoy, 
  Sparkles,
  Shield,
  HelpCircle
} from 'lucide-react';

export default function Module9() {
  return (
    <section id="module-9" className="py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 59) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center font-mono font-bold">৯</span>
                <span>মডিউল ৯ ও ৭ · সাইবার বুলিং ও সহমর্মিতা</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ১৩–১৫ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                সাইবার বুলিং, ব্ল্যাকমেইল ও ডিজিটাল হয়রানি
              </h2>
              <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl">
                শেখার ফল — অনলাইনে হয়রানীতে প্রমাণ রেখে Report, Block ও আইনগত সহায়তা নেওয়ার সাহস অর্জন।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>১৫ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 60: গল্প: প্রিয়ার পাশে একজন দাঁড়িয়েছিল */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ৯ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                প্রিয়ার পাশে একজন দাঁড়িয়েছিল
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>প্রস্তাব প্রত্যাখ্যানের পর ভুয়া প্রোফাইল তৈরি:</strong> সহপাঠীর প্রস্তাব ফিরিয়ে দেওয়ায় ক্ষুব্ধ হয়ে প্রিয়ার ছবি ও নাম বিকৃত করে ফেক আইডি তৈরি করা হয়।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>Edited পোস্ট ও অপমান ছড়ানো:</strong> সেই ফেক অ্যাকাউন্ট থেকে বিকৃত এডিটেড ছবি ও কুরুচিপূর্ণ মিথ্যা পোস্ট দিয়ে মেসেঞ্জারে হুমকি পাঠানো হতে থাকে। প্রিয়া মানসিকভাবে ভেঙে পড়ে।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>বন্ধুর সাহসী সহমর্মিতা:</strong> প্রিয়ার সহপাঠী বন্ধু তাকে দোষারোপ না করে বলল—&ldquo;তুমি দোষী নও। আমরা কোনো রিপ্লাই দেব না; স্ক্রিনশট নিয়ে প্রমাণ রাখব, আইডি ব্লক করব এবং পুলিশের সাইবার ইউনিটে সাহায্য নেব।&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs sm:text-sm text-emerald-200">
                <strong>মূল শিক্ষা:</strong> বিশ্বাস করা, ভুক্তভোগীর পাশে দাঁড়ানো, গোপনীয়তা রক্ষা ও নিরাপদ সহায়তার সঙ্গে যুক্ত করাও সাইবার নিরাপত্তার অবিচ্ছেদ্য অংশ।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-emerald-950/40 border border-emerald-700/60 flex items-center justify-center text-emerald-400 mx-auto">
                <HeartHandshake className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">পাশে দাঁড়ানোর শক্তি</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                অনলাইনে বুলিংয়ের শিকার ব্যক্তিকে একা ফেলে না রেখে সহমর্মিতা দেখানোই তাকে সবচেয়ে বড় মানসিক শক্তি যোগায়।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 61: চার ধাপের সহায়তা-ঢাল */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৭ · প্রতিরক্ষা পদ্ধতি</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              চার ধাপের সহায়তা-ঢাল
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              থামুন → প্রমাণ রাখুন → রিপোর্ট/ব্লক → পাশে দাঁড়ান।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">১</span>
              <h4 className="text-sm font-bold text-white">থামুন</h4>
              <p className="text-xs text-slate-300">কোনো উস্কানিতে রাগ বা ক্ষোভ প্রকাশ করে পাল্টা উত্তর দেবেন না।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">২</span>
              <h4 className="text-sm font-bold text-white">প্রমাণ রাখুন</h4>
              <p className="text-xs text-slate-300">স্ক্রিনশট, প্রোফাইল লিংক, ইউজারনেম ও তারিখ-সময় সংরক্ষণ করুন।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">৩</span>
              <h4 className="text-sm font-bold text-white">রিপোর্ট ও ব্লক</h4>
              <p className="text-xs text-slate-300">প্ল্যাটফর্মে (Facebook/IG) রিপোর্ট সাবমিট করুন এবং ব্লক দিন।</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">৪</span>
              <h4 className="text-sm font-bold text-white">পাশে দাঁড়ান</h4>
              <p className="text-xs text-slate-300">বিশ্বস্ত শিক্ষক, অভিভাবক বা পুলিশের সাইবার সাপোর্টের সহায়তা নিন।</p>
            </div>
          </div>

          {/* Blackmail Guidelines Sub-box */}
          <div className="mt-6 p-4 rounded-xl bg-rose-950/30 border border-rose-800/50 space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
              ব্ল্যাকমেইল হলে ৩টি সোনালি নিষেধ:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="p-2 rounded bg-slate-950/60 border border-rose-900/40">
                ✕ একা টাকা দেবেন না (টাকা দিলে চাহিদা বাড়ে, হুমকি কখনো থামে না)
              </div>
              <div className="p-2 rounded bg-slate-950/60 border border-rose-900/40">
                ✕ গোপনে একা সমাধানের চেষ্টা নয় (অবিলম্বে অভিজ্ঞ কারও সাহায্য নিন)
              </div>
              <div className="p-2 rounded bg-slate-950/60 border border-rose-900/40">
                ✕ প্রমাণ কখনো মুছে ফেলবেন না (চ্যাট ডিলিট করলে আইনি ব্যবস্থা নেওয়া কঠিন হয়)
              </div>
            </div>
          </div>
        </div>

        {/* Slide 62: লিঙ্গভিত্তিক সাইবার সহিংসতা ও সহায়তা-বৃত্ত */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৭ · সম্প্রসারিত</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              লিঙ্গভিত্তিক সাইবার সহিংসতা ও সহায়তা-বৃত্ত
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              ভুক্তভোগী একা নন — চারপাশের সবাই মিলে গড়ে তুলতে হবে নিরাপদ বৃত্ত।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Categories */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-rose-400 block">কী কী এর মধ্যে পড়ে:</span>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>নারীবিদ্বেষী কুরুচিপূর্ণ গালি ও অনলাইন যৌন হয়রানি</li>
                  <li>ব্যক্তিগত সংবেদনশীল ছবি বা ভিডিও ছড়ানোর ব্ল্যাকমেইল হুমকি</li>
                  <li>ভুয়া প্রোফাইল খুলে ছবি বিকৃত করা ও লাগাতার স্টকিং (Stalking)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/60 space-y-2">
                <span className="text-xs font-bold text-emerald-400 block">নিরাপদ পদক্ষেপ:</span>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>স্ক্রিনশট ও URL সংরক্ষণ করুন</li>
                  <li>সোশ্যাল মিডিয়ায় অ্যাকাউন্ট রিপোর্ট ও ব্লক করুন</li>
                  <li>বিশ্বস্ত শিক্ষিকা, অভিভাবক বা সহপাঠীকে নির্ভয়ে জানান</li>
                  <li>ব্ল্যাকমেইলকারীর সাথে কখনো একা দেখা নয় এবং কোনো টাকা নয়</li>
                </ul>
              </div>
            </div>

            {/* Right Support Circle Diagram */}
            <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
              <div className="relative mx-auto w-64 h-64 rounded-full border border-dashed border-emerald-500/40 flex items-center justify-center p-4">
                {/* Outer Support Orbit Nodes */}
                <span className="absolute top-2 text-[10px] font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  বন্ধু
                </span>
                <span className="absolute bottom-2 text-[10px] font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  কাউন্সেলর
                </span>
                <span className="absolute left-2 text-[10px] font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  সাইবার ইউনিট
                </span>
                <span className="absolute right-2 text-[10px] font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  পরিবার
                </span>

                {/* Inner Core */}
                <div className="w-32 h-32 rounded-full bg-emerald-950/60 border-2 border-emerald-400 flex flex-col items-center justify-center p-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mb-1" />
                  <span className="text-xs font-black text-white">ভুক্তভোগী</span>
                  <span className="text-[10px] text-emerald-300 font-bold uppercase">একা নন</span>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold text-emerald-400">
                লক্ষ্য প্রতিশোধ নয় — সর্বোচ্চ নিরাপত্তা ও আইনি সহায়তা।
              </p>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            ভুক্তভোগী দায়ী নন — লক্ষ্য প্রতিশোধ নয়, নিরাপত্তা ও মানবিক সহায়তা।
          </div>
        </div>

        {/* Slide 63: ভুক্তভোগী দোষী নন (Banner) */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-2 border-emerald-500 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            ভুক্তভোগী কখনো দোষী নন
          </h3>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            ব্যক্তিগতভাবে শেয়ার করা কোনো ছবি বা ভিডিও সম্মতি ছাড়া প্রকাশ বা ছড়ানোর সম্পূর্ণ দায় অপরাধীর — ভুক্তভোগীর নয়।
          </p>
          <div className="inline-block px-5 py-2 bg-amber-500 text-slate-950 font-black text-sm rounded-xl shadow-md">
            সহায়তা চাওয়া = পরম সাহসিকতা
          </div>
        </div>

        {/* Slide 64: আপনি দর্শক নন—সহায়তার অংশ */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-sky-400 uppercase">মডিউল ৯ · প্রত্যক্ষদর্শীর ভূমিকা</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              আপনি দর্শক নন — সহায়তার অংশ
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              অনলাইনে বুলিং দেখলে নিশ্চুপ থাকা অপরাধকে সহযোগিতা করার শামিল।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Don'ts */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-800/40 space-y-3">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <span>যা ভুলেও করবেন না (Don&apos;ts):</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>উত্তেজিত পোস্ট লাইক, কমেন্ট বা শেয়ার (Forward) করবেন না</li>
                <li>Victim Blaming বা ভুক্তভোগীকেই দোষারোপ করবেন না</li>
                <li>নিজে আইন হাতে তুলে নিয়ে প্রতিশোধ বা Doxxing করবেন না</li>
                <li>ব্যক্তিগত সংবেদনশীল তথ্য ও চ্যাট বন্ধুদের কাছে ছড়াবেন না</li>
              </ul>
            </div>

            {/* Do's */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>যা অবশ্যই করবেন (Do&apos;s):</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>ইনবক্সে গিয়ে সাহস দিয়ে বলুন: &ldquo;আমি তোমাকে বিশ্বাস করি, তোমার পাশে আছি&rdquo;</li>
                <li>প্রমাণ (Screenshot & Link) নিরাপদে গুছিয়ে রাখতে সাহায্য করুন</li>
                <li>ভুক্তভোগীর অনুমতি ও সম্মতি নিয়ে প্ল্যাটফর্মে রিপোর্ট করুন</li>
                <li>অভিভাবক বা Trusted Support নেটওয়ার্কে তাকে যুক্ত করুন</li>
              </ul>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs font-semibold text-sky-300">
            Gender-based cyber violence-এ গোপনীয়তা ও সম্মতিই সর্বোচ্চ অগ্রাধিকার।
          </div>
        </div>

      </div>
    </section>
  );
}
