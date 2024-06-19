import React from "react";
import "../styles/HeroBanner.css";
import bizImage from "../assets/images/biz.webp";
const HeroBanner = () => {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${bizImage})` }}
    >
      <h1 className="hero-text">Bizpaint</h1>
    </div>
  );
};

export default HeroBanner;
