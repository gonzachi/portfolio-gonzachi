'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function BigInsightVisual() {
  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto', color: 'currentColor' }}>
      <svg
        viewBox="0 0 640 340"
        width="100%"
        aria-hidden="true"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* STAGE 1: IDEA */}
        <motion.g
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <rect
            x={180}
            y={20}
            width={280}
            height={60}
            rx={4}
            fill="none"
            stroke="currentColor"
            strokeWidth={0.75}
            strokeOpacity={0.25}
          />
          <text
            x={320}
            y={46}
            textAnchor="middle"
            fontFamily="var(--font-heading)"
            fontSize="14"
            fontWeight="700"
            fill="currentColor"
            opacity={0.85}
            letterSpacing="0.08em"
          >
            IDEA
          </text>
          <text
            x={320}
            y={65}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fontWeight="400"
            fill="currentColor"
            opacity={0.4}
            fontStyle="italic"
          >
            abstract, undefined
          </text>
        </motion.g>

        {/* CONNECTING LINE 1 */}
        <motion.line
          x1={320}
          y1={80}
          x2={320}
          y2={130}
          stroke="currentColor"
          strokeWidth={0.85}
          strokeOpacity={0.3}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { duration: 0.3, delay: 0.25, ease: EASE },
            opacity: { duration: 0.01, delay: 0.25 },
          }}
        />

        {/* Down Arrow Head 1 */}
        <motion.path
          d="M 315 124 L 320 131 L 325 124"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.85}
          strokeOpacity={0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.5 }}
        />

        {/* STAGE 2: EXPLORATION */}
        <motion.g
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.52, ease: EASE }}
        >
          <rect
            x={140}
            y={135}
            width={360}
            height={68}
            rx={4}
            fill="none"
            stroke="currentColor"
            strokeWidth={0.75}
            strokeOpacity={0.25}
          />
          <text
            x={320}
            y={161}
            textAnchor="middle"
            fontFamily="var(--font-heading)"
            fontSize="14"
            fontWeight="700"
            fill="currentColor"
            opacity={0.85}
            letterSpacing="0.08em"
          >
            EXPLORATION
          </text>
          <text
            x={320}
            y={182}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9.5"
            fontWeight="500"
            fill="currentColor"
            opacity={0.5}
          >
            References · Moodboards · Photoshop · Manual iterations
          </text>
        </motion.g>

        {/* CONNECTING LINE 2 */}
        <motion.line
          x1={320}
          y1={203}
          x2={320}
          y2={253}
          stroke="currentColor"
          strokeWidth={0.85}
          strokeOpacity={0.3}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { duration: 0.3, delay: 0.75, ease: EASE },
            opacity: { duration: 0.01, delay: 0.75 },
          }}
        />

        {/* Down Arrow Head 2 */}
        <motion.path
          d="M 315 247 L 320 254 L 325 247"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.85}
          strokeOpacity={0.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1.0 }}
        />

        {/* STAGE 3: VISUAL CONCEPT */}
        <motion.g
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 1.02, ease: EASE }}
        >
          <rect
            x={160}
            y={258}
            width={320}
            height={62}
            rx={4}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.25}
            strokeOpacity={0.65}
          />
          <text
            x={320}
            y={285}
            textAnchor="middle"
            fontFamily="var(--font-heading)"
            fontSize="15"
            fontWeight="700"
            fill="currentColor"
            opacity={0.95}
            letterSpacing="0.08em"
          >
            VISUAL CONCEPT
          </text>
          <text
            x={320}
            y={304}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fontWeight="400"
            fill="currentColor"
            opacity={0.45}
            fontStyle="italic"
          >
            clear, discussable, testable
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
