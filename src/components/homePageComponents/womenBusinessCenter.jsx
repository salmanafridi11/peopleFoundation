import React from 'react'
import Img from "../../assets/63.png";
import Img1 from "../../assets/55.png";

import Img6 from "../../assets/56.png";
import Img7 from "../../assets/57.png";
import Img8 from "../../assets/58.png";
import Img9 from "../../assets/59.png";
import Img10 from "../../assets/60.png";
import Img11 from "../../assets/61.png";
import Img12 from "../../assets/62.png";

const WomenBusinessCenter = () => {
  return (
    <div
    style={{ backgroundImage: `url(${Img})` }}
    className="bg-cover bg-center font-poppins relative py-12 bg-capital-gradient overflow-hidden"
    data-aos="fade-in"
  >
    <div>
      <img className="absolute z-[-1] w-full top-0" src={Img1} alt="new" />
    </div>
    <div className="flex justify-center">
      <div>
        <h1
          className="font-poppins text-[#fff] font-semibold text-center my-2"
          data-aos="fade-down"
        >
          U.S. Small Business Administration
        </h1>
        <h1
          className="font-poppins font-extrabold text-[24px] text-[#fff] mt-6 text-center"
          data-aos="fade-up"
        >
          Women’s Business Centers (WBC)
        </h1>
        <div className="flex justify-center my-6" data-aos="zoom-in">
          <button className="rounded py-2 px-4 bg-[#ff0606] text-white">
            Services
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center flex-wrap gap-6 mt-4">
      {[Img6, Img7, Img8, Img9, Img10, Img11, Img12].map((img, index) => (
        <div
          key={index}
          className="mt-4 md:mt-8"
          data-aos="flip-left"
          data-aos-delay={index * 100}
        >
          <img
            className="w-[150px] md:w-[200px] lg:w-[250px]"
            src={img}
            alt={`img-${index}`}
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default WomenBusinessCenter