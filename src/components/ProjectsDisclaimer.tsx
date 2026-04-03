import styles from './ProjectsDisclaimer.module.css';

export default function ProjectsDisclaimer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Algunos</h2>
          <h2 className={styles.titleAccent}>proyectos</h2>
        </div>
        <p className={styles.disclaimer}>
          Aquí presento algunos proyectos en los que estuve participando. Los muestro brevemente para no violar contratos de privacidad. Si quieres saber más podemos ponernos en contacto y hablamos.
        </p>
        <div className={styles.arrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
