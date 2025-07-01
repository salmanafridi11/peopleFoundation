import React from "react";
import Img from "../../assets/39.png";

const Capital = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-32 bg-capital-gradient overflow-hidden"
  >
    {/* Heading Section */}
    <div className="flex justify-center">
      <div>
        <h1
          className="font-poppins text-[#fff] font-semibold text-center my-2"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          U.S. Small Business Administration
        </h1>
        <h1
          className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          The (SBA) helps Americans to start, build, and grow your business
          <br /> Our NYDO Comprises 14 downstate counties of New York:
        </h1>
        <h1
          className="font-poppins font-normal text-[18px] text-[#fff] mt-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          (Bronx, Dutchess, Kings, Nassau, New York, Orange, Putnam, Queens,
          Richmond, Rockland, Suffolk, Sullivan, Ulster, and Westchester)
        </h1>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="flex justify-center mt-16">
      <div>
        <div
          className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Over 1.6 million Small Businesses
        </div>
        <div
          className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white mt-5 text-center"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Employing Over 5 million
        </div>
        <div
          className="rounded-full py-4 px-4 text-[#FF0606] border-[#FF0606] bg-white mt-5 text-center"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          With a Payroll in excess of $322 Billion
        </div>
      </div>
    </div>
  </div>
  );
};

export default Capital;
