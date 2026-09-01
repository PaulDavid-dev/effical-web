import React, { useEffect, useState } from 'react';
import { 
  X, 
  FileText, 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  CreditCard, 
  MapPin, 
  Mail, 
  Phone,
  ChevronRight,
  Printer
} from 'lucide-react';
import { BRANDS } from '../data/siteContent';

export default function TermsModal({ isOpen, onClose, brand = 'ess' }) {
  const [activeSection, setActiveSection] = useState('sec-agreement');
  const activeBrand = BRANDS[brand] || BRANDS.ess;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="glass-panel w-full max-w-5xl h-[92vh] flex flex-col bg-[#050b07]/98 border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white font-syne">Terms & Conditions</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/10 text-lime-300 border border-lime-400/20">
                  Service Level & Client Agreement
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Effective Date: January 1, 2026 | Last Revised: September 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              title="Print Terms"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Body with Sidebar Navigation & Document Content */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* Quick Table of Contents Sidebar */}
          <div className="hidden md:block w-64 border-r border-white/10 p-4 bg-black/30 overflow-y-auto shrink-0 text-xs font-mono">
            <div className="text-slate-400 uppercase tracking-wider mb-3 px-2 text-[10px]">Table of Contents</div>
            <nav className="space-y-1">
              {[
                { id: 'sec-agreement', label: '1. Agreement to Terms' },
                { id: 'sec-scope', label: '2. Scope of Services' },
                { id: 'sec-pricing', label: '3. Pricing & Payments' },
                { id: 'sec-readiness', label: '4. Site Readiness & Prep' },
                { id: 'sec-install', label: '5. Installation & Handover' },
                { id: 'sec-warranty', label: '6. 2-Year Warranty Policy' },
                { id: 'sec-amc', label: '7. AMC & SLA Response' },
                { id: 'sec-passwords', label: '8. Credentials & Admin Rights' },
                { id: 'sec-liability', label: '9. Limitation of Liability' },
                { id: 'sec-cancellation', label: '10. Cancellation & Returns' },
                { id: 'sec-ip', label: '11. Intellectual Property' },
                { id: 'sec-jurisdiction', label: '12. Law & Jurisdiction' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-2.5 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                    activeSection === item.id 
                      ? 'bg-lime-400/15 text-lime-300 font-bold border border-lime-400/30' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  <ChevronRight className="w-3 h-3 shrink-0 opacity-50" />
                </button>
              ))}
            </nav>
          </div>

          {/* Legal Document Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10 text-slate-300 text-sm leading-relaxed">
            
            {/* 1. Agreement */}
            <div id="sec-agreement" className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">01.</span> Agreement & Acceptance of Terms
              </h3>
              <p>
                These Terms and Conditions constitute a legally binding service agreement between the client (referred to as "Client", "Customer", "you", or "your") and <strong className="text-white">Effical Smart Solutions (ESS)</strong> along with <strong className="text-white">Effical Technologies (ET)</strong> (collectively referred to as "EFFICAL", "we", "us", or "our"), having its registered operational headquarters at #43/3, Arasu Paniyalar Nagar, Vilankurichi, Coimbatore – 641035, Tamil Nadu, India.
              </p>
              <p>
                By requesting an on-site architectural consultation, accepting a Bill of Quantities (BOQ) or formal estimate, issuing a purchase order, or engaging our engineering personnel, you acknowledge that you have read, understood, and agreed to be governed by these Terms in full.
              </p>
            </div>

            {/* 2. Scope */}
            <div id="sec-scope" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">02.</span> Scope of Engineering Services
              </h3>
              <p>EFFICAL delivers comprehensive turnkey smart engineering solutions including:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-lime-400 font-bold block mb-1">A. Smart Home & Commercial Lighting:</span>
                  Circadian rhythm lighting, architectural scene dimming, touch glass panels, DALI-2/0-10V control, and motorized curtain rails.
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-lime-400 font-bold block mb-1">B. Surveillance & Active Deterrence:</span>
                  ColorVu UHD IP cameras, smart human/vehicle AI classification, perimeter virtual tripwires, 110dB sirens, and local NVR vaults.
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-lime-400 font-bold block mb-1">C. Access Control & Gate Automation:</span>
                  Biometric 3D face ID deadbolts, heavy-duty sliding/swing gate motors up to 2,000kg, high-speed boom barriers, and FASTag vehicle readers.
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-lime-400 font-bold block mb-1">D. Network Backbone & Fiber:</span>
                  Fluke-tested structured Cat6A/7 copper cabling, enterprise Wi-Fi 7 roaming mesh, single-mode fiber optic splicing, and managed switches.
                </div>
              </div>
            </div>

            {/* 3. Pricing & Payments */}
            <div id="sec-pricing" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">03.</span> Quotations, Pricing & Payment Milestones
              </h3>
              <p>
                All formal quotations provided by EFFICAL are valid for <strong className="text-white">30 calendar days</strong> from the date of issuance due to fluctuating semiconductor and raw material prices.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono">
                <div className="text-lime-400 font-bold uppercase text-[11px]">Standard Project Payment Schedule:</div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Phase 1 (Order Confirmation & Hardware Procurement):</span>
                  <span className="text-white font-bold">50% Advance</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Phase 2 (On-Site Delivery of Hardware & Cabling Pull):</span>
                  <span className="text-white font-bold">40% Milestone</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Phase 3 (Testing, App Pairing & Official Handover Sign-off):</span>
                  <span className="text-white font-bold">10% Final</span>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                All prices are subject to statutory Goods and Services Tax (GST) as applicable under Indian Law. Equipment remains the legal property of EFFICAL until full final payment has cleared into our designated bank account.
              </p>
            </div>

            {/* 4. Site Readiness */}
            <div id="sec-readiness" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">04.</span> Client Responsibilities & Site Readiness
              </h3>
              <p>
                To achieve 100% flush wire concealment and prevent hardware damage during installation, the Client or their appointed Civil Contractor must ensure:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300 text-xs sm:text-sm">
                <li>Adequate PVC conduit piping (minimum 25mm diameter) installed inside walls prior to final plastering and painting.</li>
                <li>Stable single-phase/three-phase electrical power supply with appropriate dedicated Earth Grounding (&lt; 2 Volts Neutral-to-Earth).</li>
                <li>Provision of a dedicated, stable high-speed broadband internet connection at the site for cloud bridge synchronization.</li>
                <li>Safe and secure on-site lockable storage for delivered high-value equipment before installation commencement.</li>
              </ul>
            </div>

            {/* 5. Installation & Handover */}
            <div id="sec-install" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">05.</span> Installation, Commissioning & Handover
              </h3>
              <p>
                Installation is conducted exclusively by certified EFFICAL system technicians. Upon completion, our senior engineer will conduct a comprehensive client walkthrough to demonstrate lighting scenes, app controls, and security alerts.
              </p>
              <p>
                Upon mutual satisfaction, a formal <strong className="text-white">Project Handover Certificate</strong> will be signed, marking the commencement of the official warranty and AMC period.
              </p>
            </div>

            {/* 6. Warranty */}
            <div id="sec-warranty" className="space-y-3 pt-4 border-t border-white/5">
              <div className="p-4 rounded-xl bg-lime-500/10 border border-lime-500/30">
                <h3 className="text-lg font-bold text-lime-300 font-syne flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-lime-400" />
                  <span>06. Comprehensive 2-Year On-Site Warranty Policy</span>
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-3">
                  EFFICAL provides a <strong className="text-white">Minimum 2-Year Comprehensive On-Site Warranty</strong> covering all deployed turnkey hardware, touch glass panels, sensors, and labor defects.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span><strong>Free On-Site Replacement / Repair:</strong> Defective devices under warranty will be serviced or replaced on-site with zero service labor charges.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span><strong>OEM Extended Warranty:</strong> Specific hardware items (e.g. gate motors, commercial switches) carry extended manufacturer warranties up to 3-5 years.</span>
                  </div>
                  <div className="flex items-start gap-2 text-rose-300">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Exclusions:</strong> Warranty does NOT cover physical damage caused by water immersion (on non-waterproof units), direct lightning strikes without surge suppressors, rodent damage to cabling, or unauthorized tampering by third-party electricians.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. AMC & SLA */}
            <div id="sec-amc" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">07.</span> Annual Maintenance Contracts (AMC) & 24/7 SLA
              </h3>
              <p>
                Following the initial 2-year warranty term, clients are eligible to subscribe to our premium <strong className="text-white">Effical Care AMC</strong> program, which includes:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300 text-xs sm:text-sm">
                <li>Quarterly preventive maintenance visits (lens cleaning, terminal tightening, gate gear lubrication).</li>
                <li>Guaranteed <strong className="text-white">&lt; 4-Hour Response SLA</strong> for critical security breakdowns (CCTV / Gate lockouts).</li>
                <li>Free regular cloud firmware updates and security vulnerability audits.</li>
                <li>Priority 24×7 emergency telephone hotline and direct engineering dispatch.</li>
              </ul>
            </div>

            {/* 8. Passwords & Admin Rights */}
            <div id="sec-passwords" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">08.</span> Credentials, Admin Rights & Client Ownership
              </h3>
              <p>
                The Client is the sole, absolute owner of all administrative master accounts, Apple HomeKit setups, NVR surveillance passwords, and biometric databases.
              </p>
              <p>
                EFFICAL does not retain master passwords. The Client is responsible for maintaining the confidentiality of their PINs, passwords, and guest OTP credentials.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div id="sec-liability" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">09.</span> Limitation of Liability & Force Majeure
              </h3>
              <p>
                While EFFICAL engineers systems to the highest industrial reliability standards, smart devices are deterrent and facilitation tools. EFFICAL shall not be held liable for:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300 text-xs sm:text-sm">
                <li>Losses arising from third-party Internet Service Provider (ISP) fiber cuts or cellular network outages.</li>
                <li>Unforeseen natural disasters, floods, earthquakes, or severe voltage surges exceeding Indian standard tolerances.</li>
                <li>Indirect or consequential property damages resulting from unauthorized manual override by non-certified personnel.</li>
              </ul>
            </div>

            {/* 10. Cancellation & Returns */}
            <div id="sec-cancellation" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">10.</span> Cancellation & Refund Policy
              </h3>
              <p>
                Custom-ordered hardware (such as custom laser-engraved glass switchplates or specialized hydraulic gate rams) cannot be canceled or refunded once procurement and factory fabrication have commenced.
              </p>
              <p>
                Standard stock items may be returned within 7 days of delivery if unopened and in original factory sealed packaging, subject to a standard 15% restocking fee.
              </p>
            </div>

            {/* 11. IP */}
            <div id="sec-ip" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">11.</span> Intellectual Property
              </h3>
              <p>
                All proprietary schematics, automation logic blueprints, architectural wiring diagrams, and software scripts developed by EFFICAL remain the intellectual property of EFFICAL Smart Solutions. The Client is granted a perpetual, non-transferable license to use these configurations for their designated installation property.
              </p>
            </div>

            {/* 12. Governing Law */}
            <div id="sec-jurisdiction" className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">12.</span> Governing Law & Coimbatore Jurisdiction
              </h3>
              <p>
                These Terms shall be governed by, interpreted, and construed in accordance with the laws of the <strong className="text-white">Republic of India</strong>. Any dispute, claim, or controversy arising out of or relating to this agreement shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Coimbatore, Tamil Nadu, India</strong>.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-lime-500/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-2">
                  <div className="text-lime-400 font-bold uppercase text-[11px]">Corporate Headquarters:</div>
                  <div className="text-slate-300 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>#43/3, Arasu Paniyalar Nagar, Vilankurichi, Coimbatore – 641035, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-lime-400 font-bold uppercase text-[11px]">Official Legal Communication:</div>
                  <div className="text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                    <a href="mailto:Info@efficalsmartsolutions.com" className="hover:text-lime-400 underline">Info@efficalsmartsolutions.com</a>
                  </div>
                  <div className="text-slate-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>+91 79049 83794 / +91 96778 55553</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-3.5 border-t border-white/10 flex items-center justify-between bg-white/[0.02] shrink-0 text-xs font-mono text-slate-400">
          <span>EFFICAL Smart Solutions & Effical Technologies © 2026</span>
          <button
            onClick={onClose}
            type="button"
            className="btn-primary text-xs py-2 px-6 cursor-pointer"
          >
            <span>I Accept & Close</span>
          </button>
        </div>

      </div>
    </div>
  );
}
