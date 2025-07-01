import React from "react";
import Img from "../../assets/40.png";
import Img3 from "../../assets/41.png";
import Img4 from "../../assets/42.png";
import Img5 from "../../assets/43.png";

const HelpAmericans = () => {
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
          data-aos-duration="800"
        >
          U.S. Small Business Administration
        </h1>
        <h1
          className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#fff] mt-4 md:mt-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          The SBA helps Americans to start, build, and grow your business
        </h1>
        <h1
          className="font-poppins font-normal text-[14px] md:text-[18px] text-[#fff] mt-4 md:mt-6"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          The SBA helps Americans start, build, and grow businesses through{" "}
          <br className="hidden md:block" /> an extensive network of field offices
          and partnerships with public <br className="hidden md:block" /> and
          private organizations.
        </h1>
      </div>
    </div>
  
    {/* Centered Div */}
    <div className="flex justify-center mt-8 md:mt-16">
      <div
        className="rounded-full py-2 px-4 md:py-4 md:px-6 text-[#FF0606] border-[#FF0606] bg-white text-center text-xs md:text-sm"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        The SBA and our resource partners focus on America's small businesses as
        they are:
      </div>
    </div>
  
    {/* Cards Section */}
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8 md:mt-12 px-4">
      {/* Card 1 */}
      <div
        className="rounded bg-white w-full md:max-w-[200px] h-auto md:h-[260px]"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <img
          className="h-[150px] md:h-[200px] w-full object-cover"
          src={Img3}
          alt=""
        />
        <p className="text-red-500 py-2 px-2 text-xs md:text-sm">
          Critical to economic recovery and strength
        </p>
      </div>
  
      {/* Card 2 */}
      <div
        className="rounded bg-white w-full md:max-w-[200px] h-auto md:h-[260px]"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <img
          className="h-[150px] md:h-[200px] w-full object-cover"
          src={Img4}
          alt=""
        />
        <p className="text-red-500 py-2 px-2 text-xs md:text-sm">
          To building America's future
        </p>
      </div>
  
      {/* Card 3 */}
      <div
        className="rounded bg-white w-full md:max-w-[200px] h-auto md:h-[260px]"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        <img
          className="h-[150px] md:h-[200px] w-full object-cover"
          src={Img5}
          alt=""
        />
        <p className="text-red-500 py-2 px-2 text-xs md:text-sm">
          And helping the United States compete in today’s global marketplace.
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default HelpAmericans;