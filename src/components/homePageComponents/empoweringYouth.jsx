import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/26.png";
import Img2 from "../../assets/17.png";
import Img3 from "../../assets/35.png";

const EmpoweringYouth = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-8 md:py-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 items-center relative overflow-hidden">
      {/* Left Column (Text) */}
      <div
        className="second-column pr-4 col-span-6 py-8 md:py-16"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex justify-start pl-4 md:pl-12">
          <div>
            <h1
              className="font-poppins text-[#303CA9] font-semibold text-sm md:text-base"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Youth Build Project Initiative
            </h1>
            <h1
              className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Empowering Youth for Education, <br /> Careers & Community
              Leadership
            </h1>
            <p
              className="pr-2 md:pr-6 mt-4 text-white text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              These young people will pursue their education, prepare for future
              careers, and grow into community leaders building brighter futures
              for themselves and their neighborhoods. We will build the skillsets
              and mindsets that lead to lifelong learning, livelihood, and
              leadership. Our vision is to strive to create a world where all young
              people are seen for their potential and power to transform themselves
              and their communities.
            </p>
  
            <button
              className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base hover:bg-[#1f2a7c]"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              DONATE NOW
            </button>
          </div>
        </div>
  
        {/* Bottom Image */}
        <div className="relative mt-8 md:mt-0" data-aos="fade-up" data-aos-delay="1000">
          <img
            className="absolute top-[100px] md:top-[210px] z-[0] w-full md:w-auto"
            src={Img3}
            alt="img"
          />
        </div>
      </div>
  
      {/* Right Column (Images) */}
      <div
        className="col-span-6 mt-8 md:mt-12 relative"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="flex justify-center">
          <div className="relative">
            <img
              className="h-[300px] md:h-[400px] mt-0 ml-4 md:ml-16"
              src={Img1}
              alt="abc"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <img
              className="h-[300px] md:h-[400px] mt-[-80px] md:mt-[-132px] ml-[120px] md:ml-[192px]"
              src={Img2}
              alt="abc"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default EmpoweringYouth;