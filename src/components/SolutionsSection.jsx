import React, { useState } from 'react';
import { 
  Home, 
  ShieldCheck, 
  Lock, 
  Network, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Zap, 
  X, 
  Layers,
  ChevronRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SOLUTIONS_DATA, SITE_INFO } from '../data/siteContent';

const iconComponents = {
  Home,
  ShieldCheck,
  Lock,
  Network
};

export default function SolutionsSection({ onOpenPlanner }) {
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#040806] z-10">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header with Animated Text Gradient */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Cpu className="w-3.5 h-3.5 text-lime-400" />
              <span>SOLUTIONS SUITE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
            Intelligent Solutions. <br />
            <span className="text-gradient-animated-emerald">Beautifully Connected.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Four specialized engineering divisions designed to work harmoniously as one complete, dependable ecosystem.
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS_DATA.map((solution) => {
            const Icon = iconComponents[solution.iconName] || Home;

            return (
              <div 
                key={solution.id} 
                className="glass-card group flex flex-col justify-between border-white/10 hover:border-lime-500/40 p-6 sm:p-8"
              >
                <div>
                  {/* Card Header & Image */}
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={solution.heroImage} 
                      alt={solution.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e0a] via-[#070e0a]/40 to-transparent"></div>
                    
                    {/* Floating Icon & Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#040806]/80 backdrop-blur-md border border-lime-500/30 flex items-center justify-center text-lime-400 shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-lime-300 font-semibold">
                        {solution.tag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors font-syne">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {solution.shortDesc}
                  </p>

                  {/* Subcategories List */}
                  <div className="space-y-2.5 mb-6">
                    {solution.subcategories.slice(0, 4).map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                        <CheckCircle className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold text-slate-200 block">{sub.name}</span>
                          <span className="text-[11px] text-slate-400 block leading-tight">{sub.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedSolution(solution)}
                    className="text-xs font-mono font-semibold text-lime-400 hover:text-lime-300 flex items-center gap-1.5 transition-colors py-2 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenPlanner}
                    className="btn-secondary text-xs py-2 px-4 cursor-pointer"
                  >
                    <span>Get Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="modal-overlay" onClick={() => setSelectedSolution(null)}>
          <div 
            className="glass-panel max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border-lime-500/40"
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

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <span className="glass-badge">{selectedSolution.tag}</span>
              <span className="text-xs font-mono text-emerald-400 font-bold">TURNKEY ARCHITECTURE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-syne">
              {selectedSolution.title}
            </h3>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedSolution.shortDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-lime-400 uppercase tracking-wider mb-3 font-semibold">
                Key System Components Included:
              </h4>
              <div className="space-y-3">
                {selectedSolution.subcategories.map((sub, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-semibold text-white">{sub.name}</p>
                    <p className="text-xs text-slate-300 mt-0.5">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-lime-400 uppercase tracking-wider mb-3 font-semibold">
                Technical Standards & Compatibility:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                    <Zap className="w-3.5 h-3.5 text-lime-400" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Hi%20ESS%2C%20I%20would%20like%20more%20details%20on%20${encodeURIComponent(selectedSolution.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-xs py-2.5 px-5"
              >
                <span>WhatsApp Specialist</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSelectedSolution(null);
                  onOpenPlanner();
                }}
                className="btn-primary btn-shimmer w-full sm:w-auto text-xs py-2.5 px-6 cursor-pointer"
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
