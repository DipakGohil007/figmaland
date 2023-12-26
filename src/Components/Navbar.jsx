import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import TwitterIcon from "../assets/svgs/twitter.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import LinkedinIcon from "../assets/svgs/linkedin.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // navbar bg change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // stop the scroll when hamburger menu is open.
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-between items-center py-[20px] px-[20px] md:px-[40px] transition-all duration-300 z-50
      ${scrolled ? "bg-[#2091F9]" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-[35px]">
        <ul className="hidden md:flex gap-[40px] text-white text-[15px]">
          <li className="hover:scale-95 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-95 duration-300">
            <Link to="/">Product</Link>
          </li>
          <li className="hover:scale-95 duration-300">
            <Link to="/">About</Link>
          </li>
          <li className="hover:scale-95 duration-300">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <Link to="/">
          <img src={Logo} alt="logo" className="h-[58px]" />
        </Link>
      </div>
      <div className="hidden md:flex gap-[24px]">
        <Link to="/" className="hover:scale-95 duration-300">
          <img src={TwitterIcon} alt="twitter" className="h-[40px]" />
        </Link>
        <Link to="/" className="hover:scale-95 duration-300">
          <img src={FacebookIcon} alt="facebook" className="h-[40px]" />
        </Link>
        <Link to="/" className="hover:scale-95 duration-300">
          <img src={LinkedinIcon} alt="linkedin" className="h-[40px]" />
        </Link>
      </div>
      {toggle ? (
        <IoClose
          className="block md:hidden text-[30px] text-white z-50"
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <HiMenuAlt3
          className="block md:hidden text-[30px] text-white z-50"
          onClick={() => setToggle(!toggle)}
        />
      )}

      {/* Responsive Menu */}
      <ul
        className={`absolute top-0 h-screen w-screen flex flex-col justify-center items-center bg-[#2091F9] md:hidden gap-[40px] text-white text-[30px] duration-300
         ${toggle ? "left-0 overflow-hidden" : "left-[-200%] overflow-auto"} `}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
