'use client';

import { useMemo, useCallback } from 'react';
import { CalendarRange, ArrowRight } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { subtopicsForWeek, summarizeWeek } from '@/lib/selectors';
import { TOTAL_WEEKS } from '@/lib/roadmap-data';
import { Checkbox } from './ui/Checkbox';
import { CircularProgress } from './CircularProgress';

export function WeeklyProgressCard() {
  const selectedWeek = useRoadmapStore((s) => s.selectedWeek);
  const setSelectedWeek = useRoadmapStore((s) => s.setSelectedWeek);
  const statuses = useRoadmapStore((s) => s.statuses);
  const cycle = useRoadmapStore((s) => s.cycleStatus);

  const subs = useMemo(() => subtopicsForWeek(selectedWeek), [selectedWeek]);
  const summary = useMemo(() => summarizeWeek(statuses, selectedWeek), [statuses, selectedWeek]);

  const onScroll = useCallback(() => {
    const el = document.getElementById('roadmap');
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-100">
          <CalendarRange className="h-4 w-4 text-brand-500" />
          Weekly Progress
        </div>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(Number(e.target.value))}
          className="h-7 rounded-md border border-zinc-800 bg-zinc-950 px-2 text-[11px] text-zinc-100 outline-none focus:border-brand-500"
        >
          {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((w) => (
            <option key={w} value={w}>
              Week {w}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-zinc-950/40 p-3">
        <CircularProgress value={summary.percent} size={88} stroke={8} />
        <div>
          <div className="text-2xl font-semibold tracking-tight text-zinc-100">
            {summary.completed} <span className="text-sm font-normal text-zinc-500">/ {summary.total}</span>
          </div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500">Completed this week</div>
        </div>
      </div>
      <ul className="mt-3 max-h-64 space-y-0.5 overflow-y-auto pr-1">
        {subs.map(({ subtopic }) => {
          const s = statuses[subtopic.id] ?? 'not-started';
          return (
            <li
              key={subtopic.id}
              className="flex items-start gap-2 rounded-md px-1.5 py-1.5 text-xs text-zinc-200 transition hover:bg-zinc-900"
            >
              <Checkbox status={s} onCycle={() => cycle(subtopic.id)} size="sm" />
              <span className="line-clamp-2 leading-snug">{subtopic.title}</span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={onScroll}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 py-2 text-xs font-medium text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
      >
        View All Weeks <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}
