import { landingExperiences } from '@/data/content';
import Image from 'next/image';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.section} id="experiencia">
      <div className={styles.container}>
        <div className="reveal section-label">
          <span>Experiencia</span>
          <div className="section-label-line" />
        </div>
        <ul className={styles.list}>
          {landingExperiences.map((exp, index) => (
            <li key={index} className={`reveal reveal-delay-${index % 4} ${styles.item}`}>
              <span className={styles.role}>
                {exp.role} en{' '}
                <span className={styles.companyWrapper}>
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={`${styles.tooltip} exp-tooltip`}>
                    <span className={styles.tooltipHeader}>
                      <Image
                        src={exp.companyInfo.logo}
                        alt={exp.company}
                        width={34}
                        height={34}
                        className={styles.tooltipLogo}
                      />
                      <span className={styles.tooltipMeta}>
                        <span className={styles.tooltipCompany}>{exp.company}</span>
                        <span className={styles.tooltipUrl}>
                          {exp.companyInfo.url} · desde {exp.companyInfo.founded}
                        </span>
                      </span>
                    </span>
                    <p className={styles.tooltipDesc}>
                      {exp.companyInfo.description.split('\n\n').map((para, i) => (
                        <span key={i}>{i > 0 && <br />}{para}</span>
                      ))}
                    </p>
                  </span>
                </span>
              </span>
              <span className={styles.period}>{exp.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
