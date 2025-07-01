import React from "react";
import Img from "../../assets/54.png";

const RetiredExecutives = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-32 bg-capital-gradient overflow-hidden" 
  >
    <div className="flex justify-center md:px-0 px-5" data-aos="fade-up">
      <div>
        <h1
          className="font-poppins text-[#fff] font-semibold text-center my-2"
          data-aos="fade-down"
        >
          U.S. Small Business Administration
        </h1>
        <h1
          className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
          data-aos="zoom-in"
        >
          Service Corps. of Retired Executives (SCORE) <br />
          Mentors to America’s small business
        </h1>
        <div className="flex justify-center my-6" data-aos="fade-up">
          <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
            Services
          </button>
        </div>
  
        <h1
          className="font-semibold text-[18px] text-center text-[#0B155C] my-6"
          data-aos="fade-left"
        >
          Business Tools and Templates
        </h1>
  
        <div
          className="flex gap-16 items-center justify-center mt-6"
          data-aos="flip-up"
        >
          <div className="border border-white p-5 rounded-lg" data-aos="zoom-in">
            <h1 className="font-semibold text-[#0B155C] text-center">
              Mentoring
            </h1>
            <p className="text-sm text-black py-1 text-center">1.Online</p>
            <p className="text-sm text-black py-1 text-center">1.In-Person</p>
          </div>
  
          <div className="border border-white p-5 rounded-lg" data-aos="zoom-in">
            <h1 className="font-semibold text-[#0B155C] text-center">Workshops</h1>
            <p className="text-sm text-black py-1 text-center">1.Online</p>
            <p className="text-sm text-black py-1 text-center">1.In-Person</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default RetiredExecutives;
