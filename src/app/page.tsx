import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProjectsWIP from "@/components/ProjectsWIP";
import Behance from "@/components/Behance";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollRestorer from "@/components/ScrollRestorer";

export default function Home() {
  return (
    <>
      <ScrollRestorer />
      <Header />
      <main>
        <Hero />
        <Experience />
        {process.env.NEXT_PUBLIC_SHOW_PROJECTS === 'true' ? <Projects /> : <ProjectsWIP />}
        <Behance />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
