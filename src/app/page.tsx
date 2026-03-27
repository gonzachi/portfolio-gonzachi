import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
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
        <Projects />
<Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
