import React from "react";

const section2 = () => {
  return (
    <>
      <div className="container">
        <div className="grid   md:grid-cols-2 md:justify-between border">
          <div className=" py-10 px-4 sm:py-20 sm:pl-20 max-w-[720px] border-b md:border-b-0 ">
            <p className="text-[50px] font-semibold">About us</p>
          </div>
          <div className=" py-10 px-4 sm:p-20 md:pr-[96.5px] md:border-l">
            <div className=" max-w-[543.5px]">
              <p className="text-sm font-medium pb-6">our story</p>
              <p className="text-[38px] font-medium pb-4">
                Kyiv LuxeBouquets
              </p>
              <p className="text-base font-normal pb-[64px]">
                We are a modern local floral studio, which specializes in the
                design and delivery of unique bouquets. We have the best
                florists who carefully select each look, our studio cooperates
                directly with farms for growing different flowers, so we always
                have fresh flowers, which are collected by our florists in
                exquisite bouquets. We have a collection of fresh bouquets,
                collections of dried bouquets, house plants, as well as fragrant
                candles from luxury brands to create the perfect atmosphere.
                Make someone's day amazing by sending flowers, plants and gifts
                the same or next day. Ordering flowers online has never been
                easier.
              </p>
              <button className=" w-full sm:max-w-[175px] pt-[18px] pb-4 sm:px-[43px] sm:pt-[19.5px] sm:pb-[17.5px] text-base font-medium border border-[#121212]">
                Lern more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default section2;
