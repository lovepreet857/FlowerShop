import React from 'react';
import Flowers from "../../assets/img/flower.png"
import Category from '../../json/category1.json';
const fresh = () => {
  return (
  <>
  <div className='container'>
    <div className='grid lg:grid-cols-2 justify-center lg:border-l '>
  <div className='border-x lg:border-x-0 py-[186px] px-4 sm:py-[210px]  lg:py-[320px] sm:max-w-[768px] lg:max-w-[720px] sm:px-20 sm:h-[500px] w-full max-w-[375px] h-[420px] lg:h-[720px] bg-cover bg-center '  style={{ backgroundImage: `url(${Flowers})` }}>
      <h4 className='text-center max-w-[560px] font-semibold text-[40px] sm:text-[67px] leading-[120%] text-white'>Fresh Flowers</h4>
  </div>
   <div className="lg:max-w-[720px] w-full justify-items-center sm:border-l   grid sm:grid-cols-2  ">
            {Category.map((item, index) => (
              <div key={index} className="flex w-full justify-center-safe">
                <div className=' relative border-r border-l sm:border-l-0 border-t lg:border-t-0 overflow-hidden '>
                  <img className=' w-[375px] lg:w-[360px] h-[360px] border-b transition-transform duration-500 ease-in-out transform hover:scale-125' src={item.img} alt="" />
                 
                </div>
              </div>
            ))}
          </div>
    </div>
  </div>
  </>
  );
}

export default fresh;
