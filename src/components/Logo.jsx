import React from 'react';
import essLogo from '../assets/logo.png';

/**
 * ESS & ET — EFFICAL Official Brand Logo Component
 * Renders the provided image logo with dynamic brand badge
 */
export default function Logo({ 
  brand = 'ess',
  variant = 'dark', 
  size = 'md',      
  showTagline = true,
  className = ''
}) {
  // Size configurations mapping to height classes
  const sizeConfig = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20'
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img 
        src={essLogo} 
        alt={brand === 'et' ? "Effical Technologies Logo" : "Effical Smart Solutions Logo"} 
        className={`${currentSize} w-auto object-contain transition-transform duration-300 group-hover:scale-105`} 
      />
      {brand === 'et' && (
        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 font-extrabold tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.3)]">
          ET
        </span>
      )}
    </div>
  );
}

