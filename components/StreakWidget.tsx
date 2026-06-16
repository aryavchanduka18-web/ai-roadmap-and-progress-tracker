'use client';

import { motion } from 'framer-motion';
import { useRoadmapStore } from '@/lib/store';
import { last30DateKeys, todayKey } from '@/lib/utils';
import { MOTIVATIONAL_QUOTES } from '@/lib/roadmap-data';
import { computeStreak } from '@/lib/selectors';

export function StreakWidget({ collapsed }: { collapsed: boolean }) {
  const daily = useRoadmapStore((s) => s.dailyCompletions);
  // Live streak derived from completion history (fixes the stale frozen value).
  const streak = computeStreak(daily);
  const last7 = last30DateKeys().slice(-7);
  const today = todayKey();

  const quoteIndex = (() => {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = (new Date().getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return Math.floor(diff) % MOTIVATIONAL_QUOTES.length;
  })();
  const quote = MOTIVATIONAL_QUOTES[quoteIndex] ?? MOTIVATIONAL_QUOTES[0];

  if (collapsed) {
    return (
      <div className="mx-auto flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-amber-400 text-zinc-950">
        <span className="text-lg font-bold leading-none">{streak}</span>
        <span className="text-[8px] font-medium uppercase tracking-wider opacity-70">day</span>
      </div>
    );
  }

  const maxCount = Math.max(1, ...last7.map((d) => daily[d] ?? 0));

  return (
    <div className="space-y-3">
      <motion.div
        layout
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-amber-400 p-4 text-zinc-950 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold tracking-tight leading-none">{streak}</div>
            <div className="mt-1 text-xs font-medium opacity-80">Day Streak</div>
          </div>
        </div>
        <div className="mt-4 flex h-8 items-end gap-1">
          {last7.map((d) => {
            const v = daily[d] ?? 0;
            const h = `${(v / maxCount) * 100}%`;
            return (
              <div
                key={d}
                className="flex-1 rounded-sm bg-zinc-950/30"
                title={`${d}: ${v} completion${v === 1 ? '' : 's'}`}
                style={{ height: v === 0 ? '6%' : h, minHeight: 3 }}
              />
            );
          })}
        </div>
        <div className="mt-1 text-[9px] uppercase tracking-wider opacity-70">Last 7 days · today {daily[today] ?? 0}</div>
      </motion.div>
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Daily fuel</div>
        <p className="mt-1 text-xs leading-relaxed text-zinc-300">{quote}</p>
      </div>
    </div>
  );
}
