'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './RoadmapSection.module.css';

export interface RoadmapItem {
    icon: string;
    title: string;
    description: string;
}

interface RoadmapSectionProps {
    sectionTitle: string;
    intro: string;
    items: RoadmapItem[];
}

export default function RoadmapSection({ sectionTitle, intro, items }: RoadmapSectionProps) {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        itemRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setVisibleItems((prev) => new Set(prev).add(index));
                    }
                },
                { threshold: 0.3 }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [items.length]);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
                <p className={styles.intro}>{intro}</p>
            </div>

            <div className={styles.items}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { itemRefs.current[index] = el; }}
                        className={`${styles.item} ${visibleItems.has(index) ? styles.itemVisible : ''}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className={styles.itemIcon}>
                            <span>{item.icon}</span>
                        </div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
