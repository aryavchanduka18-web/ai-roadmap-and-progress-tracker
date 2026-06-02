'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Target, ListTodo, CircleCheck, Hourglass, CircleDashed } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { summarizeAll } from '@/lib/selectors';
import { CircularProgress } from './CircularProgress';

interface CardSpec {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  ring?: number;
}

export function StatsCards() {
  const statuses = useRoadmapStore((s) => s.statuses);
  const summary = useMemo(() => summarizeAll(statuses), [statuses]);

  const cards: CardSpec[] = [
    { label: 'Overall Progress', value: `${summary.percent}%`, icon: Target, accent: 'text-brand-400', ring: summary.percent },
    { label: 'Total Subtopics', value: `${summary.total}`, icon: ListTodo, accent: 'text-zinc-300' },
    { label: 'Completed', value: `${summary.completed}`, icon: CircleCheck, accent: 'text-emerald-400' },
    { label: 'Remaining', value: `${summary.total - summary.completed}`, icon: CircleDashed, accent: 'text-zinc-300' },
    { label: 'In Progress', value: `${summary.inProgress}`, icon: Hourglass, accent: 'text-amber-400' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
    >
      {cards.map((c) => (
        <motion.div
          key={c.label}
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
          className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition hover:border-zinc-700"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500">{c.label}</div>
              <div className={`text-2xl font-bold tracking-tight ${c.accent}`}>{c.value}</div>
            </div>
            {c.ring !== undefined ? (
              <CircularProgress value={c.ring} size={44} stroke={5} showLabel={false} />
            ) : (
              <c.icon className={`h-5 w-5 ${c.accent}`} />
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
