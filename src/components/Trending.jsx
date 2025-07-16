import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const Trending = ({data}) => {
  return (
    <div className='bg_Image h-[80vh] flex justify-between items-center '>
        {/* left  */}
        <div className='pl-40'>
            <p className='text-xl text-gray-600 tracking-widest '>Best Sell</p>
            <h1 className='text-4xl tracking-widest'>Trendy Products</h1>
            <div className='flex gap-3 text-gray-600 mt-6'> <FaRegArrowAltCircleRight />Free Shipping </div>
            <div className='flex gap-3 text-gray-600'> <FaRegArrowAltCircleRight />100% Secure Checkout </div>
            <div className='flex gap-3 text-gray-600 mb-6'> <FaRegArrowAltCircleRight />Quality Ensured </div>
            <button className='px-5 py-1.5 bg-[#fd491c] rounded-md text-white'>Read More</button>

        </div>

        {/* right */}
     <div className='flex gap-4 '>
        <img src={data.trend_1} alt="image" className='size-70 border-4 border-[#f94d1c] border-l-0 border-r-0' />
        <img src={data.trend_2} alt="image" className='size-70 border-4 border-[#f94d1c] border-l-0 border-r-0' />
        <img src={data.trend_3} alt="image" className='size-70 border-4 border-[#f94d1c] border-l-0 border-r-0' />
     </div>
    </div>
  )
}

export default Trending