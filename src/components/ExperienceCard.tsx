import Image from 'next/image';
import styles from './ExperienceCard.module.css';

interface Experience {
    id: string;
    company: string;
    logo: string;
    location: string;
    role: string;
    period: string;
    description: string;
}

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                {experience.logo ? (
                    <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={60}
                        height={60}
                        className={styles.companyLogo}
                    />
                ) : (
                    <div className={styles.logoPlaceholder}>
                        {experience.company.charAt(0)}
                    </div>
                )}
                <div className={styles.companyInfo}>
                    <h3 className={styles.company}>{experience.company}</h3>
                    <p className={styles.location}>{experience.location}</p>
                </div>
            </div>

            <div className={styles.roleInfo}>
                <h4 className={styles.role}>{experience.role}</h4>
                <span className={styles.period}>{experience.period}</span>
            </div>

            <p className={styles.description}>{experience.description}</p>
        </div>
    );
}
