import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/siteContent';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#040806]">
      <div className="container-custom max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="glass-badge">
              <HelpCircle className="w-3.5 h-3.5 text-lime-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-syne">
            Got Questions? <span className="text-gradient-animated-lime">We Have Answers.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Clear, transparent technical guidance before you start your project.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-card border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-white hover:text-lime-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-lime-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in slide-in-from-top-1 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
