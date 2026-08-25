import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { BRANDS } from '../data/siteContent';
import Logo from './Logo';

export default function Footer({ brand = 'ess', onSelectBrand = () => { }, onOpenPlanner }) {
  const activeBrand = BRANDS[brand] || BRANDS.ess;

  return (
    <footer className="relative bg-[#020503] text-slate-400 text-sm overflow-hidden border-t border-emerald-500/20">
      {/* Ambient Radial Glow & Background Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-[#020503] to-[#010302] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#064e3b08_1px,transparent_1px),linear-gradient(to_bottom,#064e3b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Emerald Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />

      <div className="container-custom relative z-10 pt-16 pb-12">
        
        {/* Pre-Footer Action Ribbon */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/10 to-transparent border border-emerald-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center shrink-0 text-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.15)]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-syne font-bold text-lg sm:text-xl">
                Ready to Automate & Secure Your Space?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Bespoke design, tier-1 engineering, and seamless integration from gate to bedroom.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${activeBrand.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-lime-400/50 text-white text-xs sm:text-sm font-semibold transition-all group"
            >
              <MessageSquare className="w-4 h-4 text-lime-400" />
              <span>Instant WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-lime-400 transition-colors" />
            </a>
            {onOpenPlanner && (
              <button
                type="button"
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-300 hover:to-emerald-300 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(163,230,53,0.25)] transition-all cursor-pointer"
              >
                <span>Launch System Planner</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Main Aligned 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">

          {/* Column 1: Brand, Coverage & Socials (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Logo brand={brand} variant="dark" size="lg" showTagline={true} />
            </div>

            {/* Regional Service Territory Card */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20 backdrop-blur-sm flex flex-col gap-2 max-w-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  Regional Service Territory
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs font-medium">
                  Tamil Nadu
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs font-medium">
                  Kerala
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs font-medium">
                  Karnataka
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-slate-500 font-mono">Connect:</span>
              <a
                href={`https://wa.me/${activeBrand.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 flex items-center justify-center transition-all text-slate-300 shadow-sm"
                aria-label={`WhatsApp ${activeBrand.shortName}`}
                title={`WhatsApp ${activeBrand.shortName}`}
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={activeBrand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 flex items-center justify-center transition-all text-slate-300 shadow-sm"
                aria-label={`${activeBrand.shortName} Instagram`}
                title={`${activeBrand.shortName} Instagram`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {brand === 'et' && activeBrand.socials.facebook && (
                <a
                  href={activeBrand.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 flex items-center justify-center transition-all text-slate-300 shadow-sm"
                  aria-label="Effical Technologies Facebook"
                  title="Effical Technologies Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Solutions / Engineering (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-syne font-bold text-white text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#solutions" className="hover:text-lime-400 transition-colors flex items-center justify-between group">
                  <span>Smart Home Automation</span>
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-lime-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-lime-400 transition-colors flex items-center justify-between group">
                  <span>Automatic Gate & Boom Barriers</span>
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-lime-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-lime-400 transition-colors flex items-center justify-between group">
                  <span>Video Door Phones & Biometrics</span>
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-lime-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-lime-400 transition-colors flex items-center justify-between group">
                  <span>Enterprise Gigabit Wi-Fi 7 & Fiber</span>
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-lime-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>



          {/* Column 3: Experience Center & Direct Reach (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-syne font-bold text-white text-sm tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
              Experience Center
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0 mt-0.5 text-lime-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-white font-medium">{activeBrand.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0 text-lime-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${activeBrand.phone}`} className="hover:text-lime-400 transition-colors font-mono text-[13px] text-white">
                    {activeBrand.phone}
                  </a>
                  {activeBrand.alternatePhone && (
                    <a href={`tel:${activeBrand.alternatePhone}`} className="hover:text-lime-400 transition-colors font-mono text-[13px] text-white">
                      {activeBrand.alternatePhone}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0 text-lime-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${activeBrand.email}`} className="hover:text-lime-400 transition-colors text-[11px] truncate max-w-[200px] text-slate-300">
                  {activeBrand.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-slate-400 font-mono">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug">{activeBrand.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Trust & SLA Status Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p className="text-center md:text-left text-slate-400">
            {activeBrand.copyright}
          </p>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>24/7 SLA Support • Tamil Nadu • Kerala • Karnataka</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-slate-400">
            <a href="#privacy" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-lime-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#warranty" className="hover:text-lime-400 transition-colors">Warranty Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}


