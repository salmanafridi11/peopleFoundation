import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/36.png";
import Img2 from "../../assets/37.png";

const BusinessAdministration = () => {
  return (
<div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative py-8 md:py-12 overflow-hidden"
>
  <div className="grid grid-cols-1 md:grid-cols-12 items-center relative">
    {/* Left Column (Text) */}
    <div
      className="second-column pr-4 col-span-6 py-8 md:py-16"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="flex justify-start pl-4 md:pl-12">
        <div>
          <h1
            className="font-poppins text-[#303CA9] font-semibold text-sm md:text-base"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            U.S. Small Business Administration
          </h1>
          <h1
            className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2 leading-snug"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            The (SBA) helps Americans to start, build, <br /> and grow your
            business
          </h1>
          <p
            className="pr-2 md:pr-6 mt-4 text-white text-sm md:text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            The U.S. Small Business Administration helps make the American dream
            of business ownership a reality. As a go-to resource and voice for
            small businesses with the SBA, backed by the strength of the federal
            government, the SBA empowers entrepreneurs and small business owners
            with the resources and support they need to start and grow their
            business.
          </p>

          <button
            className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base hover:bg-[#1f2a7c] shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </div>

    {/* Right Column (Images) */}
    <div
      className="col-span-6 mt-8 md:mt-12 relative"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="flex justify-center">
        <div className="relative">
          <img
            className="h-[300px] md:h-[400px] mt-0 ml-4 md:ml-16 drop-shadow-lg"
            src={Img1}
            alt="abc"
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <img
            className="h-[300px] md:h-[400px] mt-[-80px] md:mt-[-132px] ml-[120px] md:ml-[192px] drop-shadow-lg"
            src={Img2}
            alt="abc"
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default BusinessAdministration;