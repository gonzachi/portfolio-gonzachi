'use client';

import React, { useState } from 'react';
import { useLang, type Lang } from '@/components/project/LangWrapper';
import styles from './MicroMomentsScroll.module.css';

interface Moment {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet: string;
  previewType: 'url' | 'responsive' | 'ds' | 'feedback';
}

const MOMENTS_ES: Moment[] = [
  {
    id: 'sin-instalar',
    tag: '01 · ACCESO INMEDIATO',
    title: 'Sin instalar nada.',
    subtitle: 'El usuario abre una URL en su propio navegador y ya está dentro.',
    description: 'Eliminamos la fricción inicial de las presentaciones en Figma. El testeo ocurre en el entorno natural del usuario, sin Plugins de maquetas ni guías explicativas adicionales.',
    codeSnippet: `// Acceso directo por URL real
const session = await createTestUserSession({
  prototypeUrl: "https://mango-internal-proto.app/flow/journey",
  device: "User Laptop"
});`,
    previewType: 'url'
  },
  {
    id: 'responsive',
    tag: '02 · ADAPTABILIDAD REAL',
    title: 'Responsive desde el día uno.',
    subtitle: 'Las pantallas nacen fluidas sin simular comportamientos.',
    description: 'No hay trabajo extra duplicando frames para desktop, tablet o mobile. Al estar construido en CSS y Flexbox/Grid real de Mango, el layout se comporta como debe de forma nativa.',
    codeSnippet: `@media (min-width: 768px) {
  .journeyGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--mango-space-4);
  }
}`,
    previewType: 'responsive'
  },
  {
    id: 'pixel-perfect',
    tag: '03 · FIDELIDAD TOTAL',
    title: 'Casi pixel perfect.',
    subtitle: 'Usando los componentes verdaderos del design system de Mango.',
    description: 'Lo que el usuario testea es, componente por componente, lo que existe en producción. No una versión aproximada o simplificada armada a las apuradas.',
    codeSnippet: `import { Button, Input, Modal, Table } from '@mango/design-system';

<Modal isOpen={isVerified} onClose={handleClose}>
  <Table data={activeJourneys} columns={columns} />
</Modal>`,
    previewType: 'ds'
  },
  {
    id: 'feedback-real',
    tag: '04 · VALIDACIÓN DE VERDAD',
    title: 'Feedback en contexto real.',
    subtitle: 'Testeando comportamientos verdaderos, no maquetas estáticas.',
    description: 'Las validaciones se centran en el flujo real de datos y en decisiones de producto, detectando inconsistencias antes de entregar la primera línea de código a desarrollo.',
    codeSnippet: `// Evento de validación directa con usuario
onValidateJourney((feedback) => {
  if (feedback.status === 'success') {
    commitValidatedFlowToDevHandOff();
  }
});`,
    previewType: 'feedback'
  }
];

const MOMENTS_EN: Moment[] = [
  {
    id: 'sin-instalar',
    tag: '01 · INSTANT ACCESS',
    title: 'No installs required.',
    subtitle: "The user opens a URL in their own browser and they're in.",
    description: "We remove the initial friction of Figma presentations. Testing happens in the user's natural environment, with no mockup plugins or extra walkthroughs needed.",
    codeSnippet: `// Direct access via a real URL
const session = await createTestUserSession({
  prototypeUrl: "https://mango-internal-proto.app/flow/journey",
  device: "User Laptop"
});`,
    previewType: 'url'
  },
  {
    id: 'responsive',
    tag: '02 · REAL ADAPTABILITY',
    title: 'Responsive from day one.',
    subtitle: 'Screens are fluid from birth, with no simulated behavior.',
    description: "There's no extra work duplicating frames for desktop, tablet or mobile. Since it's built with Mango's real CSS and Flexbox/Grid, the layout behaves the way it should, natively.",
    codeSnippet: `@media (min-width: 768px) {
  .journeyGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--mango-space-4);
  }
}`,
    previewType: 'responsive'
  },
  {
    id: 'pixel-perfect',
    tag: '03 · TOTAL FIDELITY',
    title: 'Nearly pixel perfect.',
    subtitle: "Using the real components from Mango's design system.",
    description: 'What the user tests is, component by component, what exists in production. Not an approximate or simplified version thrown together in a hurry.',
    codeSnippet: `import { Button, Input, Modal, Table } from '@mango/design-system';

<Modal isOpen={isVerified} onClose={handleClose}>
  <Table data={activeJourneys} columns={columns} />
</Modal>`,
    previewType: 'ds'
  },
  {
    id: 'feedback-real',
    tag: '04 · REAL VALIDATION',
    title: 'Feedback in real context.',
    subtitle: 'Testing real behavior, not static mockups.',
    description: 'Validation focuses on the real data flow and product decisions, catching inconsistencies before handing the first line of code to engineering.',
    codeSnippet: `// Direct validation event with the user
onValidateJourney((feedback) => {
  if (feedback.status === 'success') {
    commitValidatedFlowToDevHandOff();
  }
});`,
    previewType: 'feedback'
  }
];

