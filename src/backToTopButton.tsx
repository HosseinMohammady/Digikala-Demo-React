import { useState, useEffect } from "react";

const backToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className="rounded-lg text-gray-500 font-lg p-2"
        style={{ border: "1px solid #999" }}
        onClick={scrollUp}
      >
        {" "}
        بازگشت به بالا ^
      </button>
    </div>
  );
};

export default backToTopButton;
