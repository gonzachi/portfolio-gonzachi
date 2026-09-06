'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/content';
import { chatPrompts, chatFallback, type ChatAnswer } from '@/data/chat';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypewriterLoop } from '@/hooks/useTypewriterLoop';
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
  const [inputValue, setInputValue] = useState('');
  const [usedPrompts, setUsedPrompts] = useState<Set<string>>(new Set());
  const transcriptRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const statusLine = useTypewriterLoop(STATUS_LINES);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value) return;
    respond(value, chatFallback);
    setInputValue('');
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
                <div className={styles.thinkingDots}>
                  <span />
                  <span />
                  <span />
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
            placeholder="Ask me something..."
            className={styles.input}
          />
          <button type="submit" className={styles.sendButton} aria-label="Send">
            ↑
          </button>
        </form>
      </div>
    </div>
  );
}
