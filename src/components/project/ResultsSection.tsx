'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ResultsSection.module.css';

export interface ResultCard {
    icon: string;
    label: string;
    title: string;
    description: string;
}

interface ResultsSectionProps {
    intro: string;
    cards: ResultCard[];
}

export default function ResultsSection({ intro, cards }: ResultsSectionProps) {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = sectionRef.current;
        if (!ref) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <p className={styles.intro}>{intro}</p>

            <div className={styles.grid}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <span className={styles.cardIcon}>{card.icon}</span>
                        <span className={styles.cardLabel}>{card.label}</span>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
