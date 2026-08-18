import React, { useState } from 'react';
import { Shield, Cpu, Layers, Sparkles } from 'lucide-react';
import { TECH_PARTNERS } from '../data/siteContent';

export default function TechPartners() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Automation & Switches', 'AI CCTV & Security', 'Enterprise Wi-Fi & Routing', 'Digital Door Locks'];

  const filteredPartners = filter === 'All' 
    ? TECH_PARTNERS 
    : TECH_PARTNERS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-[#06090e]">
      
      <div className="container-custom mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>CERTIFIED OEM HARDWARE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Powered by <span className="text-gradient-cyan">Trusted Technology.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We only integrate globally proven, high-reliability brands with certified warranties and bank-grade encryption.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPartners.map((partner, idx) => (
            <div
              key={idx}
              className="glass-card p-5 border-white/10 hover:border-cyan-500/40 text-center flex flex-col items-center justify-center gap-2 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                {partner.name}
              </h4>
              <p className="text-[11px] font-mono text-slate-400">
                {partner.category}
              </p>
              <span className="mt-1 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/20">
                {partner.badge}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Animated Continuous Marquee */}
      <div className="relative w-full overflow-hidden py-4 bg-white/[0.01] border-t border-b border-white/5">
        <div className="animate-marquee gap-8 items-center">
          {[...TECH_PARTNERS, ...TECH_PARTNERS].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/[0.02] border border-white/5 shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="font-heading font-bold text-sm tracking-wider text-slate-300 uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
