'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isBn: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'bn',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isBn: true,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('bn');

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem('clicksafe_lang_2026') as Language;
        if (saved === 'bn' || saved === 'en') {
          setLanguageState(saved);
        }
      } catch {
        // ignore
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('clicksafe_lang_2026', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'bn' ? 'en' : 'bn');
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isBn: language === 'bn',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
