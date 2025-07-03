import React from "react";
import Insta from "../../assets/svg/Instagram.svg";
import Pinterest from "../../assets/svg/Pinterest.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import Telegram from "../../assets/svg/Telegram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
const section4 = () => {
  return (
    <>
      <div className="container">
        <div className=" flex flex-col-reverse md:grid grid-cols-2 border">
          <div className="max-w-[720px] w-full md:border-r   ">
            <div className=" lg:pt-20 lg:px-20 lg:pb-[99px] py-10 px-4  flex flex-col gap-6">
              <h4 className="font-semibold text-[34px] lg:text-[55px] xl:text-[60px] leading-[120%]">
                To Contact Us
              </h4>
              <div className=" flex flex-col gap-4">
                <p>We will call you back</p>
                <div className=" grid xl:flex gap-4">
                  <input
                    className="py-[19px] pl-[19px] border border-[#D2D2D7] w-[272px] "
                    type="tel"
                    placeholder="+380 XX XXX XX XX"
                  />

                  <button className="pt-[19px] pb-[17px]  bg-black text-white cursor-pointer w-[272px]">
                    book a call{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className=" grid sm:grid-cols-2 border-t max-w-[720px] w-full ">
              <div className=" sm:border-r ">
                <h4 className="text-center py-4 border-b font-medium text-[38px] leading-[120%]">
                  Phone
                </h4>
                <div className=" items-center flex flex-col gap-[26px] py-[119px]">
                  <div className="flex items-center gap-1">
                    <img src="src/assets/svg/coll.svg" alt="call" />
                    <p className="font-semibold text-base leading-[120%] tracking-[2.5%]">
                      +380980099777
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="src/assets/svg/coll.svg" alt="call" />
                    <p className="font-semibold text-base leading-[120%] tracking-[2.5%]">
                      +380980099111
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <h4 className="text-center border-b border-t sm:border-t-0 py-4 font-medium text-[38px] leading-[120%]">
                  Address
                </h4>
                <div className=" flex flex-col gap-[26px] justify-center items-center py-[119px]">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-sm leading-[120%]">
                      opening hours: 8 to 11 p.m.
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="src/assets/svg/pin_drop.svg" alt="pin" />
                    <p className=" font-semibold text-base leading-[120%] tracking-[2.5%]">
                      15/4 Khreshchatyk Street, Kyiv{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-b md:border-b-0 ">
            <img className="w-full" src="src/assets/img/fullimg.jpeg" alt="" />
            <div className="grid sm:grid-cols-2 md:border-b pl-4 md:pl-0] ">
              <h4 className=" md:text-center  sm:border-r py-4  font-medium text-[38px] leading-[120%]">
                Follow us
              </h4>
              <div className="  flex w-full py-4 sm:py-0 sm:justify-center gap-[22px] items-center  ">
                {/* {Imgdata.map((item, index) => (
                  <div key={index} className="h-[24px]">
                    <img src={item.svg} alt="" />
                  </div>
                ))} */}
                  <a href="https://www.instagram.com">
                                  {" "}
                                  <img src={Insta} alt="Insta" />
                                </a>
                
                                <a href="https://www.pinterest.com">
                                  {" "}
                                  <img src={Pinterest} alt="Pinterest" />
                                </a>
                                <a href="https://www.facebook.com">
                                  {" "}
                                  <img src={Facebook} alt="Facebook" />
                                </a>
                                <a href="https://twitter.com">
                                  <img src={Twitter} alt="Twitter" />
                                </a>
                                <a href="https://web.telegram.org">
                                  {" "}
                                  <img src={Telegram} alt="Telegram" />
                                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default section4;
