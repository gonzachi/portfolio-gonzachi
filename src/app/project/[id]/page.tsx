import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, ProjectData } from '@/data/content';
import { hasProjectAccess } from '@/lib/project-auth/access';
import { getProjectById, projectRequiresAccess } from '@/lib/projects/get-project';
import ProjectNav from '@/components/project/ProjectNav';
import ScrollToTop from '@/components/ScrollToTop';
import SidebarProgress from '@/components/project/SidebarProgress';
import ScrollReveal from '@/components/ScrollReveal';
import WireframeIllustration from '@/components/project/WireframeIllustration';
import ViewportCarousel from '@/components/project/ViewportCarousel';
import DeviceShowcase from '@/components/project/DeviceShowcase';
import InteractiveWireframe from '@/components/project/InteractiveWireframe';
import styles from './page.module.css';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
    return projects
        .filter((p) => !(p as { requiresAccess?: boolean }).requiresAccess)
        .map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;

    const requiresAccess = projectRequiresAccess(id);
    if (requiresAccess) {
        const allowed = await hasProjectAccess(id);
        if (!allowed) {
            redirect(`/project/${id}/gate`);
        }
    }

    const result = getProjectById(id, requiresAccess);
    if (!result) {
        notFound();
    }

    const { project: projectData, index: projectIndex } = result;
    const project = projectData as unknown as ProjectData;
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    // Type-safe access to project fields
    const year = project.year || "";
    const role = project.role || (project.roles && project.roles[0]) || "Product Designer";
    const client = project.client || "";
    const context = project.context;
    const problem = project.problem;
    const findings = project.findings;
    const solutionText = project.solutionText;
    const challengesText = project.challengesText;
    const resultsReveal = project.resultsReveal;

    // "Coming Soon" project handler
    if (project.isComingSoon) {
        const thumbnails: Record<string, string> = {
            'agilidad-inspiracional': '/assets/projects/moda.jpg',
            'app-movil-holdo': '/assets/projects/app-holdo-1.png',
            'reduciendo-drop-off-onboarding': '/assets/projects/ladrillo-1.jpg',
            'holdo-website-mobile-first': '/assets/projects/holdo-web-1.jpg',
            'reservadisimo': '/images/project4-4.png',
            'orquestadora-de-equipos': '',
        };

        return (
            <>
                <ScrollToTop />
                <ProjectNav
                    title={project.title}
                    prevProject={prevProject ? { id: prevProject.id, title: prevProject.title, thumbnail: thumbnails[prevProject.id] } : null}
                    nextProject={nextProject ? { id: nextProject.id, title: nextProject.title, thumbnail: thumbnails[nextProject.id] } : null}
                />
                <main className={styles.page}>
                    <div className={styles.comingSoonContainer}>
                        <ScrollReveal delay={0.1}>
                            <p className={styles.comingSoonLabel}>PROYECTO EN CONSTRUCCIÓN</p>
                            <h1 className={styles.comingSoonTitle}>{project.title}</h1>
                            <div className={styles.comingSoonDivider} />
                            {project.description.map((paragraph, index) => (
                                <p key={index} className={styles.comingSoonText}>{paragraph}</p>
                            ))}
                            <div style={{ marginTop: '3rem' }}>
                                <Link href="/#trabajos" className={styles.backButton}>
                                    ← Volver al inicio
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </main>
            </>
        );
    }

    // Build sidebar sections dynamically for completed projects
    const sidebarSections: { id: string; label: string }[] = [
        { id: 'sec-intro', label: 'Descripción general' },
        ...(context || project.startingPoint ? (project.id !== 'app-movil-holdo' ? [{ id: 'sec-partida', label: 'Punto de partida' }] : []) : []),
        ...(problem || project.challenge ? [{ id: 'sec-problema', label: 'El problema' }] : []),
        ...(project.id === 'app-movil-holdo' ? [{ id: 'sec-rol', label: 'Mi rol' }] : []),
        ...(findings ? [{ id: 'sec-hallazgos', label: 'Hallazgos' }] : []),
        ...(solutionText || project.storySteps ? [{ id: 'sec-solucion', label: 'Solución propuesta' }] : []),
        ...(resultsReveal || project.metrics ? [{ id: 'sec-impacto', label: 'Impacto' }] : []),
        ...(challengesText || project.closing ? (project.id !== 'app-movil-holdo' ? [{ id: 'sec-desafios', label: 'Desafíos' }] : []) : []),
    ];

    // Thumbnail map for nav tooltips
    const thumbnails: Record<string, string> = {
        'agilidad-inspiracional': '/assets/projects/moda.jpg',
        'app-movil-holdo': '/assets/projects/app-holdo-1.png',
        'reduciendo-drop-off-onboarding': '/assets/projects/ladrillo-1.jpg',
        'holdo-website-mobile-first': '/assets/projects/holdo-web-1.jpg',
        'reservadisimo': '/images/project4-4.png',
        'orquestadora-de-equipos': '',
    };

    return (
        <>
            <ScrollToTop />
            <SidebarProgress sections={sidebarSections} />
            <ProjectNav
                title={project.title}
                prevProject={prevProject ? { id: prevProject.id, title: prevProject.title, thumbnail: thumbnails[prevProject.id] } : null}
                nextProject={nextProject ? { id: nextProject.id, title: nextProject.title, thumbnail: thumbnails[nextProject.id] } : null}
            />

            <main className={styles.page}>
                {/* 1. Hero Header */}
                <header className={styles.headerSection}>
                    <ScrollReveal delay={0}>
                        <h1 className={styles.heroTitle}>{project.title}</h1>
                        <div className={styles.metadataRow}>
                            <span className={styles.metadataItem}><strong>Año</strong> {year}</span>
                            <span className={styles.metadataDivider}>·</span>
                            <span className={styles.metadataItem}><strong>Rol</strong> {role}</span>
                            <span className={styles.metadataDivider}>·</span>
                            <span className={styles.metadataItem}><strong>Cliente</strong> {client}</span>
                        </div>
                    </ScrollReveal>
                </header>

                {/* 2. Descripción general */}
                <section id="sec-intro" className={styles.section}>
                    <div className={styles.sectionContainer}>
                        <ScrollReveal delay={0.1}>
                            <h2 className={styles.sectionLabel}>Descripción general</h2>
                            {project.description.map((paragraph, index) => (
                                <p key={index} className={styles.bodyText}>{paragraph}</p>
                            ))}
                        </ScrollReveal>
                    </div>
                </section>

                {/* 3. Punto de partida */}
                {(context || project.startingPoint) && project.id !== 'app-movil-holdo' && (
                    <section id="sec-partida" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>Punto de partida</h2>
                                {(context?.description || project.startingPoint || []).map((paragraph: string, index: number) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className={styles.illustrationWrapper}>
                                <WireframeIllustration type="inspiration" projectId={project.id} />
                            </ScrollReveal>
                        </div>
                    </section>
                )}

                {/* 4. El problema */}
                {(problem || project.challenge) && (
                    <section id="sec-problema" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>{problem?.title || "El problema"}</h2>
                                {problem?.statement && (
                                    <blockquote className={styles.problemStatement}>
                                        {problem.statement}
                                    </blockquote>
                                )}
                                {(problem?.description || (project.challenge ? [project.challenge] : [])).map((paragraph: string, index: number) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}
                            </ScrollReveal>

                            {/* Render original Holdo desktop screenshot for app-movil-holdo */}
                            {project.id === 'app-movil-holdo' && (
                                <ScrollReveal delay={0.2} className={`${styles.illustrationWrapper} ${styles.fullWidthIllustration}`}>
                                    <Image
                                        src="/assets/projects/app-holdo/platform-holdo.png"
                                        alt="Plataforma original desktop de Holdo"
                                        width={800}
                                        height={560}
                                        style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(var(--fg-rgb), 0.1)' }}
                                    />
                                </ScrollReveal>
                            )}

                            {/* Original Viewport Carousel for reduciendo-drop-off-onboarding */}
                            {project.id === 'reduciendo-drop-off-onboarding' && (
                                <div className={styles.customWidgets} style={{ marginTop: '2rem' }}>
                                    <ScrollReveal delay={0.2}>
                                        <ViewportCarousel
                                            urlLabel="holdo.cl · propuesta de inversión — versión anterior"
                                            height={480}
                                            slides={[
                                                { src: '/assets/projects/ladrillo/Portfolio/propuesta.jpg', alt: 'Propuesta original' },
                                                { src: '/assets/projects/ladrillo/Portfolio/estrategia de inversion.jpg', alt: 'Estrategia de inversión original' },
                                                { src: '/assets/projects/ladrillo/Portfolio/Composición.jpg', alt: 'Composición original' },
                                                { src: '/assets/projects/ladrillo/Portfolio/Comparación histórica.jpg', alt: 'Comparación histórica original' },
                                                { src: '/assets/projects/ladrillo/Portfolio/Riesgo Legal.jpg', alt: 'Riesgo Legal original' },
                                            ]}
                                        />
                                    </ScrollReveal>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Mi rol */}
                {project.id === 'app-movil-holdo' && (
                    <section id="sec-rol" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>Mi rol</h2>
                                <p className={styles.bodyText}>{project.roleDescription}</p>
                            </ScrollReveal>
                        </div>
                    </section>
                )}

                {/* Banner Image 1 */}
                {project.heroImage && project.id !== 'reduciendo-drop-off-onboarding' && project.id !== 'app-movil-holdo' && (
                    <div className={styles.bannerImageContainer}>
                        <Image
                            src={project.heroImage}
                            alt={`Visualización de ${project.title}`}
                            width={1600}
                            height={900}
                            className={styles.bannerImage}
                            priority
                        />
                        <span className={styles.bannerCaption}>Vista previa general</span>
                    </div>
                )}

                {/* 5. Hallazgos */}
                {findings && (
                    <section id="sec-hallazgos" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>Hallazgos</h2>
                                {findings.map((paragraph, index) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}
                            </ScrollReveal>
                            {project.id !== 'reduciendo-drop-off-onboarding' && project.id !== 'app-movil-holdo' && (
                                <ScrollReveal delay={0.2} className={styles.illustrationWrapper}>
                                    <WireframeIllustration type="findings" projectId={project.id} />
                                </ScrollReveal>
                            )}
                        </div>
                    </section>
                )}

                {/* 6. Solución propuesta */}
                {(solutionText || project.storySteps) && (
                    <section id="sec-solucion" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>Solución propuesta</h2>
                                {solutionText ? (
                                    solutionText.map((paragraph, index) => (
                                        <p key={index} className={styles.bodyText}>{paragraph}</p>
                                    ))
                                ) : (
                                    project.storySteps && (
                                        <p className={styles.bodyText}>
                                            Desarrollamos una solución robusta estructurando las decisiones de diseño en etapas claras.
                                        </p>
                                    )
                                )}
                            </ScrollReveal>
                            {project.id === 'reduciendo-drop-off-onboarding' ? (
                                <ScrollReveal delay={0.2}>
                                    <InteractiveWireframe />
                                </ScrollReveal>
                            ) : project.id === 'app-movil-holdo' ? (
                                <>
                                    <ScrollReveal delay={0.2} className={styles.fullWidthIllustration}>
                                        <div className={styles.twoByTwoGrid}>
                                            {[
                                                {
                                                    imgName: 'app-holdo-0.png',
                                                    title: 'Home / Dashboard',
                                                    desc: 'El home muestra el balance consolidado y el estado de cada meta de inversión. El número ocupa el primer plano del header oscuro para que la información más consultada esté disponible sin ninguna acción previa — abrir la app ya es suficiente.'
                                                },
                                                {
                                                    imgName: 'app-holdo-1.png',
                                                    title: 'Detalle de portafolio',
                                                    desc: 'La vista de cuenta desglosa cada activo con su variación del día y su peso en el portafolio. Mantuvimos la misma estructura de header para crear consistencia entre pantallas, y agrupamos los movimientos recientes al final para no competir visualmente con los datos de inversión.'
                                                },
                                                {
                                                    imgName: 'app-holdo-2.png',
                                                    title: 'Balance desglosado',
                                                    desc: 'El balance total se desglosa en tres estados: invertido, en tránsito y sin asignar. Esta distinción era importante para Holdo porque el dinero en tránsito genera confusión frecuente en productos financieros — hacerlo visible y etiquetarlo explícitamente reduce la necesidad de soporte.'
                                                },
                                                {
                                                    imgName: 'app-holdo-3.png',
                                                    title: 'Confirmación de depósito',
                                                    desc: 'El estado de dinero en tránsito tiene su propia pantalla de confirmación, con el monto y la cuenta destino en el centro. La decisión fue tratar este estado como un momento de cierre del flujo de depósito, no como un error ni una advertencia — el tono y el verde refuerzan que todo está en orden.'
                                                }
                                            ].map((item, idx) => (
                                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                    <div style={{ width: '100%' }}>
                                                        <Image
                                                            src={`/assets/projects/app-holdo/${item.imgName}`}
                                                            alt={item.title}
                                                            width={300}
                                                            height={600}
                                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                                                            {item.title}
                                                        </strong>
                                                        <p className={styles.bodyText} style={{ margin: 0 }}>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal delay={0.3} className={styles.fullWidthIllustration}>
                                        <div style={{ marginTop: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}>
                                                <span style={{ 
                                                    fontFamily: 'var(--font-mono)', 
                                                    fontSize: '0.72rem', 
                                                    textTransform: 'uppercase', 
                                                    letterSpacing: '0.15em', 
                                                    color: 'var(--color-text-muted)',
                                                }}>
                                                    Figma Interactive
                                                </span>
                                                <h3 style={{ 
                                                    fontFamily: 'var(--font-heading)', 
                                                    fontSize: '1.4rem', 
                                                    fontWeight: 600, 
                                                    color: 'var(--color-text-primary)',
                                                    margin: 0,
                                                    textAlign: 'center'
                                                }}>
                                                    Prototipo en Figma
                                                </h3>
                                                <div style={{ width: '30px', height: '1.5px', backgroundColor: 'var(--color-text-primary)', marginTop: '0.6rem', opacity: 0.8 }} />
                                            </div>
                                            <video
                                                src="/assets/projects/app-holdo/app_mobile_1.mp4"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{ width: '100%', maxWidth: '540px', height: 'auto', borderRadius: '40px', border: '12px solid var(--color-text-primary)', boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' }}
                                            />
                                        </div>
                                    </ScrollReveal>
                                </>
                            ) : (
                                <ScrollReveal delay={0.2} className={styles.illustrationWrapper}>
                                    <WireframeIllustration type="solution" projectId={project.id} />
                                </ScrollReveal>
                            )}

                            {/* Transition to UI Section */}
                            {project.id === 'reduciendo-drop-off-onboarding' && (
                                <ScrollReveal delay={0.1}>
                                    <p className={styles.bodyText} style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
                                        Con las decisiones de diseño validadas, pasamos a la etapa de UI. El desafío era mantener la claridad funcional del wireframe mientras construíamos una interfaz que transmitiera la solidez y confianza que una plataforma fintech regulada requiere.
                                    </p>
                                </ScrollReveal>
                            )}

                            {/* Interactive Showcase Widgets */}
                            {project.id === 'reduciendo-drop-off-onboarding' && (
                                <div className={styles.customWidgets}>
                                    <ScrollReveal delay={0.2}>
                                        <div className={styles.viewportSection}>
                                            <div className={styles.viewportLabel}>Vista previa del diseño</div>
                                            <div className={styles.viewportBrowser}>
                                                <div className={styles.viewportBar}>
                                                    <div className={styles.viewportDots}>
                                                        <span /><span /><span />
                                                    </div>
                                                    <div className={styles.viewportUrl}>holdo.cl · propuesta de inversión</div>
                                                </div>
                                                <div className={styles.viewportScroll}>
                                                    <Image
                                                        src="/assets/projects/ladrillo/Output__selectTemplate--desktop- 1.jpg"
                                                        alt="Vista completa del rediseño de la propuesta de inversión en desktop"
                                                        width={1440}
                                                        height={900}
                                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                                        priority={false}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            )}


                        </div>
                    </section>
                )}

                {/* 7. Impacto */}
                {(resultsReveal || project.metrics) && (
                    <section id="sec-impacto" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>{resultsReveal?.title || "Impacto"}</h2>
                                {resultsReveal?.paragraphsBefore ? (
                                    resultsReveal.paragraphsBefore.map((paragraph: string, index: number) => (
                                        <p key={index} className={styles.bodyText}>{paragraph}</p>
                                    ))
                                ) : (
                                    resultsReveal?.closingText && (
                                        <p className={styles.bodyText}>{resultsReveal.closingText}</p>
                                    )
                                )}
                            </ScrollReveal>

                            {/* Stats Columns */}
                            {((resultsReveal?.stats && resultsReveal.stats.length > 0) || (project.metrics && project.metrics.length > 0)) && project.id !== 'app-movil-holdo' && (
                                <ScrollReveal delay={0.2} className={project.id === 'agilidad-inspiracional' ? styles.metricsGridBrutalist : styles.metricsGrid}>
                                    {(resultsReveal?.stats || project.metrics)?.map((stat: { highlight?: string; value?: string; detail?: string; label?: string }, index: number) => {
                                        const value = stat.highlight || stat.value;
                                        const label = stat.detail || stat.label;
                                        return (
                                            <div key={index} className={project.id === 'agilidad-inspiracional' ? styles.metricCardBrutalist : styles.metricCard}>
                                                <span className={project.id === 'agilidad-inspiracional' ? styles.metricValueBrutalist : styles.metricValue}>{value}</span>
                                                <span className={project.id === 'agilidad-inspiracional' ? styles.metricLabelBrutalist : styles.metricLabel}>{label}</span>
                                            </div>
                                        );
                                    })}
                                </ScrollReveal>
                            )}

                            {resultsReveal?.paragraphsAfter && (
                                <ScrollReveal delay={0.25}>
                                    <div style={{ marginTop: '2rem' }}>
                                        {resultsReveal.paragraphsAfter.map((paragraph: string, index: number) => (
                                            <p key={index} className={styles.bodyText}>{paragraph}</p>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            )}

                            {resultsReveal?.footerText && project.id !== 'app-movil-holdo' && (
                                <ScrollReveal delay={0.3}>
                                    <p className={styles.footnotes}>
                                        {resultsReveal.footerText}
                                    </p>
                                </ScrollReveal>
                            )}
                        </div>
                    </section>
                )}

                {/* Banner Image 2 */}
                {project.id === 'agilidad-inspiracional' && (
                    <div className={styles.bannerImageContainer}>
                        <Image
                            src="/assets/projects/moda/promptarea-ia.jpg"
                            alt="Interfaz de generación de imágenes con IA"
                            width={1600}
                            height={900}
                            className={styles.bannerImage}
                        />
                        <span className={styles.bannerCaption}>Detalle de la interfaz</span>
                    </div>
                )}
                {project.id !== 'agilidad-inspiracional' && project.id !== 'reduciendo-drop-off-onboarding' && project.id !== 'app-movil-holdo' && project.images && project.images.length > 0 && (
                    <div className={styles.bannerImageContainer}>
                        <Image
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            width={1600}
                            height={900}
                            className={styles.bannerImage}
                        />
                        <span className={styles.bannerCaption}>{project.images[0].alt}</span>
                    </div>
                )}

                {/* Image + Caption Gallery (two-column) */}
                {project.images && project.id !== 'reduciendo-drop-off-onboarding' && project.id !== 'app-movil-holdo' && project.images.length > 1 && (
                    <section className={styles.section}>
                        <div className={styles.sectionContainer}>
                            {project.images.slice(1).map((img: { src: string; alt: string; caption?: string }, index: number) => (
                                <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                                    <div className={styles.galleryRow}>
                                        <div className={styles.galleryImage}>
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width={800}
                                                height={500}
                                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                            />
                                        </div>
                                        {img.caption && (
                                            <p className={styles.galleryCaption}>{img.caption}</p>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>
                )}

                {/* 8. Desafíos y aprendizajes */}
                {(challengesText || project.closing) && project.id !== 'app-movil-holdo' && (
                    <section id="sec-desafios" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>Desafíos y aprendizajes</h2>
                                {project.closing?.message && (
                                    <blockquote className={styles.challengesQuote}>
                                        {project.closing.message}
                                    </blockquote>
                                )}
                                {challengesText ? (
                                    challengesText.map((paragraph, index) => (
                                        <p key={index} className={styles.bodyText}>{paragraph}</p>
                                    ))
                                ) : (
                                    project.description && project.description.slice(1).map((paragraph, index) => (
                                        <p key={index} className={styles.bodyText}>{paragraph}</p>
                                    ))
                                )}
                            </ScrollReveal>

                            {/* Project details table */}
                            {project.id !== 'reduciendo-drop-off-onboarding' && (
                                <ScrollReveal delay={0.3} className={styles.detailsTableWrapper}>
                                    <table className={styles.detailsTable}>
                                        <tbody>
                                            <tr>
                                                <td className={styles.tableLabel}>Rol</td>
                                                <td className={styles.tableValue}>{project.roleDescription || role}</td>
                                            </tr>
                                            {project.team && (
                                                <tr>
                                                    <td className={styles.tableLabel}>Equipo</td>
                                                    <td className={styles.tableValue}>{project.team}</td>
                                                </tr>
                                            )}
                                            {project.tools && project.tools.length > 0 && (
                                                <tr>
                                                    <td className={styles.tableLabel}>Herramientas</td>
                                                    <td className={styles.tableValue}>{project.tools.join(' · ')}</td>
                                                </tr>
                                            )}
                                            {project.closing?.timeline && (
                                                <tr>
                                                    <td className={styles.tableLabel}>Timeline</td>
                                                    <td className={styles.tableValue}>{project.closing.timeline}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </ScrollReveal>
                            )}
                        </div>
                    </section>
                )}

                {/* Back Nav Link footer */}
                <footer className={styles.footerNav}>
                    <Link href="/" className={styles.backButton}>
                        Volver a la home
                    </Link>
                </footer>
            </main>
        </>
    );
}

