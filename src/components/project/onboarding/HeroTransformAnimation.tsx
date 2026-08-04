'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroTransformAnimation.module.css';

const EASE_SMOOTH: [number, number, number, number] = [0.45, 0.0, 0.25, 1.0];

// --- Dense "Before" state: many small, irregular blocks ---
const DENSE_BLOCKS = [
  { id: 'a1',  x: 0,  y: 0,   w: 56, h: 4, lines: 4, lw: [88, 72, 80, 58] },
  { id: 'a2',  x: 60, y: 0,   w: 38, h: 4, lines: 3, lw: [65, 78, 48] },
  { id: 'a3',  x: 0,  y: 8,   w: 38, h: 4, lines: 3, lw: [85, 68, 75] },
  { id: 'a4',  x: 42, y: 8,   w: 56, h: 4, lines: 3, lw: [76, 58, 70] },
  { id: 'a5',  x: 0,  y: 16,  w: 28, h: 4, lines: 4, lw: [70, 88, 55, 78] },
  { id: 'a6',  x: 31, y: 16,  w: 30, h: 4, lines: 3, lw: [86, 65, 72] },
  { id: 'a7',  x: 64, y: 16,  w: 34, h: 4, lines: 3, lw: [58, 76, 62] },
  { id: 'a8',  x: 0,  y: 24,  w: 96, h: 3, lines: 2, lw: [92, 84] },
  { id: 'a9',  x: 0,  y: 30,  w: 44, h: 4, lines: 4, lw: [68, 82, 58, 76] },
  { id: 'a10', x: 48, y: 30,  w: 50, h: 4, lines: 3, lw: [86, 58, 70] },
  { id: 'a11', x: 0,  y: 38,  w: 26, h: 4, lines: 3, lw: [78, 62, 88] },
  { id: 'a12', x: 29, y: 38,  w: 34, h: 4, lines: 3, lw: [72, 54, 66] },
  { id: 'a13', x: 67, y: 38,  w: 31, h: 4, lines: 3, lw: [86, 68, 58] },
  { id: 'a14', x: 0,  y: 46,  w: 96, h: 3, lines: 2, lw: [88, 78] },
  { id: 'a15', x: 0,  y: 52,  w: 58, h: 4, lines: 3, lw: [74, 84, 58] },
  { id: 'a16', x: 61, y: 52,  w: 37, h: 4, lines: 3, lw: [78, 62, 70] },
  { id: 'a17', x: 0,  y: 60,  w: 96, h: 4, lines: 4, lw: [88, 78, 64, 72] },
  { id: 'a18', x: 0,  y: 68,  w: 42, h: 3, lines: 2, lw: [72, 82] },
  { id: 'a19', x: 45, y: 68,  w: 53, h: 3, lines: 2, lw: [80, 62] },
];

// --- Clean "After" state: few big, airy blocks ---
const CLEAN_BLOCKS = [
  // Large title block — very prominent
  { id: 'c1', x: 0, y: 0,  w: 70, h: 10, lines: 1, lw: [80], isTitle: true },
  // Subtitle line
  { id: 'c2', x: 0, y: 19, w: 50, h: 3,  lines: 1, lw: [62], isTitle: false },
  // Body block — wide, 2 lines
  { id: 'c3', x: 0, y: 34, w: 90, h: 3,  lines: 2, lw: [90, 70], isTitle: false },
  // CTA / small label
  { id: 'c4', x: 0, y: 57, w: 32, h: 4,  lines: 1, lw: [55], isTitle: false },
];

type BlockDef = { id: string; x: number; y: number; w: number; h: number; lines: number; lw: number[]; isTitle?: boolean };

function SimLines({ lines, lw, lineH, gap, color }: { lines: number; lw: number[]; lineH: number; gap: number; color: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          style={{
            width: `${lw[i] ?? 60}%`,
            height: lineH,
            borderRadius: 2,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

function Block({ block, phase }: { block: BlockDef; phase: 'dense' | 'clean' }) {
  const isDense = phase === 'dense';
  const isTitle = !isDense && block.isTitle;

  return (
    <motion.div
      key={block.id}
      className={styles.block}
      style={{
        left: `${block.x}%`,
        top: `${block.y}%`,
        width: `${block.w}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: isDense ? 0.6 : 0.9, ease: EASE_SMOOTH }}
    >
      <SimLines
        lines={block.lines}
        lw={block.lw}
        lineH={isTitle ? 12 : isDense ? 4 : 6}
        gap={isTitle ? 0 : isDense ? 5 : 8}
        color={isTitle ? 'rgba(0,0,0,0.22)' : isDense ? 'rgba(0,0,0,0.13)' : 'rgba(0,0,0,0.14)'}
      />
    </motion.div>
  );
}

type Phase = 'dense' | 'transitioning' | 'clean' | 'pause';

export default function HeroTransformAnimation() {
  const [phase, setPhase] = useState<Phase>('dense');

  useEffect(() => {
    let cancelled = false;

    async function cycle() {
      while (!cancelled) {
        setPhase('dense');
        await new Promise((r) => setTimeout(r, 2800));
        if (cancelled) break;

        setPhase('transitioning');
        await new Promise((r) => setTimeout(r, 2000));
        if (cancelled) break;

        setPhase('clean');
        await new Promise((r) => setTimeout(r, 3200));
        if (cancelled) break;

        setPhase('pause');
        await new Promise((r) => setTimeout(r, 700));
        if (cancelled) break;
      }
    }

    cycle();
    return () => { cancelled = true; };
  }, []);

  const showDense = phase === 'dense' || phase === 'transitioning';
  const showClean = phase === 'clean' || phase === 'pause';

  return (
    <div className={styles.canvas}>
      {/* Dense layer */}
      <div
        className={styles.layer}
        style={{
          opacity: showDense ? 1 : 0,
          transition: 'opacity 1.8s cubic-bezier(0.45,0.0,0.25,1)',
        }}
      >
        <AnimatePresence>
          {showDense && DENSE_BLOCKS.map((b) => (
            <Block key={b.id} block={b as BlockDef} phase="dense" />
          ))}
        </AnimatePresence>
      </div>

      {/* Clean layer */}
      <div
        className={styles.layer}
        style={{
          opacity: showClean ? 1 : 0,
          transition: 'opacity 2.0s cubic-bezier(0.45,0.0,0.25,1)',
        }}
      >
        <AnimatePresence>
          {showClean && CLEAN_BLOCKS.map((b) => (
            <Block key={b.id} block={b as BlockDef} phase="clean" />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
