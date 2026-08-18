import React, { useState } from 'react';
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

export default function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);

  const openPlanner = () => setPlannerOpen(true);
  const closePlanner = () => setPlannerOpen(false);

  return (
    <div className="min-h-screen bg-[#06090e] text-[#f8fafc] relative selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Fixed Floating Navigation with Scroll Progress Bar */}
      <Navbar onOpenPlanner={openPlanner} />

      {/* Main Single-Page App Content Sections */}
      <main>
        {/* 1. Hero Section with Interactive Live Smart Control Panel */}
        <Hero onOpenPlanner={openPlanner} />

        {/* 2. Trusted By Homes & Businesses (Industries) */}
        <TrustedIndustries onOpenPlanner={openPlanner} />

        {/* 3. Luxury Glass Touch Switches & 3-Protocol Architecture (Onwords-Inspired Pro Level UI) */}
        <SmartTouchSwitchSection onOpenPlanner={openPlanner} />

        {/* 4. Solutions Section (Smart Home, AI CCTV, Gate Automation, Networking) */}
        <SolutionsSection onOpenPlanner={openPlanner} />

        {/* 5. One Smart Ecosystem Interactive Scene Simulator */}
        <EcosystemSimulator onOpenPlanner={openPlanner} />

        {/* 6. Security That Reacts (Live Threat Response Simulation) */}
        <SecurityReacts onOpenPlanner={openPlanner} />

        {/* 7. Smart Energy Intelligence & Solar Telemetry Dashboard */}
        <EnergyTelemetrySection onOpenPlanner={openPlanner} />

        {/* 8. Featured Projects Portfolio (Villas, HQ, Penthouses, Plants) */}
        <FeaturedProjects onOpenPlanner={openPlanner} />

        {/* 9. Why ESS (5 Pillars & Turnkey vs Generic Comparison) */}
        <WhyESS onOpenPlanner={openPlanner} />

        {/* 10. How We Work (5-Step Journey from Idea to Installation) */}
        <HowWeWork onOpenPlanner={openPlanner} />

        {/* 11. Technology Partners & Brand Marquee */}
        <TechPartners />

        {/* 12. Client Testimonials & Experiences */}
        <Testimonials />

        {/* 13. Frequently Asked Questions */}
        <FAQSection />

        {/* 14. Final Call To Action */}
        <FinalCTA onOpenPlanner={openPlanner} />
      </main>

      {/* Complete Footer */}
      <Footer onOpenPlanner={openPlanner} />

      {/* Floating Quick Action Widget (WhatsApp, Call, Scroll Top) */}
      <FloatingActions />

      {/* Interactive Space Planner & Consultation Booking Modal */}
      <SmartPlannerModal 
        isOpen={plannerOpen} 
        onClose={closePlanner} 
      />

    </div>
  );
}
