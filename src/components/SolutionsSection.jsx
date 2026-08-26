import React, { useState } from 'react';
import { 
  Network,
  Camera,
  ShieldAlert,
  Lightbulb,
  Lock,
  ShieldCheck,
  Radio,
  UserCheck,
  Sparkles,
  Cpu,
  Zap,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  PhoneCall,
  Sliders,
  Eye,
  Check
} from 'lucide-react';
import { SOLUTIONS_DATA, SITE_INFO } from '../data/siteContent';

import {
  NetworkIcon,
  CameraIcon,
  IntrusionIcon,
  SmartLightingIcon,
  SmartLocksIcon,
  GateIcon,
  VehicleAccessIcon,
  TimeAttendanceIcon
} from './CustomIcons';

const iconComponents = {
  Network: NetworkIcon,
  Camera: CameraIcon,
  ShieldAlert: IntrusionIcon,
  Lightbulb: SmartLightingIcon,
  Lock: SmartLocksIcon,
  ShieldCheck: GateIcon,
  Radio: VehicleAccessIcon,
  UserCheck: TimeAttendanceIcon
};

const CATEGORIES = [
  { id: 'all', label: 'All Solutions (8)' },
  { id: 'security', label: 'Security & CCTV (3)' },
  { id: 'access', label: 'Access & Gates (3)' },
  { id: 'automation', label: 'Smart Lighting (1)' },
  { id: 'networking', label: 'Network & Fiber (1)' }
];

