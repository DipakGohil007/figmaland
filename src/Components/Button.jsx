import React from "react";

const Button = ({ title, varient, size = "max-w-[236px]" }) => {
  return (
    <button
      className={`max-w-[236px] w-full py-[16px] font-bold rounded-[35px] hover:shadow-2xl hover:scale-95 duration-300 
      ${
        varient == "primary"
          ? "bg-[#2091F9] text-white"
          : "bg-white text-[#2091F9]"
      }
      ${size == "sm" ? "max-w-[172px]" : "max-w-[236px]"}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
