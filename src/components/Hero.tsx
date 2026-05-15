'use client';

import { useEffect, useState } from 'react';
import { personalInfo } from '@/data/content';
import styles from './Hero.module.css';

const roles = personalInfo.roles;
const bio = [
  { text: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership. Cuento con más de 8 años de experiencia en diseño de producto y otros extras en comunicación digital.", highlight: "" },
  { text: "Mi experiencia siempre estuvo ligada a mantener una visión end-to-end en el proceso de diseño: desde el descubrimiento del problema hasta la validación post-lanzamiento. Actualmente se extiende a tener una visión más amplia, cubriendo la dimensión de negocio y estrategia, buscando una evolución hacia un rol de Product Manager / Owner.", highlight: "" },
  { text: "Creo que la inteligencia artificial vino para quedarse y es por eso que me he subido a la ola desde el día cero. La utilizo en mi flujo de trabajo diario, tanto para consultar, diseñar, testear con usuarios, agilizar decisiones con negocio, detectar nuevos insights, generar MVP's funcionales y explorar cada nueva funcionalidad que sale a la luz.", highlight: "" },
];

function renderBio(text: string, phrase: string) {
  if (!phrase || !text.includes(phrase)) return text;
  const idx = text.indexOf(phrase);
  const before = text.slice(0, idx);
  const after = text.slice(idx + phrase.length);
  return (
    <>
      {before}
      <mark className={styles.highlight}>{phrase}</mark>
      {after}
    </>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const role = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setFading(false);
      }, 320);
    }, 2800);
    const cur = setInterval(() => setBlink(b => !b), 530);
    const move = (e: MouseEvent) =>
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      clearInterval(role);
      clearInterval(cur);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`reveal ${styles.roleBadge}`}>
          <span className={`${styles.roleTag} ${fading ? styles.roleTagFading : ''}`}>
            <span className={styles.roleDot} />
            {roles[roleIdx]}
          </span>
        </div>

        <h1 className={`reveal reveal-delay-1 ${styles.heading}`}>
          <span
            className={styles.hello}
            style={{ transform: `translate(${mouse.x * 8}px, ${mouse.y * 4}px)` }}
          >
            Hola,{' '}
          </span>
          <span
            className={styles.welcome}
            style={{ transform: `translate(${mouse.x * 13}px, ${mouse.y * 7}px)` }}
          >
            welcome
            <span className={styles.cursor} style={{ opacity: blink ? 1 : 0 }}>|</span>
          </span>
        </h1>

        <div className={`reveal reveal-delay-2 ${styles.bio}`}>
          {bio.map((b, i) => (
            <p key={i}>{renderBio(b.text, b.highlight)}</p>
          ))}
        </div>

        <div className={`reveal reveal-delay-3 ${styles.ctas}`}>
          <a href="#proyectos" className={styles.ctaPrimary}>Ver proyectos ↓</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener" className={styles.ctaOutline}>LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
