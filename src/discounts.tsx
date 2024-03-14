import freshPattern from "./images/freshPattern.svg";
import fresh from "./images/fresh.svg";
import { FaArrowLeft } from "react-icons/fa";
import fresh2 from "./images/fresh.webp";
import { isDesktop, isMobile } from "react-device-detect";
import img1 from "./images/kal1.webp";
import img2 from "./images/kal2.webp";
import img3 from "./images/kal3.webp";
import img4 from "./images/kal4.webp";
import img5 from "./images/kal5.webp";
import img6 from "./images/kal6.webp";
const bargains = [
  {
    id: 1,
    image: img1,
    discountValue: "19%",
  },
  {
    id: 2,
    image: img2,
    discountValue: "29%",
  },
  {
    id: 3,
    image: img3,
    discountValue: "20%",
  },
  {
    id: 4,
    image: img4,
    discountValue: "30%",
  },
  {
    id: 5,
    image: img5,
    discountValue: "20%",
  },
  {
    id: 6,
    image: img6,
    discountValue: "25%",
  },
];

const discounts = () => {
  return (
    <div
      className="mt-4 flex lg:flex-row lg:justify-between lg:items-center min-[320px]:flex-col min-[320px]:items-start bg-neutral-100 w-11/12 mx-auto rounded-xl lg:px-10 min-[320px]:px-2 py-5 gap-3"
      style={{
        backgroundImage: `url(${freshPattern})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-row items-center justify-between lg:gap-4 min-[320px]:gap-1">
        <img
          src={fresh2}
          alt="supermarket bargains"
          style={{ width: isMobile ? "2rem" : "" }}
        />
        <img
          src={fresh}
          alt="supermarket bargains"
          style={{ width: isMobile ? "12rem" : "" }}
        />
        {isDesktop ? (
          <div className="h-8 flex flex-row justify-center items-center bg-green-500 rounded-3xl px-2 cursor-pointer ">
            <p className="text-white font-bold text-lg">تا ۳۰٪ تخفیف</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-row lg:w-auto min-[320px]:w-full items-center gap-2">
        <div className="flex flex-row lg:w-auto min-[320px]:w-full items-center gap-2">
          {bargains.slice(0, isMobile ? 3 : bargains.length).map((bargain) => (
            <div
              key={bargain.id}
              className="w-20 h-20 max-[500px]:w-16 max-[500px]:h-16 flex flex-row justify-center items-center rounded-full bg-white p-2 relative"
            >
              <img
                className="w-14 h-14 max-[500px]:w-10 max-[500px]:h-10"
                src={bargain.image}
                alt="bargain image"
              />
              <div
                className="absolute bg-rose-600 text-white text-sm font-semibold rounded-3xl w-10 text-center"
                style={{ bottom: "0", right: "0", padding: "1px" }}
              >
                {bargain.discountValue}
              </div>
            </div>
          ))}
        </div>

        <div>
          <button type="submit">
            {isDesktop ? (
              <div className="flex flex-row justify-center items-center bg-white h-12 p-5 rounded-3xl text-green-600 text-base gap-3">
                <p>بیش از ۲۰۰ کالا </p>
                <FaArrowLeft />
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center bg-white h-12 p-5 rounded-full text-green-600 text-base gap-3">
                <FaArrowLeft />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default discounts;
