import React, { useState } from 'react';
import { MapPin, Mail, Globe, Phone, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { LeafletMap } from '../components/LeafletMap';

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ fullName: '', email: '', message: '' });
  };

  // Office locations
  const headOffice = {
    title: "HEAD OFFICE",
    address: "Adjacent Cocin Rayfield, Along Jonah David Jang Way, Jos, Plateau State, Nigeria.",
    center: [9.8650, 8.8450] as [number, number],
    lat: 9.8650,
    lng: 8.8450
  };

  const abujaBranch = {
    title: "ABUJA BRANCH",
    address: "Suite No. 4, Ocean Centre, Oladipo Diya Road, Opp. Gudu Library, Gudu District, Abuja.",
    center: [9.0000, 7.4833] as [number, number],
    lat: 9.0000,
    lng: 7.4833
  };

  const kadunaBranch = {
    title: "KADUNA BRANCH",
    address: "No. FF3 El-Gibbor Plaza, Opposite Barnawa Market, Kaduna.",
    center: [10.4650, 7.4300] as [number, number],
    lat: 10.4650,
    lng: 7.4300
  };

  // Operating areas combined markers (Abuja & Kaduna, plus Jos)
  const operatingAreaMarkers = [
    {
      title: "Abuja Regional Office",
      address: "Suite No. 4, Ocean Centre, Gudu District, Abuja",
      lat: 9.0000,
      lng: 7.4833
    },
    {
      title: "Kaduna Branch Office",
      address: "No. FF3 El-Gibbor Plaza, Barnawa, Kaduna",
      lat: 10.4650,
      lng: 7.4300
    },
    {
      title: "Jos Head Office",
      address: "Adjacent Cocin Rayfield, Jonah David Jang Way, Jos",
      lat: 9.8650,
      lng: 8.8450
    }
  ];

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* =========================================================================
          PAGE BANNER
          Height about 355px, navy #00206B background with faint skyscrapers photo
          Title: "Company Profile" ("Company" white, "Profile" red)
          Short red horizontal line (190px wide, 2px)
          Subtitle: "Visit our offices across Plateau, Abuja and Kaduna."
          ========================================================================= */}
      <PageBanner
        whiteTitle="Company"
        redTitle="Profile"
        subtitle="Visit our offices across Plateau, Abuja and Kaduna."
        bannerHeight="h-[355px] min-h-[355px]"
      />

      {/* =========================================================================
          SECTION 1: FIND US (white background, 90px top padding)
          ========================================================================= */}
      <section className="bg-white pt-[90px] pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered heading block */}
          <div className="text-center mb-[50px]">
            {/* Small red label: "OUR OFFICES" (12px Montserrat Bold, uppercase, letter-spacing 0.2em) */}
            <div className="font-heading font-bold text-[12px] uppercase tracking-[0.2em] text-[#E31E2D] mb-2">
              OUR OFFICES
            </div>
            {/* Section heading: "Find Us" (40px Montserrat ExtraBold, navy) */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] text-[#00206B] leading-tight">
              Find Us
            </h2>
          </div>

          {/* 3-column grid of office cards inside the 1200px container, 24px gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {/* CARD 1: HEAD OFFICE (Jos) */}
            <div className="bg-white border border-[#E5E7EB] sharp-corner overflow-hidden flex flex-col shadow-xs">
              {/* (a) Navy header bar (about 70px tall) with red circular icon (40px) */}
              <div className="bg-[#00206B] h-[70px] px-5 flex items-center gap-3.5 shrink-0">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E31E2D] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-[15px] text-white uppercase tracking-[0.1em]">
                  {headOffice.title}
                </h3>
              </div>

              {/* (b) White body (about 85px tall, 20px padding) with address in grey */}
              <div className="p-[20px] min-h-[85px] flex items-center bg-white border-b border-[#E5E7EB]">
                <p className="font-body text-[16px] text-[#4B5563] leading-[1.6]">
                  {headOffice.address}
                </p>
              </div>

              {/* (c) Live interactive Google Maps embed (about 225px tall) */}
              <LeafletMap
                title="HEAD OFFICE · JOS"
                address={headOffice.address}
                query="Jonah David Jang Way, Rayfield, Jos, Plateau State, Nigeria"
                center={headOffice.center}
                zoom={14}
                height="225px"
              />
            </div>

            {/* CARD 2: ABUJA BRANCH */}
            <div className="bg-white border border-[#E5E7EB] sharp-corner overflow-hidden flex flex-col shadow-xs">
              {/* (a) Navy header bar */}
              <div className="bg-[#00206B] h-[70px] px-5 flex items-center gap-3.5 shrink-0">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E31E2D] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-[15px] text-white uppercase tracking-[0.1em]">
                  {abujaBranch.title}
                </h3>
              </div>

              {/* (b) White body */}
              <div className="p-[20px] min-h-[85px] flex items-center bg-white border-b border-[#E5E7EB]">
                <p className="font-body text-[16px] text-[#4B5563] leading-[1.6]">
                  {abujaBranch.address}
                </p>
              </div>

              {/* (c) Live interactive Google Maps embed */}
              <LeafletMap
                title="ABUJA BRANCH · GUDU"
                address={abujaBranch.address}
                query="Ocean Centre, Oladipo Diya Road, Gudu District, Abuja, Nigeria"
                center={abujaBranch.center}
                zoom={15}
                height="225px"
              />
            </div>

            {/* CARD 3: KADUNA BRANCH */}
            <div className="bg-white border border-[#E5E7EB] sharp-corner overflow-hidden flex flex-col shadow-xs">
              {/* (a) Navy header bar */}
              <div className="bg-[#00206B] h-[70px] px-5 flex items-center gap-3.5 shrink-0">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E31E2D] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-[15px] text-white uppercase tracking-[0.1em]">
                  {kadunaBranch.title}
                </h3>
              </div>

              {/* (b) White body */}
              <div className="p-[20px] min-h-[85px] flex items-center bg-white border-b border-[#E5E7EB]">
                <p className="font-body text-[16px] text-[#4B5563] leading-[1.6]">
                  {kadunaBranch.address}
                </p>
              </div>

              {/* (c) Live interactive Google Maps embed */}
              <LeafletMap
                title="KADUNA BRANCH · BARNAWA"
                address={kadunaBranch.address}
                query="El-Gibbor Plaza, Barnawa Market, Kaduna, Nigeria"
                center={kadunaBranch.center}
                zoom={15}
                height="225px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OPERATING AREAS MAP (white background, 30px below the cards)
          ========================================================================= */}
      <section className="bg-white pt-[30px] pb-[70px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#E5E7EB] sharp-corner overflow-hidden shadow-xs">
            {/* Navy header bar with title and location tabs */}
            <div className="bg-[#00206B] px-5 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E31E2D]" strokeWidth={2.2} />
                <h3 className="font-heading font-bold text-[15px] text-white uppercase tracking-[0.1em]">
                  ABUJA, JOS & KADUNA OPERATING AREAS
                </h3>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-heading uppercase tracking-wider text-[#C7D0E8] hidden sm:inline">
                  Interactive Locator:
                </span>
                <span className="inline-flex items-center gap-1 bg-[#8CC63F]/20 text-[#8CC63F] border border-[#8CC63F]/40 px-2 py-0.5 text-[10px] font-heading font-bold uppercase tracking-wider">
                  Live GPS
                </span>
              </div>
            </div>

            {/* Wide interactive map about 340px tall (Central Nigeria corridor) */}
            <LeafletMap
              title="CENTRAL NIGERIA CORRIDOR · ABUJA · JOS · KADUNA"
              address="Suite 4 Ocean Centre Abuja | Cocin Rayfield Jos | El-Gibbor Plaza Barnawa Kaduna"
              query="Abuja to Kaduna to Jos Nigeria"
              center={[9.75, 7.45]}
              zoom={8}
              height="340px"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CONTACT THE GROUP (full-width light grey #F4F4F4 background,
          80px vertical padding, two columns inside 1200px container, 70px gap)
          ========================================================================= */}
      <section className="w-full bg-[#F4F4F4] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[70px] items-start">
            {/* Left column (about 575px wide) */}
            <div className="lg:col-span-6">
              {/* Small red label: "GET IN TOUCH" */}
              <div className="font-heading font-bold text-[12px] uppercase tracking-[0.2em] text-[#E31E2D] mb-2">
                GET IN TOUCH
              </div>

              {/* Heading (navy): "Contact the Group" (40px Montserrat ExtraBold, navy) */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] text-[#00206B] leading-tight mb-4">
                Contact the Group
              </h2>

              {/* Two short horizontal lines side by side under the heading (each about 155px wide, 2px) */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-[155px] h-[2px] bg-[#E31E2D]" />
                <div className="w-[155px] h-[2px] bg-[#00206B]" />
              </div>

              {/* Paragraph (17px, grey) */}
              <p className="font-body text-[17px] text-[#4B5563] leading-[1.65] mb-[30px]">
                Reach out to any of our offices or send a message directly. Our team will respond promptly.
              </p>

              {/* Stack of white contact cards, each about 73px tall, 16px gap between cards */}
              <div className="space-y-[16px]">
                {/* 1. Mail icon — "EMAIL" — "rongroupofcompanies@gmail.com" */}
                <div className="bg-white border border-[#E5E7EB] min-h-[73px] px-5 py-3 sharp-corner flex items-center gap-4 shadow-xs">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#00206B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#6B7280]">
                      EMAIL
                    </div>
                    <a
                      href="mailto:rongroupofcompanies@gmail.com"
                      className="font-heading font-bold text-[15px] text-[#00206B] hover:text-[#E31E2D] transition-colors break-all"
                    >
                      rongroupofcompanies@gmail.com
                    </a>
                  </div>
                </div>

                {/* 2. Globe icon — "INFO" — "@rongroups.company.site" */}
                <div className="bg-white border border-[#E5E7EB] min-h-[73px] px-5 py-3 sharp-corner flex items-center gap-4 shadow-xs">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#00206B] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#6B7280]">
                      INFO
                    </div>
                    <div className="font-heading font-bold text-[15px] text-[#00206B]">
                      @rongroups.company.site
                    </div>
                  </div>
                </div>

                {/* 3. Phone icon — "PHONE NUMBER" — "07077104798, 08120295062" */}
                <div className="bg-white border border-[#E5E7EB] min-h-[73px] px-5 py-3 sharp-corner flex items-center gap-4 shadow-xs">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#00206B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#6B7280]">
                      PHONE NUMBER
                    </div>
                    <div className="font-heading font-bold text-[15px] text-[#00206B]">
                      07077104798, 08120295062
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column (about 575px wide): white form card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-[#E5E7EB] p-[32px] sharp-corner shadow-xs">
                {formSubmitted ? (
                  <div className="py-10 text-center">
                    <div className="w-14 h-14 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center mx-auto mb-4 sharp-corner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#00206B] mb-2">
                      Message Dispatched
                    </h3>
                    <p className="font-body text-[#4B5563] text-sm leading-relaxed mb-6">
                      Thank you for contacting RON Group of Companies Ltd. Your inquiry has been routed to the appropriate corporate desk.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-[#00206B] hover:bg-[#E31E2D] text-white font-heading font-bold text-[13px] uppercase tracking-[0.1em] px-6 py-2.5 sharp-corner transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-[24px]">
                    {/* FULL NAME */}
                    <div>
                      <label className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#6B7280] mb-2">
                        FULL NAME
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-[46px] px-4 bg-white border border-[#E5E7EB] text-[16px] font-body text-[#00206B] placeholder-[#9CA3AF] focus:border-[#00206B] focus:outline-none sharp-corner"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#6B7280] mb-2">
                        EMAIL
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-[46px] px-4 bg-white border border-[#E5E7EB] text-[16px] font-body text-[#00206B] placeholder-[#9CA3AF] focus:border-[#00206B] focus:outline-none sharp-corner"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#6B7280] mb-2">
                        MESSAGE
                      </label>
                      <textarea
                        required
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full h-[115px] p-4 bg-white border border-[#E5E7EB] text-[16px] font-body text-[#00206B] placeholder-[#9CA3AF] focus:border-[#00206B] focus:outline-none sharp-corner resize-none"
                      />
                    </div>

                    {/* Full-width solid red (#E31E2D) button, about 52px tall, white bold uppercase centered text "SEND MESSAGE" */}
                    <button
                      type="submit"
                      className="w-full h-[52px] bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[15px] uppercase tracking-[0.15em] flex items-center justify-center sharp-corner transition-colors duration-150 cursor-pointer shadow-sm"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
