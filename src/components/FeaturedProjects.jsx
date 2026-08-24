import React, { useState, useMemo } from 'react';
import {
  MapPin,
  ArrowRight,
  X,
  Sparkles,
  Zap,
  Camera,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { FEATURED_PROJECTS, SITE_INFO } from '../data/siteContent';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Industrial'];

export default function FeaturedProjects({ onOpenPlanner }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return FEATURED_PROJECTS;
    if (activeCategory === 'Residential') {
      return FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes('residential') || p.category.toLowerCase().includes('apartments') || p.category.toLowerCase().includes('villa'));
    }
    if (activeCategory === 'Commercial') {
      return FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes('commercial') || p.category.toLowerCase().includes('office'));
    }
    if (activeCategory === 'Industrial') {
      return FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes('industrial') || p.category.toLowerCase().includes('plant'));
    }
    return FEATURED_PROJECTS;
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#050a07] border-t border-b border-white/5">

      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="glass-badge">
                <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
                <span>PORTFOLIO SHOWCASE</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-syne">
              Real Projects. <span className="text-gradient-animated-lime">Intelligent Results.</span>
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Turnkey smart automation & security deployments across South India.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md self-start md:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-lime-400 text-black font-semibold shadow-[0_0_15px_rgba(132,204,22,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Projects Grid (4-cols on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group relative rounded-2xl bg-white/[0.025] hover:bg-white/[0.04] border border-white/10 hover:border-lime-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-8px_rgba(132,204,22,0.18)] flex flex-col justify-between overflow-hidden cursor-pointer p-3.5"
            >
              <div>
                {/* Compact Image Container */}
                <div className="relative h-44 w-full rounded-xl overflow-hidden mb-3.5 bg-black/50">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-lime-400/40 text-[10px] font-mono text-lime-300 font-semibold tracking-wide">
                    {proj.category}
                  </span>

                  {/* Scale Badge */}
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                    {proj.scale.split(' ')[0]}
                  </span>

                  {/* Location Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-slate-200">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-200 truncate">
                      <MapPin className="w-3 h-3 text-lime-400 shrink-0" />
                      <span className="truncate">{proj.location}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white group-hover:text-lime-300 transition-colors font-syne line-clamp-1 mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-3">
                  {proj.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {proj.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[10px] text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {proj.tags.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded bg-lime-400/10 border border-lime-400/20 text-[10px] text-lime-300 font-mono">
                      +{proj.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Quick Metrics & View Button */}
              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-lime-400" />
                    {proj.metrics.devices.split(' ')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-emerald-400" />
                    {proj.metrics.cameras.split(' ')[0]}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-lime-400 group-hover:text-lime-300 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel max-w-xl w-full p-6 sm:p-7 relative max-h-[90vh] overflow-y-auto border border-lime-500/40 rounded-2xl shadow-2xl shadow-lime-950/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30 text-xs font-mono font-semibold">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-syne">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-lime-400 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedProject.location} • {selectedProject.scale}</span>
            </p>

            <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
              {selectedProject.description}
            </p>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 mb-5 text-center font-mono">
              <div className="p-2 rounded-lg bg-black/20">
                <p className="text-base font-bold text-lime-400">{selectedProject.metrics.devices}</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Integrated</p>
              </div>
              <div className="p-2 rounded-lg bg-black/20">
                <p className="text-base font-bold text-lime-400">{selectedProject.metrics.cameras}</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Surveillance</p>
              </div>
              <div className="p-2 rounded-lg bg-black/20">
                <p className="text-base font-bold text-lime-400">{selectedProject.metrics.installationTime}</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-wider mt-0.5">Turnaround</p>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="mb-6">
              <p className="text-[11px] font-mono text-slate-400 uppercase mb-2">Technologies Deployed:</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Hi%20ESS%2C%20I%20saw%20your%20project%20${encodeURIComponent(selectedProject.title)}%20and%20want%20a%20similar%20system.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-xs py-2.5 px-4"
              >
                <span>WhatsApp Inquiry</span>
              </a>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenPlanner();
                }}
                className="btn-primary w-full sm:w-auto text-xs py-2.5 px-5 cursor-pointer"
              >
                <span>Book Site Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
