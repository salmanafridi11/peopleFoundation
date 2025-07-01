import React from "react";
import Img from "../../assets/86.png";
import Img1 from "../../assets/87.png";
import Img2 from "../../assets/88.png";
import Img3 from "../../assets/89.png";
import Img4 from "../../assets/90.png";

const ChartDesign = () => {
  return (
    <div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative py-12 z-[] overflow-hidden"
>
  <div className="flex justify-center" data-aos="fade-down">
    <div>
      <h1 className="font-poppins text-[#fff] font-normal text-center">
        U.S. Small Business Administration
      </h1>
      <h1 className="font-poppins font-extrabold text-[24px] text-center text-[#fff]">
        Basic 504 Structure
      </h1>
    </div>
  </div>

  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
    <div className="col-span-6 mt-12" data-aos="fade-right">
      <div className="flex justify-center">
        <div>
          <img className="h-[400px] mt-0 md:ml-16" src={Img1} alt="abc" />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-12" data-aos="zoom-in">
        <div>
          <img className="h-[25px]" src={Img2} alt="image" />
        </div>
        <div>
          <img className="h-[25px]" src={Img3} alt="image" />
        </div>
        <div>
          <img className="h-[25px]" src={Img4} alt="image" />
        </div>
      </div>
    </div>

    <div className="second-column pr-4 col-span-6 py-16" data-aos="fade-left">
      <div className="flex justify-start md:pl-12 px-4 md:px-0">
        <div>
          <div className="flex gap-16 mt-6">
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                50% of project cost is typically financed by lender
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                40% of project cost is financed by CDC/SBA
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                10% of project cost is equity from borrower
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

export default ChartDesign;
