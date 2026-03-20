'use client';

import ScrollSection from './ScrollSection';
import styles from './ProjectMetrics.module.css';

interface Metric {
    value: string;
    label: string;
}

interface ProjectMetricsProps {
    metrics: Metric[];
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
    return (
        <ScrollSection className={styles.section} id="metricas">
            <div className={styles.grid} role="list" aria-label="Métricas del proyecto">
                {metrics.map((metric, index) => (
                    <div key={index} className={styles.metric} role="listitem">
                        <span className={styles.value}>{metric.value}</span>
                        <span className={styles.label}>{metric.label}</span>
                    </div>
                ))}
            </div>
        </ScrollSection>
    );
}
