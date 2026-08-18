import React, { useState } from 'react';
import { 
  Zap, 
  SunMedium, 
  TrendingDown, 
  Leaf, 
  BatteryCharging, 
  Sparkles, 
  Activity,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function EnergyTelemetrySection({ onOpenPlanner }) {
  const [solarMode, setSolarMode] = useState(true);

  return (
    <section className="py-24 relative overflow-hidden bg-[#06090e] border-t border-b border-white/5">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>SMART ENERGY INTELLIGENCE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Energy Monitoring. <br />
            <span className="text-gradient-amber">Active Cost Reduction.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Automated load-shedding, solar synchronization, and intelligent phantom power elimination that pays for itself.
          </p>
        </div>

        {/* Telemetry Dashboard Card */}
        <div className="glass-panel p-6 sm:p-10 max-w-5xl mx-auto border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  REAL-TIME SMART METERING
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Whole-Property Power Flow
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                ESS energy modules track per-appliance consumption every second, automatically switching heavy HVAC and pool motors to peak solar generation windows.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <SunMedium className="w-4 h-4 text-amber-400" /> Solar Rooftop Input:
                  </span>
                  <span className="text-amber-300 font-bold">6.8 kW Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" /> Current Home Load:
                  </span>
                  <span className="text-cyan-300 font-bold">2.4 kW</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-emerald-400 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" /> Average Monthly Savings:
                  </span>
                  <span className="text-emerald-300 font-bold">32% Lower Bills</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenPlanner}
                  className="btn-secondary text-xs py-2.5 px-5 flex items-center gap-2 cursor-pointer"
                >
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span>Request Energy Audit</span>
                </button>
              </div>
            </div>

            {/* Right: Visual Power Flow Circuit Simulation */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-mono text-slate-300 font-semibold">100% OFF-GRID SOLAR POWERED NOW</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  NET ZERO ACTIVE
                </span>
              </div>

              {/* Power Flow Blocks */}
              <div className="grid grid-cols-3 gap-3 text-center font-mono mb-6">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <SunMedium className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-amber-300">6.8 kW</p>
                  <p className="text-[10px] text-slate-400 uppercase">Rooftop Solar</p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <BatteryCharging className="w-6 h-6 text-cyan-400 mx-auto mb-2 animate-pulse" />
                  <p className="text-lg font-bold text-cyan-300">100%</p>
                  <p className="text-[10px] text-slate-400 uppercase">ESS Battery Bank</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <Activity className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-purple-300">0.0 kW</p>
                  <p className="text-[10px] text-slate-400 uppercase">Grid Draw (Zero)</p>
                </div>
              </div>

              {/* Automation Status Strip */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>⚡ Anomaly Auto-Isolation: Armed</span>
                <span className="text-emerald-400">0 Surge Vulnerabilities</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
