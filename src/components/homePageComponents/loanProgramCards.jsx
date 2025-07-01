import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/73.png";
import Img2 from "../../assets/16.png";
import Img3 from "../../assets/74.png";
import Img4 from "../../assets/75.png";
import Img5 from "../../assets/76.png";

import Img7 from "../../assets/77.png";
import Img8 from "../../assets/78.png";
import Img9 from "../../assets/79.png";
import Img10 from "../../assets/55.png";
import Img11 from "../../assets/80.png";
import Img12 from "../../assets/81.png";

const LoanProgramCards = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Img})` }}
        className="bg-cover bg-center font-poppins relative py-32 overflow-hidden"
      >
        <div className="hidden md:block">
          <img
            className="absolute left-0 top-0 h-[600px]"
            src={Img1}
            alt="boxes"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <img
            className="absolute right-0 top-0 h-[600px]"
            src={Img2}
            alt="boxes"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="flex justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div>
            <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
              U.S. Small Business Administration
            </h1>
            <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
              Capital - SBA LOAN PROGRAMS
            </h1>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-12 relative">
          <div
            className="rounded-xl bg-white h-[320px] mt-2"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <img className="h-[200px] w-full" src={Img3} alt="" />
            <div className="px-2">
              <h1 className="text-red-500 py-1 px-1 text-xs font-bold">
                Repayment Terms
              </h1>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                ⏳ Working Capital: 5 to 7 Years
              </p>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                🏭 Machinery & Equipment: 10 Years (or useful life)
              </p>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                🏡 Real Estate: 25 Years
              </p>
            </div>
          </div>

          <div
            className="rounded-xl bg-white h-[320px] mt-2"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <img className="h-[200px] w-full" src={Img4} alt="" />
            <div className="px-2">
              <h1 className="text-red-500 py-1 px-1 text-xs font-bold">
                7(a) LOAN
              </h1>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                Maximum Loan Size: $5,000,000
              </p>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                2.Maximum Guarantee Amount: $3,750,000
              </p>
            </div>
          </div>
          <div
            className="rounded-xl bg-white h-[320px] mt-2"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <img className="h-[200px] w-full" src={Img5} alt="" />
            <div className="px-2">
              <h1 className="text-red-500 py-1 px-1 text-xs font-bold">
                Loan Coverage:
              </h1>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                85% for loans up to $150,000
              </p>
              <p className="py-1 px-1 text-xs text-[#303CA9] font-bold text-center">
                2.75% for loans above $150,000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* "Section2" */}

      <div
        style={{ backgroundImage: `url(${Img7})` }}
        className="bg-cover bg-center font-poppins relative py-32 overflow-hidden"
      >
        <div>
          <img
            className="absolute w-full top-0 h-[600px] opacity-0 animate-fade-in"
            src={Img10}
            alt="boxes"
            data-aos="fade-down"
          />
        </div>

        <div className="flex justify-center" data-aos="fade-up">
          <div>
            <h1 className="font-poppins text-[#fff] font-semibold text-center my-2">
              U.S. Small Business Administration
            </h1>
            <h1 className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center">
              Capital - SBA LOAN PROGRAMS
            </h1>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-4 gap-12 items-center justify-center mt-12 relative px-12">
          <div
            className="rounded-xl md:max-w-[500px] h-[320px] mt-2 bg-[#303CA9] transform opacity-0 scale-90 animate-fade-in-up"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img className="h-[200px] w-full" src={Img8} alt="" />
            <div className="px-2">
              <h1 className="text-white py-1 px-1 text-xs font-bold text-center md:text-start">
                7(a) LOAN
              </h1>
              <p className="py-1 px-1 text-xs text-white font-bold text-center">
                Maximum Loan Size: $350,000
              </p>
            </div>
          </div>

          <div
            className="rounded-xl bg-[#303CA9] max-w-[500px] h-[320px] md:mt-2 mt-6 transform opacity-0 scale-90 animate-fade-in-up"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img className="h-[200px] w-full" src={Img9} alt="" />
            <div className="px-2">
              <h1 className="text-white py-1 px-1 text-xs font-bold">
                Guarantee
              </h1>
              <p className="py-1 px-1 text-xs text-white font-bold text-center">
                ✅ 85% for loans up to $150,000
              </p>
              <p className="py-1 px-1 text-xs text-white font-bold text-center">
                ✅ 75% for loans above $150,000
              </p>
            </div>
          </div>

          <div
            className="rounded-xl bg-[#303CA9] max-w-[500px] h-[320px] md:mt-2 mt-6 transform opacity-0 scale-90 animate-fade-in-up"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img className="h-[200px] w-full" src={Img5} alt="" />
            <div className="px-2">
              <h1 className="text-white py-1 px-1 text-xs font-bold">
                Loan Coverage:
              </h1>
              <p className="py-1 px-1 text-xs text-white font-bold text-center">
                85% for loans up to $150,000
              </p>
              <p className="py-1 px-1 text-xs text-white font-bold text-center">
                2.75% for loans above $150,000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* "Section3" */}

      <div
        style={{ backgroundImage: `url(${Img11})` }}
        className="bg-cover bg-center font-poppins relative py-32 overflow-hidden"
      >
        <div className="hidden md:block">
          <img
            className="absolute left-0 top-0 h-[600px]"
            src={Img1}
            alt="boxes"
            data-aos="fade-right"
          />
          <img
            className="absolute right-0 top-0 h-[600px]"
            src={Img2}
            alt="boxes"
            data-aos="fade-left"
          />
        </div>

        <div className="flex justify-center" data-aos="fade-down">
          <div>
            <h1 className="font-poppins text-[#FF0606] font-semibold text-center my-2">
              U.S. Small Business Administration
            </h1>
            <h1 className="font-poppins font-extrabold text-[24px] text-[#FF0606] mt-6 text-center">
              Capital - SBA LOAN PROGRAMS
            </h1>
          </div>
        </div>

        <div
          className="flex md:flex-row flex-col gap-4 items-center justify-center mt-12 relative"
          data-aos="fade-up"
        >
          <div
            className="rounded-xl max-w-[500px] h-[320px] mt-2 bg-[#FF0606]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img className="h-[200px] w-full" src={Img8} alt="" />
            <div className="px-2">
              <h1 className="text-white py-1 px-1 text-xs font-bold">
                Express Loan
              </h1>
              <p className="py-1 px-1 text-xs text-[#fff] font-bold text-center">
                Maximum Loan Amount: $350,000
              </p>
              <p className="py-1 px-1 text-xs text-[#fff] font-bold text-center">
                Maximum Guarantee: 50%
              </p>
            </div>
          </div>

          <div
            className="rounded-xl bg-[#FF0606] max-w-[500px] h-[320px] mt-2"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img className="h-[200px] w-full" src={Img4} alt="" />
            <div className="px-2">
              <h1 className="text-red-500 py-1 px-1 text-xs font-bold">
                Interest Rates
              </h1>
              <p className="py-1 px-1 text-xs text-[#fff] font-bold text-center">
                📌 6.5% over Prime for loans $50,000 or less
              </p>
              <p className="py-1 px-1 text-xs text-[#fff] font-bold text-center">
                📌 4.5% over Prime for loans over $50,000
              </p>
            </div>
          </div>

          <div
            className="rounded-xl bg-[#FF0606] max-w-[500px] h-[320px] mt-2"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img className="h-[200px] w-full" src={Img5} alt="" />
            <div className="px-2">
              <h1 className="text-red-500 py-1 px-1 text-xs font-bold">
                Loan Coverage:
              </h1>
              <p className="py-1 px-1 text-xs text-[#fff] font-bold text-center">
                85% for loans up to $150,000
              </p>
              <p className="py-1 px-1 text-xs text-[#fff] font-bold text-center">
                2.75% for loans above $150,000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* "Section4" */}

      <div
  style={{ backgroundImage: `url(${Img7})` }}
  className="bg-cover bg-center font-poppins relative py-32"
>
  <div>
    <img
      data-aos="fade-down"
      className="absolute w-full top-0 h-[600px]"
      src={Img10}
      alt="boxes"
    />
  </div>
  <div className="flex justify-center" data-aos="fade-up">
    <div>
      <h1 className="font-poppins text-white font-semibold text-center my-2">
        U.S. Small Business Administration
      </h1>
      <h1 className="font-poppins font-extrabold text-[24px] text-white mt-6 text-center">
        Capital - SBA LOAN PROGRAMS
      </h1>
    </div>
  </div>

  <div
    className="flex gap-4 items-center justify-center mt-12 relative px-2 md:px-0"
    data-aos="zoom-in"
  >
    <div className="rounded-xl max-w-[800px] mt-2 bg-[#303CA9]">
      <img className="h-[200px] w-full" src={Img12} alt="" />
      <div className="px-2">
        <div className="flex justify-center my-3" data-aos="fade-up">
          <h1 className="bg-white w-[400px] text-center rounded-xl py-2 px-4 text-xs font-bold text-[#FF0606]">
            Express Loan
          </h1>
        </div>

        <div className="flex gap-12 flex-wrap justify-center py-12">
          {[
            '📌 Micro-Loans',
            'Maximum Loan Amount: $50,000',
            'Average Loan Amount: $13,000',
            'The Microloan Program assists:',
            'Women',
            'Low-income individuals',
            'Veterans',
            'Minority entrepreneurs',
            'Other small businesses needing financing <br /> up to $50,000 and business-based technical assistance.',
          ].map((text, index) => (
            <p
              key={index}
              className="py-1 px-1 text-xs text-[#fff] font-bold text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>;
    </>
  );
};

export default LoanProgramCards;
