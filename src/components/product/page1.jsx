import React, { useState, useRef } from "react";
import Pagedata from "../../json/product.json";
import leftArrow from "../../assets/svg/leftarrow.svg";
import rightArrow from "../../assets/svg/rightarrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Page1 = () => {
  const swiperRef = useRef();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container   border-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        {/* Image Section */}
        <div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="src/assets/img/newflower.jpg"
            alt="Rosy Delight"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between pb-10 lg:pt-10 lg:pr-5 p-10">
          <div>
            <p className="text-sm text-[#808080] uppercase font-medium pb-6">
              <strong className="text-black">Fresh Flowers</strong> / Rosy
              Delight
            </p>

            <h2 className="text-[28px] md:text-[38px] font-medium text-black leading-tight pb-4">
              Rosy Delight - $100
            </h2>

            <p className="text-base text-[#121212E5] leading-relaxed">
              Large exceptional bouquet composed of a selection of David Austin
              roses, known for their beauty and subtle fragrance. The bouquet is
              accompanied by seasonal foliage which will enhance these sublime
              flowers even more.
            </p>

            {/* Quantity Selector */}
            <div className="mt-6">
              <h5 className="text-lg font-medium mb-2">Quantity</h5>
              <div className="flex justify-between items-center border max-w-[343px] sm:max-w-[146px] w-full">
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

            {/* Add-on section */}
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h4 className="text-lg font-medium">
                  Excellent Combination with:
                </h4>
                <p className="text-[#808080] text-base">Vase Not Included</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="cursor-pointer"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  {" "}
                  <img src={leftArrow} alt="" />
                </button>

                <Swiper
                  ref={swiperRef}
                  loop={true}
                  spaceBetween={16}
                  slidesPerView={1}
                  breakpoints={{
                    375: { slidesPerView: 1 },
                    425: { slidesPerView: 2.5 },
                    640: { slidesPerView: 4.5 },
                    768: { slidesPerView: 5 },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination,Autoplay, Navigation]}
                  className="w-full"
                >
                  {Pagedata.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="text-center">
                        <img
                          className="w-[100px] h-[100px] object-cover border mx-auto"
                          src={item.img}
                          alt=""
                        />
                        <p className="text-sm pt-2">{item.text}</p>
                        <p className="text-sm text-[#808080]">{item.prce}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="cursor-pointer"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <img className="w-8 sm:w-10" src={rightArrow} alt="Next" />
                </button>
              </div>
            </div>

            {/* Price Options */}
            <div className="">
              <p className="pb-4 font-medium">Price Options</p>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input type="radio" name="priceOption" value="oneTime" />
                  <span className="text-base">
                    One time purchase. Price $100
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="priceOption" value="subscription" />
                  <span className="text-base">Subscription. $20/month</span>
                </label>
              </div>
            </div>
          </div>

          {/* Add to Basket Button */}
          <button className="mt-8 bg-black text-white w-full py-4 text-base font-medium uppercase tracking-wide">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
