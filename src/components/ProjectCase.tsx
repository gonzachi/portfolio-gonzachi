import styles from './ProjectCase.module.css';

interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

interface Project {
    id: string;
    number: string;
    title: string;
    type: string;
    roles: string[];
    description: string[];
    video?: string;
    images?: ProjectImage[];
    note?: string;
    behanceLink?: string;
}

interface ProjectCaseProps {
    project: Project;
}

export default function ProjectCase({ project }: ProjectCaseProps) {
    return (
        <article className={styles.project}>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <span className={styles.number}>{project.number}</span>
                    <h3 className={styles.title}>{project.title}</h3>

                    <div className={styles.description}>
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.meta}>
                        <span className={styles.type}>{project.type}</span>
                        {project.roles.map((role) => (
                            <span key={role} className={styles.role}>{role}</span>
                        ))}
                    </div>

                    {project.behanceLink && (
                        <a
                            href={project.behanceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.behanceBtn}
                        >
                            <svg viewBox="0 0 576 512" width="18" height="18" fill="currentColor">
                                <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                            </svg>
                            Ir a Behance
                        </a>
                    )}
                </div>

                <div className={styles.mediaContent}>
                    <div className={styles.videoContainer}>
                        <div className={styles.videoPlaceholder}>
                            <span>🎬</span>
                            <p>Video del proyecto</p>
                            <small>Prototipo Figma</small>
                        </div>
                    </div>

                    {project.note && (
                        <div className={styles.infoBox}>
                            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                                <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                            </svg>
                            <span>{project.note}</span>
                        </div>
                    )}
                </div>
            </div>

            {project.images && project.images.length > 0 && (
                <div className={styles.imageGrid}>
                    {project.images.map((image, index) => (
                        <div key={index} className={styles.imageCard}>
                            <div className={styles.imagePlaceholder}>
                                <span>📱</span>
                                <p>{image.alt}</p>
                            </div>
                            {image.caption && (
                                <p className={styles.imageCaption}>{image.caption}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
}
