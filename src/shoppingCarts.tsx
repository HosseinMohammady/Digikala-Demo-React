import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Products from "./products.json";
import { Link } from "react-router-dom";
import { isMobile, isTablet } from "react-device-detect";

function shoppingCarts() {
  return (
    <>
      <Swiper
        slidesPerView={isTablet ? 4 : isMobile ? 2.5 : 6}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        className="mySwiper bg-rose-600  mt-10 lg:p-5 min-[320px]:p-3 lg:rounded-xl lg:mx-auto lg:w-11/12 "
      >
        <SwiperSlide className="flex flex-col px-2 cursor-pointer items-center justify-center ">
          <div
            className="lg:w-21 lg:h-21"
            style={{ width: isMobile ? "3.5rem" : "" }}
          >
            <img
              src="/imagesProducts/Amazings.svg"
              alt="suggestions"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/imagesProducts/box.webp"
              alt="suggestions box"
              style={{ width: "130px", height: "130px" }}
            />
          </div>
          <span className="text-white">مشاهده همه &gt; </span>
        </SwiperSlide>

        {Products.map((product) => (
          <SwiperSlide key={product.id} className="w-full h-full">
            <Link to={`/product/${product.id}`}>
              <div
                className="bg-white px-2 pb-8 text-center  cursor-pointer"
                style={{ paddingTop: isTablet ? "1rem" : "" }}
              >
                <img
                  src={product.imgUrl}
                  alt="product image"
                  className="lg:w-60 lg:h-60 min-[320px]:w-40 min-[320px]:h-40 object-contain "
                  style={{
                    margin: isTablet ? " 0 auto" : "",
                    marginBottom: isTablet ? "1rem" : "",
                  }}
                />

                <span
                  className="lg:text-lg min-[320px]:text-base"
                  style={{
                    fontSize: isTablet ? "1.3rem" : "",
                  }}
                >
                  {product.priceShow}
                </span>
                <span
                  className="lg:text-lg min-[320px]:text-base mr-1.5 "
                  style={{
                    fontSize: isTablet ? "1.3rem" : "",
                  }}
                >
                  تومان
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default shoppingCarts;
