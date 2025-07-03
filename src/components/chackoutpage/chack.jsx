import React, { useState } from "react";

const Chack = () => {
  const [step, setStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="container">
      <div className=" flex flex-col-reverse lg:grid grid-cols-2 border-x">
        <div className="py-10  px-4 sm:px-20 lg:border-r ">
          <div className="flex gap-3 max-w-[280px] w-full">
            <span className="flex gap-2 items-center">
              <p
                className={`font-medium text-sm leading-[120%]  uppercase ${
                  step === 1 ? "text-black" : "text-[#808080]"
                }`}
              >
                Information
              </p>
              <img src="src/assets/svg/Vector1.svg" alt="" />
            </span>
            <span className="flex gap-2 items-center">
              <p
                className={`font-medium text-sm leading-[120%]  uppercase ${
                  step === 2 ? "text-black" : "text-[#808080]"
                }`}
              >
                Shipping
              </p>
              <img src="src/assets/svg/Vector1.svg" alt="" />
            </span>
            <span className="flex gap-2 items-center">
              <p
                className={`font-medium text-sm leading-[120%]  uppercase ${
                  step === 3 ? "text-black" : "text-[#808080]"
                }`}
              >
                Payment
              </p>
              <img src="src/assets/svg/Vector1.svg" alt="" />
            </span>
          </div>

          <div>
            {step === 1 && (
              <>
                <form action="">
                  {/* 1 Contact information */}
                  <div className={``}>
                    <div className=" py-6 sm:py-10  px-4 sm:px-10 bg-[#D2D2D7] mt-10 mb-6">
                      <h1 className="text-[#121212]">
                        Already have an account?{" "}
                        <span className="border-b-2">Log in</span> for faster
                        checkout
                      </h1>
                    </div>
                    <div className="pb-6 border-b border-[#D2D2D7]">
                      <h1 className="leading-[140%] text-lg font-medium pb-4">
                        1 Contact information
                      </h1>
                      <div className="flex flex-col gap-3">
                        <div className="py-[19px] px-4 w-full border border-[#D2D2D7]">
                          <input
                            className="outline-none w-full"
                            type="text"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="py-[19px] px-4 w-full border border-[#D2D2D7]">
                          <input
                            className="outline-none w-full"
                            type="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="py-[19px] px-4 w-full border border-[#D2D2D7]">
                          <input
                            className="outline-none w-full"
                            type="tel"
                            maxLength={10}
                            placeholder="Your Phone number *"
                            required
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => setStep(2)}
                        type="button"
                        className=" mt-4 pt-[19px] pb-[17px] text-white font-medium text-base leading-[120%] tracking-[3%] uppercase bg-black cursor-pointer w-full"
                      >
                        Continue to shipping
                      </button>
                    </div>
                  </div>
                </form>
                <div className={`my-10 border-b border-[#D2D2D7]`}>
                  <p className="pb-6 text-[#D2D2D7] leading-[140%] text-lg font-medium ">
                    2 Shipping details
                  </p>
                </div>
                <div className=" border-b border-[#D2D2D7]">
                  <p className="pb-6 text-[#D2D2D7] leading-[140%] text-lg font-medium ">
                    3 Payment
                  </p>
                </div>
              </>
            )}
          </div>

          {/* 2 Shipping details */}
          <div className={``}>
            {step === 2 && (
              <>
                <form action="">
                  <div className="flex justify-between w-full items-center my-10 pb-6 border-b">
                    <span className="flex gap-1">
                      <img src="src/assets/svg/check.svg" alt="" />
                      <h1 className="font-medium text-lg leading-[140%]">
                        Contact information
                      </h1>
                    </span>
                    <img onClick={() => setStep(1)} src="src/assets/svg/edit_square.svg" alt="" />
                  </div>
                  <div className="pb-6 mb-10   border-b border-[#D2D2D7]">
                    <h1 className="leading-[140%] text-lg font-medium pb-4">
                      2 Shipping details
                    </h1>
                    <div className="py-[19px] px-4 border  border-[#D2D2D7] mb-3 max-w-full lg:max-w-[328px] ">
                      <input
                        className="w-full outline-none"
                        type="text"
                        placeholder="Recipients Name"
                        required
                      />
                    </div>
                    <div className="py-[19px] px-4 border  border-[#D2D2D7] mb-3 max-w-full lg:max-w-[328px]">
                      <input
                        className="w-full outline-none"
                        type="text"
                        placeholder="Recipients Phone number *"
                        required
                      />
                    </div>
                    <div className="py-[19px] px-4 border  border-[#D2D2D7] mb-3 flex justify-between ">
                      <input
                        className=" outline-none"
                        type="text"
                        placeholder="Data of Delivery  *"
                        required
                      />
                      <img src="src/assets/svg/calendar_month.svg" alt="" />
                    </div>
                    <div className="py-[19px] px-4 border  border-[#D2D2D7] mb-3 flex justify-between ">
                      <input
                        className=" outline-none"
                        type="text"
                        placeholder="Delivery Time "
                        required
                      />
                      <img src="src/assets/svg/dowenerrow.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-3 md:flex justify-between mb-3">
                      <div className="py-[19px] px-4 max-w-full md:max-w-[274px] w-full border  border-[#D2D2D7]">
                        <input
                          className="outline-none"
                          type="text"
                          placeholder="Street"
                        />
                      </div>
                      <div className="py-[19px] px-4 max-w-full md:max-w-[274px] w-full border  border-[#D2D2D7]">
                        <input
                          className="outline-none"
                          type="text"
                          placeholder="Street"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <label className="inline-flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          className="hidden peer"
                        />
                        <div className="w-6 h-6 bg-[#D2D2D7] peer-checked:bg-blue-500 rounded"></div>
                      </label>
                      <p className="font-medium text-sm leading-[120%]">
                        I don't know the address, please call the recipient.
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      type="button"
                      className="  mt-4 pt-[19px] pb-[17px] text-white font-medium text-base leading-[120%] tracking-[3%] uppercase bg-black cursor-pointer w-full"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
                <div className=" border-b border-[#D2D2D7]">
                  <p className="pb-6 text-[#D2D2D7] leading-[140%] text-lg font-medium ">
                    3 Payment
                  </p>
                </div>
              </>
            )}
          </div>

          {/* 3 Payment */}
          {step === 3 && (
            <>
              <form action="">
                <div className="flex justify-between w-full items-center my-10 pb-6 border-b">
                  <span className="flex gap-1">
                    <img src="src/assets/svg/check.svg" alt="" />
                    <h1 className="font-medium text-lg leading-[140%]">
                      Contact information
                    </h1>
                  </span>
                  <img onClick={() => setStep(1)} src="src/assets/svg/edit_square.svg" alt="" />
                </div>
                <div className="flex justify-between w-full items-center my-10 pb-6 border-b">
                  <span className="flex gap-1">
                    <img src="src/assets/svg/check.svg" alt="" />
                    <h1 className="font-medium text-lg leading-[140%]">
                      Shipping details
                    </h1>
                  </span>
                  <img onClick={() => setStep(2)} src="src/assets/svg/edit_square.svg" alt="" />
                </div>
                <div className="pb-6 mb-10   border-b border-[#D2D2D7]">
                  <h1 className="leading-[140%] text-lg font-medium pb-4">
                    3 Payment
                  </h1>
                  <p className="font-medium text-base leading-[120%] pb-3">
                    Pay by card. Your payment is secure.
                  </p>
                  <div className="py-[19px] px-4 border  border-[#D2D2D7] mb-3 ">
                    <input
                      className="w-full outline-none"
                      type="text"
                      placeholder="Card Number"
                      required
                    />
                  </div>
                  <div className="  flex flex-col gap-3 md:flex justify-between mb-3">
                    <div className="py-[19px] px-4 max-w-full md:max-w-[274px] w-full border  border-[#D2D2D7]">
                      <input
                        className="outline-none"
                        type="text"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div className="py-[19px] px-4 max-w-full md:max-w-[274px] w-full border  border-[#D2D2D7]">
                      <input
                        className="outline-none"
                        type="text"
                        placeholder="CVV Code"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="  mt-4 pt-[19px] pb-[17px] text-white font-medium text-base leading-[120%] tracking-[3%] uppercase bg-black cursor-pointer w-full"
                  >
                    make a purchase
                  </button>
                </div>
                <p className="font-medium text-base leading-[120%] pb-3">
                  Pay by card. Your payment is secure.
                </p>
                <div className="gap-3  flex flex-col sm:flex   justify-between pb-6 border-b">
                  <div className=" max-w-full md:max-w-[298px] w-full flex gap-2 items-center border justify-center pt-[17px] pb-[15px]">
                    <img src="src/assets/svg/Apple1.svg" alt="" />
                    <p className="text-base font-medium leading-[120%] tracking-[3%] uppercase">Apple Pay</p>
                  </div>
                  <div className="max-w-full md:max-w-[298px]  w-full flex gap-2 items-center border justify-center pt-[17px] pb-[15px]">
                    <img src="src/assets/svg/Google1.svg" alt="" />
                    <p className="text-base font-medium leading-[120%] tracking-[3%] uppercase">Google Pay</p>
                  </div>
                  <div>

                  </div>
                </div>
              </form>
            </>
          )}
        </div>

        <div>
          <div className="lg:hidden   px-4 sm:px-20 bg-[#F5F5F7]">
            <div
              className={`max-w-[608px] w-full flex lg:hidden justify-between cursor-pointer  ${
                showSummary ? "py-10" : "py-10"
              }`}
              onClick={() => setShowSummary(!showSummary)}
            >
              <span className="flex gap-2 items-center">
                <img src="src/assets/svg/shortshop1.svg" alt="" />
                <p>Show order summary</p>
                <img
                  src="src/assets/svg/Cheveron25.svg"
                  alt=""
                  className={`font-medium text-lg leading-[120%] transition-transform duration-300 ${
                    showSummary ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
             <span
  className={`transition-opacity duration-500 ${
    !showSummary ? "opacity-100" : "opacity-0"
  }`}
>
  $100
</span>
            </div>
          </div>

          {/* Order Summary Section */}
          <div
            className={` lg:hidden px-4 sm:px-20  bg-[#F5F5F7] transition-all duration-300 overflow-hidden ${
              showSummary ? "max-h-[2000px] py " : "max-h-0 py-0 "
            }`}
          >
            <p className="font-medium text-sm leading-[120%] uppercase  hidden lg:block">
              Order summary
            </p>

            <div className=" flex flex-col md:flex gap-4 pb-6 border-b border-[#D2D2D7]">
              <img
                className="w-[160px]"
                src="src/assets/svg/shortflower.svg"
                alt=""
              />
              <div className="flex justify-between items-center max-w-[384px] w-full">
                <span>
                  <p className="font-medium text-lg leading-[140%]">Snowfall</p>
                  <p className="font-normal text-base leading-[140%]">
                    Quantity (1)
                  </p>
                </span>
                <span className="font-medium text-lg leading-[140%]">$100</span>
              </div>
            </div>

            <div className="border-b pb-6 border-[#D2D2D7]">
              <p className="font-normal text-base leading-[140%] pb-4 pt-6">
                If you have our gift card, enter the code to get discounts
              </p>
              <div className=" flex flex-col md:flex gap-4">
                <button className="py-[19px] pl-4 border border-[#D2D2D7] text-[#808080] max-w-full md:max-w-[272px] w-full">
                  Gift card
                </button>
                <button className="py-[19px] text-center border bg-black border-[#D2D2D7] text-white max-w-full md:max-w-[272px] w-full">
                  Apply
                </button>
              </div>
            </div>

            <div>
              <div className="flex w-full justify-between pt-6">
                <span className="font-normal text-base leading-[140%]">
                  Subtotal
                </span>
                <span className="font-normal text-base leading-[140%]">
                  $100.00
                </span>
              </div>

              <div className="flex w-full justify-between pt-6 pb-6 border-b border-[#D2D2D7]">
                <span className="font-normal text-base leading-[140%]">
                  Shipping
                </span>
                <span className="font-normal text-base leading-[140%]">
                  Calculated at next step
                </span>
              </div>

              <div className="flex flex-col mb-6 gap-[118px] items-center">
                <div className="flex w-full justify-between pt-6 border-[#D2D2D7]">
                  <span className="font-medium text-lg leading-[120%]">
                    Total
                  </span>
                  <span className="font-medium text-[21px] leading-[120%]">
                    $100.00
                  </span>
                </div>
                <div className="flex gap-1">
                  <p>Secure Checkout</p>
                  <img src="src/assets/svg/lock.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block px-20 py-10 h-full bg-[#F5F5F7]">
            <p className="font-medium text-sm leading-[120%] uppercase pb-10">
              Order summary
            </p>

            <div className="flex gap-4 pb-6 border-b border-[#D2D2D7]">
              <img
                className="w-[160px]"
                src="src/assets/svg/shortflower.svg"
                alt=""
              />
              <div className="flex justify-between items-center max-w-[384px] w-full">
                <span>
                  <p className="font-medium text-lg leading-[140%]">Snowfall</p>
                  <p className="font-normal text-base leading-[140%]">
                    Quantity (1)
                  </p>
                </span>
                <span className="font-medium text-lg leading-[140%]">$100</span>
              </div>
            </div>

            <div className="border-b pb-6  border-[#D2D2D7]">
              <p className="font-normal text-base leading-[140%] pb-4 pt-6">
                If you have our gift card, enter the code to get discounts
              </p>
              <div className="flex gap-4">
                <button className="py-[19px] pl-4 border border-[#D2D2D7] text-[#808080] max-w-[272px] w-full">
                  Gift card
                </button>
                <button className="py-[19px] text-center border bg-black border-[#D2D2D7] text-white max-w-[272px] w-full">
                  Apply
                </button>
              </div>
            </div>

            <div>
              <div className="flex w-full justify-between pt-6">
                <span className="font-normal text-base leading-[140%]">
                  Subtotal
                </span>
                <span className="font-normal text-base leading-[140%]">
                  $100.00
                </span>
              </div>

              <div className="flex w-full justify-between pt-6 pb-6 border-b border-[#D2D2D7]">
                <span className="font-normal text-base leading-[140%]">
                  Shipping
                </span>
                <span className="font-normal text-base leading-[140%]">
                  Calculated at next step
                </span>
              </div>

              <div className="flex flex-col gap-[118px] items-center">
                <div className="flex w-full justify-between pt-6 border-[#D2D2D7]">
                  <span className="font-medium text-lg leading-[120%]">
                    Total
                  </span>
                  <span className="font-medium text-[21px] leading-[120%]">
                    $100.00
                  </span>
                </div>
                <div className="flex gap-1">
                  <p>Secure Checkout</p>
                  <img src="src/assets/svg/lock.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chack;
