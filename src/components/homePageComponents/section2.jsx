import React from "react";
import Img from "../../assets/4.png";
import Img1 from "../../assets/5.png";
import Img2 from "../../assets/6.png";
import Img3 from "../../assets/7.png";
import Img4 from "../../assets/8.png";

const Section2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className="bg-cover bg-center font-poppins overflow-hidden"
    >
      <div className="h-[100px] md:h-[150px]"></div>
      <div  className="relative">
        <img
        data-aos="slide-right"
          className="absolute left-0 top-[-274px] h-[800px] md:h-[1200px] lg:h-[1600px] z-[-1] hidden sm:block"
          src={Img1}
          alt="circle"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 px-4 md:px-8">
        {/* First column - Images */}
        <div className="md:col-span-12 lg:col-span-7 order-2 md:order-1">
          <div className="flex justify-center">
            <div className="relative">
              <img 
               data-aos="slide-down"
                className="h-auto w-full max-h-[250px] sm:max-h-[300px] md:max-h-[400px] object-contain" 
                src={Img3} 
                alt="abc" 
              />
              <img
                data-aos="slide-up"
                className="h-auto w-full max-h-[250px] sm:max-h-[300px] md:max-h-[400px] object-contain mt-4 md:mt-[-80px] lg:mt-[-132px] md:ml-[100px] lg:ml-[192px]"
                src={Img2}
                alt="abc"
              />
            </div>
          </div>
        </div>
        
        {/* Second column - Text content */}
        <div className="md:col-span-12 lg:col-span-5 order-1 md:order-2 pr-0 md:pr-4 mt-[100px] md:mt-0">
          <h1   data-aos="zoom-in-up" className="font-poppins font-extrabold text-[18px] sm:text-[20px] md:text-[24px] text-center md:text-left">
            REPRESENTING HOPE, INTEGRITY <br className="hidden md:block"></br>& CREDIBILITY
          </h1>
          <p data-aos="zoom-in-up" className="text-[#727272] pr-0 lg:pr-6 mt-4 text-sm md:text-base text-center md:text-left">
            In response to the escalating incidents, we understand the
            importance of creating a safe and equitable community for all. We
            are deeply committed to addressing the problems of criminal activity
            that disproportionately affect ethnic minorities, children, and
            women in People's foundation. Our approach to addressing these
            issues is multifaceted and holistic.
          </p>
          <p data-aos="zoom-in-up" className="text-[#727272] mt-3 pr-0 lg:pr-6 text-sm md:text-base text-center md:text-left">
            Our unwavering dedication to making a real and meaningful impact has
            solidified our reputation as a credible and trustworthy organization
            in the eyes of the community. The cornerstone of our brand is our
            steadfast commitment to improving the lives of those in need th
            through innovative and efficient means. We are cost-committed to
            creating a brighter future for all members of our community.
          </p>
          <div className="flex justify-center md:justify-start"  data-aos="slide-left">
            <button
              className="bg-header-gradient text-white px-6 py-2 rounded hover:bg-indigo-800 transition-colors my-4"
            >
              See More
            </button>
          </div>
          <div className="flex justify-center md:justify-start" >
            <img 
            data-aos="zoom-out-right"
              className="h-auto w-full max-h-[300px] md:max-h-[400px] object-contain" 
              src={Img4} 
              alt="image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;