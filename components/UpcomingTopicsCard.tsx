'use client';

import { useMemo } from 'react';
import { Sparkles, PartyPopper } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { upcomingIncomplete } from '@/lib/selectors';
import { Checkbox } from './ui/Checkbox';

export function UpcomingTopicsCard() {
  const selectedWeek = useRoadmapStore((s) => s.selectedWeek);
  const statuses = useRoadmapStore((s) => s.statuses);
  const cycle = useRoadmapStore((s) => s.cycleStatus);

  const items = useMemo(() => upcomingIncomplete(statuses, selectedWeek, 5), [statuses, selectedWeek]);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-100">
        <Sparkles className="h-4 w-4 text-brand-500" />
        Upcoming Topics
      </div>
      {items.length === 0 ? (
        <div className="flex flex-col items-center rounded-lg border border-dashed border-zinc-800 px-3 py-6 text-center">
          <PartyPopper className="mb-2 h-5 w-5 text-emerald-400" />
          <div className="text-sm font-medium text-zinc-200">You’re all caught up</div>
          <div className="mt-0.5 text-[11px] text-zinc-500">Nothing pending from this week forward.</div>
        </div>
      ) : (
        <ul className="space-y-1">
          {items.map((sub) => {
            const s = statuses[sub.id] ?? 'not-started';
            return (
              <li key={sub.id} className="flex items-start gap-2 rounded-md px-1.5 py-1.5 text-xs text-zinc-200 hover:bg-zinc-900">
                <Checkbox status={s} onCycle={() => cycle(sub.id)} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="line-clamp-2 leading-snug">{sub.title}</div>
                  <div className="mt-0.5 text-[10px] text-zinc-500">Week {sub.weekNumber}</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
