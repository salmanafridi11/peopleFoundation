import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/28.png";
import Img2 from "../../assets/29.png";

const LiteracyProgram = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-8 md:py-12 overflow-hidden"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 items-center">
      {/* Left Column (Images) */}
      <div className="col-span-6 mt-8 md:mt-12">
        <div className="flex justify-center">
          <div className="relative">
            <img
              className="h-[300px] md:h-[400px] mt-0 ml-4 md:ml-16"
              src={Img2}
              alt="abc"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <img
              className="h-[150px] md:h-[250px] mt-[-80px] md:mt-[-132px] ml-[120px] md:ml-[192px]"
              src={Img1}
              alt="abc"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
  
      {/* Right Column (Text) */}
      <div
        className="second-column pr-4 col-span-6 py-8 md:py-16"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="flex justify-start pl-4 md:pl-12">
          <div>
            <h1
              className="font-poppins text-[#303CA9] font-semibold text-sm md:text-base"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Adult Literacy Program
            </h1>
            <h1
              className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Boosting Immigrant Literacy for a <br /> Brighter Future
            </h1>
            <p
              className="text-[#000] pr-2 md:pr-6 mt-4 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              This program will improve Immigrants' literacy skills, generating
              life-changing results through a tailored and holistic approach to
              adult learning.
            </p>
            <p
              className="text-[#000] mt-3 pr-2 md:pr-6 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Creating an individualized learning plan for each student, employing
              a flexible education model offering 8-week terms to help students
              earn credits faster while maintaining small class sizes and providing
              tutoring support.
            </p>
            <button
              className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default LiteracyProgram;