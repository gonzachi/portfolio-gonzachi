'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './DailyDrivers.module.css';

const tools = [
  {
    id: 'figma',
    name: 'Figma',
    tooltip: 'Donde las ideas se convierten en píxeles y flujos reales.',
    image: '/assets/home/tools/figma.jpg'
  },
  {
    id: 'claude',
    name: 'Claude',
    tooltip: 'Mi copiloto para reflexionar, estructurar código y refinar ideas.',
    image: '/assets/home/tools/claude.jpg'
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    tooltip: 'Mi agente de IA para programar a la velocidad del pensamiento.',
    image: '/assets/home/tools/antigravity.jpg'
  },
  {
    id: 'copilot',
    name: 'Copilot',
    tooltip: 'Autocompletado y sugerencias de código en tiempo real.',
    image: '/assets/home/tools/copilot.jpg'
  },
  {
    id: 'hotjar',
    name: 'Hotjar',
    tooltip: 'Para entender cómo interactúan los usuarios reales con el producto.',
    image: '/assets/home/tools/hotjar.jpg'
  },
  {
    id: 'notions',
    name: 'Notion',
    tooltip: 'Mi segundo cerebro. Aquí vive todo: backlog, notas y estrategia.',
    image: '/assets/home/tools/notions.jpg'
  },
  {
    id: 'screen',
    name: 'Screen Studio',
    tooltip: 'Para crear grabaciones de pantalla de alta calidad con zoom dinámico.',
    image: '/assets/home/tools/screen-studio.jpg'
  }
];

export default function DailyDrivers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className={styles.section} id="daily-drivers">
      <div className={styles.container}>
        <div className="reveal section-label-sub">
          <span>Mis apps de uso diario</span>
          <div className="section-label-line" />
        </div>

        <ul className={styles.row}>
          {tools.map((tool) => (
            <li
              key={tool.id}
              className={styles.item}
              onMouseEnter={() => setHoveredId(tool.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tooltip positioned absolute above the card */}
              <AnimatePresence>
                {hoveredId === tool.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                    exit={{ opacity: 0, y: 6, x: '-50%', scale: 0.95 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className={styles.tooltip}
                  >
                    {tool.tooltip}
                    <div className={styles.tooltipArrow} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon Container Card */}
              <div className={`${styles.card} ${hoveredId === tool.id ? styles.cardActive : ''}`}>
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={72}
                  height={72}
                  className={styles.toolImage}
                  priority={tool.id === 'figma' || tool.id === 'claude'}
                />
              </div>

              {/* Smoothly fading text label below the icon */}
              <div className={styles.labelContainer}>
                <AnimatePresence>
                  {hoveredId === tool.id && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.12 }}
                      className={styles.label}
                    >
                      {tool.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
