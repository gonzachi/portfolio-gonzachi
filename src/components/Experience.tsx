'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { landingExperiences } from '@/data/content';
import { useLang } from '@/components/project/LangWrapper';
import Image from 'next/image';
import styles from './Experience.module.css';

// content.ts is Spanish-only — English period/description overrides live
// here, aligned by index with landingExperiences (role/company/logo/url
// are language-neutral so they're reused as-is).
const EXPERIENCE_EN: { period: string; description: string }[] = [
  {
    period: 'Jun 2024 - present',
    description: 'Mango is a fashion multinational founded in Barcelona. It designs, manufactures and sells clothing and accessories for men and women, with a presence in more than 110 countries.',
  },
  {
    period: 'Jun 2022 - Jun 2024',
    description: "Holdo is the first Chilean platform giving people professional, AI-powered investment advice. Our mission is to bring high-level investing to everyday people, with a simple, 100% digital onboarding.\n\nWe offer personalized products thanks to our AI, which builds strategies tailored to each client's needs, with periodic adjustments. Our focus is a first-class investment experience with transparent costs.\n\nWe're registered with Chile's Comisión para el Mercado Financiero (CMF) and in the process of full regulation. We're also backed by Administradora General de Fondos Toesca and trade through Interactive Brokers.",
  },
  {
    period: 'Jan 2019 - Aug 2022',
    description: 'Personal UX/UI design studio. End-to-end projects for a range of clients — from discovery through delivering responsive WordPress sites.',
  },
  {
    period: 'Feb 2020 - Jul 2022',
    description: "We specialize in communication for leaders, governments and NGOs, offering political communication services spanning strategy, election campaign management and digital content creation.\n\nWe're a team of highly trained, experienced professionals deeply committed to excellence in everything we do. At QUO we don't settle — we push to innovate and use the latest communication tools to deliver effective, cutting-edge solutions for our clients.",
  },
  {
    period: 'Feb 2018 - Feb 2020',
    description: "We specialize in communication for leaders, governments and NGOs, offering political communication services spanning strategy, election campaign management and digital content creation.\n\nWe're a team of highly trained, experienced professionals deeply committed to excellence in everything we do. At QUO we don't settle — we push to innovate and use the latest communication tools to deliver effective, cutting-edge solutions for our clients.",
  },
];

export default function Experience() {
  const { lang } = useLang();
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
          <span>{lang === 'en' ? 'Experience' : 'Experiencia'}</span>
          <div className="section-label-line" />
        </div>
        <ul className={styles.list}>
          {landingExperiences.map((exp, index) => {
            const description = lang === 'en' ? EXPERIENCE_EN[index].description : exp.companyInfo.description;
            const period = lang === 'en' ? EXPERIENCE_EN[index].period : exp.period;
            return (
            <li key={index} className={`reveal reveal-delay-${index % 4} ${styles.item}`}>
              <span className={styles.role}>
                {exp.role} {lang === 'en' ? 'at' : 'en'}{' '}
                <button
                  type="button"
                  className={styles.companyWrapper}
                  onClick={() => handleCompanyClick(index)}
                >
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
                          {exp.companyInfo.url} · {lang === 'en' ? 'since' : 'desde'} {exp.companyInfo.founded}
                        </span>
                      </span>
                    </span>
                    <span className={styles.tooltipDesc}>
                      {description.split('\n\n').map((para, i) => (
                        <span key={i}>{i > 0 && <br />}{para}</span>
                      ))}
                    </span>
                  </span>
                </button>
              </span>
              <span className={styles.period}>{period}</span>
            </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Bottom Sheet */}
      {mounted && activeExpIndex !== null && (() => {
        const activeExp = landingExperiences[activeExpIndex];
        const description = lang === 'en' ? EXPERIENCE_EN[activeExpIndex].description : activeExp.companyInfo.description;
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
                      {activeExp.companyInfo.url} · {lang === 'en' ? 'since' : 'desde'} {activeExp.companyInfo.founded}
                    </span>
                  </span>
                </div>
                <button className={styles.bottomSheetClose} onClick={() => setActiveExpIndex(null)} aria-label={lang === 'en' ? 'Close detail' : 'Cerrar detalle'}>
                  &times;
                </button>
              </div>
              <p className={styles.bottomSheetDesc}>
                {description.split('\n\n').map((para, i) => (
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
