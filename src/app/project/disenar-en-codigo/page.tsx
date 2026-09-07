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
    { id: 'sec-intro', label: { es: 'Contexto', en: 'Context' } },
    { id: 'sec-antes', label: { es: 'Cómo trabajaba antes', en: 'How I used to work' } },
    { id: 'sec-cambio', label: { es: 'Qué cambió', en: 'What changed' } },
    { id: 'sec-ahora', label: { es: 'Cómo trabajo ahora', en: 'How I work now' } },
    { id: 'sec-habilita', label: { es: 'Qué habilita', en: 'What it enables' } },
    { id: 'sec-cierre', label: { es: 'Conclusión', en: 'Conclusion' } },
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
              <h2 className={styles.sectionLabel}>
                <span data-lang="es">Contexto</span>
                <span data-lang="en">Context</span>
              </h2>
              <p className={styles.bodyText} data-lang="es">
                Soy Product Designer y, como cualquiera en mi lugar, mi proceso de trabajo siempre fue el mismo: [más allá de las etapas de discovery con usuarios] abrir Figma, especificar cada pantalla y cada interacción, sesiones largas de handoff a desarrollo y por último QA para validar lo que desarrollo construyó.
              </p>
              <p className={styles.bodyText} data-lang="en">
                I'm a Product Designer, and like anyone in my position, my workflow was always the same: [beyond the user discovery stages] open Figma, spec out every screen and every interaction, long handoff sessions with engineering, and finally QA to validate what engineering built.
              </p>
              <p className={styles.bodyText} data-lang="es">
                Hace unos meses empecé a probar algo distinto: dejar de simular la interfaz y directamente construirla, con el design system real de la empresa, el mismo que se utiliza para todo, ayudado por herramientas de código asistido por IA.
              </p>
              <p className={styles.bodyText} data-lang="en">
                A few months ago I started trying something different: instead of simulating the interface, building it directly, with the company's real design system — the same one used for everything — with the help of AI-assisted coding tools.
              </p>
              <p className={styles.bodyText} data-lang="es">
                Aquí les cuento un poco más sobre cómo trabajaba antes, qué cambió, cómo trabajo ahora y qué habilita este nuevo proceso.
              </p>
              <p className={styles.bodyText} data-lang="en">
                Here's more on how I used to work, what changed, how I work now, and what this new process makes possible.
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
              <h2 className={styles.sectionLabel}>
                <span data-lang="es">Cómo trabajaba antes</span>
                <span data-lang="en">How I used to work</span>
              </h2>
              <p className={styles.bodyText} data-lang="es">
                Durante años mi día se organizaba igual. Abría Figma, armaba la pantalla, pensaba la interacción, la anotaba al margen porque Figma no la podía mostrar de verdad. Después la mandaba a desarrollo y esperaba. A veces el resultado se parecía a lo que había imaginado. A veces no, y ahí empezaba la ronda de ajustes: yo explicando de nuevo algo que ya había explicado, desarrollo interpretando algo que nunca terminó de estar del todo claro.
              </p>
              <p className={styles.bodyText} data-lang="en">
                For years my day was organized the same way. I'd open Figma, build the screen, think through the interaction, and jot it down in the margin because Figma couldn't actually show it. Then I'd hand it off to engineering and wait. Sometimes the result matched what I'd imagined. Sometimes it didn't, and that's when the round of adjustments began: me explaining again something I'd already explained, engineering interpreting something that was never quite fully clear.
              </p>
              <p className={styles.bodyText} data-lang="es">
                No era un mal proceso. Era el proceso normal. El que todos usan. Pero cada traspaso perdía algo en el camino.
              </p>
              <p className={styles.bodyText} data-lang="en">
                It wasn't a bad process. It was the normal process — the one everyone uses. But something got lost with every handoff.
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
              <h2 className={styles.sectionLabel}>
                <span data-lang="es">Qué cambió</span>
                <span data-lang="en">What changed</span>
              </h2>
              <p className={styles.bodyText} data-lang="es">
                En algún momento empecé a mirar de reojo lo que estaba pasando con las herramientas de código asistido por IA. No como algo lejano, de programadores, sino como algo que de repente estaba a mi alcance. Nunca aprendí a programar en serio. Pero con estas herramientas, entender cómo se arma una interfaz por dentro dejó de ser un mundo aparte.
              </p>
              <p className={styles.bodyText} data-lang="en">
                At some point I started paying closer attention to what was happening with AI-assisted coding tools. Not as something distant, for programmers, but as something that had suddenly become reachable for me. I never seriously learned to code. But with these tools, understanding how an interface is put together stopped being a world apart.
              </p>
              <p className={styles.bodyText} data-lang="es">
                Le propuse a un compañero probarlo en serio, no como curiosidad de fin de semana sino como una forma real de trabajar. La pregunta era simple: <strong>¿y si el prototipo dejaba de ser una simulación y pasaba a ser algo que de verdad funciona?</strong>
              </p>
              <p className={styles.bodyText} data-lang="en">
                I asked a colleague to try it seriously with me — not as a weekend curiosity, but as an actual way of working. The question was simple: <strong>what if the prototype stopped being a simulation and became something that actually works?</strong>
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
              <h2 className={styles.sectionLabel}>
                <span data-lang="es">Cómo trabajo ahora</span>
                <span data-lang="en">How I work now</span>
              </h2>
              <p className={styles.bodyText} data-lang="es">
                Hoy cuando diseño una funcionalidad nueva, la escribo. Uso el design system real de Mango, no una versión simplificada armada para ir rápido. Y contra lo que podría pensarse, no es más lento: es más rápido y más realista, porque no hay nada que simular. Lo que el usuario ve cuando testea es exactamente lo que existe en el sistema de la empresa. No una promesa de cómo se va a ver. Cómo se ve.
              </p>
              <p className={styles.bodyText} data-lang="en">
                Today, when I design a new feature, I write it. I use Mango's real design system, not a simplified version put together to move fast. And against what you might expect, it's not slower — it's faster and more realistic, because there's nothing to simulate. What the user sees when they test it is exactly what exists in the company's system. Not a promise of how it'll look. How it looks.
              </p>
              <p className={styles.bodyText} data-lang="es">
                Para esto trabajo sobre un repo paralelo al del producto real, donde tengo libertad para probar y romper cosas sin ningún riesgo para lo que está en producción. Está desplegado en un proyecto de Vercel corporativo, con las mismas normas de seguridad que cualquier otro proyecto de la empresa. Y aunque tengo libertad para experimentar, no programo libremente: uso el design system real y sigo parámetros de código ya establecidos, para no salirme de la norma y que lo que construyo sea reutilizable.
              </p>
              <p className={styles.bodyText} data-lang="en">
                To do this I work on a repo that runs parallel to the real product, where I have the freedom to try things and break them with zero risk to what's in production. It's deployed on a corporate Vercel project, with the same security standards as any other project at the company. And while I have room to experiment, I don't code freely: I use the real design system and follow established code conventions, so I don't stray from the standard and what I build stays reusable.
              </p>
              <p className={styles.bodyText} data-lang="es">
                Los usuarios entran desde su propio ordenador con una URL, nada más, y la experiencia que tienen al testear es fantástica: todo tiene interacción real y datos reales, nada es cartón piedra. Antes, sentar a alguien frente a un prototipo de Figma siempre tenía esa fricción inicial, esa sensación de estar viendo una maqueta. Ahora entran a algo que funciona de verdad, y eso cambia la conversación. Las pantallas ya nacen responsive, sin ese trabajo extra de simular cómo se comportarían. Y lo que se testea es, pixel a pixel, exactamente lo que se va a construir.
              </p>
              <p className={styles.bodyText} data-lang="en">
                Users get in from their own computer with just a URL, and the experience they have testing it is fantastic: everything has real interaction and real data, nothing is a cardboard cutout. Before, sitting someone in front of a Figma prototype always had that initial friction, that feeling of looking at a mockup. Now they walk into something that actually works, and that changes the conversation. Screens are responsive from day one, without the extra work of simulating how they'd behave. And what gets tested is, pixel for pixel, exactly what's going to be built.
              </p>
              <p className={styles.bodyText} data-lang="es">
                No lo pienso como un experimento que estoy probando por curiosidad. Es cómo trabajo ahora. Documento en código, testeo con usuarios reales, ajusto lo que no funciona, y lo que le entrego a desarrollo ya viene validado.
              </p>
              <p className={styles.bodyText} data-lang="en">
                I don't think of this as an experiment I'm running out of curiosity. It's how I work now. I document in code, test with real users, fix what doesn't work, and what I hand off to engineering already comes validated.
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
              <h2 className={styles.sectionLabel}>
                <span data-lang="es">Qué habilita</span>
                <span data-lang="en">What it enables</span>
              </h2>
              <p className={styles.bodyText} data-lang="es">
                Cuando el prototipo ya funciona de verdad, dejo de tener que explicar cómo se comporta algo. Se comporta así porque está corriendo. Eso saca ambigüedad del medio, y ya veo señales de que también acorta lo que después le toma a desarrollo construirlo — aunque todavía es pronto para tener ese número cerrado.
              </p>
              <p className={styles.bodyText} data-lang="en">
                When the prototype actually works, I no longer have to explain how something behaves. It behaves that way because it's running. That removes ambiguity from the equation, and I'm already seeing signs that it also shortens what it later takes engineering to build it — though it's still early to have that number nailed down.
              </p>
              <p className={styles.bodyText} data-lang="es">
                Pero lo que más me importa de esto no es la velocidad. Es que entrego algo distinto. Ya no una idea para que otro la resuelva, sino algo que ya resolví. Es la misma dirección en la que quiero seguir moviéndome: hacia un lugar con más decisión real sobre el producto, no solo sobre su forma.
              </p>
              <p className={styles.bodyText} data-lang="en">
                But what matters most to me here isn't speed. It's that I deliver something different. No longer an idea for someone else to solve, but something I've already solved. It's the same direction I want to keep moving in: toward having more real decision-making power over the product, not just its shape.
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
              <h2 className={styles.sectionLabel}>
                <span data-lang="es">Conclusión</span>
                <span data-lang="en">Conclusion</span>
              </h2>
              <p className={styles.bodyText} data-lang="es">
                No cambié de oficio. Sigo pensando en usuarios, en flujos, en fricción. Lo que cambió es la herramienta con la que pruebo si esas decisiones están bien. Diseñar en código no reemplaza el pensamiento de producto. Lo hace más difícil de esconder cuando algo no funciona.
              </p>
              <p className={styles.bodyText} data-lang="en">
                I didn't change professions. I still think about users, flows, friction. What changed is the tool I use to test whether those decisions are right. Designing in code doesn't replace product thinking. It just makes it harder to hide when something doesn't work.
              </p>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <CaseStudyFooter />
    </>
  );
}
