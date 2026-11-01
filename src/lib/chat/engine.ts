import { personalInfo } from '@/data/content';
import type { Lang } from '@/components/project/LangWrapper';
import { latestProjectsByLang, type ChatAnswer, type ChatSuggestion } from '@/data/chat';
import {
  DEFAULT_SUGGESTIONS,
  fallbackAnswers,
  inviteLines,
  longChatLines,
  noMoreAnswers,
  skillCheckAnswers,
  openingAnswer,
  repeatLeadIn,
  topicById,
  topics,
  type L,
  type Topic,
  type TopicAnswer,
} from '@/data/chat-knowledge';

// Rule-based conversation engine. It is deliberately not an LLM: it routes a
// free-text question to the closest topic in chat-knowledge.ts, answers in the
// language the visitor actually wrote in, remembers what has already been
// discussed (so it can go deeper instead of repeating itself) and proposes
// follow-ups that make sense given the last answer.

export interface ChatState {
  /** How many times each topic has been answered. */
  asked: Record<string, number>;
  /** Topics whose deeper `more` answer has already been served. */
  moreShown: Record<string, boolean>;
  lastTopic: string | null;
  /** Content answers given so far (greetings, thanks and fallbacks don't count). */
  answerCount: number;
  /** answerCount when the visitor last saw an email / invitation to talk. */
  lastInviteAt: number;
  invitesShown: number;
}

// Email is the main goal of the chat, so it's kept close: flagged topics
// invite right away, then at most every other answer, and any other answer
// carries a lighter nudge once a few have gone by without one.
const INVITE_SPACING = 2;
const LONG_CHAT_AFTER = 4;
// From this many answers on, "contact" is always among the suggested follow-ups.
const PUSH_CONTACT_AFTER = 3;

export const initialChatState: ChatState = {
  asked: {},
  moreShown: {},
  lastTopic: null,
  answerCount: 0,
  lastInviteAt: -INVITE_SPACING,
  invitesShown: 0,
};

export interface ChatReply {
  answer: ChatAnswer;
  lang: Lang;
  state: ChatState;
}

const STRONG_WEIGHT = 3;
const WEAK_WEIGHT = 1.5;
// One weak match (a single generic word like "experience") is enough to route
// a question when nothing stronger matched; any strong match outranks it.
const MIN_SCORE = WEAK_WEIGHT;
const MAX_SUGGESTIONS = 3;

const MORE_PATTERN =
  /^(y |and )?(mas|more|algo mas|something else|anything else|contame mas|cuentame mas|dime mas|decime mas|tell me more|more details|mas detalles|go on|continue|continua|sigue|segui|keep going|and then|y despues|elaborate|can you elaborate|expand|ampliar|ampliame|profundiza|profundizar|dame mas|give me more|mas info|more info)( please| porfa| por favor)?$/;

// "Do you know SQL?" / "experience with accessibility?" — a concrete skill
// check whose subject isn't in the knowledge base. Better to say so than to
// answer with a generic summary that implies yes.
const SKILL_CHECK_PATTERN =
  /\b(do you (know|have experience|use|have worked)|have you (worked|used|done|tried)|experience (with|in|using)|sabes|tenes experiencia|tienes experiencia|experiencia (con|en|usando)|trabajaste con|usaste|has trabajado con|conoces|conoces)\b/;

const OPENING_PATTERN =
  /^(can i ask( you)?( something| a question)?|i have a question|quick question|may i ask|tengo una pregunta|una pregunta|puedo preguntar|puedo preguntarte|puedo hacerte una pregunta|quiero preguntarte)$/;

function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9.\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Cheap stopword vote. The visitor can type in either language regardless of
// which one the UI is set to, and answering an English question in Spanish
// (or the reverse) is the fastest way to feel like a script.
const ES_HINTS =
  /[¿¡ñáéíóú]|\b(que|como|cual|cuales|donde|cuando|cuanto|quien|por que|porque|vos|tu|tus|sos|eres|tenes|tienes|hablas|trabajas|trabajaste|hola|gracias|contame|cuentame|usas|estudiaste|puedo|mucho|los|las|una|para|con|del|dejaste|hiciste|estas|podes|queres|quieres|hacer|tengo|soy|hay|mas|sobre|esto|esta|este)\b/g;
