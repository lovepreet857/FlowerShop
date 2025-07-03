import React from "react";
import Carditem from "../../assets/img/carditem (1).png"
import Carditem1 from "../../assets/img/carditem (2).png"
import Carditem2 from "../../assets/img/carditem (3).png"
import Carditem3 from "../../assets/img/carditem (4).png"

const likeproduct = () => {
  return (
    <>
      <div className="container border-x border-t">
        <div className="text-center py-10 sm:py-20">
          <h4 className="font-medium text-[26px] sm:text-[38px] leading-[120%]">
            You may also like…
          </h4>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-t">
         <img className="border-0" src={`${Carditem}`} alt="" />
         <img className="border-0" src={`${Carditem1}`} alt="" />
         <img className="border-0" src={`${Carditem2}`} alt="" />
         <img className="border-0" src={`${Carditem3}`} alt="" />

        </div>
      </div>
    </>
  );
};

export default likeproduct;
