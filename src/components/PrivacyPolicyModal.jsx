import React, { useEffect, useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  FileText, 
  Eye, 
  Server, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Printer
} from 'lucide-react';
import { BRANDS } from '../data/siteContent';

export default function PrivacyPolicyModal({ isOpen, onClose, brand = 'ess' }) {
  const [activeSection, setActiveSection] = useState('intro');
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
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white font-syne">Privacy Policy</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-lime-400/10 text-lime-300 border border-lime-400/20">
                  Official Legal Document
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Effective Date: January 1, 2026 | Last Updated: September 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              title="Print Policy"
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
                { id: 'sec-intro', label: '1. Introduction & Entities' },
                { id: 'sec-scope', label: '2. Scope & Applicable Law' },
                { id: 'sec-collect', label: '3. Information We Collect' },
                { id: 'sec-cctv', label: '4. CCTV & Surveillance Privacy' },
                { id: 'sec-use', label: '5. How We Use Data' },
                { id: 'sec-ecosystem', label: '6. Smart Ecosystems & Cloud' },
                { id: 'sec-share', label: '7. Sharing & Third-Party Rules' },
                { id: 'sec-security', label: '8. Data Security & Storage' },
                { id: 'sec-rights', label: '9. Your Privacy Rights' },
                { id: 'sec-cookies', label: '10. Cookies & Tracking' },
                { id: 'sec-retention', label: '11. Data Retention' },
                { id: 'sec-contact', label: '12. Grievance & Contact' }
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
            
            {/* 1. Introduction */}
            <div id="sec-intro" className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">01.</span> Introduction & Corporate Entities
              </h3>
              <p>
                This Privacy Policy is issued on behalf of <strong className="text-white">Effical Smart Solutions (ESS)</strong> and its specialized division <strong className="text-white">Effical Technologies (ET)</strong> (collectively referred to as "EFFICAL", "we", "our", or "us"), headquartered at #43/3, Arasu Paniyalar Nagar, Vilankurichi, Coimbatore, Tamil Nadu – 641035, India.
              </p>
              <p>
                EFFICAL provides premium turnkey smart automation, AI-driven CCTV surveillance, biometric access control systems, gate automation, and enterprise networking infrastructure for residential, commercial, hospitality, healthcare, and industrial clients.
              </p>
              <p>
                We recognize that your home, workspace, and security data are deeply personal. We are committed to upholding the highest standards of data privacy, confidentiality, and technical integrity.
              </p>
            </div>

            {/* 2. Scope */}
            <div id="sec-scope" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">02.</span> Scope of this Policy & Applicable Law
              </h3>
              <p>
                This Policy applies to all personal information, architectural floor blueprints, IoT telemetry data, video surveillance device configurations, and website interactions collected during:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                <li>Pre-installation architectural consultations and on-site engineering assessments.</li>
                <li>Turnkey procurement, cabling, deployment, calibration, and app pairing of smart devices.</li>
                <li>Ongoing 24/7 service-level agreements (SLA), remote diagnostics, and Annual Maintenance Contracts (AMC).</li>
                <li>Direct interactions on our official digital websites (<span className="text-lime-400">efficalsmartsolutions.com</span>).</li>
              </ul>
              <p>
                This policy complies with the <strong className="text-white">Digital Personal Data Protection Act (DPDPA), 2023</strong>, the <strong className="text-white">Information Technology Act, 2000</strong> (and its associated Reasonable Security Practices and Procedures and Sensitive Personal Data or Information Rules), and international IoT security best practices.
              </p>
            </div>

            {/* 3. Information We Collect */}
            <div id="sec-collect" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">03.</span> Information We Collect
              </h3>
              <p>We may collect and process the following categories of information:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-bold font-mono text-lime-400 uppercase mb-1">A. Client Identification Data</h4>
                  <p className="text-xs text-slate-400">Full name, billing/installation address, primary & emergency telephone numbers, email address, and tax/GST identification numbers.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-bold font-mono text-lime-400 uppercase mb-1">B. Architectural & Property Data</h4>
                  <p className="text-xs text-slate-400">CAD floor plans, conduit pathways, electrical load schedules, door/window schedules, and perimeter gate dimensions.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-bold font-mono text-lime-400 uppercase mb-1">C. Network & Device Telemetry</h4>
                  <p className="text-xs text-slate-400">Static/Dynamic IP allocations, MAC addresses, Wi-Fi SSID names, Matter/Zigbee coordinator IDs, and firmware diagnostic logs.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-xs font-bold font-mono text-lime-400 uppercase mb-1">D. Communication & Support Logs</h4>
                  <p className="text-xs text-slate-400">WhatsApp consultation logs, support desk tickets, emergency dispatch records, and service maintenance sign-off forms.</p>
                </div>
              </div>
            </div>

            {/* 4. CCTV & Surveillance Privacy Clause */}
            <div id="sec-cctv" className="space-y-3 pt-4 border-t border-white/5">
              <div className="p-4 rounded-xl bg-lime-500/10 border border-lime-500/30">
                <h3 className="text-lg font-bold text-lime-300 font-syne flex items-center gap-2 mb-2">
                  <Lock className="w-5 h-5 text-lime-400" />
                  <span>04. CCTV & Video Surveillance Privacy (Strict Policy)</span>
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-3">
                  <strong className="text-white font-semibold">ZERO Cloud Snooping Guarantee:</strong> EFFICAL engineers, technicians, and partners do NOT store, view, or stream your private CCTV camera footage, NVR recordings, or smart door lock camera feeds on unencrypted third-party cloud servers.
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside pl-1">
                  <li><strong>Local Physical Ownership:</strong> All continuous 24/7 video footage is recorded directly onto your on-premise Hard Disk Drives (NVR/DVR/NAS) located physically on your property.</li>
                  <li><strong>Master Credential Handover:</strong> Upon commissioning and handover, all master admin passwords, encryption verification codes, and two-factor authentication credentials are transferred exclusively to the client.</li>
                  <li><strong>No Backdoors:</strong> EFFICAL does not maintain permanent remote backdoors. Remote diagnostic access is only initiated when explicitly requested and authorized by the client for technical troubleshooting.</li>
                </ul>
              </div>
            </div>

            {/* 5. How We Use Data */}
            <div id="sec-use" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">05.</span> How We Use and Process Your Information
              </h3>
              <p>We process collected data exclusively for legitimate business and technical execution purposes:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                <li>Designing customized 3D architectural automation blueprints, cabling schedules, and bill of quantities (BOQ).</li>
                <li>Procuring certified hardware components from authorized manufacturers (e.g. Schneider, Hikvision, Dahua, UniFi, Yale).</li>
                <li>Configuring smart lighting scenes, automated gate triggers, FASTag readers, and intrusion alarm sensitivity.</li>
                <li>Executing warranty fulfillment, annual maintenance visits, and emergency SLA support calls.</li>
                <li>Sending essential technical updates, critical firmware security patches, and invoice documentation.</li>
              </ul>
            </div>

            {/* 6. Ecosystems & Third-Party Clouds */}
            <div id="sec-ecosystem" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">06.</span> Smart Ecosystems & Cloud Platforms
              </h3>
              <p>
                When our systems integrate with consumer smart platforms (such as <strong className="text-white">Apple HomeKit, Google Home, Amazon Alexa, Tuya / Smart Life, or Ubiquiti UniFi Cloud</strong>), those platforms govern data in accordance with their respective independent privacy terms.
              </p>
              <p>
                Where possible, EFFICAL prioritizes <strong className="text-white">Local-First Processing</strong> (Zigbee 3.0, Matter over Thread, Local IP LAN controllers) to ensure your smart home automations continue operating smoothly even if the internet connection is severed.
              </p>
            </div>

            {/* 7. Zero Data Sale */}
            <div id="sec-share" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">07.</span> Information Sharing & Third-Party Disclosure
              </h3>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-white font-semibold mb-2">
                  EFFICAL will NEVER sell, rent, lease, or monetize your personal or property data to third-party advertisers, data brokers, or marketing agencies.
                </p>
                <p className="text-xs text-slate-400">
                  Data is only shared strictly when necessary with:
                </p>
                <ul className="text-xs text-slate-400 list-disc list-inside space-y-1 mt-1 pl-1">
                  <li>Authorized OEM manufacturers solely for device warranty registration and RMA replacements.</li>
                  <li>Direct courier partners for shipping replacement parts or hardware accessories.</li>
                  <li>Law enforcement or judicial authorities only when mandated by valid legal court orders or Indian statutory compliance.</li>
                </ul>
              </div>
            </div>

            {/* 8. Data Security & Storage */}
            <div id="sec-security" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">08.</span> Data Security, Storage & Encryption Protocols
              </h3>
              <p>
                We implement bank-grade and defense-grade reasonable security practices (ISO/IEC 27001 aligned) to safeguard all data against unauthorized access, destruction, alteration, or disclosure:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-lime-400 font-mono font-bold mb-1">AES-256 Encryption</div>
                  <div className="text-slate-400">All saved system blueprints and digital records are protected by strong AES-256 bit encryption.</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-lime-400 font-mono font-bold mb-1">VLAN Network Isolation</div>
                  <div className="text-slate-400">IoT devices are configured on segregated Virtual LANs to prevent lateral intrusion into home computers.</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-lime-400 font-mono font-bold mb-1">Role-Based Access</div>
                  <div className="text-slate-400">Only authorized certified system engineers assigned to your specific project can access technical schedules.</div>
                </div>
              </div>
            </div>

            {/* 9. Privacy Rights */}
            <div id="sec-rights" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">09.</span> Your Privacy Rights & Data Control
              </h3>
              <p>Under Indian privacy legislation and EFFICAL policies, you enjoy the right to:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300 text-xs sm:text-sm">
                <li><strong>Right of Access:</strong> Request a summary of all personal data, architectural drawings, and invoice records maintained by EFFICAL.</li>
                <li><strong>Right of Rectification:</strong> Request correction or updating of outdated contact information or property details.</li>
                <li><strong>Right of Erasure:</strong> Request the deletion of your consultation records following project completion (subject to statutory tax retention laws).</li>
                <li><strong>Right to Withdraw Consent:</strong> Opt out of non-essential communications at any time by notifying our support desk.</li>
              </ul>
            </div>

            {/* 10. Cookies */}
            <div id="sec-cookies" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">10.</span> Cookies & Web Tracking Technologies
              </h3>
              <p>
                Our digital website uses essential technical cookies to remember your selected brand preferences (ESS vs ET), active session themes, and form inputs in the consultation builder. We do not employ third-party tracking pixels that monitor your browsing activity across other independent websites.
              </p>
            </div>

            {/* 11. Retention */}
            <div id="sec-retention" className="space-y-3 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">11.</span> Data Retention Period
              </h3>
              <p>
                We retain client project records, warranty certification logs, and technical wiring diagrams for a minimum duration of <strong className="text-white">7 years</strong> to honor long-term AMC commitments, product warranty recalls, and Indian statutory commercial accounting mandates.
              </p>
            </div>

            {/* 12. Contact & Grievance */}
            <div id="sec-contact" className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-lg sm:text-xl font-bold text-white font-syne flex items-center gap-2">
                <span className="text-lime-400 font-mono">12.</span> Grievance Redressal & Contact Information
              </h3>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our designated Data Protection & Grievance Desk:
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-lime-500/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-2">
                  <div className="text-lime-400 font-bold uppercase text-[11px]">Primary Office Address:</div>
                  <div className="text-slate-300 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>#43/3, Arasu Paniyalar Nagar, Vilankurichi, Coimbatore – 641035, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-lime-400 font-bold uppercase text-[11px]">Direct Support Channels:</div>
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
            <span>Close & Return</span>
          </button>
        </div>

      </div>
    </div>
  );
}