const EN_HINTS =
  /\b(the|what|whats|how|why|where|who|which|do|does|did|are|is|you|your|can|could|would|tell|about|have|has|with|work|worked|from|any|me|my|and|for|to|of|in|it|this|that|please|thanks|hello|hi|hey)\b/g;

export function detectLang(input: string, fallback: Lang): Lang {
  const lower = input.toLowerCase();
  const es = (lower.match(ES_HINTS) ?? []).length;
  const en = (lower.match(EN_HINTS) ?? []).length;
  if (es > en) return 'es';
  if (en > es) return 'en';
  return fallback;
}

function pick(options: L | L[], index: number, lang: Lang): string {
  const list = Array.isArray(options) ? options : [options];
  return list[index % list.length][lang];
}

interface Scored {
  topic: Topic;
  score: number;
}

function scoreTopics(text: string): Scored[] {
  return topics
    .map((topic) => {
      let score = 0;
      for (const pattern of topic.strong) {
        const match = text.match(pattern);
        // The tiny length term breaks ties toward the more specific phrase
        // ("design systems" beats "experience").
        if (match) score += STRONG_WEIGHT + match[0].length * 0.02;
      }
      for (const pattern of topic.weak ?? []) {
        const match = text.match(pattern);
        if (match) score += WEAK_WEIGHT + match[0].length * 0.02;
      }
      return { topic, score };
    })
    .filter((s) => s.score >= MIN_SCORE);
}

/** Content topics beat social ones (a "thanks, and what about X?" is about X). */
function bestTopic(text: string): Scored | null {
  const scored = scoreTopics(text);
  if (scored.length === 0) return null;
  const content = scored.filter((s) => !s.topic.social);
  const pool = content.length > 0 ? content : scored;
  // Stable: on an exact tie the topic declared first wins.
  return pool.reduce((best, s) => (s.score > best.score ? s : best));
}

function suggestionsFor(
  topic: Topic | null,
  lang: Lang,
  state: ChatState,
  excludeId: string | null,
  offerMore: boolean
): ChatSuggestion[] {
  const out: ChatSuggestion[] = [];
  if (offerMore) {
    out.push({ id: 'more', label: lang === 'es' ? 'Contame más' : 'Tell me more' });
  }

  const pushContact = state.answerCount >= PUSH_CONTACT_AFTER && !state.asked.contact && excludeId !== 'contact';
  const candidates = [...(pushContact ? ['contact'] : []), ...(topic?.suggest ?? []), ...DEFAULT_SUGGESTIONS];
  for (const id of candidates) {
    if (out.length >= MAX_SUGGESTIONS) break;
    if (id === excludeId || state.asked[id] || out.some((s) => s.id === id)) continue;
    const candidate = topicById[id];
    if (!candidate) continue;
    out.push({ id, label: candidate.label[lang] });
  }
  return out;
}

function toAnswer(content: TopicAnswer, text: string, lang: Lang): ChatAnswer {
  const answer: ChatAnswer = { text };
  if (content.links) {
    answer.links = content.links.map((link) => ({ label: link.label[lang], href: link.href }));
  } else if (content.link) {
    answer.linkLabel = content.link.label[lang];
    answer.linkHref = content.link.href;
  }
  if (content.projects) answer.projects = latestProjectsByLang[lang];
  if (content.openResume) answer.openResume = true;
  return answer;
}

function addEmailLink(answer: ChatAnswer, lang: Lang) {
  const mail = { label: lang === 'es' ? 'Enviar un email' : 'Send an email', href: `mailto:${personalInfo.email}` };
  if (answer.links) answer.links = [...answer.links, mail];
  else if (answer.linkHref && answer.linkLabel) {
    answer.links = [{ label: answer.linkLabel, href: answer.linkHref }, mail];
    delete answer.linkHref;
    delete answer.linkLabel;
  } else {
    answer.linkLabel = mail.label;
    answer.linkHref = mail.href;
  }
}

