import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, Phone } from 'lucide-react';
import { BRANDS } from '../data/siteContent';

export default function FloatingActions({ brand = 'ess' }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const activeBrand = BRANDS[brand] || BRANDS.ess;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-[#070e0a]/90 hover:bg-lime-500/20 text-slate-300 hover:text-lime-400 border border-white/10 hover:border-lime-500/40 shadow-xl backdrop-blur-md flex items-center justify-center transition-all animate-in fade-in zoom-in duration-200 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Phone Call Button */}
      <a
        href={`tel:${activeBrand.phone}`}
        className="pointer-events-auto w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-105"
        title={`Call ${activeBrand.shortName} Engineer`}
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Action with Active Indicator */}
      <a
        href={`https://wa.me/${activeBrand.whatsappNumber}?text=Hi%20${encodeURIComponent(activeBrand.shortName)}%2C%20I%20am%20interested%20in%20your%20Smart%20Solutions.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold font-heading tracking-wide pr-1">
          WhatsApp {activeBrand.shortName}
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-lime-300 rounded-full animate-ping opacity-75"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-lime-300 rounded-full border-2 border-slate-900"></span>
      </a>

    </div>
  );
}



