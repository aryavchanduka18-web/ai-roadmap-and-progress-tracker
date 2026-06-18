export type Status = 'not-started' | 'in-progress' | 'completed';
export type Priority = 'must-know' | 'nice-to-have' | 'skip' | 'revisit';

export type ResourceType = 'youtube' | 'article' | 'doc' | 'book' | 'course';

export interface Resource {
  type: ResourceType;
  label: string;
  url?: string;
}

export interface Subtopic {
  id: string;
  title: string;
  hours?: number;
  priority: Priority;
  weekNumber: number; // 1-40
  resources: Resource[];
}

export interface Topic {
  id: string;
  title: string;
  subtopics: Subtopic[];
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  description?: string;
  weekRange: string;
  topics: Topic[];
}

export type StatusMap = Record<string, Status>;

export interface PersistedState {
  schemaVersion: number;
  statuses: StatusMap;
  lastCompletionDate: string | null; // YYYY-MM-DD
  streak: number;
  longestStreak: number;
  sidebarCollapsed: boolean;
  dailyCompletions: Record<string, string[]>; // YYYY-MM-DD -> completed subtopic IDs
  startDate: string; // YYYY-MM-DD
}

export type StatusFilter = 'all' | 'completed' | 'in-progress' | 'not-started';
export type ViewMode = 'roadmap' | 'week';
