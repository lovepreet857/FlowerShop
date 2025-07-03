import React from "react";
import contentImg from "../../assets/img/wedding.png";
const section6 = () => {
  return (
    <>
      <div className="container">
        <div
          className=" bg-cover bg-center h-[720px] max-w-[1440px] w-full flex items-center justify-center"
          style={{ backgroundImage: `url(${contentImg})` }}
        >
          <div className="max-w-[586px] w-full text-white flex flex-col items-center px-4 ">
            <h5 className="font-medium text-sm leading-[120%] uppercase pb-6">service</h5>
            <h4 className=" text-[30px] md:text-[50px] font-semibold leading-[120%] pb-4">Wedding & Event Decor</h4>
            <p className="text-center font-medium  text-sm md:text-lg mb-[30px] dm:mb-[64px]">
              Let our team of expert florists and designers create stunning,
              on-trend floral décor for your special day. Trust us to bring your
              vision to life.
            </p>
           <button className="relative cursor-pointer overflow-hidden group pt-[19px] pb-[17px] md:max-w-[175px] max-w-[342px] w-full bg-transparent border font-medium text-base leading-[120%] tracking-[3%] uppercase">
   <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-full z-0"></span>
  <span className="relative z-10 text-white">
    Inquire Now
  </span>
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default section6;
