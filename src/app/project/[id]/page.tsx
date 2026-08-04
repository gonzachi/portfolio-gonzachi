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
import FigmaVideoPlayer from '@/components/project/FigmaVideoPlayer';
import CardsCarousel from '@/components/project/CardsCarousel';
import styles from './page.module.css';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
    return projects
        .filter((p) => !(p as { requiresAccess?: boolean }).requiresAccess && p.id !== 'agilidad-inspiracional' && p.id !== 'orquestadora-de-equipos' && p.id !== 'reduciendo-drop-off-onboarding' && p.id !== 'app-movil-holdo')
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
            'app-movil-holdo': '/assets/home/portada-caso-app-holdo.jpg',
            'reduciendo-drop-off-onboarding': '/assets/home/portada-caso-holdo-ladrillo-light.jpg',
            'holdo-website-mobile-first': '/assets/projects/holdo-web-1.jpg',
            'reservadisimo': '/images/project4-4.png',
            'orquestadora-de-equipos': '',
            'club-fidelizacion-referidos': '',
        };

        return (
            <>
                <ScrollToTop />
                <ProjectNav
                    title={project.title}
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
        { id: 'sec-intro', label: 'Contexto' },
        ...(project.roleDescription && project.id !== 'app-movil-holdo' ? [{ id: 'sec-rol', label: 'Mi rol' }] : []),
        ...(project.discovery ? [{ id: 'sec-discovery', label: 'Discovery inicial' }] : []),
        ...(context || project.startingPoint ? (project.id !== 'app-movil-holdo' ? [{ id: 'sec-partida', label: 'Punto de partida' }] : []) : []),
        ...(problem || project.challenge ? [{ id: 'sec-problema', label: problem?.title || 'El problema' }] : []),
        ...(project.id === 'app-movil-holdo' ? [{ id: 'sec-rol', label: 'Mi rol' }] : []),
        ...(findings ? [{ id: 'sec-hallazgos', label: 'Hallazgos' }] : []),
        ...(solutionText || project.storySteps ? [{ id: 'sec-solucion', label: 'Solución propuesta' }] : []),
        ...(resultsReveal || project.metrics ? [{ id: 'sec-impacto', label: resultsReveal?.title || 'Impacto' }] : []),
        ...(challengesText || project.closing ? (project.id !== 'app-movil-holdo' ? [{ id: 'sec-desafios', label: 'Desafíos y aprendizajes' }] : []) : []),
    ];

    // Thumbnail map for nav tooltips
    const thumbnails: Record<string, string> = {
        'agilidad-inspiracional': '/assets/projects/moda.jpg',
        'app-movil-holdo': '/assets/home/portada-caso-app-holdo.jpg',
        'reduciendo-drop-off-onboarding': '/assets/home/portada-caso-holdo-ladrillo-light.jpg',
        'holdo-website-mobile-first': '/assets/projects/holdo-web-1.jpg',
        'reservadisimo': '/images/project4-4.png',
        'orquestadora-de-equipos': '',
        'club-fidelizacion-referidos': '',
    };

    return (
        <>
            <ScrollToTop />
            <SidebarProgress sections={sidebarSections} />
            <ProjectNav
                title={project.title}
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

                {/* 2. Contexto */}
                <section id="sec-intro" className={styles.section}>
                    <div className={styles.sectionContainer}>
                        <ScrollReveal delay={0.1}>
                            <h2 className={styles.sectionLabel}>Contexto</h2>
                            {project.description.map((paragraph, index) => (
                                <p key={index} className={styles.bodyText}>{paragraph}</p>
                            ))}
                        </ScrollReveal>
                        {project.contextImage && (
                            <ScrollReveal delay={0.2} className={`${styles.illustrationWrapper} ${styles.fullWidthIllustration}`}>
                                <div style={{ marginTop: '2.5rem', width: '100%' }}>
                                    <Image
                                        src={project.contextImage}
                                        alt="Ilustración de contexto"
                                        width={1200}
                                        height={400}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </ScrollReveal>
                        )}
                    </div>
                </section>

                {/* Mi rol */}
                {project.roleDescription && project.id !== 'app-movil-holdo' && (
                    <section id="sec-rol" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>Mi rol</h2>
                                {Array.isArray(project.roleDescription) ? (
                                    project.roleDescription.map((paragraph, index) => (
                                        <p key={index} className={styles.bodyText}>{paragraph}</p>
                                    ))
                                ) : (
                                    <p className={styles.bodyText}>{project.roleDescription}</p>
                                )}
                            </ScrollReveal>
                        </div>
                    </section>
                )}

                {/* Discovery */}
                {project.discovery && (
                    <section id="sec-discovery" className={styles.section}>
                        <div className={styles.sectionContainer}>
                            <ScrollReveal delay={0.1}>
                                <h2 className={styles.sectionLabel}>{project.discovery.title || "Discovery"}</h2>
                                {project.discovery.description.map((paragraph, index) => (
                                    <p key={index} className={styles.bodyText}>{paragraph}</p>
                                ))}
                            </ScrollReveal>
                            {project.discovery.images && project.discovery.images.length > 0 && (
                                <ScrollReveal delay={0.2} className={`${styles.illustrationWrapper} ${styles.fullWidthIllustration}`}>
                                    <div className={styles.twoByTwoGrid} style={{ marginTop: '2.5rem' }}>
                                        {project.discovery.images.map((imgSrc, imgIndex) => (
                                            <div key={imgIndex} style={{ width: '100%', height: 'auto', overflow: 'hidden', border: '1px solid rgba(var(--fg-rgb), 0.08)' }}>
                                                <Image
                                                    src={imgSrc}
                                                    alt={`Discovery imagen ${imgIndex + 1}`}
                                                    width={600}
                                                    height={450}
                                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>
                    </section>
                )}

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
                                {project.id === 'app-movil-holdo' ? (
                                    <div className={styles.problemTwoColumns}>
                                        <div className={styles.problemLeftColumn}>
                                            <div className={styles.lupaIconContainer}>
                                                <svg className={styles.lupaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                </svg>
                                            </div>
                                            <p className={styles.lupaText}>Descubrimos que el 80% de los usuarios accedían diariamente desde mobile.</p>
                                        </div>
                                        <div className={styles.problemRightColumn}>
                                            {(problem?.description || (project.challenge ? [project.challenge] : [])).map((paragraph: string, index: number) => (
                                                <p key={index} className={styles.bodyText}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    (problem?.description || (project.challenge ? [project.challenge] : [])).map((paragraph: string, index: number) => (
                                        <p key={index} className={styles.bodyText}>{paragraph}</p>
                                    ))
                                )}
                            </ScrollReveal>

                            {/* Render original Holdo desktop screenshot for app-movil-holdo */}
                            {project.id === 'app-movil-holdo' && (
                                <ScrollReveal delay={0.2} className={`${styles.illustrationWrapper} ${styles.fullWidthIllustration}`}>
                                    <Image
                                        src="/assets/projects/app-holdo/platform-holdo.png"
                                        alt="Plataforma original desktop de Holdo"
                                        width={800}
                                        height={560}
                                        style={{ width: '100%', height: 'auto', border: '1px solid rgba(var(--fg-rgb), 0.1)' }}
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
                {project.heroImage && project.id !== 'reduciendo-drop-off-onboarding' && project.id !== 'app-movil-holdo' && project.id !== 'agilidad-inspiracional' && (
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
                                {project.id === 'app-movil-holdo' && (
                                    <div className={styles.findingsGrid}>
                                        {/* Card 1 */}
                                        <div className={styles.findingCard}>
                                            <div className={styles.findingIconContainer}>
                                                <svg className={styles.findingIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="18" y1="20" x2="18" y2="10" />
                                                    <line x1="12" y1="20" x2="12" y2="4" />
                                                    <line x1="6" y1="20" x2="6" y2="14" />
                                                </svg>
                                            </div>
                                            <p className={styles.findingText}>Las acciones más frecuentes eran simples: revisar el portafolio y hacer depósitos.</p>
                                        </div>
                                        {/* Card 2 */}
                                        <div className={styles.findingCard}>
                                            <div className={styles.findingIconContainer}>
                                                <svg className={styles.findingIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                                </svg>
                                            </div>
                                            <p className={styles.findingText}>Los usuarios no necesitaban toda la plataforma en su teléfono, sino inmediatez.</p>
                                        </div>
                                        {/* Card 3 */}
                                        <div className={styles.findingCard}>
                                            <div className={styles.findingIconContainer}>
                                                <svg className={styles.findingIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="8" r="7" />
                                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                                </svg>
                                            </div>
                                            <p className={styles.findingText}>El benchmark confirmó que la banca tradicional no ofrecía una experiencia a la altura.</p>
                                        </div>
                                    </div>
                                )}
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
                                {project.id === 'app-movil-holdo' && (
                                    <>
                                        <div className={styles.illustrationWrapper} style={{ maxWidth: '100%', margin: '2.5rem auto 0' }}>
                                            <Image
                                                src="/assets/projects/app-holdo/flujo-app.png"
                                                alt="Flujo de la aplicación Holdo"
                                                width={1200}
                                                height={800}
                                                style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid rgba(var(--fg-rgb), 0.1)' }}
                                                priority
                                            />
                                        </div>
                                        <p className={styles.bodyText} style={{ marginTop: '2.5rem' }}>
                                            Para lograr un MVP sólido en tiempo récord, definimos los pilares de la solución centrándonos en la inmediatez y la viabilidad técnica:
                                        </p>
                                        <div className={styles.findingsGrid} style={{ marginTop: '1.5rem', marginBottom: '0' }}>
                                            {/* Card 1 */}
                                            <div className={styles.findingCard}>
                                                <div className={styles.findingIconContainer}>
                                                    <svg className={styles.findingIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                </div>
                                                <p className={styles.findingText}>Consulta y depósitos: Priorizamos los flujos cotidianos de mayor volumen y valor.</p>
                                            </div>
                                            {/* Card 2 */}
                                            <div className={styles.findingCard}>
                                                <div className={styles.findingIconContainer}>
                                                    <svg className={styles.findingIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="6" cy="6" r="3" />
                                                        <circle cx="6" cy="18" r="3" />
                                                        <line x1="20" y1="4" x2="8.12" y2="15.88" />
                                                        <line x1="14.47" y1="14.48" x2="20" y2="20" />
                                                        <line x1="8.12" y1="8.12" x2="12" y2="12" />
                                                    </svg>
                                                </div>
                                                <p className={styles.findingText}>Scope acotado: Excluimos funcionalidades complejas para acelerar el desarrollo.</p>
                                            </div>
                                            {/* Card 3 */}
                                            <div className={styles.findingCard}>
                                                <div className={styles.findingIconContainer}>
                                                    <svg className={styles.findingIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                        <circle cx="8.5" cy="7" r="4" />
                                                        <line x1="20" y1="8" x2="20" y2="14" />
                                                        <line x1="23" y1="11" x2="17" y2="11" />
                                                    </svg>
                                                </div>
                                                <p className={styles.findingText}>Registro adaptado: Integración responsive para no bloquear la conversión.</p>
                                            </div>
                                        </div>
                                        <p className={styles.bodyText} style={{ marginTop: '2.5rem', marginBottom: '0' }}>
                                            A continuación se presentan en detalle las pantallas finales de la interfaz, donde se aprecian las decisiones de diseño aplicadas para garantizar la claridad y sencillez del producto:
                                        </p>
                                    </>
                                )}
                            </ScrollReveal>
                            {project.id === 'reduciendo-drop-off-onboarding' ? (
                                <ScrollReveal delay={0.2}>
                                    <InteractiveWireframe />
                                </ScrollReveal>
                            ) : project.id === 'app-movil-holdo' ? (
                                <>
                                    <ScrollReveal delay={0.2} className={styles.fullWidthIllustration}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem', marginTop: '4rem' }}>
                                            <span style={{ 
                                                fontFamily: 'var(--font-mono)', 
                                                fontSize: '0.72rem', 
                                                textTransform: 'uppercase', 
                                                letterSpacing: '0.15em', 
                                                color: 'var(--color-text-muted)',
                                            }}>
                                                Detalle de Interfaz
                                            </span>
                                            <h3 style={{ 
                                                fontFamily: 'var(--font-heading)', 
                                                fontSize: '1.4rem', 
                                                fontWeight: 600, 
                                                color: 'var(--color-text-primary)',
                                                margin: 0,
                                                textAlign: 'center'
                                            }}>
                                                4 decisiones de diseño destacadas
                                            </h3>
                                            <div style={{ width: '30px', height: '1.5px', backgroundColor: 'var(--color-text-primary)', marginTop: '0.6rem', opacity: 0.8 }} />
                                        </div>
                                        <CardsCarousel cards={[
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
                                        ]} />
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
                                            <FigmaVideoPlayer src="/assets/projects/app-holdo/app_mobile_1.mp4" />
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

