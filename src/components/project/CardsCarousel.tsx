"use client";

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './CardsCarousel.module.css';

interface CardItem {
    imgName: string;
    title: string;
    desc: string;
}

interface CardsCarouselProps {
    cards: CardItem[];
}

export default function CardsCarousel({ cards }: CardsCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const goTo = useCallback((index: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const target = Math.max(0, Math.min(index, cards.length - 1));
        
        const slideEl = el.querySelector(`.${styles.carouselSlide}`);
        if (slideEl) {
            const slideWidth = slideEl.clientWidth;
            const gap = parseFloat(window.getComputedStyle(el).gap) || 24;
            el.scrollTo({ left: (slideWidth + gap) * target, behavior: 'smooth' });
            setCurrent(target);
        }
    }, [cards.length]);

    const prev = () => goTo(current - 1);
    const next = () => {
        if (!isAtEnd) {
            goTo(current + 1);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const slideEl = el.querySelector(`.${styles.carouselSlide}`);
            if (slideEl) {
                const slideWidth = slideEl.clientWidth;
                const gap = parseFloat(window.getComputedStyle(el).gap) || 24;
                const step = slideWidth + gap;
                
                const newIndex = Math.round(el.scrollLeft / step);
                if (newIndex >= 0 && newIndex < cards.length) {
                    setCurrent(newIndex);
                }

                const maxScrollLeft = el.scrollWidth - el.clientWidth;
                setIsAtEnd(el.scrollLeft >= maxScrollLeft - 5);
            }
        };

        el.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => el.removeEventListener('scroll', handleScroll);
    }, [cards.length]);

    return (
        <div className={styles.carouselContainer}>
            {/* Left navigation arrow */}
            <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prev}
                disabled={current === 0}
                aria-label="Tarjeta anterior"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            <div className={styles.carouselWrapper}>
                <div className={styles.scrollArea} ref={scrollRef}>
                    {cards.map((card, i) => (
                        <div key={i} className={styles.carouselSlide}>
                            <div className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imageInner}>
                                        <Image
                                            src={`/assets/projects/app-holdo/${card.imgName}`}
                                            alt={card.title}
                                            width={240}
                                            height={480}
                                            className={styles.screenshotImage}
                                        />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <p className={styles.cardDesc}>{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right navigation arrow */}
            <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={next}
                disabled={isAtEnd}
                aria-label="Tarjeta siguiente"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

        </div>
    );
}
