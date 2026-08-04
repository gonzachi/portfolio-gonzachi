'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MILESTONES = [
  'Launch MVP',
  'Collect Feedback',
  'Prioritize',
  'Design',
  'Build',
  'Validate',
  'Repeat',
];

const W = 840;
const H = 140;
const NODE_W = 100;
const NODE_H = 44;
const Y = 48;

// Spacing calculation
const GAP = (W - MILESTONES.length * NODE_W) / (MILESTONES.length - 1); // ~23.3px
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function ProductEvolutionCycle() {
  return (
    <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', color: 'currentColor' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        aria-hidden="true"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {MILESTONES.map((label, idx) => {
          const x = idx * (NODE_W + GAP);
          const cx = x + NODE_W / 2;
          const cy = Y + NODE_H / 2;
          const isRepeat = idx === MILESTONES.length - 1;
          const delay = idx * 0.12;
          const lineDelay = delay + 0.1;

          return (
            <g key={label}>
              {/* Milestone Box */}
              <motion.g
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay, ease: EASE }}
              >
                <rect
                  x={x}
                  y={Y}
                  width={NODE_W}
                  height={NODE_H}
                  rx={4}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={isRepeat ? 1.25 : 0.75}
                  strokeOpacity={isRepeat ? 0.65 : 0.25}
                  strokeDasharray={isRepeat ? '4 3' : 'none'}
                />

                {/* Step Number */}
                <text
                  x={cx}
                  y={Y + 16}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="8.5"
                  fontWeight="600"
                  fill="currentColor"
                  opacity={0.4}
                  letterSpacing="0.1em"
                >
                  0{idx + 1}
                </text>

                {/* Label */}
                <text
                  x={cx}
                  y={Y + 32}
                  textAnchor="middle"
                  fontFamily="var(--font-body)"
                  fontSize="10.5"
                  fontWeight={isRepeat ? '600' : '500'}
                  fill="currentColor"
                  opacity={isRepeat ? 0.9 : 0.75}
                >
                  {label}
                </text>
              </motion.g>

              {/* Connecting Vector Line between milestones */}
              {idx < MILESTONES.length - 1 && (
                <g>
                  <motion.line
                    x1={x + NODE_W}
                    y1={cy}
                    x2={x + NODE_W + GAP}
                    y2={cy}
                    stroke="currentColor"
                    strokeWidth={0.8}
                    strokeOpacity={0.3}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      pathLength: { duration: 0.25, delay: lineDelay, ease: EASE },
                      opacity: { duration: 0.01, delay: lineDelay },
                    }}
                  />
                  <motion.path
                    d={`M ${x + NODE_W + GAP - 5} ${cy - 3} L ${x + NODE_W + GAP} ${cy} L ${x + NODE_W + GAP - 5} ${cy + 3}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.8}
                    strokeOpacity={0.35}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15, delay: lineDelay + 0.15 }}
                  />
                </g>
              )}

              {/* Returning Cycle Loop Arc from Repeat back toward start */}
              {isRepeat && (
                <motion.path
                  d={`M ${cx} ${Y + NODE_H + 4} C ${cx} ${H - 5}, ${NODE_W / 2} ${H - 5}, ${NODE_W / 2} ${Y + NODE_H + 4}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={0.8}
                  strokeOpacity={0.25}
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: lineDelay + 0.2, ease: EASE }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
