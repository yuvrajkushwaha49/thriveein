import React, { useState, useEffect } from 'react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="go-top-area">
      <div className="go-top-wrap">
        <div className="go-top-btn-wrap">
          <div 
            className={`go-top go-top-btn ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            aria-label="Back to top"
            onKeyDown={(e) => { if (e.key === 'Enter') scrollToTop(); }}
          >
            <i className="fal fa-angle-double-up"></i>
            <i className="fal fa-angle-double-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoToTop;
