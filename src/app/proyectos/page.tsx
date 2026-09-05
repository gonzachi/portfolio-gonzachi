import SiteNav from "@/components/chat/SiteNav";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function ProyectosPage() {
  return (
    <>
      <SiteNav />
      <ScrollRevealInit />

      <header className={styles.header}>
        <h1 className={styles.title}>Proyectos</h1>
        <p className={styles.subtitle}>Todo mi trabajo, en un solo lugar.</p>
      </header>

      <main>
        <Projects />
        <PersonalProjects />
        <Footer />
      </main>
    </>
  );
}
