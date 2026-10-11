'use client';

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  avatarColor: string;
  institution: string;
  category: 'university' | 'college' | 'professional' | 'school';
  division: string;
  completedModules: number;
  score: number;
  badgesCount: number;
  completionTimeMinutes: number;
  completedAt: string;
  isCurrentUser?: boolean;
}

const STORAGE_KEY = 'clicksafe_leaderboard_2026_v1';

export const INITIAL_LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    id: 'champ-1',
    rank: 1,
    name: 'তানভীর আহমেদ (Tanvir Ahmed)',
    avatar: 'TA',
    avatarColor: 'from-amber-500 to-yellow-600',
    institution: 'বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয় (BUET)',
    category: 'university',
    division: 'ঢাকা (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 14,
    completionTimeMinutes: 42,
    completedAt: '১০ মার্চ ২০২৬'
  },
  {
    id: 'champ-2',
    rank: 2,
    name: 'নুসরাত জাহান (Nusrat Jahan)',
    avatar: 'NJ',
    avatarColor: 'from-emerald-500 to-teal-600',
    institution: 'ঢাকা বিশ্ববিদ্যালয় (Dhaka University)',
    category: 'university',
    division: 'ঢাকা (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 14,
    completionTimeMinutes: 48,
    completedAt: '১১ মার্চ ২০২৬'
  },
  {
    id: 'champ-3',
    rank: 3,
    name: 'ফাহিম চৌধুরী (Fahim Chowdhury)',
    avatar: 'FC',
    avatarColor: 'from-cyan-500 to-blue-600',
    institution: 'শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (SUST)',
    category: 'university',
    division: 'সিলেট (Sylhet)',
    completedModules: 13,
    score: 1300,
    badgesCount: 14,
    completionTimeMinutes: 52,
    completedAt: '১২ মার্চ ২০২৬'
  },
  {
    id: 'champ-4',
    rank: 4,
    name: 'সাবিনা ইয়াসমিন (Sabina Yasmin)',
    avatar: 'SY',
    avatarColor: 'from-purple-500 to-indigo-600',
    institution: 'চট্টগ্রাম বিশ্ববিদ্যালয় (Chittagong University)',
    category: 'university',
    division: 'চট্টগ্রাম (Chittagong)',
    completedModules: 13,
    score: 1300,
    badgesCount: 13,
    completionTimeMinutes: 57,
    completedAt: '১৩ মার্চ ২০২৬'
  },
  {
    id: 'champ-5',
    rank: 5,
    name: 'আরিফুর রহমান (Arifur Rahman)',
    avatar: 'AR',
    avatarColor: 'from-rose-500 to-pink-600',
    institution: 'রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (RUET)',
    category: 'university',
    division: 'রাজশাহী (Rajshahi)',
    completedModules: 13,
    score: 1300,
    badgesCount: 13,
    completionTimeMinutes: 62,
    completedAt: '১৪ মার্চ ২০২৬'
  },
  {
    id: 'champ-6',
    rank: 6,
    name: 'ফারহানা তাবাসসুম (Farhana Tabassum)',
    avatar: 'FT',
    avatarColor: 'from-fuchsia-500 to-purple-600',
    institution: 'ব্র্যাক বিশ্ববিদ্যালয় (BRAC University)',
    category: 'university',
    division: 'ঢাকা (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 13,
    completionTimeMinutes: 65,
    completedAt: '১৫ মার্চ ২০২৬'
  },
  {
    id: 'champ-7',
    rank: 7,
    name: 'মেহেদী হাসান (Mehedi Hasan)',
    avatar: 'MH',
    avatarColor: 'from-teal-500 to-emerald-600',
    institution: 'খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET)',
    category: 'university',
    division: 'খুলনা (Khulna)',
    completedModules: 13,
    score: 1300,
    badgesCount: 12,
    completionTimeMinutes: 70,
    completedAt: '১৬ মার্চ ২০২৬'
  },
  {
    id: 'champ-8',
    rank: 8,
    name: 'রাকিবুল ইসলাম (Rakibul Islam)',
    avatar: 'RI',
    avatarColor: 'from-blue-500 to-indigo-600',
    institution: 'ইসলামিক ইউনিভার্সিটি অব টেকনোলজি (IUT)',
    category: 'university',
    division: 'গাজীপুর (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 12,
    completionTimeMinutes: 74,
    completedAt: '১৭ মার্চ ২০২৬'
  },
  {
    id: 'champ-9',
    rank: 9,
    name: 'কাজী সায়মা (Kazi Sayma)',
    avatar: 'KS',
    avatarColor: 'from-amber-600 to-orange-600',
    institution: 'কুমিল্লা ভিক্টোরিয়া সরকারি কলেজ',
    category: 'college',
    division: 'কুমিল্লা (Chittagong)',
    completedModules: 13,
    score: 1300,
    badgesCount: 12,
    completionTimeMinutes: 78,
    completedAt: '১৮ মার্চ ২০২৬'
  },
  {
    id: 'champ-10',
    rank: 10,
    name: 'মাহমুদুল হক (Mahmudul Haque)',
    avatar: 'MH',
    avatarColor: 'from-emerald-600 to-cyan-600',
    institution: 'নর্থ সাউথ বিশ্ববিদ্যালয় (NSU)',
    category: 'university',
    division: 'ঢাকা (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 12,
    completionTimeMinutes: 82,
    completedAt: '১৯ মার্চ ২০২৬'
  },
  {
    id: 'champ-11',
    rank: 11,
    name: 'শায়লা শারমিন (Shaila Sharmin)',
    avatar: 'SS',
    avatarColor: 'from-pink-500 to-rose-600',
    institution: 'বরিশাল বিশ্ববিদ্যালয় (Barisal University)',
    category: 'university',
    division: 'বরিশাল (Barisal)',
    completedModules: 13,
    score: 1300,
    badgesCount: 11,
    completionTimeMinutes: 85,
    completedAt: '২০ মার্চ ২০২৬'
  },
  {
    id: 'champ-12',
    rank: 12,
    name: 'নাঈম হাসান (Nayeem Hasan)',
    avatar: 'NH',
    avatarColor: 'from-violet-500 to-blue-600',
    institution: 'ঢাকা রেসিডেনসিয়াল মডেল কলেজ',
    category: 'college',
    division: 'ঢাকা (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 11,
    completionTimeMinutes: 88,
    completedAt: '২১ মার্চ ২০২৬'
  },
  {
    id: 'champ-13',
    rank: 13,
    name: 'আহমেদ জামিল (Ahmed Jamil)',
    avatar: 'AJ',
    avatarColor: 'from-teal-600 to-cyan-700',
    institution: 'ব্র্যাক আইটি ও ফিনটেক ডিফেন্স',
    category: 'professional',
    division: 'ঢাকা (Dhaka)',
    completedModules: 13,
    score: 1300,
    badgesCount: 11,
    completionTimeMinutes: 92,
    completedAt: '২২ মার্চ ২০২৬'
  }
];

