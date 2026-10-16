'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  ShieldAlert, 
  Key, 
  Lock, 
  EyeOff, 
  Smartphone, 
  Cpu, 
  LifeBuoy, 
  Compass, 
  Shuffle, 
  Copy, 
  Check, 
  ExternalLink, 
  Bell, 
  BellOff, 
  X, 
  ChevronRight, 
  Sparkles, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CYBER_TIPS, CyberTip, getRandomTip } from '@/lib/cyberTips';

interface CyberTipOfTheDayProps {
  className?: string;
  variant?: 'card' | 'notification' | 'both';
}

const STORAGE_KEY_SHOW_NOTIFICATION = 'clicksafe_show_tip_notification';

export default function CyberTipOfTheDay({ 
  className = '',
  variant = 'both'
}: CyberTipOfTheDayProps) {
  const { isBn } = useLanguage();

  // Deterministic default initial tip for 100% SSR hydration safety
  const [currentTip, setCurrentTip] = useState<CyberTip>(CYBER_TIPS[0]);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Initialize from client storage safely in useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedPref = localStorage.getItem(STORAGE_KEY_SHOW_NOTIFICATION);
        if (savedPref !== null) {
          setShowNotification(savedPref === 'true');
        } else {
          setShowNotification(true);
        }

        // Pick a fresh random tip on client mount
        setCurrentTip(getRandomTip());
      } catch {
        // Fallback
      } finally {
        setIsLoaded(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Listen to custom event for syncing toggle across components
  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvt = e as CustomEvent<boolean>;
      if (typeof customEvt.detail === 'boolean') {
        setShowNotification(customEvt.detail);
      }
    };
    window.addEventListener('csb_tip_notification_toggle', handleSync);
    return () => window.removeEventListener('csb_tip_notification_toggle', handleSync);
  }, []);

  const toggleNotification = useCallback((val?: boolean) => {
    const nextVal = typeof val === 'boolean' ? val : !showNotification;
    setShowNotification(nextVal);
    try {
      localStorage.setItem(STORAGE_KEY_SHOW_NOTIFICATION, String(nextVal));
      window.dispatchEvent(new CustomEvent('csb_tip_notification_toggle', { detail: nextVal }));
    } catch {
      // Ignore
    }
  }, [showNotification]);

  const handleNextTip = useCallback(() => {
    setCurrentTip(prev => getRandomTip(prev.id));
    setIsCopied(false);
  }, []);

  const handleCopyTip = useCallback(() => {
    const textToCopy = isBn 
      ? `💡 সাইবার টিপ: ${currentTip.titleBn}\n${currentTip.tipBn}\n\n👉 করণীয়: ${currentTip.actionBn}\n\n— Click Safe BD ২০২৬`
      : `💡 Cyber Tip: ${currentTip.titleEn}\n${currentTip.tipEn}\n\n👉 Action: ${currentTip.actionEn}\n\n— Click Safe BD 2026`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2200);
      });
    }
  }, [currentTip, isBn]);

  const renderTipIcon = (iconName: string, classNameStr = 'w-4 h-4') => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className={classNameStr} />;
      case 'Key':
        return <Key className={classNameStr} />;
      case 'Lock':
        return <Lock className={classNameStr} />;
      case 'EyeOff':
        return <EyeOff className={classNameStr} />;
      case 'Smartphone':
        return <Smartphone className={classNameStr} />;
      case 'Cpu':
        return <Cpu className={classNameStr} />;
      case 'LifeBuoy':
        return <LifeBuoy className={classNameStr} />;
      case 'Compass':
        return <Compass className={classNameStr} />;
      default:
        return <Shield className={classNameStr} />;
    }
  };

  return (
    <>
      {/* 1. Dashboard Widget Card */}
      {(variant === 'card' || variant === 'both') && (
        <div className={`w-full ${className}`}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-5 sm:p-6 shadow-xl backdrop-blur-md">
            
            {/* Ambient background glow */}
            <div 
              aria-hidden="true" 
              className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
            />

            {/* Top Bar: Label & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </span>
                
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-amber-400 font-semibold tracking-wider uppercase">
                      {isBn ? 'আজকের সাইবার টিপ' : 'Cyber Tip of the Day'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{isBn ? currentTip.categoryBn : currentTip.categoryEn}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Shuffle, Copy, and Notification Toggle */}
              <div className="flex items-center gap-2">
                {/* Shuffle Tip Button */}
                <button
                  onClick={handleNextTip}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                  title={isBn ? 'অন্য একটি টিপ দেখুন' : 'Get another random security tip'}
                >
                  <Shuffle className="w-3.5 h-3.5 text-slate-400" />
                  <span>{isBn ? 'নতুন টিপ' : 'Next Tip'}</span>
                </button>

                {/* Copy Tip Button */}
                <button
                  onClick={handleCopyTip}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
                  title={isBn ? 'টিপটি কপি করুন' : 'Copy tip to clipboard'}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{isBn ? 'কপি হয়েছে' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{isBn ? 'কপি' : 'Copy'}</span>
                    </>
                  )}
                </button>

                {/* Notification Toggle Switch */}
                <button
                  onClick={() => toggleNotification()}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all shadow-sm ${
                    showNotification
                      ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/60'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-300'
                  }`}
                  title={showNotification 
                    ? (isBn ? 'স্ক্রিন নোটিফিকেশন বন্ধ করুন' : 'Hide floating notification') 
                    : (isBn ? 'স্ক্রিনে নোটিফিকেশন হিসেবে দেখান' : 'Show as floating notification')}
                >
                  {showNotification ? (
                    <Bell className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <BellOff className="w-3.5 h-3.5 text-slate-500" />
                  )}
                  <span>
                    {showNotification 
                      ? (isBn ? 'নোটিফিকেশন সক্রিয়' : 'Notification On') 
                      : (isBn ? 'নোটিফিকেশন বন্ধ' : 'Notification Off')}
                  </span>
                </button>
              </div>
            </div>

            {/* Tip Body */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0 mt-0.5">
                  {renderTipIcon(currentTip.iconName, 'w-5 h-5 text-emerald-400')}
                </div>
                
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {isBn ? currentTip.titleBn : currentTip.titleEn}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {isBn ? currentTip.tipBn : currentTip.tipEn}
                  </p>
                </div>
              </div>

              {/* Concrete Takeaway / Action Callout */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="font-semibold text-emerald-400 shrink-0">
                    {isBn ? '👉 সুরক্ষা অভ্যাস:' : '👉 Actionable Habit:'}
                  </span>
                  <span className="leading-snug">
                    {isBn ? currentTip.actionBn : currentTip.actionEn}
                  </span>
                </div>

                <a
                  href={currentTip.moduleAnchor}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold whitespace-nowrap transition-colors shrink-0"
                >
                  <span>{isBn ? 'সম্পর্কিত মডিউল দেখুন' : 'Explore Module'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. Small Non-Intrusive Floating Notification Toast */}
      {(variant === 'notification' || variant === 'both') && isLoaded && showNotification && (
        <div className="fixed bottom-5 left-5 z-40 max-w-xs sm:max-w-sm w-[calc(100vw-2.5rem)] pointer-events-auto">
          <AnimatePresence mode="wait">
            {isMinimized ? (
              /* Minimized Floating Pill Button */
              <motion.button
                key="minimized-tip"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={() => setIsMinimized(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/95 border border-amber-500/40 hover:border-amber-400 text-white shadow-2xl backdrop-blur-md hover:scale-105 transition-all text-xs font-semibold group"
                title={isBn ? 'সাইবার টিপ প্রসারিত করুন' : 'Expand Cyber Tip of the Day'}
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping absolute" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span className="truncate max-w-[160px]">
                  {isBn ? currentTip.titleBn : currentTip.titleEn}
                </span>
              </motion.button>
            ) : (
              /* Expanded Non-Intrusive Notification Card */
              <motion.div
                key="expanded-tip"
                initial={{ y: 30, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 30, opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl shadow-slate-950/80 backdrop-blur-md p-4 relative overflow-hidden"
              >
                {/* Subtle Amber Glow */}
                <div 
                  aria-hidden="true" 
                  className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/15 rounded-full blur-xl pointer-events-none" 
                />

                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-3 h-3" />
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-amber-400 truncate">
                      {isBn ? 'আজকের সাইবার টিপ' : 'DAILY SECURITY TIP'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {/* Next Random Tip */}
                    <button
                      onClick={handleNextTip}
                      className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title={isBn ? 'অন্য টিপ দেখুন' : 'Next tip'}
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                    </button>

                    {/* Minimize */}
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs font-mono"
                      title={isBn ? 'সংকুচিত করুন' : 'Minimize'}
                    >
                      _
                    </button>

                    {/* Close / Dismiss */}
                    <button
                      onClick={() => toggleNotification(false)}
                      className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      title={isBn ? 'নোটিফিকেশন বন্ধ করুন' : 'Hide notification'}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tip Content */}
                <div className="pt-2.5 space-y-2">
                  <h5 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {isBn ? currentTip.titleBn : currentTip.titleEn}
                  </h5>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {isBn ? currentTip.tipBn : currentTip.tipEn}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate pr-2 text-emerald-400">
                      {isBn ? currentTip.actionBn : currentTip.actionEn}
                    </span>

                    <a
                      href={currentTip.moduleAnchor}
                      className="text-cyan-400 hover:text-cyan-300 font-medium shrink-0 flex items-center gap-0.5"
                    >
                      <span>{isBn ? 'মডিউল' : 'Study'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
