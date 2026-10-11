'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, Key, X, AlertCircle, ArrowRight } from 'lucide-react';
import { useSecurity } from '@/context/SecurityContext';
import { useLanguage } from '@/context/LanguageContext';

export default function AdminAuthModal() {
  const { 
    isAdminAuthModalOpen, 
    setIsAdminAuthModalOpen, 
    loginAsAdmin,
    isAdmin
  } = useSecurity();

  const { isBn } = useLanguage();
  const [passcode, setPasscode] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isAdminAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const result = loginAsAdmin(passcode);
    if (!result.success) {
      setErrorMessage(result.message);
    } else {
      setPasscode('');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md bg-slate-900 border border-emerald-500/50 rounded-2xl shadow-2xl p-6 text-slate-100 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={() => {
              setIsAdminAuthModalOpen(false);
              setErrorMessage(null);
            }}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon and Title */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-950/50">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                {isBn ? 'অ্যাডমিনিস্ট্রেটর সিকিউরিটি এক্সেস' : 'Administrator Security Access'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {isBn 
                  ? 'সার্টিফিকেট লেআউট ডিজাইন ও সিস্টেম ম্যানেজমেন্টের জন্য এডমিন পাসকোড প্রদান করুন।' 
                  : 'Enter master administrator key to unlock certificate layout designer & security control.'}
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                {isBn ? 'এডমিন সিক্রেট পাসকোড' : 'Admin Security Key / Passcode'}
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder={isBn ? 'পাসকোড লিখুন...' : 'Enter master passcode...'}
                  autoFocus
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
                <Key className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span>{isBn ? 'এডমিন পোর্টাল আনলক করুন' : 'Unlock Administrator Portal'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
