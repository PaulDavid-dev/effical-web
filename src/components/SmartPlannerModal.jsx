import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Home, 
  Building2, 
  Hotel, 
  Factory, 
  Lightbulb, 
  Camera, 
  Lock, 
  Wifi, 
  BellRing, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { BRANDS } from '../data/siteContent';

export default function SmartPlannerModal({ isOpen, onClose, brand = 'ess' }) {
  const [propertyType, setPropertyType] = useState('Luxury Villa');
  const [selectedModules, setSelectedModules] = useState([
    'Smart Lighting & Scenes',
    'Biometric Smart Locks',
    '4K AI CCTV Surveillance'
  ]);
  const [propertyStage, setPropertyStage] = useState('Under Construction / Electrical Stage');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeBrand = BRANDS[brand] || BRANDS.ess;

  if (!isOpen) return null;

  const propertyTypes = [
    { label: 'Luxury Villa', icon: Home },
    { label: 'Apartment', icon: Home },
    { label: 'Commercial Office', icon: Building2 },
    { label: 'Hotel / Resort', icon: Hotel },
    { label: 'Factory / Warehouse', icon: Factory }
  ];

  const modulesList = [
    { name: 'Smart Lighting & Scenes', icon: Lightbulb },
    { name: 'Biometric Smart Locks', icon: Lock },
    { name: '4K AI CCTV Surveillance', icon: Camera },
    { name: 'Motorized Gate / Boom Barrier', icon: ShieldCheck },
    { name: 'Enterprise Wi-Fi Mesh', icon: Wifi },
    { name: 'Intrusion Siren Alarm', icon: BellRing }
  ];

  const stagesList = [
    'Under Construction / Electrical Stage',
    'Interior Woodwork / Finishing Stage',
    'Existing Built Property (Retrofit)'
  ];

  const toggleModule = (mod) => {
    if (selectedModules.includes(mod)) {
      setSelectedModules(selectedModules.filter(m => m !== mod));
    } else {
      setSelectedModules([...selectedModules, mod]);
    }
  };

  const handleWhatsAppSubmit = () => {
    const text = `Hi ${activeBrand.shortName} (${activeBrand.fullName}),\n\nI would like to book a Free Site Visit / System Proposal:\n- Name: ${name || 'Prospective Client'}\n- City/Location: ${city || 'Tamil Nadu'}\n- Property Type: ${propertyType}\n- Construction Stage: ${propertyStage}\n- Required Modules: ${selectedModules.join(', ')}\n- Phone: ${phone || 'Provided via chat'}\n\nPlease contact me with recommendations.`;
    window.open(`https://wa.me/${activeBrand.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel max-w-2xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto border-lime-500/40 bg-[#070e0a]/98"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="glass-badge">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                <span>INTERACTIVE PROPOSAL BUILDER</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 font-syne">
              Book a Free Site Visit & Estimate
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Configure your property requirements below and our senior solutions architect will contact you.
            </p>

            <form onSubmit={handleDirectSubmit} className="space-y-6">
              
              {/* Step 1: Property Type */}
              <div>
                <label className="text-xs font-mono uppercase text-lime-400 font-bold block mb-2.5">
                  1. Select Property Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {propertyTypes.map((pt) => {
                    const Icon = pt.icon;
                    const isSel = propertyType === pt.label;
                    return (
                      <button
                        type="button"
                        key={pt.label}
                        onClick={() => setPropertyType(pt.label)}
                        className={`p-3 rounded-xl border text-xs font-heading font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                          isSel 
                            ? 'bg-lime-500/20 border-lime-400 text-white shadow-md shadow-lime-500/20' 
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSel ? 'text-lime-400' : 'text-slate-500'}`} />
                        <span>{pt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Desired Modules */}
              <div>
                <label className="text-xs font-mono uppercase text-lime-400 font-bold block mb-2.5">
                  2. Choose Required Automation & Security Modules:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modulesList.map((mod) => {
                    const Icon = mod.icon;
                    const isSel = selectedModules.includes(mod.name);
                    return (
                      <button
                        type="button"
                        key={mod.name}
                        onClick={() => toggleModule(mod.name)}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                          isSel
                            ? 'bg-lime-500/15 border-lime-500/60 text-white'
                            : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${isSel ? 'text-lime-400' : 'text-slate-500'}`} />
                          <span>{mod.name}</span>
                        </div>
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${isSel ? 'bg-lime-400 border-lime-400 text-slate-950' : 'border-white/20'}`}>
                          {isSel && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Construction Stage */}
              <div>
                <label className="text-xs font-mono uppercase text-lime-400 font-bold block mb-2">
                  3. Current Property Stage:
                </label>
                <select
                  value={propertyStage}
                  onChange={(e) => setPropertyStage(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#040806] border border-white/15 text-white text-xs sm:text-sm focus:border-lime-400 focus:outline-none"
                >
                  {stagesList.map((stg) => (
                    <option key={stg} value={stg} className="bg-[#070e0a] text-white">
                      {stg}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 4: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-lime-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">City / Town</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Coimbatore, Chennai"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-lime-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Submit Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="btn-whatsapp w-full sm:w-auto text-xs py-3 px-6 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (Instant)</span>
                </button>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto text-xs py-3 px-7 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-syne">
              Inquiry Successfully Received!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white">{name || 'Client'}</strong>. An ESS Senior Solutions Engineer will review your requirements for <strong className="text-lime-300">{propertyType}</strong> and reach out shortly.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-primary text-xs py-2.5 px-6 cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
