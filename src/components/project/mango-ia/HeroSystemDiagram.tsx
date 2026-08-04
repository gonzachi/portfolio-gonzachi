'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const W = 800;
const H = 280;
const N = 40;          // total dots
const CONN_D = 130;    // proximity connection distance

/* ─────────────────────────────────────────────
   Seeded LCG — deterministic, SSR-safe
───────────────────────────────────────────── */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) | 0;
    return (s >>> 0) / 4294967296;
  };
}

/* ─────────────────────────────────────────────
   Final resolved geometry — 3-tier hierarchy
   Tier 1: 1 apex
   Tier 2: 3 pillars
   Tier 3: 5 leaves
───────────────────────────────────────────── */
const FINAL_NODES = [
  { x: 400, y: 52 },                                                                        // 0 apex
  { x: 215, y: 146 }, { x: 400, y: 146 }, { x: 585, y: 146 },                             // 1-3 pillars
  { x: 122, y: 238 }, { x: 262, y: 238 }, { x: 400, y: 238 }, { x: 538, y: 238 }, { x: 678, y: 238 }, // 4-8 leaves
];

const FINAL_EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3],
  [1, 4], [1, 5],
  [2, 5], [2, 6], [2, 7],
  [3, 7], [3, 8],
];

/* ─────────────────────────────────────────────
   Math helpers
───────────────────────────────────────────── */
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function eio(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
function d2(ax: number, ay: number, bx: number, by: number) {
  const dx = ax - bx, dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
}

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type Dot = {
  id: number; x: number; y: number;
  vx: number; vy: number; ph: number;
  fi: number; op: number;
};
type Line = { x1: number; y1: number; x2: number; y2: number; op: number; isFinal: boolean };
type Frame = { dots: Dot[]; lines: Line[]; phase: number };

/* ─────────────────────────────────────────────
   Initial dots (generated once, deterministically)
───────────────────────────────────────────── */
const INIT: Dot[] = (() => {
  const rng = lcg(2718);
  return Array.from({ length: N }, (_, i): Dot => ({
    id: i,
    x: 90 + rng() * (W - 180),
    y: 28 + rng() * (H - 56),
    vx: (rng() - 0.5) * 0.28,
    vy: (rng() - 0.5) * 0.20,
    ph: rng() * Math.PI * 2,
    fi: i < FINAL_NODES.length ? i : -1,
    op: 1,
  }));
})();

/* ─────────────────────────────────────────────
   Per-frame computation (runs in rAF, no React)
   Phase 0  0–2.5s   scattered drift
   Phase 1  2.5–5.5s drift + proximity connections appear
   Phase 2  5.5–9.5s converge + structural edges appear
   Phase 3  9.5s+    settle + gentle breathing
───────────────────────────────────────────── */
function computeFrame(dots: Dot[], el: number): Frame {
  const phase = el < 2.5 ? 0 : el < 5.5 ? 1 : el < 9.5 ? 2 : 3;

  // ── Update positions ──────────────────────
  let nd: Dot[];

  if (phase <= 1) {
    nd = dots.map(d => {
      let { x, y, vx, vy, ph } = d;
      x += vx * 0.45 + Math.sin(el * 0.38 + ph) * 0.16;
      y += vy * 0.38 + Math.cos(el * 0.30 + ph * 1.3) * 0.13;
      if (x < 55)    { x = 55;      vx =  Math.abs(vx) * 0.85; }
      if (x > W - 55){ x = W - 55;  vx = -Math.abs(vx) * 0.85; }
      if (y < 18)    { y = 18;      vy =  Math.abs(vy) * 0.85; }
      if (y > H - 18){ y = H - 18;  vy = -Math.abs(vy) * 0.85; }
      return { ...d, x, y, vx, vy };
    });

  } else if (phase === 2) {
    const t = eio(Math.min((el - 5.5) / 4, 1));
    nd = dots.map(d => {
      if (d.fi >= 0) {
        const fn = FINAL_NODES[d.fi];
        const spd = 0.018 + t * 0.08;
        return { ...d, x: lerp(d.x, fn.x, spd), y: lerp(d.y, fn.y, spd), op: 1 };
      }
      return { ...d, op: Math.max(0, d.op - 0.010) };
    });

  } else {
    // Phase 3: lock to final positions + breathe
    nd = dots.map(d => {
      if (d.fi >= 0) {
        const fn = FINAL_NODES[d.fi];
        return {
          ...d,
          x: fn.x + Math.sin(el * 0.42 + d.ph) * 1.3,
          y: fn.y + Math.cos(el * 0.36 + d.ph) * 1.0,
          op: 1,
        };
      }
      return { ...d, op: 0 };
    });
  }

  // ── Compute lines ─────────────────────────
  const lines: Line[] = [];

  // Structural edges (phases 2+)
  if (phase >= 2) {
    const t2 = phase === 3 ? 1 : eio(Math.min((el - 5.5) / 4, 1));
    for (const [a, b] of FINAL_EDGES) {
      const da = nd.find(d => d.fi === a)!;
      const db = nd.find(d => d.fi === b)!;
      lines.push({ x1: da.x, y1: da.y, x2: db.x, y2: db.y, op: 0.45 * t2, isFinal: true });
    }
  }

  // Proximity connections (phases 1–2, fade out as structural take over)
  if (phase >= 1) {
    const fadeOut = phase >= 2
      ? Math.max(0, 1 - eio(Math.min((el - 5.5) / 3, 1)))
      : 1;

    if (fadeOut > 0.02) {
      for (let i = 0; i < nd.length; i++) {
        const da = nd[i];
        if (da.op < 0.04) continue;
        for (let j = i + 1; j < nd.length; j++) {
          const db = nd[j];
          if (db.op < 0.04) continue;
          const dist = d2(da.x, da.y, db.x, db.y);
          if (dist < CONN_D) {
            lines.push({
              x1: da.x, y1: da.y, x2: db.x, y2: db.y,
              op: (1 - dist / CONN_D) * 0.22 * Math.min(da.op, db.op) * fadeOut,
              isFinal: false,
            });
          }
        }
      }
    }
  }

  return { dots: nd, lines, phase };
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function HeroSystemDiagram() {
  const [frame, setFrame] = useState<Frame>({
    dots: INIT.map(d => ({ ...d })),
    lines: [],
    phase: 0,
  });
  const buf = useRef<Dot[]>(INIT.map(d => ({ ...d })));
  const rafRef = useRef(0);
  const t0 = useRef(-1);

  useEffect(() => {
    const tick = (ts: number) => {
      if (t0.current < 0) t0.current = ts;
      const el = (ts - t0.current) / 1000;
      const f = computeFrame(buf.current, el);
      buf.current = f.dots;
      setFrame(f);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const { dots, lines } = frame;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      style={{ width: '100%', lineHeight: 0 }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        {/* Lines */}
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1}
            x2={l.x2} y2={l.y2}
            stroke="currentColor"
            strokeWidth={l.isFinal ? 0.75 : 0.55}
            strokeLinecap="round"
            style={{ opacity: l.op }}
          />
        ))}

        {/* Dots */}
        {dots.filter(d => d.op > 0.02).map(d => (
          d.fi >= 0 ? (
            // Final nodes: outlined ring
            <circle
              key={d.id}
              cx={d.x} cy={d.y} r={3.8}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.9}
              style={{ opacity: d.op * 0.8 }}
            />
          ) : (
            // Scatter dots: small filled
            <circle
              key={d.id}
              cx={d.x} cy={d.y} r={2.2}
              fill="currentColor"
              style={{ opacity: d.op * 0.45 }}
            />
          )
        ))}
      </svg>
    </motion.div>
  );
}
