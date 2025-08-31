import React from "react";
import { BiStar } from "react-icons/bi";

const ProductShort = ({ Products }) => {

  return (
    <div className="flex flex-row gap-10 ">
      {Products.map((items, index) => (
        <div className="flex flex-col" key={index}>
          <img src={items.image} alt={items.image} className="w-50" />
          <div className="flex justify-center pt-5 gap-15">
            <div className="flex flex-row gap-5">
              <div>
                <p className="uppercase text-base "> {items.title} </p>
                <div className="flex flex-row items-center font-sans">
                  {Array(4).fill("").map((_, index) => (
                    <BiStar key={index} />
                  ))}
                  {'(' + items.rating + ')'}
                </div>
              </div>

              <button className="px-1 w-20 h-8 bg-[#fd491c] rounded-md text-white text-xs my-auto ">
                Shop Now
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShort;
