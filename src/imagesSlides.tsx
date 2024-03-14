import { isDesktop, isMobile } from "react-device-detect";
import image1 from "./images/m1.webp";
import image2 from "./images/m2.webp";
import image3 from "./images/m3.webp";
import image4 from "./images/m4.webp";

const imagesSlides = () => {
  return (
    <div className="w-11/12 mx-auto mt-4 ">
      <div
        className="flex flex-row max-[1023px]:justify-between lg:gap-4 max-[500px]:gap-y-3 max-[1023px]:gap-y-7 "
        style={{ flexWrap: isDesktop ? "nowrap" : "wrap" }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{ width: isMobile ? "48%" : "" }}
        >
          <img src={image1} alt="advertisement cover" />
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ width: isMobile ? "48%" : "" }}
        >
          <img src={image2} alt="advertisement cover" />
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ width: isMobile ? "48%" : "" }}
        >
          <img src={image3} alt="advertisement cover" />
        </div>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ width: isMobile ? "48%" : "" }}
        >
          <img src={image4} alt="advertisement cover" />
        </div>
      </div>
    </div>
  );
};

export default imagesSlides;
