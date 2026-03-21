import styles from './Projects.module.css';

export default function ProjectsWIP() {
    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Hablemos de</h2>
                    <h2 className={styles.titleAccent}>proyectos</h2>
                </div>
                
                <div style={{
                    padding: '4rem 2rem', 
                    textAlign: 'center', 
                    background: 'var(--color-bg-card)', 
                    borderRadius: 'var(--radius-xl)',
                    border: '1px dashed var(--color-border)'
                }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🚧</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                        Sección en construcción
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.5' }}>
                        Estoy trabajando en un nuevo diseño para mostrar mis proyectos con más detalle. ¡Vuelve pronto!
                    </p>
                </div>
            </div>
        </section>
    );
}