export default function SolutionsSection({ onOpenPlanner }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);

  const filteredSolutions = selectedCategory === 'all'
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter((item) => item.category === selectedCategory);

  const handleQuickNavClick = (id) => {
    setHighlightedId(id);
    setSelectedCategory('all');
    const el = document.getElementById(`solution-card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      setHighlightedId(null);
    }, 2200);
  };

  return (
    <section id="solutions" className="pt-10 pb-20 md:pt-12 md:pb-24 relative overflow-hidden bg-[#030604] z-10">
      
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-lime-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* === CLASSIC LUXURY EMBLEM HEADER (Matching Reference Diagram) === */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          {/* Classic Ribbon Header with Gold/Lime Diamond Accents */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
            <div className="h-[1.5px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-lime-500/40 to-lime-400"></div>
            <div className="w-2 h-2 rotate-45 bg-lime-400 shadow-sm shadow-lime-400"></div>
            
            <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-emerald-950 via-[#07170c] to-emerald-950 border border-lime-500/50 text-lime-300 text-xs sm:text-sm font-mono font-extrabold tracking-widest uppercase shadow-xl shadow-lime-500/10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>OUR SMART SOLUTIONS</span>
            </div>
            
            <div className="w-2 h-2 rotate-45 bg-lime-400 shadow-sm shadow-lime-400"></div>
            <div className="h-[1.5px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-lime-500/40 to-lime-400"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 font-syne">
            Engineered For Seamless <br />
            <span className="text-gradient-animated-emerald">Luxury &amp; Absolute Security.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eight specialized engineering disciplines unified under one single, synchronized ecosystem. One team, from fiber infrastructure to front gate automation.
          </p>
        </div>

        {/* === 8-PILLAR QUICK VISUAL NAVIGATOR STRIP (Matching reference icons) === */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-stretch min-w-max divide-x divide-white/10 border-y border-white/10 py-6">
            {SOLUTIONS_DATA.map((sol) => {
              const Icon = iconComponents[sol.iconName] || Network;
              const isHighlight = highlightedId === sol.id;

              return (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => handleQuickNavClick(sol.id)}
                  className="flex-1 min-w-[130px] lg:min-w-[150px] px-2 sm:px-4 flex flex-col items-center justify-start text-center transition-all cursor-pointer group hover:bg-white/[0.02]"
                >
                  <div className={`w-14 h-14 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 ${
                    isHighlight ? 'text-lime-400 scale-110' : 'text-slate-300 group-hover:text-lime-400'
                  }`}>
                    <Icon strokeWidth={1.5} className="w-10 h-10" />
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-tight transition-colors ${
                    isHighlight ? 'text-lime-400' : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {sol.title.replace(' Systems', '').replace(' Infrastructure', '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-lime-500 text-slate-950 shadow-lg shadow-lime-500/20 ring-1 ring-lime-300'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* === REDUCED CARD SIZED GRID (Compact 4-Column Responsive Layout) === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSolutions.map((solution) => {
            const Icon = iconComponents[solution.iconName] || Network;
            const isHighlight = highlightedId === solution.id;

            return (
              <div 
                id={`solution-card-${solution.id}`}
                key={solution.id} 
                className={`glass-card group flex flex-col justify-between p-4 rounded-2xl transition-all duration-300 relative border ${
                  isHighlight 
                    ? 'border-lime-400 ring-2 ring-lime-400/50 shadow-2xl shadow-lime-500/20 scale-[1.02] bg-emerald-950/40' 
                    : 'border-white/10 hover:border-lime-500/40 hover:shadow-xl hover:shadow-black/60 bg-[#070e0a]/80'
                }`}
              >
                <div>
                  {/* Card Thumbnail Image Banner (Compact 16:9 ratio) */}
                  <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden mb-3.5 bg-black/60">
                    <img 
                      src={solution.heroImage} 
                      alt={solution.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e0a] via-[#070e0a]/30 to-transparent pointer-events-none"></div>
                    
                    {/* Floating Floating Icon & Badge */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <div className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-lime-500/40 flex items-center justify-center text-lime-400 shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-lime-300 font-bold shadow">
                        {solution.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2.5 pointer-events-none">
                      <span className="text-[10px] font-mono text-slate-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                        {solution.tag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-lime-400 transition-colors font-syne tracking-tight">
                    {solution.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed mb-3.5 line-clamp-2">
                    {solution.shortDesc}
                  </p>

                  {/* Key Capabilities Chips (2 compact scannable pills) */}
                  <div className="space-y-1.5 mb-3.5">
                    {solution.subcategories.slice(0, 2).map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                        <span className="text-[11px] font-medium text-slate-200 truncate">{sub.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedSolution(solution)}
                    className="text-[11px] font-mono font-semibold text-lime-400 hover:text-lime-300 flex items-center gap-1 transition-colors py-1 cursor-pointer"
                  >
                    <span>Full Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenPlanner}
                    className="btn-secondary text-[10px] py-1.5 px-3 cursor-pointer"
                  >
                    <span>Get Quote</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* === DETAIL SPECIFICATIONS MODAL === */}
      {selectedSolution && (
        <div className="modal-overlay" onClick={() => setSelectedSolution(null)}>
          <div 
            className="glass-panel max-w-2xl w-full p-5 sm:p-7 relative max-h-[90vh] overflow-y-auto border-lime-500/40 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setSelectedSolution(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-black/60 border border-white/10">
              <img 
                src={selectedSolution.heroImage} 
                alt={selectedSolution.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e0a] via-[#070e0a]/40 to-transparent"></div>
              
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="glass-badge">{selectedSolution.tag}</span>
                <span className="text-[11px] font-mono text-lime-300 font-bold bg-black/70 px-2 py-0.5 rounded border border-white/10">
                  {selectedSolution.badge}
                </span>
              </div>
            </div>

            {/* Modal Title & Description */}
            <h3 className="text-2xl font-bold text-white mb-2 font-syne">
              {selectedSolution.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
              {selectedSolution.shortDesc}
            </p>

            {/* Sub-Components List */}
            <div className="mb-5">
              <h4 className="text-xs font-mono text-lime-400 uppercase tracking-wider mb-2.5 font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Key Architectural Sub-Systems:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.subcategories.map((sub, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      {sub.name}
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug pl-5">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-lime-400 uppercase tracking-wider mb-2.5 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Turnkey Compliance &amp; Standards:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/[0.03] p-2 rounded-lg border border-white/5">
                    <Zap className="w-3 h-3 text-lime-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Hi%20ESS%2C%20I%20am%20interested%20in%20a%20turnkey%20proposal%20for%20${encodeURIComponent(selectedSolution.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-xs py-2.5 px-5 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp Specialist</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSelectedSolution(null);
                  onOpenPlanner();
                }}
                className="btn-primary btn-shimmer w-full sm:w-auto text-xs py-2.5 px-6 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Free Site Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
