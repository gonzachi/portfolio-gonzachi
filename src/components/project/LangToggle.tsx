'use client';

import { useLang } from './LangWrapper';
import styles from './LangToggle.module.css';

export default function LangToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className={styles.toggle}
      aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
    >
      <span className={lang === 'en' ? styles.active : styles.inactive}>EN</span>
      <span className={styles.sep}>·</span>
      <span className={lang === 'es' ? styles.active : styles.inactive}>ES</span>
    </button>
  );
}
