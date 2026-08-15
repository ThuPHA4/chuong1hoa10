import React, { useState } from 'react';
import { 
  Atom, 
  Radiation, 
  Zap, 
  Compass, 
  Sparkles, 
  Layers, 
  Activity, 
  Flame, 
  Info,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  RotateCw
} from 'lucide-react';

// ==========================================
// 1. VSEPR & MOLECULAR GEOMETRY DIAGRAMS
// ==========================================
export const MolecularGeometryVisualizer: React.FC = () => {
  const [selectedShape, setSelectedShape] = useState<string>('tetrahedral');

  const shapes = [
    {
      id: 'linear',
      name: 'Đường thẳng (Linear)',
      formulaType: 'AX₂',
      angles: '180°',
      hybridization: 'sp',
      examples: 'BeCl₂, CO₂, C₂H₂, HCN',
      bondingPairs: 2,
      lonePairs: 0,
      color: '#3b82f6',
      description: '2 cặp electron liên kết đẩy nhau ra xa nhất theo hướng đối diện tạo góc 180°.',
      svg: (
        <svg viewBox="0 0 240 140" className="w-full h-36">
          <line x1="40" y1="70" x2="200" y2="70" stroke="#94a3b8" strokeWidth="4" strokeDasharray="3 3" />
          <line x1="60" y1="70" x2="180" y2="70" stroke="#3b82f6" strokeWidth="5" />
          {/* Angle arc */}
          <path d="M 100 50 A 25 25 0 0 1 140 50" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="120" y="42" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="bold">180°</text>
          {/* Center Atom */}
          <circle cx="120" cy="70" r="18" fill="#1e40af" stroke="#60a5fa" strokeWidth="2" />
          <text x="120" y="74" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Be / C</text>
          {/* Terminal Atoms */}
          <circle cx="50" cy="70" r="14" fill="#059669" stroke="#34d399" strokeWidth="2" />
          <text x="50" y="74" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Cl</text>
          <circle cx="190" cy="70" r="14" fill="#059669" stroke="#34d399" strokeWidth="2" />
          <text x="190" y="74" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Cl</text>
        </svg>
      )
    },
    {
      id: 'trigonal-planar',
      name: 'Tam giác phẳng (Trigonal Planar)',
      formulaType: 'AX₃',
      angles: '120°',
      hybridization: 'sp²',
      examples: 'BF₃, AlCl₃, SO₃, CO₃²⁻',
      bondingPairs: 3,
      lonePairs: 0,
      color: '#8b5cf6',
      description: '3 cặp electron liên kết nằm trên cùng một mặt phẳng, phân bố đối xứng cách nhau 120°.',
      svg: (
        <svg viewBox="0 0 240 140" className="w-full h-36">
          <line x1="120" y1="75" x2="120" y2="20" stroke="#8b5cf6" strokeWidth="5" />
          <line x1="120" y1="75" x2="50" y2="115" stroke="#8b5cf6" strokeWidth="5" />
          <line x1="120" y1="75" x2="190" y2="115" stroke="#8b5cf6" strokeWidth="5" />
          {/* Arc 120 */}
          <path d="M 120 45 A 30 30 0 0 0 95 65" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="96" y="48" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="bold">120°</text>
          {/* Center */}
          <circle cx="120" cy="75" r="18" fill="#5b21b6" stroke="#a78bfa" strokeWidth="2" />
          <text x="120" y="79" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">B</text>
          {/* Terminals */}
          <circle cx="120" cy="20" r="13" fill="#0284c7" />
          <text x="120" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">F</text>
          <circle cx="50" cy="115" r="13" fill="#0284c7" />
          <text x="50" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">F</text>
          <circle cx="190" cy="115" r="13" fill="#0284c7" />
          <text x="190" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">F</text>
        </svg>
      )
    },
    {
      id: 'bent-so2',
      name: 'Dạng Chữ V / Góc (Bent AX₂E)',
      formulaType: 'AX₂E',
      angles: '< 120° (~119.5°)',
      hybridization: 'sp²',
      examples: 'SO₂, O₃, NO₂⁻',
      bondingPairs: 2,
      lonePairs: 1,
      color: '#e11d48',
      description: '1 cặp electron tự do (lone pair) ở đỉnh chiếm không gian lớn, ép góc liên kết O-S-O nhỏ hơn 120°.',
      svg: (
        <svg viewBox="0 0 240 140" className="w-full h-36">
          {/* Lone pair cloud */}
          <path d="M 110 50 C 100 20, 140 20, 130 50 Z" fill="#fbbf24" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="116" cy="30" r="3" fill="#d97706" />
          <circle cx="124" cy="30" r="3" fill="#d97706" />
          <text x="160" y="32" fill="#d97706" fontSize="10" fontWeight="bold">1 cặp e tự do</text>
          {/* Bonds */}
          <line x1="120" y1="65" x2="65" y2="115" stroke="#e11d48" strokeWidth="5" />
          <line x1="120" y1="65" x2="175" y2="115" stroke="#e11d48" strokeWidth="5" />
          {/* Center */}
          <circle cx="120" cy="65" r="17" fill="#9f1239" stroke="#fda4af" strokeWidth="2" />
          <text x="120" y="69" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">S</text>
          {/* Terminals */}
          <circle cx="65" cy="115" r="13" fill="#dc2626" />
          <text x="65" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">O</text>
          <circle cx="175" cy="115" r="13" fill="#dc2626" />
          <text x="175" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">O</text>
          <text x="120" y="110" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="bold">119.5°</text>
        </svg>
      )
    },
    {
      id: 'tetrahedral',
      name: 'Tứ diện đều (Tetrahedral)',
      formulaType: 'AX₄',
      angles: '109.5°',
      hybridization: 'sp³',
      examples: 'CH₄, CCl₄, NH₄⁺, SO₄²⁻',
      bondingPairs: 4,
      lonePairs: 0,
      color: '#10b981',
      description: '4 liên kết hướng về 4 đỉnh của một hình tứ diện đều trong không gian 3 chiều với góc chuẩn 109.5°.',
      svg: (
        <svg viewBox="0 0 240 140" className="w-full h-36">
          {/* 3D Bonds */}
          <line x1="120" y1="70" x2="120" y2="18" stroke="#10b981" strokeWidth="4" />
          <line x1="120" y1="70" x2="55" y2="115" stroke="#10b981" strokeWidth="4" />
          {/* Wedge (pointing out) */}
          <polygon points="120,70 100,122 125,125" fill="#047857" />
          {/* Dash (pointing away) */}
          <line x1="120" y1="70" x2="185" y2="110" stroke="#10b981" strokeWidth="4" strokeDasharray="4 3" />
          {/* Center */}
          <circle cx="120" cy="70" r="17" fill="#065f46" stroke="#6ee7b7" strokeWidth="2" />
          <text x="120" y="74" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>
          {/* Terminals */}
          <circle cx="120" cy="18" r="12" fill="#3b82f6" />
          <text x="120" y="22" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <circle cx="55" cy="115" r="12" fill="#3b82f6" />
          <text x="55" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <circle cx="112" cy="124" r="12" fill="#3b82f6" />
          <text x="112" y="128" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <circle cx="185" cy="110" r="12" fill="#3b82f6" />
          <text x="185" y="114" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <text x="82" y="55" fill="#d97706" fontSize="11" fontWeight="bold">109.5°</text>
        </svg>
      )
    },
    {
      id: 'trigonal-pyramidal',
      name: 'Chóp tam giác (Trigonal Pyramidal)',
      formulaType: 'AX₃E',
      angles: '107°',
      hybridization: 'sp³',
      examples: 'NH₃, PH₃, PCl₃, H₃O⁺',
      bondingPairs: 3,
      lonePairs: 1,
      color: '#f59e0b',
      description: '1 cặp e tự do ở đỉnh nén 3 liên kết N-H lại gần nhau hơn, làm góc giảm từ 109.5° xuống 107°.',
      svg: (
        <svg viewBox="0 0 240 140" className="w-full h-36">
          {/* Lone pair cloud on top */}
          <path d="M 110 40 C 95 10, 145 10, 130 40 Z" fill="#fbbf24" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="116" cy="22" r="3" fill="#d97706" />
          <circle cx="124" cy="22" r="3" fill="#d97706" />
          {/* Bonds */}
          <line x1="120" y1="58" x2="60" y2="115" stroke="#f59e0b" strokeWidth="4" />
          <polygon points="120,58 105,118 128,122" fill="#b45309" />
          <line x1="120" y1="58" x2="180" y2="112" stroke="#f59e0b" strokeWidth="4" strokeDasharray="4 3" />
          {/* Center */}
          <circle cx="120" cy="58" r="16" fill="#78350f" stroke="#fcd34d" strokeWidth="2" />
          <text x="120" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">N</text>
          {/* Terminals */}
          <circle cx="60" cy="115" r="12" fill="#3b82f6" />
          <text x="60" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <circle cx="116" cy="120" r="12" fill="#3b82f6" />
          <text x="116" y="124" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <circle cx="180" cy="112" r="12" fill="#3b82f6" />
          <text x="180" y="116" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <text x="150" y="85" fill="#d97706" fontSize="11" fontWeight="bold">107°</text>
        </svg>
      )
    },
    {
      id: 'bent-water',
      name: 'Dạng Chữ V Nước (Bent AX₂E₂)',
      formulaType: 'AX₂E₂',
      angles: '104.5°',
      hybridization: 'sp³',
      examples: 'H₂O, H₂S, OF₂',
      bondingPairs: 2,
      lonePairs: 2,
      color: '#06b6d4',
      description: '2 cặp electron tự do đẩy rất mạnh, làm góc H-O-H thu hẹp chỉ còn 104.5°.',
      svg: (
        <svg viewBox="0 0 240 140" className="w-full h-36">
          {/* 2 Lone pair clouds */}
          <path d="M 100 48 C 80 20, 115 15, 112 45 Z" fill="#fbbf24" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M 128 45 C 125 15, 160 20, 140 48 Z" fill="#fbbf24" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Bonds */}
          <line x1="120" y1="58" x2="65" y2="115" stroke="#06b6d4" strokeWidth="5" />
          <line x1="120" y1="58" x2="175" y2="115" stroke="#06b6d4" strokeWidth="5" />
          {/* Center */}
          <circle cx="120" cy="58" r="17" fill="#0e7490" stroke="#67e8f9" strokeWidth="2" />
          <text x="120" y="62" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">O</text>
          {/* Terminals */}
          <circle cx="65" cy="115" r="13" fill="#3b82f6" />
          <text x="65" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <circle cx="175" cy="115" r="13" fill="#3b82f6" />
          <text x="175" y="119" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">H</text>
          <text x="120" y="105" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="bold">104.5°</text>
        </svg>
      )
    }
  ];

  const current = shapes.find(s => s.id === selectedShape) || shapes[3];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider">
          <Atom className="w-5 h-5 text-indigo-400 animate-spin" style={{ animationDuration: '10s' }} />
          Bộ Mô Hình Hình Học Phân Tử VSEPR & Lai Hóa Trực Quan
        </div>
        <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
          Tương tác chọn dạng hình học
        </span>
      </div>

      {/* Shapes Pill Switcher */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
          Chọn cấu trúc phân tử:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {shapes.map(s => {
            const isSelected = selectedShape === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedShape(s.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold text-left transition-all border flex flex-col justify-between gap-1 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/40 ring-2 ring-indigo-400/40 scale-[1.02]'
                    : 'bg-slate-800/90 text-slate-300 border-slate-700/80 hover:bg-slate-700 hover:text-white hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-indigo-800/80 text-indigo-100' : 'bg-slate-900 text-indigo-300'}`}>
                    {s.formulaType}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-200" />}
                </div>
                <span className="text-[11px] font-semibold truncate">
                  {s.name.split('(')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Canvas & Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-950/70 p-5 rounded-2xl border border-slate-800">
        {/* SVG Diagram */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-900/90 rounded-xl border border-slate-800 relative">
          <div className="absolute top-2 left-2 text-[10px] font-mono uppercase text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">
            Dạng: {current.formulaType}
          </div>
          {current.svg}
          <div className="mt-2 text-center text-xs text-amber-300 font-medium">
            Góc liên kết thực nghiệm: <strong>{current.angles}</strong>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="md:col-span-7 space-y-3">
          <div className="flex items-baseline justify-between border-b border-slate-800 pb-2">
            <h4 className="text-lg font-bold text-white">{current.name}</h4>
            <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded">
              Lai hóa {current.hybridization}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs">
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Cặp e liên kết (X):</span>
              <strong className="text-indigo-300 font-bold">{current.bondingPairs}</strong>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Cặp e tự do (E):</span>
              <strong className="text-amber-300 font-bold">{current.lonePairs}</strong>
            </div>
            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[10px]">Ví dụ điển hình:</span>
              <strong className="text-emerald-300 font-bold">{current.examples}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 2. NUCLEAR RADIATION & DECAY DIAGRAMS
// ==========================================
export const NuclearRadiationVisualizer: React.FC = () => {
  const [halfLivesElapsed, setHalfLivesElapsed] = useState<number>(1);

  const initialAtoms = 100;
  const remainingFraction = Math.pow(0.5, halfLivesElapsed);
  const remainingPercentage = (remainingFraction * 100).toFixed(1);
  const decayedPercentage = (100 - parseFloat(remainingPercentage)).toFixed(1);

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
          <Radiation className="w-5 h-5 text-emerald-400" />
          Sơ Đồ Đâm Xuyên Tia Phóng Xạ & Đường Cong Phân Rã Hạt Nhân
        </div>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
          Mô hình chuẩn vật lý hạt nhân
        </span>
      </div>

      {/* Penetration Diagram SVG */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          1. Khả năng đâm xuyên qua các vật chắn của 3 loại tia phóng xạ:
        </span>
        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 overflow-x-auto">
          <svg viewBox="0 0 600 160" className="w-full min-w-[500px] h-40">
            {/* Barriers */}
            {/* Barrier 1: Paper */}
            <rect x="180" y="20" width="12" height="120" fill="#f8fafc" rx="2" />
            <text x="186" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10">Tờ giấy mỏng</text>

            {/* Barrier 2: Aluminum */}
            <rect x="340" y="20" width="20" height="120" fill="#94a3b8" rx="2" />
            <text x="350" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10">Tấm Nhôm (vài mm)</text>

            {/* Barrier 3: Lead */}
            <rect x="490" y="20" width="40" height="120" fill="#475569" rx="2" />
            <text x="510" y="152" textAnchor="middle" fill="#94a3b8" fontSize="10">Khối Chì / Bê tông</text>

            {/* Ray Alpha */}
            <path d="M 20 45 L 180 45" stroke="#ef4444" strokeWidth="4" />
            <circle cx="180" cy="45" r="5" fill="#ef4444" />
            <text x="25" y="38" fill="#f87171" fontSize="11" fontWeight="bold">Tia α (Hạt ⁴₂He, mang điện +2) → Bị chặn bởi giấy</text>

            {/* Ray Beta */}
            <path d="M 20 80 L 340 80" stroke="#3b82f6" strokeWidth="3" />
            <circle cx="340" cy="80" r="4" fill="#3b82f6" />
            <text x="25" y="73" fill="#60a5fa" fontSize="11" fontWeight="bold">Tia β (Hạt e⁻ hoặc e⁺, tốc độ cao) → Bị chặn bởi nhôm</text>

            {/* Ray Gamma */}
            <path d="M 20 115 Q 60 108 100 115 T 180 115 T 260 115 T 340 115 T 420 115 T 495 115" fill="none" stroke="#eab308" strokeWidth="2.5" />
            <text x="25" y="108" fill="#facc15" fontSize="11" fontWeight="bold">Tia γ (Sóng điện từ photon năng lượng cực cao) → Chỉ cản bởi chì dày</text>
          </svg>
        </div>
      </div>

      {/* Interactive Half-Life Decay Curve */}
      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-300">
            2. Thí nghiệm trực quan định luật phân rã: <span className="text-emerald-400 font-mono">N(t) = N₀ · (1/2)^(t / t₁/₂)</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Số chu kì bán rã (n = t / t₁/₂):</span>
            <span className="px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-700 text-emerald-400 font-mono font-bold text-sm">
              n = {halfLivesElapsed}
            </span>
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-1">
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={halfLivesElapsed}
            onChange={(e) => setHalfLivesElapsed(parseInt(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-mono">
            <span>0 (Ban đầu)</span>
            <span>1 (50%)</span>
            <span>2 (25%)</span>
            <span>3 (12.5%)</span>
            <span>4 (6.25%)</span>
            <span>5 (3.125%)</span>
          </div>
        </div>

        {/* Visual Progress Fraction Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-slate-400 text-xs block">Lượng hạt nhân còn lại:</span>
            <div className="text-xl font-extrabold text-emerald-400 mt-1">{remainingPercentage}%</div>
            <span className="text-[11px] text-slate-500 font-mono">({remainingFraction.toFixed(4)} N₀)</span>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-slate-400 text-xs block">Lượng đã phân rã thành chất khác:</span>
            <div className="text-xl font-extrabold text-rose-400 mt-1">{decayedPercentage}%</div>
            <span className="text-[11px] text-slate-500 font-mono">(ΔN = N₀ - N)</span>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center flex flex-col justify-center">
            <span className="text-slate-400 text-xs block">Ứng dụng thực tế:</span>
            <span className="text-xs font-bold text-amber-300 mt-1">Định tuổi khảo cổ ¹⁴C & Chuẩn đoán PET y học</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. ARRHENIUS ACTIVATION ENERGY DIAGRAM
// ==========================================
export const ArrheniusEnergyProfileVisualizer: React.FC = () => {
  const [hasCatalyst, setHasCatalyst] = useState<boolean>(false);
  const [temperature, setTemperature] = useState<'low' | 'high'>('low');

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
          <Zap className="w-5 h-5 text-amber-400" />
          Giản Đồ Năng Lượng Hoạt Hóa Arrhenius & Cơ Chế Xúc Tác
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHasCatalyst(!hasCatalyst)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border cursor-pointer ${
              hasCatalyst
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/40 ring-2 ring-emerald-400/30'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${hasCatalyst ? 'text-amber-300 animate-spin' : 'text-slate-400'}`} style={{ animationDuration: '6s' }} />
            <span>{hasCatalyst ? '✓ Đang có Chất Xúc Tác (Ea giảm)' : '+ Bật Thêm Chất Xúc Tác'}</span>
          </button>
        </div>
      </div>

      {/* Energy Profile SVG */}
      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
        <svg viewBox="0 0 540 220" className="w-full h-52">
          {/* Axes */}
          <line x1="40" y1="200" x2="500" y2="200" stroke="#64748b" strokeWidth="2" />
          <line x1="40" y1="200" x2="40" y2="20" stroke="#64748b" strokeWidth="2" />
          <text x="500" y="215" textAnchor="end" fill="#94a3b8" fontSize="10">Tiến trình phản ứng (Reaction Coordinate)</text>
          <text x="35" y="18" textAnchor="start" fill="#94a3b8" fontSize="10">Năng lượng E (kJ/mol)</text>

          {/* Reactants plateau */}
          <line x1="40" y1="140" x2="110" y2="140" stroke="#3b82f6" strokeWidth="4" />
          <text x="60" y="132" fill="#60a5fa" fontSize="11" fontWeight="bold">Chất phản ứng (A + B)</text>

          {/* Products plateau */}
          <line x1="430" y1="170" x2="490" y2="170" stroke="#10b981" strokeWidth="4" />
          <text x="435" y="162" fill="#34d399" fontSize="11" fontWeight="bold">Sản phẩm (C + D)</text>

          {/* Delta H arrow */}
          <line x1="460" y1="140" x2="460" y2="170" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
          <text x="470" y="158" fill="#fb7185" fontSize="10" fontWeight="bold">ΔH &lt; 0 (Tỏa nhiệt)</text>

          {/* Uncatalyzed curve */}
          <path
            d="M 110 140 C 180 140, 210 40, 270 40 C 330 40, 370 170, 430 170"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3.5"
          />
          <circle cx="270" cy="40" r="5" fill="#ef4444" />
          <text x="270" y="30" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">
            Trạng thái chuyển tiếp [A···B]‡ (Ea = 90 kJ/mol)
          </text>

          {/* Catalyzed curve if enabled */}
          {hasCatalyst && (
            <>
              <path
                d="M 110 140 C 180 140, 210 90, 270 90 C 330 90, 370 170, 430 170"
                fill="none"
                stroke="#10b981"
                strokeWidth="3.5"
                strokeDasharray="5 3"
              />
              <circle cx="270" cy="90" r="5" fill="#10b981" />
              <text x="270" y="82" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
                Có xúc tác: Con đường mới (Ea' = 50 kJ/mol)
              </text>
            </>
          )}

          {/* Ea Height Annotations */}
          <line x1="270" y1="140" x2="270" y2={hasCatalyst ? 90 : 40} stroke="#f59e0b" strokeWidth="2" strokeDasharray="2 2" />
          <text x="280" y="120" fill="#fbbf24" fontSize="11" fontWeight="bold">
            {hasCatalyst ? "Ea' (Thấp hơn)" : "Ea (Hàng rào cao)"}
          </text>
        </svg>

        <div className="mt-3 p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Phương trình Arrhenius:</strong> <code className="text-amber-300 font-mono">k = A · e^(-Ea / RT)</code>
            <div className="text-slate-400 mt-1 text-xs">
              Khi có chất xúc tác, <strong>Ea giảm xuống</strong> → Số mũ âm nhỏ đi → Hằng số tốc độ <strong>k tăng vọt</strong> hàng nghìn đến hàng triệu lần! Nhiệt động học (ΔH) hoàn toàn <strong>không đổi</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 4. GIBBS FREE ENERGY THERMODYNAMIC COMPASS
// ==========================================
export const ThermodynamicGibbsVisualizer: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const thermoCases = [
    {
      id: 0,
      title: 'Trường hợp 1: Luôn tự phát (Mọi nhiệt độ T)',
      deltaH: '< 0 (Tỏa nhiệt)',
      deltaS: '> 0 (Tăng hỗn loạn)',
      deltaG: '< 0 ở mọi nhiệt độ T',
      badge: 'Luôn tự phát',
      color: '#10b981',
      example: 'Đốt cháy củi/than, phân hủy thuốc nổ: C(s) + O₂(g) → CO₂(g)',
      explanation: 'Vừa tỏa nhiệt làm giảm thế năng (ΔH < 0), vừa tăng độ hỗn loạn (ΔS > 0) nên ΔG = ΔH - T·ΔS chắc chắn luôn luôn âm!'
    },
    {
      id: 1,
      title: 'Trường hợp 2: Không bao giờ tự phát',
      deltaH: '> 0 (Thu nhiệt)',
      deltaS: '< 0 (Giảm hỗn loạn)',
      deltaG: '> 0 ở mọi nhiệt độ T',
      badge: 'Không tự phát',
      color: '#ef4444',
      example: 'Tự động tách CO₂ thành C và O₂ ở điều kiện thường',
      explanation: 'Vừa bắt thu nhiệt (ΔH > 0), vừa làm hạt trật tự hơn (ΔS < 0) khiến -T·ΔS dương → ΔG luôn dương ở mọi nhiệt độ.'
    },
    {
      id: 2,
      title: 'Trường hợp 3: Tự phát ở nhiệt độ THẤP',
      deltaH: '< 0 (Tỏa nhiệt)',
      deltaS: '< 0 (Giảm hỗn loạn)',
      deltaG: '< 0 khi T < ΔH/ΔS',
      badge: 'Tự phát khi T thấp',
      color: '#3b82f6',
      example: 'Nước đóng băng thành đá ở T < 0°C (273 K)',
      explanation: 'Khi T thấp, số hạng tỏa nhiệt ΔH < 0 chiếm ưu thế áp đảo nên ΔG < 0. Khi T cao, số hạng -T·ΔS dương sẽ làm ΔG > 0.'
    },
    {
      id: 3,
      title: 'Trường hợp 4: Tự phát ở nhiệt độ CAO',
      deltaH: '> 0 (Thu nhiệt)',
      deltaS: '> 0 (Tăng hỗn loạn)',
      deltaG: '< 0 khi T > ΔH/ΔS',
      badge: 'Tự phát khi T cao',
      color: '#f59e0b',
      example: 'Nung vôi sống: CaCO₃(s) → CaO(s) + CO₂(g) ở T > 900°C',
      explanation: 'Ở nhiệt độ phòng không nung vôi được (ΔG > 0), nhưng khi nung nóng tới nhiệt độ cao, đại lượng T·ΔS đủ lớn để kéo ΔG < 0!'
    }
  ];

  const current = thermoCases[selectedCase];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
          <Compass className="w-5 h-5 text-rose-400" />
          La Bàn Nhiệt Động Học: Dự Đoán Chiều Tự Phát Theo Gibbs (ΔG)
        </div>
        <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-400/30">
          Công thức cốt lõi: ΔG = ΔH - T·ΔS
        </span>
      </div>

      {/* 4 Quadrants Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {thermoCases.map(c => {
          const isSelected = selectedCase === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCase(c.id)}
              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                isSelected
                  ? 'bg-slate-800 border-rose-500 shadow-md shadow-rose-500/20 ring-2 ring-rose-500/30 scale-[1.02]'
                  : 'bg-slate-950/80 border-slate-800 hover:bg-slate-800/80 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-bold" style={{ color: c.color }}>{c.badge}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                ΔH {c.deltaH.split(' ')[0]}, ΔS {c.deltaS.split(' ')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Case Display */}
      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: current.color }}></span>
            {current.title}
          </h4>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-900 border border-slate-800" style={{ color: current.color }}>
            {current.deltaG}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-slate-400">Dấu các đại lượng:</span>
            <div className="text-xs space-y-1">
              <div>• Biến thiên Enthalpy: <strong className="text-white font-mono">{current.deltaH}</strong></div>
              <div>• Biến thiên Entropy: <strong className="text-white font-mono">{current.deltaS}</strong></div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-slate-400">Ví dụ minh họa thực tiễn:</span>
            <p className="text-xs text-amber-300 font-medium">
              {current.example}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          💡 <strong>Giải thích bản chất:</strong> {current.explanation}
        </p>
      </div>
    </div>
  );
};
