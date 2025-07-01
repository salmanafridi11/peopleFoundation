import React from "react";
import Img from "../../assets/47.png";
import Img6 from "../../assets/48.png";
import Img7 from "../../assets/49.png";
import Img8 from "../../assets/50.png";
import Img9 from "../../assets/51.png";

const SBAResourcePartner = () => {
  return (
<div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-16 md:py-32 bg-capital-gradient overflow-hidden"
    >
      {/* Heading Section */}
      <div className="flex justify-center">
        <div className="text-center">
          <h1
            className="font-poppins text-[#fff] font-semibold text-sm md:text-base my-2"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            U.S. Small Business Administration
          </h1>
          <h1
            className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#fff] mt-4 md:mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            SBA Resource Partners are: The SBA helps Americans to start, build,
            and grow your business
          </h1>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-16 gap-4 md:gap-12 px-4">
        {/* Image 1 */}
        <div className="mt-8 md:mt-16" data-aos="zoom-in" data-aos-duration="800">
          <img className="w-full md:w-auto" src={Img6} alt="img" />
        </div>

        {/* Image 2 */}
        <div className="mt-8 md:mt-16" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
          <img className="w-full md:w-auto" src={Img7} alt="img" />
        </div>

        {/* Image 3 */}
        <div className="mt-8 md:mt-16" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
          <img className="w-full md:w-auto" src={Img8} alt="img" />
        </div>

        {/* Image 4 */}
        <div className="mt-8 md:mt-16" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600">
          <img className="w-full md:w-auto" src={Img9} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SBAResourcePartner;