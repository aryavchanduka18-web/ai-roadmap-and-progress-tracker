'use client';

import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { BarChart3, TrendingUp, Flame, CalendarCheck2, Activity } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { dailyCompletionsSeries, phasePercents } from '@/lib/selectors';
import { last30DateKeys } from '@/lib/utils';

export function AnalyticsSection() {
  const daily = useRoadmapStore((s) => s.dailyCompletions);
  const statuses = useRoadmapStore((s) => s.statuses);
  const streak = useRoadmapStore((s) => s.streak);
  const longestStreak = useRoadmapStore((s) => s.longestStreak);

  const dates = useMemo(() => last30DateKeys(), []);
  const lineData = useMemo(() => dailyCompletionsSeries(daily, dates), [daily, dates]);
  const barData = useMemo(() => phasePercents(statuses), [statuses]);

  const totalCompletions = Object.values(daily).reduce((a, b) => a + b.length, 0);
  const activeDays = Object.values(daily).filter((v) => v.length > 0).length;
  const avgPerDay = activeDays === 0 ? 0 : Math.round((totalCompletions / activeDays) * 10) / 10;
  const weeksOnTrack = Math.max(0, Math.floor(longestStreak / 7));
  const hasAnyData = totalCompletions > 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-brand-500" />
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">Analytics</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard
          title="Daily Completions"
          subtitle="Subtopics completed per day · last 30 days"
          icon={TrendingUp}
        >
          {hasAnyData ? (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={lineData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid stroke="#27272a" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" tick={{ fill: '#a1a1aa', fontSize: 10 }} tickFormatter={(d) => d.slice(5)} />
                <YAxis tick={{ fill: '#a1a1aa', fontSize: 10 }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: 8 }}
                  labelStyle={{ color: '#fafafa' }}
                />
                <Line
                  type="monotone"
                  dataKey="completions"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#f97316' }}
                  activeDot={{ r: 4, fill: '#fb923c' }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ChartEmpty />
          )}
        </ChartCard>

        <ChartCard
          title="Completion by Phase"
          subtitle="Percent complete per phase"
          icon={BarChart3}
        >
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid stroke="#27272a" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="phase" tick={{ fill: '#a1a1aa', fontSize: 11 }} />
              <YAxis tick={{ fill: '#a1a1aa', fontSize: 10 }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: 8 }}
                labelStyle={{ color: '#fafafa' }}
                formatter={(v: number) => [`${v}%`, 'Complete']}
              />
              <Bar dataKey="percent" fill="#f97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Tile icon={Flame} label="Current Streak" value={`${streak}`} accent="text-brand-400" />
        <Tile icon={Flame} label="Longest Streak" value={`${longestStreak}`} accent="text-amber-400" />
        <Tile icon={CalendarCheck2} label="Weeks On Track" value={`${weeksOnTrack}`} accent="text-emerald-400" />
        <Tile icon={Activity} label="Avg / Active Day" value={`${avgPerDay}`} accent="text-zinc-200" />
      </div>
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  icon: Icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-brand-400" />
        <div>
          <div className="text-sm font-medium text-zinc-100">{title}</div>
          <div className="text-[11px] text-zinc-500">{subtitle}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function ChartEmpty() {
  return (
    <div className="flex h-[220px] flex-col items-center justify-center text-center">
      <TrendingUp className="mb-2 h-7 w-7 text-zinc-600" />
      <div className="text-sm font-medium text-zinc-300">Start tracking to see analytics</div>
      <div className="mt-1 max-w-xs text-xs text-zinc-500">
        Click a checkbox on any subtopic. Your daily completions will plot here over 30 days.
      </div>
    </div>
  );
}

function Tile({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className={`mt-1 text-xl font-semibold tracking-tight ${accent}`}>{value}</div>
    </div>
  );
}
