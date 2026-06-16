'use client';

import { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/nextjs';
import { ArrowRight, Zap, Trophy, CalendarCheck, Clock } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import {
  summarizeAll,
  summarizeWeek,
  upcomingIncomplete,
  computeStreak,
  computeLongestStreak,
  weeksCompleted,
} from '@/lib/selectors';
import { currentWeekFromStart, todayKey } from '@/lib/utils';
import { TOTAL_WEEKS } from '@/lib/roadmap-data';
import { Checkbox } from './ui/Checkbox';


// "Continue learning" hero — answers the two questions a tracker must answer
// the moment it loads: where am I, and what do I do next. Strategic orange is
// reserved for the single next action + the live streak; everything else stays
// neutral zinc so the accent actually means something.
export function DashboardHero() {
  const { user } = useUser();
  const statuses = useRoadmapStore((s) => s.statuses);
  const daily = useRoadmapStore((s) => s.dailyCompletions);
  const startDate = useRoadmapStore((s) => s.startDate);
  const setSelectedWeek = useRoadmapStore((s) => s.setSelectedWeek);
  const cycle = useRoadmapStore((s) => s.cycleStatus);

  const currentWeek = useMemo(() => currentWeekFromStart(startDate), [startDate]);
  const summary = useMemo(() => summarizeAll(statuses), [statuses]);
  const streak = useMemo(() => computeStreak(daily), [daily]);
  const longest = useMemo(() => Math.max(computeLongestStreak(daily), streak), [daily, streak]);
  const weeksDone = useMemo(() => weeksCompleted(statuses, currentWeek), [statuses, currentWeek]);
  const focus = useMemo(() => upcomingIncomplete(statuses, 1, 1)[0], [statuses]);
  const milestoneWeek = focus?.weekNumber ?? currentWeek;
  const weekSummary = useMemo(() => summarizeWeek(statuses, milestoneWeek), [statuses, milestoneWeek]);
  const focusStatus = focus ? statuses[focus.id] ?? 'not-started' : 'not-started';
  const todayCount = daily[todayKey()] ?? 0;
  const doneForToday = todayCount >= 1;

  const firstName = user?.firstName ?? 'there';
  const remaining = summary.total - summary.completed;

  const onStart = useCallback(() => {
    if (focus) setSelectedWeek(focus.weekNumber);
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  }, [focus, setSelectedWeek]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
    >
      {/* greeting + at-a-glance stats */}
      <div className="flex flex-col gap-4 border-b border-zinc-800/70 p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100 lg:text-2xl">
            Welcome back, {firstName} <span className="align-middle">👋</span>
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Week <span className="font-medium text-brand-400">{milestoneWeek}</span> of {TOTAL_WEEKS}
            <span className="mx-1.5 text-zinc-700">·</span>
            {summary.completed} of {summary.total} tasks done
            <span className="mx-1.5 text-zinc-700">·</span>
            {remaining} to go
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StatPill icon={Zap} label="Streak" value={`${streak}d`} accent />
          <StatPill icon={Trophy} label="Longest" value={`${longest}d`} />
          <StatPill icon={CalendarCheck} label="Weeks" value={`${weeksDone}`} />
        </div>
      </div>

      {/* next milestone — current-week progress bar */}
      {weekSummary.total > 0 && weekSummary.completed < weekSummary.total && (
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800/70 px-5 py-3 lg:px-6">
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Next Milestone
              </span>
              <span className="text-xs font-medium text-zinc-400">
                {weekSummary.completed}/{weekSummary.total} in Week {milestoneWeek}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-brand-500 transition-all duration-500"
                style={{ width: `${weekSummary.percent}%` }}
              />
            </div>
            <p className="mt-1.5 text-xs text-zinc-500">
              {weekSummary.total - weekSummary.completed} task
              {weekSummary.total - weekSummary.completed === 1 ? '' : 's'} until Week {milestoneWeek} complete
            </p>
          </div>
        </div>
      )}

      {/* today’s focus / continue learning */}
      <div className="p-5 lg:p-6">
        {focus && doneForToday ? (
          <div className="flex items-start gap-3 border-l-2 border-emerald-500 pl-4">
            <div>
              <div className="text-base font-medium text-zinc-100">Great work today! ✓</div>
              <div className="mt-0.5 text-sm text-zinc-500">
                You’ve completed your task for today. Come back tomorrow for the next one.
              </div>
            </div>
          </div>
        ) : focus ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3 border-l-2 border-brand-500 pl-4">
              <div className="pt-0.5">
                <Checkbox
                  status={focusStatus}
                  onCycle={() => cycle(focus.id)}
                  ariaLabel={`Toggle ${focus.title}`}
                />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-500">
                  Today’s focus
                </div>
                <div className="mt-1 text-base font-medium leading-snug text-zinc-100">{focus.title}</div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                  <span>Week {focus.weekNumber}</span>
                  {focus.hours ? (
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> ~{focus.hours}h
                    </span>
                  ) : null}
                  {focus.resources.length > 0 ? (
                    <span>
                      {focus.resources.length} resource{focus.resources.length === 1 ? ‘’ : ‘s’}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            <button
              onClick={onStart}
              className="group inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-brand-400"
            >
              Start
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        ) : (
          <div className="flex items-start gap-3 border-l-2 border-emerald-500 pl-4">
            <div>
              <div className="text-base font-medium text-zinc-100">You’re all caught up 🎉</div>
              <div className="mt-0.5 text-sm text-zinc-500">
                Nothing pending from week {currentWeek} onward. Pick any week below to get ahead.
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}

function StatPill({
  icon: Icon,
  label,
  value,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2">
      <Icon className={accent ? 'h-4 w-4 text-brand-500' : 'h-4 w-4 text-zinc-500'} />
      <div className="leading-none">
        <div className={`text-sm font-bold ${accent ? 'text-brand-400' : 'text-zinc-100'}`}>{value}</div>
        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">{label}</div>
      </div>
    </div>
  );
}
