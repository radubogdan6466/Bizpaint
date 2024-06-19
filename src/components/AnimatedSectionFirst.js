import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Zoom, Navigation } from "swiper/modules";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/AnimatedSection.css";

const ImageGallery = ({ images }) => {
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
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-zoom-container">
            <img src={image} alt={`Mercedes Car ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const AnimatedSectionFirst = ({ title, description, images }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add("animate");

    return () => {
      section.classList.remove("animate");
    };
  }, []);

  return (
    <div ref={sectionRef} className="animated-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <ImageGallery images={images} />
      {/* Pass the imported images array */}
    </div>
  );
};

export default AnimatedSectionFirst;
