import React, { useState } from "react";
// import { useEffect } from "react";

const sinup = () => {
  const [Sinup, setSinup] = useState(1);
// const [dataf ,setdata]=useState([])

// useEffect(()=>{
// async function database() {
//   try {
//      const res = await fetch("http://localhost:4000/api/getall")
//      if(!res.ok){
//       throw new Error("error api")
//      }
//      const data = await res.json()
//      setdata(data.user)

//   } catch (error) {
    
//   }
// }
// database()
// },[])

return (
    <>
    {/* {
      dataf.map((item,index)=>(
        <>
        <h1>{item.name}</h1>
        <h1>{item.email}</h1>
        <h1>{item.password}</h1>
        <h1></h1></>
      ))
    } */}
      <div className="max-w-[722px] w-full bg-white absolute z-50  px-4 py-10 sm:px-20 sm:pt-20 pb-10 border">
        <div>
          {Sinup === 1 && (
            <div className={``}>
              <h1 className="pb-6 font-semibold text-[34px] sm:text-[50px] leading-[120%]">
                Greetings! Welcome to luxury gift shop.
              </h1>
              <p className="pb-3 font-medium text-base leading-[120%]">
                Use your mobile number to sign up or log in
              </p>
              <div className="pl-4 py-[19px]  border mb-4">
                <input
                  className="outline-none w-full"
                  type="tel"
                  placeholder="+380 XX XXX XX XX"
                />
              </div>
              <button onClick={()=> setSinup(2)} className="pt-[19px] pb-[17px]  w-full bg-black text-white">
                continue
              </button>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-[262px]  border border-[#D2D2D7] mb-10  mt-10"></span>
                <p className="text-[#D2D2D7] font-normal text-sm leading-[120%]">
                  or{" "}
                </p>
                <span className="w-[262px]  border border-[#D2D2D7] mb-10  mt-10"></span>
              </div>
              <p className="font-medium text-base leading-[120%]  pb-3">
                Instantly login or sign up via Google
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between mb-[128px]">
                <div className="flex gap-2   sm:max-w-[272px] w-full pt-[17px] pb-[15px] px-[19px] border">
                  <img src="src/assets/svg/Google1.svg" alt="Google" />
                  <p>continue with google</p>
                </div>
                <div className="flex gap-2   sm:max-w-[272px] w-full pt-[17px] pb-[15px] px-[30px] border">
                  <img src="src/assets/svg/Apple1.svg" alt="Apple" />
                  <p>continue with apple</p>
                </div>
              </div>
            </div>
          )}
          {Sinup === 2 && (
            <div>
               <h1 className="pb-6 text-[34px] sm:text-[50px] font-semibold leading-[120%]">Sign up</h1>
               <p className="font-normal text-base leading-[120%]">Become a member and enjoy personalized gift recommendations, fast checkout, and more.</p>
               <div className="flex justify-between mt-6 mb-3 border-b">
                <span className="flex gap-1 items-center pb-6">

                <img src="src/assets/svg/tick.svg" alt="tick" />
                <p className="font-medium text-lg leading-[140% ]"  >+380980275095</p>
                </span>
                <img onClick={()=> setSinup(1)} className="mr-[25px] pb-[25px]" src="src/assets/svg/edit_square.svg" alt="edit_square" />
               </div>
               <p className="pb-3 font-medium text-base leading-[120%]">Enter code from sms</p>
               <div className="py-[19px] mb-2 pl-4 border border-[#D2D2D7]">
                <input className=" outline-none w-full" type="text" placeholder="XX XX XX" />
               </div>
               <p className="text-[#808080] text-xs font-medium leading-[120%]">Please check your phone for a message containing a code to enter</p>
                <button  className=" mt-4 mb-6 pt-[19px] pb-[17px]  w-full bg-black text-white">
                Join us
              </button>
              <div className="flex">
                <p className="text-[#808080] font-medium text-base leading-[120%] tracking-[2.5%]">Didn't receive a code?</p>
                <p className="font-medium text-base leading-[120%] tracking-[2.5%] mb-[148px]">Resend code</p>
              </div>
            </div>
          )}

          <div className="flex items-end gap-3 justify-center">
            <p className="border-b font-medium leading-[120%] text-sm">
              Privacy Policy
            </p>
            <span className="h-[17px] border"></span>
            <p className="border-b font-medium leading-[120%] text-sm">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default sinup;
