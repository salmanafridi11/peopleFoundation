import React from "react";
import Img from "../../assets/54.png";
import Img1 from "../../assets/55.png";

import { TbDatabaseDollar, TbSettingsCog } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHeadset, FaIdeal } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { FaPeopleRobbery } from "react-icons/fa6";
const BusinessCnter = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-32 bg-capital-gradient overflow-hidden"
    data-aos="fade-in"
  >
    <div className="">
      <img className="absolute z-[-1] w-full top-0" src={Img1} alt="new" />
    </div>
    <div className="flex justify-center" data-aos="fade-up">
      <div>
        <h1
          className="font-poppins text-[#fff] font-semibold text-center my-2"
          data-aos="fade-down"
        >
          U.S. Small Business Administration
        </h1>
        <h1
          className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
          data-aos="fade-down"
        >
          Small Business Development Centers (SBDC)
        </h1>
        <div className="flex justify-center my-6" data-aos="zoom-in">
          <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
            Services
          </button>
        </div>
  
        <div className="grid md:grid-cols-5 grid-cols-1 px-12 gap-4 mt-16">
          {[
            {
              icon: <TbDatabaseDollar className="h-6 w-6 text-[#ff0606]" />,
              title: "Business Plan Development",
            },
            {
              icon: <TbSettingsCog className="h-6 w-6 text-[#ff0606]" />,
              title: "Manufacturing Assistance Development",
            },
            {
              icon: <BsGraphUpArrow className="h-6 w-6 text-[#ff0606]" />,
              title: "Financial Packaging and Lending Assistance",
            },
            {
              icon: <FaHeadset className="h-6 w-6 text-[#ff0606]" />,
              title: "Exporting and Importing Support",
            },
            {
              icon: <CiDatabase className="h-6 w-6 text-[#ff0606]" />,
              title: "Disaster Recovery Assistance",
            },
            {
              icon: <FaIdeal className="h-6 w-6 text-[#ff0606]" />,
              title: "Procurement and Contracting Aid",
            },
            {
              icon: <FaPeopleRobbery className="h-6 w-6 text-[#ff0606]" />,
              title: "Market Research Assistance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`border border-white p-8 rounded-lg bg-[#BA070A] h-[115px] ${
                index >= 5 ? "mt-8" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-white mt-[-54px] flex justify-center items-center">
                  {item.icon}
                </div>
              </div>
  
              <h1 className="font-semibold text-white text-center">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default BusinessCnter;
