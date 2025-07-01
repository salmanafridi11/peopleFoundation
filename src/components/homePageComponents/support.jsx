import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/17.png";
import Img2 from "../../assets/18.png";
import Img3 from "../../assets/19.png";
import Img4 from "../../assets/20.png";
import Img5 from "../../assets/21.png";
import Img6 from "../../assets/22.png";
import Img7 from "../../assets/23.png";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Support = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Img})` }}
        className="bg-cover bg-center font-poppins relative z-[99] overflow-hidden"
      >
        <div className="h-[60px]"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 pb-32">
          <div className="col-span-6">
            <div className="flex justify-center">
              <div className="relative">
                <img   data-aos="flip-up" className="h-[300px] md:h-[400px] mt-0" src={Img1} alt="abc" />
                <img
                 data-aos="flip-down"
                  className="h-[300px] md:h-[400px] mt-[-100px] md:mt-[-132px] ml-[120px] md:ml-[192px]"
                  src={Img2}
                  alt="abc"
                />
              </div>
            </div>
          </div>

          <div className="second-column pr-4 col-span-6 mt-8 md:mt-0">
            <div className="flex justify-start pl-4 md:pl-12">
              <div>
                <h1  data-aos="zoom-out-left" className="font-poppins text-[#303CA9] font-semibold">
                  OUR PARTNERS
                </h1>
                <h1 data-aos="zoom-out-left" className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9]">
                  Your Support is Really <br />
                  Powerful.​
                </h1>
                <p data-aos="zoom-out-left" className="text-[#000] pr-6 mt-4 text-sm md:text-base">
                  We add value to its resistance to promote economic growth and
                  stability for all residents of New York City by connecting
                  individuals to employment opportunities, supporting the
                  development of strong businesses, and promoting fairness and
                  equity in neighborhoods throughout the five boroughs.
                </p>
                <p data-aos="zoom-out-left" className="text-[#000] mt-3 pr-6 text-sm md:text-base">
                  People's foundation Emerge has built coalitions and works
                  closely with community organizations to establish a supportive
                  environment for local businesses to succeed, ultimately
                  leading to dynamic neighborhoods where individuals can reside,
                  conduct business, work, shop, and engage in leisure activities.
                </p>
                <button  data-aos="flip-up" className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img className="absolute top-[40%] z-[-1] hidden md:block" src={Img3} alt="abc" />
        </div>

        <div className="px-4 md:px-20 flex flex-col md:flex-row justify-between mt-12">
          <h1  data-aos="zoom-out-right" className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] text-center md:text-start">
            You can help lots of people by <br />
            donating little.
          </h1>
          <div  data-aos="zoom-out-left" className="flex gap-8 md:gap-32 items-center mt-4 md:mt-0 justify-center md:justify-start">
            <FaChevronCircleRight className="text-white h-8 w-8 md:h-12 md:w-12" />
            <FaChevronCircleLeft className="h-8 w-8 md:h-12 md:w-12 text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch font-poppins overflow-hidden">
        {/* Left Section (Text) */}
        <div  data-aos="zoom-out-right" className="left bg-partnership-gradient p-4 md:p-7 flex-1 flex flex-col justify-center">
          <h1 className="text-white font-semibold text-center text-lg md:text-xl w-full md:w-[410px] mx-auto">
            RESIDENTIAL COMMUNITY
          </h1>
          <p className="text-white capitalize text-sm md:text-base text-center mt-4">
            People's foundation has conducted extensive research on the critical issue of affordable housing in New York City. As the city continues to experience a rise in the cost of living, a significant proportion of low to moderate-income residents are finding difficulties in accessing suitable and affordable housing.
          </p>
          <div className="w-full md:w-[310px] flex justify-center mt-8 md:mt-12">
            <button className="rounded text-white py-1 px-3 bg-[#303CA9] text-sm md:text-base">
              See More
            </button>
          </div>
        </div>

        {/* Right Section (Images) */}
        <div data-aos="zoom-out-left" className="right flex flex-1 h-full mt-4 md:mt-0">
          <div className="img flex-1">
            <img src={Img4} alt="img" className="w-full h-full object-cover" />
          </div>
          <div className="img flex-1">
            <img src={Img5} alt="img" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch font-poppins">
        {/* Left Section (Images) */}
        <div data-aos="zoom-out-left" className="right flex w-full md:w-[51.8%] h-full">
          <div className="img flex-1">
            <img
              src={Img6}
              alt="img"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="img flex-1">
            <img
              src={Img7}
              alt="img"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div data-aos="zoom-out-right" className="left bg-partnership-gradient p-4 md:p-7 w-full md:w-[48%] flex flex-col justify-end">
          <h1 className="text-white font-semibold text-center text-lg md:text-xl w-full md:w-[180px] mx-auto">
            CBO
          </h1>
          <p className="text-white capitalize text-sm md:text-base text-center mt-4">
            People's foundation, as a Community-Based Organization (CBO), is a private non-profit entity that has been proven to be effective in serving its community by offering educational and other related services to individuals within the community. As part of its effort to reach out to prospective members citywide in a culturally-sensitive manner, people's foundation has established partnerships with other CBOs. Currently, people's foundation is working closely with a number of CBOs to ensure that all New Yorkers, especially immigrants, have access to health care through the program.
          </p>
          <div className="w-full md:w-[310px] flex justify-center mt-8 md:mt-12">
            <button className="rounded text-white py-1 px-3 bg-[#303CA9] text-sm md:text-base">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;