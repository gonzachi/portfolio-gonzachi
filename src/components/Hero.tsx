'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/content';
import styles from './Hero.module.css';

const roles = personalInfo.roles;


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
  const [roleIdx, setRoleIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const role = setInterval(() => {
      setRoleIdx(i => (i + 1) % roles.length);
    }, 3000);
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.container}
      >
        <motion.div variants={itemVariants} className={styles.roleBadge}>
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIdx]}
              className={styles.roleTag}
              initial={{ scale: 0.85, y: 12, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: -10, rotate: 4, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 15,
                mass: 0.7
              }}
            >
              <span className={styles.roleDot} />
              <span>{roles[roleIdx]}</span>
            </motion.span>
          </AnimatePresence>
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
