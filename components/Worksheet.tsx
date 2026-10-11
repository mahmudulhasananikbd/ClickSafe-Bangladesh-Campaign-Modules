'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Printer, 
  CheckCircle2, 
  RotateCcw, 
  Share2, 
  Download, 
  Calendar, 
  Sparkles 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ChecklistItem {
  id: number;
  labelBn: string;
  labelEn: string;
  categoryBn: string;
  categoryEn: string;
}

const initialItems: ChecklistItem[] = [
  { id: 1, labelBn: 'ফোনে শক্তিশালী স্ক্রিন লক (PIN/বায়োমেট্রিক) চালু আছে', labelEn: 'Strong phone screen lock (PIN/Biometric) enabled', categoryBn: 'ডিভাইস', categoryEn: 'Device' },
  { id: 2, labelBn: 'লক স্ক্রিনে ওটিপি ও বার্তার প্রিভিউ বন্ধ (Hide sensitive content)', labelEn: 'Lock screen message & OTP preview hidden', categoryBn: 'গোপনীয়তা', categoryEn: 'Privacy' },
  { id: 3, labelBn: 'ই-মেইল অ্যাকাউন্টে 2-Step Verification (2FA) চালু আছে', labelEn: '2-Step Verification (2FA) enabled on email', categoryBn: 'অ্যাকাউন্ট', categoryEn: 'Account' },
  { id: 4, labelBn: 'MFS (বিকাশ/নগদ) ও ব্যাংক অ্যাকাউন্টে ২-ফ্যাক্টর সুরক্ষা সক্রিয়', labelEn: '2FA & strong PIN active on MFS and Bank apps', categoryBn: 'আর্থিক', categoryEn: 'Finance' },
  { id: 5, labelBn: 'প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে আলাদা ও ইউনিক পাসফ্রেজ', labelEn: 'Unique long passphrase for each critical account', categoryBn: 'পাসওয়ার্ড', categoryEn: 'Password' },
  { id: 6, labelBn: 'সামাজিক মাধ্যমে ভবিষ্যৎ পোস্টের অডিয়েন্স: Friends অনলি', labelEn: 'Future social posts audience set to Friends only', categoryBn: 'সোশ্যাল', categoryEn: 'Social' },
  { id: 7, labelBn: 'পুরোনো পাবলিক পোস্ট ও ট্যাগ পর্যালোচনা করেছি', labelEn: 'Reviewed past public posts and tagged photos', categoryBn: 'সোশ্যাল', categoryEn: 'Social' },
  { id: 8, labelBn: 'অপ্রয়োজনীয় অ্যাপের ক্যামেরা, লোকেশন ও মাইক্রোফোন অনুমতি প্রত্যাহার করেছি', labelEn: 'Revoked unnecessary location/camera/mic app permissions', categoryBn: 'পারমিশন', categoryEn: 'Permissions' },
  { id: 9, labelBn: 'ফোন অপারেটিং সিস্টেম ও প্রধান অ্যাপগুলো আপডেট করেছি', labelEn: 'Phone OS and major security apps updated to latest version', categoryBn: 'ডিভাইস', categoryEn: 'Device' },
  { id: 10, labelBn: 'গুরুত্বপূর্ণ ডকুমেন্টের নিরাপদ ক্লাউড বা অফলাইন ব্যাকআপ আছে', labelEn: 'Important documents backed up securely offline/cloud', categoryBn: 'ব্যাকআপ', categoryEn: 'Backup' },
  { id: 11, labelBn: 'পরিবারের সদস্যদের সাথে জরুরি সিক্রেট কোড-ওয়ার্ড ঠিক করেছি', labelEn: 'Agreed on emergency secret code-word with family', categoryBn: 'পরিবার', categoryEn: 'Family' },
  { id: 12, labelBn: 'জরুরি হেল্পলাইন নম্বর (৯৯৯, ১৬২৪৭, ১৬১৬৭) ফোনে সেভ করেছি', labelEn: 'Saved emergency helplines (999, 16247, 16167) in phone', categoryBn: 'রিসোর্স', categoryEn: 'Resources' }
];

export default function Worksheet() {
  const { isBn } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem('clicksafe_checklist_2026');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object') {
            setCheckedItems(parsed);
          }
        }
      } catch {
        // ignore
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (id: number) => {
    setCheckedItems(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('clicksafe_checklist_2026', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / initialItems.length) * 100);

  const resetAll = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem('clicksafe_checklist_2026');
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="worksheet" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <ClipboardCheck className="w-4 h-4" />
              <span>{isBn ? 'মুদ্রণযোগ্য শিক্ষার্থী ওয়ার্কশিট' : 'Printable Student Worksheet'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isBn ? 'শিক্ষার্থী ওয়ার্কশিট — নিরাপত্তা চেকলিস্ট' : 'Student Worksheet — Security Checklist'}
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              {isBn 
                ? 'এক সপ্তাহ পরে বাড়ির সদস্যদের সঙ্গে মিলিয়ে দেখুন — আপনার পরিবারে কয়টি টিক পড়ল?'
                : 'Check back with your family members after one week — how many security checks did you complete?'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 no-print">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>{isBn ? 'প্রিন্ট করুন / PDF সেভ' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={resetAll}
              className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors"
              title={isBn ? 'রিসেট করুন' : 'Reset checklist'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Progress Bar */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 no-print">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-200">
              {isBn ? 'আপনার সুরক্ষা অগ্রগতি:' : 'Your Security Progress:'} <strong className="text-emerald-400 font-mono text-sm">{completedCount}</strong> / {initialItems.length} {isBn ? 'টি সম্পন্ন' : 'completed'} ({progressPercent}%)
            </span>
            <span className="text-slate-400 font-mono">
              {progressPercent === 100 
                ? (isBn ? '🎉 ১০০% সুরক্ষিত!' : '🎉 100% Secure!') 
                : (isBn ? 'অসম্পূর্ণ আইটেমগুলো সম্পন্ন করুন' : 'Complete remaining tasks')}
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 12 Checklist Items Grid (Print friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {initialItems.map((item, idx) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-950/40 border-emerald-500/80 text-white'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                  isChecked 
                    ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-bold' 
                    : 'border-slate-700 bg-slate-900'
                }`}>
                  {isChecked && <CheckCircle2 className="w-4 h-4" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">
                      {isBn ? `আইটেম #${idx + 1}` : `Item #${idx + 1}`}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      {isBn ? item.categoryBn : item.categoryEn}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold mt-0.5 leading-relaxed">
                    {isBn ? item.labelBn : item.labelEn}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Advice */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-emerald-400 font-semibold">
          {isBn 
            ? 'এক সপ্তাহ পরে বাড়ির সদস্যদের সঙ্গে মিলিয়ে দেখুন — কয়টি টিক পড়ল? পরিবারকে সুরক্ষিত রাখুন।'
            : 'Review this list with family after one week — how many checks did you pass? Keep your family protected.'}
        </div>

      </div>
    </section>
  );
}
