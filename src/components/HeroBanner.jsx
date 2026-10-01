import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    subTitle: 'GROW YOUR BUSINESS WITH TECHNOLOGY',
    titleLine1: 'DIGITAL SOLUTIONS',
    titleLine2: 'THAT HELP YOU THRIVE',
    className: 'item-1',
    bg: '/assets/images/banner-thumb-1.jpg',
  },
  {
    id: 2,
    subTitle: 'GROW YOUR BUSINESS WITH TECHNOLOGY',
    titleLine1: 'DIGITAL SOLUTIONS',
    titleLine2: 'THAT HELP YOU THRIVE',
    className: 'item-2',
    bg: '/assets/images/banner-thumb-2.jpg',
  },
  {
    id: 3,
    subTitle: 'GROW YOUR BUSINESS WITH TECHNOLOGY',
    titleLine1: 'DIGITAL SOLUTIONS',
    titleLine2: 'THAT HELP YOU THRIVE',
    className: 'item-3',
    bg: '/assets/images/banner-thumb-3.jpg',
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="infetech-banner-area infetech-banner-slide position-relative overflow-hidden"
      style={{ marginTop: 0 }}
    >
      <div
        className={`infetech-banner-slide-active ${slide.className}`}
        style={{
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          transition: 'all 0.8s ease-in-out',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="infetech-banner-content">
                <h4 className="title animate__animated animate__fadeInDown">
                  {slide.subTitle}
                </h4>
                <h1 className="animate__animated animate__fadeInLeft">
                  {slide.titleLine1}{' '}
                  <img src="/assets/images/banner-icon.png" alt="icon" style={{ verticalAlign: 'middle', margin: '0 10px' }} />{' '}
                  <br /> {slide.titleLine2}
                </h1>
                <a className="main-btn animate__animated animate__fadeInUp mt-3" href="#">
                  GET STARTED
                </a>
                <img
                  className="banner-arrow animate__animated animate__fadeInRight"
                  src="/assets/images/banner-arrow.png"
                  alt="Arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 20
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: idx === currentSlide ? '#7238fe' : 'rgba(255, 255, 255, 0.6)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
