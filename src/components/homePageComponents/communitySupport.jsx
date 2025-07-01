import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/7.png";
import Img2 from "../../assets/30.png";
import Img3 from "../../assets/34.png";

const CommunitySupport = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-8 md:py-12 overflow-hidden"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 items-center">
      {/* Left Column (Images) */}
      <div
        className="col-span-6 mt-8 md:mt-12"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex justify-center">
          <div className="relative overflow-hidden">
            <img
              className="h-[300px] md:h-[400px] mt-0 ml-4 md:ml-16"
              src={Img1}
              alt="abc"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <img
              className="h-[300px] md:h-[400px] mt-[-80px] md:mt-[-132px] ml-[120px] md:ml-[292px]"
              src={Img2}
              alt="abc"
              data-aos="fade-up"
              data-aos-delay="500"
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
              data-aos-delay="200"
            >
              AAPI Community Support
            </h1>
            <h1
              className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Combating AAPI Hate, Inequities & <br /> Advocating for Inclusion
            </h1>
            <p
              className="text-[#000] pr-2 md:pr-6 mt-4 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              We will address the horrific surge in AAPI hate crimes, the
              disproportionate impacts of COVID-19, and the historic underfunding
              of AAPI communities. Also address the needs of the AAPI community
              and examine critical issues like language access among state
              agencies, departments, and commissions.
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
        <div className="relative mt-8 md:mt-0 overflow-hidden" data-aos="fade-up" data-aos-delay="1000">
          <img className="absolute w-full md:w-auto" src={Img3} alt="abc" />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CommunitySupport;