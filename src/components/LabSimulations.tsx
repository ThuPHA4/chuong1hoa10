import React, { useState, useEffect, useRef } from 'react';
import { 
  Atom, 
  Radiation, 
  Zap, 
  Compass, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Info,
  Sliders,
  Eye,
  EyeOff
} from 'lucide-react';

interface LabProps {
  initialTab?: 'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs';
}

export const LabSimulations: React.FC<LabProps> = ({ initialTab = 'vsepr' }) => {
  const [activeTab, setActiveTab] = useState<'vsepr' | 'nuclear' | 'arrhenius' | 'gibbs'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium text-xs md:text-sm mb-3">
          <Sparkles className="w-4 h-4" />
          Phòng Thí Nghiệm & Mô Phỏng Tương Tác Chuyên Đề 1
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Khám Phá Bản Chất Hóa Học Qua Mô Hình Trực Quan
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Tương tác trực tiếp với các mô hình phân tử 3D, phân rã hạt nhân, giản đồ năng lượng hoạt hóa và cân bằng nhiệt động Gibbs.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-200/70 border border-slate-300/60 p-1.5 rounded-2xl max-w-4xl mx-auto">
        <button
          onClick={() => setActiveTab('vsepr')}
          className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer border ${
            activeTab === 'vsepr'
              ? 'bg-white text-indigo-700 border-indigo-200 shadow-sm ring-2 ring-indigo-500/20'
              : 'bg-transparent border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Atom className="w-4 h-4 text-indigo-600" />
          1. VSEPR 3D
        </button>
        <button
          onClick={() => setActiveTab('nuclear')}
          className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer border ${
            activeTab === 'nuclear'
              ? 'bg-white text-emerald-700 border-emerald-200 shadow-sm ring-2 ring-emerald-500/20'
              : 'bg-transparent border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Radiation className="w-4 h-4 text-emerald-600" />
          2. Bán Rã Hạt Nhân
        </button>
        <button
          onClick={() => setActiveTab('arrhenius')}
          className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer border ${
            activeTab === 'arrhenius'
              ? 'bg-white text-amber-700 border-amber-200 shadow-sm ring-2 ring-amber-500/20'
              : 'bg-transparent border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-600" />
          3. Năng Lượng Ea
        </button>
        <button
          onClick={() => setActiveTab('gibbs')}
          className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer border ${
            activeTab === 'gibbs'
              ? 'bg-white text-rose-700 border-rose-200 shadow-sm ring-2 ring-rose-500/20'
              : 'bg-transparent border-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Compass className="w-4 h-4 text-rose-600" />
          4. Nhiệt Động Gibbs
        </button>
      </div>

      {/* Tab Panels */}
      {activeTab === 'vsepr' && <VseprSimulation />}
      {activeTab === 'nuclear' && <NuclearSimulation />}
      {activeTab === 'arrhenius' && <ArrheniusSimulation />}
      {activeTab === 'gibbs' && <GibbsSimulation />}
    </div>
  );
};

/* =========================================================================
   1. VSEPR & HYBRIDIZATION 3D SIMULATION
   ========================================================================= */
interface MoleculePreset {
  name: string;
  formula: string;
  vsepr: string;
  geometry: string;
  angle: string;
  hybridization: string;
  polarity: 'Không phân cực' | 'Phân cực';
  centralAtom: string;
  surroundingAtoms: string[];
  bondingPairs: number;
  lonePairs: number;
  description: string;
  lewisNote: string;
  // 3D coordinates for visualization
  positions: { x: number; y: number; z: number; element: string; isLonePair?: boolean }[];
}

const MOLECULES: MoleculePreset[] = [
  {
    name: 'Carbon dioxide',
    formula: 'CO₂',
    vsepr: 'AX₂',
    geometry: 'Đường thẳng (Linear)',
    angle: '180°',
    hybridization: 'sp',
    polarity: 'Không phân cực',
    centralAtom: 'C',
    surroundingAtoms: ['O', 'O'],
    bondingPairs: 2,
    lonePairs: 0,
    description: 'Nguyên tử C trung tâm liên kết với 2 nguyên tử O qua liên kết đôi (O=C=O) và không còn cặp electron tự do. Lực đẩy cực đại tạo thành đường thẳng 180° đối xứng cao.',
    lewisNote: 'O = C = O (C có 0 cặp e riêng, O có 2 cặp e riêng mỗi bên)',
    positions: [
      { x: 0, y: 0, z: 0, element: 'C' },
      { x: -110, y: 0, z: 0, element: 'O' },
      { x: 110, y: 0, z: 0, element: 'O' }
    ]
  },
  {
    name: 'Sulfur dioxide',
    formula: 'SO₂',
    vsepr: 'AX₂E₁',
    geometry: 'Hình chữ V / Gấp khúc (Bent)',
    angle: '< 120° (~119°)',
    hybridization: 'sp²',
    polarity: 'Phân cực',
    centralAtom: 'S',
    surroundingAtoms: ['O', 'O'],
    bondingPairs: 2,
    lonePairs: 1,
    description: 'Nguyên tử S trung tâm liên kết với 2 nguyên tử O và còn 1 cặp electron tự do. Cặp e tự do chiếm không gian lớn, đẩy 2 liên kết S-O gập lại góc < 120°.',
    lewisNote: 'O = S = O với 1 cặp electron riêng trên nguyên tử S',
    positions: [
      { x: 0, y: 20, z: 0, element: 'S' },
      { x: -90, y: -70, z: 0, element: 'O' },
      { x: 90, y: -70, z: 0, element: 'O' },
      { x: 0, y: 90, z: 0, element: 'E', isLonePair: true }
    ]
  },
  {
    name: 'Boron trifluoride',
    formula: 'BF₃',
    vsepr: 'AX₃',
    geometry: 'Tam giác phẳng (Trigonal planar)',
    angle: '120°',
    hybridization: 'sp²',
    polarity: 'Không phân cực',
    centralAtom: 'B',
    surroundingAtoms: ['F', 'F', 'F'],
    bondingPairs: 3,
    lonePairs: 0,
    description: 'Nguyên tử Boron (nhóm IIIA) tạo 3 liên kết đơn với 3 nguyên tử F, không còn cặp e riêng. 3 liên kết đẩy đều nhau tạo thành tam giác phẳng góc 120°.',
    lewisNote: 'B ở giữa liên kết 3 F xung quanh, B không có cặp e riêng',
    positions: [
      { x: 0, y: 0, z: 0, element: 'B' },
      { x: 0, y: 100, z: 0, element: 'F' },
      { x: 86.6, y: -50, z: 0, element: 'F' },
      { x: -86.6, y: -50, z: 0, element: 'F' }
    ]
  },
  {
    name: 'Methane',
    formula: 'CH₄',
    vsepr: 'AX₄',
    geometry: 'Tứ diện đều (Tetrahedral)',
    angle: '109,5°',
    hybridization: 'sp³',
    polarity: 'Không phân cực',
    centralAtom: 'C',
    surroundingAtoms: ['H', 'H', 'H', 'H'],
    bondingPairs: 4,
    lonePairs: 0,
    description: 'Nguyên tử C lai hóa sp³ tạo 4 orbital hướng về 4 đỉnh của tứ diện đều, liên kết với 4 nguyên tử H tạo góc 109,5°. Cấu trúc không gian hoàn toàn đối xứng.',
    lewisNote: 'C ở trung tâm liên kết với 4 H qua 4 liên kết đơn',
    positions: [
      { x: 0, y: 0, z: 0, element: 'C' },
      { x: 0, y: 95, z: 0, element: 'H' },
      { x: 90, y: -30, z: 25, element: 'H' },
      { x: -45, y: -30, z: 80, element: 'H' },
      { x: -45, y: -30, z: -80, element: 'H' }
    ]
  },
  {
    name: 'Ammonia',
    formula: 'NH₃',
    vsepr: 'AX₃E₁',
    geometry: 'Chóp tam giác (Trigonal pyramidal)',
    angle: '< 109,5° (~107°)',
    hybridization: 'sp³',
    polarity: 'Phân cực',
    centralAtom: 'N',
    surroundingAtoms: ['H', 'H', 'H'],
    bondingPairs: 3,
    lonePairs: 1,
    description: 'Nguyên tử N lai hóa sp³ có 3 liên kết N-H và 1 cặp electron tự do ở đỉnh chóp. Cặp e riêng đẩy mạnh hơn cặp e liên kết làm góc H-N-H co lại còn 107°.',
    lewisNote: 'N ở giữa mang 1 cặp e riêng :N(H)₃',
    positions: [
      { x: 0, y: -20, z: 0, element: 'N' },
      { x: 80, y: -65, z: 25, element: 'H' },
      { x: -40, y: -65, z: 75, element: 'H' },
      { x: -40, y: -65, z: -75, element: 'H' },
      { x: 0, y: 75, z: 0, element: 'E', isLonePair: true }
    ]
  },
  {
    name: 'Nước (Water)',
    formula: 'H₂O',
    vsepr: 'AX₂E₂',
    geometry: 'Hình chữ V / Gấp khúc (Bent)',
    angle: '< 109,5° (~104,5°)',
    hybridization: 'sp³',
    polarity: 'Phân cực',
    centralAtom: 'O',
    surroundingAtoms: ['H', 'H'],
    bondingPairs: 2,
    lonePairs: 2,
    description: 'Nguyên tử O có 2 liên kết O-H và 2 cặp electron tự do. Hai cặp e tự do này tạo lực đẩy rất mạnh khiến góc liên kết H-O-H bị ép nhỏ xuống còn 104,5°.',
    lewisNote: 'H — Ö — H (O có 2 cặp e riêng ở trên và dưới)',
    positions: [
      { x: 0, y: 0, z: 0, element: 'O' },
      { x: -75, y: -55, z: 0, element: 'H' },
      { x: 75, y: -55, z: 0, element: 'H' },
      { x: -50, y: 65, z: 30, element: 'E', isLonePair: true },
      { x: 50, y: 65, z: -30, element: 'E', isLonePair: true }
    ]
  },
  {
    name: 'Beryllium difluoride',
    formula: 'BeF₂',
    vsepr: 'AX₂',
    geometry: 'Đường thẳng (Linear)',
    angle: '180°',
    hybridization: 'sp',
    polarity: 'Không phân cực',
    centralAtom: 'Be',
    surroundingAtoms: ['F', 'F'],
    bondingPairs: 2,
    lonePairs: 0,
    description: 'Nguyên tử Beryllium (Be) lai hóa sp tạo 2 liên kết Be-F hướng thẳng hàng về hai phía tạo góc 180°.',
    lewisNote: 'F — Be — F (Be có 2 e hóa trị, không có e riêng)',
    positions: [
      { x: 0, y: 0, z: 0, element: 'Be' },
      { x: -110, y: 0, z: 0, element: 'F' },
      { x: 110, y: 0, z: 0, element: 'F' }
    ]
  },
  {
    name: 'Phosphorus trichloride',
    formula: 'PCl₃',
    vsepr: 'AX₃E₁',
    geometry: 'Chóp tam giác (Trigonal pyramidal)',
    angle: '< 109,5° (~100°)',
    hybridization: 'sp³',
    polarity: 'Phân cực',
    centralAtom: 'P',
    surroundingAtoms: ['Cl', 'Cl', 'Cl'],
    bondingPairs: 3,
    lonePairs: 1,
    description: 'P có 5 e hóa trị: 3 e tạo liên kết với 3 Cl và 1 cặp e riêng. Cấu trúc hình chóp tam giác tương tự NH₃.',
    lewisNote: ':P(Cl)₃ với 1 cặp e riêng trên P và 3 cặp e riêng trên mỗi Cl',
    positions: [
      { x: 0, y: -20, z: 0, element: 'P' },
      { x: 90, y: -70, z: 30, element: 'Cl' },
      { x: -45, y: -70, z: 80, element: 'Cl' },
      { x: -45, y: -70, z: -80, element: 'Cl' },
      { x: 0, y: 75, z: 0, element: 'E', isLonePair: true }
    ]
  }
];

const VseprSimulation: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [showLonePairs, setShowLonePairs] = useState(true);
  const [rotX, setRotX] = useState(15);
  const [rotY, setRotY] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const currentMol = MOLECULES[selectedIdx];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMousePos.x;
    const dy = e.clientY - lastMousePos.y;
    setRotY(prev => (prev + dx * 0.8) % 360);
    setRotX(prev => Math.max(-80, Math.min(80, prev - dy * 0.8)));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 3D rotation projection math
  const radX = (rotX * Math.PI) / 180;
  const radY = (rotY * Math.PI) / 180;

  const project3D = (p: { x: number; y: number; z: number }) => {
    // Rotate Y
    const x1 = p.x * Math.cos(radY) + p.z * Math.sin(radY);
    const y1 = p.y;
    const z1 = -p.x * Math.sin(radY) + p.z * Math.cos(radY);

    // Rotate X
    const x2 = x1;
    const y2 = y1 * Math.cos(radX) - z1 * Math.sin(radX);
    const z2 = y1 * Math.sin(radX) + z1 * Math.cos(radX);

    // Perspective scale
    const perspective = 300;
    const scale = perspective / (perspective + z2);

    return {
      screenX: 200 + x2 * scale,
      screenY: 160 - y2 * scale,
      depth: z2,
      scale
    };
  };

  const getElementColor = (el: string) => {
    switch (el) {
      case 'C': return { fill: '#334155', text: '#fff', radius: 24, name: 'Carbon' };
      case 'O': return { fill: '#ef4444', text: '#fff', radius: 22, name: 'Oxygen' };
      case 'H': return { fill: '#93c5fd', text: '#1e3a8a', radius: 15, name: 'Hydrogen' };
      case 'N': return { fill: '#3b82f6', text: '#fff', radius: 22, name: 'Nitrogen' };
      case 'B': return { fill: '#f59e0b', text: '#fff', radius: 22, name: 'Boron' };
      case 'F': return { fill: '#10b981', text: '#fff', radius: 20, name: 'Fluorine' };
      case 'P': return { fill: '#f97316', text: '#fff', radius: 24, name: 'Phosphorus' };
      case 'S': return { fill: '#eab308', text: '#000', radius: 24, name: 'Sulfur' };
      case 'Cl': return { fill: '#22c55e', text: '#fff', radius: 22, name: 'Chlorine' };
      case 'Be': return { fill: '#06b6d4', text: '#fff', radius: 20, name: 'Beryllium' };
      case 'E': return { fill: '#a855f7', text: '#fff', radius: 16, name: 'Cặp e riêng' };
      default: return { fill: '#64748b', text: '#fff', radius: 20, name: el };
    }
  };

  const centralProjected = project3D(currentMol.positions[0]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Selector & 3D Canvas */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-slate-700">Chọn phân tử mẫu:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLonePairs(!showLonePairs)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg border transition-all ${
                  showLonePairs ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-slate-50 text-slate-500 border-slate-200'
                }`}
              >
                {showLonePairs ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                {showLonePairs ? 'Ẩn cặp e riêng' : 'Hiện cặp e riêng'}
              </button>
              <button
                onClick={() => { setRotX(15); setRotY(30); }}
                className="p-1 text-slate-500 hover:text-slate-800 rounded-md border border-slate-200 bg-slate-50"
                title="Đặt lại góc xoay"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Molecule pill buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {MOLECULES.map((m, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={m.formula}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm ring-2 ring-indigo-500/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="font-bold">{m.formula}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-200 text-slate-600'}`}>
                    {m.vsepr}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3D Visualizer Canvas Box */}
          <div 
            className="relative w-full h-80 bg-slate-900 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing border border-slate-800 select-none flex items-center justify-center shadow-inner"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="absolute top-3 left-3 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md backdrop-blur">
              Kéo chuột để xoay phân tử 360°
            </div>

            <svg className="w-full h-full" viewBox="0 0 400 320">
              <defs>
                <radialGradient id="lonePairGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.1" />
                </radialGradient>
              </defs>

              {/* Render bonds from central atom to other atoms */}
              {currentMol.positions.slice(1).map((pos, idx) => {
                if (pos.isLonePair && !showLonePairs) return null;
                const p = project3D(pos);
                return (
                  <line
                    key={`bond-${idx}`}
                    x1={centralProjected.screenX}
                    y1={centralProjected.screenY}
                    x2={p.screenX}
                    y2={p.screenY}
                    stroke={pos.isLonePair ? '#a855f7' : '#94a3b8'}
                    strokeWidth={pos.isLonePair ? 2 : 4}
                    strokeDasharray={pos.isLonePair ? '4 4' : undefined}
                  />
                );
              })}

              {/* Render atoms sorted by depth (painter's algorithm) */}
              {currentMol.positions
                .map((pos, i) => ({ pos, origIdx: i, proj: project3D(pos) }))
                .filter(item => !item.pos.isLonePair || showLonePairs)
                .sort((a, b) => a.proj.depth - b.proj.depth)
                .map(({ pos, origIdx, proj }) => {
                  const info = getElementColor(pos.element);
                  const r = info.radius * proj.scale;

                  if (pos.isLonePair) {
                    return (
                      <g key={`atom-${origIdx}`}>
                        <circle
                          cx={proj.screenX}
                          cy={proj.screenY}
                          r={r * 1.3}
                          fill="url(#lonePairGlow)"
                        />
                        <circle
                          cx={proj.screenX}
                          cy={proj.screenY}
                          r={r * 0.7}
                          fill="#a855f7"
                        />
                        <text
                          x={proj.screenX}
                          y={proj.screenY + 4}
                          textAnchor="middle"
                          fill="#fff"
                          fontSize="10"
                          fontWeight="bold"
                        >
                          ••
                        </text>
                      </g>
                    );
                  }

                  return (
                    <g key={`atom-${origIdx}`}>
                      <circle
                        cx={proj.screenX}
                        cy={proj.screenY}
                        r={r}
                        fill={info.fill}
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="drop-shadow-md"
                      />
                      <text
                        x={proj.screenX}
                        y={proj.screenY + 5}
                        textAnchor="middle"
                        fill={info.text}
                        fontSize={r * 0.8}
                        fontWeight="bold"
                      >
                        {pos.element}
                      </text>
                    </g>
                  );
                })}
            </svg>

            {/* Molecule tag badge */}
            <div className="absolute bottom-3 right-3 bg-slate-800/90 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="font-semibold">{currentMol.name}</span> ({currentMol.formula})
            </div>
          </div>
        </div>

        {/* Right: Technical Chemistry Data Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800">{currentMol.formula} - {currentMol.name}</h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                  Dạng VSEPR: {currentMol.vsepr}
                </span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                currentMol.polarity === 'Không phân cực'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}>
                {currentMol.polarity}
              </span>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4 text-xs md:text-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-xs">Hình học phân tử:</span>
                <span className="font-bold text-slate-800">{currentMol.geometry}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-xs">Góc liên kết thực tế:</span>
                <span className="font-bold text-indigo-600">{currentMol.angle}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-xs">Trạng thái lai hóa:</span>
                <span className="font-bold text-purple-600">{currentMol.hybridization}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-xs">Cặp e liên kết / riêng:</span>
                <span className="font-bold text-slate-800">{currentMol.bondingPairs} liên kết | {currentMol.lonePairs} riêng</span>
              </div>
            </div>

            {/* Lewis Formula Note */}
            <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 text-xs mb-3">
              <span className="font-semibold text-indigo-900 block mb-1">Công thức Lewis tóm lược:</span>
              <p className="text-indigo-800 font-mono">{currentMol.lewisNote}</p>
            </div>

            {/* Scientific Explanation */}
            <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="font-semibold text-slate-800 block mb-1">Giải thích theo VSEPR & Lai hóa:</span>
              {currentMol.description}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   2. NUCLEAR DECAY & HALF-LIFE SIMULATION
   ========================================================================= */
const ISOTOPES = [
  { id: 'C14', name: 'Carbon-14 (¹⁴C)', halflife: 5730, unit: 'năm', type: 'β⁻', product: '¹⁴₇N', app: 'Xác định niên đại cổ vật dưới 75.000 năm' },
  { id: 'Sr90', name: 'Strontium-90 (⁹⁰Sr)', halflife: 28, unit: 'năm', type: 'β⁻', product: '⁹⁰₃₉Y', app: 'Nhiên liệu hạt nhân và y học' },
  { id: 'I131', name: 'Iodine-131 (¹³¹I)', halflife: 8, unit: 'ngày', type: 'β⁻, γ', product: '¹³¹₅₄Xe', app: 'Điều trị ung thư tuyến giáp trong y học' },
  { id: 'U238', name: 'Uranium-238 (²³⁸U)', halflife: 4.5, unit: 'tỉ năm', type: 'α', product: '²³⁴₉₀Th', app: 'Xác định tuổi các mẫu đất đá địa chất' }
];

const NuclearSimulation: React.FC = () => {
  const [isoIdx, setIsoIdx] = useState(0);
  const [initialAmount, setInitialAmount] = useState(100);
  const [halfLivesElapsed, setHalfLivesElapsed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const iso = ISOTOPES[isoIdx];

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setHalfLivesElapsed(prev => {
          if (prev >= 6) {
            setIsPlaying(false);
            return 6;
          }
          return Number((prev + 0.1).toFixed(1));
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const remainingFraction = Math.pow(0.5, halfLivesElapsed);
  const remainingMass = initialAmount * remainingFraction;
  const decayedMass = initialAmount - remainingMass;
  const timeElapsed = halfLivesElapsed * iso.halflife;

  // Grid of 100 atoms
  const remainingAtomsCount = Math.round(100 * remainingFraction);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Controls & Particle Visualizer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm font-semibold text-slate-700">Chọn đồng vị phóng xạ:</span>
            <div className="flex flex-wrap gap-2">
              {ISOTOPES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => { setIsoIdx(idx); setHalfLivesElapsed(1); }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isoIdx === idx
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Atom Visualizer Box (100 atoms) */}
          <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-emerald-400"></span>
                <span>Hạt nhân mẹ ({iso.name}): <strong className="text-white">{remainingAtomsCount}%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-slate-600"></span>
                <span>Hạt nhân con ({iso.product}): <strong className="text-slate-400">{100 - remainingAtomsCount}%</strong></span>
              </div>
            </div>

            {/* 10x10 particle grid */}
            <div className="grid grid-cols-10 gap-2 p-3 bg-slate-950/60 rounded-xl">
              {Array.from({ length: 100 }).map((_, i) => {
                const isAlive = i < remainingAtomsCount;
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-full transition-all duration-300 ${
                      isAlive 
                        ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' 
                        : 'bg-slate-700 opacity-40 scale-75'
                    }`}
                  />
                );
              })}
            </div>

            {/* Control timeline bar */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  isPlaying ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'Tạm dừng' : 'Chạy phân rã'}
              </button>

              <button
                onClick={() => { setHalfLivesElapsed(0); setIsPlaying(false); }}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Đặt lại ban đầu
              </button>
            </div>
          </div>

          {/* Sliders for time and mass */}
          <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Số chu kì bán rã (k = t / T):</span>
                <span className="text-emerald-700 font-bold">{halfLivesElapsed} chu kì (t = {timeElapsed.toLocaleString()} {iso.unit})</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                step="0.1"
                value={halfLivesElapsed}
                onChange={e => { setHalfLivesElapsed(parseFloat(e.target.value)); setIsPlaying(false); }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Khối lượng ban đầu (m₀):</span>
                <span className="text-slate-800 font-bold">{initialAmount} gam</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={initialAmount}
                onChange={e => setInitialAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Quantitative Calculations Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Số liệu định lượng</span>
              <h3 className="text-xl font-bold text-slate-800 mt-1">{iso.name}</h3>
              <p className="text-xs text-slate-500">Chu kì bán rã T = {iso.halflife} {iso.unit} | Bức xạ: {iso.type}</p>
            </div>

            {/* Calculations display */}
            <div className="space-y-3">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-sm">
                <span className="text-xs text-emerald-700 block font-semibold">Khối lượng còn lại:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-black text-emerald-900">{remainingMass.toFixed(2)} g</span>
                  <span className="text-xs text-emerald-700 font-medium">({(remainingFraction * 100).toFixed(2)}%)</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm">
                <span className="text-xs text-slate-500 block font-semibold">Lượng đã phân rã (biến thành {iso.product}):</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl font-bold text-slate-700">{decayedMass.toFixed(2)} g</span>
                  <span className="text-xs text-slate-500 font-medium">({((1 - remainingFraction) * 100).toFixed(2)}%)</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <span className="font-semibold text-slate-800 block">Phương trình định luật phóng xạ:</span>
                <p className="font-mono text-slate-700 bg-white p-2 rounded border border-slate-200">
                  m(t) = m₀ × (1/2)^(t/T) = {initialAmount} × (1/2)^({halfLivesElapsed}) = {remainingMass.toFixed(2)} g
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900">
                <span className="font-bold block mb-1">💡 Ứng dụng thực tiễn của {iso.name}:</span>
                {iso.app}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   3. ARRHENIUS & ACTIVATION ENERGY (Ea) SIMULATION
   ========================================================================= */
const ArrheniusSimulation: React.FC = () => {
  const [temperature, setTemperature] = useState(350); // Kelvin
  const [eaNoCat, setEaNoCat] = useState(80); // kJ/mol
  const [useCatalyst, setUseCatalyst] = useState(false);
  const [eaReduction, setEaReduction] = useState(35); // kJ/mol reduced by catalyst

  const R = 8.314; // J/(mol.K)
  const currentEa = useCatalyst ? Math.max(10, eaNoCat - eaReduction) : eaNoCat;

  // Rate ratio calculation
  const exponentNoCat = (eaNoCat * 1000) / (R * temperature);
  const exponentCat = ((eaNoCat - eaReduction) * 1000) / (R * temperature);
  const rateMultiplier = Math.exp((eaReduction * 1000) / (R * temperature));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Energy Profile Diagram (SVG) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700">Giản đồ thế năng phản ứng:</span>
            <button
              onClick={() => setUseCatalyst(!useCatalyst)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                useCatalyst
                  ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              {useCatalyst ? 'Đang có chất xúc tác' : 'Thêm chất xúc tác'}
            </button>
          </div>

          {/* SVG Energy Diagram */}
          <div className="relative w-full h-80 bg-slate-900 rounded-2xl overflow-hidden p-4 border border-slate-800 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 420 280">
              {/* Axes */}
              <line x1="40" y1="240" x2="390" y2="240" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="40" y1="240" x2="40" y2="30" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
              
              <text x="390" y="255" fill="#94a3b8" fontSize="10" textAnchor="end">Tiến trình phản ứng</text>
              <text x="35" y="25" fill="#94a3b8" fontSize="10" textAnchor="start">Năng lượng E (kJ)</text>

              {/* Reactant level */}
              <line x1="40" y1="180" x2="110" y2="180" stroke="#38bdf8" strokeWidth="3" />
              <text x="75" y="172" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Chất đầu (A + B)</text>

              {/* Product level */}
              <line x1="310" y1="210" x2="380" y2="210" stroke="#4ade80" strokeWidth="3" />
              <text x="345" y="202" fill="#4ade80" fontSize="11" fontWeight="bold" textAnchor="middle">Sản phẩm (C)</text>

              {/* Heat of reaction Delta H line */}
              <line x1="280" y1="180" x2="310" y2="180" stroke="#64748b" strokeDasharray="3 3" />
              <line x1="300" y1="180" x2="300" y2="210" stroke="#ef4444" strokeWidth="2" />
              <text x="305" y="198" fill="#ef4444" fontSize="10" fontWeight="bold">ΔH</text>

              {/* Uncatalyzed Barrier (Blue curve) */}
              <path
                d="M 110 180 C 160 30, 260 30, 310 210"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                opacity={useCatalyst ? 0.35 : 1}
              />
              
              {/* Ea uncatalyzed marker */}
              <line x1="210" y1="50" x2="210" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="215" y="110" fill="#38bdf8" fontSize="11" fontWeight="bold">
                Ea = {eaNoCat} kJ/mol
              </text>

              {/* Catalyzed Barrier (Two-step Amber curve) */}
              {useCatalyst && (
                <>
                  <path
                    d="M 110 180 C 140 100, 170 90, 200 135 C 230 90, 270 100, 310 210"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  {/* Ea catalyzed marker */}
                  <line x1="160" y1="95" x2="160" y2="180" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="120" y="140" fill="#f59e0b" fontSize="10" fontWeight="bold">
                    Ea(xúc tác) = {currentEa} kJ
                  </text>
                  <text x="200" y="150" fill="#fbbf24" fontSize="9" textAnchor="middle">Chất trung gian</text>
                </>
              )}
            </svg>
          </div>

          {/* Interactive Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Nhiệt độ T (Kelvin):</span>
                <span className="text-amber-600 font-bold">{temperature} K ({temperature - 273}°C)</span>
              </div>
              <input
                type="range"
                min="250"
                max="800"
                step="10"
                value={temperature}
                onChange={e => setTemperature(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Năng lượng hoạt hóa ban đầu:</span>
                <span className="text-slate-800 font-bold">{eaNoCat} kJ/mol</span>
              </div>
              <input
                type="range"
                min="40"
                max="120"
                step="5"
                value={eaNoCat}
                onChange={e => setEaNoCat(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Arrhenius Quantitative Impact */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Phương trình kinh nghiệm Arrhenius</span>
              <h3 className="text-xl font-bold text-slate-800 mt-1">Động Học Phản Ứng & Xúc Tác</h3>
              <p className="text-xs text-slate-500 font-mono mt-1">k = A · e^(-Ea / (R·T))</p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
                <span className="text-xs text-amber-800 block font-semibold">Tỉ số tăng tốc độ khi có xúc tác (kx / ko):</span>
                <div className="mt-1">
                  <span className="text-3xl font-black text-amber-950">
                    {useCatalyst ? `${rateMultiplier.toLocaleString(undefined, { maximumFractionDigits: 0 })} lần` : '1 lần (không xúc tác)'}
                  </span>
                </div>
                {useCatalyst && (
                  <p className="text-xs text-amber-700 mt-1">
                    Nhờ giảm ΔEa = {eaReduction} kJ/mol, phản ứng xảy ra nhanh gấp hàng ngàn lần!
                  </p>
                )}
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <span className="font-semibold text-slate-800 block">Quy tắc vàng Arrhenius:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Tăng nhiệt độ T:</strong> Làm tăng động năng, tăng tỉ lệ phân tử vượt qua Ea → k tăng.</li>
                  <li><strong>Thêm chất xúc tác:</strong> Giảm rào cản Ea bằng lối đi trung gian → k tăng vọt theo hàm số mũ.</li>
                </ul>
              </div>

              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-xs text-indigo-900">
                <span className="font-bold block mb-1">Ứng dụng thực tế tiêu biểu:</span>
                Trong sản xuất acid sulfuric, dùng chất xúc tác <strong>V₂O₅</strong> ở 450°C giúp phản ứng 2SO₂ + O₂ → 2SO₃ đạt tốc độ cao kinh tế mà không cần tăng nhiệt độ quá mức.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   4. GIBBS FREE ENERGY (ΔG) SIMULATION
   ========================================================================= */
const PRESET_REACTIONS = [
  {
    name: 'Khử quặng Fe₂O₃ bằng than chì',
    equation: '3C(s) + 2Fe₂O₃(s) -> 4Fe(s) + 3CO₂(g)',
    deltaH: 470.5, // kJ
    deltaS: 558.4, // J/K
    desc: 'Thu nhiệt (ΔH > 0) nhưng tăng độ hỗn loạn mạnh (ΔS > 0 sinh ra 3 mol khí). Chỉ tự xảy ra ở nhiệt độ cao T > 843 K (~570°C).'
  },
  {
    name: 'Tổng hợp Amoniac Haber',
    equation: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)',
    deltaH: -92.0, // kJ
    deltaS: -198.0, // J/K
    desc: 'Tỏa nhiệt (ΔH < 0) nhưng giảm độ hỗn loạn (ΔS < 0 từ 4 mol khí về 2 mol khí). Tự xảy ra ở nhiệt độ thấp T < 464 K (~191°C).'
  },
  {
    name: 'Nhiệt phân đá vôi CaCO₃',
    equation: 'CaCO₃(s) -> CaO(s) + CO₂(g)',
    deltaH: 178.0, // kJ
    deltaS: 160.0, // J/K
    desc: 'Thu nhiệt (ΔH > 0) và tăng entropy (sinh 1 mol khí CO₂). Tự xảy ra ở nhiệt độ lò nung vôi T > 1112 K (~839°C).'
  },
  {
    name: 'Thăng hoa đá khô CO₂',
    equation: 'CO₂(s) -> CO₂(g)',
    deltaH: 26.0, // kJ
    deltaS: 87.0, // J/K
    desc: 'Thu nhiệt nhỏ (ΔH > 0) nhưng tăng entropy mạnh (chuyển sang thể khí). Tự thăng hoa ở nhiệt độ phòng T > 298 K.'
  }
];

const GibbsSimulation: React.FC = () => {
  const [reactionIdx, setReactionIdx] = useState(0);
  const [tempK, setTempK] = useState(298); // Kelvin (25°C)
  const [customDeltaH, setCustomDeltaH] = useState(470.5);
  const [customDeltaS, setCustomDeltaS] = useState(558.4);
  const [isCustom, setIsCustom] = useState(false);

  const curRxn = PRESET_REACTIONS[reactionIdx];
  const deltaH = isCustom ? customDeltaH : curRxn.deltaH;
  const deltaS = isCustom ? customDeltaS : curRxn.deltaS;

  // Calculate Delta G in kJ
  const deltaG = deltaH - tempK * (deltaS / 1000);
  const equilibriumTemp = deltaS !== 0 ? (deltaH * 1000) / deltaS : null;

  let spontaneityStatus = '';
  let statusColor = '';

  if (deltaG < -0.1) {
    spontaneityStatus = 'Phản ứng TỰ XẢY RA theo chiều thuận (Tự phát)';
    statusColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  } else if (Math.abs(deltaG) <= 0.1) {
    spontaneityStatus = 'Phản ứng đạt trạng thái CÂN BẰNG NHIỆT ĐỘNG (ΔG ≈ 0)';
    statusColor = 'bg-blue-50 text-blue-800 border-blue-200';
  } else {
    spontaneityStatus = 'Phản ứng KHÔNG TỰ XẢY RA theo chiều thuận (Cần cung cấp năng lượng)';
    statusColor = 'bg-rose-50 text-rose-800 border-rose-200';
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Diagram & Reaction Selection */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-sm font-semibold text-slate-700 block mb-2">Chọn phản ứng nghiên cứu:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_REACTIONS.map((rxn, idx) => (
                <button
                  key={rxn.name}
                  onClick={() => { setReactionIdx(idx); setIsCustom(false); }}
                  className={`text-left p-2.5 rounded-xl text-xs transition-all border ${
                    !isCustom && reactionIdx === idx
                      ? 'bg-rose-50 border-rose-300 text-rose-900 font-semibold shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold">{rxn.name}</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5 truncate">{rxn.equation}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Graphical Representation of Delta G vs Temperature */}
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>Đồ thị hàm số ΔG theo Nhiệt độ T</span>
              <span className="font-mono text-rose-400 font-bold">ΔG(T) = {deltaH} - T × {(deltaS/1000).toFixed(4)}</span>
            </div>

            <div className="h-56 w-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 400 220">
                {/* Horizontal Zero Axis (ΔG = 0) */}
                <line x1="30" y1="110" x2="380" y2="110" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="385" y="114" fill="#94a3b8" fontSize="10">ΔG = 0</text>

                {/* Vertical Axis (T = 0) */}
                <line x1="50" y1="20" x2="50" y2="200" stroke="#475569" strokeWidth="1.5" />
                <text x="45" y="20" fill="#94a3b8" fontSize="10" textAnchor="end">ΔG</text>
                <text x="380" y="130" fill="#94a3b8" fontSize="10" textAnchor="end">T (Kelvin)</text>

                {/* Spontaneous Zone Label */}
                <rect x="50" y="110" width="330" height="90" fill="#10b981" fillOpacity="0.08" />
                <text x="200" y="180" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">
                  VÙNG TỰ PHÁT (ΔG &lt; 0)
                </text>

                {/* Non-spontaneous Zone Label */}
                <rect x="50" y="20" width="330" height="90" fill="#f43f5e" fillOpacity="0.08" />
                <text x="200" y="50" fill="#fb7185" fontSize="11" fontWeight="bold" textAnchor="middle">
                  VÙNG KHÔNG TỰ PHÁT (ΔG &gt; 0)
                </text>

                {/* Linear plot of Delta G(T) */}
                {/* Mapping: T from 0 to 1500 K -> x from 50 to 380; Delta G from +600 to -600 -> y from 20 to 200 */}
                {(() => {
                  const mapTtoX = (t: number) => 50 + (t / 1500) * 330;
                  const mapGtoY = (g: number) => 110 - (g / 600) * 90;

                  const g0 = deltaH;
                  const g1500 = deltaH - 1500 * (deltaS / 1000);

                  const x1 = mapTtoX(0);
                  const y1 = mapGtoY(g0);
                  const x2 = mapTtoX(1500);
                  const y2 = mapGtoY(g1500);

                  const currentX = mapTtoX(tempK);
                  const currentY = mapGtoY(deltaG);

                  return (
                    <>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f43f5e" strokeWidth="3" />
                      
                      {/* Current operating point */}
                      <circle
                        cx={currentX}
                        cy={currentY}
                        r="6"
                        fill={deltaG < 0 ? '#34d399' : '#f43f5e'}
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                      <line x1={currentX} y1="20" x2={currentX} y2="200" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                    </>
                  );
                })()}
              </svg>
            </div>
          </div>

          {/* Temperature Slider */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Nhiệt độ khảo sát (T):</span>
              <span className="text-rose-600 font-bold text-sm">{tempK} K ({tempK - 273}°C)</span>
            </div>
            <input
              type="range"
              min="100"
              max="1500"
              step="10"
              value={tempK}
              onChange={e => setTempK(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>100 K (-173°C)</span>
              <span>298 K (25°C Chuẩn)</span>
              <span>800 K</span>
              <span>1500 K (~1227°C)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Thermal Analysis Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Kết quả nhiệt động học</span>
              <h3 className="text-xl font-bold text-slate-800 mt-1">{isCustom ? 'Phản ứng tùy chỉnh' : curRxn.name}</h3>
              <p className="text-xs text-slate-600 font-mono mt-1">{isCustom ? 'Phương trình tự nhập' : curRxn.equation}</p>
            </div>

            {/* Values summary */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Biến thiên Enthalpy (ΔH):</span>
                  <span className={`font-bold ${deltaH < 0 ? 'text-blue-600' : 'text-rose-600'}`}>
                    {deltaH > 0 ? `+${deltaH}` : deltaH} kJ
                  </span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Biến thiên Entropy (ΔS):</span>
                  <span className={`font-bold ${deltaS > 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {deltaS > 0 ? `+${deltaS}` : deltaS} J/K
                  </span>
                </div>
              </div>

              {/* Delta G Main Card */}
              <div className={`p-4 rounded-xl border ${statusColor} transition-all`}>
                <span className="text-xs font-semibold block uppercase tracking-wider">Năng lượng tự do Gibbs (ΔG):</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black">{deltaG.toFixed(1)} kJ</span>
                  <span className="text-xs font-medium">ở {tempK} K</span>
                </div>
                <div className="mt-2 text-xs font-bold flex items-center gap-1.5">
                  <Info className="w-4 h-4 shrink-0" />
                  {spontaneityStatus}
                </div>
              </div>

              {/* Equilibrium Temperature Threshold */}
              {equilibriumTemp && equilibriumTemp > 0 && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-800 block">Nhiệt độ đảo chiều tự phát (T_cân bằng = ΔH / ΔS):</span>
                  <p className="text-slate-700 mt-1">
                    T = <strong>{equilibriumTemp.toFixed(1)} K</strong> (tương đương <strong>{(equilibriumTemp - 273).toFixed(1)}°C</strong>)
                  </p>
                </div>
              )}

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800 block mb-1">Ý nghĩa thực tiễn:</span>
                {!isCustom ? curRxn.desc : 'Tùy theo dấu của ΔH và ΔS, nhiệt độ đóng vai trò quyết định liệu phản ứng có thể tự phát triển khai trong đời sống hay sản xuất công nghiệp hay không.'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
