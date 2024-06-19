import React from "react";
import "../styles/Portfolio.css";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedSectionFirst from "../components/AnimatedSectionFirst";
import mercedesImages from "../data/mercedesImages";
import mercedesCLAImages from "../data/mercedesCLAImages";
// import AnimatedSectionn from "../components/AnimatedSectionn";

const Portfolio = () => {
  return (
    <>
      <div className="Portfolio-main">
        <h1>Proiecte</h1>
        <div>
          <AnimatedSectionFirst
            images={mercedesImages}
            title="Mercedes"
            description="Oferim cele mai bune servicii de vopsire auto pentru vehiculele Mercedes din oraș."
          />
          <AnimatedSection
            images={mercedesCLAImages}
            title="Mercedes CLA"
            description="Descriere pentru Mercedes CLA."
          />
          <AnimatedSection
            images={mercedesCLAImages}
            title="Mercedes CLA"
            description="Descriere pentru Mercedes CLA."
          />
          <AnimatedSection
            images={mercedesCLAImages}
            title="Mercedes CLA"
            description="Descriere pentru Mercedes CLA."
          />
          <AnimatedSection
            images={mercedesCLAImages}
            title="Mercedes CLA"
            description="Descriere pentru Mercedes CLA."
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
