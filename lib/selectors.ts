import type { Phase, Status, StatusMap, Subtopic, Topic } from './types';
import { roadmap } from './roadmap-data';

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
