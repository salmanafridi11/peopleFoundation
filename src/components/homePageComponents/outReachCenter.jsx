import React from "react";
import Img from "../../assets/64.png";
import Img1 from "../../assets/55.png";

const OutReachCenter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-12 bg-capital-gradient overflow-hidden"
    >
      <div className="">
        <img
          className="absolute z-[-1] w-full top-0 h-[450px]"
          src={Img1}
          alt="new"
          data-aos="fade-in"
        />
      </div>
      <div className="flex justify-center px-4 md:px-0" data-aos="zoom-in">
        <div>
          <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
            U.S. Small Business Administration
          </h1>
          <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
            Veteran Business Outreach Center (VBOC)
          </h1>
          <div className="flex justify-center my-6">
            <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
              Services
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:px-16 px-4">
        {[
          'Pre-Business Plan Workshops/Concept Assessments',
          'Business Plan Assistance',
          'Comprehensive Feasibility Analysis/Strategy',
          'One-on-One Counseling',
          'Training',
          'Mentorship',
          'Other Related Business Development Services',
        ].map((text, index) => (
          <div
            key={index}
            className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutReachCenter;
