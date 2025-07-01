import React from "react";
import Img from "../../assets/64.png";

const SBAloanPrograms = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-16"
  >
    <div className="flex justify-center">
      <div className="container max-w-[1200px]">
        <div className="flex justify-center" data-aos="fade-down">
          <div>
            <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
              U.S. Small Business Administration
            </h1>
            <h1
              className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
              data-aos="fade-up"
            >
              Capital - SBA LOAN PROGRAMS
            </h1>
  
            <div className="grid md:grid-cols-3 grid-cols-1 px-12 gap-12 mt-16">
              {[
                "7 (A) Loan Program",
                "7 (A) Small Loans",
                "Express Loans",
                "Micro-Loans",
                "Export Financing",
                "504 Program",
              ].map((loan, index) => (
                <div
                  key={index}
                  className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-[#FF0606] text-white font-bold"
                  data-aos="flip-left"
                  data-aos-delay={index * 200}
                >
                  {loan}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SBAloanPrograms;
