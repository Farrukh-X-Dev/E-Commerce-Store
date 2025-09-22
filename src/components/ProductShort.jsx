import React from "react";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

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

                <Link  to={`/products/${items.id}`} className="px-2 py-2 bg-[#fd491c] rounded-md text-white text-xs my-auto hover:bg-orange-700">
                  Shop Now
                </Link>
              </div>

            </div>
          </div>
      ))}
    </div>
  );
};

export default ProductShort;
