import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Behance from "@/components/Behance";
import Contact from "@/components/Contact";
import CursorBlob from "@/components/CursorBlob";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <CursorBlob />
      <ScrollProgress />
      <ScrollRevealInit />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Behance />
        <Contact />
      </main>
    </>
  );
}
