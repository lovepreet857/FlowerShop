import React from "react";
import Insta from "../../assets/svg/Linkinsta.svg";
import Pinterest from "../../assets/svg/LinkBlock.svg";
import Twitter from "../../assets/svg/LinkBlocktwiter.svg";
import Telegram from "../../assets/svg/LinkBlocktelegram.svg";
import Facebook from "../../assets/svg/Linkfacboock.svg";
const storyabout = () => {
  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2  border-x ">
          <div className="lg:border-r sm:py-[117px] md:py-[167px] py-[98px] px-4 sm:px-[127px] md:px-[103px]">
            <div className="flex flex-col  items-center sm:gap-4 gap-6">
              <h1 className=" text-[34px] sm:text-[50px] font-semibold leading-[120%]">
                Our Story
              </h1>
              <img
                className=" w-[73px] sm:w-[102px] h-[22px] sm:h-[31px]"
                src="src/assets/svg/About.svg"
                alt=""
              />
              <h1 className="text-[34px] sm:text-[50px] font-semibold leading-[120%]">
                Kyiv LuxeBouquets
              </h1>
              <p className="font-medium text-lg leading-[140%] text-center italic">
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread Joy with Our Online Flower Delivery Service
              </p>
            </div>
            <div className="grid grid-cols-5 gap-8 justify-center mt-[64px]">
             <a href="https://www.instagram.com"> <img src={Insta} alt="" /></a>

            <a href="https://www.pinterest.com"> <img src={Pinterest} alt="" /></a>
            <a href="https://www.facebook.com">  <img src={Facebook} alt="" /></a>
             <a href="https://twitter.com">  <img src={Twitter} alt="" /></a>
             <a href="https://web.telegram.org"> <img src={Telegram} alt="" /></a>
            </div>
          </div>

          <div className="border-t lg:border-t-0">
            <img
              className="lg:max-w-[720px] w-full h-full"
              src="src/assets/img/Heroimg.png"
              alt=""
            />
          </div>
        </div>
        <div className=" py-10 px-4 sm:p-20 flex  flex-col items-center text-center border-x border-t">
            <p className="pb-6 text-sm font-medium leading-[120%]">OUR STORY</p>
            <h1 className="pb-4 text-[38px] font-medium leading-[120%]">Our Founder's Passion </h1>
            <p className="leading-[140%] text-base font-normal max-w-[638px]">
              Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
              goal of bringing unique and exquisite bouquets to the people of
              Kyiv. Natalia has always had a passion for flowers and design, and
              his vision was to create a local floral studio that would
              specialize in the creation and delivery of fresh, beautiful, and
              distinctive bouquets.
            </p>
        </div>
      </div>
    </>
  );
};

export default storyabout;
