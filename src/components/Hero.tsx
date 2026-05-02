'use client';

import { useEffect, useState } from 'react';
import { personalInfo } from '@/data/content';
import styles from './Hero.module.css';

const roles = personalInfo.roles;
const bio = [
  { text: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership. Me gusta resolver problemas end-to-end, y en estos tiempos que corren, la IA me está abriendo muchas puertas.", highlight: "mindset de ownership" },
  { text: "Actualmente busco evolucionar hacia el rol de Product Manager, conectando las necesidades del usuario con los objetivos técnicos y de negocio.", highlight: "evolucionar hacia el rol de Product Manager" },
  { text: "Más de 8 años de experiencia en diseño de producto y otros tantos en comunicación digital.", highlight: "Más de 8 años de experiencia" },
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

        <div className={`reveal reveal-delay-1 ${styles.heading}`}>
          <h1
            className={styles.hello}
            style={{ transform: `translate(${mouse.x * 8}px, ${mouse.y * 4}px)` }}
          >
            Hola,
          </h1>
          <h1
            className={styles.welcome}
            style={{ transform: `translate(${mouse.x * 13}px, ${mouse.y * 7}px)` }}
          >
            welcome
            <span className={styles.cursor} style={{ opacity: blink ? 1 : 0 }}>|</span>
          </h1>
        </div>

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
