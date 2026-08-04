'use client';

import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   Layout constants (SVG coordinate space)
───────────────────────────────────────────────────────────── */
const W = 760;
const H = 420;

// Left column (Traditional)
const LX = 170;
// Right column (Future)
const RX = 590;
// Center arrow X span
const ARR_X1 = 270;
const ARR_X2 = 490;
const ARR_Y  = H / 2;  // vertical center

// Node rows
const ROWS = [60, 135, 210, 285, 360];
const NODE_W = 150;
const NODE_H = 38;

const TRAD_STEPS = ['References', 'Moodboards', 'Photoshop', 'Concept', 'Decision'];
const FUTURE_STEPS = ['AI Exploration', null, null, null, null]; // null = question mark

/* Connector line draw transition */
const lineDraw = (delay: number) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: {
    pathLength: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    opacity: { duration: 0.01, delay },
  },
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function OpportunityDiagram() {
  return (
    <div style={{ width: '100%', maxWidth: '680px', margin: '0 auto', color: 'currentColor', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        aria-hidden="true"
        style={{ overflow: 'visible', display: 'block' }}
      >
        {/* ── COLUMN HEADERS ── */}
        <motion.text
          x={LX} y={28}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1.8"
          fill="currentColor"
          style={{ textTransform: 'uppercase' } as React.CSSProperties}
          {...fadeUp(0.05)}
          opacity={0.42}
        >
          TRADITIONAL WORKFLOW
        </motion.text>

        <motion.text
          x={RX} y={28}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1.8"
          fill="currentColor"
          style={{ textTransform: 'uppercase' } as React.CSSProperties}
          {...fadeUp(0.1)}
          opacity={0.42}
        >
          FUTURE WORKFLOW
        </motion.text>

        {/* ── TRADITIONAL: nodes + connectors ── */}
        {TRAD_STEPS.map((label, i) => {
          const cy = ROWS[i];
          const rx = LX - NODE_W / 2;
          const ry = cy - NODE_H / 2;
          return (
            <g key={`trad-${i}`}>
              {/* Node rect */}
              <motion.rect
                x={rx} y={ry}
                width={NODE_W} height={NODE_H}
                rx={3}
                fill="none"
                stroke="currentColor"
                strokeWidth={0.75}
                strokeOpacity={0.3}
                {...fadeUp(0.1 + i * 0.07)}
              />
              <motion.text
                x={LX} y={cy + 5}
                textAnchor="middle"
                fontFamily="var(--font-body)"
                fontSize="12.5"
                fontWeight="500"
                fill="currentColor"
                {...fadeUp(0.12 + i * 0.07)}
                opacity={0.72}
              >
                {label}
              </motion.text>

              {/* Vertical connector down */}
              {i < TRAD_STEPS.length - 1 && (
                <motion.line
                  x1={LX} y1={cy + NODE_H / 2}
                  x2={LX} y2={ROWS[i + 1] - NODE_H / 2}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeOpacity={0.25}
                  {...lineDraw(0.15 + i * 0.09)}
                />
              )}
            </g>
          );
        })}

        {/* ── FUTURE: nodes + connectors ── */}
        {FUTURE_STEPS.map((label, i) => {
          const cy = ROWS[i];
          const rx = RX - NODE_W / 2;
          const ry = cy - NODE_H / 2;
          const isFilled = i === 0;
          return (
            <g key={`future-${i}`}>
              {/* Node rect */}
              <motion.rect
                x={rx} y={ry}
                width={NODE_W} height={NODE_H}
                rx={3}
                fill="none"
                stroke="currentColor"
                strokeWidth={isFilled ? 1 : 0.75}
                strokeOpacity={isFilled ? 0.7 : 0.2}
                strokeDasharray={isFilled ? 'none' : '4 3'}
                {...fadeUp(0.2 + i * 0.07)}
              />
              <motion.text
                x={RX} y={cy + 5}
                textAnchor="middle"
                fontFamily="var(--font-body)"
                fontSize={isFilled ? '12.5' : '16'}
                fontWeight={isFilled ? '500' : '300'}
                fill="currentColor"
                {...fadeUp(0.22 + i * 0.07)}
                opacity={isFilled ? 0.8 : 0.3}
              >
                {isFilled ? label : '?'}
              </motion.text>

              {/* Vertical connector — dashed for future */}
              {i < FUTURE_STEPS.length - 1 && (
                <motion.line
                  x1={RX} y1={cy + NODE_H / 2}
                  x2={RX} y2={ROWS[i + 1] - NODE_H / 2}
                  stroke="currentColor"
                  strokeWidth={0.85}
                  strokeOpacity={0.18}
                  strokeDasharray="3 4"
                  {...lineDraw(0.25 + i * 0.09)}
                />
              )}
            </g>
          );
        })}

        {/* ── CENTER OPPORTUNITY ARROW ── */}
        {/* Horizontal line */}
        <motion.line
          x1={ARR_X1} y1={ARR_Y}
          x2={ARR_X2 - 10} y2={ARR_Y}
          stroke="currentColor"
          strokeWidth={1}
          strokeOpacity={0.35}
          {...lineDraw(0.45)}
        />
        {/* Arrowhead */}
        <motion.path
          d={`M${ARR_X2 - 14} ${ARR_Y - 7} L${ARR_X2} ${ARR_Y} L${ARR_X2 - 14} ${ARR_Y + 7}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeOpacity={0.35}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...lineDraw(0.52)}
        />

        {/* OPPORTUNITY label above arrow */}
        <motion.text
          x={(ARR_X1 + ARR_X2) / 2} y={ARR_Y - 16}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fontWeight="600"
          letterSpacing="2"
          fill="currentColor"
          {...fadeUp(0.48)}
          opacity={0.4}
        >
          OPPORTUNITY
        </motion.text>

        {/* Unexplored label below arrow */}
        <motion.text
          x={(ARR_X1 + ARR_X2) / 2} y={ARR_Y + 22}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fontStyle="italic"
          fill="currentColor"
          {...fadeUp(0.52)}
          opacity={0.28}
        >
          Unexplored territory
        </motion.text>
      </svg>
    </div>
  );
}
