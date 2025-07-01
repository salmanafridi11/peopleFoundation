import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/92.png";
import Img2 from "../../assets/93.png";
const BenefitsOF504Program = () => {
  return (
    <div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative md:py-16 py-8 overflow-hidden"
>
  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
    <div
      className="second-column pr-4 col-span-6 py-16"
      data-aos="fade-right"
    >
      <div className="flex justify-start md:pl-12 px-2 md:px-0">
        <div>
          <h1
            className="font-poppins text-white font-normal md:text-start text-center"
            data-aos="fade-down"
          >
            Capital - SBA LOAN PROGRAMS
          </h1>

          <h1
            className="font-poppins font-extrabold text-[24px] text-white md:text-start text-center"
            data-aos="fade-up"
          >
            Capital - SBA LOAN PROGRAMS - for Exporters
          </h1>

          <div
            className="rounded-tl-2xl flex justify-start rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold mt-4"
            data-aos="zoom-in"
          >
            <h1>BENEFITS OF 504 PROGRAM</h1>
          </div>

          <div
            className="grid md:grid-cols-2 grid-cols-1 px-12 gap-12 mt-16 text-[16px]"
            data-aos="fade-up"
          >
            {["90% financing", "Mortgage recording tax savings", "Fixed below market rate on SBA portion", "Working Capital", "Up to 25 Year term on real estate", "Lender holds first lien position", "CDC Processes all SBA paperwork"].map((item, index) => (
              <div
                key={index}
                className="rounded-tl-2xl text-xs rounded-br-xl py-4 px-12 bg-[#303CA9] text-white font-bold md:text-start text-center"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="col-span-6 mt-12" data-aos="fade-left">
      <div className="flex justify-center">
        <div>
          <img
            className="h-[200px] md:h-[400px] md:w-[400px] mt-0 md:ml-16 ml-0"
            src={Img1}
            alt="abc"
            data-aos="zoom-in"
          />
          <img
            className="h-[200px] md:mt-[-200px] mt-[-100px] md:ml-[-12px] ml-[54px]"
            src={Img2}
            alt="abc"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default BenefitsOF504Program;
