'use client';

import React, { useState } from 'react';
import { SectionLabel } from './Projects';
import { personalInfo } from '@/data/content';
import { useLang } from '@/components/project/LangWrapper';
import styles from './AboutMe.module.css';

// content.ts is Spanish-only and feeds several other (Spanish) views, so
// the English bio lives here as a local override rather than restructuring
// the shared data — same approach as data/chat.ts's EN_COPY.
const INTRO_EN: string[] = [
  "I'm Gonzalo Chiavassa, a Product Designer with an ownership mindset and an end-to-end product vision. I have over 8 years of professional experience. I currently work at Mango, building corporate products focused on improving internal teams' productivity.",
  "In line with my education, I'm currently working toward evolving into a Product Manager role, applying my ability to connect user needs with technical and business goals.",
  "I have over 8 years of experience in product design, and just as many in digital communication.",
];

const BIO_EN: { text: string; bold: string[] }[] = [
  {
    text: "Great that you want to know more about me! My background started in Graphic Design, and then kept evolving. I recently finished my Master's in Digital Product Management, something I'm really excited about as I take on more relevance in digital product decision-making.",
    bold: [],
  },
  {
    text: "This is changing fast, but I'm someone who uses AI strategically to speed up proof-of-concepts, validate hypotheses, and continuously improve products. I think AI is a strategic ally for testing, failing, and improving quickly and cheaply.",
    bold: [],
  },
  {
    text: "Thanks to AI, I've also found a door into trying new processes, workflows and ways of working — which means I'm picking up development knowledge that used to be unfamiliar to me. Today I understand Github, a bit of Next.js, and concepts like PRs, commits, and even cloning a repo and creating a new branch to ship improvements.",
    bold: [],
  },
  {
    text: "I don't want to box myself into a single industry or a single type of company. I like having autonomy and decision-making power. I'm working on my English to communicate better, and alongside that I'm building soft skills so I can communicate effectively.",
    bold: [],
  },
  {
    text: "I'm from Córdoba, Argentina. I've been living in Barcelona for 2 years. I love nature, it's always a great plan for me. I like running — I'm training for the Barcelona half marathon. I like cooking, asados, mate and medialunas. And yes, I'm an Argentinian who doesn't like football.",
    bold: [],
  },
  {
    text: "It'll be a pleasure to get to know each other more.",
    bold: [],
  },
];

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
  const { lang } = useLang();
  const intro = lang === 'en' ? INTRO_EN : personalInfo.aboutIntro;
  const bio = lang === 'en' ? BIO_EN : personalInfo.bio;
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="sobre-mi" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>{lang === 'en' ? 'About me' : 'Sobre mí'}</SectionLabel>
        <div className={styles.content}>
          {intro.map((text, i) => (
            <p key={i} className={styles.paragraph}>
              {text}
            </p>
          ))}

          {expanded && (
            <>
              {bio.map((b, i) => (
                <p key={i} className={styles.paragraph}>
                  {renderBio(b.text, b.bold)}
                </p>
              ))}
            </>
          )}
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded
            ? (lang === 'en' ? 'Show less' : 'Ver menos')
            : (lang === 'en' ? 'Read more' : 'Ver más')}
          <span className={`${styles.toggleIcon} ${expanded ? styles.toggleIconOpen : ''}`}>
            ↓
          </span>
        </button>
      </div>
    </section>
  );
}
