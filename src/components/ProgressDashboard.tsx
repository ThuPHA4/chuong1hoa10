import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  BookOpen, 
  Dumbbell, 
  Clock, 
  RotateCcw, 
  Award, 
  Target, 
  Zap, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { UserProgress } from '../types';
import { practiceExercises } from '../data/practiceData';

interface ProgressDashboardProps {
  progress: UserProgress;
  onResetProgress: () => void;
  onGoToSection: (sec: string) => void;
  onGoToLesson: (lessonId: number) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  onResetProgress,
  onGoToSection,
  onGoToLesson
}) => {
  // Local self-assessment checklist
  const [selfAssessment, setSelfAssessment] = useState<Record<string, boolean>>({
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false
  });

  const toggleChecklist = (key: string) => {
    setSelfAssessment(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalLessons = 4;
  const completedLessons = progress.completedLessonIds.length;
  const lessonPercent = Math.round((completedLessons / totalLessons) * 100);

  const totalExercises = practiceExercises.length;
  const completedExercises = progress.completedPracticeIds.length;
  const practicePercent = Math.round((completedExercises / totalExercises) * 100);

  const totalAssessments = Object.keys(selfAssessment).length;
  const checkedAssessments = Object.values(selfAssessment).filter(Boolean).length;
  const assessmentPercent = Math.round((checkedAssessments / totalAssessments) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium text-xs md:text-sm mb-3 border border-indigo-200">
          <BarChart3 className="w-4 h-4" />
          Phần 6: Theo Dõi Tiến Độ & Tự Đánh Giá Năng Lực
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Hành Trình Chinh Phục Chuyên Đề 1
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Tổng hợp kết quả học tập, mức độ hoàn thành bài giảng, ngân hàng bài tập và tự kiểm tra năng lực cá nhân.
        </p>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Lessons Progress */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold text-indigo-600">{lessonPercent}%</span>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base">Bài học đã hoàn thành</h3>
            <p className="text-xs text-slate-500 mt-0.5">{completedLessons} / {totalLessons} bài học</p>
          </div>

          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500" 
              style={{ width: `${lessonPercent}%` }}
            />
          </div>

          <button
            onClick={() => onGoToSection('lessons')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 pt-1"
          >
            Tiếp tục học bài giảng <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Practice Progress */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Dumbbell className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold text-emerald-600">{practicePercent}%</span>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base">Bài tập đã giải</h3>
            <p className="text-xs text-slate-500 mt-0.5">{completedExercises} / {totalExercises} bài tập phân hóa</p>
          </div>

          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-600 rounded-full transition-all duration-500" 
              style={{ width: `${practicePercent}%` }}
            />
          </div>

          <button
            onClick={() => onGoToSection('practice')}
            className="text-xs font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 pt-1"
          >
            Làm thêm bài tập <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Test Record */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            {progress.lastTestScore !== undefined ? (
              <span className="text-xl font-extrabold text-rose-600">{progress.lastTestScore} / 10 điểm</span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Chưa thi</span>
            )}
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base">Kiểm tra nhanh</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {progress.lastTestScore !== undefined ? 'Đã hoàn thành bài đánh giá 10 câu' : 'Chưa làm bài kiểm tra tổng hợp'}
            </p>
          </div>

          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-rose-600 rounded-full transition-all duration-500" 
              style={{ width: `${progress.lastTestScore !== undefined ? (progress.lastTestScore / 10) * 100 : 0}%` }}
            />
          </div>

          <button
            onClick={() => onGoToSection('test')}
            className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 pt-1"
          >
            {progress.lastTestScore !== undefined ? 'Thi lại kiểm tra' : 'Bắt đầu kiểm tra ngay'} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 4 Lessons Status Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          Trạng thái chi tiết từng bài học
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: 1, name: 'Bài 1: Liên kết hóa học & VSEPR', desc: 'Lewis, hình học phân tử, lai hóa sp, sp², sp³' },
            { id: 2, name: 'Bài 2: Phản ứng hạt nhân & Phóng xạ', desc: 'Tia phóng xạ α, β, γ, chu kì bán rã, phân hạch' },
            { id: 3, name: 'Bài 3: Năng lượng hoạt hóa & Xúc tác', desc: 'Thuyết va chạm, Arrhenius k = A·e^(-Ea/RT), enzyme' },
            { id: 4, name: 'Bài 4: Entropy & Năng lượng Gibbs', desc: 'Độ hỗn loạn S, ΔG = ΔH - T·ΔS, chiều tự phát phản ứng' }
          ].map(lesson => {
            const isDone = progress.completedLessonIds.includes(lesson.id);

            return (
              <div 
                key={lesson.id}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isDone ? 'bg-emerald-50/50 border-emerald-200' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-800 text-sm">{lesson.name}</h4>
                    {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{lesson.desc}</p>
                </div>

                <button
                  onClick={() => {
                    onGoToLesson(lesson.id);
                    onGoToSection('lessons');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-indigo-600 font-bold text-xs shrink-0 shadow-2xs"
                >
                  {isDone ? 'Ôn lại' : 'Học ngay'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rubric / Self-Assessment Checklist (Bảng Tiêu Chí Năng Lực Học Sinh) */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block">
              Bảng tiêu chí tự đánh giá năng lực chuẩn SGK
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              "Tôi Đã Làm Chủ Được Những Gì?"
            </h3>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-amber-300">
            {checkedAssessments} / {totalAssessments} Tiêu chí ({assessmentPercent}%)
          </div>
        </div>

        <div className="space-y-3">
          {[
            { key: 'c1', text: 'Em có thể viết công thức electron và công thức Lewis cho các phân tử cơ bản (CH₄, NH₃, H₂O, CO₂).' },
            { key: 'c2', text: 'Em có thể áp dụng mô hình VSEPR để dự đoán chính xác hình học phân tử và góc liên kết.' },
            { key: 'c3', text: 'Em có thể viết và cân bằng đúng phương trình phân rã phóng xạ (α, β⁻, β⁺) và tính chu kỳ bán rã t₁/₂.' },
            { key: 'c4', text: 'Em hiểu rõ khái niệm năng lượng hoạt hóa (Ea) và giải thích được cơ chế giảm Ea của chất xúc tác/enzyme.' },
            { key: 'c5', text: 'Em có thể tính biến thiên Entropy (ΔS) và Năng lượng tự do Gibbs (ΔG = ΔH - T·ΔS) của phản ứng.' },
            { key: 'c6', text: 'Em có thể vận dụng kiến thức Chuyên đề 1 để giải thích các hiện tượng thực tế: bảo quản thực phẩm, định tuổi cổ vật, hiệu ứng nhà kính.' }
          ].map(item => {
            const isChecked = selfAssessment[item.key];

            return (
              <div
                key={item.key}
                onClick={() => toggleChecklist(item.key)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-white/15 border-indigo-400/60 text-white'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="w-5 h-5 rounded-md text-indigo-600 focus:ring-0 mt-0.5 shrink-0 cursor-pointer accent-indigo-500"
                />
                <span className="text-xs sm:text-sm leading-relaxed font-medium">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Progress Action */}
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
        <span className="text-xs text-slate-500">
          Tiến trình của bạn được tự động lưu trên trình duyệt (LocalStorage).
        </span>

        <button
          onClick={onResetProgress}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-semibold"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Xóa & Làm lại từ đầu
        </button>
      </div>

    </div>
  );
};
