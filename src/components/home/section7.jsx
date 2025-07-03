import google from "../../assets/svg/google.svg";
import leftArrow from "../../assets/svg/leftarrow.svg";
import rightArrow from "../../assets/svg/rightarrow.svg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./swiper.css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const section7 = () => {
  const swiperRef = useRef();

  const data = [{}, {}, {}, {}];
  return (
    <>
      <div className="container">
        <div className="py-[80px] border-x">
          <div className="flex flex-col items-center gap-4 mb-[64px]">
            <div className="flex flex-col items-center gap-6 max-w-[350px] w-full ">
              <div className="flex flex-col items-center gap-2">
                <a href="https://pay.google.com"><img src={google} alt="google" /></a>
                <p className="text-sm font-medium leading-[120%] uppercase">
                  Reviews
                </p>
              </div>
              <h4 className=" text-black font-semibold text-[25px] md:text-[50px] leading-[120%]">
                Our Clients say
              </h4>
            </div>
            <div className="flex  max-w-[1280px] w-full">
              <img
                onClick={() => swiperRef.current?.slidePrev()}
                src={leftArrow}
                alt=""
              />
              <Swiper
                cssMode={true}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                navigation={true}
                pagination={true}
                loop={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {data.map((item, index) => (
                  <SwiperSlide>
                    <div key={index + item} className="relative">
                      <div className="text-center  px-6 pb-[32px]">
                        <p className="italic text-base md:text-[28px]  leading-[120%] font-normal">
                          “Ordered flowers online and they were the best
                          bouquet! Impressed everyone around. Highly recommend
                          this flower shop!”
                        </p>
                        <p className="pt-4 text-base font-medium leading-[120%]">
                          – Ronald Richards
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <img
                onClick={() => swiperRef.current?.slideNext()}
                src={rightArrow}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center ">
          <button className=" cursor-pointer relative overflow-hidden group border px-6 pt-[19px] pb-[17px]">
  <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-full z-0"></span>
  <p className="relative z-10 font-medium text-base leading-[120%] tracking-[3%] text-black group-hover:text-white">
    Read reviews
  </p>
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default section7;
