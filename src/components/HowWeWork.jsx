import React from 'react';
import { 
  Compass, 
  MapPin, 
  PenTool, 
  Wrench, 
  LifeBuoy, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/siteContent';

const icons = [Compass, MapPin, PenTool, Wrench, LifeBuoy];

export default function HowWeWork({ onOpenPlanner }) {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#060c08] border-t border-b border-white/5 cyber-grid-bg">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Sparkles className="w-3.5 h-3.5 text-lime-400" />
              <span>THE 5-STEP JOURNEY</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
            From Idea to <span className="text-gradient-animated-lime">Intelligent Space.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A seamless, transparent engineering process designed to eliminate stress and deliver flawless results.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const StepIcon = icons[idx] || Compass;

            return (
              <div
                key={step.step}
                className="glass-card p-6 border-white/10 hover:border-lime-500/40 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Number & Timeframe Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-sm font-bold font-mono text-lime-400 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-syne">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-lime-400/90 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  <span>Phase {step.step} Milestone</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fast Action Booking CTA */}
        <div className="mt-12 p-6 rounded-2xl glass-panel max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-lime-500/30 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-white font-syne">Ready for Step 01?</p>
            <p className="text-xs text-slate-300">Book your complimentary on-site engineering assessment today.</p>
          </div>
          <button
            onClick={onOpenPlanner}
            className="btn-primary text-xs py-3 px-6 shrink-0 cursor-pointer"
          >
            <span>Book Free Site Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
