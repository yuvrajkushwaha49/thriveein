import React from 'react';

const HomeCTA1 = () => {
  return (
    <div className="infetech-cta-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="infetech-cta-box animated wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="cta-thumb">
                    <img src="/assets/images/cta-thumb.png" alt="CTA Thumb" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="cta-content">
                    <h2 className="title">We’are Ready to Grow Your Business!</h2>
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <ul>
                          <li><i className="fas fa-check-circle"></i> Strategies that help you attract more customers and grow your business</li>
                          <li><i className="fas fa-check-circle"></i> Personalized solutions built around your business goals</li>
                          <li><i className="fas fa-check-circle"></i> Continuous support focused on better results and long-term growth</li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <a href="#" className="main-btn ml-30">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA1;
