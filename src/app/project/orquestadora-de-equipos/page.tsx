import Image from 'next/image';
import { redirect } from 'next/navigation';
import { projects } from '@/data/content';
import { orquestadoraDeEquiposProtected, orquestadoraDeEquiposProtectedEn } from '@/data/protected/orquestadora-de-equipos';
import { hasProjectAccess } from '@/lib/project-auth/access';
import SiteNav from '@/components/chat/SiteNav';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import Contact from '@/components/Contact';
import CaseStudyFooter from '@/components/project/CaseStudyFooter';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import Carousel from './Carousel';
import styles from './page.module.css';

function getHighlightIcon(iconType: string) {
    switch (iconType) {
        case 'users':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            );
        case 'data':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
            );
        case 'priority':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                </svg>
            );
        case 'design':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            );
        case 'test':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            );
        case 'owner':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            );
        default:
            return null;
    }
}

export default async function ProjectPage() {
    // Access control check
    const allowed = await hasProjectAccess('orquestadora-de-equipos');
    if (!allowed) {
        redirect('/project/orquestadora-de-equipos/gate');
    }

    // Merge public metadata and protected content on the server. The page
    // renders both languages side by side as data-lang="es"/"en" pairs
    // (same CSS-toggle pattern as disenar-en-codigo) since this is a
    // server component and can't read the client-side language toggle.
    const baseProject = projects.find((p) => p.id === 'orquestadora-de-equipos');
    const project = {
        ...baseProject,
        ...orquestadoraDeEquiposProtected,
    } as any;
    const projectEn = {
        ...baseProject,
        ...orquestadoraDeEquiposProtectedEn,
    } as any;

    return (
        <>
            <ScrollToTop />
            <ScrollRevealInit />

            <SiteNav />

            {/* FULL-WIDTH HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <ScrollReveal delay={0.1}>
                        <h1 className={styles.heroTitle}>
                            <span data-lang="es">{project.title}</span>
                            <span data-lang="en">{projectEn.title}</span>
                        </h1>
                        <p className={styles.heroSubtitle} data-lang="es">Herramienta corporativa para la creación de contenido de journeys</p>
                        <p className={styles.heroSubtitle} data-lang="en">Corporate tool for building journey content</p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className={styles.heroMetaBlock}>
                        {/* Row 1: Herramientas */}
                        <div className={styles.metaRowTop}>
                            <div className={styles.metaCell}>
                                <span className={styles.metaLabel} data-lang="es">Herramientas</span>
                                <span className={styles.metaLabel} data-lang="en">Tools</span>
                                <p className={styles.metaVal}>{project.tools?.slice(0, 4).join(', ') || 'Figma, Next.js, AI First, Miro'}</p>
                            </div>
                        </div>

                        {/* Row 2: Rol, Equipo, Logo */}
                        <div className={styles.metaRowBottom}>
                            <div className={styles.metaCell}>
                                <span className={styles.metaLabel} data-lang="es">Mi Rol</span>
                                <span className={styles.metaLabel} data-lang="en">My Role</span>
                                <p className={styles.metaVal}>{project.role}</p>
                            </div>
                            <div className={styles.metaCell}>
                                <span className={styles.metaLabel} data-lang="es">Equipo</span>
                                <span className={styles.metaLabel} data-lang="en">Team</span>
                                <p className={styles.metaVal}>
                                    <span data-lang="es">{project.team}</span>
                                    <span data-lang="en">{projectEn.team}</span>
                                </p>
                            </div>
                            <div className={styles.logoCell}>
                                <Image
                                    src="/assets/home/jobs/Logo_of_Mango_(new).webp"
                                    alt="Mango Logo"
                                    width={110}
                                    height={24}
                                    className={styles.mangoLogoImage}
                                    priority
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* MAIN CONTENT COLUMN */}
            <div className={styles.mainContainer}>

                {/* 01. CONTEXTO */}
                <section className={styles.editorialSection}>
                    <div className={styles.sectionRow}>
                        <div className={styles.sectionSidebar}>
                            <span className={styles.sectionNum} data-lang="es">01. Inicio</span>
                            <span className={styles.sectionNum} data-lang="en">01. Intro</span>
                            <h2 className={styles.sectionTitle}>
                                <span data-lang="es">Contexto</span>
                                <span data-lang="en">Context</span>
                            </h2>
                        </div>
                        <div className={styles.sectionBody}>
                            {project.description?.map((p: string, i: number) => (
                                <p key={`es-${i}`} className={styles.bodyText} data-lang="es" dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                            {projectEn.description?.map((p: string, i: number) => (
                                <p key={`en-${i}`} className={styles.bodyText} data-lang="en" dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 02. MI ROL (Full Width) */}
                {project.roleDescription && (
                    <section className={`${styles.editorialSection} ${styles.fullWidthSection}`}>
                        <header className={`${styles.fullWidthHeader} ${styles.centeredHeader}`}>
                            <span className={styles.sectionNum} data-lang="es">02. Mi rol</span>
                            <span className={styles.sectionNum} data-lang="en">02. My role</span>
                            <h2 className={styles.sectionTitle}>Mindset Ownership & AI First</h2>
                        </header>
                        <div className={styles.fullWidthBody}>
                            {project.roleDescription.map((p: string, i: number) => (
                                <p key={`es-${i}`} className={`${styles.bodyText} ${styles.centeredBodyText}`} data-lang="es">{p}</p>
                            ))}
                            {projectEn.roleDescription.map((p: string, i: number) => (
                                <p key={`en-${i}`} className={`${styles.bodyText} ${styles.centeredBodyText}`} data-lang="en">{p}</p>
                            ))}
                            {project.highlights && project.highlights.length > 0 && (
                                <div className={styles.roleHighlightsGrid}>
                                    {project.highlights.map((hl: any, idx: number) => {
                                        const hlEn = projectEn.highlights[idx];
                                        return (
                                        <div key={idx} className={styles.roleHighlightCard}>
                                            <div className={styles.roleHighlightIconContainer}>
                                                {getHighlightIcon(hl.icon)}
                                            </div>
                                            <h4 className={styles.roleHighlightTitle}>
                                                <span data-lang="es">{hl.title}</span>
                                                <span data-lang="en">{hlEn.title}</span>
                                            </h4>
                                            <p className={styles.roleHighlightDesc} data-lang="es">{hl.description}</p>
                                            <p className={styles.roleHighlightDesc} data-lang="en">{hlEn.description}</p>
                                        </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* UNIFIED DIVIDER AND DISCOVERY WRAPPER */}
                <div className={styles.dividerDiscoveryWrapper}>
                    {/* DIVIDER SECTION */}
                    <section className={styles.dividerSection}>
                        <p className={styles.dividerText} data-lang="es">
                            A continuación profundizamos sobre las instancias clave del desarrollo, destacando <strong>metodologías, desafíos inter-equipos, aprendizajes y el impacto de construir producto con IA.</strong>
                        </p>
                        <p className={styles.dividerText} data-lang="en">
                            Here&rsquo;s a closer look at the key moments of the build, covering <strong>methodology, cross-team challenges, learnings, and the impact of building product with AI.</strong>
                        </p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.dividerChevron}>
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </section>

                    {/* 03. DISCOVERY */}
                    {project.discovery && (
                        <section className={styles.discoverySection}>
                            <div className={styles.discoveryInnerContainer}>
                                <div className={styles.sectionRow}>
                                    <div className={styles.sectionSidebar}>
                                        <span className={styles.sectionNum} data-lang="es">03. Discovery</span>
                                        <span className={styles.sectionNum} data-lang="en">03. Discovery</span>
                                        <h2 className={styles.sectionTitle}>
                                            <span data-lang="es">{project.discovery.title || "Discovery"}</span>
                                            <span data-lang="en">{projectEn.discovery.title || "Discovery"}</span>
                                        </h2>
                                    </div>
                                    <div className={styles.sectionBody}>
                                        {project.discovery.description.map((paragraph: string, index: number) => (
                                            <p key={`es-${index}`} className={styles.bodyText} data-lang="es">{paragraph}</p>
                                        ))}
                                        {projectEn.discovery.description.map((paragraph: string, index: number) => (
                                            <p key={`en-${index}`} className={styles.bodyText} data-lang="en">{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>

                {/* 04. PRINCIPALES DESAFÍOS */}
                {project.problem && (
                    <section className={styles.editorialSection}>
                        <div className={styles.sectionRow}>
                            <div className={styles.sectionSidebar}>
                                <span className={styles.sectionNum} data-lang="es">04. Desafíos</span>
                                <span className={styles.sectionNum} data-lang="en">04. Challenges</span>
                                <h2 className={styles.sectionTitle}>
                                    <span data-lang="es">{project.problem.title || "Principales desafíos"}</span>
                                    <span data-lang="en">{projectEn.problem.title || "Main challenges"}</span>
                                </h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {project.problem.statement && (
                                    <blockquote className={styles.editorialQuote} data-lang="es">
                                        "{project.problem.statement}"
                                    </blockquote>
                                )}
                                {projectEn.problem.statement && (
                                    <blockquote className={styles.editorialQuote} data-lang="en">
                                        "{projectEn.problem.statement}"
                                    </blockquote>
                                )}
                                {project.problem.description.map((paragraph: string, index: number) => (
                                    <p key={`es-${index}`} className={styles.bodyText} data-lang="es">{paragraph}</p>
                                ))}
                                {projectEn.problem.description.map((paragraph: string, index: number) => (
                                    <p key={`en-${index}`} className={styles.bodyText} data-lang="en">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 05. ITERACIÓN Y APRENDIZAJES (Interactive Carousel) */}
                <section className={styles.iteracionSection}>
                    <div className={styles.iteracionInnerContainer}>
                        <header className={`${styles.fullWidthHeader} ${styles.centeredHeader}`}>
                            <span className={styles.sectionNum} data-lang="es">05. Definiciones</span>
                            <span className={styles.sectionNum} data-lang="en">05. Decisions</span>
                            <h2 className={styles.sectionTitle}>
                                <span data-lang="es">Iteración y decisiones clave</span>
                                <span data-lang="en">Iteration and key decisions</span>
                            </h2>
                        </header>
                        <p className={`${styles.bodyText} ${styles.centeredBodyText}`} style={{ maxWidth: '720px', margin: '0 auto 2.5rem', textAlign: 'center' }} data-lang="es">
                            Decisiones estratégicas de arquitectura y proceso que permitieron acelerar la construcción del producto sin generar fricción en los equipos.
                        </p>
                        <p className={`${styles.bodyText} ${styles.centeredBodyText}`} style={{ maxWidth: '720px', margin: '0 auto 2.5rem', textAlign: 'center' }} data-lang="en">
                            Strategic architecture and process decisions that sped up building the product without creating friction across teams.
                        </p>
                        <Carousel />
                    </div>
                </section>

                {/* 06. SOLUCIÓN PROPUESTA — UX/UI */}
                {project.solutionText && (
                    <section className={styles.editorialSection}>
                        <div className={styles.sectionRow}>
                            <div className={styles.sectionSidebar}>
                                <span className={styles.sectionNum} data-lang="es">06. Solución</span>
                                <span className={styles.sectionNum} data-lang="en">06. Solution</span>
                                <h2 className={styles.sectionTitle}>
                                    <span data-lang="es">Solución propuesta — UX/UI</span>
                                    <span data-lang="en">Proposed solution — UX/UI</span>
                                </h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {project.solutionText.map((paragraph: string, index: number) => (
                                    <p key={`es-${index}`} className={styles.bodyText} data-lang="es">{paragraph}</p>
                                ))}
                                {projectEn.solutionText.map((paragraph: string, index: number) => (
                                    <p key={`en-${index}`} className={styles.bodyText} data-lang="en">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 07. IMPACTO PRINCIPAL */}
                {project.resultsReveal && (
                    <section className={styles.editorialSection}>
                        <div className={styles.sectionRow}>
                            <div className={styles.sectionSidebar}>
                                <span className={styles.sectionNum} data-lang="es">07. Impacto</span>
                                <span className={styles.sectionNum} data-lang="en">07. Impact</span>
                                <h2 className={styles.sectionTitle}>
                                    <span data-lang="es">{project.resultsReveal.title || "Impacto principal"}</span>
                                    <span data-lang="en">{projectEn.resultsReveal.title || "Main impact"}</span>
                                </h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {project.resultsReveal.paragraphsBefore?.map((paragraph: string, index: number) => (
                                    <p key={`es-${index}`} className={styles.bodyText} data-lang="es">{paragraph}</p>
                                ))}
                                {projectEn.resultsReveal.paragraphsBefore?.map((paragraph: string, index: number) => (
                                    <p key={`en-${index}`} className={styles.bodyText} data-lang="en">{paragraph}</p>
                                ))}

                                {project.resultsReveal.stats && project.resultsReveal.stats.length > 0 && (
                                    <div className={styles.impactMetricsGrid}>
                                        {project.resultsReveal.stats.map((stat: any, index: number) => {
                                            const statEn = projectEn.resultsReveal.stats[index];
                                            return (
                                            <div key={index} className={styles.impactCard}>
                                                <span className={styles.metricValText}>{stat.highlight}</span>
                                                <p className={styles.metricDetailText} data-lang="es">{stat.detail}</p>
                                                <p className={styles.metricDetailText} data-lang="en">{statEn.detail}</p>
                                            </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {project.resultsReveal.paragraphsAfter?.map((paragraph: string, index: number) => (
                                    <p key={`es-after-${index}`} className={styles.bodyText} data-lang="es">{paragraph}</p>
                                ))}
                                {projectEn.resultsReveal.paragraphsAfter?.map((paragraph: string, index: number) => (
                                    <p key={`en-after-${index}`} className={styles.bodyText} data-lang="en">{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 08. DESAFÍOS Y APRENDIZAJES */}
                {project.challengesText && (
                    <section className={`${styles.editorialSection} ${styles.fullWidthSection}`}>
                        <header className={`${styles.fullWidthHeader} ${styles.centeredHeader}`}>
                            <span className={styles.sectionNum} data-lang="es">08. Aprendizajes</span>
                            <span className={styles.sectionNum} data-lang="en">08. Learnings</span>
                            <h2 className={styles.sectionTitle}>
                                <span data-lang="es">Desafíos y aprendizajes</span>
                                <span data-lang="en">Challenges and learnings</span>
                            </h2>
                        </header>
                        <div className={styles.roleHighlightsGrid}>
                            {project.challengesText.map((text: string, index: number) => {
                                const textEn = projectEn.challengesText[index];
                                return (
                                <div key={index} className={styles.roleHighlightCard}>
                                    <div className={styles.roleHighlightIconContainer}>
                                        {getHighlightIcon(index % 2 === 0 ? 'owner' : 'priority')}
                                    </div>
                                    <h4 className={styles.roleHighlightTitle}>
                                        <span data-lang="es">Aprendizaje {index + 1}</span>
                                        <span data-lang="en">Learning {index + 1}</span>
                                    </h4>
                                    <p className={styles.roleHighlightDesc} data-lang="es">{text}</p>
                                    <p className={styles.roleHighlightDesc} data-lang="en">{textEn}</p>
                                </div>
                                );
                            })}
                        </div>
                    </section>
                )}

            </div>

            {/* CASE STUDY FOOTER */}
            <CaseStudyFooter />
        </>
    );
}
