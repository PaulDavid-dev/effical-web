import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Bell, 
  Lightbulb, 
  Smartphone, 
  Volume2, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  Radio, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';

export default function SecurityReacts({ onOpenPlanner }) {
  const [threatSimulated, setThreatSimulated] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  // Animate stages when threat is triggered
  useEffect(() => {
    let timer1, timer2, timer3;
    if (threatSimulated) {
      setStepIndex(1); // Door Tampered
      timer1 = setTimeout(() => setStepIndex(2), 500);  // Siren Triggered
      timer2 = setTimeout(() => setStepIndex(3), 1000); // Lights 100%
      timer3 = setTimeout(() => setStepIndex(4), 1500); // Mobile Push Alert
    } else {
      setStepIndex(0);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [threatSimulated]);

  return (
    <section id="security-reacts" className="py-24 relative overflow-hidden bg-[#06090e] z-10">
      
      {/* Background glow */}
      <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${threatSimulated ? 'bg-rose-950/20' : 'bg-transparent'}`}></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className={`glass-badge transition-colors ${threatSimulated ? 'border-rose-500 text-rose-400 bg-rose-500/10' : ''}`}>
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>ACTIVE DETERRENCE DEFENSE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Protection That Doesn't Just Watch. <br />
            <span className={threatSimulated ? 'text-rose-400' : 'text-gradient-cyan'}>
              It Responds Instantly.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Passive CCTV only records the crime after you've been robbed. ESS active threat systems detect anomalies at the perimeter and trigger deterrent countermeasures in under 500ms.
          </p>
        </div>

        {/* Interactive Threat Simulator Container */}
        <div className={`glass-card p-6 sm:p-10 max-w-5xl mx-auto transition-all duration-500 ${threatSimulated ? 'alert-active' : 'border-white/10'}`}>
          
          {/* Top Trigger Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-20">
            <div className="flex items-center gap-3">
              <div className={`w-3.5 h-3.5 rounded-full ${threatSimulated ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`}></div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {threatSimulated ? 'CRITICAL SECURITY BREACH SIMULATION' : 'Perimeter Defense System: Armed & Monitoring'}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {threatSimulated ? 'DETERRENCE PROTOCOL 04-ACTIVE' : 'READY FOR THREAT TESTING'}
                </p>
              </div>
            </div>

            {/* Test Trigger Button */}
            {!threatSimulated ? (
              <button
                type="button"
                onClick={() => setThreatSimulated(true)}
                className="cursor-pointer relative z-20 flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 shadow-lg shadow-rose-600/30 transition-all transform hover:scale-105"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Simulate Unauthorized Door Tamper</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setThreatSimulated(false)}
                className="cursor-pointer relative z-20 flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-400/30 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Disarm & Reset System</span>
              </button>
            )}
          </div>

          {/* 3-Step Reaction Sequence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Step 1: Intrusion Detected */}
            <div className={`p-5 rounded-2xl border transition-all duration-500 ${
              stepIndex >= 1
                ? 'bg-rose-500/15 border-rose-500/50 shadow-lg shadow-rose-500/10'
                : 'bg-white/[0.02] border-white/5 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-rose-300 font-bold">
                  PHASE 01 (0ms)
                </span>
                <Radio className={`w-5 h-5 ${stepIndex >= 1 ? 'text-rose-400 animate-pulse' : 'text-slate-600'}`} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Intrusion Sensor Tripped</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Magnetic contact or perimeter AI tripwire registers unauthorized breach attempt at entrance.
              </p>
              <div className="text-[11px] font-mono text-rose-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>{stepIndex >= 1 ? 'AI HUMAN DETECTED' : 'STANDBY'}</span>
              </div>
            </div>

            {/* Step 2: 110dB Siren + Floodlights */}
            <div className={`p-5 rounded-2xl border transition-all duration-500 ${
              stepIndex >= 2
                ? 'bg-amber-500/15 border-amber-500/50 shadow-lg shadow-amber-500/10'
                : 'bg-white/[0.02] border-white/5 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-amber-300 font-bold">
                  PHASE 02 (150ms)
                </span>
                <Volume2 className={`w-5 h-5 ${stepIndex >= 2 ? 'text-amber-400 animate-bounce' : 'text-slate-600'}`} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">110dB Siren & Strobe ON</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                External high-pitch siren blares and perimeter floodlights instantly switch to 100% burst strobe to disorient intruder.
              </p>
              <div className="text-[11px] font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{stepIndex >= 2 ? 'STROBE ACTIVE (110dB)' : 'STANDBY'}</span>
              </div>
            </div>

            {/* Step 3: Instant Smartphone Alert */}
            <div className={`p-5 rounded-2xl border transition-all duration-500 ${
              stepIndex >= 4
                ? 'bg-cyan-500/15 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                : 'bg-white/[0.02] border-white/5 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-cyan-300 font-bold">
                  PHASE 03 (300ms)
                </span>
                <Smartphone className={`w-5 h-5 ${stepIndex >= 4 ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}`} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Instant Phone Push Alert</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Push notification with 4K snapshot and live CCTV feed sent to all family/security phones worldwide.
              </p>
              <div className="text-[11px] font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{stepIndex >= 4 ? 'PUSH NOTIFICATION DELIVERED' : 'STANDBY'}</span>
              </div>
            </div>

          </div>

          {/* Smartphone Alert Popup Simulator */}
          {threatSimulated && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-black border border-rose-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in slide-in-from-bottom-2 duration-300 relative z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-600/30 border border-rose-500 flex items-center justify-center text-rose-400 shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-rose-400">ESS SECURITY ALERT</span>
                    <span className="text-[10px] font-mono text-slate-400">JUST NOW</span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    ⚠️ Front Entrance Door Tamper Detected — Siren Activated & Live Feed Stream Ready.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button 
                  type="button"
                  onClick={() => setThreatSimulated(false)}
                  className="cursor-pointer px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white border border-white/10"
                >
                  Disarm
                </button>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white shadow-lg shadow-rose-600/30"
                >
                  Emergency Contact
                </a>
              </div>
            </div>
          )}

          {/* Bottom Trust Note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 relative z-20">
            <span>🛡️ Backed by cellular GSM failover and battery UPS in case intruders cut internet or power lines.</span>
            <button
              type="button"
              onClick={onOpenPlanner}
              className="cursor-pointer text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1"
            >
              <span>Consult an ESS Security Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
