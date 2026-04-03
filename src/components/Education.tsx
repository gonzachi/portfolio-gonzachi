import { education } from '@/data/content';
import Image from 'next/image';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.container}>
        <ul className={styles.list}>
          {education.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.info}>
                <span className={styles.degree}>{item.title}</span>
                <span className={styles.separator}> en </span>
                <span className={styles.institutionWrapper}>
                  <span className={styles.institutionName}>{item.institution}</span>
                  <span className={styles.tooltip}>
                    <span className={styles.tooltipHeader}>
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        width={40}
                        height={40}
                        className={styles.tooltipLogo}
                      />
                      <span className={styles.tooltipMeta}>
                        <span className={styles.tooltipCompany}>
                          {item.institution}
                          <svg className={styles.tooltipLink} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </span>
                        <span className={styles.tooltipUrl}>{item.institutionInfo.url}</span>
                      </span>
                    </span>
                    <p className={styles.tooltipDesc}>{item.institutionInfo.description}</p>
                  </span>
                </span>
              </span>
              <span className={styles.period}>{item.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
