import React, { useState } from 'react';
import { Shield, Cpu, Layers, Sparkles } from 'lucide-react';
import { TECH_PARTNERS } from '../data/siteContent';

export default function TechPartners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-[#040806]">
      {/* Animated Continuous Marquee */}
      <div className="relative w-full overflow-hidden py-5 bg-white/[0.01] border-t border-b border-white/5">
        <div className="animate-marquee gap-8 items-center">
          {[...TECH_PARTNERS, ...TECH_PARTNERS].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-lime-500/30 transition-colors shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-lime-400"></span>
              <span className="font-heading font-bold text-sm tracking-wider text-slate-300 uppercase">
                {brand.name}
              </span>
              <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">
                {brand.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
