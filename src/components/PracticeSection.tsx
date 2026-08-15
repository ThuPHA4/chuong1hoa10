import React, { useState } from 'react';
import { 
  Dumbbell, 
  Filter, 
  Lightbulb, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { practiceExercises } from '../data/practiceData';
import { UserProgress } from '../types';

interface PracticeSectionProps {
  onCompleteExercise: (exerciseId: string) => void;
  progress: UserProgress;
  onGoToLesson: (lessonId: number) => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  onCompleteExercise,
  progress,
  onGoToLesson
}) => {
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>('all');
  
  // Exercise states
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<string, boolean>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [showDetailedSolution, setShowDetailedSolution] = useState<Record<string, boolean>>({});

  const filteredExercises = practiceExercises.filter(ex => {
    if (selectedLevel !== 'all' && ex.level !== selectedLevel) return false;
    if (selectedLesson !== 'all' && ex.lessonId !== selectedLesson) return false;
    return true;
  });

  const handleSelectOption = (exId: string, optIdx: number) => {
    if (checkedStatus[exId]) return;
    setSelectedAnswers(prev => ({ ...prev, [exId]: optIdx }));
  };

  const handleCheckAnswer = (exId: string) => {
    setCheckedStatus(prev => ({ ...prev, [exId]: true }));
    onCompleteExercise(exId);
  };

  const handleResetExercise = (exId: string) => {
    setSelectedAnswers(prev => {
      const next = { ...prev };
      delete next[exId];
      return next;
    });
    setCheckedStatus(prev => {
      const next = { ...prev };
      delete next[exId];
      return next;
    });
    setShowHints(prev => {
      const next = { ...prev };
      delete next[exId];
      return next;
    });
    setShowDetailedSolution(prev => {
      const next = { ...prev };
      delete next[exId];
      return next;
    });
  };

  const completedInFiltered = filteredExercises.filter(e => progress.completedPracticeIds.includes(e.id)).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-medium text-xs md:text-sm mb-3">
          <Dumbbell className="w-4 h-4" />
          Phần 3: Ngân Hàng Luyện Tập Phân Hóa
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Luyện Tập Theo 3 Mức Độ Nhận Thức
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Rèn luyện từ khái niệm cơ bản (Mức 1), áp dụng công thức (Mức 2) đến suy luận vận dụng giải quyết bài toán phức hợp (Mức 3).
        </p>
      </div>

      {/* Filter Ribbon */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Level filter buttons */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Phân loại mức độ:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Tất cả mức độ' },
                { id: 1, label: 'Mức 1: Nhớ & Hiểu' },
                { id: 2, label: 'Mức 2: Áp dụng' },
                { id: 3, label: 'Mức 3: Vận dụng' }
              ].map(lvl => {
                const isSelected = selectedLevel === lvl.id;
                return (
                  <button
                    key={String(lvl.id)}
                    onClick={() => setSelectedLevel(lvl.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                        : 'bg-slate-100/80 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {lvl.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lesson filter buttons */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Lọc theo bài học:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Tất cả bài' },
                { id: 1, label: 'Bài 1: VSEPR' },
                { id: 2, label: 'Bài 2: Hạt nhân' },
                { id: 3, label: 'Bài 3: Arrhenius' },
                { id: 4, label: 'Bài 4: Gibbs' }
              ].map(ls => {
                const isSelected = selectedLesson === ls.id;
                return (
                  <button
                    key={String(ls.id)}
                    onClick={() => setSelectedLesson(ls.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm ring-2 ring-indigo-500/20'
                        : 'bg-slate-100/80 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {ls.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Đang hiển thị: <strong>{filteredExercises.length} bài tập</strong></span>
          <span>Đã hoàn thành: <strong>{completedInFiltered} / {filteredExercises.length} bài</strong></span>
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-6">
        {filteredExercises.map((ex, idx) => {
          const userAns = selectedAnswers[ex.id];
          const isChecked = checkedStatus[ex.id];
          const isCorrect = userAns !== undefined && userAns === ex.correctIndex;
          const isDone = progress.completedPracticeIds.includes(ex.id);

          const getLevelBadge = (level: number) => {
            switch (level) {
              case 1: return 'bg-blue-50 text-blue-700 border-blue-200';
              case 2: return 'bg-amber-50 text-amber-700 border-amber-200';
              case 3: return 'bg-rose-50 text-rose-700 border-rose-200';
              default: return 'bg-slate-50 text-slate-700';
            }
          };

          return (
            <div 
              key={ex.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5"
            >
              {/* Exercise Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getLevelBadge(ex.level)}`}>
                    {ex.levelName}
                  </span>
                  <button
                    onClick={() => onGoToLesson(ex.lessonId)}
                    className="text-xs font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1"
                  >
                    Bài {ex.lessonId} <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {isDone && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" /> Đã làm
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Question */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {idx + 1}. {ex.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  {ex.question}
                </p>
              </div>

              {/* Options */}
              {ex.options && (
                <div className="space-y-2.5 pt-1">
                  {ex.options.map((opt, oIdx) => {
                    const isSelected = userAns === oIdx;
                    const isCorrectOpt = oIdx === ex.correctIndex;

                    let btnClass = 'border-slate-200 bg-slate-50/50 hover:border-slate-300 text-slate-700';
                    if (isSelected && !isChecked) {
                      btnClass = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold';
                    } else if (isChecked) {
                      if (isSelected && isCorrectOpt) {
                        btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                      } else if (isSelected && !isCorrectOpt) {
                        btnClass = 'border-rose-500 bg-rose-50 text-rose-950';
                      } else if (isCorrectOpt) {
                        btnClass = 'border-emerald-400 bg-emerald-50/70 text-emerald-900 font-semibold';
                      } else {
                        btnClass = 'opacity-40 border-slate-200 bg-white';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isChecked}
                        onClick={() => handleSelectOption(ex.id, oIdx)}
                        className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${btnClass}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </div>

                        {isChecked && (
                          <div className="shrink-0 mt-0.5">
                            {isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                            {isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-rose-600" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Hint Box (Collapsible) */}
              <div>
                {!showHints[ex.id] ? (
                  <button
                    onClick={() => setShowHints(prev => ({ ...prev, [ex.id]: true }))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 transition-all"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    💡 Xem gợi ý
                  </button>
                ) : (
                  <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold mb-0.5">Gợi ý phương pháp:</strong>
                      {ex.hint}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                {!isChecked ? (
                  <button
                    onClick={() => handleCheckAnswer(ex.id)}
                    disabled={userAns === undefined}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all ${
                      userAns !== undefined
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Kiểm tra đáp án
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleResetExercise(ex.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Làm lại
                    </button>

                    <button
                      onClick={() => setShowDetailedSolution(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                      className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                    >
                      {showDetailedSolution[ex.id] ? 'Ẩn lời giải chi tiết' : 'Xem lời giải chi tiết từng bước'}
                      {showDetailedSolution[ex.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {ex.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feedback and Detailed Solution Box */}
              {isChecked && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-3 ${
                  isCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}>
                  <div className="flex items-center gap-2 font-bold">
                    {isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Tuyệt vời! Đáp án hoàn toàn chính xác.
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Bạn chọn chưa đúng. Hãy xem phân tích bên dưới:
                      </span>
                    )}
                  </div>

                  <p className="leading-relaxed">
                    <strong>Giải thích:</strong> {ex.explanation}
                  </p>

                  {/* Step-by-step solution */}
                  {showDetailedSolution[ex.id] && ex.detailedSolution && (
                    <div className="pt-3 border-t border-slate-200/80 space-y-2 bg-white/70 p-3.5 rounded-xl">
                      <strong className="block text-slate-800 font-bold">Các bước giải chi tiết:</strong>
                      <ol className="list-decimal list-inside space-y-1 text-slate-700 font-mono text-xs">
                        {ex.detailedSolution.map((step, sIdx) => (
                          <li key={sIdx} className="leading-relaxed whitespace-pre-wrap">{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
