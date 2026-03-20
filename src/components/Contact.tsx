import { personalInfo } from '@/data/content';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>¿Coordinamos</h2>
                    <h2 className={styles.titleAccent}>una llamada?</h2>

                    <p className={styles.text}>
                        Puedes enviarme un mail a{' '}
                        <a href={`mailto:${personalInfo.email}`} className={styles.email}>
                            {personalInfo.email}
                        </a>
                        {' '}para que coordinemos.
                    </p>
                </div>
            </div>
        </section>
    );
}
