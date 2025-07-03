import React, { useState } from 'react';
import SubData from "../../json/Subscription.json";

const Subspage3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle the clicked item
  };

  return (
    <div className='container'>
      <div className=" py-10 sm:py-20 bg-[#F5F5F7] border-x border-t">
        <div className="sm:m-auto max-w-[864px] w-full bg-white border-[#121212] border flex flex-col px-6 sm:px-10 py-10 sm:p-20 gap-10">
          <h1 className='text-center text-[34px] sm:text-[50px] leading-[120%] font-semibold text-[#121212]'>
            Subscription FAQ
          </h1>
          <div className="flex max-w-[704px] w-full flex-col">
            {SubData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="flex flex-col my-6 gap-4 border-b-1 pb-6">
                  <div onClick={() => handleClick(index)} className="flex cursor-pointer gap-4 items-center">
                    <h3 className=" text-base sm:text-[21px] md:text-[28px] font-normal leading-[120%] text-[#121212] w-full">
                      {item.Text}
                    </h3>
                    <img
                      className={`${isOpen ? "hidden" : "block"}`}
                      src={`src/assets/svg/${item.Image1}`}
                      alt=""
                    />
                    <img
                      className={`${isOpen ? "block" : "hidden"}`}
                      src={`src/assets/svg/${item.Image}`}
                      alt=""
                    />
                  </div>
                 <p
  className={`text-base leading-[140%] font-normal overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  {item.Passage}
</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subspage3;
