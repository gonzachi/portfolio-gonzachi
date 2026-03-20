'use client';

import Link from 'next/link';
import styles from './Projects.module.css';

interface ProjectPreviewCardProps {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    roles: string[];
    imageSrc?: string;
    isReverse?: boolean;
    badge?: string;
}

export default function ProjectPreviewCard({
    id,
    title,
    subtitle,
    type,
    roles,
    imageSrc,
    isReverse = false,
    badge,
}: ProjectPreviewCardProps) {
    const handleClick = () => {
        sessionStorage.setItem('portfolioScrollY', String(window.scrollY));
    };

    const allTags = [type, ...roles];

    return (
        <div className={`${styles.projectRow} ${isReverse ? styles.reverse : ''}`}>
            {/* Text card */}
            <Link
                href={`/project/${id}`}
                className={styles.textCard}
                aria-label={`Ver proyecto: ${title}`}
                onClick={handleClick}
            >
                <div className={styles.cardTop}>
                    {badge && (
                        <span className={styles.recentBadge}>{badge}</span>
                    )}
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardSubtitle}>{subtitle}</p>
                </div>

                <div>
                    <div className={styles.tags}>
                        {allTags.map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.cardBottom}>
                    <div className={styles.plusBtn} aria-hidden="true">+</div>
                </div>
            </Link>

            {/* Image card */}
            <div className={styles.imageCard}>
                {imageSrc ? (
                    imageSrc.endsWith('.mp4') ? (
                        <video
                            className={styles.projectVideo}
                            src={imageSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            className={styles.projectImage}
                            src={imageSrc}
                            alt={title}
                        />
                    )
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span>📱</span>
                    </div>
                )}
            </div>
        </div>
    );
}
