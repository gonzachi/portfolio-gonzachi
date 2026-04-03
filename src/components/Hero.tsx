import { personalInfo } from '@/data/content';
import styles from './Hero.module.css';

function renderWithHighlights(text: string, highlights: string[]) {
  let parts: (string | React.ReactElement)[] = [text];

  highlights.forEach((phrase) => {
    parts = parts.flatMap((part, partIdx) => {
      if (typeof part !== 'string') return [part];
      const segments = part.split(phrase);
      return segments.reduce<(string | React.ReactElement)[]>((acc, seg, i) => {
        if (i < segments.length - 1) {
          acc.push(seg);
          acc.push(
            <mark key={`${phrase}-${partIdx}-${i}`} className={styles.highlight}>
              {phrase}
            </mark>
          );
        } else {
          acc.push(seg);
        }
        return acc;
      }, []);
    });
  });

  return <>{parts}</>;
}

import React from 'react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.hello}>Hola,</h1>
          <h1 className={styles.welcome}>welcome.</h1>
        </div>
        <div className={styles.bio}>
          {personalInfo.landingBio.map((paragraph, index) => (
            <p key={index}>
              {renderWithHighlights(paragraph, personalInfo.bioHighlights)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
