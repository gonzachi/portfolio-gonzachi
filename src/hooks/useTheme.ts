'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const setTheme = () => {};
  const toggleTheme = () => {};

  return { theme, setTheme, toggleTheme, mounted: true };
}

