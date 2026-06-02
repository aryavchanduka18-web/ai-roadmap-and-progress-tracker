'use client';

import { useCallback } from 'react';
import { CheckCheck, Eraser, Download, RotateCcw, Zap } from 'lucide-react';
import { useRoadmapStore } from '@/lib/store';
import { subtopicsForWeek } from '@/lib/selectors';
import { downloadJson, todayKey } from '@/lib/utils';
import { Button } from './ui/Button';

interface Props {
  onResetClick: () => void;
}

export function QuickActionsCard({ onResetClick }: Props) {
  const selectedWeek = useRoadmapStore((s) => s.selectedWeek);
  const setMany = useRoadmapStore((s) => s.setMany);

  const completeWeek = useCallback(() => {
    const ids = subtopicsForWeek(selectedWeek).map((s) => s.subtopic.id);
    setMany(ids, 'completed');
  }, [selectedWeek, setMany]);

  const clearWeek = useCallback(() => {
    const ids = subtopicsForWeek(selectedWeek).map((s) => s.subtopic.id);
    setMany(ids, 'not-started');
  }, [selectedWeek, setMany]);

  const exportProgress = useCallback(() => {
    const state = useRoadmapStore.getState();
    const payload = {
      schemaVersion: state.schemaVersion,
      statuses: state.statuses,
      streak: state.streak,
      longestStreak: state.longestStreak,
      lastCompletionDate: state.lastCompletionDate,
      dailyCompletions: state.dailyCompletions,
      startDate: state.startDate,
      exportedAt: new Date().toISOString(),
    };
    downloadJson(`ai-roadmap-progress-${todayKey()}.json`, payload);
  }, []);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-zinc-100">
        <Zap className="h-4 w-4 text-brand-500" />
        Quick Actions
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="success" onClick={completeWeek} className="w-full">
          <CheckCheck className="h-3.5 w-3.5" />
          Complete Week
        </Button>
        <Button variant="secondary" onClick={clearWeek} className="w-full">
          <Eraser className="h-3.5 w-3.5" />
          Clear Week
        </Button>
        <Button variant="secondary" onClick={exportProgress} className="col-span-2 w-full">
          <Download className="h-3.5 w-3.5" />
          Export Progress (.json)
        </Button>
        <Button variant="danger" onClick={onResetClick} className="col-span-2 w-full">
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Progress
        </Button>
      </div>
    </div>
  );
}
