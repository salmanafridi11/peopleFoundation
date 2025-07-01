import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/69.png";
import Img2 from "../../assets/70.png";
const Benefits = () => {
  return (
<div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative py-12 z-[] overflow-hidden"
>
  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
    <div
      className="col-span-6 mt-12"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div className="flex justify-center">
        <div>
          <img
            className="h-[250px] md:h-[400px] mt-0 md:ml-16 ml-5"
            src={Img1}
            alt="abc"
          />
          <img
            className="h-[200px] md:h-[250px] md:mt-[-132px] mt-[-80px] md:ml-[292px]"
            src={Img2}
            alt="abc"
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>

    <div
      className="second-column pr-4 col-span-6 py-16"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="flex justify-start md:pl-12 px-4">
        <div>
          <h1
            className="font-poppins text-[#303CA9] font-normal"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            U.S. Small Business Administration
          </h1>
          <h1
            className="font-poppins font-extrabold text-[24px] text-[#303CA9]"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Capital - BENEFITS OF SBA LENDING
          </h1>
          <div className="flex md:gap-16 gap-0 mt-6">
            <ul
              className="list-disc pl-5 space-y-2"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                Longer maturity on term loans
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                Easier qualification than conventional loans
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                Flexible use of proceeds for various business needs
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                Banks use their own process and documentation
              </li>
            </ul>
            <ul
              className="list-disc pl-5 space-y-2"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                Lower equity injection required
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                Streamlined application process
              </li>
              <li className="relative">
                <span className="absolute -left-[18px] top-2 h-2 w-2 bg-red-500 rounded-full"></span>
                SBA guarantee fees can be financed into the loan
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

export default Benefits;
