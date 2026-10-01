import React, { useState } from 'react';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  const handleNav = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <>
      <footer className="infetech-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-about">
                <a href="#" onClick={(e) => handleNav(e, 'home')}><img src="/assets/images/logo-white.png" alt="logo" /></a>
                <p>Thrivee In is an IT and digital marketing company helping businesses build, market, and grow with innovative digital solutions.</p>
                <ul>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/thrivee_in_global?stkn=MWM4YjdneG05OGFnZg%3D%3D&utm_source=qr" target='blank'><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-nav">
                <h4 className="title">Links</h4>
                <ul>
                  <li><a href="#" onClick={(e) => handleNav(e, 'about')}>About us</a></li>
                  <li><a href="#">Meet our Team</a></li>
                  <li><a href="#">News & Media</a></li>
                  <li><a href="#">Our Projects</a></li>
                  <li><a href="#">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-newsletter">
                <h4 className="title">Newsletter</h4>
                <p>Signup for our latest news & articles. We won’t give you spam mails.</p>
                <form onSubmit={handleNewsletterSubmit}>
                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" aria-label="Subscribe"><i className="far fa-paper-plane"></i></button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h4 className="title">Contact</h4>
                <ul>
                  <li><i className="fas fa-phone"></i><span>+91 79099 11746</span></li>
                  <li><i className="fas fa-envelope"></i><span>thriveein@gmail.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright text-center">
        <p>© All Copyright 2022 by <a href="mailto:thriveein@gmail.com">thriveein</a></p>
      </div>
    </>
  );
};

export default Footer;
