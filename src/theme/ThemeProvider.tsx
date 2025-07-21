import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';

import { ThemeContext } from './ThemeContext';
import type { getAppColorsFn } from './types';

type ThemeProviderProps = {
  getAppColors: getAppColorsFn;
  children: ReactNode;
};

export const ThemeProvider = ({ children, getAppColors }: ThemeProviderProps) => {
  const systemScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(systemScheme || 'light');

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) {
        setColorScheme(colorScheme);
      }
    });

    return () => listener.remove();
  }, []);

  const isDark = colorScheme === 'dark';

  const value = {
    theme: getAppColors(isDark),
    isDark,
    toggleTheme: () => {}, // placeholder
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};