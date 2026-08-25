import React from 'react';
import essLogo from '../assets/logo.png';

/**
 * EFFICAL Official Brand Logo Component
 * Renders the high-resolution brand logo image with customizable sizes
 */
export default function Logo({
  brand = 'ess',
  variant = 'dark',
  size = 'header',
  showTagline = true,
  className = '',
  imgClassName = ''
}) {
  // Size configurations mapping to height classes
  const sizeConfig = {
    xs: 'h-10 sm:h-12',
    sm: 'h-12 sm:h-14',
    md: 'h-16 sm:h-20',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36',
    header: 'h-18 sm:h-24 md:h-28 lg:h-36'
  };

  const currentSize = sizeConfig[size] || sizeConfig.header;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={essLogo}
        alt="Effical Smart Solutions Logo"
        className={`${imgClassName || currentSize} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]`}
      />
    </div>
  );
}
