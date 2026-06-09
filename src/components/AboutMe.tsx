'use client';

import React from 'react';
import { SectionLabel } from './Projects';
import { personalInfo } from '@/data/content';
import styles from './AboutMe.module.css';

function renderBio(text: string, boldPhrases: string[]) {
  if (!boldPhrases.length) return text;

  const parts: (string | React.ReactNode)[] = [text];

  for (const phrase of boldPhrases) {
    const newParts: (string | React.ReactNode)[] = [];
    for (const part of parts) {
      if (typeof part !== 'string') {
        newParts.push(part);
        continue;
      }
      const idx = part.indexOf(phrase);
      if (idx === -1) {
        newParts.push(part);
        continue;
      }
      const before = part.slice(0, idx);
      const after = part.slice(idx + phrase.length);
      if (before) newParts.push(before);
      newParts.push(<strong key={phrase} className={styles.bold}>{phrase}</strong>);
      if (after) newParts.push(after);
    }
    parts.length = 0;
    parts.push(...newParts);
  }

  return <>{parts}</>;
}

export default function AboutMe() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>Sobre mí</SectionLabel>
        <div className={styles.content}>
          {personalInfo.bio.map((b, i) => (
            <p key={i} className={styles.paragraph}>
              {renderBio(b.text, b.bold)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
