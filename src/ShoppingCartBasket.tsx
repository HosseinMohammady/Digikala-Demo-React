import CartItem from "./CartItem";
import Footer from "./footer";
import TopImg from "./topImg";
import { useShoppingCart } from "./context/cartContext";
import emptyBasket from "./images/empty-cart.svg";
import { GoSignIn } from "react-icons/go";
import storeItems from "./products.json";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { Link } from "react-router-dom";

const ShoppingCartBasket = () => {
  const { cartItems } = useShoppingCart();
  const { cartQuanitity } = useShoppingCart();

  return (
    <>
      <TopImg />
      {cartQuanitity >= 1 ? (
        <div
          className="lg:w-5/6 min-[320px]:w-full mx-auto max-[1023px]:mb-20"
          style={{ lineHeight: "1.5" }}
        >
          <div style={{ borderBottom: "1px solid lightgray" }}>
            <span className="text-red-600 text-lg font-bold min-[320px]:mr-14 min-[768px]:mr-36 lg:mr-0">
              سبد خرید
            </span>
            <div
              className=" h-1 bg-red-600 rounded-lg mt-2 min-[320px]:mr-2 lg:mr-0"
              style={{ width: isDesktop ? "7%" : "50%" }}
            ></div>
          </div>
          <div
            className="w-full flex lg:flex-row min-[320px]:flex-col gap-4 mt-5"
            style={{
              lineHeight: "1.5",
              color: "#222",
            }}
          >
            <div
              className="lg:w-4/6 min-[320px]:w-full lg:rounded-xl flex flex-col justify-center"
              style={{ border: "1px solid lightgray" }}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col "
                  style={{ borderBottom: "1px solid lightgray" }}
                >
                  <CartItem key={item.id} {...item} />
                </div>
              ))}
            </div>
            <div
              className="lg:w-2/6 min-[320px]:w-full lg:rounded-xl py-4 px-7 flex flex-col justify-between z-10"
              style={{
                height: isDesktop ? "15rem" : isTablet ? "15rem" : "12rem",
                border: "1px solid lightgray",
                bottom: isMobile ? "0" : "",
                backgroundColor: "#fff",
              }}
            >
              <div className="flex flex-row justify-between">
                <span className="font-bold text-lg" style={{ color: "#444" }}>
                  تعداد کالاها
                </span>
                <span className="font-bold text-lg" style={{ color: "#444" }}>
                  {cartQuanitity} کالا
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="font-bold text-lg" style={{ color: "#444" }}>
                  جمع سبد خرید
                </span>
                <div className="flex flex-row items-center justify-center">
                  <p className="font-bold text-xl" style={{ color: "#222" }}>
                    {cartItems
                      .reduce((totalPay, CartItem) => {
                        const item = storeItems.find(
                          (i) => i.id === CartItem.id
                        );
                        return (
                          totalPay + (item?.price || 0) * CartItem.quantity
                        );
                      }, 0)
                      .toLocaleString()}
                    <span className="text-base mr-1" style={{ color: "#444" }}>
                      تومان
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row item-center justify-center w-full h-12 bg-rose-500 rounded-xl ">
                <button
                  className="font-semibold text-lg"
                  style={{ color: "#fff" }}
                >
                  تایید و تکمیل سفارش
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="lg:w-5/6 xs:w-6/6 mx-auto"
          style={{ lineHeight: "1.5" }}
        >
          <div style={{ borderBottom: "1px solid lightgray" }}>
            <span className="text-red-600 text-lg font-bold min-[320px]:mr-14 min-[768px]:mr-36 lg:mr-0">
              سبد خرید
            </span>
            <div
              className=" h-1 bg-red-600 rounded-lg mt-2 min-[320px]:mr-2 lg:mr-0"
              style={{ width: isDesktop ? "7%" : "50%" }}
            ></div>
          </div>
          <div
            className="w-full flex lg:flex-row min-[320px]:flex-col-reverse gap-4 mt-5"
            style={{
              lineHeight: "1.5",
              color: "#222",
            }}
          >
            <div
              className="w-4/6 min-[320px]:w-full rounded-xl flex flex-row justify-center"
              style={{
                height: isDesktop ? "20rem" : "15rem",
                border: isDesktop ? "1px solid lightgray" : "",
              }}
            >
              <div className="flex flex-col justify-center items-center">
                <img src={emptyBasket} alt="trash bin" />
                <p className="text-xl font-semibold">سبد خرید شما خالی است!</p>
              </div>
            </div>
            <div
              className="w-2/6 min-[320px]:w-5/6 min-[320px]:mx-auto rounded-xl min-[320px]:px-1 py-3 px-7"
              style={{
                border: "1px solid lightgray",
                boxShadow: isDesktop ? "" : "5px 5px 7px lightgray",
                height: "8rem",
              }}
            >
              <GoSignIn
                className="inline"
                color="yellow"
                size={24}
                fontWeight={"bold"}
              />
              <span className="font-bold text-lg mr-3">
                ورود به حساب کاربری
              </span>
              <p className="text-sm mx-8">
                برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید
                وارد شوید.
              </p>
            </div>
          </div>
        </div>
      )}
      {isDesktop ? (
        <div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ShoppingCartBasket;
