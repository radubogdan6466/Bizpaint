import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Zoom, Navigation } from "swiper/modules";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MercedesCLA1 from "../assets/images/MercedesCLA/MercedesCLA1.jpg";
import MercedesCLA2 from "../assets/images/MercedesCLA/MercedesCLA2.jpg";
import MercedesCLA3 from "../assets/images/MercedesCLA/MercedesCLA3.jpg";
import MercedesCLA4 from "../assets/images/MercedesCLA/MercedesCLA4.jpg";
import MercedesCLA5 from "../assets/images/MercedesCLA/MercedesCLA5.jpg";
import MercedesCLA6 from "../assets/images/MercedesCLA/MercedesCLA6.jpg";
import MercedesCLA7 from "../assets/images/MercedesCLA/MercedesCLA7.jpg";
import MercedesCLA8 from "../assets/images/MercedesCLA/MercedesCLA8.jpg";
import MercedesCLA9 from "../assets/images/MercedesCLA/MercedesCLA9.jpg";

import "../styles/AnimatedSection.css";

const ImageGallery = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      slidesPerView={1}
      zoom={true}
      navigation={true}
      className="image-gallery"
      modules={[Zoom, Navigation]}
    >
      {/* {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Mercedes Car ${index + 1}`} />
        </SwiperSlide>
      ))} */}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA1} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA2} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA3} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA4} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA5} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA6} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA7} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA8} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={MercedesCLA9} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
    </Swiper>
  );
};

const AnimatedSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          section.classList.add("animate");
        } else {
          section.classList.remove("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="animated-section">
      <h2>Mercedes CLA</h2>

      <ImageGallery />
    </div>
  );
};

export default AnimatedSection;
