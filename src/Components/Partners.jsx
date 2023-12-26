import React from "react";
import Google from "../assets/images/google.png";
import Amazon from "../assets/images/amazon.png";
import Microsoft from "../assets/images/microsoft.png";
import Dropbox from "../assets/images/dropbox.png";
import Uber from "../assets/images/uber.png";

const Partners = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-[20px] mb-[80px] ">
      <h2 className="text-[35px] md:text-[48px] text-center font-normal leading-[45px] md:leading-[55px] mb-[20px] md:mb-[27px]">
        Partners
      </h2>
      <p className="max-w-[560px] mx-auto text-[23px] md:text-[28px] text-[#374754] text-center font-normal leading-[40px] md:leading-[40px] mb-[50px] md:mb-[90px]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-[50px]">
        <img
          src={Google}
          alt="Google"
          className="max-h-[45px] object-contain"
        />
        <img
          src={Amazon}
          alt="Amazon"
          className="max-h-[45px] object-contain"
        />
        <img
          src={Microsoft}
          alt="Microsoft"
          className="max-h-[45px] object-contain"
        />
        <img
          src={Dropbox}
          alt="Dropbox"
          className="max-h-[45px] object-contain"
        />
        <img src={Uber} alt="Uber" className="max-h-[45px] object-contain" />
      </div>
    </div>
  );
};

export default Partners;
