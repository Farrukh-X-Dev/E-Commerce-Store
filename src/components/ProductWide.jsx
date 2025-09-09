import React from 'react'
import { BiStar } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProductWide = ({Products}) => {
  return (
     <div className="flex gap-5 justify-center ">
          {Products.map((items ,index) => (
            <div className="flex flex-col " key={index}>
              <img src={items.image} alt={items.image} className="w-90 h-50" />
              <div className="flex gap-10 justify-around pt-5">
                 <div className="flex flex-col  ">
                  <p className="uppercase "> {items.title} </p>
    
                  <div className="flex flex-row items-center font-sans">
                  {Array(5).fill("").map((_ , index) => (
                    <BiStar key={index} /> 
                ))}
                { '('+items.rating + ')'}
                  </div>
                  
                </div>
                <Link  to={`products/${items.id}`} className="px-2 py-3 hover:bg-orange-700  bg-[#fd491c] rounded-md text-white  my-auto">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ProductWide