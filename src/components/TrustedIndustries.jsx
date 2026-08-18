import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Hotel, 
  HeartPulse, 
  Factory, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/siteContent';

const iconsMap = {
  residential: Home,
  commercial: Building2,
  hospitality: Hotel,
  healthcare: HeartPulse,
  industrial: Factory
};

export default function TrustedIndustries({ onOpenPlanner }) {
  const [activeTab, setActiveTab] = useState(INDUSTRIES_DATA[0].id);

  const selectedIndustry = INDUSTRIES_DATA.find((item) => item.id === activeTab) || INDUSTRIES_DATA[0];
  const IconComponent = iconsMap[selectedIndustry.id] || Building2;

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-b border-white/5 z-10">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>BUILT FOR EVERY SPACE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Homes, <span className="text-gradient-cyan">Businesses & Industries</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Technology designed for the way you live and work. We engineer custom automation, high-speed networks, and perimeter security across diverse architectural environments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 relative z-20">
          {INDUSTRIES_DATA.map((ind) => {
            const TabIcon = iconsMap[ind.id] || Building2;
            const isActive = ind.id === activeTab;
            return (
              <button
                type="button"
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`cursor-pointer flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading text-sm font-semibold transition-all select-none ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/25'
                    : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{ind.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="glass-card p-6 sm:p-10 border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img 
                  src={selectedIndustry.image} 
                  alt={selectedIndustry.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Image Badges */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                  <IconComponent className="w-4 h-4 text-cyan-400" />
                  {selectedIndustry.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  {selectedIndustry.stats}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  {selectedIndustry.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedIndustry.title}
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedIndustry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Consultation CTA for this industry */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenPlanner}
                  className="btn-primary text-sm py-3 px-6 cursor-pointer"
                >
                  <span>Request {selectedIndustry.title.split(' ')[0]} Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
