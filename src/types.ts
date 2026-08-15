export interface ReviewQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string | boolean | string[];
  explanation: string;
  hint: string;
  matchingPairs?: { left: string; right: string }[];
}

export interface InteractiveCheck {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint: string;
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  lessonNumber: string;
  periods: string;
  subtitle: string;
  iconName: string;
  color: string;
  objectives: string[];
  explore: {
    title: string;
    description: string;
    scenario: string;
    imagePrompt?: string;
    interactivePrompt?: string;
    interactiveType?: 'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs';
  };
  coreKnowledge: {
    heading: string;
    summaryPoints: string[];
    formulaBox?: {
      title: string;
      formula: string;
      notes: string[];
    };
    tables?: {
      title: string;
      headers: string[];
      rows: string[][];
    }[];
    steps?: {
      stepNumber: number;
      stepTitle: string;
      description: string;
      example?: string;
    }[];
  }[];
  quickChecks: InteractiveCheck[];
  lessonQuiz: InteractiveCheck[];
}

export interface PracticeExercise {
  id: string;
  lessonId: number;
  level: 1 | 2 | 3; // 1: Nhớ & Hiểu, 2: Áp dụng, 3: Vận dụng
  levelName: string;
  title: string;
  question: string;
  options?: string[];
  correctIndex?: number;
  explanation: string;
  hint: string;
  detailedSolution?: string[];
  tags: string[];
}

export interface RealWorldCase {
  id: string;
  lessonId: number;
  title: string;
  category: 'Đời sống' | 'Y học' | 'Môi trường' | 'Công nghiệp' | 'An toàn';
  icon: string;
  story: string;
  question: string;
  options: string[];
  correctIndex: number;
  scientificExplanation: string;
  challenge: {
    question: string;
    answer: string;
  };
}

export interface TestQuestion {
  id: number;
  lessonId: number;
  topic: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Áp dụng' | 'Vận dụng' | 'Thực tiễn';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UserProgress {
  reviewedCount: number;
  completedLessonIds: number[];
  completedPracticeIds: string[];
  latestTestScore: number | null;
  lastTestScore?: number | null;
  latestTestTotal: number;
  testHistory: { date: string; score: number; total: number; weakTopics: string[] }[];
  selfAssessmentChecks: Record<string, boolean>;
}
