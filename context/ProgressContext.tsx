'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { BADGES_LIST, BadgeDefinition } from '@/lib/badges';

export { BADGES_LIST };
export type { BadgeDefinition };

export interface ModuleData {
  id: string;             // unique id, e.g. 'm0', 'm1', ...
  sectionId: string;      // DOM element id, e.g. 'module-0', 'pledge'
  anchor: string;         // e.g. '#module-0'
  numberEn: string;
  numberBn: string;
  titleEn: string;
  titleBn: string;
  category: 'core' | 'risk' | 'action' | 'participate';
  summaryEn: string;
  summaryBn: string;
}

export const MODULE_LIST: ModuleData[] = [
  {
    id: 'm0',
    sectionId: 'module-0',
    anchor: '#module-0',
    numberEn: '0',
    numberBn: '০',
    titleEn: 'Welcome & Preparation',
    titleBn: 'স্বাগতম ও প্রস্তুতি',
    category: 'core',
    summaryEn: 'Human Firewall intro & the crucial first 30 seconds',
    summaryBn: 'Human Firewall পরিচিতি ও প্রথম ৩০ সেকেন্ড'
  },
  {
    id: 'm1',
    sectionId: 'module-1',
    anchor: '#module-1',
    numberEn: '1',
    numberBn: '১',
    titleEn: 'Why You Are a Target',
    titleBn: 'কেন আপনি লক্ষ্য',
    category: 'core',
    summaryEn: 'Digital treasure map & 3 quick phone security tests',
    summaryBn: 'ফোনের ট্রেজার ম্যাপ ও ৩টি দ্রুত পরীক্ষা'
  },
  {
    id: 'm2',
    sectionId: 'module-2',
    anchor: '#module-2',
    numberEn: '2',
    numberBn: '২',
    titleEn: 'Psychological Traps',
    titleBn: 'প্রতারকের কৌশল',
    category: 'risk',
    summaryEn: '6 emotional traps & the 6-stage fraud cycle',
    summaryBn: '৬টি হিউম্যান সাইকোলজি ফাঁদ ও প্রতারণার চক্র'
  },
  {
    id: 'm3a',
    sectionId: 'module-3a',
    anchor: '#module-3a',
    numberEn: '3A',
    numberBn: '৩ক',
    titleEn: 'Local Scam Hotspots',
    titleBn: 'স্থানীয় প্রতারণা',
    category: 'risk',
    summaryEn: '6 local scam hotspots in Bangladesh & verification signals',
    summaryBn: 'বাংলাদেশে ৬টি স্ক্যাম হটস্পট ও যাচাই সংকেত'
  },
  {
    id: 'm3',
    sectionId: 'module-3',
    anchor: '#module-3',
    numberEn: '3',
    numberBn: '৩',
    titleEn: 'Phishing & Fake Links',
    titleBn: 'ফিশিং ও ভুয়া লিংক',
    category: 'risk',
    summaryEn: '3-question decision tree & VirusTotal URL analysis',
    summaryBn: '৩টি প্রশ্নের ডিসিশন ট্রি ও VirusTotal'
  },
  {
    id: 'm4',
    sectionId: 'module-4',
    anchor: '#module-4',
    numberEn: '4',
    numberBn: '৪',
    titleEn: 'Passwords & 2FA',
    titleBn: 'পাসওয়ার্ড ও 2FA',
    category: 'action',
    summaryEn: 'Passphrase vs weak password lab & MFA priority pyramid',
    summaryBn: 'দুর্বল বনাম শক্তিশালী পাসওয়ার্ড ও MFA অগ্রাধিকার'
  },
  {
    id: 'm5',
    sectionId: 'module-5',
    anchor: '#module-5',
    numberEn: '5',
    numberBn: '৫',
    titleEn: 'Social Privacy & Footprint',
    titleBn: 'গোপনীয়তা ও পোস্ট',
    category: 'action',
    summaryEn: 'Vacation posting risks, puzzle pieces & privacy settings',
    summaryBn: 'সাদিয়ার গল্প, ধাঁধার টুকরো ও ৪টি প্রশ্ন'
  },
  {
    id: 'm6',
    sectionId: 'module-6',
    anchor: '#module-6',
    numberEn: '6',
    numberBn: '৬',
    titleEn: 'Malware & Device Safety',
    titleBn: 'ম্যালওয়্যার ও ডিভাইস',
    category: 'action',
    summaryEn: 'Loan app extortion, QR code warnings & permission audit',
    summaryBn: 'লোন অ্যাপ ফাঁদ, QR সংকেত ও Permission Audit'
  },
  {
    id: 'm7',
    sectionId: 'module-7',
    anchor: '#module-7',
    numberEn: '7',
    numberBn: '৭',
    titleEn: 'OTP & Finance Defense',
    titleBn: 'OTP ও ফাইন্যান্স',
    category: 'risk',
    summaryEn: 'Key metaphor, easy money traps & financial defense',
    summaryBn: 'চাবি কাউকে দিলে দরজা থাকে না & ইজি মানি ফাঁদ'
  },
  {
    id: 'm8',
    sectionId: 'module-8',
    anchor: '#module-8',
    numberEn: '8',
    numberBn: '৮',
    titleEn: 'AI & Deepfakes',
    titleBn: 'AI ও ডিপফেক',
    category: 'risk',
    summaryEn: 'AI voice clones, family secret code-words & live test',
    summaryBn: 'নকল কণ্ঠ, পারিবারিক কোড-ওয়ার্ড ও লাইভ টেস্ট'
  },
  {
    id: 'm9',
    sectionId: 'module-9',
    anchor: '#module-9',
    numberEn: '9',
    numberBn: '৯',
    titleEn: 'Cyberbullying Defense',
    titleBn: 'সাইবার বুলিং',
    category: 'action',
    summaryEn: '4-step shield, blackmail defense & circle of support',
    summaryBn: '৪ ধাপের সহায়তা-ঢাল ও সহায়তা-বৃত্ত'
  },
  {
    id: 'm9a',
    sectionId: 'module-9a',
    anchor: '#module-9a',
    numberEn: '7A',
    numberBn: '৭ক',
    titleEn: 'Digital Wellbeing',
    titleBn: 'ডিজিটাল সুস্থতা',
    category: 'participate',
    summaryEn: '24-hour balance bar & adopting 1 daily offline micro-habit',
    summaryBn: '২৪ ঘণ্টা ভারসাম্য ও দিনে একটি ছোট অভ্যাস'
  },
  {
    id: 'm10',
    sectionId: 'module-10',
    anchor: '#module-10',
    numberEn: '10',
    numberBn: '১০',
    titleEn: 'Incident Response',
    titleBn: 'ভুল হলে করণীয়',
    category: 'action',
    summaryEn: '5min-30min-24hr playbook, GD guidelines & evidence log',
    summaryBn: '৫মিনিট-৩০মিনিট-২৪ঘণ্টা ইনসিডেন্ট রেসপন্স'
  },
  {
    id: 'm11',
    sectionId: 'module-11',
    anchor: '#module-11',
    numberEn: '11',
    numberBn: '১১',
    titleEn: 'Personal Security Plan',
    titleBn: 'ব্যক্তিগত পরিকল্পনা',
    category: 'core',
    summaryEn: '3 tangible security goals & STOP-THINK-VERIFY-PROTECT',
    summaryBn: '৩টি সুনির্দিষ্ট কাজ ও STOP-THINK-VERIFY'
  },
  {
    id: 'm12',
    sectionId: 'pledge',
    anchor: '#pledge',
    numberEn: '12',
    numberBn: '১২',
    titleEn: 'Quiz & Digital Pledge',
    titleBn: 'কুইজ ও শপথ',
    category: 'participate',
    summaryEn: 'Real-time 6-question quiz, digital oath & commitment certificate',
    summaryBn: 'রিয়েল-টাইম কুইজ, ডিজিটাল শপথ ও সনদ'
  }
];

