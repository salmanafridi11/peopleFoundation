import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/11.png";
import Img2 from "../../assets/12.png";
import Img3 from "../../assets/13.png";
import Img4 from "../../assets/14.png";
import Img5 from "../../assets/15.png";
import Img6 from "../../assets/16.png";

const OurPartners = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative overflow-hidden"
    >
      <div className="h-[60px]"></div>
      <div className="relative">
        <img
        data-aos="zoom-in-up"
          className="absolute right-0 top-[-274px] h-[800px] z-[1] hidden lg:block"
          src={Img1}
          alt="circle"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 pb-16 md:pb-32 ">
        <div className="second-column px-4 md:pr-4 md:col-span-7">
          <div className="flex justify-center md:pl-12">
            <div>
              <h1 data-aos="slide-right" className="font-poppins text-white text-center md:text-left">
                OUR PARTNERSHIP IS OUR STRENGTH
              </h1>
              <h1 data-aos="slide-right" className="font-poppins font-extrabold text-[20px] md:text-[24px] text-white text-center md:text-left">
                Together, We Grow <br className="hidden md:block" /> Stronger
              </h1>
              <p data-aos="slide-right" className="text-[#fff] mt-4 text-center md:text-left">
                We are dedicated to promoting economic growth and stability for
                all residents of New York City. We believe that by connecting
                individuals with good jobs, supporting and strengthening local
                businesses, and fostering vibrant communities, we can create a
                more prosperous and equitable city for all.
              </p>
              <p data-aos="slide-right" className="text-[#fff] mt-3 text-center md:text-left">
                We involve local businesses and anchor institutions to sponsor
                some of our projects by listing their name and logo on
                promotional materials. We will establish marketing collaterals
                that will benefit both parties.
              </p>
              <button data-aos="slide-left" className="mt-4 bg-white text-[#FF0606] px-6 py-2 rounded-full transition-colors block mx-auto md:mx-0">
                Discover
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5 flex justify-center mt-8 md:mt-0">
          <div className="relative z-50">
            <div className="flex justify-center">
            <img data-aos="flip-down" className="h-[250px] md:h-[400px]" src={Img2} alt="abc" />

            </div>
            <img
            data-aos="flip-up"
              className="h-[150px] md:h-[150px] mt-[-40px] md:mt-[-80px] ml-[-10px] md:ml-[-70px]"
              src={Img3}
              alt="abc"
            />
            <img
              data-aos="flip-up"
              className="h-[150px] md:h-[150px] mt-[-150px] md:mt-[-150px] ml-[180px] md:ml-[280px]"
              src={Img4}
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className="h-[100px] md:h-[200px]"></div>
      <div className="md:block hidden">
        <img
          data-aos="flip-up"
          className="absolute top-[60%] h-[200px] md:h-auto"
          src={Img5}
          alt="abc"
        />
        <img
          data-aos="slide-left"
          className="absolute top-[60%] right-0 h-[200px] md:h-[500px]"
          src={Img6}
          alt="abc"
        />
      </div>
    </div>
  );
};

export default OurPartners;