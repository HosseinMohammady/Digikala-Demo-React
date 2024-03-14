import read1 from "./images/read1.jpg";
import read2 from "./images/read2.jpg";
import read3 from "./images/read3.jpg";
import read4 from "./images/read4.jpg";

const readings = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto  flex flex-col">
      <div className="lg:mb-6 md:mb-5 max-[500px]:mb-4 flex flex-row justify-between lg:mx-5">
        <p className="font-bold text-xl max-[500px]:text-sm">خواندنی‌ها</p>
        <a href="#" className="text-cyan-500 text-basic max-[500px]:text-xs">
          مطالب بیشتر در دیجی‌کالا مگ &gt;{" "}
        </a>
      </div>
      <div className="flex lg:flex-row min-[320px]:flex-col gap-4">
        <article
          className="lg:w-3/12 min[320px]:w-full rounded-lg overflow-hidden pb-5"
          style={{ border: "1px solid lightgray" }}
        >
          <img
            className="lg:h-52 min-[768px]:h-auto w-full object-cover"
            src={read1}
            alt="read about product"
          />
          <p className="mt-2 mx-3 text-sm" style={{ lineHeight: "2" }}>
            بررسی کرم روشن کننده ووکس مدل DD cream؛ آبرسان با جذب بالا
          </p>
        </article>
        <article
          className="lg:w-3/12 min[320px]:w-full rounded-lg overflow-hidden pb-5"
          style={{ border: "1px solid lightgray" }}
        >
          <img
            className="lg:h-52 min-[768px]:h-auto w-full object-cover"
            src={read2}
            alt="read about product"
          />
          <p className="mt-2 mx-3 text-sm" style={{ lineHeight: "2" }}>
            گلکسی A34 در برابر ردمی نوت ۱۳ پرو ۴G؛ کدام گوشی را بخریم؟
          </p>
        </article>
        <article
          className="lg:w-3/12 min[320px]:w-full rounded-lg overflow-hidden pb-5"
          style={{ border: "1px solid lightgray" }}
        >
          <img
            className="lg:h-52 min-[768px]:h-auto w-full object-cover"
            src={read3}
            alt="read about product"
          />
          <p className="mt-2 mx-3 text-sm" style={{ lineHeight: "2" }}>
            بررسی پوکو M6 پرو؛ یک میان‌رده‌ی خاص
          </p>
        </article>
        <article
          className="max-[1023px]:mb-24 lg:w-3/12 min[320px]:w-full rounded-lg overflow-hidden pb-5"
          style={{ border: "1px solid lightgray" }}
        >
          <img
            className="lg:h-52 min-[768px]:h-auto w-full object-cover"
            src={read4}
            alt="read about product"
          />
          <p className="mt-2 mx-3 text-sm" style={{ lineHeight: "2" }}>
            بهترین کاورهای ردمی نوت ۱۳ پرو شیائومی؛ مدل‌های شیک برای سلایق مختلف
          </p>
        </article>
      </div>
    </div>
  );
};

export default readings;
