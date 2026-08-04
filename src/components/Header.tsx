'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Header.module.css';

const links = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#side-projects', label: 'Side project' },
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#experiencia', label: 'Experiencia' },
];

const sectionIds = links.map(l => l.href.replace('#', ''));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeTooltip, setActiveTooltip] = useState<'work' | 'location' | 'download' | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Close tooltips and popovers when clicking outside
  useEffect(() => {
    if (!activeTooltip) return;
    const closeTooltip = () => setActiveTooltip(null);
    document.addEventListener('click', closeTooltip);
    return () => document.removeEventListener('click', closeTooltip);
  }, [activeTooltip]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* 1. Header (Brand) + 3-dots Menu wrapper */}
      <div className={styles.brandWrapper}>
        <a href="#" className={styles.brandContainer}>
          <motion.div
            className={styles.avatarWrapper}
            initial={{ opacity: 0, y: -48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8,
              opacity: { duration: 0.25, delay: 0.8 }
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Gonzalo Chiavassa"
              width={40}
              height={40}
              className={styles.avatar}
              priority
            />
          </motion.div>

          <div className={styles.brand}>
            <span className={styles.logo}>
              Gonzalo Chiavassa
            </span>
            <span className={styles.role}>Product Designer</span>
          </div>
        </a>

        {/* Mobile action buttons (replacing 3-dots menu) */}
        <div className={styles.mobileActions}>
          {/* 1. Briefcase icon button */}
          <div className={styles.actionWrapper}>
            <button
              type="button"
              className={`${styles.actionButton} ${activeTooltip === 'work' ? styles.actionActive : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTooltip(activeTooltip === 'work' ? null : 'work');
              }}
              aria-label="Información de trabajo"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </button>
            <AnimatePresence>
              {activeTooltip === 'work' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={styles.tooltip}
                  onClick={(e) => e.stopPropagation()}
                >
                  Product Designer @ Mango
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Location pin icon button */}
          <div className={styles.actionWrapper}>
            <button
              type="button"
              className={`${styles.actionButton} ${activeTooltip === 'location' ? styles.actionActive : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTooltip(activeTooltip === 'location' ? null : 'location');
              }}
              aria-label="Ubicación"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </button>
            <AnimatePresence>
              {activeTooltip === 'location' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={styles.tooltip}
                  onClick={(e) => e.stopPropagation()}
                >
                  Barcelona, España
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Download icon button (with popover) */}
          <div className={styles.actionWrapper}>
            <button
              type="button"
              className={`${styles.actionButton} ${activeTooltip === 'download' ? styles.actionActive : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTooltip(activeTooltip === 'download' ? null : 'download');
              }}
              aria-label="Descargas"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
            <AnimatePresence>
              {activeTooltip === 'download' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={styles.popover}
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href="/cv/Gonzalo Chiavassa, Product Designer - CV.pdf"
                    download
                    className={styles.popoverLink}
                    onClick={() => setActiveTooltip(null)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Descargar CV
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 2. Middle Container (Status + Location & Navigation) */}
      <div className={styles.middleContainer}>
        {/* Status & Location */}
        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue}>Product Designer @ Mango</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Location</span>
            <span className={styles.metaValue}>Barcelona, España</span>
          </div>
        </div>

        {/* Navigation links */}
        <ul className={`${styles.links} nav-links`}>
          {links.map(({ href, label }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.link} ${activeSection === id ? styles.linkActive : ''}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. Footer Section (Actions - desktop only) */}
      <div className={styles.footerSection}>
        <a
          href="/cv/Gonzalo Chiavassa, Product Designer - CV.pdf"
          download
          className={styles.cvButton}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.cvIcon}
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Descargar CV
        </a>
      </div>
    </nav>
  );
}
