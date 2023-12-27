import React from "react";
import { Link } from "react-router-dom";
import Map from "../assets/svgs/map-white.svg";
import Phone from "../assets/svgs/phone-white.svg";
import TwitterIcon from "../assets/svgs/twitter.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import LinkedinIcon from "../assets/svgs/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-[#252B42]">
      <div className="max-w-[1240px] mx-auto text-white flex flex-wrap justify-between gap-[20px] gap-y-[50px] py-[80px] sm:py-[130px] px-[20px]">
        <div className="max-w-full md:w-[170px]">
          <h3 className="text-[20px] font-bold leading-[28px] mb-[25px]">
            Pages
          </h3>
          <div className="flex flex-col gap-[16px]">
            <Link to="/">Home</Link>
            <Link to="/">Product</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="max-w-full md:w-[170px]">
          <h3 className="text-[20px] font-bold leading-[28px] mb-[25px]">
            Tomothy
          </h3>
          <div className="flex flex-col gap-[16px]">
            <Link to="/">Eleanor Edwards</Link>
            <Link to="/">Ted Robertson</Link>
            <Link to="/">Annette Russell</Link>
            <Link to="/">Jennie Mckinney</Link>
            <Link to="/">Gloria Richards</Link>
          </div>
        </div>
        <div className="max-w-full md:w-[170px]">
          <h3 className="text-[20px] font-bold leading-[28px] mb-[25px]">
            Jane Black
          </h3>
          <div className="flex flex-col gap-[16px]">
            <Link to="/">Philip Jones</Link>
            <Link to="/">Product</Link>
            <Link to="/">Colleen Russell</Link>
            <Link to="/">Marvin Hawkins</Link>
            <Link to="/">Bruce Simmmons</Link>
          </div>
        </div>
        <div className="max-w-full w-[300px]">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <img src={Map} alt="map-icon" className="h-[45px] w-[45px]" />
            <p className="text-[15px] font-normal leading-[27px]">
              7480 Mockingbird Hill undefined
            </p>
          </div>
          <div className="flex shrink-0 md:shrink grow items-center gap-[10px] mb-[20px]">
            <img src={Phone} alt="phone-icon" className="h-[45px] w-[45px]" />
            <p className="text-[15px] font-normal leading-[27px]">
              (239) 555-0108
            </p>
          </div>
          <div className="flex gap-[24px]">
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

export default Footer;
