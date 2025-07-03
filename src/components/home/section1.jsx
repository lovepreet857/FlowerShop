import React from "react";
import section1data from "../../json/section1.json";
import { Link } from "react-router-dom";
const section1 = () => {
  return (
    <>
      <div className="container ">
        <div className="grid lg:grid-cols-2 justify-center border-x lg:border-r-0 lg:border-l">
          <div className=" border-r-0 lg:border-r">
            <div className="lg:max-w-[720px]  lg:h-[720px]  p-10 sm:p-[50px] md:p-20 border-b ">
              <div className=" pb-[54px] border-b max-w-[560px]">
                <div className=" flex items-center  text-[40px] lg:text-[67px] leading-[120%] ">
                  <h1 className=" text-[30px] lg:text-[40px] md:text-[67px] leading-[120%] tracking-normal font-semibold">
                    Kyiv <br /> LuxeBouquets
                  </h1>
                  <span className=" ">
                    <img src="src/assets/svg/®.svg" alt="" />
                  </span>
                </div>
                <p className=" text-sm sm:text-lg md:text-lg max-w-[550px] pt-4">
                  Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                  Spread Joy with Our Online Flower Delivery Service
                </p>
              </div>
              <div className="pt-6  max-w-[560px] ">
                <div className=" grid grid-cols-2  justify-between">
                  <img
                    className=" pr-6 border-r "
                    src="src/assets/img/img hero.png"
                    alt="rgtrgt"
                  />
                  <div className="ml-6 flex items-end">
                    <p className=" text-[11px] sm:text-sm">
                      Experience the joy of giving with our modern floral
                      studio. Order online and send fresh flowers, plants and
                      gifts today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:max-w-[720px] w-full justify-items-center  grid grid-cols-2  ">
            {section1data.map((item, index) => (
              <div
                key={index}
                className="flex  lg:border-r w-full justify-center-safe"
              >
                <div className="flex flex-col gap-[52px] md:gap-[109px] justify-center transition-transform duration-500 ease-in-out transform hover:scale-125 ">
                  <div>
                    <h2 className=" text-[26px] md:text-[38px]">
                      {item.text1}
                    </h2>
                  </div>
                  <div className="flex justify-center-safe">
                    <span className=" text-sm md:text-base">{item.text2}</span>
                    <div className="hover:scale-[10px]">
                      <img src={item.svg} alt="" />
                    </div>
                  </div>
                </div>
                 
                <div className="overflow-hidden">
                  <Link to={item.path}>
                  <img  className="transition-transform duration-500 ease-in-out transform hover:scale-125"  src={item.imge1}  alt=""/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default section1;
