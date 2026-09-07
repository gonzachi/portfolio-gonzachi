import type { Metadata } from 'next';
import { projects } from '@/data/content';
import SiteNav from '@/components/chat/SiteNav';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import CaseStudyFooter from '@/components/project/CaseStudyFooter';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import { redirect } from 'next/navigation';
import { hasProjectAccess } from '@/lib/project-auth/access';
import styles from './page.module.css';

const TITLE = 'Diseñando el futuro de la creatividad en moda con IA | Gonzalo Chiavassa';
const DESCRIPTION =
  'Cómo diseñé la plataforma interna de IA generativa que usan hoy cientos de diseñadores de Mango para acelerar su proceso creativo — de la investigación en 5 departamentos a las decisiones de producto detrás de la herramienta.';
const OG_IMAGE = '/assets/projects/moda.jpg';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/project/agilidad-inspiracional',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: '/project/agilidad-inspiracional',
    images: [
      {
        url: OG_IMAGE,
        width: 1440,
        height: 747,
        alt: 'Plataforma de IA generativa para diseñadores de moda en Mango — case study de Gonzalo Chiavassa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Import Custom Visual Components for Mango IA Case Study
import HeroAbstractMotion from '@/components/project/mango-ia/HeroAbstractMotion';
import OpportunityDiagram from '@/components/project/mango-ia/OpportunityDiagram';
import DiscoveryMap from '@/components/project/mango-ia/DiscoveryMap';
import WorkflowConvergenceDiagram from '@/components/project/mango-ia/WorkflowConvergenceDiagram';
import BigInsightVisual from '@/components/project/mango-ia/BigInsightVisual';
import ShapingProductTimeline from '@/components/project/mango-ia/ShapingProductTimeline';
import RetoTimeline from '@/components/project/mango-ia/RetoTimeline';
import CanvasVsChatComparison from '@/components/project/mango-ia/CanvasVsChatComparison';
import ModelosComparisonTable from '@/components/project/mango-ia/ModelosComparisonTable';
import EngineeringVennDiagram from '@/components/project/mango-ia/EngineeringVennDiagram';
import CleanDashboardMock from '@/components/project/mango-ia/CleanDashboardMock';
import LearningsFiveCards from '@/components/project/mango-ia/LearningsFiveCards';
import HeroSystemDiagram from '@/components/project/mango-ia/HeroSystemDiagram';

export default async function ProjectPage() {
  const hasAccess = await hasProjectAccess('agilidad-inspiracional');
  if (!hasAccess) {
    redirect('/project/agilidad-inspiracional/gate');
  }
  const projectIndex = projects.findIndex((p) => p.id === 'agilidad-inspiracional');
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const thumbnails: Record<string, string> = {
    'agilidad-inspiracional': '/assets/projects/moda.jpg',
    'app-movil-holdo': '/assets/home/portada-caso-app-holdo.jpg',
    'reduciendo-drop-off-onboarding': '/assets/home/portada-caso-holdo-ladrillo-light.jpg',
    'holdo-website-mobile-first': '/assets/projects/holdo-web-1.jpg',
    'reservadisimo': '/images/project4-4.png',
    'orquestadora-de-equipos': '',
    'club-fidelizacion-referidos': '',
  };

  const scopeOfWorkChips = [
    'Discovery',
    'User Research',
    'Product Strategy',
    'MVP Definition',
    'UX Design',
    'Prototyping',
    'Validation',
    'Prioritization',
    'Product Evolution',
  ];

  const projectSnapshot = [
    { label: 'Role', value: 'Senior Product Designer' },
    { label: 'Timeline', value: '2023 — Present' },
    { label: 'Team', value: 'PM · 2 Product Designers · Engineers · AI Engineers' },
    { label: 'Users', value: 'Fashion Designers' },
    { label: 'Status', value: 'In Production' },
  ];

  return (
    <>
      <ScrollToTop />
      <ScrollRevealInit />

      <SiteNav />

      {/* FULLSCREEN HERO (100VH) */}
      <section className={styles.fullscreenHero}>
        <div className={styles.fullscreenHeroContainer}>
          <ScrollReveal delay={0.1}>
            <h1 className={styles.heroTitleClean}>
              <span data-lang="en">Designing the future of fashion creativity with AI</span>
              <span data-lang="es">Diseñando el futuro de la creatividad en moda con IA</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className={styles.heroSubtitleClean}>
              <span data-lang="en">The challenge wasn&apos;t generating images. It was helping designers materialize ideas faster.</span>
              <span data-lang="es">El reto no era generar imágenes. Era ayudar a los diseñadores a materializar ideas más rápido.</span>
            </p>
          </ScrollReveal>

          <div style={{ width: '100%' }}>
            <HeroSystemDiagram />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span>SCROLL</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <main className={styles.mainContainer}>

        {/* 00 / EXECUTIVE SUMMARY */}
        <section className={styles.execBriefingSection}>
          <div className={styles.execBriefingContainer}>
            <ScrollReveal delay={0.1}>
              <span className={styles.execEyebrow}>00 / EXECUTIVE SUMMARY</span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <div className={styles.execTableWrapper}>
                {/* Project Title Row */}
                <div className={styles.execTableRow}>
                  <span className={styles.execTableKey}>Project</span>
                  <span className={styles.execTableTitleVal}>
                    <span data-lang="en">AI Image Generation Platform</span>
                    <span data-lang="es">Plataforma de IA para el proceso creativo de moda</span>
                  </span>
                </div>

                {/* Description Row */}
                <div className={styles.execTableRow}>
                  <span className={styles.execTableKey}>Description</span>
                  <span className={styles.execTableVal}>
                    <span data-lang="en">An internal AI platform designed to accelerate the creative workflow of fashion designers using generative AI.</span>
                    <span data-lang="es">Una plataforma interna de IA diseñada para acelerar el flujo de trabajo creativo de los diseñadores de moda mediante IA generativa.</span>
                  </span>
                </div>

                {/* Metadata rows — tall */}
                {projectSnapshot.map((item, index) => (
                  <div key={index} className={styles.execTableRow}>
                    <span className={styles.execTableKey}>{item.label}</span>
                    <span className={styles.execTableVal}>{item.value}</span>
                  </div>
                ))}

                {/* Tags row */}
                <div className={styles.execTableTagsRow}>
                  {scopeOfWorkChips.map((chip, idx) => (
                    <span key={idx} className={styles.execChip}>{chip}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 01 / THE OPPORTUNITY */}
        <section className={styles.oppSection}>
          <div className={styles.oppContainer}>
            {/* Header */}
            <ScrollReveal delay={0.1}>
              <div className={styles.oppHeader}>
                <span className={styles.oppEyebrow}>01 / THE OPPORTUNITY</span>
                <h2 className={styles.oppHeading}>
                  <span data-lang="en">AI didn&apos;t solve an existing problem. It challenged the way fashion designers worked.</span>
                  <span data-lang="es">La IA no resolvió un problema existente. Cuestionó la forma en que los diseñadores de moda trabajaban.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Body & Diagram Grid */}
            <div className={styles.oppBodyGrid}>
              <ScrollReveal delay={0.2} direction="up" className={styles.oppTextCol}>
                <p>
                  <span data-lang="en">When generative AI started evolving, we saw an opportunity to rethink part of the creative process behind fashion design.</span>
                  <span data-lang="es">Cuando la IA generativa comenzó a evolucionar, vimos la oportunidad de replantear parte del proceso creativo en el diseño de moda.</span>
                </p>
                <p>
                  <span data-lang="en">Designers already had established workflows for exploring ideas, creating moodboards and developing concepts. The process worked—but it relied heavily on manual exploration, making early ideation slow and time-consuming.</span>
                  <span data-lang="es">Los diseñadores ya tenían flujos de trabajo establecidos para explorar ideas, crear moodboards y desarrollar conceptos. El proceso funcionaba, pero dependía en gran medida de la exploración manual, lo que hacía que la ideación temprana fuera lenta y costosa en tiempo.</span>
                </p>
                <p>
                  <span data-lang="en">Before designing a product, we needed to answer a much more important question.</span>
                  <span data-lang="es">Antes de diseñar un producto, necesitábamos responder una pregunta mucho más importante.</span>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="up" className={styles.oppVisualCol}>
                <OpportunityDiagram />
              </ScrollReveal>
            </div>

            {/* Editorial Quote Card */}
            <ScrollReveal delay={0.4} direction="up" className={styles.oppQuoteSection}>
              <div className={styles.oppQuoteCard}>
                <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className={styles.oppEditorialQuote}>
                  <span data-lang="en">&ldquo;Could generative AI become a natural part of a fashion designer&apos;s creative workflow?&rdquo;</span>
                  <span data-lang="es">&ldquo;¿Podría la IA generativa convertirse en una parte natural del flujo de trabajo creativo de un diseñador de moda?&rdquo;</span>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 02 / UNDERSTANDING THE CREATIVE PROCESS */}
        <section className={styles.discSection}>
          <div className={styles.discContainer}>
            {/* Split: text left / diagram right */}
            <div className={styles.discSplitLayout}>
              {/* Left: header + description */}
              <ScrollReveal delay={0.1} className={styles.discLeftCol}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span className={styles.discEyebrow}>02 / UNDERSTANDING THE CREATIVE PROCESS</span>
                  <h2 className={styles.discHeading}>
                    <span data-lang="en">Understanding came before designing.</span>
                    <span data-lang="es">Comprender antes de diseñar.</span>
                  </h2>
                </div>
                <p>
                  <span data-lang="en">Before designing interfaces, we first needed to understand how creative work actually happened.</span>
                  <span data-lang="es">Antes de diseñar interfaces, necesitábamos entender cómo ocurría realmente el trabajo creativo.</span>
                </p>
                <p>
                  <span data-lang="en">Together with another Product Designer, we interviewed designers from different departments, observed how they explored ideas and mapped their creative workflows.</span>
                  <span data-lang="es">Junto con otra Product Designer, entrevistamos a diseñadores de distintos departamentos, observamos cómo exploraban ideas y mapeamos sus flujos de trabajo creativos.</span>
                </p>
                <p>
                  <span data-lang="en">The objective wasn&apos;t to find one perfect process. It was to identify recurring patterns that could inform meaningful product decisions.</span>
                  <span data-lang="es">El objetivo no era encontrar un proceso perfecto. Era identificar patrones recurrentes que pudieran orientar decisiones de producto significativas.</span>
                </p>
              </ScrollReveal>

              {/* Right: animated diagram */}
              <ScrollReveal delay={0.25} direction="up" className={styles.discRightCol}>
                <WorkflowConvergenceDiagram />
              </ScrollReveal>
            </div>

            {/* Department Discovery Map */}
            <ScrollReveal delay={0.35} direction="up">
              <div style={{ marginTop: '3.5rem' }}>
                <DiscoveryMap />
              </div>
            </ScrollReveal>

            {/* Closing Quote Card */}
            <ScrollReveal delay={0.5} direction="up" className={styles.oppQuoteSection}>
              <div className={styles.oppQuoteCard}>
                <svg className={styles.quoteIcon} width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className={styles.oppEditorialQuote}>
                  <span data-lang="en">The research wasn&apos;t about validating ideas. It was about discovering where AI could truly help.</span>
                  <span data-lang="es">La investigación no era para validar ideas. Era para descubrir dónde la IA podía ayudar de verdad.</span>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 03 / THE INSIGHT */}
        <section className={styles.insightSection}>
          <div className={styles.insightContainer}>
            {/* Header Centered */}
            <ScrollReveal delay={0.1}>
              <div className={styles.insightHeaderCentered}>
                <span className={styles.insightEyebrow}>03 / THE INSIGHT</span>
                <h2 className={styles.insightHeading}>
                  <span data-lang="en">The bottleneck wasn&apos;t creativity. It was turning ideas into something tangible.</span>
                  <span data-lang="es">El cuello de botella no era la creatividad. Era transformar ideas en algo tangible.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Description Centered */}
            <ScrollReveal delay={0.2} direction="up" className={styles.insightDescriptionCentered}>
              <p>
                <span data-lang="en">After analysing interviews, workflows and recurring behaviours, one shared pattern emerged across every team.</span>
                <span data-lang="es">Tras analizar entrevistas, flujos de trabajo y comportamientos recurrentes, un patrón común emergió en todos los equipos.</span>
              </p>
              <p>
                <span data-lang="en">Designers didn&apos;t struggle to generate ideas. They struggled to communicate them, explore different directions and transform abstract concepts into something visual that could be discussed, refined and validated.</span>
                <span data-lang="es">Los diseñadores no tenían dificultad para generar ideas. Tenían dificultad para comunicarlas, explorar distintas direcciones y transformar conceptos abstractos en algo visual que pudiera discutirse, refinarse y validarse.</span>
              </p>
              <p>
                <span data-lang="en">To do that, they relied on references, moodboards, Photoshop compositions and countless manual iterations.</span>
                <span data-lang="es">Para lograrlo, dependían de referencias, moodboards, composiciones en Photoshop e incontables iteraciones manuales.</span>
              </p>
            </ScrollReveal>

            {/* Transformation Visual */}
            <ScrollReveal delay={0.3} direction="up" className={styles.insightVisualCentered}>
              <BigInsightVisual />
            </ScrollReveal>

            <div className={styles.insightDivider} />

            {/* Key Takeaway Quote */}
            <ScrollReveal delay={0.4} direction="up" className={styles.insightQuoteSection}>
              <blockquote className={styles.insightEditorialQuote}>
                <span data-lang="en">&ldquo;We realized that AI wasn&apos;t replacing creativity. It could dramatically accelerate the journey from idea to concept.&rdquo;</span>
                <span data-lang="es">&ldquo;Nos dimos cuenta de que la IA no reemplazaba la creatividad. Podía acelerar drásticamente el camino de la idea al concepto.&rdquo;</span>
              </blockquote>
            </ScrollReveal>

            <div className={styles.insightDivider} />

            {/* Transition Subtext */}
            <ScrollReveal delay={0.5} direction="up" className={styles.insightTransitionSection}>
              <p className={styles.insightTransitionText}>
                <span data-lang="en">Once we understood the real bottleneck, every product decision became much clearer.</span>
                <span data-lang="es">Una vez que entendimos el verdadero cuello de botella, cada decisión de producto se volvió mucho más clara.</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 04 / SHAPING THE PRODUCT */}
        <section className={styles.shapingSection}>
          <div className={styles.shapingContainer}>
            {/* Header Centered */}
            <ScrollReveal delay={0.1}>
              <div className={styles.shapingHeaderCentered}>
                <span className={styles.shapingEyebrow}>04 / SHAPING THE PRODUCT</span>
                <h2 className={styles.shapingHeading}>
                  <span data-lang="en">Every feature was the result of a product decision—not a design preference.</span>
                  <span data-lang="es">Cada funcionalidad fue el resultado de una decisión de producto, no de una preferencia de diseño.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Description Centered */}
            <ScrollReveal delay={0.2} direction="up" className={styles.shapingDescriptionCentered}>
              <p>
                <span data-lang="en">Throughout the project we constantly faced trade-offs. Instead of chasing the most powerful solution, we focused on building the product that delivered value sooner, reduced uncertainty and could evolve over time.</span>
                <span data-lang="es">A lo largo del proyecto nos enfrentamos constantemente a trade-offs. En lugar de perseguir la solución más potente, nos centramos en construir el producto que entregara valor antes, redujera la incertidumbre y pudiera evolucionar con el tiempo.</span>
              </p>
            </ScrollReveal>

            {/* Collaboration Model: Users / Business / Engineering */}
            <ScrollReveal delay={0.25} direction="up">
              <div style={{ marginBottom: '3rem' }}>
                <EngineeringVennDiagram />
              </div>
            </ScrollReveal>

            {/* 5 Sequential Decision Blocks Timeline */}
            <ScrollReveal delay={0.3} direction="up" className={styles.shapingTimelineWrapper}>
              <ShapingProductTimeline />
            </ScrollReveal>

            {/* Own vs. External AI Models — Strategic Decision */}
            <ScrollReveal delay={0.35} direction="up">
              <div style={{ marginTop: '3rem' }}>
                <ModelosComparisonTable />
              </div>
            </ScrollReveal>

            {/* Validation Process Paragraph */}
            <ScrollReveal delay={0.4} direction="up">
              <p className={styles.shapingFooterText}>
                <span data-lang="en">Each of these decisions followed a validation process between product, technical team, and users to bring us as close as possible to the best decision.</span>
                <span data-lang="es">Cada una de estas decisiones siguió un proceso de validación entre producto, equipo técnico y usuarios para así acercarnos a la mejor decisión posible.</span>
              </p>
            </ScrollReveal>


          </div>
        </section>

        {/* 05 / PRODUCT EVOLUTION */}
        <section className={styles.evolSection}>
          <div className={styles.evolContainer}>
            {/* Header Centered */}
            <ScrollReveal delay={0.1}>
              <div className={styles.evolHeaderCentered}>
                <span className={styles.evolEyebrow}>05 / PRODUCT EVOLUTION</span>
                <h2 className={styles.evolHeading}>
                  <span data-lang="en">Launching the MVP was just the beginning.</span>
                  <span data-lang="es">Lanzar el MVP fue solo el principio.</span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Description Centered */}
            <ScrollReveal delay={0.2} direction="up" className={styles.evolDescriptionCentered}>
              <p>
                <span data-lang="en">Shipping the first version gave us something far more valuable than a finished product: <strong>real user feedback</strong>.</span>
                <span data-lang="es">Lanzar la primera versión nos dio algo mucho más valioso que un producto terminado: <strong>feedback real de usuarios</strong>.</span>
              </p>
              <p>
                <span data-lang="en">As generative AI rapidly evolved, new capabilities emerged almost every month. Instead of treating the platform as a completed solution, we continuously reassessed priorities, explored new opportunities and refined the experience based on user needs, technical feasibility and business goals.</span>
                <span data-lang="es">A medida que la IA generativa evolucionaba rápidamente, surgían nuevas capacidades casi cada mes. En lugar de tratar la plataforma como una solución terminada, reevaluábamos continuamente las prioridades, explorábamos nuevas oportunidades y refinábamos la experiencia en función de las necesidades de los usuarios, la viabilidad técnica y los objetivos de negocio.</span>
              </p>
              <p>
                <span data-lang="en">Product evolution became a continuous cycle of learning rather than a sequence of feature releases.</span>
                <span data-lang="es">La evolución del producto se convirtió en un ciclo continuo de aprendizaje, no en una secuencia de lanzamientos de funcionalidades.</span>
              </p>
            </ScrollReveal>

            {/* Main Visual Cycle Timeline */}
            <ScrollReveal delay={0.3} direction="up" className={styles.evolVisualCentered}>
              <RetoTimeline />
            </ScrollReveal>

            {/* The Product Today */}
            <ScrollReveal delay={0.35} direction="up">
              <div style={{ marginTop: '3rem' }}>
                <CleanDashboardMock />
              </div>
            </ScrollReveal>

            <div className={styles.evolDivider} />

            {/* Continuous Evolution Influencing Drivers (4 Columns) */}
            <ScrollReveal delay={0.4} direction="up" className={styles.evolDriversGrid}>

              {/* Card 1 — User Feedback */}
              <div className={styles.evolDriverCard}>
                <svg className={styles.evolDriverIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <div className={styles.evolDriverBody}>
                  <h4 className={styles.evolDriverTitle}>
                    <span data-lang="en">User Feedback</span>
                    <span data-lang="es">Feedback de Usuarios</span>
                  </h4>
                  <p className={styles.evolDriverSub}>
                    <span data-lang="en">Interviews, conversations and observation of real workflows.</span>
                    <span data-lang="es">Entrevistas, conversaciones y observación de flujos de trabajo reales.</span>
                  </p>
                </div>
              </div>

              {/* Card 2 — Technology */}
              <div className={styles.evolDriverCard}>
                <svg className={styles.evolDriverIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                <div className={styles.evolDriverBody}>
                  <h4 className={styles.evolDriverTitle}>
                    <span data-lang="en">Technology</span>
                    <span data-lang="es">Tecnología</span>
                  </h4>
                  <p className={styles.evolDriverSub}>
                    <span data-lang="en">New AI capabilities constantly changed what was possible.</span>
                    <span data-lang="es">Las nuevas capacidades de IA cambiaban constantemente lo que era posible.</span>
                  </p>
                </div>
              </div>

              {/* Card 3 — Engineering */}
              <div className={styles.evolDriverCard}>
                <svg className={styles.evolDriverIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                  <path d="M17.66 6.34a8 8 0 0 1 0 11.32M6.34 6.34a8 8 0 0 0 0 11.32"/>
                </svg>
                <div className={styles.evolDriverBody}>
                  <h4 className={styles.evolDriverTitle}>
                    <span data-lang="en">Engineering</span>
                    <span data-lang="es">Ingeniería</span>
                  </h4>
                  <p className={styles.evolDriverSub}>
                    <span data-lang="en">Technical constraints and implementation effort influenced prioritization.</span>
                    <span data-lang="es">Las restricciones técnicas y el esfuerzo de implementación influyeron en la priorización.</span>
                  </p>
                </div>
              </div>

              {/* Card 4 — Business */}
              <div className={styles.evolDriverCard}>
                <svg className={styles.evolDriverIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <div className={styles.evolDriverBody}>
                  <h4 className={styles.evolDriverTitle}>
                    <span data-lang="en">Business</span>
                    <span data-lang="es">Negocio</span>
                  </h4>
                  <p className={styles.evolDriverSub}>
                    <span data-lang="en">Product priorities evolved alongside adoption and organisational needs.</span>
                    <span data-lang="es">Las prioridades de producto evolucionaron junto con la adopción y las necesidades organizativas.</span>
                  </p>
                </div>
              </div>

            </ScrollReveal>


          </div>
        </section>

        {/* 06 / OUTCOMES & IMPACT */}
        <section className={styles.impactSection}>
          <div className={styles.impactContainer}>
            {/* Horizontal Split Layout: Text Left / Cards Right */}
            <div className={styles.impactSplitLayout}>
              {/* Left Column: Header & Description */}
              <ScrollReveal delay={0.1} className={styles.impactLeftCol}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span className={styles.impactEyebrow}>06 / OUTCOMES &amp; IMPACT</span>
                  <h2 className={styles.impactHeading}>
                    <span data-lang="en">The biggest outcome wasn&apos;t the technology. It was changing the way designers worked.</span>
                    <span data-lang="es">El mayor resultado no fue la tecnología. Fue cambiar la forma en que los diseñadores trabajaban.</span>
                  </h2>
                </div>
                <p>
                  <span data-lang="en">Because this is an internal product, I can&apos;t share exact adoption numbers or business KPIs — but today the platform is used by hundreds of designers across Mango.</span>
                  <span data-lang="es">Al tratarse de un producto interno, no puedo compartir cifras exactas de adopción ni KPIs de negocio — pero hoy la plataforma la usan cientos de diseñadores en Mango.</span>
                </p>
                <p>
                  <span data-lang="en">What I can share is the type of impact the platform generated across the organization.</span>
                  <span data-lang="es">Lo que sí puedo compartir es el tipo de impacto que la plataforma generó en toda la organización.</span>
                </p>
                <p>
                  <span data-lang="en">Rather than replacing creativity, it became a new tool for exploring ideas, accelerating visual iteration and helping design teams incorporate generative AI into their everyday workflow.</span>
                  <span data-lang="es">En lugar de reemplazar la creatividad, se convirtió en una nueva herramienta para explorar ideas, acelerar la iteración visual e integrar la IA generativa en el flujo de trabajo diario de los equipos de diseño.</span>
                </p>
                <p>
                  <span data-lang="en">The product also evolved from an experiment into a strategic internal capability with continuous investment and growing adoption.</span>
                  <span data-lang="es">El producto también evolucionó de un experimento a una capacidad interna estratégica con inversión continua y adopción creciente.</span>
                </p>
              </ScrollReveal>

              {/* Right Column: 4 Impact Cards */}
              <ScrollReveal delay={0.25} direction="up" className={styles.impactRightCol}>
                <div className={styles.impactGrid}>
                  {/* Card 1 */}
                  <div className={styles.impactCard}>
                    <svg className={styles.impactCardIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                    <div className={styles.impactCardBody}>
                      <h4 className={styles.impactCardTitle}>
                        <span data-lang="en">Faster Exploration</span>
                        <span data-lang="es">Exploración más Rápida</span>
                      </h4>
                      <p className={styles.impactCardSub}>
                        <span data-lang="en">Designers could visualize ideas much earlier in the creative process.</span>
                        <span data-lang="es">Los diseñadores podían visualizar ideas mucho antes en el proceso creativo.</span>
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className={styles.impactCard}>
                    <svg className={styles.impactCardIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                      <polyline points="2 17 12 22 22 17"/>
                      <polyline points="2 12 12 17 22 12"/>
                    </svg>
                    <div className={styles.impactCardBody}>
                      <h4 className={styles.impactCardTitle}>
                        <span data-lang="en">New Creative Workflows</span>
                        <span data-lang="es">Nuevos Flujos de Trabajo Creativos</span>
                      </h4>
                      <p className={styles.impactCardSub}>
                        <span data-lang="en">AI became part of the design process instead of remaining an isolated experiment.</span>
                        <span data-lang="es">La IA pasó a formar parte del proceso de diseño en lugar de quedarse como un experimento aislado.</span>
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className={styles.impactCard}>
                    <svg className={styles.impactCardIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <div className={styles.impactCardBody}>
                      <h4 className={styles.impactCardTitle}>
                        <span data-lang="en">Cross-functional Collaboration</span>
                        <span data-lang="es">Colaboración Transversal</span>
                      </h4>
                      <p className={styles.impactCardSub}>
                        <span data-lang="en">Product, Design and Engineering continuously evolved the platform together.</span>
                        <span data-lang="es">Producto, Diseño e Ingeniería evolucionaron la plataforma conjuntamente de forma continua.</span>
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className={styles.impactCard}>
                    <svg className={styles.impactCardIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                    <div className={styles.impactCardBody}>
                      <h4 className={styles.impactCardTitle}>
                        <span data-lang="en">Foundation for Future Growth</span>
                        <span data-lang="es">Base para el Crecimiento Futuro</span>
                      </h4>
                      <p className={styles.impactCardSub}>
                        <span data-lang="en">The product was designed to evolve alongside advances in generative AI.</span>
                        <span data-lang="es">El producto fue diseñado para evolucionar junto con los avances en IA generativa.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className={styles.impactDivider} />

            {/* Reflection Block */}
            <ScrollReveal delay={0.4} direction="up" className={styles.reflectionBlock}>
              <span className={styles.reflectionTitle}>
                <span data-lang="en">Beyond the Product</span>
                <span data-lang="es">Más Allá del Producto</span>
              </span>
              <p className={styles.reflectionBody}>
                <span data-lang="en">One of the biggest lessons from this project was understanding that designing AI products isn&apos;t about predicting the future. It&apos;s about building systems that can continuously adapt as both technology and user behaviour evolve.</span>
                <span data-lang="es">Una de las mayores lecciones de este proyecto fue entender que diseñar productos de IA no consiste en predecir el futuro. Consiste en construir sistemas que puedan adaptarse continuamente a medida que evolucionan tanto la tecnología como el comportamiento de los usuarios.</span>
              </p>
            </ScrollReveal>


          </div>
        </section>

        {/* 07 / REFLECTIONS */}
        <section className={styles.reflectSection}>
          <div className={styles.reflectContainer}>
            {/* Horizontal Split Layout: Text Left / Principles Right */}
            <div className={styles.reflectSplitLayout}>
              {/* Left Column: Header & Description */}
              <ScrollReveal delay={0.1} className={styles.reflectLeftCol}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span className={styles.reflectEyebrow}>07 / REFLECTIONS</span>
                  <h2 className={styles.reflectHeading}>
                    <span data-lang="en">What this project changed about the way I think.</span>
                    <span data-lang="es">Lo que este proyecto cambió en mi forma de pensar.</span>
                  </h2>
                </div>
                <p>
                  <span data-lang="en">Building this product changed my understanding of Product Design.</span>
                  <span data-lang="es">Construir este producto cambió mi comprensión del Product Design.</span>
                </p>
                <p>
                  <span data-lang="en">I started the project thinking primarily about interfaces and user flows.</span>
                  <span data-lang="es">Empecé el proyecto pensando principalmente en interfaces y flujos de usuario.</span>
                </p>
                <p>
                  <span data-lang="en">I finished it thinking much more about product strategy, decision-making and how teams continuously learn while building.</span>
                  <span data-lang="es">Lo terminé pensando mucho más en estrategia de producto, toma de decisiones y cómo los equipos aprenden continuamente mientras construyen.</span>
                </p>
                <p>
                  <span data-lang="en">More than designing screens, I learned how important it is to understand problems deeply before committing to solutions.</span>
                  <span data-lang="es">Más que diseñar pantallas, aprendí lo importante que es entender los problemas en profundidad antes de comprometerse con soluciones.</span>
                </p>
              </ScrollReveal>

              {/* Right Column: 5 Principles Grid */}
              <ScrollReveal delay={0.25} direction="up" className={styles.reflectRightCol}>
                <div className={styles.principlesList}>

                  {/* 01 — Start with the problem */}
                  <div className={styles.principleItem}>
                    <svg className={styles.principleIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <div className={styles.principleBody}>
                      <h4 className={styles.principleTitle}>
                        <span data-lang="en">Start with the problem, not the technology.</span>
                        <span data-lang="es">Empieza por el problema, no por la tecnología.</span>
                      </h4>
                      <p className={styles.principleSub}>
                        <span data-lang="en">AI evolves quickly. User problems evolve much more slowly.</span>
                        <span data-lang="es">La IA evoluciona rápidamente. Los problemas de los usuarios evolucionan mucho más despacio.</span>
                      </p>
                    </div>
                  </div>

                  {/* 02 — Decisions, not features */}
                  <div className={styles.principleItem}>
                    <svg className={styles.principleIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                    <div className={styles.principleBody}>
                      <h4 className={styles.principleTitle}>
                        <span data-lang="en">Good products emerge through decisions, not features.</span>
                        <span data-lang="es">Los buenos productos emergen a través de decisiones, no de funcionalidades.</span>
                      </h4>
                      <p className={styles.principleSub}>
                        <span data-lang="en">Every important feature was the result of balancing users, business and engineering constraints.</span>
                        <span data-lang="es">Cada funcionalidad importante fue el resultado de equilibrar las necesidades de usuarios, negocio e ingeniería.</span>
                      </p>
                    </div>
                  </div>

                  {/* 03 — Discovery never ends */}
                  <div className={styles.principleItem}>
                    <svg className={styles.principleIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                    <div className={styles.principleBody}>
                      <h4 className={styles.principleTitle}>
                        <span data-lang="en">Discovery never really ends.</span>
                        <span data-lang="es">El discovery nunca termina de verdad.</span>
                      </h4>
                      <p className={styles.principleSub}>
                        <span data-lang="en">Launching the MVP was simply the beginning of the learning process.</span>
                        <span data-lang="es">Lanzar el MVP fue simplemente el comienzo del proceso de aprendizaje.</span>
                      </p>
                    </div>
                  </div>

                  {/* 04 — Collaboration */}
                  <div className={styles.principleItem}>
                    <svg className={styles.principleIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <div className={styles.principleBody}>
                      <h4 className={styles.principleTitle}>
                        <span data-lang="en">Collaboration creates better products.</span>
                        <span data-lang="es">La colaboración crea mejores productos.</span>
                      </h4>
                      <p className={styles.principleSub}>
                        <span data-lang="en">The best decisions came from working closely with Product Managers, Engineers and Designers rather than designing in isolation.</span>
                        <span data-lang="es">Las mejores decisiones surgieron de trabajar estrechamente con Product Managers, Ingenieros y Diseñadores, no diseñando en aislamiento.</span>
                      </p>
                    </div>
                  </div>

                  {/* 05 — Best design is invisible */}
                  <div className={styles.principleItem}>
                    <svg className={styles.principleIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                    <div className={styles.principleBody}>
                      <h4 className={styles.principleTitle}>
                        <span data-lang="en">The best design is often invisible.</span>
                        <span data-lang="es">El mejor diseño a menudo es invisible.</span>
                      </h4>
                      <p className={styles.principleSub}>
                        <span data-lang="en">What matters most is not the interface itself, but helping people accomplish meaningful work more effectively.</span>
                        <span data-lang="es">Lo que más importa no es la interfaz en sí, sino ayudar a las personas a realizar un trabajo significativo de forma más eficaz.</span>
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

      <CaseStudyFooter />
    </>
  );
}
