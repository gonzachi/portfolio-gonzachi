import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectsDisclaimer from "@/components/ProjectsDisclaimer";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <ProjectsDisclaimer />
        <Projects />
        <PersonalProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
