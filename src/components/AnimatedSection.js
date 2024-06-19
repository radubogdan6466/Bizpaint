import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Zoom, Navigation } from "swiper/modules";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mercedes1 from "../assets/images/mercedes/mercedes1.jpg";
import mercedes2 from "../assets/images/mercedes/mercedes2.jpg";
import mercedes3 from "../assets/images/mercedes/mercedes3.jpg";
import mercedes4 from "../assets/images/mercedes/mercedes4.jpg";
import mercedes5 from "../assets/images/mercedes/mercedes5.jpg";
import mercedes6 from "../assets/images/mercedes/mercedes6.jpg";
import mercedes7 from "../assets/images/mercedes/mercedes7.jpg";
import mercedes8 from "../assets/images/mercedes/mercedes8.jpg";
import mercedes9 from "../assets/images/mercedes/mercedes9.jpg";
import mercedes10 from "../assets/images/mercedes/mercedes10.jpg";
import mercedes11 from "../assets/images/mercedes/mercedes11.jpg";
import mercedes12 from "../assets/images/mercedes/mercedes12.jpg";
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
          <img src={mercedes5} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes2} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes3} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes4} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes1} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes6} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes7} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes8} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes9} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes10} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes11} alt="Mercedes" />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <div className="swiper-zoom-container">
          <img src={mercedes12} alt="Mercedes" />
        </div>
      </SwiperSlide>
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
      <h2>Mercedes</h2>
      <p>
        Oferim cele mai bune servicii de vopsire auto pentru vehiculele Mercedes
        din oraș.
      </p>
      <ImageGallery />
    </div>
  );
};

export default AnimatedSection;
