import React from "react";
import Button from "./Button";

const Pricing = () => {
  const PricingData = [
    {
      plan: "FREE",
      desc: "Organize across all apps by hand",
      price: 0,
      feature1: "Pricing Feature",
      feature2: "Pricing Feature",
      feature3: "Pricing Feature",
      feature4: "Pricing Feature",
      feature5: "Pricing Feature",
      btn: "primary",
    },
    {
      plan: "STANDARD",
      desc: "Organize across all apps by hand",
      price: 10,
      feature1: "Pricing Feature",
      feature2: "Pricing Feature",
      feature3: "Pricing Feature",
      feature4: "Pricing Feature",
      feature5: "Pricing Feature",
      btn: "secondary",
      bg: true,
    },
    {
      plan: "BUSINESS",
      desc: "Organize across all apps by hand",
      price: 99,
      feature1: "Pricing Feature",
      feature2: "Pricing Feature",
      feature3: "Pricing Feature",
      feature4: "Pricing Feature",
      feature5: "Pricing Feature",
      btn: "primary",
    },
  ];

  return (
    <div className="bg-[#252B42] py-[60px] md:py-[100px] px-[20px] mb-[50px] md:mb-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-[35px] md:text-[48px] text-white text-center font-semibold mb-[20px] md:mb-[27px]">
          Pricing
        </h2>
        <p className="max-w-[560px] mx-auto text-[24px] md:text-[28px] text-white text-center font-normal leading-[34px] md:leading-[40px] mb-[50px] md:mb-[90px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-[30px] lg:gap-[50px]">
          {PricingData.map((data, index) => (
            <div
              key={index}
              className={`w-full bg-white rounded-[10px] p-[40px] flex grow flex-col items-center ${
                data.bg ? "md:scale-y-110 " : ""
              }`}
            >
              <h3 className="text-[20px] text-[#252B42] font-bold mb-[3]">
                {data.plan}
              </h3>
              <p className="max-w-[155px] mx-auto text-[16px] text-center text-[#374754] font-normal leading-[23px] mb-[18px]">
                {data.desc}
              </p>
              <div className="flex items-center gap-[10px] mb-[18px]">
                <p className="text-[74px] text-[#374754] font-bold leading-[84px] ">
                  {data.price}
                </p>
                <div className="h-[50px]">
                  <h5 className="text-[20px] text-[#252B42] font-bold leading-[28px]">
                    $
                  </h5>
                  <p className="text-[16px] text-[#374754] font-normal leading-[23px]">
                    Per Month
                  </p>
                </div>
              </div>
              <div className="text-[15px] text-[#252B42] font-normal leading-[28px] mb-[30px]">
                <ul className="">
                  <li className="p-[10px]">{data.feature1}</li>
                  <li className="p-[10px]">{data.feature2}</li>
                  <li className="p-[10px]">{data.feature3}</li>
                  <li className="p-[10px]">{data.feature4}</li>
                  <li className="p-[10px]">{data.feature5}</li>
                </ul>
              </div>
              <Button varient="primary" title="Order Now" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
