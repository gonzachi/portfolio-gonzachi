import type { Metadata } from 'next';
import SiteNav from '@/components/chat/SiteNav';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollReveal from '@/components/ScrollReveal';
import CaseStudyFooter from '@/components/project/CaseStudyFooter';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import SidebarProgress from '@/components/project/SidebarProgress';

import DisenarEnCodigoHero from '@/components/project/disenar-en-codigo/DisenarEnCodigoHero';
import ProcessTimeline from '@/components/project/disenar-en-codigo/ProcessTimeline';
import GapIllustration from '@/components/project/disenar-en-codigo/GapIllustration';
import NodeParticleCanvas from '@/components/project/disenar-en-codigo/NodeParticleCanvas';
import MicroMomentsScroll from '@/components/project/disenar-en-codigo/MicroMomentsScroll';
import ConvergenceIllustration from '@/components/project/disenar-en-codigo/ConvergenceIllustration';

import styles from './page.module.css';

const TITLE = 'Diseñar en código | Gonzalo Chiavassa';
const DESCRIPTION =
  'Dejé de diseñar en Figma. Empecé a diseñar en código. Prototipos funcionales con el design system real de Mango, testeados directamente por usuarios reales.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/project/disenar-en-codigo' },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'article', url: '/project/disenar-en-codigo' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function DisenarEnCodigoPage() {
  const sidebarSections = [
    { id: 'sec-intro', label: 'Contexto' },
    { id: 'sec-antes', label: 'Cómo trabajaba antes' },
    { id: 'sec-cambio', label: 'Qué cambió' },
    { id: 'sec-ahora', label: 'Cómo trabajo ahora' },
    { id: 'sec-habilita', label: 'Qué habilita' },
    { id: 'sec-cierre', label: 'Conclusión' },
  ];

  return (
    <>
      <ScrollToTop />
      <ScrollRevealInit />
      <SidebarProgress sections={sidebarSections} />

      <SiteNav />

      {/* HERO */}
      <DisenarEnCodigoHero />

      <main className={styles.page}>

        {/* ── Contexto ── */}
        <section id="sec-intro" className={styles.section}>
          <div className={styles.sectionContainer}>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionLabel}>Contexto</h2>
              <p className={styles.bodyText}>
                Soy Product Designer y, como cualquiera en mi lugar, mi proceso de trabajo siempre fue el mismo: [más allá de las etapas de discovery con usuarios] abrir Figma, especificar cada pantalla y cada interacción, sesiones largas de handoff a desarrollo y por último QA para validar lo que desarrollo construyó.
              </p>
              <p className={styles.bodyText}>
                Hace unos meses empecé a probar algo distinto: dejar de simular la interfaz y directamente construirla, con el design system real de la empresa, el mismo que se utiliza para todo, ayudado por herramientas de código asistido por IA.
              </p>
              <p className={styles.bodyText}>
                Aquí les cuento un poco más sobre cómo trabajaba antes, qué cambió, cómo trabajo ahora y qué habilita este nuevo proceso.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ProcessTimeline />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Cómo trabajaba antes ── */}
        <section id="sec-antes" className={styles.section}>
          <div className={styles.sectionContainer}>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionLabel}>Cómo trabajaba antes</h2>
              <p className={styles.bodyText}>
                Durante años mi día se organizaba igual. Abría Figma, armaba la pantalla, pensaba la interacción, la anotaba al margen porque Figma no la podía mostrar de verdad. Después la mandaba a desarrollo y esperaba. A veces el resultado se parecía a lo que había imaginado. A veces no, y ahí empezaba la ronda de ajustes: yo explicando de nuevo algo que ya había explicado, desarrollo interpretando algo que nunca terminó de estar del todo claro.
              </p>
              <p className={styles.bodyText}>
                No era un mal proceso. Era el proceso normal. El que todos usan. Pero cada traspaso perdía algo en el camino.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <GapIllustration />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Qué cambió ── */}
        <section id="sec-cambio" className={styles.section}>
          <div className={styles.sectionContainer}>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionLabel}>Qué cambió</h2>
              <p className={styles.bodyText}>
                En algún momento empecé a mirar de reojo lo que estaba pasando con las herramientas de código asistido por IA. No como algo lejano, de programadores, sino como algo que de repente estaba a mi alcance. Nunca aprendí a programar en serio. Pero con estas herramientas, entender cómo se arma una interfaz por dentro dejó de ser un mundo aparte.
              </p>
              <p className={styles.bodyText}>
                Le propuse a un compañero probarlo en serio, no como curiosidad de fin de semana sino como una forma real de trabajar. La pregunta era simple: <strong>¿y si el prototipo dejaba de ser una simulación y pasaba a ser algo que de verdad funciona?</strong>
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <NodeParticleCanvas />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Cómo trabajo ahora ── */}
        <section id="sec-ahora" className={styles.section}>
          <div className={styles.sectionContainer}>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionLabel}>Cómo trabajo ahora</h2>
              <p className={styles.bodyText}>
                Hoy cuando diseño una funcionalidad nueva, la escribo. Uso el design system real de Mango, no una versión simplificada armada para ir rápido. Y contra lo que podría pensarse, no es más lento: es más rápido y más realista, porque no hay nada que simular. Lo que el usuario ve cuando testea es exactamente lo que existe en el sistema de la empresa. No una promesa de cómo se va a ver. Cómo se ve.
              </p>
              <p className={styles.bodyText}>
                Para esto trabajo sobre un repo paralelo al del producto real, donde tengo libertad para probar y romper cosas sin ningún riesgo para lo que está en producción. Está desplegado en un proyecto de Vercel corporativo, con las mismas normas de seguridad que cualquier otro proyecto de la empresa. Y aunque tengo libertad para experimentar, no programo libremente: uso el design system real y sigo parámetros de código ya establecidos, para no salirme de la norma y que lo que construyo sea reutilizable.
              </p>
              <p className={styles.bodyText}>
                Los usuarios entran desde su propio ordenador con una URL, nada más, y la experiencia que tienen al testear es fantástica: todo tiene interacción real y datos reales, nada es cartón piedra. Antes, sentar a alguien frente a un prototipo de Figma siempre tenía esa fricción inicial, esa sensación de estar viendo una maqueta. Ahora entran a algo que funciona de verdad, y eso cambia la conversación. Las pantallas ya nacen responsive, sin ese trabajo extra de simular cómo se comportarían. Y lo que se testea es, pixel a pixel, exactamente lo que se va a construir.
              </p>
              <p className={styles.bodyText}>
                No lo pienso como un experimento que estoy probando por curiosidad. Es cómo trabajo ahora. Documento en código, testeo con usuarios reales, ajusto lo que no funciona, y lo que le entrego a desarrollo ya viene validado.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <MicroMomentsScroll />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Qué habilita ── */}
        <section id="sec-habilita" className={styles.section}>
          <div className={styles.sectionContainer}>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionLabel}>Qué habilita</h2>
              <p className={styles.bodyText}>
                Cuando el prototipo ya funciona de verdad, dejo de tener que explicar cómo se comporta algo. Se comporta así porque está corriendo. Eso saca ambigüedad del medio, y ya veo señales de que también acorta lo que después le toma a desarrollo construirlo — aunque todavía es pronto para tener ese número cerrado.
              </p>
              <p className={styles.bodyText}>
                Pero lo que más me importa de esto no es la velocidad. Es que entrego algo distinto. Ya no una idea para que otro la resuelva, sino algo que ya resolví. Es la misma dirección en la que quiero seguir moviéndome: hacia un lugar con más decisión real sobre el producto, no solo sobre su forma.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ConvergenceIllustration />
            </ScrollReveal>
          </div>
        </section>

        {/* ── Conclusión ── */}
        <section id="sec-cierre" className={styles.section}>
          <div className={styles.sectionContainer}>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.sectionLabel}>Conclusión</h2>
              <p className={styles.bodyText}>
                No cambié de oficio. Sigo pensando en usuarios, en flujos, en fricción. Lo que cambió es la herramienta con la que pruebo si esas decisiones están bien. Diseñar en código no reemplaza el pensamiento de producto. Lo hace más difícil de esconder cuando algo no funciona.
              </p>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <CaseStudyFooter />
    </>
  );
}
