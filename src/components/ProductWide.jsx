import React from 'react'
import { BiStar } from 'react-icons/bi'

const ProductWide = ({Products}) => {
  return (
     <div className="flex gap-5 justify-center w-[35%]  ">
          {Products.map((items ,index) => (
            <div className="flex flex-col " key={index}>
              <img src={items.image} alt={items.image} className="w-full" />
              <div className="flex gap-10 justify-around pt-5">
                 <div className="flex flex-col  ">
                  <p className="uppercase "> {items.title} </p>
    
                  <div className="flex flex-row items-center font-sans">
                  {Array(5).fill("").map(() => (
                    <BiStar /> 
                ))}
                { '('+items.rating + ')'}
                  </div>
                  
                </div>
                <button className="px-3 h-10 bg-[#fd491c] rounded-md text-white">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ProductWide