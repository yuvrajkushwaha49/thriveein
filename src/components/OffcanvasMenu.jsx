import React from 'react';

const OffcanvasMenu = ({ isOpen, onClose, onNavigate, currentPage = 'home' }) => {
  const handleNav = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
    onClose();
  };

  return (
    <>
      <div
        className={`off_canvars_overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        style={{ display: isOpen ? 'block' : 'none' }}
      ></div>
      <div className={`offcanvas_menu ${isOpen ? 'open' : ''}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`offcanvas_menu_wrapper ${isOpen ? 'active' : ''}`}>
                <div className="canvas_close">
                  <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }}>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                  </ul>
                </div>
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">
                    <li className={`menu-item-has-children ${currentPage === 'home' ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => handleNav(e, 'home')}>Home</a>
                    </li>
                    <li className={`menu-item-has-children ${currentPage === 'about' ? 'active' : ''}`}>
                      <a href="#" onClick={(e) => handleNav(e, 'about')}>About</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" onClick={(e) => handleNav(e, 'about')}>Pages</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Services</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Projects</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas_footer">
                  <span>
                    <a href="mailto:thriveein@gmail.com">
                      <i className="fa fa-envelope"></i> thriveein@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffcanvasMenu;
