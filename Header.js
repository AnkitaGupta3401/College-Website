import React from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  // Function to close the navbar collapse (on mobile)
  const closeNavbar = () => {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar && navbar.classList.contains('show')) {
      const collapse = new window.bootstrap.Collapse(navbar, { toggle: false });
      collapse.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center ms-3">
            <img src={logo} alt="Logo" height="60" width="60" className="me-2" />
            <span className="fw-bold logo-name">UIIT</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeNavbar}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeNavbar}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/partners" className="nav-link" onClick={closeNavbar}>Our Partners</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={closeNavbar}>Contact</Link>
              </li>
            </ul>
            <div className="d-flex me-3">
              <Link to="/get-started" className="btn btn-success" onClick={closeNavbar}>
                Get Started Here
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
