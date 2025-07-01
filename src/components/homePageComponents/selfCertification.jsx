import React from 'react'
import Img from "../../assets/10.png";
import Img1 from "../../assets/97.png";
import Img2 from "../../assets/98.png";
const SelfCertification = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-12 z-[] overflow-hidden"
    data-aos="fade-in"
  >
    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
      <div className="col-span-6 mt-12" data-aos="fade-right" data-aos-delay="200">
        <div className="flex justify-center">
          <div>
            <img className="md:h-[400px] h-[200px] md:w-[350px] mt-0 ml-16" src={Img1} alt="abc" data-aos="zoom-in" data-aos-delay="300"/>
            <img
              className="md:h-[250px] h-[190px] w-[250px] mt-[-132px] md:ml-[292px]"
              src={Img2}
              alt="abc"
              data-aos="zoom-in" data-aos-delay="400"
            />
          </div>
        </div>
      </div>

      <div className="second-column pr-4 col-span-6 py-16" data-aos="fade-left" data-aos-delay="500">
        <div className="flex justify-start md:pl-12 px-4">
          <div>
            <h1 className="font-poppins text-[#303CA9] font-normal" data-aos="fade-up" data-aos-delay="600">
            Government Contracting
            </h1>
            <h1 className="font-poppins font-extrabold text-[24px] text-[#303CA9]" data-aos="fade-up" data-aos-delay="700">
            Capital - SBA LOAN PROGRAMS
            </h1>
            <div className="rounded-tl-2xl w-[320px] rounded-br-xl py-2 px-12 bg-transparent border-white border text-white font-bold mt-4" data-aos="flip-up" data-aos-delay="800">
            <h1>Self-Certifications & Goals</h1>
            </div>
            <div className="flex gap-16 mt-6" data-aos="fade-up" data-aos-delay="900">
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li className="relative" data-aos="fade-up" data-aos-delay="1000">
                  <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  Small Business – NAICS code: 23%
                </li>
                <li className="relative" data-aos="fade-up" data-aos-delay="1100">
                  <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  Veteran-Owned Business | Service-Disabled 
                  Veteran-Owned Business: 3%
                </li>
                <li className="relative" data-aos="fade-up" data-aos-delay="1200">
                  <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  Small Disadvantaged Businesses (SDB): 5%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default SelfCertification