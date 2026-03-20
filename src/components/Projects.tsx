import { projects } from '@/data/content';
import ProjectPreviewCard from './ProjectPreviewCard';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Hablemos de</h2>
                    <h2 className={styles.titleAccent}>proyectos</h2>
                </div>

                <div className={styles.projectList}>
                    {projects.map((project, index) => (
                        <ProjectPreviewCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            subtitle={project.subtitle}
                            type={project.type}
                            roles={project.roles}
                            badge={(project as any).badge}
                            imageSrc={project.video || (project as any).images?.[0]?.src || undefined}
                            isReverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
