import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ProjectSlider.css";

const ProjectSlider = ({ projectImages }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Include all required modules
      spaceBetween={30}
      navigation
      scrollbar={{ draggable: true }} // Added draggable scrollbar
      className="swiper"
      loop={true} // Enable looping
      autoplay={{ delay: 5000, disableOnInteraction: false }} // Add autoplay
      speed={700} // Slide transition speed
    >
      {projectImages.map((image, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="swiper-slide-bg-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
