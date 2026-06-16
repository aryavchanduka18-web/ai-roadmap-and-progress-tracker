import type { Phase, Status, StatusMap, Subtopic, Topic } from './types';
import { roadmap } from './roadmap-data';
import { todayKey, parseDateKey, daysBetween } from './utils';

export interface CountSummary {
  total: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percent: number;
}

export function statusOf(map: StatusMap, id: string): Status {
  return map[id] ?? 'not-started';
}

export function summarize(map: StatusMap, ids: string[]): CountSummary {
  let completed = 0;
  let inProgress = 0;
  for (const id of ids) {
    const s = map[id] ?? 'not-started';
    if (s === 'completed') completed++;
    else if (s === 'in-progress') inProgress++;
  }
  const total = ids.length;
  const notStarted = total - completed - inProgress;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, inProgress, notStarted, percent };
}

export function summarizeTopic(map: StatusMap, topic: Topic): CountSummary {
  return summarize(map, topic.subtopics.map((s) => s.id));
}

export function summarizePhase(map: StatusMap, phase: Phase): CountSummary {
  return summarize(
    map,
    phase.topics.flatMap((t) => t.subtopics.map((s) => s.id))
  );
}

export function summarizeAll(map: StatusMap): CountSummary {
  return summarize(
    map,
    roadmap.flatMap((p) => p.topics.flatMap((t) => t.subtopics.map((s) => s.id)))
  );
}

export function summarizeWeek(map: StatusMap, weekNumber: number): CountSummary {
  const subs: Subtopic[] = [];
  for (const phase of roadmap) {
    for (const topic of phase.topics) {
      for (const sub of topic.subtopics) {
        if (sub.weekNumber === weekNumber) subs.push(sub);
      }
    }
  }
  return summarize(map, subs.map((s) => s.id));
}

export function subtopicsForWeek(weekNumber: number): { phaseId: string; topicId: string; subtopic: Subtopic }[] {
  const out: { phaseId: string; topicId: string; subtopic: Subtopic }[] = [];
  for (const phase of roadmap) {
    for (const topic of phase.topics) {
      for (const sub of topic.subtopics) {
        if (sub.weekNumber === weekNumber) out.push({ phaseId: phase.id, topicId: topic.id, subtopic: sub });
      }
    }
  }
  return out;
}

export function upcomingIncomplete(map: StatusMap, fromWeek: number, max = 5): Subtopic[] {
  const out: Subtopic[] = [];
  for (const phase of roadmap) {
    for (const topic of phase.topics) {
      for (const sub of topic.subtopics) {
        if (sub.weekNumber < fromWeek) continue;
        const s = map[sub.id] ?? 'not-started';
        if (s !== 'completed') {
          out.push(sub);
          if (out.length >= max) return out;
        }
      }
    }
  }
  return out;
}

export interface DailyDatum {
  date: string;
  completions: number;
}

export function dailyCompletionsSeries(
  daily: Record<string, number>,
  dateKeys: string[]
): DailyDatum[] {
  return dateKeys.map((d) => ({ date: d, completions: daily[d] ?? 0 }));
}

export interface PhaseBarDatum {
  phase: string;
  percent: number;
}

export function phasePercents(map: StatusMap): PhaseBarDatum[] {
  return roadmap.map((p) => ({
    phase: `P${p.number}`,
    percent: summarizePhase(map, p).percent,
  }));
}

// ── Streak (computed live from dailyCompletions — never stale) ───────────────
// The old store kept a frozen `streak` field that only updated on completion,
// so a broken streak still displayed its last value. These derive the streak
// from the actual completion history every render.
export function computeStreak(daily: Record<string, number>, today: string = todayKey()): number {
  const cursor = parseDateKey(today);
  // If today has no completions yet, the streak is still "alive" when yesterday
  // had one (grace for the current day). If neither, it's broken → 0.
  if ((daily[todayKey(cursor)] ?? 0) === 0) {
    cursor.setDate(cursor.getDate() - 1);
    if ((daily[todayKey(cursor)] ?? 0) === 0) return 0;
  }
  let streak = 0;
  while ((daily[todayKey(cursor)] ?? 0) > 0) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function computeLongestStreak(daily: Record<string, number>): number {
  const active = Object.keys(daily)
    .filter((d) => (daily[d] ?? 0) > 0)
    .sort();
  let longest = 0;
  let run = 0;
  let prev: string | null = null;
  for (const d of active) {
    run = prev && daysBetween(prev, d) === 1 ? run + 1 : 1;
    if (run > longest) longest = run;
    prev = d;
  }
  return longest;
}

// Weeks (1..uptoWeek) that are 100% complete.
export function weeksCompleted(map: StatusMap, uptoWeek: number): number {
  let n = 0;
  for (let w = 1; w <= uptoWeek; w++) {
    const s = summarizeWeek(map, w);
    if (s.total > 0 && s.completed === s.total) n++;
  }
  return n;
}

// O(1) subtopic lookup by id — used by the store to label completion toasts.
const _subtopicIndex: Record<string, Subtopic> = (() => {
  const m: Record<string, Subtopic> = {};
  for (const phase of roadmap) for (const topic of phase.topics) for (const sub of topic.subtopics) m[sub.id] = sub;
  return m;
})();

export function subtopicById(id: string): Subtopic | undefined {
  return _subtopicIndex[id];
}