const STORAGE_KEY_COMPLETED = 'clicksafe_completed_modules_2026';
const STORAGE_KEY_LAST_VISITED = 'clicksafe_last_visited_2026';
const STORAGE_KEY_LAST_TIMESTAMP = 'clicksafe_last_timestamp_2026';
const STORAGE_KEY_NOTIFIED_BADGES = 'clicksafe_notified_badges_2026';
const STORAGE_KEY_USER_NAME = 'clicksafe_user_name_2026';

export interface UnlockedBadgeNotification {
  badge: BadgeDefinition;
  timestamp: number;
}

interface ProgressContextType {
  modules: ModuleData[];
  completedModules: string[];
  lastVisitedId: string | null;
  lastVisitedTimestamp: number | null;
  lastVisitedModule: ModuleData | null;
  isLoaded: boolean;
  isCompleted: (moduleId: string) => boolean;
  toggleCompleted: (moduleId: string) => void;
  markCompleted: (moduleId: string) => void;
  markIncomplete: (moduleId: string) => void;
  setLastVisited: (moduleId: string) => void;
  resumeJourney: (specificModuleId?: string) => void;
  resetProgress: () => void;
  completedCount: number;
  totalCount: number;
  progressPercentage: number;
  getNextUncompletedModule: () => ModuleData | null;