function answerTopic(topic: Topic, lang: Lang, prev: ChatState, wantMore: boolean): ChatReply {
  const timesAsked = prev.asked[topic.id] ?? 0;
  const useMore = Boolean(topic.more) && !prev.moreShown[topic.id] && (wantMore || timesAsked > 0);

  const content = useMore ? topic.more! : topic.answer;
  let text = pick(content.text, timesAsked, lang);
  // Asked again with nothing deeper to add: say so rather than parrot it.
  if (!useMore && timesAsked > 0) text = `${repeatLeadIn[lang]}\n\n${text}`;

  const answerCount = topic.social ? prev.answerCount : prev.answerCount + 1;
  const alreadyHasContact = text.includes(personalInfo.email);
  const sinceInvite = answerCount - prev.lastInviteAt;
  let invite: L | null = null;
  if (!topic.social && !alreadyHasContact) {
    if (topic.invite && sinceInvite >= INVITE_SPACING) invite = inviteLines[prev.invitesShown % inviteLines.length];
    else if (sinceInvite >= LONG_CHAT_AFTER) invite = longChatLines[prev.invitesShown % longChatLines.length];
  }
  if (invite) text = `${text}\n\n${invite[lang]}`;

  const state: ChatState = {
    asked: { ...prev.asked, [topic.id]: timesAsked + 1 },
    moreShown: useMore ? { ...prev.moreShown, [topic.id]: true } : prev.moreShown,
    lastTopic: topic.id,
    answerCount,
    // An answer that already carries the email counts as an invitation too.
    lastInviteAt: invite || alreadyHasContact ? answerCount : prev.lastInviteAt,
    invitesShown: invite ? prev.invitesShown + 1 : prev.invitesShown,
  };

  const hasDeeper = Boolean(topic.more) && !state.moreShown[topic.id];
  const answer = toAnswer(content, text, lang);
  if (invite) addEmailLink(answer, lang);
  answer.suggestions = topic.id === 'bye' ? [] : suggestionsFor(topic, lang, state, topic.id, hasDeeper);
  return { answer, lang, state };
}

function answerFallback(lang: Lang, prev: ChatState, skillCheck: boolean): ChatReply {
  const attempts = prev.asked.__fallback ?? 0;
  const state: ChatState = { ...prev, asked: { ...prev.asked, __fallback: attempts + 1 } };
  const answer: ChatAnswer = {
    text: pick(skillCheck ? skillCheckAnswers : fallbackAnswers, attempts, lang),
    suggestions: suggestionsFor(null, lang, state, null, false),
  };
  // Nothing matched, but the visitor clearly wants something: put the
  // quickest route to the real person right under the answer.
  answer.linkLabel = lang === 'es' ? 'Enviar un email' : 'Send an email';
  answer.linkHref = topicById.contact.answer.links?.[0]?.href ?? '';
  return { answer, lang, state };
}

function answerNoMore(lang: Lang, prev: ChatState): ChatReply {
  const last = prev.lastTopic ? topicById[prev.lastTopic] : null;
  const answer: ChatAnswer = {
    text: pick(noMoreAnswers, 0, lang),
    suggestions: suggestionsFor(last, lang, prev, last?.id ?? null, false),
  };
  return { answer, lang, state: prev };
}

/** Answers a specific topic directly (chips and suggestion buttons). */
export function replyToTopic(topicId: string, state: ChatState, uiLang: Lang): ChatReply | null {
  const topic = topicById[topicId];
  if (!topic) return null;
  return answerTopic(topic, uiLang, state, false);
}

/** Answers a typed question. */
export function reply(input: string, state: ChatState, uiLang: Lang): ChatReply {
  const lang = detectLang(input, uiLang);
  const text = normalize(input);

  if (OPENING_PATTERN.test(text)) {
    const answer: ChatAnswer = {
      text: openingAnswer[lang],
      suggestions: suggestionsFor(null, lang, state, null, false),
    };
    return { answer, lang, state };
  }

  if (MORE_PATTERN.test(text)) {
    const last = state.lastTopic ? topicById[state.lastTopic] : null;
    if (!last) return reply('who are you', state, lang);
    if (last.more && !state.moreShown[last.id]) return answerTopic(last, lang, state, true);
    return answerNoMore(lang, state);
  }

  const best = bestTopic(text);
  const skillCheck = SKILL_CHECK_PATTERN.test(text);
  // Only a weak, generic hit on a skill question is treated as "unknown".
  if (!best || (skillCheck && best.score < STRONG_WEIGHT)) return answerFallback(lang, state, skillCheck);
  return answerTopic(best.topic, lang, state, false);
}
