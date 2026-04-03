import { landingExperiences } from '@/data/content';
import Image from 'next/image';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <ul className={styles.list}>
          {landingExperiences.map((exp, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.role}>
                {exp.role} en{' '}
                <span className={styles.companyWrapper}>
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={styles.tooltip}>
                    <span className={styles.tooltipHeader}>
                      <Image
                        src={exp.companyInfo.logo}
                        alt={exp.company}
                        width={40}
                        height={40}
                        className={styles.tooltipLogo}
                      />
                      <span className={styles.tooltipMeta}>
                        <span className={styles.tooltipCompany}>
                          {exp.company}
                          <svg className={styles.tooltipLink} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </span>
                        <span className={styles.tooltipUrl}>
                          {exp.companyInfo.url} | Fundada en {exp.companyInfo.founded}
                        </span>
                      </span>
                    </span>
                    <div className={styles.tooltipDesc}>
                      {exp.companyInfo.description.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
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
