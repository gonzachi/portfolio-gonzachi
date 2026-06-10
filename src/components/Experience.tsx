'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { landingExperiences } from '@/data/content';
import Image from 'next/image';
import styles from './Experience.module.css';

export default function Experience() {
  const [activeExpIndex, setActiveExpIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeExpIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeExpIndex]);

  const handleCompanyClick = (index: number) => {
    if (window.innerWidth <= 768) {
      setActiveExpIndex(index);
    }
  };

  return (
    <section className={styles.section} id="experiencia">
      <div className={styles.container}>
        <div className="reveal section-label-sub">
          <span>Experiencia</span>
          <div className="section-label-line" />
        </div>
        <ul className={styles.list}>
          {landingExperiences.map((exp, index) => (
            <li key={index} className={`reveal reveal-delay-${index % 4} ${styles.item}`}>
              <span className={styles.role}>
                {exp.role} en{' '}
                <span className={styles.companyWrapper} onClick={() => handleCompanyClick(index)}>
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={`${styles.tooltip} exp-tooltip`}>
                    <span className={styles.tooltipHeader}>
                      <Image
                        src={exp.companyInfo.logo}
                        alt={exp.company}
                        width={34}
                        height={34}
                        className={styles.tooltipLogo}
                      />
                      <span className={styles.tooltipMeta}>
                        <span className={styles.tooltipCompany}>{exp.company}</span>
                        <span className={styles.tooltipUrl}>
                          {exp.companyInfo.url} · desde {exp.companyInfo.founded}
                        </span>
                      </span>
                    </span>
                    <p className={styles.tooltipDesc}>
                      {exp.companyInfo.description.split('\n\n').map((para, i) => (
                        <span key={i}>{i > 0 && <br />}{para}</span>
                      ))}
                    </p>
                  </span>
                </span>
              </span>
              <span className={styles.period}>{exp.period}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Sheet */}
      {mounted && activeExpIndex !== null && (() => {
        const activeExp = landingExperiences[activeExpIndex];
        return createPortal(
          <>
            <div className={styles.bottomSheetBackdrop} onClick={() => setActiveExpIndex(null)} />
            <div className={styles.bottomSheet} role="dialog" aria-modal="true">
              <div className={styles.bottomSheetHeader}>
                <div className={styles.bottomSheetHeaderLeft}>
                  <Image
                    src={activeExp.companyInfo.logo}
                    alt={activeExp.company}
                    width={38}
                    height={38}
                    className={styles.bottomSheetLogo}
                  />
                  <span className={styles.bottomSheetMeta}>
                    <span className={styles.bottomSheetCompany}>{activeExp.company}</span>
                    <span className={styles.bottomSheetUrl}>
                      {activeExp.companyInfo.url} · desde {activeExp.companyInfo.founded}
                    </span>
                  </span>
                </div>
                <button className={styles.bottomSheetClose} onClick={() => setActiveExpIndex(null)} aria-label="Cerrar detalle">
                  &times;
                </button>
              </div>
              <p className={styles.bottomSheetDesc}>
                {activeExp.companyInfo.description.split('\n\n').map((para, i) => (
                  <span key={i}>{i > 0 && <br />}{para}</span>
                ))}
              </p>
            </div>
          </>,
          document.body
        );
      })()}
    </section>
  );
}
