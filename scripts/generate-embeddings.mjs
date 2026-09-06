#!/usr/bin/env node
// Generates static sentence embeddings for the portfolio's case studies.
//
// This runs offline, at build/content-update time — never in the browser.
// Output feeds the client-side semantic search, which loads the same model
// with transformers.js to embed the user's question and compares it against
// these precomputed vectors via cosine similarity. No API, no key, no backend.
//
// Usage: npm run generate-embeddings
// Re-run whenever case study copy in src/data/content.ts changes.

import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from '@huggingface/transformers';
import { projects, experiences, personalInfo, education } from '../src/data/content.ts';
import { extractKeywords } from '../src/lib/semantic-search/keywords.ts';
import { SEMANTIC_SEARCH_MODEL_ID } from '../src/lib/semantic-search/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '../public/data/case-study-embeddings.json');
const MODEL_ID = SEMANTIC_SEARCH_MODEL_ID;

// Case studies gated behind a password (src/lib/project-auth) never get their
// protected write-up embedded here — that would leak it to anyone typing a
// question into the search box, bypassing the access gate entirely. They get
// a separate, deliberately shallow teaser chunk below (see GATED_TEASERS).
function isIndexable(project) {
  return !project.requiresAccess && !project.isComingSoon;
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Flattens the mix of paragraph arrays / single strings each project uses,
// strips the odd inline <b> tag from hand-written copy, and collapses
// whitespace so word counts and embeddings aren't skewed by markup.
function joinParagraphs(...groups) {
  return groups
    .flat()
    .filter((p) => typeof p === 'string' && p.trim().length > 0)
    .join(' ')
    .replace(/<\/?[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function statsToSentences(stats = []) {
  return stats.map((s) => `${s.highlight} ${s.detail}`.trim());
}

// A few case studies have their real narrative copy hardcoded as JSX prose
// in a dedicated page/component instead of living in content.ts (content.ts
// only has a short teaser for them). Rather than refactor those pages, we
// mirror their prose here so it can be indexed too — keep this in sync with
// the source file noted in each comment if that copy changes.
const CONTENT_OVERRIDES = {
  // Mirrors src/app/project/disenar-en-codigo/page.tsx
  'disenar-en-codigo': {
    contexto:
      'Soy Product Designer y mi proceso de trabajo siempre fue el mismo: abrir Figma, especificar cada pantalla y cada interacción, sesiones largas de handoff a desarrollo y por último QA para validar lo que desarrollo construyó. Hace unos meses empecé a probar algo distinto: dejar de simular la interfaz y directamente construirla, con el design system real de la empresa, ayudado por herramientas de código asistido por IA.',
    problema:
      'Durante años mi día se organizaba igual: abría Figma, armaba la pantalla, pensaba la interacción y la anotaba al margen porque Figma no la podía mostrar de verdad. Después la mandaba a desarrollo y esperaba. A veces el resultado se parecía a lo que había imaginado, a veces no, y ahí empezaba la ronda de ajustes: yo explicando de nuevo algo que ya había explicado, desarrollo interpretando algo que nunca terminó de estar del todo claro. No era un mal proceso, era el proceso normal, el que todos usan. Pero cada traspaso perdía algo en el camino.',
    proceso:
      'Empecé a mirar de reojo las herramientas de código asistido por IA, no como algo lejano de programadores sino como algo a mi alcance. Le propuse a un compañero probarlo en serio: ¿y si el prototipo dejaba de ser una simulación y pasaba a ser algo que de verdad funciona? Hoy cuando diseño una funcionalidad nueva, la escribo, usando el design system real de Mango. Trabajo sobre un repo paralelo al del producto real, desplegado en un proyecto de Vercel corporativo con las mismas normas de seguridad, con libertad para probar sin riesgo para producción. Los usuarios entran desde su propio ordenador con una URL y testean interacción y datos reales, sin cartón piedra; las pantallas ya nacen responsive. Documento en código, testeo con usuarios reales, ajusto lo que no funciona, y lo que le entrego a desarrollo ya viene validado.',
    resultado:
      'Cuando el prototipo ya funciona de verdad, dejo de tener que explicar cómo se comporta algo — se comporta así porque está corriendo. Eso saca ambigüedad del medio y ya veo señales de que acorta lo que después le toma a desarrollo construirlo, aunque es pronto para tener ese número cerrado. Lo que más me importa no es la velocidad: es que entrego algo distinto, ya no una idea para que otro la resuelva sino algo que ya resolví. No cambié de oficio, sigo pensando en usuarios, en flujos, en fricción. Lo que cambió es la herramienta con la que pruebo si esas decisiones están bien.',
  },
};

// Splits each project into up to 4 chunks along its natural narrative
// sections. A section is omitted rather than padded when the project has
// no content for it (e.g. an early-stage case study with no results yet).
function buildSections(project) {
  const override = CONTENT_OVERRIDES[project.id];
  if (override) {
    return Object.entries(override)
      .filter(([, text]) => Boolean(text))
      .map(([section, text]) => ({
        section,
        label: SECTION_LABELS[section],
        text: joinParagraphs([text]),
      }));
  }

  const sections = [];

  const contexto = joinParagraphs(project.description, project.context?.description);
  if (contexto) sections.push({ section: 'contexto', label: SECTION_LABELS.contexto, text: contexto });

  const problema = joinParagraphs(
    project.problem?.statement ? [project.problem.statement] : [],
    project.problem?.description,
    project.findings
  );
  if (problema) sections.push({ section: 'problema', label: SECTION_LABELS.problema, text: problema });

  const proceso = joinParagraphs(project.solutionText, project.challengesText);
  if (proceso) sections.push({ section: 'proceso', label: SECTION_LABELS.proceso, text: proceso });

  const resultado = joinParagraphs(
    project.resultsReveal?.paragraphsBefore,
    statsToSentences(project.resultsReveal?.stats),
    project.resultsReveal?.closingText ? [project.resultsReveal.closingText] : [],
    project.resultsReveal?.paragraphsAfter,
    project.resultsReveal?.footerText ? [project.resultsReveal.footerText] : [],
    project.closing?.message ? [project.closing.message] : []
  );
  if (resultado) sections.push({ section: 'resultado', label: SECTION_LABELS.resultado, text: resultado });

  return sections;
}

const SECTION_LABELS = {
  contexto: 'Contexto',
  problema: 'Problema',
  proceso: 'Proceso y decisiones',
  resultado: 'Resultado',
};

// Case studies gated behind a password never get their real content
// indexed (see isIndexable below). Per product decision, the search should
// still be able to name them and point people at the gate — just with a
// high-level teaser built only from copy that's already public (title,
// subtitle, short intro), never the protected write-up.
const GATED_TEASERS = {
  'agilidad-inspiracional': {
    text: 'Plataforma de IA generativa para acelerar el proceso creativo de los diseñadores de moda en Mango. Cuando la IA generativa de imágenes empezó a evolucionar, vimos una oportunidad para transformar cómo los diseñadores exploraban ideas y desarrollaban nuevas colecciones. Mi rol fue Senior Product Designer: discovery, definición del MVP, UX strategy, research y evolución continua del producto junto a Product Management e Ingeniería. Este case study tiene información confidencial y requiere contraseña de acceso — pedímela si querés ver el detalle completo.',
  },
  'orquestadora-de-equipos': {
    text: 'Plataforma corporativa interna para orquestar la creación de contenido de journeys entre más de 5 equipos de Mango, que hoy trabajan de forma manual con Excel, mails y plataformas distintas. La construí con una actitud AI First, asumiendo un rol híbrido de Product Owner y desarrollo frontend mediante vibe coding. Este case study tiene información confidencial y requiere contraseña de acceso — pedímela si querés ver el detalle completo.',
  },
};

// General profile facts (where I've worked, who I am, how to reach me,
// education) aren't part of any case study, so they were invisible to
// search entirely — someone asking "where did you work?" got nothing. These
// chunks close that gap. Generated from the same content.ts data the rest
// of the site already renders (Experience/AboutMe/Contact/Education on
// /perfil), not hand-authored, so they can't drift out of sync with it.
function buildProfileChunks() {
  // Short and keyword-dense on purpose ("he trabajado en", company names) —
  // an earlier version stitched in each role's full description too, which
  // diluted the chunk across 4 unrelated topics and tanked its similarity
  // score for exactly the "where did you work" queries it exists to answer.
  // The deeper "what I did there" story already lives in the Mango/Holdo
  // case study chunks.
  const experienceText =
    'He trabajado en las siguientes empresas: ' +
    experiences.map((e) => `${e.company} (${e.role}, ${e.period}, ${e.location})`).join('; ') +
    '.';

  // personalInfo.bio is a long, rambling personal essay (career story, AI
  // philosophy, hobbies) — great for the /perfil page, bad as a search
  // chunk: mean-pooled across that many unrelated topics it barely scored
  // above noise for a plain "who are you?". landingBio is the same identity
  // in 3 punchy sentences and was already written for exactly this job.
  const bioText = joinParagraphs(personalInfo.landingBio);

  const contactText = `Contacto: podés escribirme a ${personalInfo.email}, encontrarme en LinkedIn (${personalInfo.linkedin}) o ver mi trabajo de diseño en Behance (${personalInfo.behance}).`;

  const educationText =
    'Estudié en las siguientes instituciones: ' +
    education.map((e) => `${e.title} — ${e.institution} (${e.period})`).join('; ') +
    '.';

  // These chunks are short factual lists (company names + dates, degree
  // titles) rather than prose, and MiniLM's mean-pooled embedding of a list
  // like that sits nowhere near a natural question — cosine similarity for
  // "where did you study?" against the education chunk measured ~0.1-0.2,
  // indistinguishable from noise, no matter how the list itself was worded.
  // The fix is the standard FAQ-retrieval trick: embed each chunk together
  // with a handful of question phrasings it should answer (in both
  // languages), so the vector represents "this text answers these
  // questions" — but only ever display the clean answer, never the
  // questions. See how `questionHints` is folded in before embedding, below.
  return [
    {
      section: 'experience',
      label: 'Experiencia laboral',
      text: experienceText,
      questionHints: [
        '¿Dónde trabajaste?', '¿En qué empresas trabajaste?', '¿Dónde trabajás actualmente?',
        'Where did you work?', 'What companies have you worked at?', 'Where do you currently work?',
      ],
    },
    {
      section: 'bio',
      label: 'Sobre mí',
      text: bioText,
      // "¿Quién es Gonzalo?" and "¿A qué te dedicás?" got dropped — both are
      // near-duplicates of "¿Quién sos?" in intent, but bare short Spanish
      // "¿...?" questions turned out to collide with each other regardless
      // of content (measured: "¿Quién es Gonzalo?" scored 0.67 cosine
      // against "¿cuál es tu comida favorita?", clearing the match
      // threshold on pure surface/structural similarity). Fewer, more
      // essential aliases means less surface area for that collision.
      questionHints: ['¿Quién sos?', 'Who are you?', 'Tell me about yourself', 'What do you do?'],
    },
    {
      section: 'contact',
      label: 'Contacto',
      text: contactText,
      // Avoid bare "¿Cuál es tu ___?" / "What is your ___?" templates here —
      // that frame is generic enough to also match unrelated questions
      // sharing the same shape ("what's your favorite food?"), which is a
      // real collision measured in testing. Keep "email"/"contact"/"LinkedIn"
      // as actual words in the phrase instead of relying on the template.
      questionHints: [
        '¿Cómo te puedo contactar?', '¿Tenés email de contacto?', '¿Dónde te encuentro en LinkedIn?',
        'How can I get in touch with you?', "What's your contact email?", 'Do you have a LinkedIn profile?',
      ],
    },
    {
      section: 'education',
      label: 'Formación',
      text: educationText,
      questionHints: [
        '¿Dónde estudiaste?', '¿Qué estudiaste?', '¿Tenés algún título?',
        'Where did you study?', 'What did you study?', 'Do you have a degree?',
      ],
    },
    {
      // Its own projectId/url (not 'profile' + '/perfil' like the rest) so
      // the frontend can tell "give me an overview of your projects" apart
      // from every other kind of match: this is the one intent that should
      // render the visual project-cards grid instead of a written answer +
      // link. Its `text` is never actually shown — see ChatHome.tsx.
      section: 'overview',
      label: 'Proyectos',
      projectId: 'projects-overview',
      projectTitle: 'Proyectos',
      url: '/proyectos',
      text: 'Podés ver todos mis proyectos y case studies en la sección de Trabajos.',
      questionHints: [
        '¿Qué proyectos has hecho?', 'Mostrame tus proyectos', '¿En qué proyectos trabajaste?',
        'What projects have you worked on?', 'Show me your work', 'What have you built?',
        'Can I see your portfolio?', 'Show me your projects',
      ],
    },
  ].filter((c) => c.text.trim().length > 0);
}

async function main() {
  const indexable = projects.filter(isIndexable);
  const skipped = projects.filter((p) => !isIndexable(p)).map((p) => p.id);
  if (skipped.length) {
    console.log(`Skipping (protected or coming soon, not indexed): ${skipped.join(', ')}`);
  }

  const chunks = [];
  for (const project of indexable) {
    for (const { section, label, text } of buildSections(project)) {
      chunks.push({
        id: `${project.id}__${section}`,
        projectId: project.id,
        projectTitle: project.title,
        projectSubtitle: project.subtitle ?? null,
        section,
        sectionLabel: label,
        text,
        keywords: extractKeywords([project.title, project.subtitle ?? '', label, text].join(' ')),
        wordCount: countWords(text),
        url: `/project/${project.id}`,
        restricted: false,
        embedding: null,
      });
    }
  }

  const gated = projects.filter((p) => p.requiresAccess);
  for (const project of gated) {
    const teaser = GATED_TEASERS[project.id];
    if (!teaser) {
      console.warn(`No public teaser defined for gated project "${project.id}" — skipping it entirely.`);
      continue;
    }
    const sectionLabel = 'Resumen (acceso restringido)';
    chunks.push({
      id: `${project.id}__resumen`,
      projectId: project.id,
      projectTitle: project.title,
      projectSubtitle: project.subtitle ?? null,
      section: 'resumen',
      sectionLabel,
      text: teaser.text,
      keywords: extractKeywords([project.title, project.subtitle ?? '', sectionLabel, teaser.text].join(' ')),
      wordCount: countWords(teaser.text),
      url: `/project/${project.id}`,
      restricted: true,
      embedding: null,
    });
  }

  // FAQ-style retrieval: one chunk embedded from the answer text itself,
  // plus one "alias" chunk per question phrasing, each embedded from just
  // that short phrase alone (undiluted — mean-pooling it together with five
  // other phrasings and a 90-word paragraph averaged the signal down to
  // noise, verified empirically: "Who are you?" scored 0.81 against its own
  // rephrasing but only 0.08 against that blended combo). All variants
  // share the same displayed text/url; the worker dedupes by
  // projectId+section before ranking so only the best-scoring one surfaces.
  const profileChunks = buildProfileChunks();
  for (const chunk of profileChunks) {
    const { section, label, text, questionHints = [], projectId = 'profile', projectTitle = personalInfo.name, url = '/perfil' } = chunk;
    const keywords = extractKeywords([projectTitle, label, text, ...questionHints].join(' '));
    const base = {
      projectId,
      projectTitle,
      projectSubtitle: null,
      section,
      sectionLabel: label,
      text,
      keywords,
      wordCount: countWords(text),
      url,
      restricted: false,
      embedding: null,
    };

    chunks.push({ ...base, id: `${projectId}__${section}`, embedSource: text });
    questionHints.forEach((hint, i) => {
      chunks.push({ ...base, id: `${projectId}__${section}__alias${i}`, embedSource: hint });
    });
  }

  console.log(`Loading ${MODEL_ID}...`);
  // 'q8' (int8 quantized) is what the browser worker loads too, so offline
  // chunk vectors and in-browser query vectors live in the same numeric
  // space, and it keeps the client download close to the ~25MB target
  // instead of the 86MB fp32 weights.
  const extractor = await pipeline('feature-extraction', MODEL_ID, { dtype: 'q8' });

  console.log(
    `Embedding ${chunks.length} chunks from ${indexable.length} case studies ` +
      `(+ ${gated.length} gated teasers, + ${profileChunks.length} profile facts)...`
  );
  for (const chunk of chunks) {
    const output = await extractor(chunk.embedSource ?? chunk.text, { pooling: 'mean', normalize: true });
    chunk.embedding = Array.from(output.data);
    delete chunk.embedSource;
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(
    OUTPUT_PATH,
    JSON.stringify(
      {
        model: MODEL_ID,
        dimensions: chunks[0]?.embedding.length ?? 0,
        normalized: true,
        generatedAt: new Date().toISOString(),
        chunks,
      },
      null,
      2
    )
  );

  console.log(`Wrote ${chunks.length} chunks -> ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
