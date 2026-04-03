'use client';

import { useRef } from 'react';
import { projects } from '@/data/content';
import styles from './Projects.module.css';
import Image from 'next/image';
import ProjectShowcase from './ProjectShowcase';

const featuredIds = ['agilidad-inspiracional', 'project-1', 'project-2'];
const featuredProjects = featuredIds
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is (typeof projects)[number] => p !== undefined);

function VideoPlayer({ src, className }: { src: string; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
  };

  return (
    <div className={styles.videoWrapper}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
      <button className={styles.restartBtn} onClick={restart}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 105.64-11.36L1 10" />
        </svg>
        Iniciar video desde el principio
      </button>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      {featuredProjects.map((project, index) => {
        const p = project as any;

        // Showcase layout for projects with textPanels + steps
        if (p.textPanels) {
          return (
            <ProjectShowcase
              key={project.id}
              projectIndex={index + 1}
              totalProjects={featuredProjects.length}
              title={p.showcaseTitle || project.title}
              textPanels={p.textPanels}
              textPanelHighlights={p.textPanelHighlights}
              steps={p.steps}
              stepImages={p.images || []}
            />
          );
        }

        // Default layout
        const imageSrc = p.images?.[0]?.src;
        const videoSrc = p.video;
        const isReverse = index % 2 !== 0;
        const images = p.images as
          | { src: string; alt: string; caption?: string }[]
          | undefined;

        return (
          <div key={project.id} className={styles.projectBlock}>
            <div
              className={`${styles.projectRow} ${isReverse ? styles.reverse : ''}`}
            >
              <div className={styles.textCol}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <span className={styles.badge}>{project.type}</span>
                <div className={styles.description}>
                  {project.description.slice(0, 5).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div className={styles.mediaCol}>
                {videoSrc ? (
                  <VideoPlayer src={videoSrc} className={styles.media} />
                ) : imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className={styles.media}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>
            </div>

            {images && images.length > 0 && (
              <div className={styles.gallery}>
                {images.map((img, i) => (
                  <div key={i} className={styles.galleryCard}>
                    <div className={styles.galleryImageWrapper}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className={styles.galleryImage}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    {img.caption && (
                      <p className={styles.galleryCaption}>{img.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
