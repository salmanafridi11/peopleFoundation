import React from "react";
import Img from "../../assets/101.png";
import Img1 from "../../assets/99.png";
import Img2 from "../../assets/100.png";
import Img3 from "../../assets/34.png";
const DisasterAssistance = () => {
  return (
  <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-12 z-[] overflow-hidden"
      data-aos="fade-in"
    >
      <div className="grid md:grid-cols-12 grid-cols-1 items-center">
        <div className="col-span-6  mt-12" data-aos="fade-right" data-aos-delay="200">
          <div className=" flex justify-center">
            <div>
              <img
                className="md:h-[400px] h-[250px] w-[350px] mt-0 md:ml-16 ml-8"
                src={Img1}
                alt="abc"
                data-aos="zoom-in" data-aos-delay="300"
              />
              <img
                className="md:h-[250px] h-[180px] w-[250px] md:mt-[-132px] mt-[-44px] md:ml-[292px] ml-[80px]"
                src={Img2}
                alt="abc"
                data-aos="zoom-in" data-aos-delay="400"
              />
            </div>
          </div>
        </div>

        <div className="second-column pr-4 col-span-6 py-16" data-aos="fade-left" data-aos-delay="500">
          <div className="flex justify-start md:pl-12 px-4 md:px-0">
            <div>
              <h1 className="font-poppins text-[#FF0606] font-normal" data-aos="fade-up" data-aos-delay="600">
                U.S. Small Business Administration
              </h1>
              <h1 className="font-poppins font-extrabold text-[24px] text-[#FF0606]" data-aos="fade-up" data-aos-delay="700">
                Office of Disaster Assistance
              </h1>
              <h1 className="font-poppins font-extrabold text-[24px] text-[#FF0606]" data-aos="fade-up" data-aos-delay="800">
                The SBA also offers economic injury disaster loans for up to
                $2,000,000 to help meet working capital needs caused by a
                disaster.
              </h1>
              <div className="rounded-tl-2xl w-[320px] rounded-br-xl py-2 px-12 bg-header-gradient text-white font-bold mt-4" data-aos="flip-up" data-aos-delay="900">
                <h1>For Economic Injury</h1>
              </div>
              <div className="flex gap-16 mt-6" data-aos="fade-up" data-aos-delay="1000">
                <ul className="list-disc pl-5 space-y-2 text-white">
                  <li className="relative" data-aos="fade-up" data-aos-delay="1100">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    ✅ For small businesses
                  </li>
                  <li className="relative" data-aos="fade-up" data-aos-delay="1200">
                    <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    ✅ Economic injury assistance is available regardless of <br /> whether the business suffered any property damage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="absolute bottom-[-544px] right-0 z-[-1]" src={Img3} alt="abc" data-aos="fade-up" data-aos-delay="1300"/>
      </div>
    </div>

  );
};

export default DisasterAssistance;
