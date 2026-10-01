import React, { useState } from 'react';

const HomeVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="infetech-video-area position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="video-content animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className="play-btn">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="video-popup border-0 bg-transparent text-white p-0"
                    aria-label="Play Video"
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </div>
                <span>Do You Need a Meeting?</span>
                <h2 className="title">Save Time and Money with a Best IT Company.</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="video-content-wrapper animated wow fadeIn" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="video-content-box">
                  <div className="item">
                    <h4 className="title">95%</h4>
                    <span>Client Satisfaction <br /> Rate</span>
                  </div>
                </div>
                <div className="video-content-box item-2 animated wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="item">
                    <h4 className="title">80+</h4>
                    <span>Projects has been <br /> completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-shape">
          <img src="/assets/images/video-shape.png" alt="Shape" />
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          onClick={() => setIsVideoOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', maxWidth: '850px', aspectRatio: '16/9' }}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fEErySYqItI?autoplay=1"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeVideo;
