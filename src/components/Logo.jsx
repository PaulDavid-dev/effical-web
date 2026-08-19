import React from 'react';

/**
 * ESS - EFFICAL SMART SOLUTIONS Official Brand Logo Component
 * Pixel-perfect SVG & typographic representation of the brand logo
 */
export default function Logo({ 
  variant = 'dark', // 'dark' (for dark website UI) | 'light' (original green on light) | 'compact'
  size = 'md',      // 'sm' | 'md' | 'lg'
  showTagline = true,
  className = ''
}) {
  const isDark = variant === 'dark';

  // Size configurations
  const sizeConfig = {
    sm: {
      essSize: 'text-xl',
      efficalSize: 'text-[11px]',
      smartSize: 'text-[7px]',
      globeSize: 32,
      gap: 'gap-0.5',
      lineWidth: 'w-full',
      padding: 'py-0.5'
    },
    md: {
      essSize: 'text-2xl sm:text-3xl',
      efficalSize: 'text-xs sm:text-sm tracking-[0.28em]',
      smartSize: 'text-[8px] sm:text-[9px] tracking-[0.38em]',
      globeSize: 42,
      gap: 'gap-1',
      lineWidth: 'w-full',
      padding: 'py-1'
    },
    lg: {
      essSize: 'text-4xl sm:text-5xl',
      efficalSize: 'text-base sm:text-lg tracking-[0.32em]',
      smartSize: 'text-[10px] sm:text-xs tracking-[0.42em]',
      globeSize: 56,
      gap: 'gap-1.5',
      lineWidth: 'w-full',
      padding: 'py-1.5'
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  // Render the isometric 3D quarter-sphere pixel globe grid
  const renderGlobe = () => (
    <svg 
      width={currentSize.globeSize} 
      height={currentSize.globeSize} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 -ml-1 -mt-2.5 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Row 1 - Top Curved */}
      <rect x="70" y="8" width="9" height="9" rx="1.5" fill="#84cc16" />
      <rect x="83" y="11" width="8" height="8" rx="1.5" fill="#005028" />

      {/* Row 2 */}
      <rect x="52" y="14" width="10" height="10" rx="2" fill="#005028" />
      <rect x="67" y="18" width="10" height="10" rx="2" fill="#84cc16" />
      <rect x="81" y="21" width="9" height="9" rx="1.8" fill="#15803d" />
      <rect x="92" y="26" width="7" height="7" rx="1.5" fill="#a3e635" />

      {/* Row 3 */}
      <rect x="36" y="24" width="11" height="11" rx="2" fill="#005028" />
      <rect x="51" y="27" width="11" height="11" rx="2" fill="#a3e635" />
      <rect x="66" y="31" width="10" height="10" rx="2" fill="#22c55e" />
      <rect x="80" y="34" width="9" height="9" rx="1.8" fill="#005028" />
      <rect x="91" y="39" width="7" height="7" rx="1.5" fill="#84cc16" />

      {/* Row 4 */}
      <rect x="23" y="37" width="11" height="11" rx="2" fill="#84cc16" />
      <rect x="37" y="40" width="11" height="11" rx="2" fill="#005028" />
      <rect x="52" y="43" width="10" height="10" rx="2" fill="#84cc16" />
      <rect x="66" y="47" width="10" height="10" rx="2" fill="#005028" />
      <rect x="80" y="50" width="8" height="8" rx="1.8" fill="#15803d" />
      <rect x="90" y="54" width="6" height="6" rx="1.5" fill="#a3e635" />

      {/* Row 5 - Bottom Curved */}
      <rect x="12" y="52" width="11" height="11" rx="2" fill="#84cc16" />
      <rect x="26" y="55" width="10" height="10" rx="2" fill="#a3e635" />
      <rect x="40" y="58" width="10" height="10" rx="2" fill="#005028" />
      <rect x="54" y="61" width="9" height="9" rx="1.8" fill="#84cc16" />
      <rect x="67" y="64" width="8" height="8" rx="1.8" fill="#005028" />
      <rect x="79" y="67" width="7" height="7" rx="1.5" fill="#16a34a" />
    </svg>
  );

  return (
    <div className={`inline-flex flex-col items-center select-none text-center ${currentSize.gap} ${className}`}>
      
      {/* Top Section: "ESS" + 3D Pixel Globe */}
      <div className="flex items-center justify-center relative">
        <span 
          style={{ fontFamily: 'Georgia, "Cinzel", "Bodoni MT", serif', letterSpacing: '-0.02em' }}
          className={`font-black leading-none tracking-tight ${currentSize.essSize} ${
            isDark ? 'text-white drop-shadow-[0_2px_12px_rgba(132,204,22,0.3)]' : 'text-[#005028]'
          }`}
        >
          ESS
        </span>
        {renderGlobe()}
      </div>

      {/* Thin Separator Line with Diamond accents */}
      <div className="w-full flex items-center justify-center my-0.5 relative">
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#84cc16] to-transparent opacity-80" />
        <div className="absolute w-1.5 h-1.5 rotate-45 bg-[#84cc16] border border-[#005028]" />
      </div>

      {/* Middle Text: "EFFICAL" */}
      <div 
        className={`font-heading font-extrabold uppercase leading-none ${currentSize.efficalSize} ${
          isDark ? 'text-[#e2e8f0]' : 'text-[#005028]'
        }`}
      >
        EFFICAL
      </div>

      {/* Bottom Tagline: "SMART SOLUTIONS" */}
      {showTagline && (
        <div 
          className={`font-heading font-semibold uppercase leading-none text-[#84cc16] ${currentSize.smartSize}`}
        >
          SMART SOLUTIONS
        </div>
      )}

    </div>
  );
}
