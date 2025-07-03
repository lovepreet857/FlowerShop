import React from "react";
import subdata from "../../json/subscrib.json"
const subspage = () => {
  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2 border-x">
          <img className="h-full w-full" src="src/assets/img/subscribimg1.png" alt="" />
        <div className=" px-4 py-10 md:px-20 md:pt-20">
          <h1 className="font-semibold text-[34px] md:text-[50px] leading-[120%] md:pb-6 pb-4   ">
            Flower Subscription
          </h1>
          {
            subdata.map((item,index)=>(
                <>
                <div key={index+item}>
          <div className="max-w-[560px] w-full ">
            <div className="pt-6">

          <h4 className="text-[#121212] font-medium text-base leading-[120%]">{item.text1}</h4>
          <li className=" text-4 text-start pt-2">
           {item.text2}
          </li>
            </div>
          </div>
                </div>
                </>
            ))
          }
          <button className="lg:max-w-[171px] w-full pt-[19px] pb-[17px] px-6 border text-base font-medium leading-[120%] tracking-[3%] uppercase mt-[48px] md:mt-[79px] lg:mt-[71px]">Explore Plans</button>
        </div>
        </div>

      </div>
    </>
  );
};

export default subspage;
