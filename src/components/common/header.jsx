import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flower from "../../assets/svg/product4.svg";
import Menu from "../../assets/svg/Menu.svg";
import Shop from "../../assets/svg/shoping.svg";
import Cross from "../../assets/svg/close5.svg";
import Insta from "../../assets/svg/Instagram.svg";
import Pinterest from "../../assets/svg/Pinterest.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import Telegram from "../../assets/svg/Telegram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Sinup from "./popup/sinup.jsx";
const header = () => {
  const [Click, setClick] = useState(false);
  const [Menubutton, setMenubutton] = useState(false);
  const [Popup, setPopup] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className=" grid grid-cols-2 lg:grid-cols-4 border ">
            <div className="flex  w-full ">
              <div className="p-0 lg:py-[32px]  lg:max-w-[180px] w-full text-center lg:border-r">
                <Link to={"/"}>
                  <h2 className="hidden lg:block cursor-pointer">Shop</h2>
                </Link>
                <div className="sm:relative ">
                  <img
                    onClick={() => setMenubutton(!Menubutton)}
                    className="lg:hidden block p-4 border-r"
                    src={Menu}
                    alt="Menu"
                  />
                  <div
                    className={` lg:hidden border-t sm:border-t-0 absolute w-full max-w-[384px] sm:w-full border-r top-0 border-b z-51 transition-all duration-500 ease-in-out overflow-hidden bg-white transform ${
                      Menubutton
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0 pointer-events-none "
                    }`}
                  >
                    <div className="py-3 px-4 border-b">
                      <img
                        onClick={() => setMenubutton(!Menubutton)}
                        src={Cross}
                        alt="Cross"
                      />
                    </div>
                      
                    <div  onClick={() => setMenubutton(!Menubutton)}>

                    <h4
                        onClick={() => setPopup(!Popup)}
                      className=" text-start p-6 border-b font-medium leading-[120%] text-[21px]"
                    >
                      Sign in
                    </h4>
                    </div>
                    <Link to={"/"}>
                      <h4
                        onClick={() => setMenubutton(!Menubutton)}
                        className="text-start p-6 border-b font-medium leading-[120%] text-[21px]"
                      >
                        Shop
                      </h4>
                    </Link>
                    <Link to={""}>
                      <h4
                        onClick={() => setMenubutton(!Menubutton)}
                        className=" text-start p-6 border-b font-medium leading-[120%] text-[21px]"
                      >
                        Servise
                      </h4>
                    </Link>
                    <h4
                      onClick={() => setMenubutton(!Menubutton)}
                      className=" text-start p-6 border-b font-medium leading-[120%] text-[21px]"
                    >
                      Contact
                    </h4>
                    <Link to={"about"}>
                      <h4
                        onClick={() => setMenubutton(!Menubutton)}
                        className="text-start p-6 border-b font-medium leading-[120%] text-[21px]"
                      >
                        About us
                      </h4>
                    </Link>
                    <div className="py-6 pl-6 pr-[71px] sm:pr-20 flex flex-col gap-4">
                      <p className="text-start font-medium text-base leading-[120%] tracking-[2.5%]">
                        Shipping & returns
                      </p>
                      <p className="text-start font-medium text-base leading-[120%] tracking-[2.5%]">
                        Terms & conditions
                      </p>
                      <p className="text-start font-medium text-base leading-[120%] tracking-[2.5%]">
                        Privacy policy
                      </p>
                    </div>
                    <div className="flex p-6 w-full justify-between">
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
              <div className=" hidden lg:block p-4 md:py-[16px] lg:py-[32px] lg:max-w-[180px] w-full text-center border-r">
                <h2 className="cursor-pointer">Contact</h2>
              </div>
            </div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <div className="flex  justify-end w-full ">
              <div className="p-0 lg:py-[32px] lg:max-w-[180px] w-full text-center lg:border-l ">
                <h2
                  onClick={() => setPopup(!Popup)}
                  className="hidden lg:block cursor-pointer"
                >
                  Sign in
                </h2>

                <img
                  onClick={() => setClick(!Click)}
                  className="lg:hidden block p-4 justify-self-end border-l"
                  src={Shop}
                  alt="Shop"
                />
              </div>
              <div className="hidden relative lg:block p-4 md:py-[16px] lg:py-[32px] lg:max-w-[180px] w-full text-center border-l">
                <h2
                  onClick={() => setClick(!Click)}
                  className="hidden lg:block cursor-pointer"
                >
                  Cart
                </h2>
              </div>

              <div
                className={`absolute border-t top-0 z-52 max-w-[720px] w-full transition-all duration-500 ease-in-out overflow-hidden bg-white border-l  transform ${
                  Click
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0 pointer-events-none"
                }`}
              >
                <div className="border-l md:border-l-0">
                  <div className=" flex items-center px-10 pt-[26px] pb-[33px] border-b w-full justify-between ">
                    <p>Shopping Cart</p>
                    <img
                      onClick={() => setClick(!Click)}
                      src={Cross}
                      alt="Cross"
                    />
                  </div>
                  <div className="  py-6 pl-4 pr-[71px] sm:p-10 md:flex items-center gap-4 ">
                    <img src={Flower} alt="Flower" />
                    <div className="w-full flex justify-between items-center">
                      <span>
                        <h5 className="font-medium leading-[140%] text-lg">
                          Rosy Delight
                        </h5>
                        <p className="font-normal text-base">Quantity (1)</p>
                        <p className="font-medium leading-[140%] text-lg">
                          $100
                        </p>
                      </span>
                      <p
                        onClick={() => setClick(!Click)}
                        className="cursor-pointer font-semibold text-base tracking-[2.5%] leading-[120%]"
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className=" w-full justify-between flex items-center py-6 pl-4 pr-[71px] sm:px-10 sm:pt-[26px] sm:pb-[33px] border-y">
                    <p>Subtotal</p>
                    <p>$100.00</p>
                  </div>
                  <div className=" py-6 px-4 sm:p-10 ">
                    <input
                      type="text"
                      className="w-full outline-none pb-[120px] "
                      placeholder="Gift Message "
                    />
                  </div>
                  <div className="  px-4 py-10 sm:p-10 border-t">
                    <p className="font-normal leading-[120%] text-sm text-center">
                      Shipping & taxes calculated at checkout <br />
                      Free standard shipping within Kyiv
                    </p>
                  </div>
                  <Link to={"chackout"}>
                    <button
                      onClick={() => setClick(!Click)}
                      className="max-w-full w-full cursor-pointer text-center pt-[19px] pb-[17px] text-white bg-black"
                    >
                      Check out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full w-full relative flex justify-center"> 
                {Popup && <Sinup />}

          </div>
        </div>
      </header>
    </>
  );
};

export default header;
