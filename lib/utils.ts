import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TOTAL_WEEKS } from './roadmap-data';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Local-date string YYYY-MM-DD (no UTC drift)
export function todayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseDateKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
}

export function daysBetween(a: string, b: string): number {
  const ms = parseDateKey(b).getTime() - parseDateKey(a).getTime();
  return Math.round(ms / (24 * 60 * 60 * 1000));
}

export function currentWeekFromStart(startDateKey: string, now: Date = new Date()): number {
  const diff = daysBetween(startDateKey, todayKey(now));
  if (diff < 0) return 1;
  const wk = Math.floor(diff / 7) + 1;
  if (wk < 1) return 1;
  if (wk > TOTAL_WEEKS) return TOTAL_WEEKS;
  return wk;
}

export function last30DateKeys(now: Date = new Date()): string[] {
  const keys: string[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    keys.push(todayKey(d));
  }
  return keys;
}

export function downloadJson(filename: string, data: unknown): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
