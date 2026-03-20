import ScrollSection from './ScrollSection';
import styles from './ProjectMedia.module.css';

interface ProjectMediaProps {
    video?: string;
    caption?: string;
}

export default function ProjectMedia({ video, caption }: ProjectMediaProps) {
    return (
        <ScrollSection className={styles.section}>
            <div className={styles.mediaWrapper}>
                {video ? (
                    <video autoPlay loop muted playsInline aria-label="Video del proyecto">
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <div className={styles.placeholder}>
                        <span>🎬</span>
                        <p>Video del proyecto</p>
                    </div>
                )}
            </div>
            {caption && <p className={styles.caption}>{caption}</p>}
        </ScrollSection>
    );
}
