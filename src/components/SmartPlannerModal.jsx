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
  CheckCircle2,
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { BRANDS } from '../data/siteContent';

export default function SmartPlannerModal({ isOpen, onClose, brand = 'ess' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeBrand = BRANDS[brand] || BRANDS.ess;

  if (!isOpen) return null;



  const handleWhatsAppSubmit = () => {
    const text = `Hi ${activeBrand.shortName} (${activeBrand.fullName}),\n\nI have an enquiry:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email}\n- City: ${city}\n- Message: ${message}`;
    window.open(`https://wa.me/${activeBrand.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const handleDirectSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0bcdori';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fqoeq74';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'kc2_yrA90Qjiys4gv';

      const templateParams = {
        name: name,
        from_name: name,
        user_name: name,
        email: email,
        reply_to: email,
        user_email: email,
        phone: phone,
        user_phone: phone,
        city: city,
        user_city: city,
        to_email: activeBrand.email || 'Info@efficalsmartsolutions.com',
        recipient_email: 'Info@efficalsmartsolutions.com',
        to_name: activeBrand.fullName || 'Effical Smart Solutions',
        subject: `Enquiry for ${activeBrand.fullName}`,
        message: message,
        user_message: message,
        brand: activeBrand.fullName
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send enquiry. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
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
              Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Please fill out the form below and our team will contact you.
            </p>

            <form onSubmit={handleDirectSubmit} className="space-y-6">

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Message</label>
                  <textarea
                    required
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:border-lime-400 focus:outline-none resize-none"
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
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto text-xs py-3 px-7 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
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
              Thank you, <strong className="text-white">{name || 'Client'}</strong>. Our team will review your enquiry and reach out shortly.
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
