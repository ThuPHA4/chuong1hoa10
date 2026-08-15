import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Award,
  ChevronRight
} from 'lucide-react';
import { reviewQuestions } from '../data/reviewData';
import { UserProgress } from '../types';

interface OldKnowledgeReviewProps {
  onFinishReview: () => void;
  onGoToLessons: () => void;
  progress: UserProgress;
}

export const OldKnowledgeReview: React.FC<OldKnowledgeReviewProps> = ({ 
  onFinishReview, 
  onGoToLessons 
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, any>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const curQ = reviewQuestions[currentIdx];
  const totalQ = reviewQuestions.length;

  const handleSelect = (ans: any) => {
    if (selectedAnswers[curQ.id] !== undefined) return; // already answered
    setSelectedAnswers(prev => ({ ...prev, [curQ.id]: ans }));
    setShowExplanation(prev => ({ ...prev, [curQ.id]: true }));
  };

  const handleNext = () => {
    if (currentIdx < totalQ - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
      onFinishReview();
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setShowHint({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Score calculation
  const correctCount = reviewQuestions.reduce((acc, q) => {
    const userAns = selectedAnswers[q.id];
    if (userAns === undefined) return acc;
    if (userAns === q.correctAnswer) return acc + 1;
    return acc;
  }, 0);

  // Readiness Meter
  const getReadiness = () => {
    const ratio = correctCount / totalQ;
    if (ratio >= 0.8) {
      return {
        level: '🟢 Sẵn sàng xuất sắc',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        message: 'Tuyệt vời! Bạn có nền tảng Hóa học rất vững vàng để tiếp thu toàn diện các kiến thức Chuyên đề 1.',
        color: 'emerald'
      };
    } else if (ratio >= 0.5) {
      return {
        level: '🟡 Cần ôn lại một chút',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
        message: 'Khá tốt! Bạn đã nhớ hầu hết kiến thức nền. Hãy đọc kĩ các giải thích bên dưới trước khi vào bài mới nhé.',
        color: 'amber'
      };
    } else {
      return {
        level: '🔴 Nên ôn lại kiến thức nền',
        badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
        message: 'Bạn nên xem lại tóm tắt giải thích các câu hỏi trên để chuẩn bị tâm lý học tập nhẹ nhàng, hiệu quả nhất.',
        color: 'rose'
      };
    }
  };

  const readiness = getReadiness();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-xs md:text-sm mb-3">
          <HelpCircle className="w-4 h-4" />
          Phần 1: Ôn Kiến Thức Cũ • Bạn Còn Nhớ?
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Củng Cố Kiến Thức Nền Tảng Trước Khi Học
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Khởi động nhẹ nhàng với {totalQ} câu hỏi tương tác để kiểm tra mức độ sẵn sàng chinh phục Chuyên đề 1.
        </p>
      </div>

      {!isCompleted ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
          
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Câu hỏi {currentIdx + 1} / {totalQ}</span>
              <span>Đã trả lời: {Object.keys(selectedAnswers).length} / {totalQ}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {curQ.type === 'true-false' ? 'Câu hỏi Đúng / Sai' : 'Trắc nghiệm'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mt-1 leading-snug">
              {curQ.question}
            </h3>
          </div>

          {/* Options */}
          {curQ.type === 'multiple-choice' && curQ.options && (
            <div className="space-y-3 pt-2">
              {curQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[curQ.id] === opt;
                const isAnswered = selectedAnswers[curQ.id] !== undefined;
                const isCorrectOpt = opt === curQ.correctAnswer;

                let btnStyle = 'border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-slate-700 bg-slate-50/50';
                if (isAnswered) {
                  if (isSelected && isCorrectOpt) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                  } else if (isSelected && !isCorrectOpt) {
                    btnStyle = 'border-rose-500 bg-rose-50 text-rose-900';
                  } else if (isCorrectOpt) {
                    btnStyle = 'border-emerald-400 bg-emerald-50/60 text-emerald-800 font-semibold';
                  } else {
                    btnStyle = 'border-slate-200 opacity-50 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelect(opt)}
                    className={`w-full text-left p-4 rounded-2xl border text-sm transition-all flex items-start justify-between gap-3 ${btnStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{opt}</span>
                    </div>

                    {isAnswered && (
                      <div className="shrink-0 mt-0.5">
                        {isCorrectOpt ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* True / False Options */}
          {curQ.type === 'true-false' && (
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'ĐÚNG', value: true },
                { label: 'SAI', value: false }
              ].map(opt => {
                const isSelected = selectedAnswers[curQ.id] === opt.value;
                const isAnswered = selectedAnswers[curQ.id] !== undefined;
                const isCorrectOpt = opt.value === curQ.correctAnswer;

                let btnStyle = 'border-slate-200 hover:border-blue-400 bg-slate-50 text-slate-800';
                if (isAnswered) {
                  if (isSelected && isCorrectOpt) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (isSelected && !isCorrectOpt) {
                    btnStyle = 'border-rose-500 bg-rose-50 text-rose-900';
                  } else if (isCorrectOpt) {
                    btnStyle = 'border-emerald-400 bg-emerald-50/60 text-emerald-800 font-semibold';
                  } else {
                    btnStyle = 'border-slate-200 opacity-50';
                  }
                }

                return (
                  <button
                    key={opt.label}
                    disabled={isAnswered}
                    onClick={() => handleSelect(opt.value)}
                    className={`py-4 px-6 rounded-2xl border text-base font-bold transition-all flex items-center justify-center gap-2 ${btnStyle}`}
                  >
                    {opt.label}
                    {isAnswered && isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    {isAnswered && isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-rose-600" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* Hint button if not answered */}
          {selectedAnswers[curQ.id] === undefined && (
            <div className="pt-2">
              {!showHint[curQ.id] ? (
                <button
                  onClick={() => setShowHint(prev => ({ ...prev, [curQ.id]: true }))}
                  className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  Bạn cần một chút gợi ý?
                </button>
              ) : (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Gợi ý:</strong> {curQ.hint}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Explanation Box when Answered */}
          {showExplanation[curQ.id] && (
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-2 ${
              selectedAnswers[curQ.id] === curQ.correctAnswer
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-rose-50/80 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-bold">
                {selectedAnswers[curQ.id] === curQ.correctAnswer ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Chính xác!
                  </span>
                ) : (
                  <span className="text-rose-700 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Chưa chính xác.
                  </span>
                )}
              </div>

              <div>
                <strong>Giải thích:</strong> {curQ.explanation}
              </div>

              {selectedAnswers[curQ.id] !== curQ.correctAnswer && (
                <div className="text-xs text-slate-600 pt-1 border-t border-rose-200/60">
                  💡 <em>Hãy nhớ rằng:</em> {curQ.hint}
                </div>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Không tạo áp lực điểm số, làm để nhớ lại kiến thức!
            </span>

            {selectedAnswers[curQ.id] !== undefined && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-sm transition-all"
              >
                {currentIdx < totalQ - 1 ? 'Câu tiếp theo' : 'Xem kết quả sẵn sàng'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Completed Summary & Readiness Meter */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-8 text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-800">
              Hoàn Thành Phần Ôn Kiến Thức Cũ!
            </h3>
            <p className="text-slate-500 text-sm">
              Bạn đã trả lời đúng <strong>{correctCount} / {totalQ} câu hỏi</strong> nền tảng.
            </p>
          </div>

          {/* Readiness Card */}
          <div className={`max-w-md mx-auto p-6 rounded-2xl border ${readiness.badgeColor} space-y-3`}>
            <span className="text-xs uppercase tracking-wider font-bold block text-slate-500">
              Mức độ sẵn sàng học Chương 1:
            </span>
            <div className="text-xl font-extrabold">{readiness.level}</div>
            <p className="text-xs sm:text-sm leading-relaxed">{readiness.message}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại bài ôn tập
            </button>

            <button
              onClick={onGoToLessons}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md transition-all hover:translate-y-[-1px]"
            >
              Vào Học Chuyên Đề 1 Ngay
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
