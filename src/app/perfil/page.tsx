"use client";

import Image from "next/image";
import SiteNav from "@/components/chat/SiteNav";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import DailyDrivers from "@/components/DailyDrivers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/content";
import { useLang } from "@/components/project/LangWrapper";
import styles from "./page.module.css";

export default function PerfilPage() {
  const { lang } = useLang();

  return (
    <>
      <SiteNav />
      <ScrollRevealInit />

      <header className={styles.header}>
        <Image
          src="/profile.jpg"
          alt={personalInfo.name}
          width={88}
          height={88}
          className={styles.avatar}
          priority
        />
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.role}>
          {personalInfo.roles[0]} · Barcelona, {lang === "en" ? "Spain" : "España"}
        </p>
      </header>

      <main>
        <AboutMe />
        <Experience />
        <Education />
        <DailyDrivers />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
