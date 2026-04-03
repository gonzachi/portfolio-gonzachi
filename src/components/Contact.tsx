import { personalInfo } from '@/data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Hablemos,</h2>
          <h2 className={styles.titleAccent}>contacto.</h2>
        </div>
        <p className={styles.text}>
          Si te interesa lo que viste, escribime a{' '}
          <a href={`mailto:${personalInfo.email}`} className={styles.email}>
            {personalInfo.email}
          </a>
          {' '}y coordinamos una llamada.
        </p>
        <div className={styles.links}>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}
