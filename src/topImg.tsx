import { isMobile, isTablet } from "react-device-detect";
import chanceC from "./images/chanceC.webp";
import chanceM from "./images/chanceM.webp";
import ShoppingBasket from "./shoppingBasket";
import Logo from "./images/logo.svg";
import { FaSearch } from "react-icons/fa";
import StickyBox from "react-sticky-box";

const imageStyleMobile = {
  height: "40px",
};
const imageStyleDesktop = {
  height: "70px",
};

const topImg = () => {
  return (
    <>
      <div className="flex flex-col mb-8">
        <div className=" w-screen ">
          <a href="https://www.digikala.com/landing/bigprize1402/?&promo_name=%DA%A9%D9%85%D9%BE%DB%8C%D9%86+-+Lucky+Days+-+%D8%A8%DB%8C%DA%AF+%D9%BE%D8%B1%D8%A7%DB%8C%D8%B2+-+%D8%AF%DB%8C+1402&promo_position=all_mega_menu_top&promo_creative=168949&bCode=168949">
            <img
              className="object-cover"
              src={isMobile ? chanceM : chanceC}
              style={isMobile ? imageStyleMobile : imageStyleDesktop}
              alt="chance"
            />
          </a>
        </div>
        <div
          className="flex flex-row w-12/12 justify-between items-center p-5 pb-8"
          style={{ boxShadow: "0 1px 5px #999" }}
        >
          <div className="flex flex-row justify-between w-1/12">
            {!isMobile ? (
              <img src={Logo} alt="digikala logo" className="mt-2 ml-5" />
            ) : (
              ""
            )}
            {isMobile ? (
              <div className="pb-4">
                <input
                  type="search"
                  placeholder="جستجو"
                  className="bg-gray-100 rounded-xl p-3 w-11/12"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    position: "absolute",
                    height: "3rem",
                    outline: "none",
                  }}
                />
                <FaSearch
                  color="#999"
                  style={{ position: "relative", left: "-15px", top: "15px" }}
                />
              </div>
            ) : (
              <div>
                <input
                  type="search"
                  placeholder="جستجو"
                  className="bg-gray-100 rounded-xl p-3"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    position: "absolute",
                    height: "3rem",
                    width: "30rem",
                    outline: "none",
                  }}
                />
                <FaSearch
                  color="#999"
                  style={{ position: "relative", left: "-15px", top: "15px" }}
                />
              </div>
            )}
          </div>
          {!isMobile ? <ShoppingBasket /> : ""}
        </div>
      </div>
      {isMobile ? (
        <div
          className="flex flex-row justify-center items-center w-full h-20 z-20"
          style={{ backgroundColor: "#fff", position: "fixed", bottom: "0" }}
        >
          <ShoppingBasket />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default topImg;