  // Badges System
  allBadges: BadgeDefinition[];
  unlockedBadgeIds: string[];
  unlockedBadges: BadgeDefinition[];
  isBadgeUnlocked: (badgeId: string) => boolean;
  getBadgeProgress: (badgeId: string) => { current: number; total: number; percentage: number };
  activeBadgeNotification: UnlockedBadgeNotification | null;
  dismissBadgeNotification: () => void;
  isBadgesModalOpen: boolean;
  setIsBadgesModalOpen: (open: boolean) => void;

  // Cybersecurity Champion Certificate
  userName: string;
  setUserName: (name: string) => void;
  isCertificateModalOpen: boolean;
  setIsCertificateModalOpen: (open: boolean) => void;
  isAllModulesCompleted: boolean;
  completeAllModulesDemo: () => void;

  // Leaderboard Modal
  isLeaderboardModalOpen: boolean;
  setIsLeaderboardModalOpen: (open: boolean) => void;
}

const ProgressContext = createContext<ProgressContextType>({
  modules: MODULE_LIST,
  completedModules: [],
  lastVisitedId: null,
  lastVisitedTimestamp: null,
  lastVisitedModule: null,
  isLoaded: false,
  isCompleted: () => false,
  toggleCompleted: () => {},
  markCompleted: () => {},
  markIncomplete: () => {},
  setLastVisited: () => {},
  resumeJourney: () => {},
  resetProgress: () => {},
  completedCount: 0,
  totalCount: MODULE_LIST.length,
  progressPercentage: 0,
  getNextUncompletedModule: () => null,

  allBadges: BADGES_LIST,
  unlockedBadgeIds: [],
  unlockedBadges: [],
  isBadgeUnlocked: () => false,
  getBadgeProgress: () => ({ current: 0, total: 1, percentage: 0 }),
  activeBadgeNotification: null,
  dismissBadgeNotification: () => {},
  isBadgesModalOpen: false,
  setIsBadgesModalOpen: () => {},

  userName: 'সাইবার চ্যাম্পিয়ন',
  setUserName: () => {},
  isCertificateModalOpen: false,
  setIsCertificateModalOpen: () => {},
  isAllModulesCompleted: false,
  completeAllModulesDemo: () => {},

  isLeaderboardModalOpen: false,
  setIsLeaderboardModalOpen: () => {},
});

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [lastVisitedId, setLastVisitedId] = useState<string | null>(null);
  const [lastVisitedTimestamp, setLastVisitedTimestamp] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Badges state
  const [notifiedBadgeIds, setNotifiedBadgeIds] = useState<string[]>([]);
  const [activeBadgeNotification, setActiveBadgeNotification] = useState<UnlockedBadgeNotification | null>(null);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);

  // Cybersecurity Champion Certificate state
  const [userName, setUserNameState] = useState<string>('সাইবার চ্যাম্পিয়ন');
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isLeaderboardModalOpen, setIsLeaderboardModalOpen] = useState(false);

  // Load saved state from localStorage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedCompleted = localStorage.getItem(STORAGE_KEY_COMPLETED);
        if (savedCompleted) {
          const parsed = JSON.parse(savedCompleted);
          if (Array.isArray(parsed)) {
            setCompletedModules(parsed);
          }
        }

        const savedLastVisited = localStorage.getItem(STORAGE_KEY_LAST_VISITED);
        if (savedLastVisited && MODULE_LIST.some(m => m.id === savedLastVisited)) {
          setLastVisitedId(savedLastVisited);
        }

        const savedTimestamp = localStorage.getItem(STORAGE_KEY_LAST_TIMESTAMP);
        if (savedTimestamp) {
          setLastVisitedTimestamp(parseInt(savedTimestamp, 10));
        }

        const savedNotified = localStorage.getItem(STORAGE_KEY_NOTIFIED_BADGES);
        if (savedNotified) {
          const parsedNotified = JSON.parse(savedNotified);
          if (Array.isArray(parsedNotified)) {
            setNotifiedBadgeIds(parsedNotified);
          }
        }

        const savedName = localStorage.getItem(STORAGE_KEY_USER_NAME);
        if (savedName && savedName.trim()) {
          setUserNameState(savedName.trim());
        }
      } catch (e) {
        console.warn('Could not read progress from localStorage', e);
      } finally {
        setIsLoaded(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const setUserName = useCallback((name: string) => {
    setUserNameState(name);
    try {
      localStorage.setItem(STORAGE_KEY_USER_NAME, name);
    } catch (e) {
      console.warn('Could not save user name:', e);
    }
  }, []);

  // Save completed modules to localStorage
  const saveCompleted = useCallback((list: string[]) => {
    try {
      localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(list));
    } catch (e) {
      console.warn('Could not save progress to localStorage', e);
    }
  }, []);

  // Check unlocked badges whenever completedModules change
  const unlockedBadges = useMemo(() => {
    return BADGES_LIST.filter(badge => 
      badge.requiredModuleIds.every(id => completedModules.includes(id))
    );
  }, [completedModules]);

  const unlockedBadgeIds = useMemo(() => {
    return unlockedBadges.map(b => b.id);
  }, [unlockedBadges]);

  const isBadgeUnlocked = useCallback((badgeId: string) => {
    const badge = BADGES_LIST.find(b => b.id === badgeId);
    if (!badge) return false;
    return badge.requiredModuleIds.every(id => completedModules.includes(id));
  }, [completedModules]);

  const getBadgeProgress = useCallback((badgeId: string) => {
    const badge = BADGES_LIST.find(b => b.id === badgeId);
    if (!badge) return { current: 0, total: 1, percentage: 0 };
    const total = badge.requiredModuleIds.length;
    const current = badge.requiredModuleIds.filter(id => completedModules.includes(id)).length;
    const percentage = Math.round((current / total) * 100);
    return { current, total, percentage };
  }, [completedModules]);

  // Handle toast / notification for newly unlocked badges
  const triggerNewBadgeCheck = useCallback((currentCompleted: string[]) => {
    // Determine newly unlocked badges that user hasn't been notified for yet
    const newlyUnlocked = BADGES_LIST.filter(badge => {
      const isMet = badge.requiredModuleIds.every(id => currentCompleted.includes(id));
      return isMet && !notifiedBadgeIds.includes(badge.id);
    });

    if (newlyUnlocked.length > 0) {
      // Pick the most relevant badge to celebrate
      const badgeToCelebrate = newlyUnlocked[0];
      setActiveBadgeNotification({
        badge: badgeToCelebrate,
        timestamp: Date.now(),
      });

      setNotifiedBadgeIds(prev => {
        const updated = Array.from(new Set([...prev, badgeToCelebrate.id]));
        try {
          localStorage.setItem(STORAGE_KEY_NOTIFIED_BADGES, JSON.stringify(updated));
        } catch (e) {
          console.warn('Could not save notified badges', e);
        }
        return updated;
      });
    }
  }, [notifiedBadgeIds]);

  const dismissBadgeNotification = useCallback(() => {
    setActiveBadgeNotification(null);
  }, []);

  // Set last visited module
  const setLastVisited = useCallback((moduleId: string) => {
    if (!MODULE_LIST.some(m => m.id === moduleId)) return;
    const now = Date.now();
    setLastVisitedId(moduleId);
    setLastVisitedTimestamp(now);
    try {
      localStorage.setItem(STORAGE_KEY_LAST_VISITED, moduleId);
      localStorage.setItem(STORAGE_KEY_LAST_TIMESTAMP, now.toString());
    } catch (e) {
      console.warn('Could not save last visited to localStorage', e);
    }
  }, []);

  const isCompleted = useCallback((moduleId: string) => {
    return completedModules.includes(moduleId);
  }, [completedModules]);

  const markCompleted = useCallback((moduleId: string) => {
    setCompletedModules(prev => {
      if (prev.includes(moduleId)) return prev;
      const next = [...prev, moduleId];
      saveCompleted(next);
      triggerNewBadgeCheck(next);
      return next;
    });
  }, [saveCompleted, triggerNewBadgeCheck]);

  const markIncomplete = useCallback((moduleId: string) => {
    setCompletedModules(prev => {
      const next = prev.filter(id => id !== moduleId);
      saveCompleted(next);
      return next;
    });
  }, [saveCompleted]);

  const toggleCompleted = useCallback((moduleId: string) => {
    setCompletedModules(prev => {
      const isAlready = prev.includes(moduleId);
      const next = isAlready
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId];
      saveCompleted(next);
      if (!isAlready) {
        triggerNewBadgeCheck(next);
      }
      return next;
    });
  }, [saveCompleted, triggerNewBadgeCheck]);

  const resetProgress = useCallback(() => {
    setCompletedModules([]);
    setLastVisitedId(null);
    setLastVisitedTimestamp(null);
    setNotifiedBadgeIds([]);
    setActiveBadgeNotification(null);
    try {
      localStorage.removeItem(STORAGE_KEY_COMPLETED);
      localStorage.removeItem(STORAGE_KEY_LAST_VISITED);
      localStorage.removeItem(STORAGE_KEY_LAST_TIMESTAMP);
      localStorage.removeItem(STORAGE_KEY_NOTIFIED_BADGES);
    } catch (e) {
      console.warn('Could not clear progress from localStorage', e);
    }
  }, []);

  const getNextUncompletedModule = useCallback(() => {
    const nextUncompleted = MODULE_LIST.find(m => !completedModules.includes(m.id));
    return nextUncompleted || MODULE_LIST[0];
  }, [completedModules]);

  const lastVisitedModule = MODULE_LIST.find(m => m.id === lastVisitedId) || null;

  // Function to smoothly resume learning where user left off
  const resumeJourney = useCallback((specificModuleId?: string) => {
    let target = specificModuleId 
      ? MODULE_LIST.find(m => m.id === specificModuleId)
      : null;

    if (!target) {
      if (lastVisitedId) {
        target = MODULE_LIST.find(m => m.id === lastVisitedId) || null;
      }
      if (!target) {
        target = getNextUncompletedModule();
      }
    }

    if (!target) return;

    const el = document.getElementById(target.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Visual highlight flash
      el.classList.add('ring-2', 'ring-emerald-400', 'ring-offset-4', 'ring-offset-slate-950', 'transition-all');
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-emerald-400', 'ring-offset-4', 'ring-offset-slate-950');
      }, 2500);

      // Track as last visited
      setLastVisited(target.id);
    }
  }, [lastVisitedId, getNextUncompletedModule, setLastVisited]);

  // Automatic scroll observer to track active module
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            const sectionId = entry.target.id;
            const matchedModule = MODULE_LIST.find(m => m.sectionId === sectionId);
            if (matchedModule) {
              setLastVisited(matchedModule.id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0.2]
      }
    );

    MODULE_LIST.forEach((m) => {
      const el = document.getElementById(m.sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoaded, setLastVisited]);

  const totalCount = MODULE_LIST.length;
  const completedCount = completedModules.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);
  const isAllModulesCompleted = completedCount >= 13 || completedCount === totalCount;

  const completeAllModulesDemo = useCallback(() => {
    const allIds = MODULE_LIST.map(m => m.id);
    setCompletedModules(allIds);
    saveCompleted(allIds);
  }, [saveCompleted]);

  return (
    <ProgressContext.Provider
      value={{
        modules: MODULE_LIST,
        completedModules,
        lastVisitedId,
        lastVisitedTimestamp,
        lastVisitedModule,
        isLoaded,
        isCompleted,
        toggleCompleted,
        markCompleted,
        markIncomplete,
        setLastVisited,
        resumeJourney,
        resetProgress,
        completedCount,
        totalCount,
        progressPercentage,
        getNextUncompletedModule,

        // Badges
        allBadges: BADGES_LIST,
        unlockedBadgeIds,
        unlockedBadges,
        isBadgeUnlocked,
        getBadgeProgress,
        activeBadgeNotification,
        dismissBadgeNotification,
        isBadgesModalOpen,
        setIsBadgesModalOpen,

        // Cybersecurity Champion Certificate
        userName,
        setUserName,
        isCertificateModalOpen,
        setIsCertificateModalOpen,
        isAllModulesCompleted,
        completeAllModulesDemo,

        // Leaderboard
        isLeaderboardModalOpen,
        setIsLeaderboardModalOpen,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
