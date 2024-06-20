import React, { useState } from "react";
import "../styles/HeroBanner.css";
import bizImage from "../assets/images/biz.webp";

const HeroBanner = () => {
  const [currentColor, setCurrentColor] = useState(null);
  const [showText, setShowText] = useState(true);

  // Definim o listă cu obiecte care să conțină indexul pătratului și litera asociată
  const lettersInSquares = [
    { index: 0, letter: "A" },
    { index: 3, letter: "B" },
    { index: 23, letter: "A" },
    { index: 24, letter: "L" },
    { index: 25, letter: "E" },
    { index: 26, letter: "G" },
    { index: 27, letter: "E" },
    { index: 42, letter: "O" },
    { index: 56, letter: "C" },
    { index: 57, letter: "U" },
    { index: 58, letter: "L" },
    { index: 59, letter: "O" },
    { index: 60, letter: "A" },
    { index: 61, letter: "R" },
    { index: 62, letter: "E" },
  ];

  const handleClickSquare = (color) => {
    setCurrentColor(color);
  };

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <div
      className="hero-banner"
      style={{
        backgroundColor: "#808080",
      }}
    >
      {showText && (
        <div className="text-container">
          <h1 className="hero-text">
            Alege-ți culoarea și hai să vopsim mașina
          </h1>
          {currentColor && (
            <p className="color-code">
              Codul culorii selectate: {currentColor}
            </p>
          )}
        </div>
      )}
      <div className="rectangle">
        {Array.from({ length: 200 }, (_, index) => (
          <div
            key={index}
            className={`square square-${index + 1}`}
            onClick={() =>
              handleClickSquare(`rgb(${index + 1}, ${index + 1}, ${index + 1})`)
            }
          >
            {/* Verificăm dacă pătratul curent are o literă asociată */}
            {lettersInSquares.find((item) => item.index === index) && (
              <span className="square-letter">
                {lettersInSquares.find((item) => item.index === index).letter}
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="toggle-button" onClick={handleToggleText}>
        {showText ? "Ascunde textele" : "Afișează textele"}
      </button>
    </div>
  );
};

export default HeroBanner;
