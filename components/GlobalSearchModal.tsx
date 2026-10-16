'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  ArrowRight, 
  CornerDownLeft, 
  Command, 
  Clock, 
  Sparkles, 
  Shield, 
  Compass, 
  AlertTriangle, 
  Cpu, 
  Key, 
  Lock, 
  Smartphone, 
  EyeOff, 
  Wifi, 
  CreditCard, 
  ShoppingBag, 
  Briefcase, 
  UserCheck, 
  Bug, 
  Award, 
  PhoneCall, 
  ClipboardCheck, 
  Trophy, 
  Medal, 
  ExternalLink,
  BookOpen,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  searchCyberCampaign, 
  getRecentSearches, 
  saveRecentSearch, 
  clearRecentSearches,
  SearchItem,
  SearchResult
} from '@/lib/cyberSearch';

// Icon resolver for dynamic search item representation
function renderSearchIcon(name: string, className = 'w-4 h-4') {
  switch (name) {
    case 'Shield': return <Shield className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'AlertTriangle': return <AlertTriangle className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Fish': return <AlertTriangle className={className} />; // Fish fallback
    case 'Key': return <Key className={className} />;
    case 'Lock': return <Lock className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'EyeOff': return <EyeOff className={className} />;
    case 'Wifi': return <Wifi className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'Bug': return <Bug className={className} />;
    case 'Award': return <Award className={className} />;
    case 'PhoneCall': return <PhoneCall className={className} />;
    case 'ClipboardCheck': return <ClipboardCheck className={className} />;
    case 'Trophy': return <Trophy className={className} />;
    case 'Medal': return <Medal className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    default: return <BookOpen className={className} />;
  }
}

