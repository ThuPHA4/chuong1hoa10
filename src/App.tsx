import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { OldKnowledgeReview } from './components/OldKnowledgeReview';
import { LessonViewer } from './components/LessonViewer';
import { PracticeSection } from './components/PracticeSection';
import { RealWorldSection } from './components/RealWorldSection';
import { LabSimulations } from './components/LabSimulations';
import { QuickTestSection } from './components/QuickTestSection';
import { ProgressDashboard } from './components/ProgressDashboard';
import { 
  loadProgress, 
  markLessonComplete, 
  markPracticeComplete, 
  saveTestResult, 
  resetProgress 
} from './utils/storage';
import { UserProgress } from './types';
import { Atom, BookOpen, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [activeSimTab, setActiveSimTab] = useState<'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs'>('vsepr');
  const [progress, setProgress] = useState<UserProgress>(loadProgress());

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleSelectLesson = (lessonId: number) => {
    setSelectedLessonId(lessonId);
    setActiveSection('lessons');
  };

  const handleOpenSimulation = (type?: 'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs') => {
    if (type) setActiveSimTab(type);
    setActiveSection('simulations');
  };

  const handleCompleteLesson = (lessonId: number) => {
    const updated = markLessonComplete(lessonId);
    setProgress(updated);
  };

  const handleCompletePractice = (exerciseId: string) => {
    const updated = markPracticeComplete(exerciseId);
    setProgress(updated);
  };

  const handleSaveTestResult = (score: number, total: number, weakTopics: string[]) => {
    const updated = saveTestResult(score, total, weakTopics);
    setProgress(updated);
  };

  const handleResetAllProgress = () => {
    if (window.confirm('Bạn có chắc chắn muốn thiết lập lại toàn bộ tiến độ học tập?')) {
      const resetP = resetProgress();
      setProgress(resetP);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        progress={progress}
      />

      {/* Main Content Area */}
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeSection === 'home' && (
          <HomeHero
            setActiveSection={setActiveSection}
            onSelectLesson={handleSelectLesson}
            progress={progress}
          />
        )}

        {activeSection === 'review' && (
          <OldKnowledgeReview
            onFinishReview={() => {}}
            onGoToLessons={() => {
              setSelectedLessonId(1);
              setActiveSection('lessons');
            }}
            progress={progress}
          />
        )}

        {activeSection === 'lessons' && (
          <LessonViewer
            selectedLessonId={selectedLessonId}
            onSelectLesson={setSelectedLessonId}
            onCompleteLesson={handleCompleteLesson}
            onOpenSimulation={handleOpenSimulation}
            progress={progress}
          />
        )}

        {activeSection === 'practice' && (
          <PracticeSection
            onCompleteExercise={handleCompletePractice}
            progress={progress}
            onGoToLesson={handleSelectLesson}
          />
        )}

        {activeSection === 'realworld' && (
          <RealWorldSection
            onGoToLesson={handleSelectLesson}
          />
        )}

        {activeSection === 'simulations' && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 font-medium text-xs md:text-sm mb-2 border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Phần 5: Phòng Thí Nghiệm & Mô Phỏng Tương Tác 3D
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Trực Quan Hóa Khái Niệm Trừu Tượng Chuyên Đề 1
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
                Tương tác trực tiếp với các mô hình hạt nhân, góc liên kết VSEPR, giản đồ năng lượng Arrhenius và đường cong Gibbs.
              </p>
            </div>

            <LabSimulations
              initialTab={activeSimTab}
              onGoToLesson={handleSelectLesson}
            />
          </div>
        )}

        {activeSection === 'test' && (
          <QuickTestSection
            onSaveResult={handleSaveTestResult}
            onGoToLesson={handleSelectLesson}
            progress={progress}
          />
        )}

        {activeSection === 'progress' && (
          <ProgressDashboard
            progress={progress}
            onResetProgress={handleResetAllProgress}
            onGoToSection={setActiveSection}
            onGoToLesson={handleSelectLesson}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
              <Atom className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Hóa Học 10 • Chuyên Đề 1: Cơ Sở Hóa Học
              </div>
              <div className="text-slate-500 text-[11px]">
                Ứng dụng tự học tương tác chuẩn chương trình SGK Hóa học 10
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 font-medium">
            <button onClick={() => setActiveSection('home')} className="hover:text-indigo-600">Trang chủ</button>
            <button onClick={() => setActiveSection('review')} className="hover:text-indigo-600">Ôn kiến thức cũ</button>
            <button onClick={() => setActiveSection('lessons')} className="hover:text-indigo-600">Bài học</button>
            <button onClick={() => setActiveSection('practice')} className="hover:text-indigo-600">Luyện tập</button>
            <button onClick={() => setActiveSection('simulations')} className="hover:text-indigo-600">Mô phỏng 3D</button>
            <button onClick={() => setActiveSection('test')} className="hover:text-indigo-600">Kiểm tra</button>
          </div>

          <div className="text-slate-500 text-[12px] text-center sm:text-right font-medium">
            <div>Dành cho học sinh tự học & ôn luyện hiệu quả</div>
            <div className="text-indigo-600 font-semibold mt-1">
              Designed by ThuPHA4 - Fschool Hậu Giang
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom-Right Author Badge */}
      <div 
        id="author-badge"
        className="fixed bottom-3 right-3 z-40 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 flex items-center gap-1.5 pointer-events-auto transition-all hover:bg-white hover:shadow-lg"
      >
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-slate-500">Designed by</span>
        <span className="text-indigo-700 font-bold">ThuPHA4 - Fschool Hậu Giang</span>
      </div>
    </div>
  );
}
