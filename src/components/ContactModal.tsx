import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSector?: string;
}

export function ContactModal({ isOpen, onClose, defaultSector }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    sector: defaultSector || 'General Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      sector: defaultSector || 'General Inquiry',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white sharp-corner border border-[#E5E7EB] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top accent bar */}
        <div className="h-1 bg-[#E31E2D] w-full" />

        {/* Header */}
        <div className="bg-[#00206B] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D]">
              CONNECT WITH OUR LEADERSHIP
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mt-1">
              Contact RON Group
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors sharp-corner cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 font-body">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center mx-auto mb-4 sharp-corner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-[#00206B] mb-2">
                Thank You for Reaching Out
              </h4>
              <p className="text-[#4B5563] max-w-md mx-auto text-[15px] leading-relaxed mb-6">
                Your message has been received by the Executive Secretariat of RON Group of Companies Ltd. A corporate representative will follow up with you promptly.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[14px] uppercase tracking-[0.1em] px-6 py-3 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Official Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#F4F4F4] border-l-4 border-[#E31E2D]">
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#E31E2D] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] font-heading font-bold text-[#6B7280] uppercase tracking-wider">Official Email</div>
                    <a href="mailto:rongroupofcompanies@gmail.com" className="text-sm font-semibold text-[#00206B] hover:text-[#E31E2D]">
                      rongroupofcompanies@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#E31E2D] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] font-heading font-bold text-[#6B7280] uppercase tracking-wider">Direct Lines</div>
                    <div className="text-sm font-semibold text-[#00206B]">
                      07077104798, 08120295062
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-[#E31E2D] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] font-heading font-bold text-[#6B7280] uppercase tracking-wider">Headquarters</div>
                    <div className="text-xs font-medium text-[#4B5563]">
                      Suite No. 4 Ocean Centre, Oladipo Diya Road, Opp. Gudu Library, Gudu District Abuja, AMAC, FCT
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-sm text-[#00206B] focus:border-[#00206B] focus:outline-none sharp-corner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. j.doe@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-sm text-[#00206B] focus:border-[#00206B] focus:outline-none sharp-corner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-sm text-[#00206B] focus:border-[#00206B] focus:outline-none sharp-corner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] mb-1">
                      Sector / Subsidiary
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-sm text-[#00206B] focus:border-[#00206B] focus:outline-none sharp-corner"
                    >
                      <option>General Inquiry</option>
                      <option>RON Properties Limited (Real Estate)</option>
                      <option>RON Transport & Logistics Services</option>
                      <option>RON Petroleum Services</option>
                      <option>RON Unity Farms (Agriculture)</option>
                      <option>RON Mineral Explorers Limited</option>
                      <option>RON Cleaning Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] mb-1">
                    Your Message / Proposal *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope or partnership proposal..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7EB] text-sm text-[#00206B] focus:border-[#00206B] focus:outline-none sharp-corner resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#00206B] sharp-corner cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[14px] uppercase tracking-[0.1em] px-6 py-3 flex items-center gap-2 transition-colors sharp-corner cursor-pointer shadow-sm"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
