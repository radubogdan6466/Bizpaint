import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

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
      behavior: "smooth", // face derularea să fie lină
    });
  };
  return (
    <>
      <nav className={`navbar ${isNavbarSticky ? "sticky" : ""}`}>
        <div className="logo " onClick={scrollToTop}>
          <Link className="logo " to="/">
            <h1>Bizpaint</h1>
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/portfolio" onClick={scrollToTop}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Servicii" onClick={scrollToTop}>
              Servicii
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={scrollToTop}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
