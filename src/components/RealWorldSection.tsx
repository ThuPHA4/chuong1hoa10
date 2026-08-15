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

      {/* Category Filter Pills & Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          5 tình huống thực tế Chuyên Đề 1
        </span>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {['Tất cả', 'Thực nghiệm', 'Khảo cổ học', 'Sinh học', 'Đời sống', 'Công nghiệp'].map((cat, cIdx) => (
            <span
              key={cIdx}
              className="px-2.5 py-1 rounded-xl bg-slate-100 font-bold text-slate-600 border border-slate-200/80"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
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

              {/* Story Scenario & Visual Infographic Banner */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-8 p-5 bg-amber-50/50 rounded-2xl border border-amber-100 text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    Tình huống thực tế:
                  </span>
                  <p className="italic">
                    {cs.story}
                  </p>
                </div>

                {/* Visual SVG Mini Illustration for Case */}
                <div className="md:col-span-4 bg-slate-900 rounded-2xl p-3 text-white border border-slate-800 flex flex-col items-center justify-center text-center">
                  {cs.id === 'rw-1' && (
                    <div className="w-full">
                      <svg viewBox="0 0 160 90" className="w-full h-20">
                        {/* Purple smoke clouds */}
                        <path d="M 40 35 Q 60 10 90 25 Q 120 15 130 40 Q 110 50 80 45 Z" fill="#c084fc" fillOpacity="0.4" />
                        <path d="M 60 25 Q 85 5 110 20 Q 130 10 140 30 Q 120 40 90 35 Z" fill="#a855f7" fillOpacity="0.6" />
                        {/* Reaction Dish */}
                        <ellipse cx="80" cy="70" rx="45" ry="12" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
                        <ellipse cx="80" cy="67" rx="35" ry="7" fill="#6b21a8" />
                        {/* Water drop */}
                        <path d="M 80 45 C 75 52, 85 52, 80 45 Z" fill="#38bdf8" />
                        <circle cx="80" cy="50" r="2.5" fill="#38bdf8" />
                        <text x="80" y="85" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontWeight="bold">2Al + 3I₂ → 2AlI₃ + Khói tím</text>
                      </svg>
                      <span className="text-[10px] text-amber-300 font-semibold">Giọt nước = Xúc tác giảm Ea</span>
                    </div>
                  )}

                  {cs.id === 'rw-2' && (
                    <div className="w-full">
                      <svg viewBox="0 0 160 90" className="w-full h-20">
                        {/* Decay steps */}
                        <circle cx="30" cy="35" r="14" fill="#059669" />
                        <text x="30" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">100%</text>
                        <text x="30" y="58" textAnchor="middle" fill="#94a3b8" fontSize="7">Cây tươi (t=0)</text>

                        <path d="M 48 35 L 72 35" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />
                        <text x="60" y="28" textAnchor="middle" fill="#fbbf24" fontSize="7">5730 năm</text>

                        <circle cx="85" cy="35" r="14" fill="#0284c7" />
                        <text x="85" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">50%</text>

                        <path d="M 103 35 L 127 35" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />

                        <circle cx="140" cy="35" r="14" fill="#e11d48" />
                        <text x="140" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">25%</text>
                        <text x="140" y="58" textAnchor="middle" fill="#fda4af" fontSize="7">Cổ vật (11.460 năm)</text>
                      </svg>
                      <span className="text-[10px] text-emerald-300 font-semibold">t = 2 × t₁/₂ = 11.460 năm</span>
                    </div>
                  )}

                  {cs.id === 'rw-3' && (
                    <div className="w-full">
                      <svg viewBox="0 0 160 90" className="w-full h-20">
                        {/* Enzyme lock and key */}
                        <path d="M 25 35 C 25 15, 65 15, 65 35 C 65 45, 55 45, 55 55 C 55 65, 35 65, 35 55 C 35 45, 25 45, 25 35 Z" fill="#6366f1" />
                        <text x="45" y="42" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Lactase</text>
                        <text x="85" y="35" fill="#facc15" fontSize="14" fontWeight="bold">+</text>
                        {/* Lactose */}
                        <circle cx="115" cy="35" r="10" fill="#f59e0b" />
                        <text x="115" y="38" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Lactose</text>
                        <text x="80" y="78" textAnchor="middle" fill="#c7d2fe" fontSize="8">→ Glucose + Galactose</text>
                      </svg>
                      <span className="text-[10px] text-indigo-300 font-semibold">Enzyme xúc tác đặc hiệu</span>
                    </div>
                  )}

                  {cs.id === 'rw-4' && (
                    <div className="w-full">
                      <svg viewBox="0 0 160 90" className="w-full h-20">
                        {/* Dry ice sublimation */}
                        <rect x="20" y="30" width="30" height="30" fill="#38bdf8" rx="4" />
                        <text x="35" y="48" textAnchor="middle" fill="#0c4a6e" fontSize="8" fontWeight="bold">CO₂(s)</text>
                        <text x="35" y="72" textAnchor="middle" fill="#94a3b8" fontSize="7">Trật tự (S thấp)</text>

                        <path d="M 55 45 L 85 45" stroke="#f43f5e" strokeWidth="2" />
                        <text x="70" y="38" textAnchor="middle" fill="#fda4af" fontSize="7">ΔS &gt; 0</text>

                        {/* Gas dots */}
                        <circle cx="105" cy="35" r="4" fill="#fb7185" />
                        <circle cx="125" cy="25" r="4" fill="#fb7185" />
                        <circle cx="140" cy="45" r="4" fill="#fb7185" />
                        <circle cx="115" cy="55" r="4" fill="#fb7185" />
                        <text x="125" y="72" textAnchor="middle" fill="#94a3b8" fontSize="7">Hỗn loạn (S cao)</text>
                      </svg>
                      <span className="text-[10px] text-rose-300 font-semibold">Thăng hoa: ΔS &gt; 0, ΔG &lt; 0</span>
                    </div>
                  )}

                  {cs.id === 'rw-5' && (
                    <div className="w-full">
                      <svg viewBox="0 0 160 90" className="w-full h-20">
                        {/* Haber Bosch */}
                        <rect x="25" y="25" width="110" height="35" fill="#1e293b" stroke="#3b82f6" rx="6" />
                        <text x="80" y="42" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold">N₂ + 3H₂ ⇌ 2NH₃</text>
                        <text x="80" y="54" textAnchor="middle" fill="#fbbf24" fontSize="7">Xúc tác Fe • 450°C • 200 atm</text>
                        <text x="80" y="78" textAnchor="middle" fill="#cbd5e1" fontSize="8">Phân đạm cho nông nghiệp</text>
                      </svg>
                      <span className="text-[10px] text-blue-300 font-semibold">Công nghệ tổng hợp Haber-Bosch</span>
                    </div>
                  )}
                </div>
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
