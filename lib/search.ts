import { roadmap } from './roadmap-data';
import type { Phase, Topic, Subtopic, StatusFilter, StatusMap, ViewMode } from './types';

// ── Single source of truth for roadmap search/filter ─────────────────────────
// Previously the same match logic was copy-pasted across RoadmapSection,
// PhaseCard, and TopicGroup — they could drift apart. Everything now flows
// through filterRoadmap(): components render exactly what it returns.

export interface FilteredTopic {
  topic: Topic;
  subtopics: Subtopic[];
}
export interface FilteredPhase {
  phase: Phase;
  topics: FilteredTopic[];
}
export interface SearchResult {
  phases: FilteredPhase[];
  subtopicCount: number;
}

// Split a query into lowercased words. Multi-word queries become AND tokens.
export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

// "Everything" search scope: a subtopic's searchable text is its own title plus
// its resource labels plus ancestor context (topic title, phase title +
// description + week range) so any visible string is findable.
function haystack(phase: Phase, topic: Topic, sub: Subtopic): string {
  const resources = sub.resources.map((r) => r.label).join(' ');
  return [
    sub.title,
    resources,
    topic.title,
    phase.title,
    phase.description ?? '',
    phase.weekRange,
    `week ${sub.weekNumber}`,
  ]
    .join(' ')
    .toLowerCase();
}

// Multi-word AND: every token must appear as a substring somewhere in the text
// (any order). "pytorch neural" matches "Neural Networks with PyTorch".
function matchesTokens(text: string, tokens: string[]): boolean {
  return tokens.every((t) => text.includes(t));
}

export function filterRoadmap(
  query: string,
  filter: StatusFilter,
  statuses: StatusMap,
  viewMode: ViewMode,
  selectedWeek: number
): SearchResult {
  const tokens = tokenize(query);
  const phases: FilteredPhase[] = [];
  let subtopicCount = 0;

  for (const phase of roadmap) {
    const topics: FilteredTopic[] = [];
    for (const topic of phase.topics) {
      // Week view: only topics that touch the selected week.
      if (viewMode === 'week' && !topic.subtopics.some((s) => s.weekNumber === selectedWeek)) {
        continue;
      }
      const subtopics = topic.subtopics.filter((sub) => {
        if (tokens.length && !matchesTokens(haystack(phase, topic, sub), tokens)) return false;
        if (filter !== 'all' && (statuses[sub.id] ?? 'not-started') !== filter) return false;
        return true;
      });
      if (subtopics.length > 0) {
        topics.push({ topic, subtopics });
        subtopicCount += subtopics.length;
      }
    }
    if (topics.length > 0) phases.push({ phase, topics });
  }

  return { phases, subtopicCount };
}

// ── Highlighting ─────────────────────────────────────────────────────────────
export interface Segment {
  text: string;
  match: boolean;
}

// Split text into segments, flagging the parts that match any token, so the
// renderer can wrap matches in <mark>. Case-insensitive, token order ignored.
export function highlightSegments(text: string, tokens: string[]): Segment[] {
  const escaped = tokens
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .filter(Boolean);
  if (!escaped.length) return [{ text, match: false }];

  const re = new RegExp(`(${escaped.join('|')})`, 'gi');
  const segments: Segment[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > last) segments.push({ text: text.slice(last, i), match: false });
    segments.push({ text: m[0], match: true });
    last = i + m[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last), match: false });
  return segments;
}
