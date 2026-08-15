import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  AlertTriangle, 
  BookOpen, 
  Sparkles,
  BarChart3
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { quickTestQuestions } from '../data/quickTestData';
import { UserProgress } from '../types';

interface QuickTestProps {
  onSaveResult: (score: number, total: number, weakTopics: string[]) => void;
  onGoToLesson: (lessonId: number) => void;
  progress: UserProgress;
}

export const QuickTestSection: React.FC<QuickTestProps> = ({
  onSaveResult,
  onGoToLesson,
  progress
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Timer countdown
  useEffect(() => {
    let timer: any;
    if (isTimerRunning && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, isSubmitted, timeLeft]);

  const handleSelect = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Calculate score
    const score = quickTestQuestions.reduce((acc, q) => {
      return selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
    }, 0);

    // Find weak topics
    const weakTopicMap: Record<string, { topic: string; lessonId: number; wrongCount: number }> = {};
    quickTestQuestions.forEach(q => {
      if (selectedAnswers[q.id] !== q.correctIndex) {
        if (!weakTopicMap[q.topic]) {
          weakTopicMap[q.topic] = { topic: q.topic, lessonId: q.lessonId, wrongCount: 1 };
        } else {
          weakTopicMap[q.topic].wrongCount++;
        }
      }
    });

    const weakTopicsList = Object.keys(weakTopicMap);
    onSaveResult(score, quickTestQuestions.length, weakTopicsList);

    if (score >= 8) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setTimeLeft(900);
    setIsTimerRunning(true);
  };

  const correctCount = quickTestQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Identify weak areas
  const weakLessonMap: Record<number, { lessonId: number; title: string; wrongQuestions: typeof quickTestQuestions }> = {};
  if (isSubmitted) {
    quickTestQuestions.forEach(q => {
      if (selectedAnswers[q.id] !== q.correctIndex) {
        if (!weakLessonMap[q.lessonId]) {
          const lessonTitles: Record<number, string> = {
            1: 'Bài 1: Liên Kết Hóa Học & VSEPR',
            2: 'Bài 2: Phản Ứng Hạt Nhân & Phóng Xạ',
            3: 'Bài 3: Năng Lượng Hoạt Hóa Arrhenius',
            4: 'Bài 4: Entropy & Năng Lượng Tự Do Gibbs'
          };
          weakLessonMap[q.lessonId] = {
            lessonId: q.lessonId,
            title: lessonTitles[q.lessonId] || `Bài ${q.lessonId}`,
            wrongQuestions: []
          };
        }
        weakLessonMap[q.lessonId].wrongQuestions.push(q);
      }
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 font-medium text-xs md:text-sm mb-3">
          <Clock className="w-4 h-4" />
          Phần 5: Kiểm Tra Nhanh Chuyên Đề 1
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Đánh Giá Năng Lực Chuẩn Hóa Chuyên Đề 1
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Bài kiểm tra 10 câu tổng hợp từ Nhận biết, Thông hiểu đến Vận dụng thực tiễn với chẩn đoán điểm yếu tự động.
        </p>
      </div>

      {/* Floating Status, Timer & Quick Navigator Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            <span>Tiến trình làm bài:</span>
            <span className="text-rose-600 font-bold">
              {Object.keys(selectedAnswers).length} / {quickTestQuestions.length} câu
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
              <Clock className="w-4 h-4 text-rose-600" />
              <span>Thời gian: {formatTime(timeLeft)}</span>
            </div>

            {!isSubmitted && (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                Nộp bài thi
              </button>
            )}
          </div>
        </div>

        {/* Quick jump question numbers */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-500 mr-1">Bảng câu hỏi:</span>
          {quickTestQuestions.map((q, qIndex) => {
            const hasAnswered = selectedAnswers[q.id] !== undefined;
            const isCorrect = isSubmitted && selectedAnswers[q.id] === q.correctIndex;
            const isIncorrect = isSubmitted && hasAnswered && selectedAnswers[q.id] !== q.correctIndex;

            let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200';
            if (isSubmitted) {
              if (isCorrect) badgeStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
              else if (isIncorrect) badgeStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
              else badgeStyle = 'bg-slate-200 text-slate-400 border-slate-300';
            } else if (hasAnswered) {
              badgeStyle = 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
            }

            return (
              <a
                key={q.id}
                href={`#question-${q.id}`}
                className={`w-7 h-7 rounded-lg border text-xs flex items-center justify-center transition-all hover:scale-105 ${badgeStyle}`}
              >
                {qIndex + 1}
              </a>
            );
          })}
        </div>
      </div>

      {/* Evaluation Results Card if Submitted */}
      {isSubmitted && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-sm ${
                correctCount >= 8 ? 'bg-emerald-500' : correctCount >= 5 ? 'bg-amber-500' : 'bg-rose-500'
              }`}>
                {correctCount} / 10
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {correctCount >= 8 ? 'Xuất Sắc! Bạn Đã Nắm Rất Vững Kiến Thức' : correctCount >= 5 ? 'Khá Tốt! Cần Củng Cố Thêm Một Vài Điểm' : 'Cần Ôn Lại Nội Dung Chuyên Đề 1'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Số câu đúng: <strong className="text-emerald-600">{correctCount}</strong> | Số câu chưa đúng: <strong className="text-rose-600">{10 - correctCount}</strong>
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Làm lại bài kiểm tra
            </button>
          </div>

          {/* Weak Topics Diagnostic & Direct Navigation Buttons */}
          {Object.keys(weakLessonMap).length > 0 ? (
            <div className="p-5 bg-rose-50/70 rounded-2xl border border-rose-200 space-y-4">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                Chẩn đoán nội dung bạn cần ôn luyện thêm:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.values(weakLessonMap).map(wl => (
                  <div key={wl.lessonId} className="bg-white p-4 rounded-xl border border-rose-200 flex items-center justify-between gap-3 shadow-2xs">
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{wl.title}</h4>
                      <p className="text-[11px] text-rose-600 mt-0.5">
                        Có {wl.wrongQuestions.length} câu hỏi chưa chính xác
                      </p>
                    </div>

                    <button
                      onClick={() => onGoToLesson(wl.lessonId)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shrink-0 flex items-center gap-1 shadow-2xs"
                    >
                      Học lại phần này <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-950 text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              Xin chúc mừng! Bạn đã trả lời đúng 100% câu hỏi của Chuyên đề 1 mà không có phần kiến thức yếu nào.
            </div>
          )}
        </div>
      )}

      {/* 10 Test Questions */}
      <div className="space-y-6">
        {quickTestQuestions.map((q, idx) => {
          const userAns = selectedAnswers[q.id];
          const isCorrect = userAns === q.correctIndex;

          return (
            <div 
              key={q.id}
              id={`question-${q.id}`}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4 scroll-mt-36"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {q.topic}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Bài {q.lessonId} • Mức {q.level}
                  </span>
                </div>

                {isSubmitted && (
                  <div>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" /> Sai
                      </span>
                    )}
                  </div>
                )}
              </div>

              <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                {q.question}
              </h4>

              {/* Options */}
              <div className="space-y-2 pt-1">
                {q.options.map((opt, oIdx) => {
                  const isSelected = userAns === oIdx;
                  const isCorrectOpt = oIdx === q.correctIndex;

                  let btnClass = 'border-slate-200 bg-slate-50/70 hover:border-rose-300 hover:bg-rose-50/30 text-slate-700';
                  if (isSelected && !isSubmitted) {
                    btnClass = 'border-rose-600 bg-rose-50 text-rose-950 font-bold ring-2 ring-rose-500/20';
                  } else if (isSubmitted) {
                    if (isSelected && isCorrectOpt) {
                      btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                    } else if (isSelected && !isCorrectOpt) {
                      btnClass = 'border-rose-500 bg-rose-50 text-rose-950 font-medium ring-2 ring-rose-500/20';
                    } else if (isCorrectOpt) {
                      btnClass = 'border-emerald-400 bg-emerald-50/70 text-emerald-900 font-semibold';
                    } else {
                      btnClass = 'opacity-40 border-slate-200 bg-white';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelect(q.id, oIdx)}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${btnClass}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border ${
                          isSelected ? 'bg-rose-600 text-white border-rose-600' : 'bg-white border-slate-300 text-slate-700'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>

                      {isSubmitted && (
                        <div className="shrink-0 mt-0.5">
                          {isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                          {isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-rose-600" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Solution feedback when submitted */}
              {isSubmitted && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                  isCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}>
                  <strong>Giải thích:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
