'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/content';
import {
  chatPromptsByLang,
  chatFallbackByLang,
  chatGreetingByLang,
  chatNoMatchByLang,
  chatProjectsOverviewByLang,
  type ChatAnswer,
} from '@/data/chat';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypewriterLoop } from '@/hooks/useTypewriterLoop';
import { useSemanticSearch } from '@/hooks/useSemanticSearch';
import { isGreetingOrGeneric } from '@/lib/semantic-search/greeting';
import { MATCH_THRESHOLD } from '@/lib/semantic-search/config';
import { useLang, type Lang } from '@/components/project/LangWrapper';
import ResumeModal from './ResumeModal';
import styles from './ChatHome.module.css';

const STATUS_LINES: Record<Lang, string[]> = {
  en: ['based in Barcelona 📍', '+8 years of experience 💻', 'working @ Mango 👗', '& Product Manager mindset'],
  es: ['con base en Barcelona 📍', '+8 años de experiencia 💻', 'trabajando en Mango 👗', 'mentalidad de Product Manager'],
};

const COPY: Record<Lang, { subtitle: string; placeholder: string; heroGreeting: string; loadingModel: string; send: string }> = {
  en: {
    subtitle: 'What would you like to know about Gon?',
    placeholder: 'Ask me about my experience in fintech, product design, AI...',
    heroGreeting: "Hi, I'm",
    loadingModel: 'Loading the model… (first time only, a few seconds)',
    send: 'Send',
  },
  es: {
    subtitle: '¿Qué te gustaría saber sobre Gon?',
    placeholder: 'Preguntame sobre mi experiencia en fintech, product design, IA...',
    heroGreeting: 'Hola, soy',
    loadingModel: 'Cargando el modelo… (solo la primera vez, unos segundos)',
    send: 'Enviar',
  },
};

// Contact is always kept on screen as a fallback CTA — every other chip is a
// rotating recommendation that gets replaced (never added on top of) once
// it's been asked, so we never show more than the original 4 at once, well
// under the 5-chip cap.
const MAX_VISIBLE_PROMPTS = 5;
const INITIAL_ROTATABLE_COUNT = 3;
const PINNED_PROMPT_ID = 'contacto';
// Prompt ids and their order are identical across languages — only the
// labels/answers differ — so the rotation logic below can work off ids
// alone and look up the localized prompt object at render time.
const ALL_PROMPT_IDS = chatPromptsByLang.en.map((p) => p.id);
const ROTATABLE_PROMPT_IDS = ALL_PROMPT_IDS.filter((id) => id !== PINNED_PROMPT_ID);

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  answer?: ChatAnswer;
}

