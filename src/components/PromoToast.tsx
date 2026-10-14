'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/components/project/LangWrapper';
import styles from './PromoToast.module.css';

const HYPE_URL = 'https://hype-run.vercel.app';
const SHOW_DELAY_MS = 1500;

const copy = {
  es: {
    eyebrow: 'Nueva app',
    title: 'Hype — Corré. Ellos gritan por vos.',
    body: 'Una app pensada para runners que les gusta sentirse acompañados por sus amigos y familiares.',
    cta: 'Entrá para ver más',
    close: 'Cerrar',
  },
  en: {
    eyebrow: 'New app',
    title: 'Hype — You run. They cheer for you.',
    body: 'An app for runners who like to feel the support of their friends and family.',
    cta: 'Check it out',
    close: 'Close',
  },
};

export default function PromoToast() {
  const { lang } = useLang();
  const [isRendered, setIsRendered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Dismissal lives only in component state: it sticks while navigating
  // (the layout doesn't remount) but the toast comes back on reload.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRendered(true);
      // Wait a frame after mounting so the entrance transition plays.
      requestAnimationFrame(() => requestAnimationFrame(() => setIsOpen(true)));
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsOpen(false);
    setTimeout(() => setIsRendered(false), 400);
  };

  if (!isRendered) return null;

  const t = copy[lang];

  return (
    <aside
      className={`${styles.toast} ${isOpen ? styles.open : ''}`}
      role="complementary"
      aria-label={t.eyebrow}
    >
      <button type="button" className={styles.closeBtn} onClick={dismiss} aria-label={t.close}>
        ×
      </button>
      <a
        className={styles.media}
        href={HYPE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image src="/assets/promo/hype.jpg" alt="" width={1200} height={900} sizes="280px" />
      </a>
      <span className={styles.eyebrow}>{t.eyebrow}</span>
      <p className={styles.title}>{t.title}</p>
      <p className={styles.body}>{t.body}</p>
      <a
        className={styles.cta}
        href={HYPE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
      >
        {t.cta} →
      </a>
    </aside>
  );
}
