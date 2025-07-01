import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/67.png";
import Img2 from "../../assets/68.png";
import Img3 from "../../assets/34.png";
const LoanPrograms = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative md:py-16 py-2 overflow-hidden"
  >
    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
      {/* Left Side Text Content */}
      <div className="second-column pr-4 col-span-6 py-16">
        <div className="flex justify-start pl-12">
          <div>
            <h1
              className="font-poppins text-white font-normal"
              data-aos="fade-right"
            >
              U.S. Small Business Administration <br />
            </h1>
            <h1
              className="font-poppins font-extrabold text-[24px] text-[#303CA9]"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Capital
            </h1>
            <h1
              className="font-poppins font-extrabold text-[24px] text-[#303CA9]"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              The SBA has several Loan Programs to <br /> help small businesses.
            </h1>
            <div className="mt-6">
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li className="relative" data-aos="fade-up" data-aos-delay="600">
                  <span className="absolute -left-[20px] top-2 h-2 w-2 bg-[#303CA9] rounded-full"></span>
                  SBA loans are made by the financial institution, not the SBA <br />
                  (We work with a network of lenders who actually process and
                  approve the SBA loan for you).
                </li>
                <li className="relative" data-aos="fade-up" data-aos-delay="800">
                  <span className="absolute -left-[20px] top-[5px] h-2 w-2 bg-[#303CA9] rounded-full"></span>
                  The SBA guarantees a portion of the loan (from 50% to <br /> 90%
                  depending on the loan program).
                </li>
                <li
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <span className="absolute -left-[20px] top-2 h-2 w-2 bg-[#303CA9] rounded-full"></span>
                  SBA loans are made when the financial institution would <br /> not
                  have made the loans to the small business when <br /> applying their
                  own standards.
                </li>
                <li
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <span className="absolute -left-[20px] top-2 h-2 w-2 bg-[#303CA9] rounded-full"></span>
                  SBA loans are made when the financial institution's <br />
                  standards are met with the support of the SBA Loan <br /> Guarantee
                  Program.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      {/* Right Side Images */}
      <div className="col-span-6 mt-12">
        <div className="flex justify-center">
          <div>
            <img
              className="h-[200px] md:h-[400px] mt-0 ml-16"
              src={Img1}
              alt="abc"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <img
              className="h-[250px] md:h-[400px] md:mt-[-252px] mt-[-80px] ml-[-12px]"
              src={Img2}
              alt="abc"
              data-aos="zoom-in"
              data-aos-delay="800"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default LoanPrograms;
