import Image from 'next/image';
import styles from './ProjectHeroImage.module.css';

interface ProjectHeroImageProps {
    src?: string;
    alt?: string;
}

export default function ProjectHeroImage({ src, alt = 'Proyecto hero image' }: ProjectHeroImageProps) {
    return (
        <section className={styles.heroImage}>
            <div className={styles.imageWrapper}>
                {src ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>🖼️</span>
                        <p>Imagen del proyecto</p>
                    </div>
                )}
            </div>
        </section>
    );
}
