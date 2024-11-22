import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectCreative,
  Keyboard,
  Scrollbar,
  Zoom,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";
import "swiper/css/zoom";

import "./MySwiper.css";

import ProjectHeroImg2 from "../../../assets/projects/physis-massage/physis_massage_img7.avif";
import ProjectHeroImg3 from "../../../assets/projects/physis-massage/physis_massage_img8.avif";
import ProjectImg1 from "../../../assets/projects/physis-massage/physis_massage_img3.avif";
import ProjectImg2 from "../../../assets/projects/physis-massage/physis_massage_img4.avif";
import ProjectImg3 from "../../../assets/projects/physis-massage/physis_massage_img5.avif";
import ProjectImg4 from "../../../assets/projects/physis-massage/physis_massage_img6.avif";

export default function PhysisSwiper() {
  const swiperParameters = {
    modules: [A11y, Autoplay, EffectCreative, Keyboard, Scrollbar, Zoom],
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: { translate: ["-120%", 0, -500], shadow: true },
      next: { translate: ["120%", 0, -500], scale: 0.7, shadow: true },
      limitProgress: 5,
    },
    speed: 800,
    autoplay: { enabled: true, delay: 4000 },
    scrollbar: true,
    keyboard: { enabled: true },
    zoom: { enabled: true, maxRatio: 2 },
    watchSlidesProgress: true,
    slidesPerGroupAuto: false,
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-zoom-container">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
              src={ProjectHeroImg2}
            />
          </div>

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-zoom-container">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
              src={ProjectHeroImg3}
            />
          </div>

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-zoom-container">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
              src={ProjectImg1}
            />
          </div>

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-zoom-container">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
              src={ProjectImg2}
            />
          </div>

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-zoom-container">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
              src={ProjectImg3}
            />
          </div>

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-zoom-container">
            <img
              className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
              src={ProjectImg4}
            />
          </div>

          <div className="swiper-slide-content swiper-slide-content-2f5e"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
