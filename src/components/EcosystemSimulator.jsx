import React, { useState } from 'react';
import { 
  Cpu, 
  Lightbulb, 
  KeyRound, 
  Camera, 
  BellRing, 
  DoorClosed, 
  Wifi, 
  Smartphone, 
  Sparkles, 
  ShieldAlert, 
  Moon, 
  Film,
  CheckCircle2,
  Activity,
  ArrowRight
} from 'lucide-react';
import { ECOSYSTEM_NODES, PRESET_SCENES } from '../data/siteContent';

const iconMap = {
  Cpu,
  Lightbulb,
  KeyRound,
  Camera,
  BellRing,
  DoorClosed,
  Wifi,
  Smartphone,
  Sparkles,
  ShieldAlert,
  Moon,
  Film
};

export default function EcosystemSimulator({ onOpenPlanner }) {
  const [activeScene, setActiveScene] = useState(PRESET_SCENES[0].id);

  const currentScene = PRESET_SCENES.find((s) => s.id === activeScene) || PRESET_SCENES[0];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-[#060c08] border-t border-b border-white/5 cyber-grid-bg z-10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <Sparkles className="w-3.5 h-3.5 text-lime-400" />
              <span>UNIFIED ARCHITECTURE</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-syne">
            Everything Connected. <br />
            <span className="text-gradient-animated-lime">Everything Under Control.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Lights, biometric locks, 4K CCTV, motorized gates, and enterprise Wi-Fi communicating over a single, encrypted high-speed neural network.
          </p>
        </div>

        {/* Scene Presets Selector */}
        <div className="max-w-3xl mx-auto mb-12 relative z-20">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
            Interactive Simulator: Select A Smart Living Preset Scene
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PRESET_SCENES.map((scene) => {
              const SceneIcon = iconMap[scene.icon] || Sparkles;
              const isSelected = scene.id === activeScene;

              return (
                <button
                  type="button"
                  key={scene.id}
                  onClick={() => setActiveScene(scene.id)}
                  className={`cursor-pointer p-3.5 sm:p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 select-none ${
                    isSelected
                      ? 'bg-gradient-to-b from-emerald-500/30 to-lime-500/20 border-2 border-lime-400 text-white shadow-xl shadow-lime-500/25 scale-[1.03]'
                      : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-lime-400 text-slate-950' : 'bg-white/5 text-slate-400'}`}>
                    <SceneIcon className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-semibold text-xs sm:text-sm">
                    {scene.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Ecosystem Node Status Visualizer */}
        <div className="glass-panel p-6 sm:p-10 max-w-5xl mx-auto border-emerald-500/30">
          
          {/* Active Preset Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-lime-400 uppercase tracking-widest font-bold">
                  ACTIVE AUTOMATION SCENE:
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-lime-500/20 text-lime-300 font-mono text-xs font-bold border border-lime-500/40">
                  {currentScene.name}
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1">
                {currentScene.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>0.4ms MESH LATENCY</span>
            </div>
          </div>

          {/* Ecosystem Grid of Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ECOSYSTEM_NODES.map((node) => {
              const NodeIcon = iconMap[node.icon] || Cpu;

              // Compute simulated value based on active scene
              let dynamicValue = node.status;
              if (node.id === 'lights') dynamicValue = currentScene.lights;
              if (node.id === 'lock') dynamicValue = currentScene.door;
              if (node.id === 'cctv') dynamicValue = currentScene.cctv;
              if (node.id === 'alarm') dynamicValue = currentScene.alarm;
              if (node.id === 'gate') dynamicValue = currentScene.gate;

              return (
                <div 
                  key={node.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-lime-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-lime-400">
                      <NodeIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {node.type.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{node.name}</h4>
                    <p className="text-[11px] text-slate-400 mb-3">{node.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">State:</span>
                    <span className="text-lime-300 font-semibold truncate ml-1 text-right">
                      {dynamicValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Integrated Architecture Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping"></span>
              <span>All 8 subsystems synchronized in real-time under ESS Master OS.</span>
            </div>

            <button
              type="button"
              onClick={onOpenPlanner}
              className="btn-primary text-xs py-2.5 px-5 cursor-pointer"
            >
              <span>Build Custom Ecosystem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
