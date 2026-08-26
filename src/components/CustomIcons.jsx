import React from 'react';

export const NetworkIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="32" cy="18" r="12" />
    <ellipse cx="32" cy="18" rx="6" ry="12" />
    <path d="M20 18h24" />
    <path d="M23 12h18" />
    <path d="M23 24h18" />
    <circle cx="16" cy="44" r="3" />
    <circle cx="32" cy="44" r="3" />
    <circle cx="48" cy="44" r="3" />
    <circle cx="16" cy="56" r="3" />
    <circle cx="32" cy="56" r="3" />
    <circle cx="48" cy="56" r="3" />
    <path d="M16 47v6" />
    <path d="M32 47v6" />
    <path d="M48 47v6" />
    <path d="M16 50h32" />
    <path d="M32 30v11" />
  </svg>
);

export const CameraIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Wall mount & Bracket */}
    <path d="M8 46h8" />
    <path d="M12 46v-8a6 6 0 0 1 6-6h4" />
    {/* Camera Group rotated diagonally */}
    <g transform="rotate(25 22 28)">
      {/* Visor / Sun-shade */}
      <path d="M14 18h30l2 4" />
      <path d="M14 18v4" />
      {/* Main Cylinder Body */}
      <rect x="16" y="22" width="26" height="14" rx="3" />
      {/* Lens Housing */}
      <path d="M42 24h5v10h-5" />
      {/* Base/Joint Rings */}
      <path d="M22 22v14" />
      <path d="M26 22v14" />
    </g>
  </svg>
);

export const IntrusionIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M32 6 L12 14 V28 C12 42 22 52 32 58 C42 52 52 42 52 28 V14 Z" />
    <path d="M32 28 L22 36 V48 H42 V36 Z" />
    <path d="M26 22 A8 8 0 0 1 38 22" />
    <path d="M29 25 A4 4 0 0 1 35 25" />
  </svg>
);

export const SmartLightingIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M24 46h16" />
    <path d="M26 50h12" />
    <path d="M28 54h8" />
    <path d="M32 58v2" />
    <path d="M20 30 C20 20 25 12 32 12 C39 12 44 20 44 30 C44 38 36 42 36 46 H28 C28 42 20 38 20 30 Z" />
    <path d="M26 26 A8 8 0 0 1 38 26" />
    <path d="M29 30 A4 4 0 0 1 35 30" />
    <circle cx="32" cy="34" r="1.5" fill="currentColor" stroke="none" />
    <path d="M32 4V8" />
    <path d="M12 24H16" />
    <path d="M48 24H52" />
    <path d="M16 12L20 16" />
    <path d="M48 12L44 16" />
  </svg>
);

export const SmartLocksIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="20" y="12" width="24" height="40" rx="4" />
    <path d="M44 40h12a4 4 0 0 0 0-8H36" />
    <circle cx="26" cy="20" r="1" fill="currentColor" stroke="none"/>
    <circle cx="32" cy="20" r="1" fill="currentColor" stroke="none"/>
    <circle cx="38" cy="20" r="1" fill="currentColor" stroke="none"/>
    <circle cx="26" cy="26" r="1" fill="currentColor" stroke="none"/>
    <circle cx="32" cy="26" r="1" fill="currentColor" stroke="none"/>
    <circle cx="38" cy="26" r="1" fill="currentColor" stroke="none"/>
    <circle cx="26" cy="32" r="1" fill="currentColor" stroke="none"/>
    <circle cx="32" cy="32" r="1" fill="currentColor" stroke="none"/>
    <circle cx="38" cy="32" r="1" fill="currentColor" stroke="none"/>
    <path d="M48 14 A6 6 0 0 1 56 14" />
    <path d="M50 18 A3 3 0 0 1 54 18" />
  </svg>
);

export const GateIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="8" y="24" width="6" height="32" />
    <rect x="50" y="24" width="6" height="32" />
    <path d="M14 28h36" />
    <path d="M14 50h36" />
    <path d="M20 28v22" />
    <path d="M26 28v22" />
    <path d="M32 28v22" />
    <path d="M38 28v22" />
    <path d="M44 28v22" />
    <path d="M20 28v-4" />
    <path d="M26 28v-6" />
    <path d="M32 28v-8" />
    <path d="M38 28v-6" />
    <path d="M44 28v-4" />
    <path d="M26 12 A8 8 0 0 1 38 12" />
    <path d="M29 16 A4 4 0 0 1 35 16" />
    <circle cx="32" cy="20" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

export const VehicleAccessIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="12" y="32" width="6" height="24" />
    <circle cx="15" cy="35" r="2" />
    <path d="M15 35 L48 18" />
    <path d="M28 46 L30 38 H46 L48 46" />
    <path d="M26 46 H50 V52 H48 V56 H44 V52 H32 V56 H28 V52 H26 Z" />
    <path d="M32 46 H44" />
    <path d="M30 50h4" />
    <path d="M42 50h4" />
  </svg>
);

export const TimeAttendanceIcon = (props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="10" y="12" width="28" height="40" rx="4" />
    <rect x="14" y="16" width="20" height="12" rx="2" />
    <circle cx="16" cy="36" r="1" fill="currentColor" stroke="none"/>
    <circle cx="22" cy="36" r="1" fill="currentColor" stroke="none"/>
    <circle cx="28" cy="36" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="42" r="1" fill="currentColor" stroke="none"/>
    <circle cx="22" cy="42" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="48" r="1" fill="currentColor" stroke="none"/>
    <circle cx="22" cy="48" r="1" fill="currentColor" stroke="none"/>
    <path d="M32 42 L42 22 A3 3 0 0 1 47 25 L38 40" />
    <path d="M38 40 C42 38 46 38 48 40 L52 46 V56 H38 L32 42" />
  </svg>
);
