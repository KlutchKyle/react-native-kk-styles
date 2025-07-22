import { useMemo, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native'; // 👈 key!

import type { getAppColorsFn } from './types';
import { ThemeContext } from './ThemeContext';

type ThemeOverride = 'light' | 'dark' | null;

type ThemeProviderProps = {
  getAppColors: getAppColorsFn;
  children: ReactNode;
  defaultMatchSystem?: boolean;
};

export const ThemeProvider = ({
  children,
  getAppColors,
  defaultMatchSystem = true
}: ThemeProviderProps) => {
  const scheme = useColorScheme() === 'dark'; // 'light' | 'dark' | null
  const [override, setOverride] = useState<ThemeOverride>(null)
  const [matchSystem, setMatchSystem] = useState(defaultMatchSystem)

  const isDark = useMemo(()=>{
    if (matchSystem) return scheme
    return override === 'dark';

  }, [matchSystem, override,scheme])

  const toggleTheme = () => {
    setMatchSystem(false); // disable system matching when manually toggled
    setOverride(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (mode: 'dark' | 'light') => {
    setMatchSystem(false);
    setOverride(mode);
  };

  const value = {
    theme: getAppColors(isDark),
    isDark,
    toggleTheme,
    setTheme,
    matchSystem,
    setMatchSystem
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
