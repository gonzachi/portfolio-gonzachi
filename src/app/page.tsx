'use client';

import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import AboutMe from "@/components/AboutMe";
import DailyDrivers from "@/components/DailyDrivers";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import CursorBlob from "@/components/CursorBlob";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import Footer from "@/components/Footer";
import IntroModal from "@/components/IntroModal";

export default function Home() {
  return (
    <div className="portfolio-layout">
      <IntroModal />
      <CursorBlob />
      <ScrollProgress />
      <ScrollRevealInit />

      {/* Fixed left sidebar / top header */}
      <Header />

      {/* Scrollable right column */}
      <main className="main-content" id="hero">
        <Hero />
        <Projects />
        <PersonalProjects />
        <AboutMe />
        <DailyDrivers />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
