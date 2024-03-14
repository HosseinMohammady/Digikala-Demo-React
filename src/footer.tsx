import Digi from "./images/digi.svg";
import BackToTopButton from "./backToTopButton";
import FooterImages from "./footerImages";
import fd1 from "./images/fd1.svg";
import fd2 from "./images/fd2.svg";
import fd3 from "./images/fd3.svg";
import fd4 from "./images/fd4.svg";
import fd5 from "./images/fd5.svg";
import fb1 from "./images/fb1.svg";
import dlogo from "./images/footerlogo2.webp";
import bazar from "./images/coffe-bazzar.svg";
import myket from "./images/myket.svg";
import sib from "./images/sib-app.svg";
import more from "./images/More.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { isDesktop } from "react-device-detect";

const footer = () => {
  return (
    <div>
      {isDesktop ? (
        <div>
          <div
            className="py-8 px-8 mt-12"
            style={{ borderTop: "1px solid lightgray" }}
          >
            <div className="flex flex-row justify-between">
              <img src={Digi} alt="digikala icon" />
              <BackToTopButton />
            </div>
            <div className="flex flex-row justify-around	mt-16">
              <div className="flex flex-col items-center">
                <img src={fd1} alt="some footer icons" />
                <p>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={fd2} alt="some footer icons" />
                <p>امکان پرداخت در محل</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={fd3} alt="some footer icons" />
                <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={fd4} alt="some footer icons" />
                <p>هفت روز ضمانت بازگشت کالا</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={fd5} alt="some footer icons" />
                <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-20">
              <div>
                <p className="text-lg mb-3 font-bold">با دیجی‌کالا</p>
                <ul className="flex flex-col gap-y-3">
                  <li className="text-gray-500">
                    <a href="#">اتاق خبر دیجی‌کالا</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">فروش در دیجی‌کالا</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">فرصت‌های شغلی</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">گزارش تخلف در دیجی‌کالا</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">تماس با دیجی‌کالا</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">درباره دیجی‌کالا</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-3 font-bold">خدمات مشتریان</p>
                <ul className="flex flex-col gap-y-3">
                  <li className="text-gray-500">
                    <a href="#">پاسخ به پرسش‌های متداول</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">رویه‌های بازگرداندن کالا</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">شرایط استفاده</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">حریم خصوصی</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">گزارش باگ</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-3 font-bold">
                  راهنمای خرید از دیجی‌کالا
                </p>
                <ul className="flex flex-col gap-y-3">
                  <li className="text-gray-500">
                    <a href="#">نحوه ثبت سفارش</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">رویه ارسال سفارش</a>
                  </li>
                  <li className="text-gray-500">
                    <a href="#">شیوه‌های پرداخت</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-3 font-bold">همراه ما باشید!</p>
                <div className="flex flex-row gap-16 my-8">
                  <FaInstagram color="#888" size={45} />
                  <FaTwitter color="#888" size={45} />
                  <FaLinkedin color="#888" size={45} />
                </div>
                <p className="text-lg mb-3 font-bold">
                  با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
                </p>
                <div className="flex flex-row gap-5 mt-7 ">
                  <input
                    type="email"
                    required
                    placeholder="ایمیل شما"
                    className="w-5/6 bg-gray-100 rounded-xl h-10 pl-15 p-5"
                    style={{ outline: "none" }}
                  />
                  <button
                    type="submit"
                    className="w-1/6 flex flex-row justify-center items-center bg-gray-300 text-slate-100 rounded-xl h-10 pl-15 p-5"
                  >
                    ثبت
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-blue-950 rounded-xl p-5 mt-16">
              <div className="flex flex-row items-center gap-5">
                <img
                  src={dlogo}
                  alt="digikala footer logo"
                  className="w-12 h-12"
                />
                <span className="text-white font-bold text-2xl">
                  {" "}
                  دانلود اپلیکیشن دیجی‌کالا
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <img
                  className="w-40 h-11"
                  src={bazar}
                  alt="coffe bazar download source"
                />
                <img
                  className="w-40 h-11"
                  src={myket}
                  alt="myket download source"
                />
                <img
                  className="w-40 h-11"
                  src={sib}
                  alt="sib download source"
                />
                <div className="flex flex-row items-center justify-center w-12 h-10 rounded-sm bg-white">
                  <img src={more} alt="more about" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-row justify-around gap-5 flex-row bg-gray-200">
            {FooterImages.map((ff) => (
              <div
                key={ff.id}
                className="w-44 h-20 flex flex-row justify-center items-center"
              >
                <img
                  className="w-24 h-16 object-contain bg-gray-200"
                  src={ff.footerImage}
                  alt=""
                />
              </div>
            ))}

            <img src="./images/fb15.svg" alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default footer;
