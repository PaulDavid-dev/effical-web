import React from 'react';
import { SOLUTIONS_DATA } from '../data/siteContent';
import {
  NetworkIcon,
  CameraIcon,
  IntrusionIcon,
  SmartLightingIcon,
  SmartLocksIcon,
  GateIcon,
  VehicleAccessIcon,
  TimeAttendanceIcon
} from './CustomIcons';

const iconComponents = {
  Network: NetworkIcon,
  Camera: CameraIcon,
  ShieldAlert: IntrusionIcon,
  Lightbulb: SmartLightingIcon,
  Lock: SmartLocksIcon,
  ShieldCheck: GateIcon,
  Radio: VehicleAccessIcon,
  UserCheck: TimeAttendanceIcon
};

export default function TechPartners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-[#040806]">
      {/* Animated Continuous Marquee */}
      <div className="relative w-full overflow-hidden py-5 bg-white/[0.01] border-t border-b border-white/5">
        <div className="animate-marquee gap-8 items-center">
          {[...SOLUTIONS_DATA, ...SOLUTIONS_DATA].map((sol, i) => {
            const Icon = iconComponents[sol.iconName] || NetworkIcon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-lime-500/30 transition-colors shrink-0 group"
              >
                <div className="text-lime-400 group-hover:text-lime-300 transition-transform group-hover:scale-110">
                  <Icon strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="font-heading font-bold text-sm tracking-wider text-slate-300 uppercase group-hover:text-white transition-colors">
                  {sol.title.replace(' Systems', '').replace(' Infrastructure', '')}
                </span>
                {sol.badge && (
                  <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {sol.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
