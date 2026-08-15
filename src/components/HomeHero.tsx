import React, { useState } from 'react';
import { 
  Atom, 
  BookOpen, 
  HelpCircle, 
  Dumbbell, 
  Lightbulb, 
  FlaskConical, 
  Clock, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Zap,
  Radiation,
  Compass,
  Eye,
  Activity,
  Flame
} from 'lucide-react';
import { UserProgress } from '../types';
import {
  MolecularGeometryVisualizer,
  NuclearRadiationVisualizer,
  ArrheniusEnergyProfileVisualizer,
  ThermodynamicGibbsVisualizer
} from './VisualDiagrams';

interface HomeHeroProps {
  setActiveSection: (section: string) => void;
  onSelectLesson?: (lessonId: number) => void;
  progress: UserProgress;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ setActiveSection, onSelectLesson, progress }) => {
  const completedLessons = progress.completedLessonIds.length;
  const progressPercent = Math.round((completedLessons / 4) * 100);
  const [activeVisualTab, setActiveVisualTab] = useState<'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs'>('vsepr');

  const mainModules = [
    {
      id: 'review',
      title: '1. Ôn kiến thức cũ',
      badge: 'Khởi động',
      icon: HelpCircle,
      color: 'blue',
      bgGradient: 'from-blue-500/10 to-indigo-500/5',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-600',
      description: 'Củng cố các khái niệm nền tảng: cấu hình electron, quy tắc octet, liên kết ion vs cộng hóa trị và kiểm tra độ sẵn sàng.',
      actionText: 'Làm bài khởi động'
    },
    {
      id: 'lessons',
      title: '2. Học Chuyên đề 1',
      badge: '4 Bài cốt lõi',
      icon: BookOpen,
      color: 'indigo',
      bgGradient: 'from-indigo-500/10 to-purple-500/5',
      borderColor: 'border-indigo-200',
      iconBg: 'bg-indigo-600',
      description: 'Khám phá 4 bài học chuẩn SGK: Liên kết & VSEPR, Phản ứng hạt nhân, Năng lượng hoạt hóa Arrhenius, Entropy & Gibbs.',
      actionText: 'Vào bài học ngay'
    },
    {
      id: 'practice',
      title: '3. Luyện tập',
      badge: '3 Cấp độ',
      icon: Dumbbell,
      color: 'emerald',
      bgGradient: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-600',
      description: 'Ngân hàng bài tập chọn lọc bám sát SGK từ Nhận biết, Áp dụng đến Vận dụng, có gợi ý và lời giải từng bước.',
      actionText: 'Luyện tập bài tập'
    },
    {
      id: 'realworld',
      title: '4. Vận dụng thực tiễn',
      badge: 'Hóa học quanh ta',
      icon: Lightbulb,
      color: 'amber',
      bgGradient: 'from-amber-500/10 to-orange-500/5',
      borderColor: 'border-amber-200',
      iconBg: 'bg-amber-600',
      description: 'Khám phá các câu chuyện kỳ thú: Bí ẩn giọt nước kích nổ Al-I₂, định tuổi cổ vật ¹⁴C, enzyme sữa lactase, tầng ozone và đá khô.',
      actionText: 'Khám phá tình huống'
    },
    {
      id: 'simulations',
      title: '5. Thí nghiệm & Mô phỏng 3D',
      badge: 'Trực quan hóa',
      icon: FlaskConical,
      color: 'purple',
      bgGradient: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-600',
      description: 'Mô phỏng xoay phân tử 3D VSEPR, phân rã hạt nhân 100 nguyên tử, giản đồ Arrhenius và cân bằng nhiệt động Gibbs.',
      actionText: 'Mở phòng lab ảo'
    },
    {
      id: 'test',
      title: '6. Kiểm tra nhanh',
      badge: '10 Câu tổng hợp',
      icon: Clock,
      color: 'rose',
      bgGradient: 'from-rose-500/10 to-red-500/5',
      borderColor: 'border-rose-200',
      iconBg: 'bg-rose-600',
      description: 'Bài kiểm tra 10 câu trắc nghiệm chuẩn hóa, chấm điểm tự động và chẩn đoán phần kiến thức còn yếu để ôn lại.',
      actionText: 'Bắt đầu kiểm tra'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-950 text-white p-8 md:p-12 shadow-xl border border-indigo-700/40">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 bg-blue-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              Hóa Học 10 • Chuyên Đề Học Tập
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              CHUYÊN ĐỀ 1: CƠ SỞ HÓA HỌC
            </h1>

            <p className="text-indigo-100 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              Không gian học tập tương tác hiện đại giúp bạn làm chủ: <strong>Cấu trúc Lewis & VSEPR</strong>, <strong>Phản ứng hạt nhân</strong>, <strong>Năng lượng hoạt hóa & Xúc tác</strong>, cùng <strong>Entropy & Năng lượng tự do Gibbs</strong> qua trải nghiệm khám phá và thực nghiệm sinh động.
            </p>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => setActiveSection('lessons')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 shadow-md transition-all hover:translate-y-[-1px]"
              >
                <BookOpen className="w-4 h-4 text-indigo-700" />
                Bắt đầu Học Chương 1
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection('simulations')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-700/60 hover:bg-indigo-700 text-white font-semibold text-sm border border-indigo-500/40 transition-all"
              >
                <FlaskConical className="w-4 h-4 text-indigo-300" />
                Mô Phỏng 3D Trực Quan
              </button>
            </div>

            {/* Learning stats snapshot */}
            <div className="pt-6 border-t border-indigo-700/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl font-bold text-white">4 Bài</div>
                <div className="text-xs text-indigo-300">Nội dung cốt lõi</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4 Mô hình</div>
                <div className="text-xs text-indigo-300">Phòng Lab 3D tương tác</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">14+ Bài tập</div>
                <div className="text-xs text-indigo-300">Phân hóa 3 cấp độ</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{progressPercent}%</div>
                <div className="text-xs text-indigo-300">Tiến độ của bạn</div>
              </div>
            </div>
          </div>

          {/* Animated 3D Atom / Molecule Graphic */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center p-4 bg-indigo-900/40 rounded-full border border-indigo-500/30 backdrop-blur-xs shadow-2xl">
              <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: '30s' }}>
                {/* Orbit 1 */}
                <ellipse cx="100" cy="100" rx="80" ry="28" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(30 100 100)" />
                <circle cx="170" cy="90" r="5" fill="#38bdf8" className="animate-pulse" />
                
                {/* Orbit 2 */}
                <ellipse cx="100" cy="100" rx="80" ry="28" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(90 100 100)" />
                <circle cx="100" cy="22" r="5" fill="#fb7185" className="animate-pulse" />

                {/* Orbit 3 */}
                <ellipse cx="100" cy="100" rx="80" ry="28" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 2" transform="rotate(150 100 100)" />
                <circle cx="35" cy="120" r="5" fill="#facc15" className="animate-pulse" />

                {/* Nucleus */}
                <circle cx="100" cy="100" r="18" fill="url(#nucleusGlow)" />
                <defs>
                  <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="60%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#1e1b4b" />
                  </radialGradient>
                </defs>
                <text x="100" y="105" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Hóa 10</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Showcase Section */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
              <Eye className="w-4 h-4" />
              Góc Trực Quan Hóa Hóa Học
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mt-0.5">
              Mô Hình & Sơ Đồ Động 4 Chủ Đề Trọng Tâm
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Trực tiếp tương tác với các cấu trúc phân tử, phản xạ phóng xạ, giản đồ năng lượng và định luật nhiệt động học
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-200/70 border border-slate-300/60 rounded-2xl">
            {[
              { id: 'vsepr', label: '1. VSEPR & Lai hóa', icon: Atom, color: 'text-indigo-600' },
              { id: 'nuclear', label: '2. Tia Phóng Xạ', icon: Radiation, color: 'text-emerald-600' },
              { id: 'arrhenius', label: '3. Năng lượng Ea', icon: Zap, color: 'text-amber-600' },
              { id: 'gibbs', label: '4. La Bàn Gibbs', icon: Compass, color: 'text-rose-600' }
            ].map(tab => {
              const Icon = tab.icon;
              const isSelected = activeVisualTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveVisualTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200 ring-2 ring-indigo-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? tab.color : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Render selected visual diagram */}
        <div>
          {activeVisualTab === 'vsepr' && <MolecularGeometryVisualizer />}
          {activeVisualTab === 'nuclear' && <NuclearRadiationVisualizer />}
          {activeVisualTab === 'arrhenius' && <ArrheniusEnergyProfileVisualizer />}
          {activeVisualTab === 'gibbs' && <ThermodynamicGibbsVisualizer />}
        </div>
      </section>

      {/* 6 Key Modules Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Lộ Trình Tự Học Chuyên Đề 1
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Hành trình học tập 6 bước: Hiểu bản chất → Luyện tập thành thạo → Ứng dụng đời sống
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mainModules.map(mod => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                onClick={() => setActiveSection(mod.id)}
                className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b ${mod.bgGradient} border ${mod.borderColor} hover:shadow-md transition-all cursor-pointer hover:translate-y-[-2px]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${mod.iconBg} text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-700 shadow-2xs">
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-800">
                  <span>{mod.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4 Lessons Preview Grid */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800">
              Các Bài Học Trong Chuyên Đề 1
            </h3>
            <p className="text-xs text-slate-500">
              Nhấp vào bài bất kì để bắt đầu học với mục tiêu, khám phá, kiến thức cốt lõi và thử thách nhanh
            </p>
          </div>
          <button
            onClick={() => setActiveSection('lessons')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            Xem tất cả bài học <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 1,
              name: 'Bài 1: Liên Kết Hóa Học',
              subtitle: 'Lewis, VSEPR & Lai Hóa AO',
              icon: Atom,
              color: 'text-indigo-600 bg-indigo-100',
              topics: ['Công thức Lewis', 'Dạng hình học VSEPR', 'Lai hóa sp, sp², sp³']
            },
            {
              id: 2,
              name: 'Bài 2: Phản Ứng Hạt Nhân',
              subtitle: 'Phóng xạ & Chu kì bán rã',
              icon: Radiation,
              color: 'text-emerald-600 bg-emerald-100',
              topics: ['Tia α, β⁻, β⁺, γ', 'Chu kì bán rã t₁/₂', 'Phân hạch & Nhiệt hạch']
            },
            {
              id: 3,
              name: 'Bài 3: Năng Lượng Hoạt Hóa',
              subtitle: 'Phương trình Arrhenius & Xúc tác',
              icon: Zap,
              color: 'text-amber-600 bg-amber-100',
              topics: ['Khái niệm Ea & va chạm', 'Công thức k = A·e^(-Ea/RT)', 'Cơ chế chất xúc tác']
            },
            {
              id: 4,
              name: 'Bài 4: Entropy & Gibbs (ΔG)',
              subtitle: 'Dự đoán chiều tự phát phản ứng',
              icon: Compass,
              color: 'text-rose-600 bg-rose-100',
              topics: ['Entropy S (độ hỗn loạn)', 'ΔG = ΔH - T·ΔS', 'Điều kiện tự phát ΔG < 0']
            }
          ].map(lesson => {
            const Icon = lesson.icon;
            const isDone = progress.completedLessonIds.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => {
                  if (onSelectLesson) onSelectLesson(lesson.id);
                  setActiveSection('lessons');
                }}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl ${lesson.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isDone ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Đã học
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-medium">Chưa học</span>
                    )}
                  </div>

                  <h4 className="font-bold text-slate-800 text-sm">{lesson.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{lesson.subtitle}</p>

                  <ul className="mt-3 space-y-1 text-xs text-slate-600">
                    {lesson.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                  <span>Học bài này</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
