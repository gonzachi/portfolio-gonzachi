import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { projects } from '@/data/content';
import { orquestadoraDeEquiposProtected } from '@/data/protected/orquestadora-de-equipos';
import { hasProjectAccess } from '@/lib/project-auth/access';
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

    // Merge public metadata and protected content on the server
    const baseProject = projects.find((p) => p.id === 'orquestadora-de-equipos');
    const project = {
        ...baseProject,
        ...orquestadoraDeEquiposProtected,
    } as any;

    return (
        <>
            <ScrollToTop />
            <ScrollRevealInit />

            {/* TOP HEADER */}
            <header className={styles.topHeader}>
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.brandContainer} aria-label="Volver al inicio">
                        <div className={styles.avatarWrapper}>
                            <Image
                                src="/profile.jpg"
                                alt="Gonzalo Chiavassa"
                                width={56}
                                height={56}
                                className={styles.avatar}
                                priority
                            />
                        </div>
                        <div className={styles.brand}>
                            <span className={styles.logo}>Gonzalo Chiavassa</span>
                            <span className={styles.role}>Product Owner / Dev</span>
                        </div>
                    </Link>
                </div>
            </header>

            {/* FULL-WIDTH HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <ScrollReveal delay={0.1}>
                        <h1 className={styles.heroTitle}>{project.title}</h1>
                        <p className={styles.heroSubtitle}>Herramienta corporativa para la creación de contenido de journeys</p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className={styles.heroMetaBlock}>
                        {/* Row 1: Herramientas */}
                        <div className={styles.metaRowTop}>
                            <div className={styles.metaCell}>
                                <span className={styles.metaLabel}>Herramientas</span>
                                <p className={styles.metaVal}>{project.tools?.slice(0, 4).join(', ') || 'Figma, Next.js, AI First, Miro'}</p>
                            </div>
                        </div>

                        {/* Row 2: Rol, Equipo, Logo */}
                        <div className={styles.metaRowBottom}>
                            <div className={styles.metaCell}>
                                <span className={styles.metaLabel}>Mi Rol</span>
                                <p className={styles.metaVal}>{project.role}</p>
                            </div>
                            <div className={styles.metaCell}>
                                <span className={styles.metaLabel}>Equipo</span>
                                <p className={styles.metaVal}>{project.team}</p>
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
                            <span className={styles.sectionNum}>01. Inicio</span>
                            <h2 className={styles.sectionTitle}>Contexto</h2>
                        </div>
                        <div className={styles.sectionBody}>
                            {project.description?.map((p: string, i: number) => (
                                <p key={i} className={styles.bodyText} dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 02. MI ROL (Full Width) */}
                {project.roleDescription && (
                    <section className={`${styles.editorialSection} ${styles.fullWidthSection}`}>
                        <header className={`${styles.fullWidthHeader} ${styles.centeredHeader}`}>
                            <span className={styles.sectionNum}>02. Mi rol</span>
                            <h2 className={styles.sectionTitle}>Mindset Ownership & AI First</h2>
                        </header>
                        <div className={styles.fullWidthBody}>
                            {project.roleDescription.map((p: string, i: number) => (
                                <p key={i} className={`${styles.bodyText} ${styles.centeredBodyText}`}>{p}</p>
                            ))}
                            {project.highlights && project.highlights.length > 0 && (
                                <div className={styles.roleHighlightsGrid}>
                                    {project.highlights.map((hl: any, idx: number) => (
                                        <div key={idx} className={styles.roleHighlightCard}>
                                            <div className={styles.roleHighlightIconContainer}>
                                                {getHighlightIcon(hl.icon)}
                                            </div>
                                            <h4 className={styles.roleHighlightTitle}>{hl.title}</h4>
                                            <p className={styles.roleHighlightDesc}>{hl.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* UNIFIED DIVIDER AND DISCOVERY WRAPPER */}
                <div className={styles.dividerDiscoveryWrapper}>
                    {/* DIVIDER SECTION */}
                    <section className={styles.dividerSection}>
                        <p className={styles.dividerText}>
                            A continuación profundizamos sobre las instancias clave del desarrollo, destacando <strong>metodologías, desafíos inter-equipos, aprendizajes y el impacto de construir producto con IA.</strong>
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
                                        <span className={styles.sectionNum}>03. Discovery</span>
                                        <h2 className={styles.sectionTitle}>{project.discovery.title || "Discovery"}</h2>
                                    </div>
                                    <div className={styles.sectionBody}>
                                        {project.discovery.description.map((paragraph: string, index: number) => (
                                            <p key={index} className={styles.bodyText}>{paragraph}</p>
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
                                <span className={styles.sectionNum}>04. Desafíos</span>
                                <h2 className={styles.sectionTitle}>{project.problem.title || "Principales desafíos"}</h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {project.problem.statement && (
                                    <blockquote className={styles.editorialQuote}>
                                        "{project.problem.statement}"
                                    </blockquote>
                                )}
                                {project.problem.description.map((paragraph: string, index: number) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 05. ITERACIÓN Y APRENDIZAJES (Interactive Carousel) */}
                <section className={styles.iteracionSection}>
                    <div className={styles.iteracionInnerContainer}>
                        <header className={`${styles.fullWidthHeader} ${styles.centeredHeader}`}>
                            <span className={styles.sectionNum}>05. Definiciones</span>
                            <h2 className={styles.sectionTitle}>Iteración y decisiones clave</h2>
                        </header>
                        <p className={`${styles.bodyText} ${styles.centeredBodyText}`} style={{ maxWidth: '720px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
                            Decisiones estratégicas de arquitectura y proceso que permitieron acelerar la construcción del producto sin generar fricción en los equipos.
                        </p>
                        <Carousel />
                    </div>
                </section>

                {/* 06. SOLUCIÓN PROPUESTA — UX/UI */}
                {project.solutionText && (
                    <section className={styles.editorialSection}>
                        <div className={styles.sectionRow}>
                            <div className={styles.sectionSidebar}>
                                <span className={styles.sectionNum}>06. Solución</span>
                                <h2 className={styles.sectionTitle}>Solución propuesta — UX/UI</h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {project.solutionText.map((paragraph: string, index: number) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
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
                                <span className={styles.sectionNum}>07. Impacto</span>
                                <h2 className={styles.sectionTitle}>{project.resultsReveal.title || "Impacto principal"}</h2>
                            </div>
                            <div className={styles.sectionBody}>
                                {project.resultsReveal.paragraphsBefore?.map((paragraph: string, index: number) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}

                                {project.resultsReveal.stats && project.resultsReveal.stats.length > 0 && (
                                    <div className={styles.impactMetricsGrid}>
                                        {project.resultsReveal.stats.map((stat: any, index: number) => (
                                            <div key={index} className={styles.impactCard}>
                                                <span className={styles.metricValText}>{stat.highlight}</span>
                                                <p className={styles.metricDetailText}>{stat.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {project.resultsReveal.paragraphsAfter?.map((paragraph: string, index: number) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 08. DESAFÍOS Y APRENDIZAJES */}
                {project.challengesText && (
                    <section className={`${styles.editorialSection} ${styles.fullWidthSection}`}>
                        <header className={`${styles.fullWidthHeader} ${styles.centeredHeader}`}>
                            <span className={styles.sectionNum}>08. Aprendizajes</span>
                            <h2 className={styles.sectionTitle}>Desafíos y aprendizajes</h2>
                        </header>
                        <div className={styles.roleHighlightsGrid}>
                            {project.challengesText.map((text: string, index: number) => (
                                <div key={index} className={styles.roleHighlightCard}>
                                    <div className={styles.roleHighlightIconContainer}>
                                        {getHighlightIcon(index % 2 === 0 ? 'owner' : 'priority')}
                                    </div>
                                    <h4 className={styles.roleHighlightTitle}>Aprendizaje {index + 1}</h4>
                                    <p className={styles.roleHighlightDesc}>{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>

            {/* CASE STUDY FOOTER */}
            <CaseStudyFooter />
        </>
    );
}
