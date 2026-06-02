'use client';

import { WeeklyProgressCard } from './WeeklyProgressCard';
import { UpcomingTopicsCard } from './UpcomingTopicsCard';
import { QuickActionsCard } from './QuickActionsCard';

interface Props {
  onResetClick: () => void;
}

export function RightPanel({ onResetClick }: Props) {
  return (
    <div className="space-y-4 lg:sticky lg:top-24">
      <WeeklyProgressCard />
      <UpcomingTopicsCard />
      <QuickActionsCard onResetClick={onResetClick} />
    </div>
  );
}
