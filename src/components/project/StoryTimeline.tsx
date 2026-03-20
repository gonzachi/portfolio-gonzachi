'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './StoryTimeline.module.css';

export interface TimelineStep {
    number: string;
    title: string;
    description: string;
    bullets?: string[];
    emoji?: string;
    illustrationLabel?: string;
    illustrationTitle?: string;
    illustrationText?: string;
}

interface StoryTimelineProps {
    sectionTitle: string;
    intro?: string;
    steps: TimelineStep[];
}

export default function StoryTimeline({ sectionTitle, intro, steps }: StoryTimelineProps) {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        stepRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveStep(index);
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: '-20% 0px -20% 0px',
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [steps.length]);

    return (
        <section className={styles.section}>
            <ScrollReveal className={styles.header}>
                <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                {intro && <p className={styles.sectionIntro}>{intro}</p>}
            </ScrollReveal>

            <div className={styles.stickyContainer}>
                <div className={styles.stepsColumn}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={(el) => { stepRefs.current[index] = el; }}
                            className={`${styles.step} ${index === activeStep ? styles.stepActive : ''}`}
                        >
                            <span className={styles.stepNumber}>{step.number}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                            {step.bullets && step.bullets.length > 0 && (
                                <ul className={styles.stepBullets}>
                                    {step.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                            {(step.illustrationTitle || step.illustrationText) && (
                                <div className={styles.mobileIllustration}>
                                    {step.illustrationTitle && <h4>{step.illustrationTitle}</h4>}
                                    {step.illustrationText && <p>{step.illustrationText}</p>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.illustrationColumn}>
                    <div className={styles.illustrationSticky}>
                        {steps.map((step, index) => {
                            const isTextIllustration = step.illustrationTitle || step.illustrationText;

                            return (
                                <div
                                    key={index}
                                    className={`${styles.illustrationCard} ${index === activeStep ? styles.illustrationCardActive : ''} ${isTextIllustration ? styles.illustrationCardText : ''}`}
                                >
                                    {isTextIllustration ? (
                                        <div className={styles.illustrationTextContent}>
                                            {step.illustrationTitle && <h4 className={styles.illustrationTextTitle}>{step.illustrationTitle}</h4>}
                                            {step.illustrationText && <p className={styles.illustrationTextBody}>{step.illustrationText}</p>}
                                        </div>
                                    ) : (
                                        <>
                                            <span className={styles.illustrationEmoji}>{step.emoji}</span>
                                            {step.illustrationLabel && (
                                                <p className={styles.illustrationLabel}>{step.illustrationLabel}</p>
                                            )}
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
