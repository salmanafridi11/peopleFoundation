import React from "react";
import Img from "../../assets/102.png";
import Img1 from "../../assets/103.png";
import Img2 from "../../assets/104.png";
import Img3 from "../../assets/105.png";
import Img4 from "../../assets/10.png";

const OurTeam = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img4})` }}
      className="bg-cover bg-center font-poppins relative py-12 z-[44] overflow-hidden"
      data-aos="fade-in"
    >
      <div className="head" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-center">Team</h1>
        <h1 className="text-center my-3 font-bold text-[20px] text-[#2E4049]">
          Meet Our Volunteers
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="my-12 flex md:flex-row flex-col justify-center gap-6">
          <div data-aos="zoom-in" data-aos-delay="300">
            <img src={Img} alt="abc" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <img src={Img1} alt="abc" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="500">
            <img src={Img2} alt="abc" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="600">
            <img src={Img3} alt="abc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
