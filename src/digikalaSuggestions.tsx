import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Suggestions from "./suggestion.json";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

const digikalaSuggestions = () => {
  return (
    <>
      <div className="mt-12 w-11/12 mx-auto">
        <div className="mb-8 flex flex-row justify-center">
          <p className="text-2xl max-[500px]:text-lg font-bold">
            پیشنهاد دیجی‌کالا
          </p>
        </div>
        <Swiper
          slidesPerView={isDesktop ? 6.9 : isTablet ? 5 : isMobile ? 2 : "auto"}
          className="mySwiper cursor-pointer rounded-2xl bg-neutral-100"
          style={{ border: "1px solid lightgray" }}
        >
          <SwiperSlide>
            {Suggestions.slice(0, 2).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {Suggestions.slice(2, 4).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {Suggestions.slice(4, 6).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {Suggestions.slice(6, 8).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {Suggestions.slice(8, 10).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {Suggestions.slice(10, 12).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {Suggestions.slice(12, 14).map((Suggestion) => (
              <div
                key={Suggestion.id}
                className="flex flex-col justify-center items-center p-6"
                style={{ border: "1px solid #ebeef2" }}
              >
                <div className="flex flex-row justify-center items-center w-16 h-16 bg-white overflow-hidden rounded-full">
                  <img
                    className="w-14 h-14"
                    src={Suggestion.image}
                    alt="suggestion image"
                  />
                </div>
                <p className="mt-4 max-[500px]:mt-2 max-[1023px]:text-sm">
                  {Suggestion.description}
                </p>
              </div>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default digikalaSuggestions;
