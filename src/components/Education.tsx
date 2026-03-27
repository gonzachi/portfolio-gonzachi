import Image from 'next/image';
import { education, personalInfo } from '@/data/content';
import styles from './Education.module.css';

export default function Education() {
    return (
        <section className={styles.section} id="education">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.titleGroup}>
                            <h2 className={styles.title}>Sobre mis</h2>
                            <h2 className={styles.titleAccent}>estudios</h2>
                        </div>

                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkedinBtn}
                        >
                            <svg viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                            Puedes conocer más en LinkedIn
                        </a>
                    </div>

                    <div className={styles.grid}>
                        {education.map((edu) => (
                            <div key={edu.id} className={styles.card}>
                                {edu.logo ? (
                                    <Image
                                        src={edu.logo}
                                        alt={`${edu.institution} logo`}
                                        width={60}
                                        height={60}
                                        className={styles.institutionLogo}
                                    />
                                ) : (
                                    <div className={styles.logoPlaceholder}>
                                        {edu.institution.charAt(0)}
                                    </div>
                                )}
                                <div className={styles.cardContent}>
                                    <h3 className={styles.eduTitle}>{edu.title}</h3>
                                    <p className={styles.institution}>{edu.institution}</p>
                                    <span className={styles.period}>{edu.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
