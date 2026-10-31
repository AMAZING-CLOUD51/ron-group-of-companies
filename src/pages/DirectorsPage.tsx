import React from 'react';
import { Users, ShieldCheck } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';

interface DirectorEntry {
  sNo: string;
  name: string;
  designation: string;
}

export function DirectorsPage() {
  const directorsList: DirectorEntry[] = [
    {
      sNo: "01",
      name: "Hon. Samuel Kasuwa",
      designation: "Managing Director / Chief Executive Officer"
    },
    {
      sNo: "02",
      name: "Mrs Huldah Tuamtsen-Samuel",
      designation: "Director"
    },
    {
      sNo: "03",
      name: "Samuel Kasuwa Junor",
      designation: "Director"
    },
    {
      sNo: "04",
      name: "Kasuwa Stephanie U.",
      designation: "Manager"
    },
    {
      sNo: "05",
      name: "Olatunde Amazing-Grace",
      designation: "Secretary"
    },
    {
      sNo: "06",
      name: "Mrs Philomena Alex",
      designation: "Financial Coordinator"
    },
    {
      sNo: "07",
      name: "Arc. Ibrahim Mansat",
      designation: "Company Architect"
    },
    {
      sNo: "08",
      name: "Hamza Abubakar S.",
      designation: "Marketer"
    },
    {
      sNo: "09",
      name: "Musa Dafang",
      designation: "Head of Operation"
    },
    {
      sNo: "10",
      name: "George Martins C.",
      designation: "Project Coordinator"
    },
    {
      sNo: "11",
      name: "Surv. Zee Timothy P.",
      designation: "Company Surveyor"
    },
    {
      sNo: "12",
      name: "Yakubu S Bawa Esq.",
      designation: "Company Legal Adviser"
    }
  ];

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* =========================================================================
          1. PAGE BANNER
          Height about 355px, navy #00206B background with faint skyscrapers photo
          Title "Board of Directors" ("Board of" white, "Directors" red).
          Short red line (190px, 2px), subtitle "Strong leadership. Shared vision. Lasting impact."
          ========================================================================= */}
      <PageBanner
        whiteTitle="Board of"
        redTitle="Directors"
        subtitle="Strong leadership. Shared vision. Lasting impact."
        bannerHeight="h-[355px] min-h-[355px]"
      />

      {/* =========================================================================
          2. DIRECTORS SECTION (white background, 95px top padding, 60px bottom padding)
          ========================================================================= */}
      <section className="bg-white pt-[95px] pb-[60px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered tagline row: a navy circular badge (48px) with a white "people/users" line icon,
              followed by the text "Experienced Leaders. Exceptional Results." in navy.
              Gap between icon and text 14px. Margin below the row: 40px. */}
          <div className="flex items-center justify-center gap-[14px] mb-[40px]">
            <div className="w-[48px] h-[48px] rounded-full bg-[#00206B] flex items-center justify-center shrink-0 shadow-sm">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-heading font-semibold text-[20px] text-[#00206B] leading-snug">
              Experienced Leaders. Exceptional Results.
            </h2>
          </div>

          {/* Directors table, centered, about 1024px wide, with a 1px light border (#E5E7EB) around the whole table, three columns:
              - Column 1 "S/NO" (about 16% width, starts 16px from the left edge)
              - Column 2 "NAME" (about 41% width)
              - Column 3 "DESIGNATION" (remaining width)
              Header row: navy #00206B background, 48px tall, white uppercase text.
              Body rows: 56px tall each, vertically centered text, alternating background starting with WHITE on row 01 and #F4F4F4 on row 02, then alternating.
              No vertical borders between columns. */}
          <div className="max-w-[1024px] mx-auto overflow-hidden sharp-corner border border-[#E5E7EB] shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-[#00206B] h-[48px] text-white">
                    <th
                      scope="col"
                      className="w-[16%] pl-4 sm:pl-6 text-[12px] font-heading font-bold uppercase tracking-[0.15em] whitespace-nowrap"
                    >
                      S/NO
                    </th>
                    <th
                      scope="col"
                      className="w-[41%] px-4 sm:px-6 text-[12px] font-heading font-bold uppercase tracking-[0.15em] whitespace-nowrap"
                    >
                      NAME
                    </th>
                    <th
                      scope="col"
                      className="px-4 sm:px-6 text-[12px] font-heading font-bold uppercase tracking-[0.15em] whitespace-nowrap"
                    >
                      DESIGNATION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {directorsList.map((director, index) => {
                    const isEven = index % 2 === 1; // row 01 (index 0) is white, row 02 (index 1) is #F4F4F4
                    return (
                      <tr
                        key={director.sNo}
                        className={`h-[56px] transition-colors duration-150 hover:bg-[#EBF0FA] ${
                          isEven ? 'bg-[#F4F4F4]' : 'bg-white'
                        }`}
                      >
                        {/* Serial numbers (01, 02...): 16px Montserrat Bold, red (#E31E2D) */}
                        <td className="w-[16%] pl-4 sm:pl-6 font-heading font-bold text-[16px] text-[#E31E2D] align-middle whitespace-nowrap">
                          {director.sNo}
                        </td>

                        {/* Names: 15px Montserrat SemiBold, navy (#00206B) */}
                        <td className="w-[41%] px-4 sm:px-6 font-heading font-semibold text-[15px] text-[#00206B] align-middle whitespace-nowrap">
                          {director.name}
                        </td>

                        {/* Designations: 15px Inter Regular, grey (#4B5563) */}
                        <td className="px-4 sm:px-6 font-body font-normal text-[15px] text-[#4B5563] align-middle">
                          {director.designation}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fiduciary compliance footer info */}
          <div className="max-w-[1024px] mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-2 px-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00206B]" />
              <span>Corporate Affairs Commission Registered Governance Board</span>
            </div>
            <span className="font-heading font-bold text-[#00206B]">
              RON GROUP OF COMPANIES LTD · RC: 8895046
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
