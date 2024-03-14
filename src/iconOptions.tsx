import { CiCircleMore } from "react-icons/ci";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { Link } from "react-router-dom";

const mobileStyle = {
  display: "grid",
  gridTemplateColumns: " auto auto auto auto",
  fontSize: "11px",
  gap: "10px",
};

const tabletStyle = {
  display: "grid",
  gridTemplateColumns: " auto auto auto auto",
  fontSize: "20px",
  gap: "20px",
};

const iconOptions = () => {
  return (
    <div
      className={`flex md:mt-5 max-[500px]:mt-7 ${
        isMobile ? "" : "justify-center gap-x-16 text-center text-sm mt-7"
      }`}
      style={isMobile ? mobileStyle : isTablet ? tabletStyle : {}}
    >
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">دیجی‌کالا جت</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">دریافت وام</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/3ff9cc214a4c8e7d8defad0813f484b719d42c12_1704102728.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">شگفت آویز استایل</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/425c8f55c9bb5ad8e860bdc9f82421ce4fcc18de_1703192837.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">سوپرمارکت</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/a5e92320101910c6bd31f816e22d35648085af19_1703192218.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">هر خرید یک شانس</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/8be4ea3dfaa914a274fcd050f12af51d6c8b72be_1704702156.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">۹۹% تخفیف</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://dkstatics-public.digikala.com/digikala-bellatrix/225e191cb34fe3fd236ef7b2c3b008c3898fd5e9_1704994185.png"
              alt="icon"
              className="w-12 h-12 "
            />
            <span className="mt-1">پیش‌بینی بزرگ</span>
          </div>
        </a>
      </Link>
      <Link to="/option">
        <a href="" className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <CiCircleMore className="w-12 h-12 " />
            <span className="mt-1">بیشتر</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default iconOptions;
