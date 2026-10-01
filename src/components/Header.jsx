import React from 'react';

const Header = ({ currentPage = 'home', onNavigate, onOpenOffcanvas, onOpenSearch }) => {
  const handleNav = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="infetech-header-area normal-header header-sticky sticky">
      <div className="header-wrapper">
        <div className="templates-logo">
          <a href="#" onClick={(e) => handleNav(e, 'home')}>
            <img src="/assets/images/logo-white.png" alt="Infetech Logo" />
          </a>
        </div>
        <div className="header-box">
          <div className="header-main-nav">
            <div className="header-main-nav-box">
              <ul>
                <li className={currentPage === 'home' ? 'active' : ''}>
                  <a href="#" onClick={(e) => handleNav(e, 'home')}>
                    Home
                  </a>
                </li>
                <li className={currentPage === 'about' ? 'active' : ''}>
                  <a href="#" onClick={(e) => handleNav(e, 'about')}>
                    About
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Services</a>
                  <ul className="sub-menu">
                    <li><a href="#">Google & Meta Ads</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">AI Solutions</a></li>
                    <li><a href="#">Custom Software Development</a></li>
                    <li><a href="#">Search Engine Optimization</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Works</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                </li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Contact</a></li>
              </ul>
            </div>
            <div className="header-main-info">
              <div className="header-mini-btn">
                <ul>

                  <li className="d-lg-none d-inline-block">
                    <button
                      onClick={onOpenOffcanvas}
                      className="toggle-bar canvas_open"
                      aria-label="Open Mobile Menu"
                      type="button"
                    >
                      <i className="fal fa-bars"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="header-main-info-contact">
                <div className="icon">
                  <img src="/assets/images/icon/phone.svg" alt="Phone" />
                </div>
                <div className="content">
                  <span>Call Anytime</span>
                  <a href="tel:+8898006802">+91 79099 11746</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
