import React from "react";
import Button from "./Button";
import Map from "../assets/svgs/map.svg";
import Phone from "../assets/svgs/phone.svg";
import Mail from "../assets/svgs/mail.svg";
import GoogleMap from "../assets/images/map.png";
import TwitterIcon from "../assets/svgs/twitter-blue.svg";
import FacebookIcon from "../assets/svgs/facebook-blue.svg";
import LinkedinIcon from "../assets/svgs/linkedin-blue.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-[1240px] px-[20px] mx-auto mb-[50px] md:mb-[130px]">
      <h2 className="text-[35px] md:text-[48px] text-center font-semibold leading-[45px] md:leading-[55px] mb-[27px]">
        Contact Us
      </h2>
      <p className="max-w-[570px] mx-auto text-[23px] text-center md:text-[28px] font-normal leading-[33px] md:leading-[40px] mb-[60px]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-[25px] lg:gap-[50px]">
        <form
          action=""
          className="w-full lg:max-w-[450px] bg-white p-[40px] lg:p-[50px] flex flex-col items-center gap-[45px] border border-solid border-[#DDD] rounded-[20px]"
          style={{
            boxShadow: "0px 13px 19px 0px rgba(0, 0, 0, 0.07)",
          }}
        >
          <h3 className="text-[20px] text-center font-bold leading-[28px]">
            Contact Us
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#F5F5F5] p-[20px] border border-solid border-[#E8E8E8] rounded-[39px]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#F5F5F5] p-[20px] border border-solid border-[#E8E8E8] rounded-[39px]"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="w-full max-h-[193px] bg-[#F5F5F5] p-[20px] border border-solid border-[#E8E8E8]"
          />
          <Button varient="primary" title="Send" />
        </form>
        <div className="">
          <div className="flex flex-col lg:flex-row items-center gap-[25px] lg:gap-[35px] mb-[70px]">
            <div className="max-w-[313px]">
              <img src={Map} alt="map" className="mb-[20px] mx-auto" />
              <p className="w-full text-[16px] text-[#374754] font-normal leading-[23px] text-center">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </p>
            </div>
            <div className="max-w-[137px]">
              <img src={Phone} alt="phone" className="mb-[20px] mx-auto" />
              <p className="w-full text-[16px] text-[#374754] font-normal leading-[23px] text-center">
                (843) 555-0130
              </p>
            </div>
            <div className="max-w-[245px]">
              <img src={Mail} alt="mail" className="mb-[20px] mx-auto" />
              <p className="w-full text-[16px] text-[#374754] font-normal leading-[23px] text-center">
                willie.jennings@example.com
              </p>
            </div>
          </div>
          <img
            src={GoogleMap}
            alt="google-map"
            className="hidden lg:block max-h-[325px] max-w-[516px] mx-auto mb-[60px] cursor-pointer"
          />
          <div className="flex justify-center lg:justify-start gap-[24px]">
            <Link to="/" className="hover:scale-95 duration-300">
              <img src={TwitterIcon} alt="twitter" />
            </Link>
            <Link to="/" className="hover:scale-95 duration-300">
              <img src={FacebookIcon} alt="facebook" />
            </Link>
            <Link to="/" className="hover:scale-95 duration-300">
              <img src={LinkedinIcon} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
