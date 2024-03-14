import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Categories from "./categories.json";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

const categories = () => {
  return (
    <>
      <div className="mt-10 mx-auto" style={{ width: isDesktop ? "90%" : "" }}>
        <div className="md:mb-8 max-[500px]:mb-5 flex flex-row justify-center">
          <p className="text-2xl max-[500px]:text-lg font-bold">
            خرید بر اساس دسته‌بندی
          </p>
        </div>
        <Swiper
          slidesPerView={
            isDesktop ? 6.9 : isTablet ? 4.5 : isMobile ? 3.5 : "auto"
          }
          className="mySwiper cursor-pointer rounded-2xl"
        >
          {isDesktop ? (
            <div>
              <SwiperSlide>
                {Categories.slice(0, 2).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {Categories.slice(2, 4).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {Categories.slice(4, 6).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {Categories.slice(6, 8).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {Categories.slice(8, 10).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {Categories.slice(10, 12).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {Categories.slice(12, 14).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-center p-6"
                  >
                    <div className="flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mt-4 max-[500px]:mt-2 text-sm font-semibold">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
            </div>
          ) : (
            <div>
              <SwiperSlide style={{ margin: "5px" }}>
                {Categories.slice(0, 3).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-baseline"
                  >
                    <div className="min-[760px]:mx-auto flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mx-auto mt-1 text-xs lg:font-semibold min-[320px]:font-medium">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide style={{ margin: "5px" }}>
                {Categories.slice(3, 6).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-baseline"
                  >
                    <div className="min-[760px]:mx-auto flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mx-auto mt-1 text-xs lg:font-semibold min-[320px]:font-medium">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide style={{ margin: "5px" }}>
                {Categories.slice(6, 9).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-baseline"
                  >
                    <div className="min-[760px]:mx-auto flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mx-auto mt-1 text-xs lg:font-semibold min-[320px]:font-medium">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide style={{ margin: "5px" }}>
                {Categories.slice(9, 12).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-baseline"
                  >
                    <div className="min-[760px]:mx-auto flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mx-auto mt-1 text-xs lg:font-semibold min-[320px]:font-medium">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide style={{ margin: "5px" }}>
                {Categories.slice(12, 14).map((Category) => (
                  <div
                    key={Category.id}
                    className="flex flex-col justify-center items-baseline"
                  >
                    <div className="min-[760px]:mx-auto flex flex-row justify-center items-center w-28 h-28 bg-white overflow-hidden rounded-full">
                      <img
                        className="w-24 h-24"
                        src={Category.image}
                        alt="Category image"
                      />
                    </div>
                    <p className="mx-auto mt-1 text-xs lg:font-semibold min-[320px]:font-medium">
                      {Category.description}
                    </p>
                  </div>
                ))}
              </SwiperSlide>
            </div>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default categories;
