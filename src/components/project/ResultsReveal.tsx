"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './ResultsReveal.module.css';

interface Stat {
    highlight: string;
    detail: string;
    icon?: string;
}

interface ResultsRevealProps {
    title: string;
    stats: Stat[];
    closingText: string;
    footerText?: string;
    showGrowthCurve?: boolean;
}

function useInView(threshold = 0.4) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}

function GrowthCurve() {
    const { ref, isVisible } = useInView(0.5);

    // Simple curve from 10 to 300
    const points = [
        { x: 0, y: 97 },    // 10 users — near bottom
        { x: 20, y: 90 },
        { x: 40, y: 78 },
        { x: 55, y: 60 },
        { x: 70, y: 40 },
        { x: 85, y: 18 },
        { x: 100, y: 3 },   // 300 users — near top
    ];

    const pathD = points
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`)
        .join(' ');

    return (
        <div ref={ref} className={`${styles.growthCurve} ${isVisible ? styles.growthVisible : ''}`}>
            <div className={styles.growthLabels}>
                <span className={styles.growthLabelStart}>10 usuarios</span>
                <span className={styles.growthLabelEnd}>300 usuarios</span>
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.growthSvg}>
                <path
                    d={pathD}
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="0.5"
                    className={styles.growthLine}
                />
                <path
                    d={pathD}
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1"
                    className={styles.growthLineAnimated}
                />
            </svg>
        </div>
    );
}

export default function ResultsReveal({ title, stats, closingText, footerText, showGrowthCurve = false }: ResultsRevealProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>{title}</h2>
            </div>

            <div className={styles.statsGrid}>
                {stats.map((stat, index) => {
                    return (
                        <StatCard key={index} stat={stat} index={index} />
                    );
                })}
            </div>

            {showGrowthCurve && (
                <div className={styles.growthContainer}>
                    <GrowthCurve />
                </div>
            )}

            <div className={styles.closingContainer}>
                <ClosingText text={closingText} footerText={footerText} />
            </div>
        </div>
    );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
    const { ref, isVisible } = useInView(0.2);

    return (
        <div
            ref={ref}
            className={`${styles.statCard} ${isVisible ? styles.statVisible : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            {stat.icon && (
                <svg className={styles.statIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={stat.icon} />
                </svg>
            )}
            <span className={styles.statHighlight} style={{ transitionDelay: `${index * 0.15}s` }}>{stat.highlight}</span>
            <span className={styles.statDetail} style={{ transitionDelay: `${index * 0.15 + 0.2}s` }}>{stat.detail}</span>
        </div>
    );
}

function ClosingText({ text, footerText }: { text: string; footerText?: string }) {
    const { ref, isVisible } = useInView(0.4);

    return (
        <div ref={ref} className={`${styles.closingTextWrapper} ${isVisible ? styles.closingVisible : ''}`}>
            <p className={styles.closingText}>{text}</p>
            {footerText && <p className={styles.footerText}>{footerText}</p>}
        </div>
    );
}
