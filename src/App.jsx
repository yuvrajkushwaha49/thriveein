import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import SearchPopup from './components/SearchPopup';
import OffcanvasMenu from './components/OffcanvasMenu';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    // Hide preloader after component mounts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check initial hash
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`main-wrapper ${isSearchOpen ? 'search-active' : ''}`}>
      {/* Preloader */}
      {loading && (
        <div className="preloader">
          <div className="lds-ellipsis">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      {/* Search Popup Modal */}
      <SearchPopup 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Offcanvas Menu Drawer */}
      <OffcanvasMenu 
        isOpen={isOffcanvasOpen} 
        onClose={() => setIsOffcanvasOpen(false)} 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Main Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenOffcanvas={() => setIsOffcanvasOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Dynamic Page Rendering - HomePage is default Index */}
      {currentPage === 'home' ? (
        <HomePage />
      ) : (
        <AboutPage />
      )}

      {/* Footer & Copyright */}
      <Footer onNavigate={handleNavigate} />

      {/* Back To Top Button */}
      <GoToTop />
    </div>
  );
}

export default App;
