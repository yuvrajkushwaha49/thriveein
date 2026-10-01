import React from 'react';

const HomeAbout = () => {
  return (
    <section className="infetech-about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="infetech-about-thumb animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
              <img src="/assets/images/about-thumb-1.jpg" alt="About Main" />
              <img className="thumb" src="/assets/images/about-thumb-2.jpg" alt="About Secondary" />
              <div className="about-box">
                <h4 className="title">
                  95%
                </h4>
                <span>Satisfied Clients</span>
              </div>
              <img className="about-logo" src="/assets/images/about-logo.png" alt="Company Logo badge" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="infetech-about-content">
              <span>About Thrivee In</span>
              <h3 className="title">Your Partner For <br /> Digital Growth</h3>
              <p>
                We help businesses grow with smart technology and digital marketing solutions. From high-performing websites and custom software to SEO, paid advertising, lead generation, and AI solutions, we bring everything together under one roof.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="about-card">
                    <div className="icon">
                      <img src="/assets/images/icon/icon-1.png" alt="Icon 1" />
                    </div>
                    <div className="content">
                      <h4 className="title">Website <br /> Development</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-card">
                    <div className="icon">
                      <img src="/assets/images/icon/icon-2.png" alt="Icon 2" />
                    </div>
                    <div className="content">
                      <h4 className="title"> Digital <br /> Marketing</h4>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li><i className="fas fa-check-circle"></i> Technology built around your business goals</li>
                <li><i className="fas fa-check-circle"></i> Personalized solutions built around your business goals</li>
                <li><i className="fas fa-check-circle"></i> Continuous support focused on better results and long-term growth</li>
              </ul>
              <a href="#" className="main-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
