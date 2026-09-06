'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/content';
import {
  chatPrompts,
  chatFallback,
  chatGreeting,
  chatNoMatch,
  chatProjectsOverview,
  type ChatAnswer,
} from '@/data/chat';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypewriterLoop } from '@/hooks/useTypewriterLoop';
import { useSemanticSearch } from '@/hooks/useSemanticSearch';
import { isGreetingOrGeneric } from '@/lib/semantic-search/greeting';
import { MATCH_THRESHOLD } from '@/lib/semantic-search/config';
import styles from './ChatHome.module.css';

const STATUS_LINES = [
  'based in Barcelona',
  '+8 years of experience',
  'working @ Mango',
  'Product Manager mindset',
];

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  answer?: ChatAnswer;
}

function AssistantBubble({ message }: { message: Message }) {
  const { output, done } = useTypewriter(message.text, 14);

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

        {done && message.answer?.linkHref && (
          <Link href={message.answer.linkHref} className={styles.answerLink}>
            {message.answer.linkLabel} →
          </Link>
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
  const [usedPrompts, setUsedPrompts] = useState<Set<string>>(new Set());
  const transcriptRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const statusLine = useTypewriterLoop(STATUS_LINES);
  const { search, status: searchStatus } = useSemanticSearch();

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
    const prompt = chatPrompts.find((p) => p.id === promptId);
    if (!prompt) return;
    setUsedPrompts((prev) => new Set(prev).add(promptId));
    respond(prompt.label, prompt.answer);
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
      setThinking(true);
      setTimeout(() => {
        setThinking(false);
        setMessages((prev) => [
          ...prev,
          { id: nextId(), role: 'assistant', text: chatGreeting.text, answer: chatGreeting },
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
        answer = chatNoMatch;
      } else if (best.projectId === 'projects-overview') {
        answer = chatProjectsOverview;
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
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: 'assistant', text: chatFallback.text, answer: chatFallback },
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
            Hi, I&apos;m <strong className={styles.heroName}>Gon</strong> 👋 {personalInfo.roles[0]}
            <br />
            <span className={styles.statusLine}>
              {statusLine}
              <span className={styles.statusCaret} />
            </span>
          </h1>
          <p className={styles.subtitle}>What would you like to know about Gon?</p>
          <span className={styles.chipsLabel}>Try asking</span>
          <div className={styles.chips}>
            {chatPrompts.map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                className={`${styles.chip} ${usedPrompts.has(prompt.id) ? styles.chipActive : ''}`}
                aria-pressed={usedPrompts.has(prompt.id)}
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
                <AssistantBubble key={message.id} message={message} />
              )
            )}
            {thinking && (
              <div className={styles.assistantRow}>
                <div className={styles.avatar}>G</div>
                <div>
                  {searchPending && searchStatus === 'loading-model' && (
                    <p className={styles.modelLoadingLabel}>Loading the model… (first time only, a few seconds)</p>
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
              {chatPrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  type="button"
                  className={`${styles.chipSmall} ${usedPrompts.has(prompt.id) ? styles.chipActive : ''}`}
                  aria-pressed={usedPrompts.has(prompt.id)}
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
            placeholder="Ask me about my experience in fintech, product design, AI..."
            className={styles.input}
            disabled={thinking}
          />
          <button type="submit" className={styles.sendButton} aria-label="Send" disabled={thinking}>
            ↑
          </button>
        </form>
      </div>
    </div>
  );
}
