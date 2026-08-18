import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  const t = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b12] border-t border-b border-white/5 cyber-grid-bg">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLIENT EXPERIENCES</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Our <span className="text-gradient-cyan">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Trusted by luxury homeowners, enterprise executives, and leading architects across Tamil Nadu.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 relative border-cyan-500/30">
          
          <Quote className="w-16 h-16 text-cyan-500/15 absolute top-6 right-6 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              VERIFIED DEPLOYMENT
            </span>
          </div>

          {/* Review Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 font-light leading-relaxed mb-8 italic">
            "{t.review}"
          </p>

          {/* Author Details & Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{t.name}</span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </h4>
              <p className="text-xs font-mono text-slate-400">
                {t.role} • <span className="text-cyan-300">{t.project}</span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-slate-400 px-2">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
