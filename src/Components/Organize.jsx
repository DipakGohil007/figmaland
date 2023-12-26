import React from "react";
import Macbbok from "../assets/images/macbook.png";
import Button from "./Button";

const Organize = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row px-[20px] mb-[80px] md:mb-[270px]">
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start">
        <h2 className="max-w-[335px] text-[35px] md:text-[48px] text-center md:text-left font-400 leading-[45px] md:leading-[55px] tracking-[0.2px] mb-[27px]">
          Fastest way to organize
        </h2>
        <p className="max-w-[570px] text-[23px] md:text-[28px] text-center md:text-left font-400 leading-[33px] md:leading-[40px] tracking-[0.2px] mb-[30px] md:mb-[50px] lg:mb-[70px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <Button varient="primary" title="Try For Free" />
      </div>
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <img
          src={Macbbok}
          alt="macbook"
          className="max-h-[300px] mt-[60px] md:mt-0"
        />
      </div>
    </div>
  );
};

export default Organize;
