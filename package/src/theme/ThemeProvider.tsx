import type { ReactNode } from 'react';
import { useColorScheme } from 'react-native'; // 👈 key!

import type { getAppColorsFn } from './types';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  getAppColors: getAppColorsFn;
  children: ReactNode;
};

export const ThemeProvider = ({
  children,
  getAppColors,
}: ThemeProviderProps) => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null

  const isDark = scheme === 'dark';

  const value = {
    theme: getAppColors(isDark),
    isDark,
    toggleTheme: () => {}, // 👈 This is now a no-op, unless you want a manual override
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
