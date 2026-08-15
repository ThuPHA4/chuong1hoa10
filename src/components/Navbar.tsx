import React from 'react';
import { 
  Atom, 
  BookOpen, 
  HelpCircle, 
  Dumbbell, 
  Lightbulb, 
  FlaskConical, 
  Clock, 
  BarChart3, 
  Menu, 
  X 
} from 'lucide-react';
import { UserProgress } from '../types';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  progress: UserProgress;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, progress }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const completedLessonsCount = progress.completedLessonIds.length;
  const totalLessons = 4;
  const progressPercent = Math.round((completedLessonsCount / totalLessons) * 100);

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Atom },
    { id: 'review', label: 'Ôn kiến thức cũ', icon: HelpCircle },
    { id: 'lessons', label: 'Học Chuyên đề 1', icon: BookOpen },
    { id: 'practice', label: 'Luyện tập', icon: Dumbbell },
    { id: 'realworld', label: 'Vận dụng thực tiễn', icon: Lightbulb },
    { id: 'simulations', label: 'Mô phỏng 3D', icon: FlaskConical },
    { id: 'test', label: 'Kiểm tra nhanh', icon: Clock },
    { id: 'progress', label: 'Tiến độ', icon: BarChart3 }
  ];

  const handleNav = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-sm">
              <Atom className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="font-bold text-slate-900 leading-tight text-sm sm:text-base">
                Hóa Học 10 <span className="text-indigo-600 font-semibold">• Chuyên Đề 1</span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Cơ sở Hóa học - Tự học & Thực hành tương tác
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700 shadow-2xs font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Progress Mini Pill (Tablet & Desktop) */}
          <div className="hidden sm:flex items-center gap-3 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
            <span className="text-[11px] font-semibold text-slate-600">Tiến độ:</span>
            <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-bold text-indigo-600">{progressPercent}%</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-2 text-xs font-semibold text-slate-700">
            <span>Tiến độ hoàn thành:</span>
            <span className="text-indigo-600 font-bold">{completedLessonsCount}/{totalLessons} bài ({progressPercent}%)</span>
          </div>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-600 text-white font-bold' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
