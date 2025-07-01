import React from 'react'
import Img from "../../assets/10.png";
import Img1 from "../../assets/71.png";
import Img2 from "../../assets/72.png";
const Proceeds = () => {
  return (
<div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative py-16 overflow-hidden"
>
  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
    {/* Left Column */}
    <div
      className="second-column pr-4 col-span-6 py-16"
      data-aos="fade-right"
    >
      <div className="flex justify-start pl-12">
        <div>
          <h1
            className="font-poppins text-white font-normal text-center md:text-start"
            data-aos="fade-up"
          >
            U.S. Small Business Administration <br />
          </h1>

          <h1
            className="font-poppins font-extrabold text-[24px] text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Capital - SBA LOAN PROGRAMS - Eligible Uses of Proceeds
          </h1>

          <div
            className="grid md:grid-cols-2 grid-cols-1 px-12 gap-12 mt-16 text-[16px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              "📦 Inventory",
              "🛠️ Supplies",
              "🏗️ Raw Materials",
              "💰 Working Capital",
              "📉 Debt Refinancing",
              "🏡 Real Estate & Construction",
              "🔧 Leasehold Improvements",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-tl-2xl text-center rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold"
                data-aos="flip-left"
                data-aos-delay={index * 200}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div
      className="col-span-6 mt-12"
      data-aos="fade-left"
      data-aos-delay="500"
    >
      <div className="flex justify-center">
        <div>
          <img
            className="h-[200px] md:h-[400px] mt-0 ml-16"
            src={Img1}
            alt="abc"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
          <img
            className="h-[200px] md:mt-[-200px] mt-[-80px] md:ml-[-12px]"
            src={Img2}
            alt="abc"
            data-aos="zoom-in"
            data-aos-delay="800"
          />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Proceeds