import React from "react";
import Drawing from "../assets/svgs/drawing.svg";
import Draw from "../assets/svgs/draw.svg";
import Brush from "../assets/svgs/brush.svg";
import Play from "../assets/svgs/play.svg";

const FeatureSection = () => {
  const FeatureData = [
    {
      logo: Drawing,
      title: "OpenType features Variable fonts",
      desc: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      logo: Draw,
      title: "Design with real data",
      desc: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      logo: Brush,
      title: "Fastest way to take action",
      desc: "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto px-[20px] flex flex-col mb-[80px] md:mb-[270px]">
      <h2 className="text-[48px] text-center font-normal leading-[55px] tracking-[0.2px] mb-[27px]">
        Features
      </h2>
      <p className="max-w-[560px] mx-auto text-[28px] text-center font-normal leading-[40px] tracking-[0.2px] mb-[40px] md:mb-80px">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>

      {/* feature-cards */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-[20px] lg:gap-[70px] mt-[50px] mb:0 sm:mb-[70px] md:mb-[130px] order-3 sm:order-none">
        {FeatureData.map((feature, index) => (
          <div key={index} className="p-[10px] flex flex-col items-center">
            <img src={feature.logo} alt="logo" className="h-[60px] mb-[20px]" />
            <h3 className="max-w-[195px] text-[20px] text-center font-bold leading-[28px] mb-[20px]">
              {feature.title}
            </h3>
            <p className="max-w-[250px] text-[18px] text-center font-normal leading-[25px]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* play-content */}
      <div
        className="h-[215px] sm:h-[400px] lg:h-[658px] w-full flex justify-center items-center bg-[url('../src/assets/images/video-bg.jpg')] bg-cover bg-center rounded-[40px] md:rounded-[81px] "
        style={{ boxShadow: "0px 8.148px 63.145px 0px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="h-[60px] md:h-[187px] w-[60px] md:w-[187px] flex justify-center items-center bg-[#2091F9] rounded-full cursor-pointer hover:scale-95 duration-300">
          <img
            src={Play}
            alt="play"
            className="h-[15] md:h-[46px] w-[15px] md:w-[46px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
