import React from "react";
import Img7 from "../../assets/106.png";
import Img10 from "../../assets/55.png";
import Img11 from "../../assets/107.png";

import Img12 from "../../assets/108.png";

const SecondLastSection = () => {
  return (
    <div
      //    style={{ backgroundImage: `url(${Img7})` }}
      className="bg-cover bg-center font-poppins relative md:py-32 py-16 bg-white overflow-hidden "
      data-aos="fade-in"
    >
      <div
        className="hidden md:block"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <img
          className="absolute w-full top-0 h-[600px]"
          src={Img10}
          alt="boxes"
        />
      </div>

      <div className="flex justify-center">
        <div
          className="flex md:flex-row flex-col rounded-xl max-w-[800px]  gap-4 items-center justify-center mt-12 relative bg-center bg-cover py-12 px-12"
          style={{ backgroundImage: `url(${Img7})` }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className=" mt-2 " data-aos="fade-right" data-aos-delay="400">
            <div className="px-2 ">
              <div className="flex justify-center my-3 gap-4 md:p-5 p-2">
                <div className="my-4">
                  <h1 className="text-white font-bold ">
                    Lorem Ipsum is simply dummy text of the{" "}
                  </h1>
                  <p className="text-white font-normal my-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                    <br className="hidden md:block" /> Lorem Ipsum has been the
                    industry's <br className="hidden md:block" />
                    standard dummy text ever since the 1500s,
                  </p>
                  <button className="py-2 px-4  mt-4 text-white text-[14px] bg-black rounded-xl">
                    View Blogs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <img src={Img11} alt="abc" />
          </div>
          <div
            className="md:mt-32 mt-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={Img12} alt="abc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLastSection;
