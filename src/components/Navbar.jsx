import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  LifeBuoy,
  Menu,
  X,
  Shield,
  Home,
  Building2,
  Hotel,
  Factory,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { BRANDS } from '../data/siteContent';
import Logo from './Logo';

export default function Navbar({ 
  brand = 'ess', 
  onSelectBrand = () => {}, 
  onOpenPlanner 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Dropdowns state
  const [openDropdown, setOpenDropdown] = useState(null); // 'workWith' | 'quote' | null
  const dropdownRef = useRef(null);

  const activeBrand = BRANDS[brand] || BRANDS.ess;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#040806]/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl h-16'
          : 'bg-[#040806]/75 backdrop-blur-md border-b border-white/5 h-16'
          }`}
      >
        {/* Subtle Bottom Glow Line */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between gap-4">

          {/* Left: Brand Logo & Dynamic Taglines */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="flex items-center gap-2.5 group text-decoration-none select-none py-1">
              <Logo brand={brand} variant="dark" size="sm" showTagline={false} />
              <div className="hidden sm:flex flex-col text-left -space-y-0.5 border-l border-white/10 pl-2.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-lime-400 font-bold">
                  {activeBrand.subTaglines[0]}
                </span>
                <span className="text-[9px] font-mono tracking-wider text-slate-400 font-medium">
                  {activeBrand.subTaglines[1]}
                </span>
              </div>
            </a>

            {/* Desktop Brand Division Switcher */}
            <div className="hidden md:flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10 shadow-inner">
              <button
                type="button"
                onClick={() => onSelectBrand('ess')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  brand === 'ess'
                    ? 'bg-lime-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(132,204,22,0.45)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="Effical Smart Solutions (Main Site)"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${brand === 'ess' ? 'bg-slate-950' : 'bg-lime-400'}`}></span>
                <span>ESS</span>
                <span className="text-[9px] opacity-75 font-mono hidden xl:inline">(Main)</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectBrand('et')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  brand === 'et'
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.45)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="Effical Technologies (Sub Site)"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${brand === 'et' ? 'bg-slate-950' : 'bg-emerald-400'}`}></span>
                <span>ET</span>
                <span className="text-[9px] opacity-75 font-mono hidden xl:inline">(Technologies)</span>
              </button>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">

            {/* Dropdown: We Work With */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('workWith')}
                onMouseEnter={() => setOpenDropdown('workWith')}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap rounded-lg transition-colors cursor-pointer ${openDropdown === 'workWith' ? 'text-lime-400 bg-white/5' : 'text-slate-300 hover:text-lime-400 hover:bg-white/5'
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

            {/* Direct Projects Link */}
            <a
              href="#projects"
              className="px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Projects
            </a>

            {/* Social Quick Link (Instagram) */}
            <a
              href={activeBrand.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5 group"
              title={`Visit ${activeBrand.shortName} Instagram`}
            >
              <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-lime-400 transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{brand === 'et' ? 'ET Insta' : 'ESS Insta'}</span>
            </a>

            {/* Direct Facebook Link if in ET mode */}
            {brand === 'et' && activeBrand.socials.facebook && (
              <a
                href={activeBrand.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-[13px] tracking-wide font-medium whitespace-nowrap text-slate-300 hover:text-lime-400 transition-colors rounded-lg hover:bg-white/5 group"
                title="Visit Effical Technologies Facebook"
              >
                <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-lime-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span>ET Facebook</span>
              </a>
            )}

            {/* Support Link with Icon */}
            <a
              href={`tel:${activeBrand.phone}`}
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
                    href={`https://wa.me/${activeBrand.whatsappNumber}?text=Hi%20${encodeURIComponent(activeBrand.shortName)}%2C%20I%20would%20like%20a%20Quote.`}
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
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile quick brand badge toggle */}
            <button
              type="button"
              onClick={() => onSelectBrand(brand === 'ess' ? 'et' : 'ess')}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/10 border border-white/15 text-lime-300 flex items-center gap-1"
            >
              <span>{brand.toUpperCase()}</span>
              <span className="text-[9px] text-slate-400">⇄</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-lime-400 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bg-[#060c08]/98 border-b border-emerald-500/20 backdrop-blur-2xl px-6 py-6 shadow-2xl flex flex-col gap-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            
            {/* Mobile Brand Switcher Card */}
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
              <p className="text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">Select Site / Brand:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onSelectBrand('ess')}
                  className={`p-2.5 rounded-xl text-left flex flex-col gap-0.5 border transition-all ${
                    brand === 'ess'
                      ? 'bg-lime-400/15 border-lime-400 text-white'
                      : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-lime-300">ESS</span>
                    {brand === 'ess' && <Check className="w-3.5 h-3.5 text-lime-400" />}
                  </div>
                  <span className="text-[10px] text-slate-300">Smart Solutions</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectBrand('et')}
                  className={`p-2.5 rounded-xl text-left flex flex-col gap-0.5 border transition-all ${
                    brand === 'et'
                      ? 'bg-emerald-400/15 border-emerald-400 text-white'
                      : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-emerald-300">ET</span>
                    {brand === 'et' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <span className="text-[10px] text-slate-300">Technologies</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>We Work With</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Projects
              </a>

              <a
                href={activeBrand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5 flex items-center justify-between"
              >
                <span>{activeBrand.shortName} Instagram</span>
                <span className="text-xs font-mono text-lime-400">@visit</span>
              </a>

              {brand === 'et' && activeBrand.socials.facebook && (
                <a
                  href={activeBrand.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5 flex items-center justify-between"
                >
                  <span>ET Facebook Page</span>
                  <span className="text-xs font-mono text-lime-400">@visit</span>
                </a>
              )}

              <a
                href={`tel:${activeBrand.phone}`}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-lime-400 rounded-xl hover:bg-white/5 flex items-center gap-2"
              >
                <LifeBuoy className="w-4 h-4" />
                <span>Support ({activeBrand.phone})</span>
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
                href={`https://wa.me/${activeBrand.whatsappNumber}?text=Hi%20${encodeURIComponent(activeBrand.shortName)}%2C%20I%20would%20like%20a%20Quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-3 justify-center text-sm rounded-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp {activeBrand.shortName}</span>
              </a>
            </div>

          </div>
        )}
      </header>
    </>
  );
}

