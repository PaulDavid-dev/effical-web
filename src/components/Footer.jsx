import React from 'react';
import { BRANDS } from '../data/siteContent';
import Logo from './Logo';

export default function Footer({ 
  brand = 'ess', 
  onSelectBrand = () => { }, 
  onOpenPlanner,
  onOpenPrivacy,
  onOpenTerms
}) {
  const activeBrand = BRANDS[brand] || BRANDS.ess;

  return (
    <footer className="relative bg-[#030704] text-slate-400 text-sm overflow-hidden border-t border-emerald-500/20 select-none">

      {/* Ambient Radial Glow & Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,_#064e3b20_0%,_transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/6 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-60 h-60 bg-lime-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative ambient glowing dots */}
      <div className="absolute top-8 left-1/4 w-2 h-2 rounded-full bg-lime-400/40 blur-[1px] pointer-events-none" />
      <div className="absolute top-1/2 right-16 w-2 h-2 rounded-full bg-lime-400/60 shadow-[0_0_8px_#a3e635] pointer-events-none" />

      {/* Tightly bounded container to eliminate over-spacing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-2">

        {/* Middle Bar: Logo on Left, Navigation Links on Right */}
        <div className="pb-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-emerald-500/15">
          {/* Logo with Green Accent Dot Below */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Logo brand={brand} variant="dark" size="xl" showTagline={false} />
            <div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635] ml-1" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300 font-medium">
            <a href="#contact" className="hover:text-lime-400 transition-colors">
              Contact Us
            </a>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-lime-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-lime-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Channels */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium">
          <p className="text-center sm:text-left">
            Copyright © 2026 All Rights Reserved {activeBrand.fullName || activeBrand.name}
          </p>

          {/* Social Channels */}
          <div className="flex items-center gap-4 text-slate-300">
            {activeBrand.socials?.facebook && (
              <a
                href={activeBrand.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition-colors p-1"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            )}

            <a
              href={activeBrand.socials?.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors p-1"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}



