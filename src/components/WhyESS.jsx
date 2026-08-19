import React from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Cpu, 
  Clock, 
  Headphones,
  ArrowRight
} from 'lucide-react';
import { WHY_ESS_PILLARS } from '../data/siteContent';

export default function WhyESS({ onOpenPlanner }) {
  return (
    <section id="why-ess" className="py-24 relative overflow-hidden bg-[#040806] z-10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Award className="w-3.5 h-3.5 text-lime-400" />
              <span>THE ESS PROMISE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
            A smart home should still be working when your <br />
            <span className="text-gradient-animated-emerald">kids leave for college.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Why leading architects, luxury homeowners, and corporate facility heads choose ESS over generic, fragmented contractors.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {WHY_ESS_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-card p-6 border-white/10 hover:border-lime-500/40 flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-lime-400/40 group-hover:text-lime-400 group-hover:text-glow-lime transition-all block mb-4">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 font-syne group-hover:text-lime-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: ESS vs Generic Vendors */}
        <div className="glass-panel p-6 sm:p-10 max-w-4xl mx-auto border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8 font-syne">
            Why Turnkey Integration Matters
          </h3>

          <div className="space-y-4 font-mono text-xs sm:text-sm">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 items-center">
              <div className="sm:col-span-4 font-heading font-semibold text-slate-300">
                Single Point of Accountability
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-lime-300 font-semibold bg-lime-500/10 p-2 rounded-lg border border-lime-500/20">
                <Check className="w-4 h-4 text-lime-400 shrink-0" />
                <span>ESS: 1 Unified Engineering Team</span>
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-slate-400 p-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Others: 4-5 Conflicting Vendors</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 items-center">
              <div className="sm:col-span-4 font-heading font-semibold text-slate-300">
                Aesthetic Wire Concealment
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-lime-300 font-semibold bg-lime-500/10 p-2 rounded-lg border border-lime-500/20">
                <Check className="w-4 h-4 text-lime-400 shrink-0" />
                <span>100% Flush Architecture</span>
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-slate-400 p-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Messy Surface Casings</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 items-center">
              <div className="sm:col-span-4 font-heading font-semibold text-slate-300">
                Cross-System Automation
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-lime-300 font-semibold bg-lime-500/10 p-2 rounded-lg border border-lime-500/20">
                <Check className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Lights, Gates & CCTV Linked</span>
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-slate-400 p-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Siloed Disjointed Apps</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 items-center">
              <div className="sm:col-span-4 font-heading font-semibold text-slate-300">
                Post-Installation SLA & AMC
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-lime-300 font-semibold bg-lime-500/10 p-2 rounded-lg border border-lime-500/20">
                <Check className="w-4 h-4 text-lime-400 shrink-0" />
                <span>24/7 Priority Emergency Support</span>
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 text-slate-400 p-2">
                <X className="w-4 h-4 text-rose-500 shrink-0" />
                <span>No Response After Payment</span>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onOpenPlanner}
              className="btn-primary btn-shimmer text-sm py-3 px-8 cursor-pointer"
            >
              <span>Experience The ESS Standard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
