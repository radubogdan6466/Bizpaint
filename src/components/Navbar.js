import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <nav className={`navbar ${isNavbarSticky ? "sticky" : ""}`}>
        <div className="logo" onClick={scrollToTop}>
          <Link className="logo" to="/">
            <h1>Bizpaint</h1>
          </Link>
        </div>
        <div
          className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`navLinks ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/portfolio"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/Servicii"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Servicii
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" onClick={closeMobileMenu}>
              Politica de Confidențialitate
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
