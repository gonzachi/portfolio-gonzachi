'use client';

import { education } from '@/data/content';
import { useLang } from '@/components/project/LangWrapper';
import Image from 'next/image';
import styles from './Education.module.css';

const TITLE_EN: Record<string, string> = {
  nuclio: "Master's in Digital Product Management",
  siglo21: "Bachelor's Degree in Graphic Design",
};

export default function Education() {
  const { lang } = useLang();

  return (
    <section className={styles.section} id="formacion">
      <div className={styles.container}>
        <div className="reveal section-label-sub">
          <span>{lang === 'en' ? 'Education' : 'Formación'}</span>
          <div className="section-label-line" />
        </div>
        <ul className={styles.list}>
          {education.map((item, i) => (
            <li key={item.id} className={`reveal reveal-delay-${i % 4} ${styles.item}`}>
              <Image
                src={item.logo}
                alt={item.institution}
                width={46}
                height={46}
                className={styles.logo}
              />
              <div className={styles.info}>
                <div className={styles.title}>{lang === 'en' ? (TITLE_EN[item.id] ?? item.title) : item.title}</div>
                <div className={styles.institution}>{item.institution}</div>
              </div>
              <span className={styles.period}>{item.period}</span>
            </li>
          ))}
        </ul>
        <div className={`reveal ${styles.languages}`}>
          {lang === 'en' ? (
            <>
              <span className={styles.langItem}>Native Spanish</span>
              <span className={styles.langSep}>·</span>
              <span className={styles.langItem}>English A2 — <em>currently studying</em></span>
            </>
          ) : (
            <>
              <span className={styles.langItem}>Español nativo</span>
              <span className={styles.langSep}>·</span>
              <span className={styles.langItem}>Inglés A2 — <em>Actualmente estudiando</em></span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
