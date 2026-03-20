import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/content';
import ProjectNav from '@/components/project/ProjectNav';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectHeroImage from '@/components/project/ProjectHeroImage';
import ProjectMedia from '@/components/project/ProjectMedia';
import ProjectProcess from '@/components/project/ProjectProcess';
import ProjectMetrics from '@/components/project/ProjectMetrics';
import ProjectDetails from '@/components/project/ProjectDetails';
import ProjectGallery from '@/components/project/ProjectGallery';
import ScrollSection from '@/components/project/ScrollSection';
import HighlightsCarousel from '@/components/project/HighlightsCarousel';
import StoryTimeline from '@/components/project/StoryTimeline';
import ResultsSection from '@/components/project/ResultsSection';
import ResultsReveal from '@/components/project/ResultsReveal';
import RoadmapSection from '@/components/project/RoadmapSection';
import DeviceShowcase from '@/components/project/DeviceShowcase';
import ScrollToTop from '@/components/ScrollToTop';
import SidebarProgress from '@/components/project/SidebarProgress';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const projectIndex = projects.findIndex((p) => p.id === id);

    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    // Type-safe access to optional new fields
    const subtitle = (project as Record<string, unknown>).subtitle as string | undefined;
    const tools = (project as Record<string, unknown>).tools as string[] | undefined;
    const timeline = (project as Record<string, unknown>).timeline as string[] | undefined;
    const metrics = (project as Record<string, unknown>).metrics as { value: string; label: string }[] | undefined;
    const roleDescription = (project as Record<string, unknown>).roleDescription as string | undefined;
    const challenge = (project as Record<string, unknown>).challenge as string | undefined;
    const team = (project as Record<string, unknown>).team as string | undefined;
    const heroImage = (project as Record<string, unknown>).heroImage as string | undefined;
    const highlights = (project as Record<string, unknown>).highlights as { title: string; description?: string; emoji?: string }[] | undefined;
    const storySteps = (project as Record<string, unknown>).storySteps as { number: string; title: string; description: string; bullets?: string[]; emoji: string; illustrationLabel?: string }[] | undefined;
    const results = (project as Record<string, unknown>).results as { intro: string; cards: { icon: string; label: string; title: string; description: string }[] } | undefined;
    const roadmap = (project as Record<string, unknown>).roadmap as { intro: string; items: { icon: string; title: string; description: string }[] } | undefined;
    const context = (project as Record<string, unknown>).context as { title: string; description: string[]; milestones?: string[] } | undefined;
    const problem = (project as Record<string, unknown>).problem as { title: string; statement: string; description: string[] } | undefined;
    const resultsReveal = (project as Record<string, unknown>).resultsReveal as { title: string; stats: { value: string; label: string }[]; closingText: string; showGrowthCurve?: boolean } | undefined;
    const decisions = (project as Record<string, unknown>).decisions as { title: string; description: string } | undefined;

    // Build sidebar sections dynamically
    const sidebarSections: { id: string; label: string }[] = [
        { id: 'sec-hero', label: 'Introducción' },
        ...(context ? [{ id: 'sec-context', label: 'Contexto' }] : []),
        ...(problem ? [{ id: 'sec-problem', label: 'El problema' }] : []),
        ...(resultsReveal ? [{ id: 'sec-results-reveal', label: 'Resultados' }] : []),
        ...(heroImage ? [{ id: 'sec-image', label: 'Imagen' }] : []),
        ...(storySteps && storySteps.length > 0 ? [{ id: 'sec-story', label: decisions ? 'Decisiones' : 'Historia' }] : []),
        ...((project as any).closing ? [{ id: 'sec-closing', label: 'El cierre' }] : []),
    ];

    return (
        <>
            <ScrollToTop />
            <SidebarProgress sections={sidebarSections} />
            <ProjectNav
                title={project.title}
                prevProject={prevProject ? { id: prevProject.id, title: prevProject.title } : null}
                nextProject={nextProject ? { id: nextProject.id, title: nextProject.title } : null}
            />

            <main className={styles.page}>
                <div id="sec-hero">
                    <ProjectHero
                        number={project.number}
                        title={project.title}
                        roles={project.roles}
                        tools={tools}
                        subtitle={subtitle}
                    />
                </div>

                {heroImage && (
                    <div id="sec-image">
                        <ScrollReveal delay={0.2}>
                            <ProjectHeroImage src={heroImage} />
                        </ScrollReveal>
                    </div>
                )}

                {context && (
                    <div id="sec-context" className={styles.contextSection}>
                        <div className={styles.contextContent}>
                            <ScrollReveal delay={0}>
                                <h2 className={styles.contextTitle}>{context.title}</h2>
                                {context.description.map((paragraph, index) => (
                                    <p key={index} className={styles.contextText}>{paragraph}</p>
                                ))}
                            </ScrollReveal>
                            
                            {context.milestones && context.milestones.length > 0 && (
                                <ScrollReveal delay={0.2}>
                                    <div className={styles.milestoneTimeline}>
                                        {context.milestones.map((milestone, index) => (
                                            <div key={index} className={styles.milestoneItem}>
                                                <div className={styles.milestoneDot} />
                                                <span className={styles.milestoneLabel}>{milestone}</span>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>
                    </div>
                )}

                {problem && (
                    <div id="sec-problem" className={styles.problemSection}>
                        <div className={styles.problemContent}>
                            <ScrollReveal delay={0}>
                                <h2 className={styles.problemTitle}>{problem.title}</h2>
                            </ScrollReveal>
                            <div className={styles.problemColumns}>
                                <ScrollReveal delay={0.1} className={styles.problemColLeft}>
                                    <blockquote className={styles.problemStatement}>
                                        {problem.statement}
                                    </blockquote>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2} className={styles.problemColRight}>
                                    {problem.description.map((paragraph, index) => (
                                        <p key={index} className={styles.problemText}>{paragraph}</p>
                                    ))}
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                )}

                {resultsReveal && (
                    <div id="sec-results-reveal">
                        <ResultsReveal
                            title={resultsReveal.title}
                            stats={resultsReveal.stats}
                            closingText={resultsReveal.closingText}
                            showGrowthCurve={resultsReveal.showGrowthCurve}
                        />
                    </div>
                )}

                {storySteps && storySteps.length > 0 && (
                    <div id="sec-story">
                        <StoryTimeline
                            sectionTitle={decisions ? decisions.title : "El Desafío Cronológico"}
                            intro={decisions?.description}
                            steps={storySteps}
                        />
                    </div>
                )}



                {project.id === 'project-1' && (
                    <ScrollReveal delay={0.2}>
                        <DeviceShowcase
                            label="De la búsqueda a la creación"
                            title="Juntos todo es mejor."
                            description="La plataforma conecta el flujo de inspiración móvil con la generación de conceptos en escritorio. Lo que antes llevaba horas, ahora se resuelve en segundos."
                            phoneContent={{ icon: '🔍', label: 'Búsqueda manual de referencias' }}
                            laptopContent={{ icon: '✨', label: 'Plataforma IA generativa' }}
                        />
                    </ScrollReveal>
                )}



                {(project as any).closing && (
                    <div id="sec-closing" className={styles.closingHero}>
                        <ScrollReveal delay={0}>
                            <h2 className={styles.closingLabel}>{(project as any).closing.title}</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className={styles.closingStatement}>
                                {((project as any).closing.message as string).split('\n').map((line: string, i: number) => (
                                    <span key={i}>{line}{i === 0 && <br />}</span>
                                ))}
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.4}>
                            <div className={styles.closingMeta}>
                                <div className={styles.closingMetaItem}>
                                    <span className={styles.closingMetaLabel}>Rol</span>
                                    <span className={styles.closingMetaValue}>{roleDescription}</span>
                                </div>
                                <div className={styles.closingMetaItem}>
                                    <span className={styles.closingMetaLabel}>Equipo</span>
                                    <span className={styles.closingMetaValue}>{team}</span>
                                </div>
                                <div className={styles.closingMetaItem}>
                                    <span className={styles.closingMetaLabel}>Herramientas</span>
                                    <span className={styles.closingMetaValue}>{tools?.join(' · ')}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                )}


                {(prevProject || nextProject) && (
                    <nav className={styles.footerNav} aria-label="Navegación entre proyectos">
                        {prevProject && (
                            <Link href={`/project/${prevProject.id}`} className={styles.footerLink}>
                                <span className={styles.footerLinkLabel}>← Anterior</span>
                                <span className={styles.footerLinkTitle}>{prevProject.title}</span>
                            </Link>
                        )}
                        {nextProject && (
                            <Link href={`/project/${nextProject.id}`} className={styles.footerLink}>
                                <span className={styles.footerLinkLabel}>Siguiente →</span>
                                <span className={styles.footerLinkTitle}>{nextProject.title}</span>
                            </Link>
                        )}
                    </nav>
                )}
            </main>
        </>
    );
}
