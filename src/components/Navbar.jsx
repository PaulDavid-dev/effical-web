import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  LifeBuoy, 
  Menu, 
  X, 
  Shield, 
  Home, 
  Camera, 
  DoorClosed, 
  Wifi, 
  Sliders, 
  Building2, 
  Hotel, 
  Factory, 
  Activity, 
  Sparkles, 
  PhoneCall, 
  MessageSquare,
  ArrowRight,
  Zap,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';
import Logo from './Logo';

export default function Navbar({ onOpenPlanner }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Dropdowns state
  const [openDropdown, setOpenDropdown] = useState(null); // 'products' | 'workWith' | 'intelligence' | 'quote' | null
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) : 0;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-300 origin-left z-[80] transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header 
        ref={dropdownRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#040806]/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl h-16' 
            : 'bg-[#040806]/60 backdrop-blur-md border-b border-white/5 h-16'
        }`}
      >
        {/* Subtle Bottom Glow Line */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          
          {/* Brand Logo - Official ESS Logo Component */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none select-none py-1">
            <Logo variant="dark" size="sm" showTagline={false} />
            <div className="hidden sm:flex flex-col text-left -space-y-0.5 border-l border-white/10 pl-2.5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-lime-400 font-bold">
                SMART LIVING
              </span>
              <span className="text-[9px] font-mono tracking-wider text-slate-400">
                INTELLIGENT SECURITY
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Dropdown 1: Products */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('products')}
                onMouseEnter={() => setOpenDropdown('products')}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap rounded-lg transition-colors cursor-pointer ${
                  openDropdown === 'products' ? 'text-lime-400 bg-white/5' : 'text-slate-300 hover:text-lime-400 hover:bg-white/5'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180 text-lime-400' : 'text-slate-400'}`} />
              </button>

              {/* Products Dropdown Menu */}
              {openDropdown === 'products' && (
                <div 
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-[#070e0a]/98 border border-emerald-500/30 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 px-3 py-1 font-semibold">
                    Core Solutions
                  </div>
                  <a 
                    href="#solutions" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-500/10 text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Home className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Home Automation</p>
                      <p className="text-[10px] text-slate-400">Lighting, climate, curtains & scenes</p>
                    </div>
                  </a>

                  <a 
                    href="#solutions" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-500/10 text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Camera className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">AI 4K Security</p>
                      <p className="text-[10px] text-slate-400">Surveillance, alarms & video intercom</p>
                    </div>
                  </a>

                  <a 
                    href="#solutions" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-500/10 text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <DoorClosed className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Gate Automation</p>
                      <p className="text-[10px] text-slate-400">Sliding, swing & boom barriers</p>
                    </div>
                  </a>

                  <a 
                    href="#solutions" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-500/10 text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Wifi className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Enterprise Networking</p>
                      <p className="text-[10px] text-slate-400">Wi-Fi 7 mesh & structured fiber</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Dropdown 2: We Work With */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('workWith')}
                onMouseEnter={() => setOpenDropdown('workWith')}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap rounded-lg transition-colors cursor-pointer ${
                  openDropdown === 'workWith' ? 'text-lime-400 bg-white/5' : 'text-slate-300 hover:text-lime-400 hover:bg-white/5'
                }`}
              >
                <span>We Work With</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'workWith' ? 'rotate-180 text-lime-400' : 'text-slate-400'}`} />
              </button>

              {openDropdown === 'workWith' && (
                <div 
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-[#070e0a]/98 border border-emerald-500/30 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 px-3 py-1 font-semibold">
                    Industries & Properties
                  </div>
                  <a 
                    href="#industries" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Home className="w-4 h-4 text-lime-400" />
                    <span>Residential & Luxury Villas</span>
                  </a>
                  <a 
                    href="#industries" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span>Corporate Offices & Retail</span>
                  </a>
                  <a 
                    href="#industries" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Hotel className="w-4 h-4 text-lime-400" />
                    <span>Hotels & Resorts</span>
                  </a>
                  <a 
                    href="#industries" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Factory className="w-4 h-4 text-teal-400" />
                    <span>Industrial Plants & Warehouses</span>
                  </a>
                </div>
              )}
            </div>

            {/* Dropdown 3: Intelligence */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('intelligence')}
                onMouseEnter={() => setOpenDropdown('intelligence')}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap rounded-lg transition-colors cursor-pointer ${
                  openDropdown === 'intelligence' ? 'text-lime-400 bg-white/5' : 'text-slate-300 hover:text-lime-400 hover:bg-white/5'
                }`}
              >
                <span>Intelligence</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'intelligence' ? 'rotate-180 text-lime-400' : 'text-slate-400'}`} />
              </button>

              {openDropdown === 'intelligence' && (
                <div 
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-[#070e0a]/98 border border-emerald-500/30 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                >
                  <a 
                    href="#ecosystem" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-lime-300 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-lime-400" />
                    <span>One Smart Ecosystem</span>
                  </a>
                  <a 
                    href="#security-reacts" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-rose-400 transition-colors"
                  >
                    <Shield className="w-4 h-4 text-rose-400" />
                    <span>Security That Reacts</span>
                  </a>
                  <a 
                    href="#why-ess" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Smart Energy Intelligence</span>
                  </a>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <a 
              href="#why-ess" 
              className="px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Why ESS
            </a>

            <a 
              href="#projects" 
              className="px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Projects
            </a>

            <a 
              href="#partners" 
              className="px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Partners
            </a>

            {/* Support Link with Icon */}
            <a 
              href={`tel:${SITE_INFO.phone}`} 
              className="flex items-center gap-1.5 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5"
            >
              <LifeBuoy className="w-4 h-4 text-slate-400 hover:text-lime-400" />
              <span>Support</span>
            </a>

            {/* Get Quote Pill Button with Chevron Dropdown */}
            <div className="relative ml-1">
              <button
                type="button"
                onClick={() => toggleDropdown('quote')}
                className="flex items-center gap-2 px-5 py-2 text-sm font-bold whitespace-nowrap text-slate-950 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400 hover:from-lime-300 hover:to-emerald-300 transition-all rounded-full shadow-[0_0_24px_-4px_rgba(132,204,22,0.55)] cursor-pointer active:scale-95"
              >
                <span>Get Quote</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'quote' ? 'rotate-180' : ''}`} />
              </button>

              {/* Get Quote Quick Actions Dropdown */}
              {openDropdown === 'quote' && (
                <div 
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full right-0 mt-2 w-64 rounded-2xl bg-[#070e0a]/98 border border-lime-500/30 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(null);
                      onOpenPlanner();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-lime-500/10 hover:bg-lime-500/20 text-lime-300 text-xs font-bold transition-all mb-1 cursor-pointer"
                  >
                    <span>Book Free Site Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=Hi%20ESS%2C%20I%20would%20like%20a%20Smart%20Home%20%26%20Security%20Quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpenDropdown(null)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" /> Instant WhatsApp
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-lime-400 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bg-[#060c08]/98 border-b border-emerald-500/20 backdrop-blur-2xl px-6 py-6 shadow-2xl flex flex-col gap-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            
            <div className="flex flex-col gap-1">
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>Products & Solutions</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
              </a>

              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>We Work With</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
              </a>

              <a
                href="#ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>Intelligence & Ecosystem</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
              </a>

              <a
                href="#why-ess"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Why ESS
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Projects
              </a>

              <a
                href="#partners"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Partners
              </a>

              <a
                href={`tel:${SITE_INFO.phone}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-lime-400 rounded-xl hover:bg-white/5 flex items-center gap-2"
              >
                <LifeBuoy className="w-4 h-4" />
                <span>Support ({SITE_INFO.phone})</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full shadow-lg text-center cursor-pointer"
              >
                Get Quote / Book Site Visit
              </button>

              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-3 justify-center text-sm rounded-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>
        )}
      </header>
    </>
  );
}
