import { UserProgress } from '../types';

const STORAGE_KEY = 'hoa_hoc_10_chuyen_de_1_progress';

const defaultProgress: UserProgress = {
  reviewedCount: 0,
  completedLessonIds: [],
  completedPracticeIds: [],
  latestTestScore: null,
  lastTestScore: null,
  latestTestTotal: 10,
  testHistory: [],
  selfAssessmentChecks: {}
};

export function loadProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultProgress;
    const parsed = JSON.parse(data);
    return { 
      ...defaultProgress, 
      ...parsed,
      lastTestScore: parsed.latestTestScore ?? parsed.lastTestScore ?? null
    };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    progress.lastTestScore = progress.latestTestScore;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function markLessonCompleted(lessonId: number): UserProgress {
  const current = loadProgress();
  if (!current.completedLessonIds.includes(lessonId)) {
    current.completedLessonIds.push(lessonId);
    saveProgress(current);
  }
  return current;
}
export const markLessonComplete = markLessonCompleted;

export function markPracticeCompleted(exerciseId: string): UserProgress {
  const current = loadProgress();
  if (!current.completedPracticeIds.includes(exerciseId)) {
    current.completedPracticeIds.push(exerciseId);
    saveProgress(current);
  }
  return current;
}
export const markPracticeComplete = markPracticeCompleted;

export function recordTestResult(score: number, total: number, weakTopics: string[]): UserProgress {
  const current = loadProgress();
  current.latestTestScore = score;
  current.lastTestScore = score;
  current.latestTestTotal = total;
  current.testHistory.unshift({
    date: new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
    score,
    total,
    weakTopics
  });
  if (current.testHistory.length > 10) current.testHistory.pop();
  saveProgress(current);
  return current;
}
export const saveTestResult = recordTestResult;

export function resetProgress(): UserProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  return defaultProgress;
}

export function toggleSelfAssessment(key: string, checked: boolean): UserProgress {
  const current = loadProgress();
  current.selfAssessmentChecks[key] = checked;
  saveProgress(current);
  return current;
}
