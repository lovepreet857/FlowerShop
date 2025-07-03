import React from "react";
import { Link } from "react-router-dom";
import Insta from "../../assets/svg/Instagram.svg";
import Pinterest from "../../assets/svg/Pinterest.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import Telegram from "../../assets/svg/Telegram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
// import Footer from "../../json/footer.json";
const footer = () => {
  return (
    <>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border">
          <div className="p-10 border-r ">
            <p>
              Remember to offer beautiful flowers from Kyiv LuxeBouquets
              Valentines Day, Mothers Day, Christmas... Reminds you 7 days
              before. No spam or sharing your address
            </p>
            <div className="py-[19px] pl-4 border mt-6">
              <input
                className=" outline-none"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <button className="cursor-pointer pt-[19px] pb-[17px] w-full text-center border bg-black text-white mt-4">
              Remind
            </button>
          </div>
          <div className=" flex flex-col gap-6 p-10 border-r">
            <p className="cursor-pointer w-[280px] font-medium text-[21px] leading-[120%] text-[#808080]">
              Contact Us
            </p>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer font-normal text-sm leading-[120%] tracking-[2.5%]  ">
                Address
              </p>
              <p className=" cursor-pointer font-medium text-sm sm:text-base leading-[120%] tracking-[2.5%]">
                15/4 Khreshchatyk Street, Kyiv
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-normal text-sm leading-[120%] tracking-[2.5%] ">
                Phone
              </p>
              <p className="font-medium text-sm sm:text-base leading-[120%] tracking-[2.5%]">
                +380980099777
              </p>
            </div>
            <div className="max-w-[280px] w-full">
              <p className="font-normal text-sm leading-[120%] tracking-[2.5%] pb-2 ">
                General Enquiry:
              </p>
              <p className="font-medium text-sm sm:text-base leading-[120%] tracking-[2.5%]">
                Kiev.Florist.Studio@gmail.com
              </p>
            </div>
            <div>
              <p className="cursor-pointer font-normal text-sm leading-[120%] tracking-[2.5%] pb-6 ">
                Follow Us
              </p>
              <div className="flex max-w-[248px] w-full justify-between">
                <a href="https://www.instagram.com">
                  <img src={Insta} alt="Insta" />
                </a>

                <a href="https://www.pinterest.com">
                  <img src={Pinterest} alt="Pinterest" />
                </a>
                <a href="https://www.facebook.com">
                
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://twitter.com">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://web.telegram.org">
                  
                  <img src={Telegram} alt="Telegram" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:p-10 py-10 px-4 border-b  flex flex-col gap-6 w-full border-r ">
            <Link to={"/"}>
              <p className="cursor-pointer w-[280px] font-medium text-[21px] leading-[120%] text-[#808080]">
                Shop
              </p>
            </Link>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                All Products
              </p>
               <Link to={"category"}>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%]">
                Fresh Flowers
              </p>
              </Link>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Dried Flowers
              </p>

              <p className=" cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Live Plants
              </p>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%]">
                Designer Vases
              </p>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Aroma Candles
              </p>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Freshener Diffuser
              </p>
            </div>
            <p className="cursor-pointer w-[280px] font-medium text-[21px] leading-[120%] text-[#808080]">
              Service
            </p>
            <div>
              <Link to={"subscription"}>
                <p className=" cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                  Flower Subcription
                </p>
              </Link>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%]">
                Wedding & Event Decor
              </p>
            </div>
          </div>

          <div className="p-10 flex flex-col gap-6 border-r">
            <Link to={"about"}>
              <p className="cursor-pointer w-[280px] font-medium text-[21px] leading-[120%] text-[#808080]">
                About Us
              </p>
            </Link>
            <div>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Our story
              </p>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%]">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Shipping & returns
              </p>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%]">
                Terms & conditions
              </p>
              <p className="cursor-pointer font-medium text-base leading-[120%] tracking-[2.5%] pb-2 ">
                Privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
