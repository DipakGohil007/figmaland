import React from "react";
import Ibm from "../assets/svgs/ibm.svg";
import Person from "../assets/images/person.png";
import Button from "./Button";

const Testimonial = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex flex-col items-center px-[20px] mb-[50px] md:mb-[100px]">
      <h2 className="text-[48px] text-center font-400 leading-[55px] mb-[50px] md:mb-[90px]">
        Testimonials
      </h2>
      <img
        src={Ibm}
        alt="testimonial-company"
        className="mb-[30px] md:mb-[60px]"
      />
      <p className="max-w-[970px] text-[24px] md:text-[28px] text-center text-[#374754] font-400 leading-[40px] mb-[30px] md:mb-[60px]">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>
      <div className="max-w-[200px] flex gap-[13px] mb-[40px] md:mb-[80]">
        <img src={Person} alt="reviewer" className="h-[50px] w-[50px]" />
        <div>
          <h4 className="text-[16px] text-[#374754] font-400 leading-[23px] mb-[2px]">
            Organize across
          </h4>
          <p className="text-[15px] text-[#252B42] font-400 leading-[28px]">
            Ui designer
          </p>
        </div>
      </div>
      <Button varient="primary" title="More Testimonials" />
    </div>
  );
};

export default Testimonial;
