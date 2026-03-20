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
                    <img src={src} alt={alt} />
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