export function getStoredLeaderboard(): LeaderboardEntry[] {
  if (typeof window === 'undefined') return INITIAL_LEADERBOARD_DATA;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADERBOARD_DATA));
      return INITIAL_LEADERBOARD_DATA;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_LEADERBOARD_DATA;
  } catch {
    return INITIAL_LEADERBOARD_DATA;
  }
}

export function saveLeaderboard(entries: LeaderboardEntry[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // ignore
  }
}

export function syncCurrentUserToLeaderboard(
  userName: string,
  badgesCount: number,
  institution: string = 'ক্যাম্পাস অ্যাম্বাসেডর (Campus Ambassador)',
  division: string = 'ঢাকা (Dhaka)'
): LeaderboardEntry[] {
  const currentEntries = getStoredLeaderboard();
  
  // Clean name
  const nameToUse = userName.trim() || 'সাইবার চ্যাম্পিয়ন (Cyber Champion)';

  // Check if current user already exists
  const existingIndex = currentEntries.findIndex(e => e.isCurrentUser || e.id === 'current-user-champ');

  const userEntry: LeaderboardEntry = {
    id: 'current-user-champ',
    rank: 4, // Default high rank for finishing all 13 modules
    name: `${nameToUse} ★`,
    avatar: nameToUse.slice(0, 2).toUpperCase(),
    avatarColor: 'from-amber-400 via-emerald-500 to-teal-500',
    institution,
    category: 'university',
    division,
    completedModules: 13,
    score: 1300,
    badgesCount: Math.max(badgesCount, 13),
    completionTimeMinutes: 55, // Fast-track champion pace
    completedAt: 'আজ (Today)',
    isCurrentUser: true
  };

  let updatedList: LeaderboardEntry[];
  if (existingIndex >= 0) {
    updatedList = [...currentEntries];
    updatedList[existingIndex] = { ...userEntry };
  } else {
    // Insert user around rank 4 (ahead of rank 4)
    const baseWithoutCurrentUser = currentEntries.filter(e => !e.isCurrentUser && e.id !== 'current-user-champ');
    updatedList = [
      ...baseWithoutCurrentUser.slice(0, 3),
      userEntry,
      ...baseWithoutCurrentUser.slice(3)
    ];
  }

  // Recalculate ranks
  updatedList = updatedList.map((entry, idx) => ({
    ...entry,
    rank: idx + 1
  }));

  saveLeaderboard(updatedList);
  return updatedList;
}

export function resetLeaderboardStore(): LeaderboardEntry[] {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return INITIAL_LEADERBOARD_DATA;
}
