'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'es';

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

interface Props {
  children: React.ReactNode;
  storageKey?: string;
}

export default function LangWrapper({ children, storageKey = 'case-study-lang' }: Props) {
  const [lang, setLang] = useState<Lang>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Lang | null;
    if (saved === 'en' || saved === 'es') setLang(saved);
    setMounted(true);
  }, [storageKey]);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'es' : 'en';
      localStorage.setItem(storageKey, next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      <div data-lang-active={mounted ? lang : 'en'} style={{ display: 'contents' }}>
        {children}
      </div>
    </LangContext.Provider>
  );
}
