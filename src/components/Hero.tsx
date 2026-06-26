'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';
import styles from './Hero.module.css';

const roles = personalInfo.roles;

const ROLE_INTERVAL = 3000;
const FADE_MS = 350;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 16,
      mass: 0.8,
    },
  },
};

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [fading, setFading] = useState(false);
  const roleIdxRef = useRef(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(true);

  const cycleRole = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      roleIdxRef.current = (roleIdxRef.current + 1) % roles.length;
      setDisplayedRole(roles[roleIdxRef.current]);
      setFading(false);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    const role = setInterval(cycleRole, ROLE_INTERVAL);
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
  }, [cycleRole]);

  return (
    <section className={styles.hero}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.container}
      >
        <motion.div variants={itemVariants} className={styles.roleBadge}>
          <span
            className={`${styles.roleTag} ${fading ? styles.roleTagFading : ''}`}
          >
            <span className={styles.roleDot} />
            <span>{displayedRole}</span>
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.heading}>
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
        </motion.h1>

        <motion.div variants={itemVariants} className={styles.bio}>
          {personalInfo.heroBio && personalInfo.heroBio.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </motion.div>


      </motion.div>
    </section>
  );
}

