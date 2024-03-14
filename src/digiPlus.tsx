import digiPlusLogo from "./images/digiplus-logo.svg";
import digiPlusBack from "./images/digi-plus.png";
import { FaArrowLeft } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

const digiPlus = () => {
  return (
    <>
      <div className="mt-8 lg:w-11/12 flex lg:flex-row min-[320px]:flex-col bg-fuchsia-800 mx-auto p-5 lg:rounded-xl lg:h-96">
        <div
          className="lg:w-4/12 min-[320px]:w-full lg:h-full min-[320px]:h-80"
          style={{
            backgroundImage: `url(${digiPlusBack})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: isDesktop
              ? "85%"
              : isTablet
              ? "55%"
              : isMobile
              ? "100%"
              : "",
            backgroundPosition: "0% 100%",
          }}
        >
          <img className="mt-5" src={digiPlusLogo} alt="digi plus logo" />
          <p className="mt-1 text-white">خدمات ویژه برای اعضای دیجی‌پلاس</p>
          <button
            className="mt-3 text-sm font-semibold flex flex-row justify between items-center gap-2 text-white rounded-lg py-2 px-4"
            type="submit"
            style={{ border: "1px solid white" }}
          >
            عضویت
            <FaArrowLeft />
          </button>
        </div>
        <div className="lg:w-8/12 min-[320px]:w-full flex flex-col justify-between h-full bg-white rounded-lg py-4 px-5 max-[500px]:py-2 max-[500px]:px-2">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <IoTimeSharp
                color="purple"
                size={isDesktop ? 22 : isTablet ? 22 : 19}
              />
              <p className="font-bold max-[500px]:font-semibold max-[500px]:text-sm">
                ارسال فوری رایگان
              </p>
            </div>
            <div>
              <p
                className="text-sm cursor-pointer font-medium max-[500px]:text-xs"
                style={{ color: "purple" }}
              >
                مشاهده همه &gt;
              </p>
            </div>
          </div>
          <div>
            {isDesktop ? (
              <div>
                <div className="flex flex-row justify-between items-baseline">
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus1.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus2.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus3.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus4.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus5.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus6.jpg"
                      alt="digiplus products"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-baseline">
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus7.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus8.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus9.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus10.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus11.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-2/12 p-2">
                    <img
                      src="/imagesProducts/plus12.jpg"
                      alt="digiplus products"
                    />
                  </div>
                </div>
              </div>
            ) : isTablet ? (
              <div>
                <div className="flex flex-row justify-between items-baseline">
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus1.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus2.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus3.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus4.jpg"
                      alt="digiplus products"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-baseline">
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus7.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus8.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus9.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-3/12 p-5">
                    <img
                      src="/imagesProducts/plus10.jpg"
                      alt="digiplus products"
                    />
                  </div>
                </div>
              </div>
            ) : isMobile ? (
              <div>
                <div className="flex flex-row justify-between items-baseline">
                  <div className="w-4/12 p-2">
                    <img
                      src="/imagesProducts/plus1.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-4/12 p-2">
                    <img
                      src="/imagesProducts/plus2.jpg"
                      alt="digiplus products"
                    />
                  </div>
                  <div className="w-4/12 p-2">
                    <img
                      src="/imagesProducts/plus3.jpg"
                      alt="digiplus products"
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default digiPlus;
