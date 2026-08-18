import React from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  Share2,
  Globe
} from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';

export default function Footer({ onOpenPlanner }) {
  return (
    <footer className="bg-[#05070b] border-t border-white/10 pt-16 pb-12 relative z-10 text-slate-400 text-sm">
      <div className="container-custom">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-wider">
                  ESS — EFFICAL
                </span>
                <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  Smart Solutions
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              South India's premier system integrators for Luxury Home Automation, AI 4K Security Surveillance, Automated Motorized Gates, and Enterprise Gigabit Networking.
            </p>

            {/* Social Icons with Clean SVGs */}
            <div className="flex items-center gap-2 pt-2">
              <a 
                href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-slate-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a 
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400 hover:text-pink-400 flex items-center justify-center transition-colors text-slate-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-colors text-slate-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:text-blue-400 flex items-center justify-center transition-colors text-slate-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Smart Home Automation</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">AI 4K CCTV Surveillance</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Intrusion Alarm Systems</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Automatic Gates & Barriers</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Enterprise Wi-Fi & Fiber</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Video Door Phone Intercom</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Industries Served</a></li>
              <li><a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Ecosystem Platform</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#why-ess" className="hover:text-cyan-400 transition-colors">Why Choose ESS</a></li>
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How We Work (Process)</a></li>
              <li><a href="#partners" className="hover:text-cyan-400 transition-colors">Technology Partners</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wider uppercase">
              Experience Center
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{SITE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-cyan-400 transition-colors">
                  {SITE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-cyan-400 transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Mon-Sat: 9AM - 8PM | 24/7 Hotline</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{SITE_INFO.copyright}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Warranty Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
