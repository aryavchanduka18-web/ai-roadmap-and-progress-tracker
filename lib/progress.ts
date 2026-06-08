import { allSubtopicIds } from './roadmap-data';
import type { Status, StatusMap } from './types';
import { todayKey } from './utils';

export const SCHEMA_VERSION = 1;

export interface ProgressSnapshot {
  schemaVersion: number;
  statuses: StatusMap;
  lastCompletionDate: string | null;
  streak: number;
  longestStreak: number;
  dailyCompletions: Record<string, number>;
  startDate: string;
}

const knownSubtopicIds = new Set(allSubtopicIds);
const validStatuses = new Set<Status>(['not-started', 'in-progress', 'completed']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isDateKey(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function toNonNegativeInteger(value: unknown): number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

export function createDefaultProgressSnapshot(startDate = todayKey()): ProgressSnapshot {
  return {
    schemaVersion: SCHEMA_VERSION,
    statuses: {},
    lastCompletionDate: null,
    streak: 0,
    longestStreak: 0,
    dailyCompletions: {},
    startDate,
  };
}

export function sanitizeProgressSnapshot(value: unknown): ProgressSnapshot {
  const fallback = createDefaultProgressSnapshot();
  if (!isRecord(value)) return fallback;

  const statuses: StatusMap = {};
  if (isRecord(value.statuses)) {
    for (const [id, status] of Object.entries(value.statuses)) {
      if (knownSubtopicIds.has(id) && validStatuses.has(status as Status)) {
        statuses[id] = status as Status;
      }
    }
  }

  const dailyCompletions: Record<string, number> = {};
  if (isRecord(value.dailyCompletions)) {
    for (const [date, count] of Object.entries(value.dailyCompletions).slice(0, 1000)) {
      if (isDateKey(date)) dailyCompletions[date] = toNonNegativeInteger(count);
    }
  }

  return {
    schemaVersion: SCHEMA_VERSION,
    statuses,
    lastCompletionDate: isDateKey(value.lastCompletionDate) ? value.lastCompletionDate : null,
    streak: toNonNegativeInteger(value.streak),
    longestStreak: toNonNegativeInteger(value.longestStreak),
    dailyCompletions,
    startDate: isDateKey(value.startDate) ? value.startDate : fallback.startDate,
  };
}

export function toProgressSnapshot(state: ProgressSnapshot): ProgressSnapshot {
  return {
    schemaVersion: SCHEMA_VERSION,
    statuses: state.statuses,
    lastCompletionDate: state.lastCompletionDate,
    streak: state.streak,
    longestStreak: state.longestStreak,
    dailyCompletions: state.dailyCompletions,
    startDate: state.startDate,
  };
}
