import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Lightbulb, 
  Atom, 
  Radiation, 
  Zap, 
  Compass, 
  Layers, 
  FlaskConical,
  XCircle
} from 'lucide-react';
import { lessonsData } from '../data/lessonsData';
import { Lesson, UserProgress } from '../types';

interface LessonViewerProps {
  selectedLessonId: number;
  onSelectLesson: (id: number) => void;
  onCompleteLesson: (id: number) => void;
  onOpenSimulation: (type?: 'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs') => void;
  progress: UserProgress;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  selectedLessonId,
  onSelectLesson,
  onCompleteLesson,
  onOpenSimulation,
  progress
}) => {
  const currentLesson = lessonsData.find(l => l.id === selectedLessonId) || lessonsData[0];
  
  // Interactive states for "Thử ngay" quick checks
  const [quickCheckAnswers, setQuickCheckAnswers] = useState<Record<string, number>>({});
  const [quickCheckHints, setQuickCheckHints] = useState<Record<string, boolean>>({});

  // Interactive states for "Kiểm tra cuối bài" (5 questions)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleQuickCheck = (qId: string, optIdx: number) => {
    setQuickCheckAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleQuizSelect = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    onCompleteLesson(currentLesson.id);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = currentLesson.lessonQuiz.reduce((acc, q) => {
    return quizAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const isCompleted = progress.completedLessonIds.includes(currentLesson.id);

  const getLessonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return Atom;
      case 'Radiation': return Radiation;
      case 'Zap': return Zap;
      case 'Compass': return Compass;
      default: return BookOpen;
    }
  };

  const LessonIcon = getLessonIcon(currentLesson.iconName);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* 4 Lessons Switcher Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 p-1.5 bg-slate-100 rounded-2xl">
        {lessonsData.map(lesson => {
          const Icon = getLessonIcon(lesson.iconName);
          const isSelected = lesson.id === currentLesson.id;
          const isDone = progress.completedLessonIds.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => {
                onSelectLesson(lesson.id);
                setQuizAnswers({});
                setQuizSubmitted(false);
                setQuickCheckAnswers({});
              }}
              className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all ${
                isSelected
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/80 font-bold'
                  : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 font-medium'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs truncate flex items-center gap-1">
                  <span>{lesson.lessonNumber}</span>
                  {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                </div>
                <div className="text-[11px] text-slate-400 truncate hidden sm:block">
                  {lesson.title.split('&')[0]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              {currentLesson.lessonNumber}
            </span>
            <span className="text-xs text-slate-500 font-medium">{currentLesson.periods}</span>
          </div>

          {isCompleted ? (
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-4 h-4" /> Đã hoàn thành bài học
            </span>
          ) : (
            <span className="text-xs text-slate-400 font-medium">Đang học</span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {currentLesson.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {currentLesson.subtitle}
        </p>

        {/* 1. MỤC TIÊU NHỎ */}
        <div className="p-4 bg-indigo-50/70 rounded-2xl border border-indigo-100 space-y-2 mt-4">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
            <Target className="w-4 h-4 text-indigo-600" />
            1. Mục tiêu bài học (Học xong em sẽ làm được gì?)
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-indigo-950">
            {currentLesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0"></span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. KHÁM PHÁ (EXPLORE) */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            2. Khám phá & Gợi mở tư duy
          </div>
          {currentLesson.explore.interactiveType && (
            <button
              onClick={() => onOpenSimulation(currentLesson.explore.interactiveType)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition-all"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              Mở mô phỏng 3D tương tác
            </button>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-amber-300">
          {currentLesson.explore.title}
        </h3>

        <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-xs sm:text-sm leading-relaxed text-indigo-100 italic">
          "{currentLesson.explore.scenario}"
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {currentLesson.explore.description}
        </p>
      </div>

      {/* 3. KIẾN THỨC CỐT LÕI (CORE KNOWLEDGE) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-slate-800 font-extrabold text-lg sm:text-xl border-b border-slate-200 pb-3">
          <Layers className="w-5 h-5 text-indigo-600" />
          3. Kiến thức cốt lõi (Tóm tắt trọng tâm SGK)
        </div>

        {currentLesson.coreKnowledge.map((section, sIdx) => (
          <div key={sIdx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-indigo-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              {section.heading}
            </h3>

            {/* Summary bullet points */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {section.summaryPoints.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5">
                  <span className="text-indigo-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Formula Box if available */}
            {section.formulaBox && (
              <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {section.formulaBox.title}
                </div>
                <div className="font-mono text-sm sm:text-base font-bold text-white bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  {section.formulaBox.formula}
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {section.formulaBox.notes.map((n, idx) => (
                    <li key={idx}>✓ {n}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tables if available */}
            {section.tables && section.tables.map((table, tIdx) => (
              <div key={tIdx} className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block">{table.title}</span>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                      <tr>
                        {table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-indigo-50/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-slate-700 font-medium whitespace-pre-line">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* Steps if available */}
            {section.steps && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-700 block">Ví dụ minh họa quy trình từng bước:</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.steps.map(step => (
                    <div key={step.stepNumber} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 text-xs sm:text-sm">
                      <span className="font-bold text-indigo-700 block">{step.stepTitle}</span>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 4. THỬ NGAY (QUICK INTERACTIVE CHECKS) */}
      <div className="bg-amber-50/70 rounded-3xl border border-amber-200 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-amber-900 font-extrabold text-base sm:text-lg">
          <Lightbulb className="w-5 h-5 text-amber-600" />
          4. Thử ngay! (Kiểm tra nhanh mức độ hiểu bài)
        </div>
        <p className="text-xs sm:text-sm text-amber-900/80">
          Hãy tương tác với các câu hỏi gợi mở dưới đây để củng cố ngay kiến thức vừa đọc:
        </p>

        <div className="space-y-5">
          {currentLesson.quickChecks.map((qc, qIdx) => {
            const userAns = quickCheckAnswers[qc.id];
            const isAnswered = userAns !== undefined;

            return (
              <div key={qc.id} className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-2xs space-y-4">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                    {qc.question}
                  </h4>
                </div>

                {/* Options */}
                <div className="space-y-2 pl-7">
                  {qc.options.map((opt, oIdx) => {
                    const isSelected = userAns === oIdx;
                    const isCorrect = oIdx === qc.correctIndex;

                    let btnClass = 'border-slate-200 hover:border-amber-400 bg-slate-50/50 text-slate-700';
                    if (isAnswered) {
                      if (isSelected && isCorrect) {
                        btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (isSelected && !isCorrect) {
                        btnClass = 'border-rose-500 bg-rose-50 text-rose-900';
                      } else if (isCorrect) {
                        btnClass = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-semibold';
                      } else {
                        btnClass = 'opacity-40 border-slate-200';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isAnswered}
                        onClick={() => handleQuickCheck(qc.id, oIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {isAnswered && (
                  <div className={`p-3.5 rounded-xl border text-xs sm:text-sm pl-4 ml-7 ${
                    userAns === qc.correctIndex ? 'bg-emerald-50 text-emerald-950 border-emerald-200' : 'bg-rose-50 text-rose-950 border-rose-200'
                  }`}>
                    <strong>{userAns === qc.correctIndex ? '🎉 Chính xác!' : '💡 Cần lưu ý:'}</strong> {qc.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. KIỂM TRA NHANH CUỐI BÀI (5 QUESTIONS) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-base sm:text-lg">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              5. Tự kiểm tra 5 câu cuối bài
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Tự đánh giá toàn diện để xác nhận đã nắm vững nội dung bài học
            </p>
          </div>

          {quizSubmitted && (
            <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-4 py-1.5 rounded-xl text-xs font-bold text-indigo-800">
              <span>Điểm của bạn:</span>
              <span className="text-sm font-black text-indigo-600">{quizScore} / 5 câu đúng</span>
            </div>
          )}
        </div>

        {/* 5 Questions */}
        <div className="space-y-6">
          {currentLesson.lessonQuiz.map((q, qIdx) => {
            const userAns = quizAnswers[q.id];
            const isCorrect = userAns === q.correctIndex;

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                    {q.question}
                  </h4>
                </div>

                <div className="space-y-2 pl-8">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAns === oIdx;
                    const isCorrectOpt = oIdx === q.correctIndex;

                    let btnClass = 'border-slate-200 bg-white hover:border-indigo-400 text-slate-700';
                    if (isSelected && !quizSubmitted) {
                      btnClass = 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold';
                    } else if (quizSubmitted) {
                      if (isSelected && isCorrectOpt) {
                        btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                      } else if (isSelected && !isCorrectOpt) {
                        btnClass = 'border-rose-500 bg-rose-50 text-rose-900';
                      } else if (isCorrectOpt) {
                        btnClass = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-semibold';
                      } else {
                        btnClass = 'opacity-40 border-slate-200 bg-white';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={quizSubmitted}
                        onClick={() => handleQuizSelect(q.id, oIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {quizSubmitted && isSelected && !isCorrectOpt && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <div className={`p-3 rounded-xl border text-xs sm:text-sm ml-8 ${
                    isCorrect ? 'bg-emerald-50 text-emerald-950 border-emerald-200' : 'bg-rose-50 text-rose-950 border-rose-200'
                  }`}>
                    <strong>{isCorrect ? '✓ Đúng!' : '✗ Chưa đúng.'}</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Quiz button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
          {!quizSubmitted ? (
            <button
              onClick={handleQuizSubmit}
              disabled={Object.keys(quizAnswers).length < currentLesson.lessonQuiz.length}
              className={`px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all ${
                Object.keys(quizAnswers).length === currentLesson.lessonQuiz.length
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Nộp bài tự kiểm tra ({Object.keys(quizAnswers).length}/{currentLesson.lessonQuiz.length})
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Làm lại
              </button>
              <span className="text-xs text-emerald-700 font-bold">
                ✓ Đã cập nhật vào tiến độ học tập!
              </span>
            </div>
          )}

          {/* Next / Previous Lesson Buttons */}
          <div className="flex items-center gap-2">
            {currentLesson.id > 1 && (
              <button
                onClick={() => {
                  onSelectLesson(currentLesson.id - 1);
                  setQuizAnswers({});
                  setQuizSubmitted(false);
                  setQuickCheckAnswers({});
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Bài trước
              </button>
            )}

            {currentLesson.id < 4 && (
              <button
                onClick={() => {
                  onSelectLesson(currentLesson.id + 1);
                  setQuizAnswers({});
                  setQuizSubmitted(false);
                  setQuickCheckAnswers({});
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shadow-sm"
              >
                Bài tiếp theo <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
