import React, { useEffect, useState } from "react";
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
    <nav className={`navbar ${isNavbarSticky ? "sticky" : ""}`}>
      <div className="logo " onClick={scrollToTop}>
        Bizpaint
      </div>
      <ul className="navLinks">
        <li>
          <a href="#services">Servicii</a>
        </li>
        <li>
          <a href="#about">Despre</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
