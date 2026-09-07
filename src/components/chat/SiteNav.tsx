'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LangToggle from '@/components/project/LangToggle';
import ResumeModal from './ResumeModal';
import styles from './SiteNav.module.css';

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
    </svg>
  );
}

function WorksIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const links = [
  { href: '/', en: 'Home', es: 'Inicio', Icon: HomeIcon },
  { href: '/proyectos', en: 'Works', es: 'Proyectos', Icon: WorksIcon },
  { href: '/perfil', en: 'About', es: 'Sobre mí', Icon: AboutIcon },
];

export default function SiteNav() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <header className={styles.nav}>
      {/* Plain <a>, not <Link> — clicking Home while already on "/" should
          reset the chat back to its empty state, and a same-route Link
          navigation is a no-op that leaves the conversation as-is. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className={styles.brand}>
        <Image
          src="/profile.jpg"
          alt="Gonzalo Chiavassa"
          width={26}
          height={26}
          className={styles.avatar}
        />
        <span className={styles.brandName}>Gonzalo Chiavassa</span>
      </a>
      <div className={styles.right}>
        <nav className={styles.links}>
          {links.map(({ href, en, es, Icon }) =>
            href === '/' ? (
              <a key={href} href={href} className={styles.link}>
                <Icon />
                <span data-lang="en">{en}</span>
                <span data-lang="es">{es}</span>
              </a>
            ) : (
              <Link key={href} href={href} className={styles.link}>
                <Icon />
                <span data-lang="en">{en}</span>
                <span data-lang="es">{es}</span>
              </Link>
            )
          )}
          <button type="button" className={styles.link} onClick={() => setResumeOpen(true)}>
            <ResumeIcon />
            <span data-lang="en">Resume</span>
            <span data-lang="es">CV</span>
          </button>
        </nav>
        <div className={styles.actions}>
          <LangToggle />
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}
