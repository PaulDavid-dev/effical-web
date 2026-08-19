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
  const [strobeOn, setStrobeOn] = useState(false);

  // Animate stages when threat is triggered
  useEffect(() => {
    let timer1, timer2, timer3, strobeInterval;
    if (threatSimulated) {
      setStepIndex(1); // Door Tampered
      timer1 = setTimeout(() => setStepIndex(2), 500);  // Siren Triggered
      timer2 = setTimeout(() => setStepIndex(3), 1000); // Lights 100%
      timer3 = setTimeout(() => setStepIndex(4), 1500); // Mobile Push Alert

      // Strobe flash effect
      let s = false;
      strobeInterval = setInterval(() => {
        s = !s;
        setStrobeOn(s);
      }, 400);
    } else {
      setStepIndex(0);
      setStrobeOn(false);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(strobeInterval);
    };
  }, [threatSimulated]);

  return (
    <>
      <style>{`
        @keyframes alarmPulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.01); }
        }
        @keyframes sirenRing {
          0%   { box-shadow: 0 0 0 0 rgba(239,68,68,0.7); }
          70%  { box-shadow: 0 0 0 18px rgba(239,68,68,0); }
          100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
        }
        .alarm-image-active {
          animation: alarmPulse 0.8s ease-in-out infinite;
        }
        .siren-ring {
          animation: sirenRing 1s ease-out infinite;
        }
        @keyframes strokeFade {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .strobe-overlay {
          animation: strokeFade 0.4s linear infinite;
        }
      `}</style>

      <section id="security-reacts" className="py-24 relative overflow-hidden bg-[#040806] z-10">
        
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
              Protection That Doesn't Just Watch. <br />
              <span className={threatSimulated ? 'text-rose-400' : 'text-gradient-animated-emerald'}>
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
                <div className={`w-3.5 h-3.5 rounded-full ${threatSimulated ? 'bg-rose-500 animate-ping' : 'bg-lime-400'}`}></div>
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
                  className="cursor-pointer relative z-20 flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-400/30 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Disarm &amp; Reset System</span>
                </button>
              )}
            </div>

            {/* === ALARM ANIMATED IMAGE — shown when threat simulated === */}
            {threatSimulated && (
              <div className="relative rounded-2xl overflow-hidden mb-8 border border-rose-500/60 shadow-2xl shadow-rose-500/20">
                {/* Alarm background image */}
                <img
                  src="/alarm_triggered.jpg"
                  alt="Alarm Triggered"
                  className={`w-full object-cover alarm-image-active`}
                  style={{ maxHeight: '220px' }}
                />

                {/* Red strobe overlay */}
                <div
                  className={`absolute inset-0 bg-rose-600/30 pointer-events-none transition-opacity duration-200 ${strobeOn ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* OSD overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/70 border border-rose-500/60 backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-[11px] font-mono font-bold text-rose-300 tracking-widest">⚠ ALARM TRIGGERED</span>
                </div>

                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/70 border border-rose-500/40 text-[11px] font-mono text-rose-400 font-bold">
                  110dB SIREN ACTIVE
                </div>

                {/* Animated pulsing siren ring badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-600 flex items-center justify-center siren-ring">
                    <Bell className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white font-mono">BREACH DETECTED</p>
                    <p className="text-[10px] text-rose-300 font-mono">FRONT ENTRANCE ZONE 1</p>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-lime-500/40">
                  <Lightbulb className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-lime-300 font-bold">STROBE 100%</span>
                </div>
              </div>
            )}

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
                  ? 'bg-lime-500/15 border-lime-500/50 shadow-lg shadow-lime-500/10'
                  : 'bg-white/[0.02] border-white/5 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-lime-300 font-bold">
                    PHASE 02 (150ms)
                  </span>
                  <Volume2 className={`w-5 h-5 ${stepIndex >= 2 ? 'text-lime-400 animate-bounce' : 'text-slate-600'}`} />
                </div>
                <h4 className="text-base font-bold text-white mb-1">110dB Siren &amp; Strobe ON</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  External high-pitch siren blares and perimeter floodlights instantly switch to 100% burst strobe to disorient intruder.
                </p>
                <div className="text-[11px] font-mono text-lime-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                  <span>{stepIndex >= 2 ? 'STROBE ACTIVE (110dB)' : 'STANDBY'}</span>
                </div>
              </div>

              {/* Step 3: Instant Smartphone Alert */}
              <div className={`p-5 rounded-2xl border transition-all duration-500 ${
                stepIndex >= 4
                  ? 'bg-emerald-500/15 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-white/[0.02] border-white/5 opacity-60'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 text-emerald-300 font-bold">
                    PHASE 03 (300ms)
                  </span>
                  <Smartphone className={`w-5 h-5 ${stepIndex >= 4 ? 'text-emerald-400 animate-pulse' : 'text-slate-600'}`} />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Instant Phone Push Alert</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Push notification with 4K snapshot and live CCTV feed sent to all family/security phones worldwide.
                </p>
                <div className="text-[11px] font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
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
                      ⚠️ Front Entrance Door Tamper Detected — Siren Activated &amp; Live Feed Stream Ready.
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
                className="cursor-pointer text-lime-400 hover:text-lime-300 font-mono font-semibold flex items-center gap-1"
              >
                <span>Consult an ESS Security Engineer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
