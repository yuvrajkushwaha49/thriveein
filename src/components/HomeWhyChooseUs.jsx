import React from 'react';

const HomeWhyChooseUs = () => {
  return (
    <section className="infetech-why-choose-area pt-100 pb-100" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="why-choose-content animated wow fadeInLeft" data-wow-duration="1200ms">
              <div className="section-title mb-4">
                <span style={{
                  color: '#0060ff',
                  fontWeight: 700,
                  fontSize: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  Why Choose Us <span style={{ width: '35px', height: '2px', backgroundColor: '#0060ff', display: 'inline-block' }}></span>
                </span>
                <h2 style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  color: '#111827',
                  lineHeight: 1.25,
                  marginTop: '15px',
                  letterSpacing: '-0.5px'
                }}>
                  We turn ideas into  digital solutions that drive growth.
                </h2>
                <p style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginTop: '18px',
                  marginBottom: '35px'
                }}>
                  At ThriveIn, we combine technology, creativity, and digital marketing to build solutions that help businesses grow, connect, and perform better online.
                </p>
              </div>

              <div className="feature-list">
                {/* Feature 1 */}
                <div className="d-flex align-items-start mb-4" style={{ gap: '20px' }}>
                  <div style={{
                    minWidth: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    backgroundColor: '#0060ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '22px',
                    boxShadow: '0 8px 20px rgba(0, 96, 255, 0.25)',
                    marginTop: '4px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                      Smart Digital Solutions
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '24px', margin: 0 }}>
                      Maecenas tempus, tellus eget condime honcus sem quam semper
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="d-flex align-items-start" style={{ gap: '20px' }}>
                  <div style={{
                    minWidth: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    backgroundColor: '#0060ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '22px',
                    boxShadow: '0 8px 20px rgba(0, 96, 255, 0.25)',
                    marginTop: '4px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                      24/7 Dedicated Support
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '24px', margin: 0 }}>
                      From development and marketing to campaigns and ongoing support, our team stays with you every step of the way
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why-choose-thumb text-center animated wow fadeInRight" data-wow-duration="1200ms" style={{ padding: '20px 0' }}>
              <img
                src="/assets/images/why-choose-thumb.png"
                alt="Why Choose Us"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'inline-block'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
