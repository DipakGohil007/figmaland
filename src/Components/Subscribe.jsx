import React from "react";
import Newsletter from "../assets/images/newsletter.png";
import Button from "./Button";

const Subscribe = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-[20px] flex flex-col-reverse md:flex-row md:gap-[80px] lg:gap-[113px] mb-[80px] md:mb-[270px]"'>
      <div className="w-full md:w-[60%]">
        <img src={Newsletter} alt="newsletter" className="max-h-[520px]" />
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <p className="text-[20px] text-center md:text-left font-bold leading-[28px] mb-[17px]">
          At your fingertips
        </p>
        <h2 className="text-[35px] md:text-[48px] text-center md:text-left font-normal leading-[45px] md:leading-[55px] mb-[35px]">
          Lightning fast prototyping{" "}
        </h2>
        <p className="text-[20px] text-center md:text-left text-[#252B42] font-bold leading-[28px]">
          Subscribe to our Newsletter
        </p>
        <p className="text-[18px] text-center md:text-left font-normal leading-[25px] mb-[34px]">
          Available exclusivery on Figmaland
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-[12px] mb-[40px] md:mb-0">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full max-w-[273px] py-[20px] px-[40px] bg-[#F4F4F4] border border-solid border-[#E8E8E8] rounded-[40px]"
          />
          <Button varient="primary" title="Subscribe" size="sm" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
