import React, { useState } from 'react';
import { 
  Lightbulb, 
  FlaskConical, 
  Clock, 
  Milk, 
  Snowflake, 
  ShieldAlert, 
  Factory, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  Flame
} from 'lucide-react';
import { realWorldCases } from '../data/realWorldData';

interface RealWorldSectionProps {
  onGoToLesson: (lessonId: number) => void;
}

export const RealWorldSection: React.FC<RealWorldSectionProps> = ({ onGoToLesson }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showChallenge, setShowChallenge] = useState<Record<string, boolean>>({});

  const handleSelect = (caseId: string, optIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [caseId]: optIdx }));
  };

  const getCaseIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return FlaskConical;
      case 'Clock': return Clock;
      case 'Milk': return Milk;
      case 'Snowflake': return Snowflake;
      case 'ShieldAlert': return ShieldAlert;
      case 'Factory': return Factory;
      default: return Lightbulb;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Đời sống': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Y học': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Môi trường': return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Công nghiệp': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'An toàn': return 'bg-rose-50 text-rose-700 border-rose-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 font-medium text-xs md:text-sm mb-3 border border-amber-200">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Phần 4: Vận Dụng Thực Tiễn • Hóa Học Quanh Ta
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Khám Phá Các Hiện Tượng Đời Sống Bằng Hóa Học
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          "Kiến thức trong SGK thực sự xuất hiện và vận hành mọi mặt trong cuộc sống hằng ngày của chúng ta."
        </p>
      </div>

      {/* Case Studies List */}
      <div className="space-y-8">
        {realWorldCases.map((cs, idx) => {
          const Icon = getCaseIcon(cs.icon);
          const userAns = selectedAnswers[cs.id];
          const isAnswered = userAns !== undefined;
          const isCorrect = userAns === cs.correctIndex;

          return (
            <div
              key={cs.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs p-6 sm:p-8 space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getCategoryColor(cs.category)}`}>
                      {cs.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      {idx + 1}. {cs.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onGoToLesson(cs.lessonId)}
                  className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1"
                >
                  Kiến thức Bài {cs.lessonId} <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Story Scenario */}
              <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  Tình huống thực tế:
                </span>
                <p className="italic">
                  {cs.story}
                </p>
              </div>

              {/* Question */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                  ❓ {cs.question}
                </h4>

                <div className="space-y-2.5">
                  {cs.options.map((opt, oIdx) => {
                    const isSelected = userAns === oIdx;
                    const isCorrectOpt = oIdx === cs.correctIndex;

                    let btnClass = 'border-slate-200 bg-slate-50/50 hover:border-amber-400 text-slate-700';
                    if (isAnswered) {
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
                        disabled={isAnswered}
                        onClick={() => handleSelect(cs.id, oIdx)}
                        className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${btnClass}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-white border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-slate-600">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </div>

                        {isAnswered && (
                          <div className="shrink-0 mt-0.5">
                            {isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                            {isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-rose-600" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scientific Explanation Box */}
              {isAnswered && (
                <div className="space-y-4 pt-2">
                  <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-2 ${
                    isCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-rose-50/80 border-rose-200 text-rose-950'
                  }`}>
                    <div className="font-bold flex items-center gap-2">
                      {isCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Suy luận rất chính xác!
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Hãy xem giải thích khoa học dưới đây:
                        </span>
                      )}
                    </div>
                    
                    <div>
                      <strong className="block text-slate-900 font-bold mb-1">Giải thích khoa học theo Chuyên đề 1:</strong>
                      <p className="whitespace-pre-line text-slate-800">{cs.scientificExplanation}</p>
                    </div>
                  </div>

                  {/* 🎯 Thử thách mở rộng */}
                  <div className="p-4 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        🎯 Thử thách mở rộng tư duy
                      </span>
                      <button
                        onClick={() => setShowChallenge(prev => ({ ...prev, [cs.id]: !prev[cs.id] }))}
                        className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                      >
                        {showChallenge[cs.id] ? 'Ẩn đáp án' : 'Xem đáp án thử thách'}
                        {showChallenge[cs.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-purple-950">
                      {cs.challenge.question}
                    </p>

                    {showChallenge[cs.id] && (
                      <div className="p-3 bg-white rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 leading-relaxed">
                        <strong>Lời giải thử thách:</strong> {cs.challenge.answer}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
