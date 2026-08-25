import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Phone,
  Menu,
  X,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { BRANDS } from '../data/siteContent';
import Logo from './Logo';

export default function Navbar({ 
  brand = 'ess', 
  onOpenPlanner 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const activeBrand = BRANDS[brand] || BRANDS.ess;

  // Search items list
  const searchableServices = [
    { title: 'Smart Home Automation', category: 'Automation', link: '#solutions' },
    { title: 'AI-Powered CCTV & Surveillance', category: 'Security', link: '#solutions' },
    { title: 'Luxury Touch Glass Switches', category: 'Hardware', link: '#solutions' },
    { title: 'Automatic Boom Barriers & Gates', category: 'Access', link: '#solutions' },
    { title: 'Intrusion Detection & Fire Alarms', category: 'Security', link: '#solutions' },
    { title: 'High-Speed Enterprise WiFi & Networking', category: 'Network', link: '#solutions' },
    { title: 'Completed Villa & HQ Projects', category: 'Portfolio', link: '#projects' },
    { title: 'Industries & Workspaces We Work With', category: 'Industries', link: '#industries' }
  ];

  const filteredServices = searchQuery.trim() === ''
    ? searchableServices
    : searchableServices.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) : 0;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 20);

      // Detect active section for nav highlight
      const scrollPos = window.scrollY + 200;
      if (scrollPos < 600) {
        setActiveSection('home');
      } else if (document.getElementById('contact')?.offsetTop && scrollPos >= document.getElementById('contact').offsetTop - 200) {
        setActiveSection('contact');
      } else if (document.getElementById('projects')?.offsetTop && scrollPos >= document.getElementById('projects').offsetTop - 200) {
        setActiveSection('projects');
      } else if (document.getElementById('solutions')?.offsetTop && scrollPos >= document.getElementById('solutions').offsetTop - 200) {
        setActiveSection('services');
      } else if (document.getElementById('how-it-works')?.offsetTop && scrollPos >= document.getElementById('how-it-works').offsetTop - 200) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Search Modal Keyboard Focus & Escape
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-300 origin-left z-[80] transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        ref={dropdownRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#040806]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl h-20 md:h-22'
            : 'bg-[#040806]/85 backdrop-blur-md border-b border-white/5 h-22 md:h-24'
        }`}
      >
        {/* Subtle Bottom Accent Glow Line */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between gap-4">

          {/* Left: Prominent Big Brand Logo */}
          <div className="flex items-center shrink-0 py-1">
            <a href="#" className="flex items-center group text-decoration-none select-none">
              <Logo brand={brand} variant="dark" size="header" showTagline={false} />
            </a>
          </div>

          {/* Center: Main Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 2xl:gap-11">
            <a
              href="#"
              className={`text-sm xl:text-[15px] font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                activeSection === 'home'
                  ? 'text-lime-400'
                  : 'text-slate-200 hover:text-lime-400'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime-400 rounded-full"></span>
              )}
            </a>

            <a
              href="#how-it-works"
              className={`text-sm xl:text-[15px] font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                activeSection === 'about'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-lime-400'
              }`}
            >
              About Us
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime-400 rounded-full"></span>
              )}
            </a>

            <a
              href="#solutions"
              className={`text-sm xl:text-[15px] font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                activeSection === 'services'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-lime-400'
              }`}
            >
              Services
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime-400 rounded-full"></span>
              )}
            </a>

            <a
              href="#projects"
              className={`text-sm xl:text-[15px] font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                activeSection === 'projects'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-lime-400'
              }`}
            >
              Projects
              {activeSection === 'projects' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime-400 rounded-full"></span>
              )}
            </a>

            <a
              href="#contact"
              className={`text-sm xl:text-[15px] font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                activeSection === 'contact'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-lime-400'
              }`}
            >
              Contact Us
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime-400 rounded-full"></span>
              )}
            </a>
          </nav>

          {/* Right: Search, Phone Support Block & Get Free Quote Button */}
          <div className="hidden md:flex items-center gap-4 xl:gap-6 shrink-0">
            
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full text-slate-300 hover:text-lime-400 hover:bg-white/5 transition-all cursor-pointer group"
              title="Search Services & Solutions"
              aria-label="Search"
            >
              <Search className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </button>

            {/* Vertical Separator */}
            <div className="w-px h-8 bg-white/15 hidden xl:block" />

            {/* Phone Contact Block: Icon + Stacked Text */}
            <a
              href={`tel:${activeBrand.phone}`}
              className="flex items-center gap-3 group text-decoration-none py-1"
              title="Call EFFICAL Support"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-lime-400 group-hover:border-lime-400/40 group-hover:bg-lime-400/10 transition-all shadow-inner">
                <Phone className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-medium text-slate-400 leading-tight">
                  Have Any Questions?
                </span>
                <span className="text-xs xl:text-sm font-bold text-slate-100 group-hover:text-lime-400 font-mono tracking-tight transition-colors">
                  {activeBrand.phone}
                </span>
              </div>
            </a>

            {/* Get Free Quote Pill Button */}
            <button
              type="button"
              onClick={onOpenPlanner}
              className="px-5 xl:px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold whitespace-nowrap text-slate-950 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400 hover:from-lime-300 hover:to-emerald-300 transition-all duration-200 shadow-[0_0_20px_-4px_rgba(132,204,22,0.45)] hover:shadow-[0_0_26px_-2px_rgba(132,204,22,0.6)] cursor-pointer active:scale-95"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Search on mobile */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-lime-400"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-lime-400 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[88px] sm:top-24 bg-[#060c08]/98 border-b border-emerald-500/20 backdrop-blur-2xl px-6 py-6 shadow-2xl flex flex-col gap-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-lime-400 rounded-xl hover:bg-white/5"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                About Us
              </a>

              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-lime-400 rounded-xl hover:bg-white/5"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Phone Contact item */}
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Have Any Questions?</div>
                  <div className="text-xs font-mono font-bold text-white">{activeBrand.phone}</div>
                </div>
              </div>
              <a
                href={`tel:${activeBrand.phone}`}
                className="px-3 py-1.5 rounded-lg bg-lime-400 text-slate-950 font-bold text-xs"
              >
                Call
              </a>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full shadow-lg text-center cursor-pointer"
              >
                Get Free Quote
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

      {/* Quick Search Modal Overlay */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4 animate-in fade-in duration-200"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-xl bg-[#08120c] border border-emerald-500/30 rounded-2xl shadow-2xl p-4 overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Field */}
            <div className="relative flex items-center border-b border-white/10 pb-3">
              <Search className="w-5 h-5 text-lime-400 absolute left-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solutions, CCTV, touch switches, automation..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-10 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-lime-400/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 p-1 rounded-md text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Results */}
            <div className="mt-3 max-h-72 overflow-y-auto flex flex-col gap-1.5">
              <div className="text-[11px] font-mono uppercase text-slate-400 px-3 py-1">
                {searchQuery ? 'Matching Services & Solutions' : 'Suggested Solutions'}
              </div>
              {filteredServices.length > 0 ? (
                filteredServices.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-lime-400/10 text-slate-200 hover:text-lime-300 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-lime-400">
                        {item.category}
                      </span>
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-lime-400 transition-colors" />
                  </a>
                ))
              ) : (
                <div className="p-6 text-center text-sm text-slate-400">
                  No solutions matching "{searchQuery}". Try "CCTV", "Switches", or "Automation".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
