import React from "react";
import Img3 from "../../assets/64.png";
import Img from "../../assets/10.png";
import Img1 from "../../assets/82.png";
import Img2 from "../../assets/83.png";
import Img5 from "../../assets/84.png";
import Img4 from "../../assets/85.png";
import Img6 from "../../assets/40.png";

const LoanProgramForExporters = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Img3})` }}
        className="bg-cover bg-center font-poppins relative py-16 overflow-hidden"
      >
        <div className="flex justify-center">
          <div className="container max-w-[1200px]">
            <div className="flex justify-center">
              <div>
                <h1
                  className="font-poppins text-[#fff] font-semibold text-center my-2"
                  data-aos="fade-down"
                >
                  U.S. Small Business Administration
                </h1>
                <h1
                  className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
                  data-aos="fade-up"
                >
                  Capital - SBA LOAN PROGRAMS for Exporters
                </h1>
                <div className="flex justify-center" data-aos="zoom-in">
                  <div className="rounded-tl-2xl rounded-br-xl border my-4 border-white py-4 px-12 bg-transparent text-white font-bold">
                    International Trade Loan
                  </div>
                </div>

                <div
                  className="grid md:grid-cols-3 grid-cols-1 px-12 gap-12 mt-16"
                  data-aos="fade-up"
                >
                  <div className="rounded-tl-2xl rounded-br-xl md:py-4 py-9 px-12 bg-[#FF0606] text-white font-bold text-[15px] md:text-start text-center">
                    ✅ International Trade Loan – used to significantly expand{" "}
                    <br className="hidden md:block" /> an existing export market
                    or develop new export markets
                  </div>
                  <div className="rounded-tl-2xl rounded-br-xl md:py-4 py-9 px-12 bg-[#FF0606] text-white font-bold text-[15px] md:text-start text-center">
                    ✅ Used to upgrade facilities or equipment that will{" "}
                    <br className="hidden md:block" /> improve the company’s
                    competitive position
                  </div>
                  <div className="rounded-tl-2xl rounded-br-xl md:py-4 py-9 px-12 bg-[#FF0606] text-white font-bold text-[15px] md:text-start text-center">
                    ✅ Designed to provide long-term financing
                  </div>
                  <div className="rounded-tl-2xl rounded-br-xl md:py-4 py-9 px-12 bg-[#FF0606] text-white font-bold text-[15px] md:text-start text-center">
                    ✅ International Trade Loan can go up to $5,000,000
                  </div>
                  <div className="rounded-tl-2xl rounded-br-xl md:py-4 py-9 px-12 bg-[#FF0606] text-white font-bold text-[15px] md:text-start text-center">
                    ✅ Up to 25-year term with a 90% guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION2 */}
      <div
        style={{ backgroundImage: `url(${Img})` }}
        className="bg-cover bg-center font-poppins relative md:py-32 py-16 overflow-hidden"
      >
        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
          {/* Left content section */}
          <div
            className="second-column pr-4 col-span-6 py-16"
            data-aos="fade-right"
          >
            <div className="flex justify-start pl-12">
              <div>
                <h1
                  className="font-poppins text-white font-normal"
                  data-aos="fade-down"
                >
                  U.S. Small Business Administration <br />
                </h1>

                <h1
                  className="font-poppins font-extrabold text-[24px] text-[#fff]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Capital - SBA LOAN PROGRAMS for Exporters
                </h1>

                <div className="mt-6" data-aos="fade-left" data-aos-delay="400">
                  <ul className="pl-1 space-y-2 text-white">
                    <li className="relative">
                      ✅ Can be single transaction or multiple sales on a
                      revolving line of credit
                    </li>
                    <li className="relative">
                      ✅ Company must be in business at least 1 year, not
                      necessarily in export
                    </li>
                    <li className="relative">
                      ✅ Maximum loan amount: $5 million (SBA guaranteed
                      portion)
                    </li>
                    <li className="relative">✅ 90% guarantee for lenders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div
            className="col-span-6 mt-12"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="flex justify-center">
              <div>
                <img
                  className="h-[400px] mt-0 md:ml-16"
                  src={Img1}
                  alt="abc"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                />
                <img
                  className="h-[180px] mt-[-175px] md:ml-[-12px] ml-[44px]"
                  src={Img2}
                  alt="abc"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION3 */}
      <div
        style={{ backgroundImage: `url(${Img6})` }}
        className="bg-cover bg-center font-poppins relative py-32 bg-capital-gradient overflow-hidden"
      >
        {/* Header Section */}
        <div className="flex justify-center" data-aos="fade-down">
          <div>
            <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
              U.S. Small Business Administration
            </h1>
            <h1
              className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Capital - SBA LOAN PROGRAMS
            </h1>
            <h1
              className="font-poppins font-normal text-[18px] text-[#fff] mt-6 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              504 ECONOMIC DEVELOPMENT LOAN PROGRAM
            </h1>
          </div>
        </div>

        {/* Feature List Section */}
        <div className="flex justify-center mt-16 px-4 md:px-0 ">
          <div>
            <div
              className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Fixed rate, low down payment financing for fixed assets
            </div>
            <div
              className="rounded-full py-4 px-4 mt-4 text-[#FF0606] border-[#FF0606] bg-white text-center"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              Administered for SBA by Certified Development Companies (CDC)
            </div>
            <div
              className="rounded-full py-4 mt-5 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Minimizes risk to the lender
            </div>
            <div
              className="rounded-full py-4 mt-5 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center"
              data-aos="zoom-in"
              data-aos-delay="1200"
            >
              Up to 25 years
            </div>
          </div>
        </div>
      </div>

      {/* SECTION4 */}
      <div
        style={{ backgroundImage: `url(${Img})` }}
        className="bg-cover bg-center font-poppins relative md:py-32 py-16 overflow-hidden"
      >
        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
          {/* Text Content Section */}
          <div
            className="second-column pr-4 col-span-6 py-16"
            data-aos="fade-right"
          >
            <div className="flex justify-start md:pl-12 px-4 md:px-0">
              <div>
                <h1 className="font-poppins text-white font-normal">
                  U.S. Small Business Administration <br />
                </h1>

                <h1
                  className="font-poppins font-extrabold text-[24px] text-[#fff]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Capital - SBA LOAN PROGRAMS for Exporters
                </h1>

                <div className="mt-6">
                  <ul className="pl-1 space-y-2 text-white">
                    <li
                      className="relative"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      ✅ International Trade Loan – used to significantly expand
                      an existing export market or develop new export markets
                    </li>
                    <li
                      className="relative"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      ✅ Used to upgrade facilities or equipment that will
                      improve the company’s competitive position
                    </li>
                    <li
                      className="relative"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      ✅ International Trade Loan can go up to $5,000,000
                    </li>
                    <li
                      className="relative"
                      data-aos="fade-up"
                      data-aos-delay="1000"
                    >
                      ✅ Up to 25-year term with a 90% guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-span-6 mt-12"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex justify-center">
              <div>
                <img
                  className="h-[400px] mt-0 md:ml-16"
                  src={Img4}
                  alt="abc"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                />
                <img
                  className="h-[180px] mt-[-175px] md:ml-[-12px] ml-[54px]"
                  src={Img5}
                  alt="abc"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanProgramForExporters;
