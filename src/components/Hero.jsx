import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Lightbulb, 
  Lock, 
  Unlock, 
  Camera, 
  Wifi, 
  Thermometer, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Sliders,
  PhoneCall,
  Zap,
  Layers
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
  // Interactive Hero Control Panel State
  const [lightsActive, setLightsActive] = useState(true);
  const [doorLocked, setDoorLocked] = useState(true);
  const [gateOpen, setGateOpen] = useState(false);
  const [acTemp, setAcTemp] = useState(22);
  const [activeCam, setActiveCam] = useState('Front Entrance');

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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid-bg">
      {/* Glow Orbs in background */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Animated Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Badge with Shimmer Text */}
            <div className="inline-flex items-center gap-2.5 w-fit">
              <span className="glass-badge">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
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
              <span className="text-gradient-animated-amber block pb-1">
                Intelligent Security.
              </span>
            </h1>

            {/* Dynamic Animated Word Morph Banner */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono">
              <span className="text-slate-400 uppercase tracking-wider text-xs">Tailored for:</span>
              <span 
                key={wordFadeKey}
                className="animate-word-flip px-3 py-1 rounded-lg bg-white/5 border border-amber-400/40 text-amber-300 font-bold shadow-lg shadow-amber-500/10"
              >
                {ROTATING_TARGETS[targetIndex]}
              </span>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              Where luxury meets intelligent automation. We engineer custom <strong className="text-white font-semibold hover:text-amber-400 transition-colors">Home Automation</strong>, <strong className="text-white font-semibold hover:text-cyan-400 transition-colors">AI CCTV Security</strong>, <strong className="text-white font-semibold hover:text-amber-400 transition-colors">Motorized Gates</strong>, and <strong className="text-white font-semibold hover:text-blue-400 transition-colors">Enterprise Gigabit Networking</strong> into one unified, calm space. One team, one system, from gate to bedroom.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-amber-400/50 hover:text-amber-300 transition-all cursor-default">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Luxury Villas & Homes
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-amber-400/50 hover:text-amber-300 transition-all cursor-default">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Commercial Offices
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-amber-400/50 hover:text-amber-300 transition-all cursor-default">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Industrial Gates & CCTV
              </span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-1.5 hover:border-amber-400/50 hover:text-amber-300 transition-all cursor-default">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Apple Home & Matter Ready
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
                <PhoneCall className="w-4 h-4 text-amber-400 group-hover:animate-bounce" />
                <span>{SITE_INFO.phone}</span>
              </a>
            </div>

            {/* Verified Scale Metrics with Animated Glow Numbers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white font-syne text-glow-amber">450+</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Smart Homes</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-amber-400 font-syne text-glow-amber">6,000+</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Gate Automations</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-cyan-400 font-syne text-glow-cyan">24/7</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Dedicated SLA</p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Smart Control Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md glass-panel p-5 sm:p-6 border border-white/15 shadow-2xl shadow-black/80 rounded-3xl">
              
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <div>
                    <h2 className="text-sm font-semibold text-white tracking-wide font-heading">ESS Smart Space OS</h2>
                    <p className="text-[10px] font-mono text-slate-400">ONLINE • MATTER READY • 1.2Gbps</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Interactive Dashboard Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                
                {/* Tile 1: Lighting Ambience */}
                <button
                  type="button"
                  onClick={() => setLightsActive(!lightsActive)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    lightsActive 
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/10' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Lightbulb className={`w-5 h-5 ${lightsActive ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${lightsActive ? 'bg-amber-400 text-black' : 'bg-slate-700 text-white'}`}>
                      {lightsActive ? '80%' : 'OFF'}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-200">Living Room</p>
                  <p className="text-[11px] text-slate-400">Warm Circadian</p>
                </button>

                {/* Tile 2: Smart Front Lock */}
                <button
                  type="button"
                  onClick={() => setDoorLocked(!doorLocked)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    doorLocked 
                      ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/10' 
                      : 'bg-rose-500/15 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-500/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    {doorLocked ? (
                      <Lock className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Unlock className="w-5 h-5 text-rose-400" />
                    )}
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${doorLocked ? 'bg-emerald-400 text-black' : 'bg-rose-400 text-black'}`}>
                      {doorLocked ? 'SECURED' : 'UNLOCKED'}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-200">Front Door</p>
                  <p className="text-[11px] text-slate-400">Biometric Deadbolt</p>
                </button>

                {/* Tile 3: Automated Main Gate */}
                <button
                  type="button"
                  onClick={() => setGateOpen(!gateOpen)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    gateOpen 
                      ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300' 
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <ShieldCheck className={`w-5 h-5 ${gateOpen ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {gateOpen ? 'OPEN' : 'CLOSED'}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-200">Main Entry Gate</p>
                  <p className="text-[11px] text-slate-400">FASTag Auto-Sensor</p>
                </button>

                {/* Tile 4: Climate & AC Control */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <Thermometer className="w-5 h-5 text-blue-400" />
                    <div className="flex items-center gap-1">
                      <button 
                        type="button"
                        onClick={() => setAcTemp(Math.max(18, acTemp - 1))}
                        className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs text-white cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono font-bold text-amber-300">{acTemp}°C</span>
                      <button 
                        type="button"
                        onClick={() => setAcTemp(Math.min(28, acTemp + 1))}
                        className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs text-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-slate-200">Climate Master</p>
                  <p className="text-[11px] text-slate-400">Smart Inverter Eco</p>
                </div>

              </div>

              {/* 4K AI Camera Feed Simulator */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/70 mb-3">
                <div className="relative h-32 sm:h-36 w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                    alt="CCTV Feed"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                  
                  {/* Camera OSD Overlays */}
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                    <Camera className="w-3 h-3 text-red-500 animate-pulse" />
                    <span>CAM 01: {activeCam}</span>
                  </div>

                  <div className="absolute top-2 right-2 text-[10px] font-mono text-emerald-400 bg-black/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    4K AI • 60FPS
                  </div>

                  <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>PERIMETER SECURE</span>
                  </div>

                  <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400">
                    END-TO-END ENCRYPTED
                  </div>
                </div>
              </div>

              {/* Interactive Help Hint */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>💡 Click tiles to test live responses</span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Activity className="w-3 h-3 animate-pulse" /> Self-Healing Mesh
                </span>
              </div>

            </div>

            {/* Background decorative glow */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-amber-500/20 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
