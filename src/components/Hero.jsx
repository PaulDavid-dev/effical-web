import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Lightbulb, 
  Lock, 
  Unlock, 
  Camera, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  PhoneCall,
  Zap,
  AlertTriangle,
  ShieldAlert,
  Volume2,
  RotateCcw
} from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';

const ROTATING_TARGETS = [
  "Luxury Villas & Residences",
  "Corporate Headquarters",
  "Modern Penthouses",
  "Luxury Resorts & Hotels",
  "Industrial Facilities"
];

export default function Hero({ onOpenPlanner }) {
  // Active selected view for the bottom live camera feed
  // 'living_room' | 'front_door' | 'main_gate' | 'tamper_sim'
  const [activeTile, setActiveTile] = useState('front_door');

  // Interactive Hero Control Panel State
  const [lightsActive, setLightsActive] = useState(true);
  const [doorLocked, setDoorLocked] = useState(false); // false = open door, true = secured
  const [gateOpen, setGateOpen] = useState(false);
  const [tamperAlarmActive, setTamperAlarmActive] = useState(false);
  const [strobeFlash, setStrobeFlash] = useState(false);

  // Animated Text Word Rotator State
  const [targetIndex, setTargetIndex] = useState(0);
  const [wordFadeKey, setWordFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prev) => (prev + 1) % ROTATING_TARGETS.length);
      setWordFadeKey((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Alarm strobe effect
  useEffect(() => {
    let strobeTimer;
    if (tamperAlarmActive) {
      strobeTimer = setInterval(() => {
        setStrobeFlash((prev) => !prev);
      }, 400);
    } else {
      setStrobeFlash(false);
    }
    return () => clearInterval(strobeTimer);
  }, [tamperAlarmActive]);

  // Tile 1 Handler: Living Room
  const handleLightsClick = () => {
    const nextState = !lightsActive;
    setLightsActive(nextState);
    setActiveTile('living_room');
    setTamperAlarmActive(false);
  };

  // Tile 2 Handler: Front Door
  const handleDoorClick = () => {
    const nextLocked = !doorLocked;
    setDoorLocked(nextLocked);
    setActiveTile('front_door');
    setTamperAlarmActive(false);
  };

  // Tile 3 Handler: Main Gate
  const handleGateClick = () => {
    const nextGate = !gateOpen;
    setGateOpen(nextGate);
    setActiveTile('main_gate');
    setTamperAlarmActive(false);
  };

  // Tile 4 Handler: Simulator / Unauthorized Door Tamper
  const handleTamperSimulatorClick = () => {
    if (tamperAlarmActive) {
      setTamperAlarmActive(false);
      setActiveTile('front_door');
    } else {
      setTamperAlarmActive(true);
      setActiveTile('tamper_sim');
    }
  };

  // Determine current camera image & details based on activeTile
  const getCameraFeedData = () => {
    if (activeTile === 'tamper_sim' || tamperAlarmActive) {
      return {
        image: '/alarm_triggered.jpg',
        title: '⚠️ CAM 01: TAMPER BREACH IN PROGRESS',
        badge: '110dB SIREN ACTIVE',
        badgeColor: 'bg-rose-600 text-white animate-pulse',
        statusText: 'CRITICAL INTRUSION: DOOR TAMPER DETECTED',
        statusColor: 'text-rose-400',
        dotColor: 'bg-rose-500 animate-ping',
        subTag: 'STROBE 100% BURST'
      };
    }

    if (activeTile === 'living_room') {
      return {
        image: '/lights_on_room.jpg',
        title: 'CAM 02: Living Room Interior',
        badge: lightsActive ? '80% CIRCADIAN ON' : 'LIGHTS STANDBY (OFF)',
        badgeColor: lightsActive ? 'bg-lime-400 text-slate-950 font-bold' : 'bg-slate-700 text-white',
        statusText: lightsActive ? 'WARM AMBIENCE ACTIVE' : 'LIVING ROOM LIGHTS OFF',
        statusColor: lightsActive ? 'text-lime-300' : 'text-slate-400',
        dotColor: lightsActive ? 'bg-lime-400' : 'bg-slate-500',
        subTag: 'WARM 2700K LEDS',
        isDimmed: !lightsActive
      };
    }

    if (activeTile === 'main_gate') {
      return {
        image: gateOpen 
          ? '/main_gate_open.jpg' 
          : '/main_gate_closed.jpg',
        title: 'CAM 03: Main Perimeter Gate',
        badge: gateOpen ? 'GATE OPEN' : 'GATE CLOSED & ARMED',
        badgeColor: gateOpen ? 'bg-emerald-400 text-slate-950 font-bold' : 'bg-slate-700 text-white',
        statusText: gateOpen ? 'FASTAG AUTO-SENSOR: GATE OPEN' : 'PERIMETER GATE LOCKED & SECURED',
        statusColor: gateOpen ? 'text-emerald-300' : 'text-slate-300',
        dotColor: gateOpen ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-400',
        subTag: gateOpen ? 'MOTOR DRIVE ACTIVE' : 'PERIMETER SECURE'
      };
    }

    // Default: Front Door (activeTile === 'front_door')
    return {
      image: !doorLocked 
        ? '/front_door_open.jpg' 
        : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      title: 'CAM 01: Front Entrance',
      badge: !doorLocked ? 'DOOR OPEN / UNLOCKED' : 'SECURED DEADBOLT',
      badgeColor: !doorLocked ? 'bg-rose-500 text-white font-bold' : 'bg-emerald-400 text-slate-950 font-bold',
      statusText: !doorLocked ? 'BIOMETRIC DEADBOLT: OPEN' : 'PERIMETER SECURED & ARMED',
      statusColor: !doorLocked ? 'text-rose-300' : 'text-emerald-300',
      dotColor: !doorLocked ? 'bg-rose-400 animate-pulse' : 'bg-emerald-400',
      subTag: !doorLocked ? 'ACCESS AUTHORIZED' : 'END-TO-END ENCRYPTED'
    };
  };

  const camData = getCameraFeedData();

  return (
    <>
      <style>{`
        @keyframes strobePulse {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.01); }
        }
        @keyframes sirenBlink {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.2; }
        }
        .alarm-camera-strobe {
          animation: strobePulse 0.7s ease-in-out infinite;
        }
        .siren-blink-overlay {
          animation: sirenBlink 0.4s linear infinite;
        }
      `}</style>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid-bg">
        {/* Glow Orbs in background */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Animated Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Top Badge with Shimmer Text */}
              <div className="inline-flex items-center gap-2.5 w-fit">
                <span className="glass-badge">
                  <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span className="text-shimmer-effect font-bold">IN SYNC WITH THE SMARTER WORLD</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Certified Integrator
                </span>
              </div>

              {/* Main Headline with Flowing Animated Gradient Text */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] font-syne">
                <span>Smart Living.</span> <br />
                <span className="text-gradient-animated-emerald block pb-1">
                  Intelligent Security.
                </span>
              </h1>

              {/* Dynamic Animated Word Morph Banner */}
              <div className="flex items-center gap-2 text-sm sm:text-base font-mono">
                <span className="text-slate-400 uppercase tracking-wider text-xs">Tailored for:</span>
                <span 
                  key={wordFadeKey}
                  className="animate-word-flip px-3 py-1 rounded-lg bg-emerald-500/10 border border-lime-400/40 text-lime-300 font-bold shadow-lg shadow-lime-500/10"
                >
                  {ROTATING_TARGETS[targetIndex]}
                </span>
              </div>

              {/* Tagline / Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                Where luxury meets intelligent automation. We engineer custom <strong className="text-white font-semibold hover:text-lime-400 transition-colors">Home Automation</strong>, <strong className="text-white font-semibold hover:text-emerald-400 transition-colors">AI CCTV Security</strong>, <strong className="text-white font-semibold hover:text-lime-400 transition-colors">Motorized Gates</strong>, and <strong className="text-white font-semibold hover:text-teal-400 transition-colors">Enterprise Gigabit Networking</strong> into one unified, calm space. One team, one system, from gate to bedroom.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-lime-400/50 hover:text-lime-300 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" /> Luxury Villas &amp; Homes
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-lime-400/50 hover:text-lime-300 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" /> Commercial Offices
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-lime-400/50 hover:text-lime-300 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" /> Industrial Gates &amp; CCTV
                </span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-lime-400/50 hover:text-lime-300 transition-all cursor-default">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" /> Apple Home &amp; Matter Ready
                </span>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  type="button"
                  onClick={onOpenPlanner}
                  className="btn-primary btn-shimmer py-3.5 px-7 text-base group cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a 
                  href={`tel:${SITE_INFO.phone}`} 
                  className="btn-secondary py-3.5 px-6 text-base flex items-center gap-2 group"
                >
                  <PhoneCall className="w-4 h-4 text-lime-400 group-hover:animate-bounce" />
                  <span>{SITE_INFO.phone}</span>
                </a>
              </div>

              {/* Verified Scale Metrics with Animated Glow Numbers */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-white font-syne text-glow-emerald">450+</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Smart Homes</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-lime-400 font-syne text-glow-lime">6,000+</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Gate Automations</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-emerald-400 font-syne text-glow-emerald">24/7</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Dedicated SLA</p>
                </div>
              </div>

            </div>

            {/* Right Column: Live Interactive Smart Control Dashboard Mockup */}
            <div className="lg:col-span-5 relative">
              <div className={`relative mx-auto max-w-md glass-panel p-5 sm:p-6 border transition-all duration-300 rounded-3xl ${
                tamperAlarmActive 
                  ? 'border-rose-500/80 shadow-2xl shadow-rose-600/30' 
                  : 'border-emerald-500/20 shadow-2xl shadow-black/80'
              }`}>
                
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-3 h-3 rounded-full ${tamperAlarmActive ? 'bg-rose-500 animate-ping' : 'bg-lime-400 animate-pulse'}`}></div>
                    <div>
                      <h2 className="text-sm font-semibold text-white tracking-wide font-heading">ESS Smart Space OS</h2>
                      <p className="text-[10px] font-mono text-slate-400">
                        {tamperAlarmActive ? '⚠️ THREAT INTRUSION DETECTED' : 'ONLINE • MATTER READY • 1.2Gbps'}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded border transition-colors ${
                    tamperAlarmActive 
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse font-bold' 
                      : 'bg-lime-500/15 text-lime-300 border-lime-500/30'
                  }`}>
                    {tamperAlarmActive ? '🚨 ALARM ACTIVE' : 'LIVE TELEMETRY'}
                  </span>
                </div>

                {/* Interactive Dashboard Grid - 4 Clickable Action Tiles */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  
                  {/* Tile 1: Lighting Ambience */}
                  <button
                    type="button"
                    onClick={handleLightsClick}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                      activeTile === 'living_room'
                        ? 'bg-lime-500/20 border-lime-400 shadow-lg shadow-lime-500/20 ring-2 ring-lime-400/40'
                        : lightsActive 
                          ? 'bg-lime-500/10 border-lime-500/30 text-lime-300' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Lightbulb className={`w-5 h-5 ${lightsActive ? 'text-lime-400' : 'text-slate-500'}`} />
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${lightsActive ? 'bg-lime-400 text-slate-950' : 'bg-slate-700 text-white'}`}>
                        {lightsActive ? '80%' : 'OFF'}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200">Living Room</p>
                    <p className="text-[11px] text-slate-400">Warm Circadian</p>
                    {activeTile === 'living_room' && (
                      <span className="absolute bottom-1 right-2 text-[9px] font-mono text-lime-400 font-bold">● VIEWING</span>
                    )}
                  </button>

                  {/* Tile 2: Smart Front Lock */}
                  <button
                    type="button"
                    onClick={handleDoorClick}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                      activeTile === 'front_door'
                        ? !doorLocked 
                          ? 'bg-rose-500/20 border-rose-400 shadow-lg shadow-rose-500/20 ring-2 ring-rose-400/40'
                          : 'bg-emerald-500/20 border-emerald-400 shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-400/40'
                        : !doorLocked
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      {doorLocked ? (
                        <Lock className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Unlock className="w-5 h-5 text-rose-400" />
                      )}
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${doorLocked ? 'bg-emerald-400 text-slate-950' : 'bg-rose-400 text-black'}`}>
                        {doorLocked ? 'SECURED' : 'OPEN'}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200">Front Door</p>
                    <p className="text-[11px] text-slate-400">Biometric Deadbolt</p>
                    {activeTile === 'front_door' && (
                      <span className="absolute bottom-1 right-2 text-[9px] font-mono text-emerald-400 font-bold">● VIEWING</span>
                    )}
                  </button>

                  {/* Tile 3: Automated Main Gate */}
                  <button
                    type="button"
                    onClick={handleGateClick}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                      activeTile === 'main_gate'
                        ? 'bg-lime-500/20 border-lime-400 shadow-lg shadow-lime-500/20 ring-2 ring-lime-400/40'
                        : gateOpen 
                          ? 'bg-lime-500/10 border-lime-500/30 text-lime-300' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <ShieldCheck className={`w-5 h-5 ${gateOpen ? 'text-lime-400' : 'text-slate-400'}`} />
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${gateOpen ? 'bg-lime-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                        {gateOpen ? 'OPEN' : 'CLOSED'}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200">Main Entry Gate</p>
                    <p className="text-[11px] text-slate-400">FASTag Auto-Sensor</p>
                    {activeTile === 'main_gate' && (
                      <span className="absolute bottom-1 right-2 text-[9px] font-mono text-lime-400 font-bold">● VIEWING</span>
                    )}
                  </button>

                  {/* Tile 4: Simulator — Unauthorized Door Tamper Alert */}
                  <button
                    type="button"
                    onClick={handleTamperSimulatorClick}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                      tamperAlarmActive
                        ? 'bg-rose-600/30 border-rose-500 text-rose-300 shadow-lg shadow-rose-600/30 ring-2 ring-rose-500 animate-pulse'
                        : 'bg-rose-500/10 border-rose-500/30 hover:border-rose-400/60 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      {tamperAlarmActive ? (
                        <ShieldAlert className="w-5 h-5 text-rose-400 animate-bounce" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-400" />
                      )}
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        tamperAlarmActive ? 'bg-rose-500 text-white animate-ping' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      }`}>
                        {tamperAlarmActive ? 'ALARM ON' : 'SIMULATE'}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200">
                      {tamperAlarmActive ? 'Tamper Alarm ON' : 'Door Tamper Sim'}
                    </p>
                    <p className="text-[11px] text-rose-400/90 font-mono">
                      {tamperAlarmActive ? '110dB Siren Blaring' : 'Click to Trigger'}
                    </p>
                    {activeTile === 'tamper_sim' && (
                      <span className="absolute bottom-1 right-2 text-[9px] font-mono text-rose-400 font-bold">● ALARM</span>
                    )}
                  </button>

                </div>

                {/* === DYNAMIC 4K AI CAMERA FEED (Directly changes based on clicked tile) === */}
                <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 bg-black/80 mb-3 ${
                  tamperAlarmActive 
                    ? 'border-rose-500 shadow-2xl shadow-rose-600/40 ring-2 ring-rose-500/50' 
                    : 'border-emerald-500/20'
                }`}>
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    
                    {/* Live Camera Image Feed */}
                    <img 
                      key={camData.image}
                      src={camData.image} 
                      alt={camData.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        tamperAlarmActive ? 'alarm-camera-strobe' : ''
                      } ${camData.isDimmed ? 'brightness-40 grayscale-30' : 'brightness-95'}`}
                    />

                    {/* Strobe flash overlay during alarm */}
                    {tamperAlarmActive && (
                      <div className={`absolute inset-0 bg-rose-600/35 pointer-events-none transition-opacity duration-150 ${
                        strobeFlash ? 'opacity-100' : 'opacity-0'
                      }`} />
                    )}

                    {/* Gradient shading for clear text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none"></div>
                    
                    {/* Camera Top OSD Bar */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
                        <Camera className={`w-3.5 h-3.5 ${tamperAlarmActive ? 'text-rose-500 animate-ping' : 'text-lime-400 animate-pulse'}`} />
                        <span className="font-semibold tracking-wide">{camData.title}</span>
                      </div>

                      <div className={`text-[10px] font-mono px-2 py-0.5 rounded border ${camData.badgeColor}`}>
                        {camData.badge}
                      </div>
                    </div>

                    {/* Disarm Quick Button if Alarm is active */}
                    {tamperAlarmActive && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setTamperAlarmActive(false);
                            setActiveTile('front_door');
                          }}
                          className="cursor-pointer px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading text-xs font-bold shadow-2xl shadow-emerald-500/50 flex items-center gap-2 transform hover:scale-105 transition-all"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Disarm Tamper Alarm</span>
                        </button>
                      </div>
                    )}

                    {/* Camera Bottom OSD Bar */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono pointer-events-none">
                      <div className="flex items-center gap-1.5 text-white font-semibold">
                        <span className={`w-2 h-2 rounded-full ${camData.dotColor}`}></span>
                        <span className={camData.statusColor}>{camData.statusText}</span>
                      </div>

                      <div className="text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                        {camData.subTag}
                      </div>
                    </div>

                  </div>

                  {/* Camera Channel Quick Switcher Tabs */}
                  <div className="flex items-center justify-between px-3 py-2 bg-black/90 border-t border-white/10 text-[10px] font-mono">
                    <span className="text-slate-400">FEED SELECT:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => { setActiveTile('front_door'); setTamperAlarmActive(false); }}
                        className={`cursor-pointer px-2 py-0.5 rounded transition-all ${
                          activeTile === 'front_door' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Front Door
                      </button>
                      <button
                        type="button"
                        onClick={() => { setActiveTile('living_room'); setTamperAlarmActive(false); }}
                        className={`cursor-pointer px-2 py-0.5 rounded transition-all ${
                          activeTile === 'living_room' ? 'bg-lime-500/20 text-lime-300 border border-lime-500/40' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Living Room
                      </button>
                      <button
                        type="button"
                        onClick={() => { setActiveTile('main_gate'); setTamperAlarmActive(false); }}
                        className={`cursor-pointer px-2 py-0.5 rounded transition-all ${
                          activeTile === 'main_gate' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Main Gate
                      </button>
                      <button
                        type="button"
                        onClick={handleTamperSimulatorClick}
                        className={`cursor-pointer px-2 py-0.5 rounded transition-all ${
                          tamperAlarmActive ? 'bg-rose-600 text-white animate-pulse' : 'text-rose-400 hover:text-rose-300'
                        }`}
                      >
                        🚨 Tamper Sim
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive Help Hint */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                  <span>💡 Click tiles above to change live camera view</span>
                  <span className="text-lime-400 flex items-center gap-1">
                    <Activity className="w-3 h-3 animate-pulse" /> Self-Healing Mesh
                  </span>
                </div>

              </div>

              {/* Background decorative glow */}
              <div className={`absolute -bottom-6 -right-6 w-44 h-44 rounded-full blur-2xl -z-10 transition-colors duration-500 ${
                tamperAlarmActive ? 'bg-rose-600/30' : 'bg-lime-500/20'
              }`}></div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