function getMoments(lang: Lang) {
  return lang === 'en' ? MOMENTS_EN : MOMENTS_ES;
}

export default function MicroMomentsScroll() {
  const { lang } = useLang();
  const MOMENTS = getMoments(lang);
  const [activeTab, setActiveTab] = useState(0);
  const currentMoment = MOMENTS[activeTab];

  return (
    <div className={styles.container}>
      {/* Header selector tabs */}
      <div className={styles.tabNav}>
        {MOMENTS.map((m, idx) => (
          <button
            key={m.id}
            className={`${styles.tabButton} ${activeTab === idx ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <span className={styles.tabNumber}>0{idx + 1}</span>
            <span className={styles.tabTitle}>{m.title}</span>
          </button>
        ))}
      </div>

      {/* Main Moment Display Card */}
      <div className={styles.momentCard}>
        {/* Background Subtle Code Line Texture */}
        <div className={styles.bgCodeTexture}>
          <pre>{currentMoment.codeSnippet}</pre>
        </div>

        <div className={styles.cardGrid}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <span className={styles.momentTag}>{currentMoment.tag}</span>
            <h3 className={styles.momentTitle}>{currentMoment.title}</h3>
            <p className={styles.momentSubtitle}>{currentMoment.subtitle}</p>
            <p className={styles.momentDesc}>{currentMoment.description}</p>
          </div>

          {/* Floating UI Mockup Preview */}
          <div className={styles.visualMockup}>
            <div className={styles.browserFrame}>
              <div className={styles.browserHeader}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>
                  https://proto.mango.com/{currentMoment.id}
                </div>
              </div>
              <div className={styles.browserBody}>
                {currentMoment.previewType === 'url' && (
                  <div className={styles.mockupUrl}>
                    <div className={styles.mockUrlBanner}>
                      <span className={styles.badgeLive}>LIVE URL</span>
                      <span>Mango DS v4.2 Running</span>
                    </div>
                    <div className={styles.mockUrlBody}>
                      <div className={styles.mockRow} />
                      <div className={styles.mockRowShort} />
                      <div className={styles.mockBtn}>{lang === 'en' ? 'Try the Real Prototype →' : 'Probar Prototipo Real →'}</div>
                    </div>
                  </div>
                )}

                {currentMoment.previewType === 'responsive' && (
                  <div className={styles.mockupResponsive}>
                    <div className={styles.resDesktop}>
                      <span>Desktop (1440px)</span>
                      <div className={styles.resGrid}>
                        <div /><div /><div />
                      </div>
                    </div>
                    <div className={styles.resMobile}>
                      <span>Mobile (375px)</span>
                      <div className={styles.resCol}>
                        <div /><div /><div />
                      </div>
                    </div>
                  </div>
                )}

                {currentMoment.previewType === 'ds' && (
                  <div className={styles.mockupDs}>
                    <div className={styles.dsItem}>
                      <span className={styles.dsLabel}>{lang === 'en' ? 'Real component:' : 'Componente real:'}</span>
                      <button className={styles.mangoBtn}>@mango/Button.Primary</button>
                    </div>
                    <div className={styles.dsItem}>
                      <span className={styles.dsLabel}>{lang === 'en' ? 'Active state:' : 'Estado activo:'}</span>
                      <input className={styles.mangoInput} defaultValue={lang === 'en' ? 'Real user text' : 'Texto real del usuario'} readOnly />
                    </div>
                  </div>
                )}

                {currentMoment.previewType === 'feedback' && (
                  <div className={styles.mockupFeedback}>
                    <div className={styles.feedbackCheck}>
                      <span className={styles.checkIcon}>✓</span>
                      <div>
                        <strong>{lang === 'en' ? 'Flow validated by user' : 'Flujo validado por usuario'}</strong>
                        <p>{lang === 'en' ? '0 friction points detected in the test URL' : '0 fricciones detectadas en la URL de prueba'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
