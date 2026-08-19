import React, { useState } from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  Wind, 
  Tv, 
  Moon, 
  Zap, 
  Sliders, 
  Check, 
  Layers, 
  ArrowRight,
  Cpu,
  Wifi,
  Radio,
  Cable
} from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';

export default function SmartTouchSwitchSection({ onOpenPlanner }) {
  // Interactive Switch State
  const [sw1, setSw1] = useState(true);   // Chandelier
  const [sw2, setSw2] = useState(false);  // Motorized Curtains
  const [sw3, setSw3] = useState(true);   // Climate Fan
  const [sw4, setSw4] = useState(false);  // Master Night Mode
  const [glowTheme, setGlowTheme] = useState('lime'); // lime | emerald
  const [dimmerLevel, setDimmerLevel] = useState(75);

  // Protocols data
  const protocols = [
    {
      id: 'wifi',
      title: 'Wi-Fi 6 Mesh',
      badge: 'Entry Wireless',
      desc: 'App-controlled switches and sensors over existing dual-band Wi-Fi. Zero wiring changes, fastest setup.',
      icon: Wifi,
      ideal: 'Apartments & Existing Homes'
    },
    {
      id: 'zwave',
      title: 'Zigbee 3.0 / Matter',
      badge: 'Wireless Premium',
      desc: 'Dedicated low-power ultra-fast mesh network. Encrypted, offline-capable, 10+ year hardware reliability.',
      icon: Radio,
      ideal: 'Luxury Villas & Renovations'
    },
    {
      id: 'knx',
      title: 'KNX Wired Bus',
      badge: 'Flagship Wired (ISO Standard)',
      desc: 'Industrial-grade wired architecture with dedicated bus cables. 25+ year lifespan, 100% internet-independent.',
      icon: Cable,
      ideal: 'New Construction Villas'
    }
  ];

  const calculatedPower = (sw1 ? Math.round(dimmerLevel * 0.4) : 0) + (sw3 ? 35 : 0) + 4;

  return (
    <section className="py-24 relative overflow-hidden bg-[#040806] border-t border-b border-white/5 cyber-grid-bg z-10">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Sparkles className="w-3.5 h-3.5 text-lime-400" />
              <span>HARDWARE CRAFTSMANSHIP</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
            Luxury Touch Panels. <br />
            <span className="text-gradient-animated-emerald">Three Protocols. One Ecosystem.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From retrofit wireless switches that fit behind your existing switchboards to flagship wired KNX installations that last for decades.
          </p>
        </div>

        {/* 2-Column: Switch Simulator on Left, Protocols on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Column 1: Live Interactive Touch Switch Plate */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full max-w-md switch-gang-touch p-7 border border-emerald-500/20">
              
              {/* Top Glass Brand Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-black text-base tracking-wider text-white">ESS</span>
                  <span className="text-[10px] font-mono text-lime-400 uppercase font-bold">TOUCH PRO • 4-GANG</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Zap className="w-3 h-3 text-lime-400" />
                  <span>{calculatedPower}W ACTIVE</span>
                </div>
              </div>

              {/* 4 Touch Keys Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Key 1: Chandelier */}
                <button
                  type="button"
                  onClick={() => setSw1(!sw1)}
                  className={`switch-key p-5 flex flex-col items-center justify-center gap-3 text-center ${
                    sw1 
                      ? (glowTheme === 'lime' ? 'active-lime' : 'active-emerald')
                      : ''
                  }`}
                >
                  <div className={`p-2.5 rounded-full ${sw1 ? (glowTheme === 'lime' ? 'bg-lime-400/20 text-lime-300' : 'bg-emerald-400/20 text-emerald-300') : 'bg-white/5 text-slate-500'}`}>
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">Chandelier</p>
                    <p className="text-[10px] font-mono text-slate-400">{sw1 ? `${dimmerLevel}% Dimmable` : 'Off'}</p>
                  </div>
                </button>

                {/* Key 2: Motorized Curtains */}
                <button
                  type="button"
                  onClick={() => setSw2(!sw2)}
                  className={`switch-key p-5 flex flex-col items-center justify-center gap-3 text-center ${
                    sw2 
                      ? (glowTheme === 'lime' ? 'active-lime' : 'active-emerald')
                      : ''
                  }`}
                >
                  <div className={`p-2.5 rounded-full ${sw2 ? (glowTheme === 'lime' ? 'bg-lime-400/20 text-lime-300' : 'bg-emerald-400/20 text-emerald-300') : 'bg-white/5 text-slate-500'}`}>
                    <Sliders className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">Curtains</p>
                    <p className="text-[10px] font-mono text-slate-400">{sw2 ? 'Open (100%)' : 'Closed'}</p>
                  </div>
                </button>

                {/* Key 3: Climate Fan */}
                <button
                  type="button"
                  onClick={() => setSw3(!sw3)}
                  className={`switch-key p-5 flex flex-col items-center justify-center gap-3 text-center ${
                    sw3 
                      ? (glowTheme === 'lime' ? 'active-lime' : 'active-emerald')
                      : ''
                  }`}
                >
                  <div className={`p-2.5 rounded-full ${sw3 ? (glowTheme === 'lime' ? 'bg-lime-400/20 text-lime-300' : 'bg-emerald-400/20 text-emerald-300') : 'bg-white/5 text-slate-500'}`}>
                    <Wind className={`w-6 h-6 ${sw3 ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">Ceiling Fan</p>
                    <p className="text-[10px] font-mono text-slate-400">{sw3 ? 'Speed 4 (Silent)' : 'Off'}</p>
                  </div>
                </button>

                {/* Key 4: Master Night Scene */}
                <button
                  type="button"
                  onClick={() => setSw4(!sw4)}
                  className={`switch-key p-5 flex flex-col items-center justify-center gap-3 text-center ${
                    sw4 
                      ? (glowTheme === 'lime' ? 'active-lime' : 'active-emerald')
                      : ''
                  }`}
                >
                  <div className={`p-2.5 rounded-full ${sw4 ? (glowTheme === 'lime' ? 'bg-lime-400/20 text-lime-300' : 'bg-emerald-400/20 text-emerald-300') : 'bg-white/5 text-slate-500'}`}>
                    <Moon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">Night Master</p>
                    <p className="text-[10px] font-mono text-slate-400">{sw4 ? 'Scene Active' : 'Normal'}</p>
                  </div>
                </button>

              </div>

              {/* Dimmer & Customization Controls */}
              {sw1 && (
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                    <span>Dimmer Slider</span>
                    <span className="text-lime-400 font-bold">{dimmerLevel}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={dimmerLevel}
                    onChange={(e) => setDimmerLevel(Number(e.target.value))}
                    className="w-full accent-lime-400 cursor-pointer"
                  />
                </div>
              )}

              {/* Backlight Color Selector */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-slate-400">
                <span>RGB Backlight Tone:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setGlowTheme('lime')}
                    className={`w-4 h-4 rounded-full bg-lime-400 cursor-pointer border ${glowTheme === 'lime' ? 'ring-2 ring-white scale-110' : 'opacity-60'}`}
                    title="Vivid Lime"
                  />
                  <button
                    type="button"
                    onClick={() => setGlowTheme('emerald')}
                    className={`w-4 h-4 rounded-full bg-emerald-400 cursor-pointer border ${glowTheme === 'emerald' ? 'ring-2 ring-white scale-110' : 'opacity-60'}`}
                    title="Tech Emerald"
                  />
                </div>
              </div>

            </div>

            <p className="text-xs font-mono text-slate-400 mt-3 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-lime-400" />
              <span>Fits standard Indian modular metal gang boxes (No civil remodeling)</span>
            </p>

          </div>

          {/* Column 2: 3 Protocols Overview */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="mb-2">
              <span className="text-xs font-mono text-lime-400 uppercase tracking-widest font-semibold">
                ENGINEERED FOR SERIOUS HOMES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-syne">
                Right Technology for Every Architecture
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                We don't lock you into a single proprietary standard. ESS designs across certified open protocols for maximum flexibility and longevity.
              </p>
            </div>

            <div className="space-y-3.5">
              {protocols.map((proto) => {
                const ProtoIcon = proto.icon;
                return (
                  <div
                    key={proto.id}
                    className="glass-card p-5 border-white/10 hover:border-lime-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400 shrink-0 mt-0.5">
                        <ProtoIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base font-bold text-white">{proto.title}</h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-lime-300 border border-white/10">
                            {proto.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{proto.desc}</p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">Best For:</span>
                      <span className="text-xs font-semibold text-emerald-300 block">{proto.ideal}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPlanner}
                className="btn-primary btn-shimmer text-xs py-3 px-6"
              >
                <span>Consult on Protocol Selection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
