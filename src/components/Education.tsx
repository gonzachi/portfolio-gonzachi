import { education } from '@/data/content';
import Image from 'next/image';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section className={styles.section} id="formacion">
      <div className={styles.container}>
        <div className="reveal section-label">
          <span>Formación</span>
          <div className="section-label-line" />
        </div>
        <ul className={styles.list}>
          {education.map((item, i) => (
            <li key={item.id} className={`reveal reveal-delay-${i % 4} ${styles.item}`}>
              <Image
                src={item.logo}
                alt={item.institution}
                width={38}
                height={38}
                className={styles.logo}
              />
              <div className={styles.info}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.institution}>{item.institution}</div>
              </div>
              <span className={styles.period}>{item.period}</span>
            </li>
          ))}
        </ul>
        <div className={`reveal ${styles.languages}`}>
          <span className={styles.langItem}>Español nativo</span>
          <span className={styles.langSep}>·</span>
          <span className={styles.langItem}>Inglés A2 — <em>Actualmente estudiando</em></span>
        </div>
      </div>
    </section>
  );
}
