import { useParams } from "react-router-dom";
import Products from "./products.json";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { useShoppingCart } from "./context/cartContext";
import TopImg from "./topImg";
import { isDesktop, isTablet } from "react-device-detect";
import Footer from "./footer";

const productsDetails = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === Number(id));
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(Number(id));

  return (
    <>
      <TopImg />
      <div>
        {product ? (
          <>
            <div
              className="lg:flex lg:flex-col lg:justify-between"
              style={{ height: isDesktop ? "85vh" : "" }}
            >
              <div
                className="flex lg:flex-row min-[320px]:flex-col w-full"
                style={{ color: "#222", lineHeight: "1.5" }}
              >
                <div
                  className="mr-2 "
                  style={{
                    width: isDesktop ? "400px" : "",
                    height: isDesktop ? "350px" : "",
                  }}
                >
                  <img
                    src={product.imgDet}
                    alt="product image"
                    style={{
                      maxHeight: "100%",
                      maxWidth: isTablet ? "30rem" : "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    className="w-full h-full object-contain lg:object-cover min-[320px]:py-10 min-[320px]:px-5 md:mx-auto lg:p-0 "
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-xl mb-8 min-[320px]:text-lg min-[320px]:mx-2"
                    style={{ lineHeight: "2" }}
                  >
                    {product.description}
                  </p>
                  <div
                    className="flex lg:flex-row lg:justify-between min-[320px]:flex-col lg:mx-auto "
                    style={{ width: isDesktop ? "70vw" : "" }}
                  >
                    <div
                      className="flex flex-row justify-between lg:rounded-lg items-center p-5  "
                      style={{
                        border: "1px solid #999",
                        width: isDesktop ? "40rem" : "100%",
                        height: "4rem",
                      }}
                    >
                      <p className="font-bold">ارسال رایگان برای این کالا</p>
                      <img
                        src="/imagesProducts/normalFreeShippingTouchPointImage.d4416515.svg"
                        alt="delivery"
                        style={{ width: "7rem", height: "7rem" }}
                      />
                    </div>
                    <div
                      className="lg:bg-gray-100  rounded-xl lg:p-5 min-[320px]:p-3 lg:ml-2"
                      style={{
                        width: isDesktop ? "23rem" : "100%",
                      }}
                    >
                      <h2 className="font-medium text-lg">فروشنده</h2>
                      <div
                        className="flex flex-row items-center py-2"
                        style={{ borderBottom: "1px solid lightgray" }}
                      >
                        <img
                          src="/imagesProducts/digikala-seeklogo.svg"
                          alt="digikala icon"
                          style={{ width: "3rem", height: "3rem" }}
                          className="ml-4"
                        />
                        <h3>دیجی‌کالا</h3>
                      </div>
                      <div
                        className="flex flex-row items-center py-3"
                        style={{ borderBottom: "1px solid lightgray" }}
                      >
                        <AiOutlineSafetyCertificate
                          size={"25px"}
                          className="ml-4"
                        />
                        <p className="text-sm font-bold">گارانتی ۱۸ ماهه </p>
                      </div>
                      <div
                        className="flex flex-row items-center py-3"
                        style={{ borderBottom: "1px solid lightgray" }}
                      >
                        <FaShippingFast
                          size={"25px"}
                          color="blue"
                          className="ml-4"
                        />
                        <p className="text-sm font-normal">
                          ارسال امروز (فعلا در شهر تهران و کرج)
                        </p>
                      </div>
                      <div className="flex flex-row items-center py-3">
                        <IoIosInformationCircleOutline
                          size={"25px"}
                          color="green"
                          className="ml-4"
                        />
                        <p className="text-sm font-bold text-green-600">
                          بهترین قیمت در ۳۰ روز گذشته
                        </p>
                      </div>
                      <div className="flex flex-row items-center justify-end pt-3 pb-5 text-left">
                        <p className="font-semibold text-2xl">
                          {product.priceShow}
                        </p>
                        <p className="font-medium text-sm mr-1.5">تومان</p>
                      </div>
                      <div>
                        {quantity === 0 ? (
                          <button
                            className="bg-rose-600 rounded-lg"
                            style={{
                              width: "100%",
                              height: "2.5rem",
                              color: "#fff",
                            }}
                            onClick={() => increaseCartQuantity(Number(id))}
                          >
                            افزودن به سبد
                          </button>
                        ) : (
                          <div className="w-full flex flex-column items-center justify-center">
                            <div
                              className="w-2/6 bg-[#fff] flex justify-between items-center p-2 rounded-lg "
                              style={{ boxShadow: "0 0 7px 3px lightgray" }}
                            >
                              <button
                                className="text-rose-600 text-2xl"
                                onClick={() => increaseCartQuantity(Number(id))}
                              >
                                +
                              </button>
                              <span className="text-rose-600 text-2xl">
                                {quantity}
                              </span>
                              <button
                                className="text-rose-600 text-2xl"
                                onClick={() => decreaseCartQuantity(Number(id))}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row mx-5 py-5 lg:pl-10 justify-between min-[320px]:items-baseline min-[320px]:gap-3 max-[500px]:mb-20"
                style={{
                  borderTop: "1px solid lightgray",
                  borderBottom: "5px solid lightgray",
                }}
              >
                <div className="w-1/5 flex lg:flex-row min-[320px]:flex-col justify-center items-center cursor-pointer text-center">
                  <img
                    src="/imagesProducts/ff1.svg"
                    alt="footer icons"
                    className="w-10 ml-2 min-[320px]:mx-auto"
                  />
                  <p className="text-gray-400 text-sm min-[320px]:text-xs">
                    امکان تحویل اکسپرس
                  </p>
                </div>
                <div className="w-1/5 flex lg:flex-row min-[320px]:flex-col justify-center items-center cursor-pointer text-center">
                  <img
                    src="/imagesProducts/ff2.svg"
                    alt="footer icons"
                    className="w-10 ml-2 min-[320px]:mx-auto"
                  />
                  <p className="text-gray-400 text-sm min-[320px]:text-xs">
                    ۲۴ ساعته، ۷ روز هفته
                  </p>
                </div>
                <div className="w-1/5 flex lg:flex-row min-[320px]:flex-col justify-center items-center cursor-pointer text-center">
                  <img
                    src="/imagesProducts/ff3.svg"
                    alt="footer icons"
                    className="w-10 ml-2 min-[320px]:mx-auto"
                  />
                  <p className="text-gray-400 text-sm min-[320px]:text-xs">
                    امکان پرداخت در محل
                  </p>
                </div>
                <div className="w-1/5 flex lg:flex-row min-[320px]:flex-col justify-center items-center cursor-pointer text-center">
                  <img
                    src="/imagesProducts/ff4.svg"
                    alt="footer icons"
                    className="w-10 ml-2 min-[320px]:mx-auto"
                  />
                  <p className="text-gray-400 text-sm min-[320px]:text-xs">
                    هفت روز ضمانت بازگشت کالا
                  </p>
                </div>
                <div className="w-1/5 flex lg:flex-row min-[320px]:flex-col justify-center items-center cursor-pointer text-center">
                  <img
                    src="/imagesProducts/ff5.svg"
                    alt="footer icons"
                    className="w-10 ml-2 min-[320px]:mx-auto"
                  />
                  <p className="text-gray-400 text-sm min-[320px]:text-xs">
                    ضمانت اصل بودن کالا
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found.</p>
        )}
        <Footer />
      </div>
    </>
  );
};

export default productsDetails;
