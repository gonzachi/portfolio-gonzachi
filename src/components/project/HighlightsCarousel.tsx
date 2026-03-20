'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './HighlightsCarousel.module.css';

export interface HighlightCard {
    title: string;
    description?: string;
    emoji?: string;
}

interface HighlightsCarouselProps {
    sectionTitle?: string;
    cards: HighlightCard[];
    autoPlayInterval?: number;
}

export default function HighlightsCarousel({
    sectionTitle = 'Lo principal.',
    cards,
    autoPlayInterval = 4000,
}: HighlightsCarouselProps) {
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
        const next = (activeIndex + 1) % cards.length;
        setActiveIndex(next);
        scrollToSlide(next);
    }, [activeIndex, cards.length, scrollToSlide]);

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
            intervalRef.current = setInterval(nextSlide, autoPlayInterval);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPlaying, nextSlide, autoPlayInterval]);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{sectionTitle}</h2>

            <div className={styles.carouselTrack} ref={trackRef}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        {card.emoji && (
                            <span className={styles.cardPlaceholder}>{card.emoji}</span>
                        )}
                        <p className={styles.cardTitle}>{card.title}</p>
                        {card.description && (
                            <p className={styles.cardDescription}>{card.description}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.controls}>
                <div className={styles.dots}>
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir a slide ${index + 1}`}
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
