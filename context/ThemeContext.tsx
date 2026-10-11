'use client';

import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      try {
        localStorage.removeItem('clicksafe_theme_2026');
      } catch {}
    }
  }, []);

  const value = {
    theme: 'dark' as const,
    isDark: true,
    toggleTheme: () => {},
    setTheme: () => {},
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