function AssistantBubble({
  message,
  onCta,
  onOpenResume,
}: {
  message: Message;
  onCta: (userLabel: string, answer: ChatAnswer) => void;
  onOpenResume: () => void;
}) {
  const { output, done } = useTypewriter(message.text, 14);
  const [ctaUsed, setCtaUsed] = useState(false);

  return (
    <div className={styles.assistantRow}>
      <div className={styles.avatar}>G</div>
      <div className={styles.assistantContent}>
        <p className={styles.assistantText}>
          {output}
          {!done && <span className={styles.caret} />}
        </p>

        {done && message.answer?.projects && message.answer.projects.length > 0 && (
          <div className={styles.projectGrid}>
            {message.answer.projects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`} className={styles.projectCard}>
                {project.thumbnail && (
                  <div className={styles.projectVisual}>
                    <img src={project.thumbnail} alt={project.title} className={styles.projectImage} />
                  </div>
                )}
                <div className={styles.projectBody}>
                  <span className={styles.projectTitle}>{project.title}</span>
                  <span className={styles.projectSubtitle}>{project.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {done && message.answer?.links && message.answer.links.length > 0 && (
          <div className={styles.answerLinks}>
            {message.answer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.answerLink}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        )}

        {done && !message.answer?.links && message.answer?.linkHref && (
          <Link href={message.answer.linkHref} className={styles.answerLink}>
            {message.answer.linkLabel} →
          </Link>
        )}

        {done && message.answer?.openResume && (
          <button type="button" className={styles.resumeLink} onClick={onOpenResume}>
            Preview resume →
          </button>
        )}

        {done && message.answer?.cta && !ctaUsed && (
          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => {
              setCtaUsed(true);
              onCta(message.answer!.cta!.userLabel, message.answer!.cta!.answer);
            }}
          >
            {message.answer.cta.label}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ChatHome() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [thinking, setThinking] = useState(false);
  const [searchPending, setSearchPending] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [promptRotation, setPromptRotation] = useState(() => ({
    visibleIds: ROTATABLE_PROMPT_IDS.slice(0, INITIAL_ROTATABLE_COUNT),
    nextIndex: INITIAL_ROTATABLE_COUNT,
  }));
  const transcriptRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const { lang } = useLang();
  const prompts = chatPromptsByLang[lang];
  const promptById = (id: string) => prompts.find((p) => p.id === id)!;
  const statusLine = useTypewriterLoop(STATUS_LINES[lang]);
  const { search, status: searchStatus } = useSemanticSearch();

  const visiblePrompts = [
    ...promptRotation.visibleIds.map((id) => promptById(id)),
    promptById(PINNED_PROMPT_ID),
  ].slice(0, MAX_VISIBLE_PROMPTS);

  const nextId = () => `msg-${idRef.current++}`;

  const respond = (userLabel: string, answer: ChatAnswer) => {
    setStarted(true);
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: userLabel }]);
    setThinking(true);

    setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [...prev, { id: nextId(), role: 'assistant', text: answer.text, answer }]);
    }, 650);
  };

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking]);

  const handlePromptClick = (promptId: string) => {
    const prompt = promptById(promptId);
    if (!prompt) return;
    respond(prompt.label, prompt.answer);

    // Contacto is pinned and never rotates out.
    if (promptId === PINNED_PROMPT_ID) return;

    setPromptRotation((prev) => {
      const idx = prev.visibleIds.indexOf(promptId);
      if (idx === -1) return prev;

      if (prev.nextIndex < ROTATABLE_PROMPT_IDS.length) {
        const visibleIds = [...prev.visibleIds];
        visibleIds[idx] = ROTATABLE_PROMPT_IDS[prev.nextIndex];
        return { visibleIds, nextIndex: prev.nextIndex + 1 };
      }

      return { visibleIds: prev.visibleIds.filter((id) => id !== promptId), nextIndex: prev.nextIndex };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value || thinking) return;
    setInputValue('');
    setStarted(true);
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: value }]);

    // Greetings/small talk never reach the model — no reason to load ~25MB
    // of weights just to say hi back.
    if (isGreetingOrGeneric(value)) {
      const greeting = chatGreetingByLang[lang];
      setThinking(true);
      setTimeout(() => {
        setThinking(false);
        setMessages((prev) => [
          ...prev,
          { id: nextId(), role: 'assistant', text: greeting.text, answer: greeting },
        ]);
      }, 400);
      return;
    }

    setThinking(true);
    setSearchPending(true);
    try {
      const matches = await search(value);
      const best = matches.find((m) => m.score >= MATCH_THRESHOLD);

      // Written answer + a link to read more, same shape as the canned
      // chips — a raw excerpt in its own bordered card reads like a search
      // engine, not like Gon answering you. The one exception is a general
      // "show me your projects" ask, which gets the visual project-cards
      // grid instead (see the projects-overview pseudo-chunk in
      // generate-embeddings.mjs).
      let answer: ChatAnswer;
      if (!best) {
        answer = chatNoMatchByLang[lang];
      } else if (best.projectId === 'projects-overview') {
        answer = chatProjectsOverviewByLang[lang];
      } else {
        answer = {
          text: best.text,
          linkHref: best.url,
          linkLabel: best.restricted
            ? 'Request access'
            : best.projectId === 'profile'
              ? 'See my profile'
              : 'Read the full case study',
        };
      }
      setMessages((prev) => [...prev, { id: nextId(), role: 'assistant', text: answer.text, answer }]);
    } catch (err) {
      console.error('semantic search failed', err);
      const fallback = chatFallbackByLang[lang];
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: 'assistant', text: fallback.text, answer: fallback },
      ]);
    } finally {
      setThinking(false);
      setSearchPending(false);
    }
  };

  return (
    <div className={styles.page}>
      {!started && (
        <div className={styles.emptyState}>
          <h1 className={styles.heroLine}>
            {COPY[lang].heroGreeting} <strong className={styles.heroName}>Gon</strong> 👋 {personalInfo.roles[0]}
            <br />
            <span className={styles.statusLine}>
              {statusLine}
              <span className={styles.statusCaret} />
            </span>
          </h1>
          <p className={styles.subtitle}>{COPY[lang].subtitle}</p>
          <div className={styles.chips}>
            {visiblePrompts.map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                className={styles.chip}
                onClick={() => handlePromptClick(prompt.id)}
              >
                {prompt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {started && (
        <div className={styles.transcript} ref={transcriptRef}>
          <div className={styles.transcriptInner}>
            {messages.map((message) =>
              message.role === 'user' ? (
                <div key={message.id} className={styles.userRow}>
                  <span className={styles.userBubble}>{message.text}</span>
                </div>
              ) : (
                <AssistantBubble
                  key={message.id}
                  message={message}
                  onCta={respond}
                  onOpenResume={() => setResumeOpen(true)}
                />
              )
            )}
            {thinking && (
              <div className={styles.assistantRow}>
                <div className={styles.avatar}>G</div>
                <div>
                  {searchPending && searchStatus === 'loading-model' && (
                    <p className={styles.modelLoadingLabel}>{COPY[lang].loadingModel}</p>
                  )}
                  <div className={styles.thinkingDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.composer}>
        {started && (
          <div className={styles.chipsRowWrapper}>
            <div className={styles.chipsRow}>
              {visiblePrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  type="button"
                  className={styles.chipSmall}
                  onClick={() => handlePromptClick(prompt.id)}
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </div>
        )}
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={COPY[lang].placeholder}
            className={styles.input}
            disabled={thinking}
          />
          <button type="submit" className={styles.sendButton} aria-label={COPY[lang].send} disabled={thinking}>
            ↑
          </button>
        </form>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
