import ScrollSection from './ScrollSection';
import styles from './ProjectGallery.module.css';

interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

interface ProjectGalleryProps {
    images: ProjectImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
    return (
        <ScrollSection className={styles.section}>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageCard}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.placeholder}>
                                <span>📱</span>
                                <p>{image.alt}</p>
                            </div>
                        </div>
                        {image.caption && <p className={styles.caption}>{image.caption}</p>}
                    </div>
                ))}
            </div>
        </ScrollSection>
    );
}
