import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="w-screen h-full min-h-screen bg-hero-bg bg-cover bg-bottom bg-no-repeat flex flex-col justify-center items-center px-[20px] mb-[90px]">
      <h1 className="max-w-[672px] mx-auto text-white text-center text-[40px] sm:text-[48px] md:text-[74px] font-bold leading-[50px] md:leading-[84px] tracking-[0.2px] mb-[20px] md:mb-[27px]">
        The best products start with Figma
      </h1>
      <p className="max-w-[750px] mx-auto text-white text-center text-[20px] md:text-[28px] font-400 leading-[28px] md:leading-[40px] tracking-[0.2px] mb-[40px] md:mb-[70px]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <Button varient="primary" title="Try For Free" />
    </div>
  );
};

export default HeroSection;
