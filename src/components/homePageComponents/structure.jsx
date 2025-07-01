import React from "react";
import Img from "../../assets/54.png";
import Img1 from "../../assets/91.png";
import Img2 from "../../assets/31.png";
const Strucutre = () => {
  return (
    <div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative py-12 z-[] overflow-hidden"
>
  <div className="grid md:grid-cols-12 grid-col-1 items-center">
    {/* Images Section */}
    <div
      className="col-span-6 mt-12"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div className="flex justify-center">
        <div>
          <img
            className="h-[250px] md:h-[400px] mt-0 md:ml-16"
            src={Img1}
            alt="abc"
            data-aos="zoom-in"
            data-aos-delay="400"
          />
          <img
            className="h-[250px] md:mt-[-132px] mt-[-100px] md:ml-[292px] ml-[100px]"
            src={Img2}
            alt="abc"
            data-aos="zoom-in"
            data-aos-delay="600"
          />
        </div>
      </div>
    </div>

    {/* Text Content Section */}
    <div
      className="second-column pr-4 col-span-6 py-16"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div className="flex justify-start md:pl-12 px-4 md:px-0">
        <div>
          <h1
            className="font-poppins text-[#303CA9] font-normal"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            U.S. Small Business Administration
          </h1>
          <h1
            className="font-poppins font-extrabold text-[24px] text-[#303CA9]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Capital - BENEFITS OF SBA LENDING
          </h1>
          <div
            className="rounded-tl-2xl flex justify-start rounded-br-xl py-4 px-12 bg-header-gradient text-white font-bold mt-4"
            data-aos="flip-left"
            data-aos-delay="600"
          >
            <h1>BASIC 504 STRUCTURE</h1>
          </div>

          <div className="flex gap-16 mt-6">
            <ul className="list-disc pl-5 space-y-2">
              {[
                "50% of project cost is typically financed by lender",
                "40% of project cost is financed by CDC/SBA",
                "10% of project cost is equity from borrower",
                "Lender sets terms and conditions on its loan; uses own forms and policies",
                "CDC handles all SBA paperwork",
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={`${700 + index * 200}`}
                >
                  <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Strucutre;