// Substring match highlight helper
function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <mark 
            key={i} 
            className="bg-emerald-500/30 text-emerald-300 font-semibold rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default function GlobalSearchModal() {
  const { isBn } = useLanguage();
  const { 
    isSearchOpen, 
    setIsSearchOpen,
    setIsCertificateModalOpen,
    setIsLeaderboardModalOpen,
    setIsHygieneModalOpen,
    setIsBadgesModalOpen
  } = useProgress();

  const [query, setQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'module' | 'term' | 'action'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentQueries, setRecentQueries] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Load recent searches on mount or when modal opens
  useEffect(() => {
    if (isSearchOpen) {
      setRecentQueries(getRecentSearches());
      setSelectedIndex(0);
      // Autofocus input
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    }
  }, [isSearchOpen]);

  // Global Keyboard shortcut listener (Cmd+K / Ctrl+K / /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if user is typing in another input/textarea
      const target = e.target as HTMLElement;
      const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      // Cmd+K or Ctrl+K triggers search from anywhere
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      // Single forward slash '/' when not already in an input
      if (e.key === '/' && !isInput && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      // Close on Escape
      if (e.key === 'Escape' && isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Execute Search query
  const searchResults: SearchResult[] = useMemo(() => {
    return searchCyberCampaign(query, filterCategory);
  }, [query, filterCategory]);

  // Reset selected index when query or filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, filterCategory]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  // Execute selection
  const handleSelectItem = useCallback((item: SearchItem) => {
    if (query.trim()) {
      saveRecentSearch(query.trim());
      setRecentQueries(getRecentSearches());
    }

    setIsSearchOpen(false);

    // Handle interactive modal triggers
    if (item.action === 'open-certificate') {
      setIsCertificateModalOpen(true);
      return;
    }
    if (item.action === 'open-leaderboard') {
      setIsLeaderboardModalOpen(true);
      return;
    }
    if (item.action === 'open-hygiene') {
      setIsHygieneModalOpen(true);
      return;
    }
    if (item.action === 'open-badges') {
      setIsBadgesModalOpen(true);
      return;
    }

    // Handle scroll to anchor
    if (item.anchor) {
      setTimeout(() => {
        const el = document.querySelector(item.anchor as string);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.hash = item.anchor as string;
        }
      }, 100);
    }
  }, [
    query, 
    setIsSearchOpen, 
    setIsCertificateModalOpen, 
    setIsLeaderboardModalOpen, 
    setIsHygieneModalOpen, 
    setIsBadgesModalOpen
  ]);

  // Keyboard navigation within the modal
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (searchResults.length > 0 ? (prev + 1) % searchResults.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (searchResults.length > 0 ? (prev - 1 + searchResults.length) % searchResults.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults[selectedIndex]) {
        handleSelectItem(searchResults[selectedIndex].item);
      }
    }
  };

  const handleClearHistory = () => {
    clearRecentSearches();
    setRecentQueries([]);
  };

  const handleRecentClick = (q: string) => {
    setQuery(q);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={isBn ? 'গ্লোবাল সাইবার সার্চ' : 'Global Cyber Search'}
        >
          {/* Backdrop with smooth blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -16 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-slate-900/95 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-emerald-950/40 backdrop-blur-xl overflow-hidden flex flex-col max-h-[85vh] z-10"
          >
            {/* Header: Search Input Bar */}
            <div className="relative flex items-center px-4 sm:px-5 py-4 border-b border-slate-800 bg-slate-950/40">
              <Search className="w-5 h-5 text-emerald-400 shrink-0 mr-3" />
              
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={
                  isBn 
                    ? 'মডিউল, সাইবার পরিভাষা বা টুল খুঁজুন... (উদাঃ বিকাশ পিন, 2FA, ফিশিং)' 
                    : 'Search modules, cyber terms, or tools... (e.g. bKash PIN, 2FA, Phishing)'
                }
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base outline-none pr-8"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors mr-2"
                  title="Clear input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-colors shrink-0"
              >
                <span>ESC</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto no-scrollbar text-xs">
              <span className="text-slate-400 font-medium mr-1 flex items-center gap-1 shrink-0">
                <SlidersHorizontal className="w-3 h-3 text-emerald-400" />
                <span>{isBn ? 'ফিল্টার:' : 'Filter:'}</span>
              </span>

              <button
                type="button"
                onClick={() => setFilterCategory('all')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 ${
                  filterCategory === 'all'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                {isBn ? 'সকল বিষয়' : 'All Topics'}
              </button>

              <button
                type="button"
                onClick={() => setFilterCategory('module')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 ${
                  filterCategory === 'module'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <BookOpen className="w-3 h-3" />
                <span>{isBn ? 'মডিউলসমূহ (১৫টি)' : 'Modules (15)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setFilterCategory('term')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 ${
                  filterCategory === 'term'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <Shield className="w-3 h-3" />
                <span>{isBn ? 'পরিভাষা ও ঝুঁকি' : 'Terms & Threats'}</span>
              </button>

              <button
                type="button"
                onClick={() => setFilterCategory('action')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 ${
                  filterCategory === 'action'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>{isBn ? 'টুল ও অ্যাকশন' : 'Tools & Actions'}</span>
              </button>
            </div>

            {/* Results or Suggestions List */}
            <div 
              ref={listRef}
              className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1 divide-y divide-slate-800/40"
            >
              {/* If Query is Empty: Show Recent Searches & Trending Quick Links */}
              {!query.trim() && (
                <div className="p-2 space-y-4">
                  {recentQueries.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold px-2">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{isBn ? 'সাম্প্রতিক সার্চ' : 'Recent Searches'}</span>
                        </span>
                        <button
                          type="button"
                          onClick={handleClearHistory}
                          className="text-slate-400 hover:text-rose-400 transition-colors text-[10px]"
                        >
                          {isBn ? 'মুছে ফেলুন' : 'Clear'}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5 px-1">
                        {recentQueries.map((rq, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleRecentClick(rq)}
                            className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/80 hover:bg-emerald-950/60 border border-slate-700/60 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-300 transition-all flex items-center gap-1.5"
                          >
                            <Search className="w-2.5 h-2.5 text-slate-400" />
                            <span>{rq}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Topics Section */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] text-slate-400 font-semibold px-2 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{isBn ? 'জনপ্রিয় সাইবার বিষয়সমূহ' : 'Popular Cyber Topics'}</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { labelEn: 'bKash/Nagad PIN', labelBn: 'বিকাশ/নগদ পিন', q: 'bKash PIN' },
                        { labelEn: '2FA Setup', labelBn: 'টু-ফ্যাক্টর সুরক্ষা', q: '2FA' },
                        { labelEn: 'Phishing Links', labelBn: 'ফিশিং লিংক', q: 'Phishing' },
                        { labelEn: 'Deepfake & AI', labelBn: 'ডিপফেক ও এআই', q: 'Deepfake' },
                        { labelEn: 'Emergency 999', labelBn: 'জরুরি হেল্পলাইন ৯৯৯', q: '999' },
                        { labelEn: 'Screen Pinning', labelBn: 'স্ক্রিন পিনিং', q: 'Screen Pinning' }
                      ].map((pop, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handleRecentClick(pop.q)}
                          className="p-2 text-left rounded-xl bg-slate-950/40 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                        >
                          <span className="text-xs font-medium text-slate-300 group-hover:text-emerald-300 block">
                            {isBn ? pop.labelBn : pop.labelEn}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {pop.q}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Search Results Display */}
              {searchResults.length > 0 ? (
                searchResults.map(({ item }, index) => {
                  const isSelected = index === selectedIndex;
                  const itemTitle = isBn ? item.titleBn : item.titleEn;
                  const itemSubtitle = isBn ? item.subtitleBn : item.subtitleEn;
                  const badgeText = isBn ? (item.badgeTextBn || item.categoryLabelBn) : (item.badgeTextEn || item.categoryLabelEn);

                  return (
                    <div
                      key={item.id}
                      data-index={index}
                      onClick={() => handleSelectItem(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`group p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 relative ${
                        isSelected 
                          ? 'bg-emerald-950/40 border border-emerald-500/40 shadow-sm shadow-emerald-950/20' 
                          : 'hover:bg-slate-800/40 border border-transparent'
                      }`}
                    >
                      {/* Left Category Icon */}
                      <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                        item.type === 'module' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : item.type === 'term'
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {renderSearchIcon(item.iconName, 'w-4 h-4')}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            <HighlightedText text={itemTitle} query={query} />
                          </span>

                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                            item.type === 'module'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : item.type === 'term'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {badgeText}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          <HighlightedText text={itemSubtitle} query={query} />
                        </p>
                      </div>

                      {/* Right Selection Arrow / Enter Action Key */}
                      <div className="shrink-0 pt-1">
                        {isSelected ? (
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] text-emerald-300 font-mono">
                            <span>ENTER</span>
                            <CornerDownLeft className="w-2.5 h-2.5" />
                          </div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                        )}
                      </div>
                    </div>
                  );
                })
              ) : query.trim() ? (
                /* No Results State */
                <div className="p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center mx-auto text-slate-400">
                    <Search className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isBn ? `"${query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি` : `No matches found for "${query}"`}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      {isBn 
                        ? 'বানান পরীক্ষা করুন বা অন্য কোনো মূল শব্দ দিয়ে চেষ্টা করুন (যেমন: ফিশিং, পাসওয়ার্ড, বিকাশ, 2FA, ৯৯৯)।'
                        : 'Try searching with different terms like Phishing, Passwords, bKash PIN, 2FA, or 999.'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <span>{isBn ? 'সার্চ রিসেট করুন' : 'Reset Search'}</span>
                  </button>
                </div>
              ) : null}
            </div>

            {/* Modal Footer / Navigation Legend */}
            <div className="px-4 sm:px-5 py-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">↓</kbd>
                  <span>{isBn ? 'নেভিগেট' : 'Navigate'}</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">↵</kbd>
                  <span>{isBn ? 'নির্বাচন' : 'Select'}</span>
                </span>
                <span className="hidden sm:flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">ESC</kbd>
                  <span>{isBn ? 'বন্ধ' : 'Close'}</span>
                </span>
              </div>

              <div className="text-[11px] font-mono text-emerald-400">
                {searchResults.length > 0 && (
                  <span>
                    {isBn ? `${searchResults.length}টি ফলাফল` : `${searchResults.length} results`}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
