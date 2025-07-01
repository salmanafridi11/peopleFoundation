import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/65.png";
import Img2 from "../../assets/66.png";
import Img3 from "../../assets/34.png";
const Mentoring = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-2 overflow-hidden"
  >
    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
      {/* Left Section */}
      <div
        className="col-span-6 mt-12"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex justify-center">
          <div>
            <img
              className="h-[250px] md:h-[400px] mt-0 ml-16"
              src={Img1}
              alt="abc"
            />
            <img
              className="h-[200px] md:h-[250px] mt-[-132px] md:ml-[292px] ml-[154px]"
              src={Img2}
              alt="abc"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="second-column pr-4 col-span-6 py-16"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="flex justify-start md:pl-12 px-4">
          <div>
            <h1 className="font-poppins text-[#303CA9] font-normal text-center md:text-start">
              U.S. Small Business Administration <br /> Resource Partners -
              Mentoring
            </h1>
            <h1 className="font-poppins font-extrabold text-[24px] text-[#303CA9] text-center md:text-start">
              Simply put, there is no substitute for{" "}
              <br className="hidden md:block" />
              building a solid
              <br className="hidden md:block" /> foundation through{" "}
              <br className="hidden md:block" />
              developing a relationship with <br className="hidden md:block" />
              Counselor(s)/Mentors
            </h1>

            {/* Bullet Points with Animation */}
            <div className="mt-6" data-aos="fade-up" data-aos-duration="1000">
              <ul className="list-disc pl-5 space-y-2">
                <li className="relative">
                  <span className="absolute -left-[20px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  Only 24% of small businesses survive past the initial 5 years.
                </li>
                <li className="relative">
                  <span className="absolute -left-[20px] top-[5px] h-2 w-2 bg-red-500 rounded-full"></span>
                  Mentored businesses are twice as profitable as non-mentored businesses.
                </li>
                <li className="relative">
                  <span className="absolute -left-[20px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  Growth plans
                </li>
                <li className="relative">
                  <span className="absolute -left-[20px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  The success rate of mentored small businesses compared to those without
                  a mentor is stunning: 76%+ of mentored businesses survive past the
                  initial 5 years.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Mentoring;
