import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Layers, 
  ArrowRight, 
  X, 
  CheckCircle, 
  Cpu, 
  Camera, 
  Clock,
  Sparkles
} from 'lucide-react';
import { FEATURED_PROJECTS, SITE_INFO } from '../data/siteContent';

export default function FeaturedProjects({ onOpenPlanner }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-b border-white/5">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PROVEN PORTFOLIO</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real Projects. <br />
            <span className="text-gradient-cyan">Intelligent Results.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A glimpse into some of our high-profile turnkey automation and security deployments across South India.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="glass-card group overflow-hidden border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Project Image & Overlay */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Category & Location Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300 font-semibold">
                      {proj.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{proj.location}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      {proj.scale}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span>⚡ {proj.metrics.devices}</span>
                  <span>🎥 {proj.metrics.cameras}</span>
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div 
            className="glass-panel max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border-cyan-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="glass-badge mb-3">{selectedProject.category}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mb-4">
              📍 {selectedProject.location} • {selectedProject.scale}
            </p>

            <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/10">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 text-center font-mono">
              <div>
                <p className="text-lg font-bold text-cyan-400">{selectedProject.metrics.devices}</p>
                <p className="text-[10px] text-slate-400 uppercase">Integrated</p>
              </div>
              <div>
                <p className="text-lg font-bold text-cyan-400">{selectedProject.metrics.cameras}</p>
                <p className="text-[10px] text-slate-400 uppercase">Surveillance</p>
              </div>
              <div>
                <p className="text-lg font-bold text-cyan-400">{selectedProject.metrics.installationTime}</p>
                <p className="text-[10px] text-slate-400 uppercase">Turnaround</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Hi%20ESS%2C%20I%20saw%20your%20project%20${encodeURIComponent(selectedProject.title)}%20and%20want%20a%20similar%20system.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-xs py-2.5 px-5"
              >
                <span>WhatsApp Regarding This Project</span>
              </a>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenPlanner();
                }}
                className="btn-primary w-full sm:w-auto text-xs py-2.5 px-6"
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
