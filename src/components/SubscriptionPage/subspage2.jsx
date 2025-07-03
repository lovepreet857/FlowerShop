import React, { useState } from "react";
import Subspage2 from "../../json/subspage2.json";
const subspage2 = () => {
    const [quantity, setQuantity] = useState(1);
  
  return (
    
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2 border-x">
          <div className="lg:border-r">
            <div className=" pt-10 sm:pt-20 px-4 sm:px-10 pb-10 ">
              <p className="pb-6 text-sm font-medium leading-[120%] uppercase">
                Build Your Subscription
              </p>
              <h1 className="pb-4 text-[38px] font-medium leading-[120%]">
                Selecting a Plan
              </h1>
              <p className=" text-base leading-[140%] font-normal pb-6">
                Enjoy free shipping on every order and save up to 30%. Every
                bouquet we deliver is carefully curated to ensure it arrives
                fresh and stunning. To modify, pause, or cancel your
                subscription, simply log in to your account dashboard. You're in
                complete control of your flower delivery experience.
              </p>
              {Subspage2.map((item, index) => (
                <>
                  <div
                    key={index + item}
                    className=" md:flex border-[#D2D2D7] border"
                  >
                    <img src={item.img1} alt="" />
                    <div className="px-4 pt-4 pb-[42px] border-l border-[#D2D2D7]">
                      <h2 className="font-medium text-lg leading-[140%] pb-1">
                        {item.text1}
                      </h2>
                      <li className="font-normal text-base leading-[140%] pb-1">
                        {item.list1}
                      </li>
                      <li className="font-normal text-base leading-[140%] pb-1">
                        {item.list2}
                      </li>
                      <li className="font-normal text-base leading-[140%] pb-1">
                        {item.list3}
                      </li>
                      <li className="font-normal text-base leading-[140%] pb-1">
                        {item.list4}
                      </li>
                      <li className="font-normal text-base leading-[140%] pb-1">
                        {item.list5}
                      </li>
                    </div>
                  </div>
                  <button className="pt-[19px] pb-[17px] text-center w-full bg-[#121212] cursor-pointer text-white uppercase mb-4">
                    {item.button}
                  </button>
                </>
              ))}
            </div>
            <div className=" px-4 sm:px-10 ">
             <h4 className="pb-4 border-t border-[#D2D2D7] pt-10 text-[28px]">How often do you want flowers delivered ?</h4>
             <p className="text-base pb-6">Select the delivery frequency</p>
             <div className="grid md:flex gap-4 pb-10 border-b border-[#D2D2D7] mb-10 max-w-[640px] w-full">
              <button className="pt-[19px] pb-[17px] md:max-w-[202px] w-full text-center border text-base font-medium leading-[120%] tracking-[3%] uppercase">Monthly</button>
               <button className="pt-[19px] pb-[17px] md:max-w-[202px] w-full text-center border text-base font-medium leading-[120%] tracking-[3%] uppercase">Bi-Weekly</button> 
               <button className="pt-[19px] pb-[17px] md:max-w-[202px] w-full text-center border text-base font-medium leading-[120%] tracking-[3%] uppercase">Weekly</button>
             </div>
            </div>
             <div className=" px-10  md:mb-20 mb-10 ">
              <div className="border-b border-[#D2D2D7] pb-10 mb-10 ">
                
            
             <h4 className="pb-4  text-[28px]">How many deliveries would you like ?</h4>
             <p className="text-base pb-6">Select the delivery frequency</p>
             <div className="flex justify-between items-center border max-w-[343px] sm:max-w-[146px] w-full ">
                <button
                  className="px-3 py-2"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  <img src="src/assets/svg/mainus.svg" alt="minus" />
                </button>
                <div className=" max-w-[255px] w-full px-4 py-2 border-x  text-center">
                  <p>{quantity}</p>
                </div>
                <button
                  className="px-3 py-2"
                  onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}
                >
                  <img src="src/assets/svg/plusicon.svg" alt="plus" />
                </button>
              </div>
            </div>
            <button className="pt-[19px] pb-[17px] w-full text-center text-white bg-black">Checkout</button>
  </div>
          </div>
          <img src="src/assets/img/leftcolum1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default subspage2;
