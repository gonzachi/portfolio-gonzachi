import ScrollSection from './ScrollSection';
import styles from './ProjectDetails.module.css';

interface ProjectDetailsProps {
    roleDescription?: string;
    challenge?: string;
    team?: string;
    tools?: string[];
}

export default function ProjectDetails({ roleDescription, challenge, team, tools }: ProjectDetailsProps) {
    return (
        <ScrollSection className={styles.section} id="detalle">
            <div className={styles.grid}>
                {roleDescription && (
                    <div className={styles.block}>
                        <span className={styles.label}>Mi rol</span>
                        <p className={styles.text}>{roleDescription}</p>
                    </div>
                )}
                {challenge && (
                    <div className={styles.block}>
                        <span className={styles.label}>El reto</span>
                        <p className={styles.text}>{challenge}</p>
                    </div>
                )}
                {team && (
                    <div className={styles.block}>
                        <span className={styles.label}>Equipo</span>
                        <p className={styles.text}>{team}</p>
                    </div>
                )}
                {tools && tools.length > 0 && (
                    <div className={styles.block}>
                        <span className={styles.label}>Herramientas</span>
                        <div className={styles.pills} role="list" aria-label="Herramientas utilizadas">
                            {tools.map((tool) => (
                                <span key={tool} className={styles.pill} role="listitem">{tool}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </ScrollSection>
    );
}
