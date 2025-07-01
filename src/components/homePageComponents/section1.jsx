import React from "react";
import Img from "../../assets/2.png";
import Img1 from "../../assets/3.png";
const Section1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className=" bg-cover bg-center font-poppins py-32 "
    >
      <div className="flex items-center justify-center">
        <div className="container max-w-[1400px] px-12">
          <h1  data-aos="slide-right" className="md:text-[70px] text-[35px] font-extrabold leading-[50px] md:leading-[80px] text-white ">
            {" "}
            Empowering <br /> People, Transforming Lives.{" "}
          </h1>
          <div data-aos="slide-right" className="flex mt-3 items-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <hr className="w-[244px] "></hr>
            <h1 className="rounded-full uppercase font-poppins text-white border px-2 py-1 md:text-[12px] text-[10px] tracking-[5px]">
              {" "}
              Below poverty line{" "}
            </h1>
          </div>
          <div data-aos="zoom-in-up" className="flex gap-4 items-center my-6">
            {" "}
            <button className="bg-gradient-to-b from-[#051045] to-transparent text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors">
              {" "}
              DONATE{" "}
            </button>{" "}
            <button className="bg-white from-[#051045] to-transparent text-black px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors">
              {" "}
              Discover{" "}
            </button>{" "}
          </div>
{/* CARD1 */}
          <div className="relative z-[9999]">
            <div className="flex md:flex-row flex-col md:gap-0 gap-1 justify-center mb-[-204px] ">
              <div data-aos="slide-up" className="py-6 px-6 bg-gradient-to-b from-[#313DAA] to-transparent to-[120%] font-poppins max-w-[330px] flex justify-between flex-col">
                <h1 className="mt-3 text-white font-semibold text-[20px]">
                  {" "}
                  Education{" "}
                </h1>
                <p className="text-[14px] text-white tracking-wider">
                  {" "}
                  Below Poverty Line is enchmark used by the government of India
                  economic disadvantage.{" "}
                </p>
                <div>
                  {" "}
                  <button className=" mt-3 bg-white text-black px-6 py-2 rounded-full  transition-colors">
                    {" "}
                    Discover{" "}
                  </button>{" "}
                </div>
              </div>

              <div data-aos="slide-up" className="py-6 px-4 bg-[linear-gradient(180deg,#3743AC_9.69%,rgba(255,0,4,0.52)_121.37%)] font-poppins max-w-[330px] flex justify-between flex-col">
                <h1 className="mt-3 text-white font-semibold text-[20px]">
                  {" "}
                  Become a Volunteer{" "}
                </h1>
                <p className="text-[14px] text-white tracking-wider">
                  {" "}
                  Below Poverty Line is enchmark used by the government{" "}
                </p>
                <p className="uppercase underline mt-2 text-center text-white font-semibold text-[14px]">
                  {" "}
                  Join Organization{" "}
                </p>
              </div>
              <div data-aos="slide-up" className="max-w-[330px] ">
                {" "}
                <img
                  className="h-[250px] w-[330px]"
                  src={Img1}
                  alt="abc"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
