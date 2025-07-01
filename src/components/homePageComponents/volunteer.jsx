import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/24.png";
import Img2 from "../../assets/25.png";
import Img3 from "../../assets/16.png";

const Volunteer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-center">
        {/* Left Column (Images) */}
        <div className="col-span-6 mt-12">
          <div className="flex justify-center">
            <div className="relative">
              <img
               data-aos="flip-up"
                className="h-[300px] md:h-[400px] mt-0 ml-4 md:ml-16"
                src={Img2}
                alt="abc"
              />
              <img
              data-aos="flip-down"
                className="h-[220px] md:h-[400px] mt-[-100px] md:mt-[-132px] ml-[120px] md:ml-[192px]"
                src={Img1}
                alt="abc"
              />
            </div>
          </div>
          <div className="relative py-16 md:py-32 md:block hidden">
            <img
            data-aos="slide-right"
              className="absolute z-[-1] top-[-150px] md:top-[-254px] w-full md:w-auto"
              src={Img3}
              alt="abc"
            />
          </div>
        </div>

        {/* Right Column (Text) */}
        <div className="second-column pr-4 col-span-6 py-8 md:py-16">
          <div className="flex justify-start pl-4 md:pl-12">
            <div>
              <h1 data-aos="zoom-out-left" className="font-poppins text-[#303CA9] font-semibold text-sm md:text-base">
                VOLUNTEER WITH US
              </h1>
              <h1 data-aos="zoom-out-left" className="font-poppins font-extrabold text-[20px] md:text-[24px] text-[#303CA9] mt-2">
                UNLOCKING ECONOMIC POTENTIAL IN <br /> CENTRAL BROOKLYN
              </h1>
              <p data-aos="zoom-out-left" className="text-[#000] pr-2 md:pr-6 mt-4 text-sm md:text-base">
                Volunteering with People's foundation (P.F) is a great way to
                give back to your community and make a positive impact on the
                lives of local residents and businesses. P.F is committed to
                creating economic security for all New Yorkers by connecting
                them to good jobs, creating stronger businesses, and building a
                fairer economy in neighborhoods across the five boroughs.
              </p>
              <p data-aos="zoom-out-left" className="text-[#000] mt-3 pr-2 md:pr-6 text-sm md:text-base">
                As a volunteer with P.F, you will have the opportunity to work
                on a variety of projects that support our mission. From working
                with local businesses to improve their operations, to helping
                residents access educational and career opportunities, there are
                many ways to get involved.
              </p>
              <p data-aos="zoom-out-left" className="text-[#000] mt-3 pr-2 md:pr-6 text-sm md:text-base">
                If you're interested in community development, you can help us
                create conditions that allow local business to grow and thrive.
                This can include working on projects that beautify commercial
                corridors, advocate for public and private investments, and
                attract new businesses to the area.
              </p>
              <p data-aos="zoom-out-left" className="text-[#000] mt-3 pr-2 md:pr-6 text-sm md:text-base">
                If you're passionate about education, you can join our efforts
                to ensure that primary and secondary education is accessible to
                every child. This can include working with our charity-driven
                schools that provide high-quality education free of cost. No
                matter your interests, there is a volunteer opportunity that's
                right for you at P.F. Join us today and make a difference in the
                lives of your fellow New Yorkers.
              </p>
              <button data-aos="flip-up" className="mt-3 bg-[#303CA9] text-[#fff] px-6 py-2 rounded transition-colors text-sm md:text-base">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;