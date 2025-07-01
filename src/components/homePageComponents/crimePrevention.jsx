import React from "react";
import Img from "../../assets/10.png";
import Img1 from "../../assets/13.png";
import Img2 from "../../assets/30.png";
import Img3 from "../../assets/31.png";

const CrimePrevention = () => {
  return (
<div
  style={{ backgroundImage: `url(${Img})` }}
  className="bg-cover bg-center font-poppins relative py-8 md:py-16 overflow-hidden"
>
  <div className="grid grid-cols-1 md:grid-cols-12 items-center">
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
            data-aos-duration="1000"
          >
            Hate Crime Prevention
          </h1>
          <h1
            className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Educating Communities, <br />
            Preventing Hate Crimes
          </h1>
          <p
            className="pr-2 md:pr-6 mt-4 text-white text-sm md:text-base"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            The program will educate the immigrant community and also the
            general public at large about how to avoid hate crimes and also
            educate them about how to respect each other. To counter this
            mistrust, we must educate communities through outreach, educating
            practitioners and the public, enhancing victim reporting tools, and
            investigating and prosecuting hate crimes committed on the basis of
            a victim's perceived or actual race, color, religion, national
            origin, sexual orientation, gender, gender identity, or disability.
            Program areas, including addressing...
          </p>

          <button
            className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </div>

    {/* Right Column (Images) */}
    <div className="col-span-6 mt-8 md:mt-12">
      <div className="flex justify-center items-center gap-2">
        <div>
          <img
            className="h-[300px] md:h-[400px] mt-0"
            src={Img1}
            alt="abc"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
        <div>
          <img
            className="h-[150px] md:h-[200px]"
            src={Img2}
            alt="abc"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </div>
        <div>
          <img
            className="h-[150px] md:h-[200px]"
            src={Img3}
            alt="abc"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CrimePrevention;