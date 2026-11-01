'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/content';
import type { ChatAnswer, ChatSuggestion } from '@/data/chat';
import { topicById } from '@/data/chat-knowledge';
import { initialChatState, reply, replyToTopic, type ChatReply, type ChatState } from '@/lib/chat/engine';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useTypewriterLoop } from '@/hooks/useTypewriterLoop';
import { useLang, type Lang } from '@/components/project/LangWrapper';
import ResumeModal from './ResumeModal';
import styles from './ChatHome.module.css';

const STATUS_LINES: Record<Lang, string[]> = {
  en: ['based in Barcelona 📍', '+8 years of experience 💻', 'working @ Mango 👗', '& Product Manager mindset'],
  es: ['con base en Barcelona 📍', '+8 años de experiencia 💻', 'trabajando en Mango 👗', 'mentalidad de Product Manager'],
};

const COPY: Record<Lang, { subtitle: string; placeholder: string; heroGreeting: string; send: string; previewResume: string }> = {
  en: {
    subtitle: 'What would you like to know about Gon?',
    placeholder: 'Ask me about my experience, education, AI use...',
    heroGreeting: "Hi, I'm",
    send: 'Send',
    previewResume: 'Preview resume',
  },
  es: {
    subtitle: '¿Qué te gustaría saber sobre Gon?',
    placeholder: 'Preguntame sobre mi experiencia, formación, uso de IA...',
    heroGreeting: 'Hola, soy',
    send: 'Enviar',
    previewResume: 'Ver CV',
  },
};

// Starter chips on the empty state, in the order a recruiter tends to want
// them: the work, the pitch, the differentiator, then the CV. Once the chat
// starts they disappear — the follow-up buttons under each answer take over.
const STARTER_PROMPT_IDS = ['projects', 'strengths', 'ai', 'resume'];

// How long the "typing" dots show: a longer answer reads as more considered,
// but never long enough to feel slow.
function thinkingDelay(text: string): number {
  return 450 + Math.min(650, text.length * 1.4);
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  answer?: ChatAnswer;
}

function AssistantBubble({
  message,
  lang,
  isLast,
  onSuggest,
  onOpenResume,
}: {
  message: Message;
  lang: Lang;
  isLast: boolean;
  onSuggest: (suggestion: ChatSuggestion) => void;
  onOpenResume: () => void;
}) {
  // Aim for ~2.2s per answer regardless of length: long answers type faster
  // per character instead of making the reader wait.
  const { output, done } = useTypewriter(message.text, Math.max(6, Math.min(14, 2200 / message.text.length)));

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
            {COPY[lang].previewResume} →
          </button>
        )}

        {done && isLast && message.answer?.suggestions && message.answer.suggestions.length > 0 && (
          <div className={styles.suggestions}>
            {message.answer.suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                type="button"
                className={styles.suggestion}
                onClick={() => onSuggest(suggestion)}
              >
                {suggestion.label}
              </button>
            ))}
          </div>
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
  const [resumeOpen, setResumeOpen] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  // What's been discussed so far — lets the engine go deeper instead of
  // repeating itself and tailor the follow-ups. Mutated only from handlers.
  const chatStateRef = useRef<ChatState>(initialChatState);
  const { lang } = useLang();
  const statusLine = useTypewriterLoop(STATUS_LINES[lang]);

  const visiblePrompts = STARTER_PROMPT_IDS.map((id) => ({ id, label: topicById[id].label[lang] }));

  const nextId = () => `msg-${idRef.current++}`;

  const deliver = (userText: string, result: ChatReply) => {
    chatStateRef.current = result.state;
    setStarted(true);
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: userText }]);
    setThinking(true);

    setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: 'assistant', text: result.answer.text, answer: result.answer },
      ]);
    }, thinkingDelay(result.answer.text));
  };

  const askTopic = (topicId: string, label: string) => {
    const result = replyToTopic(topicId, chatStateRef.current, lang);
    if (result) deliver(label, result);
  };

  const askText = (text: string) => deliver(text, reply(text, chatStateRef.current, lang));

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking]);

  const handlePromptClick = (promptId: string) => {
    if (thinking) return;
    askTopic(promptId, topicById[promptId].label[lang]);
  };

  const handleSuggestion = (suggestion: ChatSuggestion) => {
    if (thinking) return;
    // "Tell me more" has no topic of its own — it's routed as typed text so
    // the engine continues from whatever was discussed last.
    if (suggestion.id === 'more') askText(suggestion.label);
    else askTopic(suggestion.id, suggestion.label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value || thinking) return;
    setInputValue('');
    askText(value);
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
            {messages.map((message, index) =>
              message.role === 'user' ? (
                <div key={message.id} className={styles.userRow}>
                  <span className={styles.userBubble}>{message.text}</span>
                </div>
              ) : (
                <AssistantBubble
                  key={message.id}
                  message={message}
                  lang={lang}
                  isLast={index === messages.length - 1}
                  onSuggest={handleSuggestion}
                  onOpenResume={() => setResumeOpen(true)}
                />
              )
            )}
            {thinking && (
              <div className={styles.assistantRow}>
                <div className={styles.avatar}>G</div>
                <div>
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
