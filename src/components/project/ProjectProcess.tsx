import ScrollSection from './ScrollSection';
import styles from './ProjectProcess.module.css';

interface ProjectProcessProps {
    timeline: string[];
}

export default function ProjectProcess({ timeline }: ProjectProcessProps) {
    return (
        <ScrollSection className={styles.section} id="proceso">
            <p className={styles.label}>El proceso</p>
            <div className={styles.timeline} role="list" aria-label="Fases del proyecto">
                <div className={styles.line} aria-hidden="true" />
                {timeline.map((step, index) => (
                    <div key={index} className={styles.step} role="listitem">
                        <div className={styles.stepDot} aria-hidden="true" />
                        <span className={styles.stepLabel}>{step}</span>
                    </div>
                ))}
            </div>
        </ScrollSection>
    );
}
