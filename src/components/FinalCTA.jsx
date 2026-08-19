import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, PhoneCall, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';

export default function FinalCTA({ onOpenPlanner }) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060c08] border-t border-white/5 cyber-grid-bg">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-14 text-center border-lime-500/40 shadow-2xl shadow-lime-950/60 relative">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="glass-badge">
              <Sparkles className="w-3.5 h-3.5 text-lime-400" />
              <span>READY TO GO SMART?</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
            Your Space. Your Security. <br />
            <span className="text-gradient-animated-lime">Your Complete Control.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Whether it's a luxury smart villa, corporate headquarters, healthcare facility, or multi-acre industrial plant, ESS creates intelligent, scalable systems designed exclusively around you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenPlanner}
              className="btn-primary text-base py-4 px-8 shadow-lime-500/30 cursor-pointer"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Hi%20ESS%2C%20I%20would%20like%20to%20consult%20with%20an%20automation%20expert.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base py-4 px-7"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          {/* Quick Contact Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 font-mono text-xs text-slate-300">
            <a 
              href={`tel:${SITE_INFO.phone}`}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-lime-500/30 flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-lime-400" />
              <span>{SITE_INFO.phone}</span>
            </a>

            <a 
              href={`mailto:${SITE_INFO.email}`}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-lime-500/30 flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-lime-400" />
              <span>{SITE_INFO.email}</span>
            </a>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-lime-400" />
              <span>{SITE_INFO.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
