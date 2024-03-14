import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { isMobile, isTablet } from "react-device-detect";

import slideImage1 from "./images/slideImage (1).webp";
import slideImage2 from "./images/slideImage (2).webp";
import slideImage3 from "./images/slideImage (3).webp";
import slideImage4 from "./images/slideImage (4).webp";
import slideImage5 from "./images/slideImage (5).webp";
import slideImage6 from "./images/slideImageMob (1).webp";
import slideImage7 from "./images/slideImageMob (2).webp";
import slideImage8 from "./images/slideImageMob (3).webp";
import slideImage9 from "./images/slideImageMob (4).webp";
import slideImage10 from "./images/slideImageMob (5).webp";

const imageStyle = {
  height: "350px",
};

export default function imageSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper lg:mt-5"
      >
        <SwiperSlide>
          <picture>
            <img
              className={isTablet ? "object-cover " : ""}
              style={imageStyle}
              src={isMobile && !isTablet ? slideImage6 : slideImage1}
              alt="imageslider"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={isTablet ? "object-cover " : ""}
            style={imageStyle}
            src={isMobile && !isTablet ? slideImage7 : slideImage2}
            alt="imageslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={isTablet ? "object-cover " : ""}
            style={imageStyle}
            src={isMobile && !isTablet ? slideImage8 : slideImage3}
            alt="imageslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={isTablet ? "object-cover " : ""}
            style={imageStyle}
            src={isMobile && !isTablet ? slideImage9 : slideImage4}
            alt="imageslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={isTablet ? "object-cover " : ""}
            style={imageStyle}
            src={isMobile && !isTablet ? slideImage10 : slideImage5}
            alt="imageslider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
