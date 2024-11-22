import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Scrollbar, Zoom } from "swiper/modules";
import EffectMaterial from "./effect-material.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "./effect-material.css";
import "./MySwiper.css";

import ProjectHeroImg from "../../../assets/projects/physis-massage/physis-project-hero.avif";
import ProjectHeroImg2 from "../../../assets/projects/physis-massage/physis_massage_img7.avif";
import ProjectHeroImg3 from "../../../assets/projects/physis-massage/physis_massage_img8.avif";
import ProjectImg1 from "../../../assets/projects/physis-massage/physis_massage_img3.avif";
import ProjectImg2 from "../../../assets/projects/physis-massage/physis_massage_img4.avif";
import ProjectImg3 from "../../../assets/projects/physis-massage/physis_massage_img5.avif";
import ProjectImg4 from "../../../assets/projects/physis-massage/physis_massage_img6.avif";

export default function PhysisSwiper() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Keyboard, Scrollbar, Zoom, EffectMaterial],
    loop: true,
    effect: "material",
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
          <div className="swiper-material-wrapper">
            <div className="swiper-material-content">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
                  data-swiper-material-scale="1.25"
                  src={ProjectImg1}
                />
              </div>

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-2f5e"></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-material-wrapper">
            <div className="swiper-material-content">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
                  data-swiper-material-scale="1.25"
                  src={ProjectImg2}
                />
              </div>

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-2f5e"></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-material-wrapper">
            <div className="swiper-material-content">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
                  data-swiper-material-scale="1.25"
                  src={ProjectImg3}
                />
              </div>

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-2f5e"></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-material-wrapper">
            <div className="swiper-material-content">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
                  data-swiper-material-scale="1.25"
                  src={ProjectImg4}
                />
              </div>

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-2f5e"></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-material-wrapper">
            <div className="swiper-material-content">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
                  data-swiper-material-scale="1.25"
                  src={ProjectHeroImg3}
                />
              </div>

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-2f5e"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-6227">
          <div className="swiper-material-wrapper">
            <div className="swiper-material-content">
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide-bg-image swiper-slide-bg-image-7cef"
                  data-swiper-material-scale="1.25"
                  src={ProjectHeroImg2}
                />
              </div>

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-2f5e"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
