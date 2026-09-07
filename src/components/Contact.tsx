'use client';

import { personalInfo } from '@/data/content';
import { useLang } from '@/components/project/LangWrapper';
import styles from './Contact.module.css';

const links = [
  { href: `mailto:${personalInfo.email}`, label: personalInfo.email, primary: true },
  { href: personalInfo.linkedin, label: 'LinkedIn ↗', primary: false },
  { href: personalInfo.behance, label: 'Behance ↗', primary: false },
];

export default function Contact() {
  const { lang } = useLang();

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>

        <h2 className={`reveal reveal-delay-1 ${styles.title}`}>{lang === 'en' ? "Let's talk." : 'Hablemos.'}</h2>
        <div className={`reveal reveal-delay-2 ${styles.links}`}>
          {links.map(({ href, label, primary }) => (
            <a
              key={href}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
              className={primary ? styles.linkPrimary : styles.linkOutline}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
