import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/26.png";
import Img2 from "../../assets/27.png";
import Img3 from "../../assets/16.png";

const Whypartner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative py-8 md:py-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center">
        {/* Left Column (Text) */}
        <div className="second-column pr-4 col-span-6 py-8 md:py-16">
          <div className="flex justify-start pl-4 md:pl-12">
            <div>
              <h1 data-aos="zoom-out-left" className="font-poppins text-[#303CA9] font-semibold text-sm md:text-base">
                WHY PARTNER WITH US
              </h1>
              <h1 data-aos="zoom-out-left" className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2">
                UNLOCKING ECONOMIC POTENTIAL
              </h1>
              <p data-aos="zoom-out-left" className="pr-2 md:pr-6 mt-4 text-sm md:text-base text-white">
                Collaborating with People's Foundation (P.F) is a great way for
                your business to not only give back to the community but also to
                benefit from the various initiatives and programs that P.F
                offers. By working together, P.F can provide your business with
                valuable resources and support to help it grow and thrive. By
                joining forces with P.F, your business can gain access to a
                network of local merchants and anchor institutions, allowing for
                long-term business and personal ties, enhanced professional ties
                and connections, shared technical support, business growth
                guidance, and access to best practices and lessons.
                Additionally, P.F hosts events such as an expanded vendor pop-up
                market in March and the Ramadan festival in April, providing an
                opportunity for businesses, especially restaurants, to activate
                their brand, increase footfall, and attract new customers
                through marketing and advertising efforts. By collaborating with
                P.F, your business can gain valuable exposure and support to
                drive growth and success in the community.
              </p>

              <button data-aos="flip-up" className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Images) */}
        <div className="col-span-6 mt-8 md:mt-12">
          <div className="flex justify-center">
            <div className="relative">
              <img
              data-aos="slide-left"
                className="h-[300px] md:h-[300px] mt-0 ml-4 md:ml-16"
                src={Img1}
                alt="abc"
              />
              <img
                data-aos="slide-left"
                className="h-[150px] md:h-[200px] mt-[-80px] md:mt-[-132px] ml-[120px] md:ml-[192px]"
                src={Img2}
                alt="abc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whypartner;