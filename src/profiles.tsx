import { isDesktop } from "react-device-detect";
import Profile1 from "./images/prof (1).jpg";
import Profile2 from "./images/prof (2).jpg";
import Profile3 from "./images/prof (3).jpg";
import Profile4 from "./images/prof (4).jpg";
import Profile5 from "./images/prof (5).jpg";
import Profile6 from "./images/prof (6).jpg";
import Profile7 from "./images/prof (7).jpg";
import Profile8 from "./images/prof (8).jpg";
import Profile9 from "./images/prof (9).jpg";
import Profile10 from "./images/prof (10).jpg";
import Profile11 from "./images/prof (11).jpg";
import Profile12 from "./images/prof (12).jpg";
import Profile13 from "./images/prof (13).jpg";
import Profile14 from "./images/prof (14).jpg";
import Profile15 from "./images/prof (15).jpg";
import Profile16 from "./images/prof (16).jpg";
import Profile17 from "./images/prof (17).jpg";
import Profile18 from "./images/prof (18).jpg";
import Profile19 from "./images/prof (19).jpg";
import Profile20 from "./images/prof (20).jpg";
import Profile21 from "./images/prof (21).jpg";
import styled from "styled-components";

const FlexContainer = styled.div`
  &::-webkit-scrollbar {
    background-color: pink;
  }
`;
const marginstyle = {
  marginLeft: "7rem",
  marginRight: "7rem",
};
const marginstyleM = {
  marginLeft: "0",
  marginRight: "0",
};

interface profile {
  id: number;
  description: string;
  image: string;
}

const profiles = () => {
  const profs: profile[] = [
    {
      id: 1,
      description: "پرمصرف ترین های برقی",
      image: Profile1,
    },
    {
      id: 2,
      description: "اگه تونستی چیزی نخر",
      image: Profile2,
    },
    {
      id: 3,
      description: "شدید الحرارت ⁉️",
      image: Profile3,
    },
    {
      id: 4,
      description: "پنیر خامه ای جذاب",
      image: Profile4,
    },
    {
      id: 5,
      description: "معرفی بهترین هدفون ها",
      image: Profile5,
    },
    {
      id: 6,
      description: "نگاه سریع به QCY T18",
      image: Profile6,
    },
    {
      id: 7,
      description: "دستگاه تست قندخون کرسنس",
      image: Profile7,
    },
    {
      id: 8,
      description: "کتاب احساسات در محیط‌های کاری",
      image: Profile8,
    },
    { id: 9, description: "خیلیم مینی نیست!", image: Profile9 },
    {
      id: 10,
      description: "ماگ با قابلیت تست جرعه ای",
      image: Profile10,
    },
    {
      id: 11,
      description: "روان نویس های خوشگل",
      image: Profile11,
    },
    {
      id: 12,
      description: "فان تایم بهتریناشو پک کرده",
      image: Profile12,
    },
    {
      id: 13,
      description: "کوله پشتی والنتیر",
      image: Profile13,
    },
    {
      id: 14,
      description: "ضد آفتاب فیوژن واتر پریم",
      image: Profile14,
    },
    {
      id: 15,
      description: "بررسی یقه اسکی پاییزان",
      image: Profile15,
    },
    {
      id: 16,
      description: "کفش های روزمره دندی",
      image: Profile16,
    },
    {
      id: 17,
      description: "یه پیچ گوشتی که میتونی همه ...",
      image: Profile17,
    },
    {
      id: 18,
      description: "مقایسه اسپیکر بلوتوثی ...!",
      image: Profile18,
    },
    { id: 19, description: "مشابه ch مردونه", image: Profile19 },
    { id: 20, description: "دستکش ماساژ ", image: Profile20 },
    {
      id: 21,
      description: "ماسک مو سریتا خوش‌بو ",
      image: Profile21,
    },
  ];

  return (
    <FlexContainer
      style={isDesktop ? marginstyle : marginstyleM}
      className="flex flex-row overflow-auto relative mt-10 overflow-x-scroll mt-5 min-[320px]:mx-0	"
    >
      {profs.map((prof) => (
        <div
          className="text-center flex flex-col items-center ml-10 min-[320px]:mx-1 cursor-pointer"
          key={prof.id}
        >
          <div
            className="mb-2"
            style={{
              width: "6rem",
              height: "6rem",
              zIndex: "-1",
            }}
          >
            <img
              className="object-cover w-full h-full rounded-full p-1"
              style={{ border: "3px solid purple" }}
              src={prof.image}
              alt="Profile Image"
            />
          </div>
          <p
            className="text-xs	leading-normal"
            style={{ fontSize: "0.9rem", color: "#222" }}
          >
            {prof.description}
          </p>
        </div>
      ))}
    </FlexContainer>
  );
};
export default profiles;
