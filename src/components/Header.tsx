'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const links = [
  ['#proyectos', 'Proyectos'],
  ['#experiencia', 'Experiencia'],
  ['#formacion', 'Formación'],
  ['#contacto', 'Contacto'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          gonzachi<span className={styles.logoDot}>.</span>
        </a>
        <ul className={`${styles.links} nav-links`}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>
        <a
          href="/cv.pdf"
          download
          className={styles.cvButton}
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}
