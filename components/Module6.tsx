'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Clock, 
  QrCode, 
  CheckCircle2, 
  XCircle, 
  Sliders, 
  Smartphone, 
  Download, 
  RefreshCw, 
  Lock, 
  HardDrive,
  AlertTriangle,
  Camera,
  Mic,
  MapPin,
  FolderOpen
} from 'lucide-react';

export default function Module6() {
  // Permission audit interactive state
  const [permissions, setPermissions] = useState({
    calcLocation: false, // false = revoked (correct)
    flashMic: false, // false = revoked (correct)
    camCamera: true, // true = allowed (correct)
    mapLocation: true // true = allowed (correct)
  });

  return (
    <section id="module-6" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Module Header (Slide 43) */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/60 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center font-mono font-bold">৬</span>
                <span>মডিউল ৬ ও ৮ · ডিভাইস ও পারমিশন গার্ড</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">সময়: ৮ মিনিট</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                ম্যালওয়্যার, অ্যাপ ও ডিভাইস নিরাপত্তা
              </h2>
              <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl">
                শেখার ফল — ক্ষতিকর অ্যাপ, সন্দেহজনক QR কোড ও অপ্রয়োজনীয় Permission-এর ঝুঁকি যাচাই করতে সক্ষম হওয়া।
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>৮ মিনিট সেশন</span>
            </div>
          </div>
        </div>

        {/* Slide 44: গল্প: রাহাত ঋণ চেয়েছিল—অ্যাপ চেয়েছিল পুরো জীবন */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>মডিউল ৬ · বাস্তব কেস স্টাডি</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                রাহাত ঋণ চেয়েছিল — অ্যাপ চেয়েছিল পুরো জীবন
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ১
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>দ্রুত ৳১০,০০০ লোনের লোভ:</strong> ফেসবুকে বিজ্ঞাপন দেখে রাহাত একটি ভুয়া লোন অ্যাপ নামায়। কোনো জামানত ছাড়াই মুহূর্তেই টাকা দেওয়ার প্রতিশ্রুতি দেওয়া হয়েছিল।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ২
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>লোনের সাথে অপ্রাসঙ্গিক সব অনুমতি:</strong> ইনস্টলের সময় অ্যাপটি চাইল: Contacts, Photos, SMS ও Call Log। না বুঝেই রাহাত সব &lsquo;Allow&rsquo; দিয়ে দিল।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center text-xs shrink-0">
                    ৩
                  </span>
                  <p className="text-sm text-slate-300">
                    <strong>পরিবার ও শিক্ষকদের ব্ল্যাকমেইল:</strong> অ্যাপের সার্ভারে রাহাতের ফোনের সব ছবি ও কন্টাক্ট কপি হয়ে গেল। মেয়াদ শেষ হওয়ার আগেই রাহাতের বাবা, মা ও কলেজের শিক্ষকদের কল দিয়ে অশ্লীল হুমকি দেওয়া শুরু হলো।
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs sm:text-sm text-rose-200">
                <strong>মূল শিক্ষা:</strong> অ্যাপের কাজ ও প্রয়োজনীয় পারমিশন না মিললে সরাসরি Deny করুন। বিশ্বস্ত অফিসিয়াল স্টোর ছাড়া কখনো কোনো APK ইনস্টল করবেন না।
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-4 text-center">
              <div className="w-20 h-20 rounded-2xl bg-rose-950/40 border border-rose-700/60 flex items-center justify-center text-rose-400 mx-auto">
                <ShieldAlert className="w-10 h-10" />
              </div>
              <h4 className="text-sm font-bold text-white">ভুয়া লোন ও ট্রোজান অ্যাপের ফাঁদ</h4>
              <p className="text-xs text-slate-400">
                আপনার ফোনবুকের ৫০০ জন মানুষের নম্বর ও ব্যক্তিগত অ্যালবাম চোরের হাতে তুলে দেওয়ার নাম লোন নয় — এটি ডিজিটাল চাঁদাবাজি।
              </p>
            </div>

          </div>
        </div>

        {/* Slide 45: QR ≠ নিরাপদ Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-slate-950 border-2 border-rose-600/80 text-center space-y-4 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto">
            <QrCode className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black text-rose-400 tracking-tight">
            QR ≠ নিরাপদ
          </h3>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto font-medium">
            QR code নিজে নিরাপত্তার কোনো প্রমাণ নয় — পোস্টার বা আয়োজক যাচাই করুন এবং স্ক্যানারের প্রিভিউতে পূর্ণ Destination URL পড়ে তবেই লিংক খুলুন।
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-rose-300">
            <span>• ভুয়া registration form</span>
            <span>• login/ব্যক্তিগত তথ্য চুরি</span>
            <span>• ক্ষতিকর app/APK সরাসরি ডাউনলোড</span>
          </div>
        </div>

        {/* Slide 46: Permission Audit — সবুজ নাকি লাল? */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৮ · হ্যান্ডস-অন অডিট</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Permission Audit — সবুজ নাকি লাল?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Settings → Apps → Permission Manager: কাজের সঙ্গে মিলিয়ে অনুমতি দিন — বাকিটা বন্ধ রাখুন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Audit 1 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-rose-400 font-bold block">অযৌক্তিক অনুমতি (ঝুঁকিপূর্ণ):</span>
                <h4 className="text-sm font-bold text-white mt-0.5">ক্যালকুলেটর → Location</h4>
                <p className="text-xs text-slate-400">হিসাব করার জন্য ভৌগোলিক অবস্থানের কোনো প্রয়োজন নেই।</p>
              </div>
              <button
                onClick={() => setPermissions(p => ({ ...p, calcLocation: !p.calcLocation }))}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all whitespace-nowrap ${
                  !permissions.calcLocation
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-rose-500/20 border-rose-500 text-rose-300'
                }`}
              >
                {!permissions.calcLocation ? '✓ প্রত্যাহার করা হয়েছে' : 'অনুমতি দেওয়া আছে (বিপদ)'}
              </button>
            </div>

            {/* Audit 2 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-rose-400 font-bold block">অযৌক্তিক অনুমতি (ঝুঁকিপূর্ণ):</span>
                <h4 className="text-sm font-bold text-white mt-0.5">ফ্ল্যাশলাইট → Microphone</h4>
                <p className="text-xs text-slate-400">আলো জ্বালানোর জন্য গোপন কথাবার্তা শোনার দরকার নেই।</p>
              </div>
              <button
                onClick={() => setPermissions(p => ({ ...p, flashMic: !p.flashMic }))}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all whitespace-nowrap ${
                  !permissions.flashMic
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-rose-500/20 border-rose-500 text-rose-300'
                }`}
              >
                {!permissions.flashMic ? '✓ প্রত্যাহার করা হয়েছে' : 'অনুমতি দেওয়া আছে (বিপদ)'}
              </button>
            </div>

            {/* Audit 3 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-emerald-400 font-bold block">যৌক্তিক অনুমতি (স্বাভাবিক):</span>
                <h4 className="text-sm font-bold text-white mt-0.5">ক্যামেরা অ্যাপ → Camera</h4>
                <p className="text-xs text-slate-400">ছবি তোলার জন্য স্বাভাবিকভাবেই ক্যামেরার অনুমতি লাগবে।</p>
              </div>
              <span className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-400 whitespace-nowrap">
                ✓ ঠিক আছে
              </span>
            </div>

            {/* Audit 4 */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-emerald-400 font-bold block">যৌক্তিক অনুমতি (স্বাভাবিক):</span>
                <h4 className="text-sm font-bold text-white mt-0.5">মানচিত্র (Maps) → Location</h4>
                <p className="text-xs text-slate-400">রাস্তা দেখানোর জন্য জিপিএস লোকেশন আবশ্যক।</p>
              </div>
              <span className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-400 whitespace-nowrap">
                ✓ ঠিক আছে
              </span>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            কাজের সঙ্গে মিলিয়ে অনুমতি দিন — বাকি সব অনুমতি স্থায়ীভাবে বন্ধ রাখুন।
          </div>
        </div>

        {/* Slide 47: পাঁচটি নিরাপদ অভ্যাস */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase">মডিউল ৮ · করণীয়</span>
            <h3 className="text-2xl font-bold text-white mt-1">
              পাঁচটি নিরাপদ অভ্যাস
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              মোবাইল ও ল্যাপটপ সুরক্ষায় এই পাঁচটি অভ্যাস দৈনন্দিন জীবনে মেনে চলুন:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Download className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 block">১</span>
              <h4 className="text-sm font-bold text-white">অফিসিয়াল স্টোর</h4>
              <p className="text-xs text-slate-400">কেবল Google Play বা App Store থেকে ইনস্টল</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 block">২</span>
              <h4 className="text-sm font-bold text-white">কাজের সঙ্গে মিল</h4>
              <p className="text-xs text-slate-400">প্রয়োজন ছাড়া অপ্রাসঙ্গিক পারমিশন দেবেন না</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 block">৩</span>
              <h4 className="text-sm font-bold text-white">নিয়মিত আপডেট</h4>
              <p className="text-xs text-slate-400">সফটওয়্যার ও সিকিউরিটি প্যাচ আপডেট রাখুন</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 block">৪</span>
              <h4 className="text-sm font-bold text-white">স্ক্রিন ও রিমোট লক</h4>
              <p className="text-xs text-slate-400">Find My Device চালু রাখুন যাতে হারালে লক করা যায়</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <HardDrive className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 block">৫</span>
              <h4 className="text-sm font-bold text-white">ফাইল ব্যাকআপ</h4>
              <p className="text-xs text-slate-400">মূল্যবান ডকুমেন্টের পৃথক ড্রাইভে ব্যাকআপ রাখুন</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-xs text-rose-300 text-center">
            <strong>ঝুঁকির লক্ষণ:</strong> অপরিচিত উৎস • অস্বাভাবিক ছাড় • দ্রুত ইনস্টলের চাপ • বানানভুল • নিরাপত্তা ফিচার বন্ধ করতে বলা।
          </div>

          <div className="mt-4 text-center text-xs sm:text-sm font-semibold text-emerald-300">
            অ্যাপের দাম বিনামূল্যে হলেও আপনার ফোনের ব্যক্তিগত তথ্য তার কাছে মিলিয়ন ডলারের মূল্যবান!
          </div>
        </div>

      </div>
    </section>
  );
}
