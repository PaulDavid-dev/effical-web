import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedIndustries from './components/TrustedIndustries';
import SmartTouchSwitchSection from './components/SmartTouchSwitchSection';
import SolutionsSection from './components/SolutionsSection';
import EcosystemSimulator from './components/EcosystemSimulator';
import SecurityReacts from './components/SecurityReacts';
import EnergyTelemetrySection from './components/EnergyTelemetrySection';
import FeaturedProjects from './components/FeaturedProjects';
import WhyESS from './components/WhyESS';
import HowWeWork from './components/HowWeWork';
import TechPartners from './components/TechPartners';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SmartPlannerModal from './components/SmartPlannerModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsModal from './components/TermsModal';

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null
  const [brand, setBrand] = useState('ess'); // 'ess' | 'et'

  const openPlanner = () => setPlannerOpen(true);
  const closePlanner = () => setPlannerOpen(false);

  // Handle URL hash routing for direct links like #privacy or #terms
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setLegalModal('privacy');
      } else if (hash === '#terms' || hash === '#terms-and-conditions') {
        setLegalModal('terms');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#040806] text-[#f8fafc] relative selection:bg-emerald-500/30 selection:text-lime-200">

      {/* Top Fixed Floating Navigation with Scroll Progress Bar & Brand Switcher */}
      <Navbar
        brand={brand}
        onSelectBrand={setBrand}
        onOpenPlanner={openPlanner}
      />

      {/* Main Single-Page App Content Sections */}
      <main>
        {/* 1. Hero Section with Interactive Live Smart Control Panel */}
        <Hero
          brand={brand}
          onOpenPlanner={openPlanner}
        />

        {/* 2. Solutions Section (Smart Home, CCTV, Gate Automation, Networking) */}
        <SolutionsSection onOpenPlanner={openPlanner} />

        {/* 4. Luxury Glass Touch Switches & 3-Protocol Architecture */}
        {/* <SmartTouchSwitchSection onOpenPlanner={openPlanner} /> */}

        {/* 5. Trusted By Homes & Businesses (Industries) */}
        <TrustedIndustries onOpenPlanner={openPlanner} />

        {/* 6. One Smart Ecosystem Interactive Scene Simulator */}
        {/* <EcosystemSimulator onOpenPlanner={openPlanner} /> */}

        {/* 7. Security That Reacts (Live Threat Response Simulation) */}
        {/* <SecurityReacts onOpenPlanner={openPlanner} /> */}

        {/* 8. Smart Energy Intelligence & Solar Telemetry Dashboard */}
        {/* <EnergyTelemetrySection onOpenPlanner={openPlanner} /> */}

        {/* 9. Technology Partners & Brand Marquee */}
        <TechPartners />

        {/* 10. Featured Projects Portfolio (Villas, HQ, Penthouses, Plants) */}
        <FeaturedProjects onOpenPlanner={openPlanner} />

        {/* 11. How We Work (5-Step Journey from Idea to Installation) */}
        <HowWeWork onOpenPlanner={openPlanner} />

        {/* 12. Client Testimonials & Experiences */}
        {/* <Testimonials /> */}

        {/* 13. Frequently Asked Questions */}
        {/* <FAQSection /> */}

        {/* 14. Final Call To Action */}
        <FinalCTA onOpenPlanner={openPlanner} />
      </main>

      {/* Complete Footer with dynamic brand socials and switch option */}
      <Footer
        brand={brand}
        onSelectBrand={setBrand}
        onOpenPlanner={openPlanner}
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
      />

      {/* Floating Quick Action Widget (WhatsApp, Call, Scroll Top) */}
      <FloatingActions brand={brand} />

      {/* Interactive Space Planner & Consultation Booking Modal */}
      <SmartPlannerModal
        isOpen={plannerOpen}
        onClose={closePlanner}
        brand={brand}
      />

      {/* Full-Content Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={legalModal === 'privacy'}
        onClose={() => {
          setLegalModal(null);
          if (window.location.hash === '#privacy') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
        brand={brand}
      />

      {/* Full-Content Terms & Conditions Modal */}
      <TermsModal
        isOpen={legalModal === 'terms'}
        onClose={() => {
          setLegalModal(null);
          if (window.location.hash === '#terms' || window.location.hash === '#terms-and-conditions') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
        brand={brand}
      />

    </div>
  );
}

