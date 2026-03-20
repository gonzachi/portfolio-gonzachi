'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { experiences } from '@/data/content';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scrollToSlide = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index] as HTMLElement;
        if (!card) return;
        track.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
    }, []);

    const nextSlide = useCallback(() => {
        const next = (activeIndex + 1) % experiences.length;
        setActiveIndex(next);
        scrollToSlide(next);
    }, [activeIndex, scrollToSlide]);

    const goToSlide = useCallback((index: number) => {
        setActiveIndex(index);
        scrollToSlide(index);
    }, [scrollToSlide]);

    const togglePlay = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    // Track scroll position to update active dot
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleScroll = () => {
            const scrollLeft = track.scrollLeft;
            const children = Array.from(track.children) as HTMLElement[];
            let closest = 0;
            let minDist = Infinity;
            children.forEach((child, i) => {
                const dist = Math.abs(child.offsetLeft - 24 - scrollLeft);
                if (dist < minDist) {
                    minDist = dist;
                    closest = i;
                }
            });
            setActiveIndex(closest);
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        return () => track.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(nextSlide, 4000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, nextSlide]);

    return (
        <section className={styles.section} id="experience">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Sobre mi</h2>
                    <h2 className={styles.titleAccent}>experiencia</h2>
                </div>
            </div>

            <div className={styles.carouselTrack} ref={trackRef}>
                {experiences.map((exp) => (
                    <div key={exp.id} className={styles.carouselSlide}>
                        <ExperienceCard experience={exp} />
                    </div>
                ))}
            </div>

            <div className={styles.controls}>
                <div className={styles.dots}>
                    {experiences.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir a experiencia ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    className={styles.playBtn}
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                    {isPlaying ? (
                        <svg viewBox="0 0 24 24">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
                        </svg>
                    )}
                </button>
            </div>

        </section>
    );
}
