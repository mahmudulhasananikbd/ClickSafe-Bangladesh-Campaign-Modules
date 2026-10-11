'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Search, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  UserCheck, 
  RotateCcw, 
  ChevronRight, 
  TrendingUp, 
  Share2, 
  Filter,
  Flame,
  Star,
  Zap,
  Edit3,
  Check
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  LeaderboardEntry, 
  INITIAL_LEADERBOARD_DATA,
  getStoredLeaderboard, 
  syncCurrentUserToLeaderboard, 
  resetLeaderboardStore 
} from '@/lib/leaderboardStore';

interface LeaderboardProps {
  isModalView?: boolean;
  onCloseModal?: () => void;
}

export default function Leaderboard({ isModalView = false, onCloseModal }: LeaderboardProps) {
  const { 
    completedCount, 
    totalCount, 
    isAllModulesCompleted, 
    userName, 
    setUserName, 
    unlockedBadgeIds,
    setIsCertificateModalOpen,
    completeAllModulesDemo,
    resumeJourney
  } = useProgress();
  
  const { isBn } = useLanguage();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'university' | 'college' | 'professional'>('all');
  const [sortBy, setSortBy] = useState<'rank' | 'time' | 'badges'>('rank');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userInstitution, setUserInstitution] = useState('ঢাকা বিশ্ববিদ্যালয় / BUET');
  const [userDivision, setUserDivision] = useState('ঢাকা (Dhaka)');
  const [customNameInput, setCustomNameInput] = useState(userName || 'সাইবার চ্যাম্পিয়ন');
  const [copiedShare, setCopiedShare] = useState(false);

  // Initialize with static default data to guarantee SSR and client hydration tree match
  const [entries, setEntries] = useState<LeaderboardEntry[]>(INITIAL_LEADERBOARD_DATA);

  // Sync entries from store on dependency update using timer
  useEffect(() => {
    const timer = setTimeout(() => {
      let list = getStoredLeaderboard();
      if (isAllModulesCompleted) {
        list = syncCurrentUserToLeaderboard(
          userName, 
          unlockedBadgeIds.length, 
          userInstitution, 
          userDivision
        );
      }
      setEntries(list);
    }, 0);
    return () => clearTimeout(timer);
  }, [isAllModulesCompleted, userName, unlockedBadgeIds.length, userInstitution, userDivision]);

  // Save profile updates
  const handleSaveProfile = () => {
    if (customNameInput.trim()) {
      setUserName(customNameInput.trim());
    }
    setIsEditingProfile(false);
    let list = syncCurrentUserToLeaderboard(
      customNameInput.trim() || userName,
      unlockedBadgeIds.length,
      userInstitution,
      userDivision
    );
    setEntries(list);
  };

  // Reset store
  const handleResetData = () => {
    const defaultData = resetLeaderboardStore();
    if (isAllModulesCompleted) {
      const synced = syncCurrentUserToLeaderboard(
        userName,
        unlockedBadgeIds.length,
        userInstitution,
        userDivision
      );
      setEntries(synced);
    } else {
      setEntries(defaultData);
    }
  };

  // Filtered & sorted entries
  const displayedEntries = useMemo(() => {
    let result = entries.filter((entry) => {
      const matchesSearch = 
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.division.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = 
        selectedCategory === 'all' || entry.category === selectedCategory;

      return matchesSearch && matchesCat;
    });

    if (sortBy === 'time') {
      result.sort((a, b) => a.completionTimeMinutes - b.completionTimeMinutes);
    } else if (sortBy === 'badges') {
      result.sort((a, b) => b.badgesCount - a.badgesCount);
    } else {
      result.sort((a, b) => a.rank - b.rank);
    }

    return result;
  }, [entries, searchTerm, selectedCategory, sortBy]);

  // User entry if exists
  const currentUserEntry = useMemo(() => {
    return entries.find(e => e.isCurrentUser);
  }, [entries]);

  // Share position
  const handleSharePosition = () => {
    const text = isBn
      ? `🏆 আমি ClickSafe বাংলাদেশ-এর ১৩টি সাইবার নিরাপত্তা মডিউল সফলভাবে সম্পন্ন করে জাতীয় চ্যাম্পিয়ন লিডারবোর্ডে অবস্থান অর্জন করেছি! আপনিও শুরু করুন: ${window.location.origin}`
      : `🏆 I completed all 13 ClickSafe cybersecurity modules and ranked on the National Champions Leaderboard! Join the defense: ${window.location.origin}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2500);
      });
    }
  };

  return (
    <div className={`w-full ${isModalView ? 'p-2 sm:p-4' : 'py-12 sm:py-16'}`}>
      <div className={`${isModalView ? 'max-w-5xl mx-auto' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{isBn ? 'জাতীয় হল অব ফেম ২০২৬' : 'National Hall of Fame 2026'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {isBn ? '১৩ মডিউল সম্পন্নকারী শীর্ষ চ্যাম্পিয়নদের লিডারবোর্ড' : 'Global 13-Module Cybersecurity Champions'}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            {isBn 
              ? 'যাঁরা প্রতিটি সাইবার প্রতিরক্ষা পরীক্ষা ও ডিজিটাল শপথ সফলভাবে সম্পন্ন করে বাংলাদেশ হিউম্যান ফায়ারওয়াল সার্টিফিকেট অর্জন করেছেন।'
              : 'Defenders nationwide who successfully completed all 13 defense modules, passed live incident drills, and earned the Human Firewall certificate.'}
          </p>
        </div>

        {/* Global Stats Overview Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 mx-auto mb-2">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">১,৪২৮+</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">
              {isBn ? 'সার্টিফাইড চ্যাম্পিয়ন' : 'Certified Champions'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 mx-auto mb-2">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">১৩ / ১৩</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">
              {isBn ? 'সম্পূর্ণ মডিউল সম্পন্ন' : 'All Modules Completed'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 mx-auto mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono">৬৪ / ৬৪</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">
              {isBn ? 'জেলা অংশগ্রহণকারী' : 'Districts Represented'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 mx-auto mb-2">
              <Flame className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono">৫৮ মিনিট</div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">
              {isBn ? 'গড় সমাপ্তির সময়' : 'Avg Completion Speed'}
            </div>
          </div>
        </div>

        {/* Current User Qualification Card */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 relative overflow-hidden shadow-lg">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -top-8 w-44 h-44 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          {isAllModulesCompleted ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-emerald-500 to-teal-400 p-0.5 shadow-md flex-shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-amber-300 text-lg">
                    #{currentUserEntry ? currentUserEntry.rank : 4}
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{isBn ? 'আপনি একজন ভেরিফাইড চ্যাম্পিয়ন!' : 'You Are A Verified Champion!'}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>{userName}</span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400 inline" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>{userInstitution}</span>
                    <span className="text-slate-600">•</span>
                    <span>{userDivision}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-amber-400 font-mono font-semibold">{unlockedBadgeIds.length} {isBn ? 'মেডেল' : 'Badges'}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 self-stretch md:self-auto shrink-0">
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditingProfile ? (isBn ? 'বাতিল' : 'Cancel') : (isBn ? 'প্রোফাইল পরিবর্তন' : 'Edit Profile')}</span>
                </button>

                <button
                  onClick={handleSharePosition}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedShare ? (isBn ? 'কপি হয়েছে!' : 'Copied!') : (isBn ? 'র‌্যাংক শেয়ার' : 'Share Rank')}</span>
                </button>

                <button
                  onClick={() => setIsCertificateModalOpen(true)}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                >
                  <Award className="w-4 h-4 text-slate-950" />
                  <span>{isBn ? 'সনদপত্র ডাউনলোড' : 'Download Certificate'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-1.5">
                  <Flame className="w-3 h-3 text-amber-400" />
                  <span>{isBn ? 'লিডারবোর্ড যোগ্যতা অর্জন করুন' : 'Unlock Leaderboard Standing'}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {isBn 
                    ? `আপনি ১৩টির মধ্যে ${completedCount}টি মডিউল সম্পন্ন করেছেন` 
                    : `You have completed ${completedCount} of 13 defense modules`}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isBn 
                    ? `জাতীয় চ্যাম্পিয়ন লিডারবোর্ডে নিজের নাম তুলতে আরও ${totalCount - completedCount}টি মডিউল শেষ করুন এবং ডিজিটাল সনদপত্র অর্জন করুন!` 
                    : `Complete ${totalCount - completedCount} remaining modules to secure your official rank on the National Cybersecurity Champions Leaderboard.`}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-800/80 rounded-full h-2.5 mt-3 overflow-hidden border border-slate-700/60 max-w-md">
                  <div 
                    className="bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${Math.round((completedCount / totalCount) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-stretch md:self-auto">
                <button
                  onClick={() => resumeJourney()}
                  className="px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-slate-950" />
                  <span>{isBn ? 'পরবর্তী মডিউল চালিয়ে যান' : 'Continue Next Module'}</span>
                </button>

                <button
                  onClick={() => {
                    completeAllModulesDemo();
                    const synced = syncCurrentUserToLeaderboard(
                      userName,
                      14,
                      userInstitution,
                      userDivision
                    );
                    setEntries(synced);
                  }}
                  className="px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-500/40 transition-all flex items-center gap-1.5"
                  title={isBn ? 'পরীক্ষার সুবিধার জন্য তাৎক্ষণিক ১৩ মডিউল সম্পন্ন করুন' : 'Fast-track test unlock: finish all 13 modules instantly'}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isBn ? 'ডেমো: সব আনলক' : 'Quick Demo Unlock'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Inline Profile Edit Drawer */}
          <AnimatePresence>
            {isEditingProfile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-5 pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5"
              >
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    {isBn ? 'আপনার নাম' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    value={customNameInput}
                    onChange={(e) => setCustomNameInput(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-750 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="তানভীর আহমেদ / Tanvir Ahmed"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    {isBn ? 'প্রতিষ্ঠান / ক্যাম্পাস / কর্মস্থল' : 'Institution / Campus'}
                  </label>
                  <input
                    type="text"
                    value={userInstitution}
                    onChange={(e) => setUserInstitution(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-750 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="ঢাকা বিশ্ববিদ্যালয় / BUET"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    {isBn ? 'বিভাগ / জেলা' : 'Division / District'}
                  </label>
                  <select
                    value={userDivision}
                    onChange={(e) => setUserDivision(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-750 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="ঢাকা (Dhaka)">ঢাকা (Dhaka)</option>
                    <option value="চট্টগ্রাম (Chittagong)">চট্টগ্রাম (Chittagong)</option>
                    <option value="রাজশাহী (Rajshahi)">রাজশাহী (Rajshahi)</option>
                    <option value="সিলেট (Sylhet)">সিলেট (Sylhet)</option>
                    <option value="খুলনা (Khulna)">খুলনা (Khulna)</option>
                    <option value="বরিশাল (Barisal)">বরিশাল (Barisal)</option>
                    <option value="রংপুর (Rangpur)">রংপুর (Rangpur)</option>
                    <option value="ময়মনসিংহ (Mymensingh)">ময়মনসিংহ (Mymensingh)</option>
                  </select>
                </div>

                <div className="sm:col-span-3 flex justify-end gap-2 mt-1">
                  <button
                    onClick={handleSaveProfile}
                    className="px-4 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5 shadow"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isBn ? 'সংরক্ষণ করুন' : 'Save Profile'}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Podium Top 3 Section */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <Medal className="w-4 h-4 text-amber-400" />
            <span>{isBn ? 'শীর্ষ ৩ জাতীয় চ্যাম্পিয়ন' : 'Top 3 National Podium'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {entries.slice(0, 3).map((champion, idx) => {
              const medalColors = [
                {
                  rankBg: 'bg-amber-400 text-slate-950 border-amber-300 ring-4 ring-amber-400/20',
                  cardBorder: 'border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950',
                  badge: isBn ? 'স্বর্ণ পদক' : 'Gold Medal',
                  icon: Trophy,
                  textColor: 'text-amber-400'
                },
                {
                  rankBg: 'bg-slate-300 text-slate-950 border-slate-200 ring-4 ring-slate-300/20',
                  cardBorder: 'border-slate-400/40 bg-gradient-to-b from-slate-400/10 via-slate-900 to-slate-950',
                  badge: isBn ? 'রৌপ্য পদক' : 'Silver Medal',
                  icon: Medal,
                  textColor: 'text-slate-300'
                },
                {
                  rankBg: 'bg-amber-700 text-amber-100 border-amber-600 ring-4 ring-amber-700/20',
                  cardBorder: 'border-amber-700/40 bg-gradient-to-b from-amber-700/10 via-slate-900 to-slate-950',
                  badge: isBn ? 'ব্রোঞ্জ পদক' : 'Bronze Medal',
                  icon: Medal,
                  textColor: 'text-amber-600'
                }
              ][idx];

              const IconComponent = medalColors.icon;

              return (
                <div
                  key={champion.id}
                  className={`p-5 rounded-2xl border ${medalColors.cardBorder} relative flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-current ${medalColors.textColor} flex items-center gap-1`}>
                        <IconComponent className="w-3 h-3" />
                        <span>{medalColors.badge}</span>
                      </span>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${medalColors.rankBg}`}>
                        #{champion.rank}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${champion.avatarColor} text-white font-black flex items-center justify-center text-sm shadow`}>
                        {champion.avatar}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-bold text-white text-base truncate flex items-center gap-1.5">
                          <span>{champion.name}</span>
                        </h4>
                        <p className="text-xs text-slate-300 truncate flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{champion.institution}</span>
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 px-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-3">
                      <div>
                        <span className="text-slate-400 block text-[10px]">{isBn ? 'সম্পন্ন মডিউল' : 'Modules'}</span>
                        <span className="font-bold text-emerald-400 font-mono">13 / 13 ✓</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">{isBn ? 'গতি' : 'Speed'}</span>
                        <span className="font-bold text-slate-200 font-mono">{champion.completionTimeMinutes} min</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{champion.division}</span>
                    </span>
                    <span className="font-mono text-amber-400 font-semibold">
                      {champion.badgesCount} {isBn ? 'মেডেল' : 'medals'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-6 flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm">
          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isBn ? 'নাম বা প্রতিষ্ঠান দিয়ে খুঁজুন...' : 'Search by name or institution...'}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {(
              [
                { id: 'all', labelBn: 'সকল চ্যাম্পিয়ন', labelEn: 'All Champions' },
                { id: 'university', labelBn: 'বিশ্ববিদ্যালয়', labelEn: 'Universities' },
                { id: 'college', labelBn: 'কলেজ', labelEn: 'Colleges' },
                { id: 'professional', labelBn: 'পেশাজীবী', labelEn: 'Professionals' }
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {isBn ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Sort & Reset */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="rank">{isBn ? 'র‌্যাংক অনুযায়ী' : 'Sort by Rank'}</option>
              <option value="badges">{isBn ? 'মেডেল সংখ্যা' : 'Sort by Badges'}</option>
              <option value="time">{isBn ? 'সমাপ্তির সময়' : 'Sort by Speed'}</option>
            </select>

            <button
              onClick={handleResetData}
              className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800"
              title={isBn ? 'সিমুলেটেড ডেটা রিসেট করুন' : 'Reset Simulated Store'}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Leaderboard Table / Cards List */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-lg">
          <div className="divide-y divide-slate-800/80">
            {displayedEntries.map((entry) => {
              const isUser = entry.isCurrentUser;
              return (
                <div
                  key={entry.id}
                  className={`p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 transition-colors ${
                    isUser
                      ? 'bg-gradient-to-r from-emerald-950/40 via-amber-950/20 to-slate-900 border-l-4 border-l-amber-400 ring-1 ring-amber-400/20'
                      : 'hover:bg-slate-850/50'
                  }`}
                >
                  {/* Left: Rank & Champion Info */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    {/* Rank indicator */}
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-sm shrink-0">
                      {entry.rank === 1 ? (
                        <span className="text-amber-400 text-base">🥇</span>
                      ) : entry.rank === 2 ? (
                        <span className="text-slate-300 text-base">🥈</span>
                      ) : entry.rank === 3 ? (
                        <span className="text-amber-600 text-base">🥉</span>
                      ) : (
                        <span className={`text-xs font-bold ${isUser ? 'text-amber-400' : 'text-slate-400'}`}>
                          #{entry.rank}
                        </span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${entry.avatarColor} text-white font-bold flex items-center justify-center text-xs shrink-0 shadow`}>
                      {entry.avatar}
                    </div>

                    {/* Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`font-bold text-sm ${isUser ? 'text-amber-300' : 'text-white'} truncate`}>
                          {entry.name}
                        </span>
                        {isUser && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 uppercase tracking-wider">
                            {isBn ? 'আপনি (YOU)' : 'YOU'}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>13/13</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5 flex-wrap">
                        <span className="truncate max-w-[200px] sm:max-w-xs">{entry.institution}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-[11px] flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {entry.division}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Badges, Speed, Certificate Action */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-mono font-bold text-amber-400 flex items-center sm:justify-end gap-1">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        <span>{entry.badgesCount} {isBn ? 'মেডেল' : 'Badges'}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center sm:justify-end gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{entry.completionTimeMinutes} min</span>
                      </div>
                    </div>

                    {isUser ? (
                      <button
                        onClick={() => setIsCertificateModalOpen(true)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center gap-1 shadow transition-all active:scale-95"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{isBn ? 'আমার সনদ' : 'My Certificate'}</span>
                      </button>
                    ) : (
                      <div className="text-[11px] text-slate-300 font-mono px-2 py-1 rounded bg-slate-950 border border-slate-800">
                        {entry.completedAt}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {displayedEntries.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">
                {isBn 
                  ? 'কোনো চ্যাম্পিয়নের তথ্য মেলেনি। অন্য অনুসন্ধান শব্দ দিয়ে চেষ্টা করুন।' 
                  : 'No champions found matching your criteria. Try another search.'}
              </div>
            )}
          </div>
        </div>

        {/* Bottom verification badge note */}
        <div className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            {isBn 
              ? 'ClickSafe বাংলাদেশ ভেরিফাইড সিমুলেশন ডাটাবেজ • ১৩টি মডিউল সম্পন্নকারীদের নাম অবিলম্বে অন্তর্ভুক্ত হয়'
              : 'ClickSafe Bangladesh Verified Simulation Store • Completing 13 modules instantly registers your standing'}
          </span>
        </div>

      </div>
    </div>
  );
}
