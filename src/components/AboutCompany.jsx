import React from 'react';

const AboutCompany = () => {
  return (
    <section className="infetech-company-about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="company-about-thumb">
              <img src="/assets/images/company-thumb-2.png" alt="Company Thumb" />
              <div className="icon">
                <img src="/assets/images/about-logo.png" alt="About Logo Badge" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="infetech-about-content">
              <span>About Thrivee In</span>
              <h3 className="title">Your Partner For <br /> Digital Growth</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even.
              </p>
              <ul>
                <li><i className="fal fa-check"></i> Best quality support</li>
                <li><i className="fal fa-check"></i> Serve the best</li>
              </ul>
              <ul>
                <li><i className="fal fa-check"></i> Money back guarantee</li>
                <li><i className="fal fa-check"></i> Trusted Professionals</li>
              </ul>
              <a href="#" className="main-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
