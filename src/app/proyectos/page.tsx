"use client";

import SiteNav from "@/components/chat/SiteNav";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import Footer from "@/components/Footer";
import { useLang } from "@/components/project/LangWrapper";
import styles from "./page.module.css";

export default function ProyectosPage() {
  const { lang } = useLang();

  return (
    <>
      <SiteNav />
      <ScrollRevealInit />

      <header className={styles.header}>
        <h1 className={styles.title}>{lang === "en" ? "Works" : "Proyectos"}</h1>
        <p className={styles.subtitle}>
          {lang === "en" ? "All my work, in one place." : "Todo mi trabajo, en un solo lugar."}
        </p>
      </header>

      <main>
        <Projects />
        <PersonalProjects />
        <Footer />
      </main>
    </>
  );
}
