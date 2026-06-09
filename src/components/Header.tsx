'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/hooks/useTheme';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const isLight = theme === 'light';

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

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = () => setMenuOpen(false);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

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

        {/* 3-dots dropdown menu (mobile only) */}
        <div className={styles.menuContainer}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={(e) => {
              e.stopPropagation(); // Prevent immediate closing by click-outside listener
              setMenuOpen(!menuOpen);
            }}
            aria-label="Opciones de perfil"
            aria-expanded={menuOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.menuIcon}
            >
              <circle cx="12" cy="5" r="1.3" />
              <circle cx="12" cy="12" r="1.3" />
              <circle cx="12" cy="19" r="1.3" />
            </svg>
          </button>

          {menuOpen && (
            <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
              <a
                href="/cv/Gonzalo Chiavassa, Product Designer - CV.pdf"
                download
                className={styles.dropdownItem}
                onClick={() => setMenuOpen(false)}
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
                  className={styles.dropdownIcon}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Descargar CV
              </a>

              <button
                type="button"
                className={styles.dropdownItem}
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
              >
                {mounted && isLight ? (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.dropdownIcon}
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    Modo oscuro
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.dropdownIcon}
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                    Modo claro
                  </>
                )}
              </button>
            </div>
          )}
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
        <ThemeToggle />
      </div>
    </nav>
  );
}
