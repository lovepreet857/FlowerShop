import React from "react";
import Subpage1 from "../../json/subspage1.json"
const subspage1 = () => {
  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2  border-x border-t ">
          <div className=" px-4 py-10 sm:py-20 sm:pl-20 sm:pr-[112px] md:pr-[64px] lg:border-r border-b">
            <h1 className=" text-[34px] sm:text-[50px] font-medium leading-[120%] ">
              How does it work?
            </h1>
          </div>
          <div>

          {
            Subpage1.map((item,index)=>(
              <div key={index} className="border-b">
                <div className=" py-10 px-4 sm:p-20  ">
            <h2 className=" text-[26px] sm:text-[38px] font-medium leading-[120%] pb-4">{item.text1}n</h2>
            <p className="font-normal text-base leading-[140%]">
             {item.text2}
            </p>
          </div>

              </div>
            ))
          }
          </div>
         
        </div>
      </div>
    </>
  );
};

export default subspage1;
