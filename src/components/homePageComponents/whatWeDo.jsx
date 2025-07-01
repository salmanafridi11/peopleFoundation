import React from "react";
import Img from "../../assets/9.png";
import { SlBadge } from "react-icons/sl";

const WhatWeDo = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-center bg-cover font-poppins overflow-hidden"
    >
      {/* Header Section */}
      <div className="py-8 px-4 md:px-8">
        <h1 data-aos="zoom-out-right" className="font-poppins text-[#303CA9] text-center text-[20px] md:text-[24px] font-bold">
          What We Do
        </h1>
        <p data-aos="zoom-out-right" className="font-poppins text-white text-[20px] md:text-[24px] text-center">
          Empowering Merchants & Strengthening <br className="hidden md:block" /> Communities
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-16 px-4 md:px-16 py-8">
        {/* First Block */}
        <div className="max-w-[400px] flex flex-col items-center text-center">
          <div className="flex justify-center py-3">
            <SlBadge data-aos="flip-up" className="h-12 w-12 text-white" />
          </div>
          <h1 data-aos="zoom-in" className="text-[18px] font-bold text-white">
            Merchant Safety & Community Development
          </h1>
          <p data-aos="zoom-in" className="text-[14px] font-normal mt-3 text-white">
            We also conduct community workshops for merchants to <br className="hidden md:hidden" />
            educate them on crime prevention techniques and principles that can help deter crime
            and improve perceptions of safety. We host monthly Steering Committee Meetings to
            establish the merchant association's framework, define purpose, and encourage leadership.
          </p>
        </div>

        {/* Second Block */}
        <div className="max-w-[400px] flex flex-col items-center text-center">
          <div className="flex justify-center py-3">
            <SlBadge  data-aos="flip-up" className="h-12 w-12 text-white" />
          </div>
          <h1 data-aos="zoom-in" className="text-[18px] font-bold text-white">
            Stronger Together: Building a Thriving Community
          </h1>
          <p data-aos="zoom-in" className="text-[14px] font-normal mt-3 text-white">
            We believe that by working together, we can create a thriving and
            vibrant local economy that benefits everyone. Our goal is to provide
            our members with resources and opportunities to help them succeed,
            as well as to promote our community as a destination for shopping,
            dining, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;