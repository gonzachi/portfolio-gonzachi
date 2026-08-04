'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';
import styles from './CaseStudyFooter.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const LINKS = [
  { href: `mailto:${personalInfo.email}`, label: personalInfo.email, external: false },
  { href: personalInfo.linkedin, label: 'LinkedIn ↗', external: true },
  { href: personalInfo.behance, label: 'Behance ↗', external: true },
];

export default function CaseStudyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top row: eyebrow + back link */}
        <motion.div
          className={styles.topRow}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className={styles.eyebrow}>FIN DEL CASO</span>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow} aria-hidden="true">←</span>
            Volver a la home
          </Link>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
        >
          Gracias<br />por leer.
        </motion.h2>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row: contact links + copyright */}
        <motion.div
          className={styles.bottomRow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
        >
          <div className={styles.contactLinks}>
            {LINKS.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                className={styles.contactLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </a>
            ))}
          </div>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Gonzalo Chiavassa
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
