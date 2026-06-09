'use client';

import styles from './WireframeIllustration.module.css';

interface WireframeIllustrationProps {
    type: 'inspiration' | 'findings' | 'solution';
    projectId?: string;
    projectTitle?: string;
}

export default function WireframeIllustration({ type, projectId = 'agilidad-inspiracional' }: WireframeIllustrationProps) {
    // Determine dynamic metadata based on project ID and type
    let windowTitle = 'workspace.fig';
    let floatingTag = 'WIP';
    let promptText = '✨ action_required';

    if (type === 'inspiration') {
        if (projectId === 'agilidad-inspiracional') {
            windowTitle = 'canvas_draft.ai';
            floatingTag = 'WIP_02_draft';
        } else if (projectId === 'app-movil-holdo') {
            windowTitle = 'app_draft_mobile.fig';
            floatingTag = 'mobile_onboarding';
        } else if (projectId === 'reduciendo-drop-off-onboarding') {
            windowTitle = 'old_onboarding_desktop.fig';
            floatingTag = 'overwhelmed_user';
        } else if (projectId === 'holdo-website-mobile-first') {
            windowTitle = 'original_landing.fig';
            floatingTag = 'single_page_v1';
        } else if (projectId === 'reservadisimo') {
            windowTitle = 'manual_booking.fig';
            floatingTag = 'whatsapp_reservas';
        }
    } else if (type === 'findings') {
        windowTitle = 'user_research.pdf';
        if (projectId === 'agilidad-inspiracional') {
            floatingTag = 'N = 12 interviews';
        } else if (projectId === 'app-movil-holdo') {
            floatingTag = 'N = 8 user_tests';
        } else if (projectId === 'reduciendo-drop-off-onboarding') {
            floatingTag = 'N = 10 interviews';
        } else if (projectId === 'holdo-website-mobile-first') {
            floatingTag = 'Analytics insights';
        } else if (projectId === 'reservadisimo') {
            floatingTag = 'Bar feedback session';
        }
    } else if (type === 'solution') {
        if (projectId === 'agilidad-inspiracional') {
            windowTitle = 'generator_v2.app';
            floatingTag = 'v3.5_stable';
            promptText = '✨ vest_lino_flores_verano';
        } else if (projectId === 'app-movil-holdo') {
            windowTitle = 'holdo_app_mvp.fig';
            floatingTag = 'app_store_live';
            promptText = '✨ Invertir en ETF Conservador';
        } else if (projectId === 'reduciendo-drop-off-onboarding') {
            windowTitle = 'holdo_simulator.fig';
            floatingTag = 'conversion_rate_+15%';
            promptText = '✨ Simulación: +$500.000 / mes';
        } else if (projectId === 'holdo-website-mobile-first') {
            windowTitle = 'webflow_responsive.fig';
            floatingTag = 'responsive_ok';
            promptText = '✨ holdo.cl (Mobile first)';
        } else if (projectId === 'reservadisimo') {
            windowTitle = 'reservas_mvp.fig';
            floatingTag = 'qr_code_ready';
            promptText = '✨ Reserva confirmada: QR #882';
        }
    }

    // Determine findings text details
    let feedbackQuote = '“La info es confusa. No entiendo el riesgo.”';
    let feedbackAuthor = 'Usuario #12 · Diseñador';
    if (projectId === 'agilidad-inspiracional') {
        feedbackQuote = '“Me cuesta horrores describir con texto el tejido y corte que imagino.”';
        feedbackAuthor = 'Diseñadora de Moda · Mango';
    } else if (projectId === 'app-movil-holdo') {
        feedbackQuote = '“Quiero ver mi rentabilidad diaria rápido desde el celular.”';
        feedbackAuthor = 'Inversor · Holdo App';
    } else if (projectId === 'reduciendo-drop-off-onboarding') {
        feedbackQuote = '“La info es confusa. No entiendo el riesgo.”';
        feedbackAuthor = 'Usuario #12 · Inversor';
    } else if (projectId === 'holdo-website-mobile-first') {
        feedbackQuote = '“No entiendo qué hace la plataforma desde el home actual.”';
        feedbackAuthor = 'Usuario #3 · Visitante';
    } else if (projectId === 'reservadisimo') {
        feedbackQuote = '“Llenar la declaración jurada en papel al entrar es súper lento.”';
        feedbackAuthor = 'Usuario #15 · Cliente de Bar';
    }

    return (
        <div className={styles.container} aria-hidden="true">
            <div className={styles.windowStack}>
                {/* Background dashed window */}
                <div className={`${styles.window} ${styles.secondaryWindow}`}>
                    <div className={styles.titlebar}>
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.windowTitle}>inspector.css</div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.line} />
                        <div className={`${styles.line} ${styles.lineMedium}`} />
                        <div className={`${styles.line} ${styles.lineShort}`} />
                        <div style={{ marginTop: 'auto' }} className={styles.line} />
                    </div>
                </div>

                {/* Main window */}
                <div className={`${styles.window} ${styles.primaryWindow}`}>
                    <div className={styles.titlebar}>
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.dot} />
                        <div className={styles.windowTitle}>{windowTitle}</div>
                    </div>

                    <div className={styles.content}>
                        {type === 'inspiration' && (
                            <div className={styles.columns}>
                                <div className={styles.sidebar}>
                                    <div className={styles.line} />
                                    <div className={`${styles.line} ${styles.lineShort}`} />
                                    <div className={styles.line} />
                                    <div className={`${styles.line} ${styles.lineMedium}`} />
                                </div>
                                <div className={styles.mainPanel}>
                                    <div className={styles.mannequinContainer}>
                                        {projectId === 'agilidad-inspiracional' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100">
                                                {/* Hanger hook */}
                                                <path d="M50 25 C50 18, 55 18, 55 22 C55 25, 50 28, 50 30" />
                                                {/* Hanger shoulders */}
                                                <path d="M25 35 L50 30 L75 35 Z" />
                                                {/* Dress silhouette (dashed line-art) */}
                                                <path
                                                    strokeDasharray="4,4"
                                                    d="M32 35 C34 48, 38 52, 36 65 C34 75, 30 80, 26 85 L74 85 C70 80, 66 75, 64 65 C62 52, 66 48, 68 35 Z"
                                                />
                                            </svg>
                                        )}
                                        {projectId === 'app-movil-holdo' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100">
                                                {/* Phone draft container */}
                                                <rect x="28" y="10" width="44" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                                                {/* Top status */}
                                                <line x1="38" y1="15" x2="62" y2="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.4" />
                                                {/* Chart line */}
                                                <path d="M32 70 Q40 50 50 65 T68 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                                                {/* Buttons */}
                                                <rect x="34" y="78" width="14" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                                                <rect x="52" y="78" width="14" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                                            </svg>
                                        )}
                                        {projectId === 'reduciendo-drop-off-onboarding' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100">
                                                {/* Chaotic crossing graphs */}
                                                <line x1="15" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                                                <line x1="15" y1="15" x2="15" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                                                <path d="M15 70 L35 45 L50 65 L65 30 L85 45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
                                                <path d="M15 35 L30 60 L55 30 L70 55 L85 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
                                                {/* Dots */}
                                                <circle cx="25" cy="30" r="1.5" stroke="currentColor" fill="none" strokeDasharray="1,1" />
                                                <circle cx="45" cy="55" r="1.5" stroke="currentColor" fill="none" strokeDasharray="1,1" />
                                                <circle cx="65" cy="20" r="1.5" stroke="currentColor" fill="none" strokeDasharray="1,1" />
                                                <circle cx="75" cy="45" r="1.5" stroke="currentColor" fill="none" strokeDasharray="1,1" />
                                            </svg>
                                        )}
                                        {projectId === 'holdo-website-mobile-first' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100">
                                                {/* Single column wireframe */}
                                                <rect x="20" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                                                {/* Hero block */}
                                                <rect x="25" y="20" width="50" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" />
                                                {/* Image placeholder */}
                                                <rect x="25" y="40" width="50" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" />
                                                <line x1="25" y1="40" x2="75" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
                                                <line x1="75" y1="40" x2="25" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
                                            </svg>
                                        )}
                                        {projectId === 'reservadisimo' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100">
                                                {/* Text messaging mock (whatsapp booking) */}
                                                <rect x="15" y="15" width="50" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2" />
                                                <line x1="20" y1="22" x2="55" y2="22" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" />
                                                <line x1="20" y1="28" x2="45" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" />
                                                
                                                <rect x="35" y="45" width="50" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2,2" />
                                                <line x1="40" y1="52" x2="75" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" />
                                                <line x1="40" y1="58" x2="65" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="1,1" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {type === 'findings' && (
                            <div className={styles.columns}>
                                <div className={styles.sidebar}>
                                    <div className={`${styles.line} ${styles.lineMedium}`} />
                                    <div className={styles.line} />
                                    <div className={`${styles.line} ${styles.lineShort}`} />
                                </div>
                                <div className={styles.mainPanel} style={{ gap: '10px' }}>
                                    {/* Simple Bar Chart */}
                                    <div className={styles.chartContainer}>
                                        <div className={styles.chartBar} style={{ height: '30%' }} />
                                        <div className={styles.chartBar} style={{ height: '70%' }} />
                                        <div className={styles.chartBar} style={{ height: '50%' }} />
                                        <div className={styles.chartBar} style={{ height: '90%' }} />
                                    </div>

                                    {/* Speech Bubble */}
                                    <div className={styles.feedbackBubble}>
                                        <p className={styles.bubbleText}>
                                            {feedbackQuote}
                                        </p>
                                        <p className={styles.bubbleAuthor}>{feedbackAuthor}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {type === 'solution' && (
                            <div className={styles.columns}>
                                <div className={styles.sidebar}>
                                    <div className={styles.line} />
                                    <div className={`${styles.line} ${styles.lineMedium}`} />
                                    <div className={styles.line} />
                                    <div className={styles.line} />
                                </div>
                                <div className={styles.mainPanel} style={{ paddingBottom: '0' }}>
                                    <div className={styles.mannequinContainer} style={{ height: 'calc(100% - 32px)' }}>
                                        {projectId === 'agilidad-inspiracional' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100" style={{ height: '95%' }}>
                                                {/* Hanger hook */}
                                                <path d="M50 22 C50 16, 55 16, 55 19 C55 22, 50 24, 50 26" />
                                                {/* Hanger shoulders */}
                                                <path d="M28 32 L50 26 L72 32 Z" />
                                                {/* Finished dress with filled lines and nice detailing */}
                                                <path
                                                    fill="rgba(var(--fg-rgb), 0.03)"
                                                    d="M34 32 C36 46, 40 50, 37 68 C35 78, 28 82, 22 86 L78 86 C72 82, 65 78, 63 68 C60 50, 64 46, 66 32 Z"
                                                />
                                                {/* Belt/detail */}
                                                <path d="M38 52 C45 54, 55 54, 62 52" />
                                                {/* Pleats details */}
                                                <path d="M32 86 L36 68" strokeDasharray="2,2" opacity="0.5" />
                                                <path d="M50 86 L50 68" strokeDasharray="2,2" opacity="0.5" />
                                                <path d="M68 86 L64 68" strokeDasharray="2,2" opacity="0.5" />
                                            </svg>
                                        )}
                                        {projectId === 'app-movil-holdo' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100" style={{ height: '95%' }}>
                                                {/* Phone container (solid) */}
                                                <rect x="28" y="6" width="44" height="88" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
                                                <rect x="42" y="6" width="16" height="3" rx="1.5" fill="currentColor" />
                                                {/* Wallet header */}
                                                <rect x="36" y="16" width="28" height="5" rx="1.5" fill="rgba(var(--fg-rgb), 0.06)" stroke="currentColor" strokeWidth="0.8" />
                                                {/* Clean solid trend chart */}
                                                <path d="M32 65 L44 52 L52 58 L68 36" fill="none" stroke="currentColor" strokeWidth="2" />
                                                <circle cx="68" cy="36" r="2.5" fill="currentColor" />
                                                {/* CTA button */}
                                                <rect x="36" y="76" width="28" height="8" rx="3" fill="currentColor" />
                                            </svg>
                                        )}
                                        {projectId === 'reduciendo-drop-off-onboarding' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100" style={{ height: '95%' }}>
                                                {/* Clean line chart */}
                                                <path d="M15 70 Q38 58 55 35 T85 18" fill="none" stroke="currentColor" strokeWidth="2.2" />
                                                <path d="M15 70 Q38 58 55 35 T85 18 L85 75 L15 75 Z" fill="rgba(var(--fg-rgb), 0.04)" stroke="none" />
                                                {/* Interactive Slider representation */}
                                                <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="2.2" />
                                                <circle cx="50" cy="80" r="3.5" fill="currentColor" />
                                                <rect x="44" y="68" width="12" height="5" rx="1" fill="currentColor" />
                                            </svg>
                                        )}
                                        {projectId === 'holdo-website-mobile-first' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100" style={{ height: '95%' }}>
                                                {/* Screen stack (desktop + phone frontmost) */}
                                                <rect x="12" y="18" width="54" height="34" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                                <line x1="12" y1="46" x2="66" y2="46" stroke="currentColor" strokeWidth="1" />
                                                
                                                <rect x="44" y="32" width="22" height="34" rx="2" fill="var(--color-bg-primary)" stroke="currentColor" strokeWidth="1.5" />
                                                
                                                <rect x="60" y="45" width="15" height="26" rx="2.2" fill="var(--color-bg-primary)" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        )}
                                        {projectId === 'reservadisimo' && (
                                            <svg className={styles.svgIcon} viewBox="0 0 100 100" style={{ height: '95%' }}>
                                                {/* QR ticket details */}
                                                <rect x="26" y="8" width="48" height="84" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                                {/* QR mockup */}
                                                <rect x="35" y="18" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.2" />
                                                <rect x="39" y="22" width="8" height="8" fill="currentColor" />
                                                <rect x="53" y="22" width="8" height="8" fill="currentColor" />
                                                <rect x="39" y="36" width="8" height="8" fill="currentColor" />
                                                <rect x="53" y="36" width="4" height="4" fill="currentColor" />
                                                <rect x="57" y="40" width="4" height="4" fill="currentColor" />
                                                {/* Confirmation lines */}
                                                <line x1="32" y1="62" x2="68" y2="62" stroke="currentColor" strokeWidth="2" />
                                                <line x1="32" y1="68" x2="58" y2="68" stroke="currentColor" strokeWidth="1.2" />
                                                <circle cx="50" cy="78" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        )}
                                    </div>

                                    {/* Bottom label bar */}
                                    <div className={styles.promptBar}>
                                        <span className={styles.promptText}>{promptText}</span>
                                        <span className={styles.promptBtn}>→</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating Tag/Card */}
                <div
                    className={styles.floatingCard}
                    style={{
                        top: type === 'findings' ? '70%' : '15%',
                        right: type === 'inspiration' ? '-5%' : type === 'findings' ? '65%' : '-8%',
                    }}
                >
                    {floatingTag}
                </div>
            </div>
        </div>
    );
}

