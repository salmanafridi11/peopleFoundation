import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/35.png";
import Img6 from "../../assets/44.png";
import Img7 from "../../assets/45.png";
import Img8 from "../../assets/46.png";

const SBAHelpAmericans = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-16 md:py-32 bg-capital-gradient overflow-hidden"
    >
      {/* Background Image */}
      <div>
        <img
          className="absolute z-[-1] w-full h-[90%] object-cover"
          src={Img1}
          alt="new"
          data-aos="fade-in"
        />
      </div>

      {/* Heading Section */}
      <div className="flex justify-center" data-aos="fade-up">
        <div className="text-center">
          <h1 className="font-poppins text-[#fff] font-semibold text-sm md:text-base my-2">
            U.S. Small Business Administration
          </h1>
          <h1 className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#fff] mt-4 md:mt-6">
            The SBA helps Americans to start, build, and grow your business
          </h1>
          <h1 className="font-poppins font-normal text-[14px] md:text-[18px] text-[#fff] mt-4 md:mt-6">
            At the SBA, we like to identify our core Programs as the Three “C’s”{" "}
            <br className="hidden md:block" /> this is how we help Americans to
            Start, Build, and Grow their small businesses.
          </h1>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-16 gap-4 md:gap-12 px-4">
        {/* Image 1 */}
        <div className="mt-8 md:mt-16" data-aos="zoom-in">
          <img className="w-full md:w-auto" src={Img6} alt="img" />
        </div>

        {/* Image 2 */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <img className="w-full md:w-auto" src={Img7} alt="img" />
        </div>

        {/* Image 3 */}
        <div className="mt-8 md:mt-16" data-aos="zoom-in" data-aos-delay="400">
          <img className="w-full md:w-auto" src={Img8} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SBAHelpAmericans;
