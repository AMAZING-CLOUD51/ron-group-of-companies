import React, { useState, useEffect } from 'react';
import { SharedNavbar, PageId } from './components/SharedNavbar';
import { SharedFooter } from './components/SharedFooter';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { DirectorsPage } from './pages/DirectorsPage';
import { StructurePage } from './pages/StructurePage';
import { SectorsPage } from './pages/SectorsPage';
import { ContactPage } from './pages/ContactPage';
import { ContactModal } from './components/ContactModal';
import { ReadMoreModal } from './components/ReadMoreModal';
import { ViewAllServicesModal } from './components/ViewAllServicesModal';

export default function App() {
  // Support initial page based on URL hash or default to HOME
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('contact')) return 'CONTACT';
      if (hash.includes('sector')) return 'SECTORS';
      if (hash.includes('structure')) return 'STRUCTURE';
      if (hash.includes('director')) return 'DIRECTORS';
      if (hash.includes('gallery')) return 'GALLERY';
      if (hash.includes('services')) return 'SERVICES';
      if (hash.includes('about')) return 'ABOUT';
      if (hash.includes('home')) return 'HOME';
    }
    return 'HOME';
  });

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [readMoreModalOpen, setReadMoreModalOpen] = useState(false);
  const [allServicesModalOpen, setAllServicesModalOpen] = useState(false);
  const [selectedSectorInquiry, setSelectedSectorInquiry] = useState<string>('General Inquiry');

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('contact')) setCurrentPage('CONTACT');
      else if (hash.includes('sector')) setCurrentPage('SECTORS');
      else if (hash.includes('structure')) setCurrentPage('STRUCTURE');
      else if (hash.includes('director')) setCurrentPage('DIRECTORS');
      else if (hash.includes('gallery')) setCurrentPage('GALLERY');
      else if (hash.includes('services')) setCurrentPage('SERVICES');
      else if (hash.includes('about')) setCurrentPage('ABOUT');
      else if (hash.includes('home')) setCurrentPage('HOME');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page.toLowerCase();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactWithSector = (sectorTitle?: string) => {
    setSelectedSectorInquiry(sectorTitle || 'General Inquiry');
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#4B5563] font-body flex flex-col selection:bg-[#E31E2D] selection:text-white">
      {/* =========================================================================
          SHARED NAVBAR (sticky at the top, full width, 72px tall)
          Identical across ALL pages of the website:
          Home, About, Services, Gallery, Directors, Structure, Sectors, Contact
          ========================================================================= */}
      <SharedNavbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('CONTACT')}
      />

      {/* =========================================================================
          MAIN PAGE CONTENT ROUTING (8 pages: Home, About, Services, Gallery, Directors, Structure, Sectors, Contact)
          ========================================================================= */}
      <main className="flex-1 w-full">
        {currentPage === 'HOME' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenContact={handleOpenContactWithSector}
            onOpenReadMore={() => setReadMoreModalOpen(true)}
            onOpenAllServices={() => setAllServicesModalOpen(true)}
          />
        )}

        {currentPage === 'ABOUT' && <AboutPage />}

        {currentPage === 'SERVICES' && (
          <ServicesPage onOpenContact={handleOpenContactWithSector} />
        )}

        {currentPage === 'GALLERY' && <GalleryPage />}

        {currentPage === 'DIRECTORS' && <DirectorsPage />}

        {currentPage === 'STRUCTURE' && <StructurePage />}

        {currentPage === 'SECTORS' && (
          <SectorsPage onOpenContact={handleOpenContactWithSector} />
        )}

        {currentPage === 'CONTACT' && <ContactPage />}
      </main>

      {/* =========================================================================
          SHARED FOOTER (navy background, skyline silhouette at top, 4 columns)
          ========================================================================= */}
      <SharedFooter
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContactWithSector}
      />

      {/* =========================================================================
          INTERACTIVE MODALS
          ========================================================================= */}
      {/* 1. Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultSector={selectedSectorInquiry}
      />

      {/* 2. Read More Modal */}
      <ReadMoreModal
        isOpen={readMoreModalOpen}
        onClose={() => setReadMoreModalOpen(false)}
        onOpenContact={() => handleNavigate('CONTACT')}
      />

      {/* 3. View All Services Modal */}
      <ViewAllServicesModal
        isOpen={allServicesModalOpen}
        onClose={() => setAllServicesModalOpen(false)}
        onSelectService={(serviceTitle) => handleOpenContactWithSector(serviceTitle)}
      />
    </div>
  );
}
