import React, { useEffect, useState } from 'react'
import { BiStar } from 'react-icons/bi';

const ForYou = ({data}) => {
    
    let [category , setCategory] = useState('All')
    let categories = [  'All',  'Tanks',  'T-Shirts',  'Polo Shirts',  'Casual Shirts',  'Bandana',  'Mens Belts'  ];
    let [filter , setFilter] = useState(data)
    
  useEffect(() => {
    if(category == 'All'){
      return  setFilter(data);
    }
    return setFilter( data.filter((items)=> items.category == category) )
    
  }, [category])
  

  return (
    <div className='mt-20 bg-gray-100 '>
      <h1 className='font-semibold text-center text-2xl'>Just For You </h1>
      <div className='flex justify-center gap-10 mt-5  mb-10'>
      {categories.map((items , index)=>(
        <div key={index} className={ ` ${category == items ? 'underline' : ''} bg-[#f94d1c] cursor-pointer py-1.5 px-3 rounded-md text-white` } onClick={()=>setCategory(items)}>
          {items}
        </div>
      ))}
      </div>

      <div className=' grid grid-cols-4 justify-items-center '>
        {filter.map((items , index)=>(
          <div key={index} className='mb-10'> 
            <img src={items.image} alt={items.title} className='size-70 rounded-2xl'/>
            <h1 className='text-xl text-center my-1 '>{items.title}</h1>
            <p className='text-center '>
              <del className='text-[1.2rem]'> {items.offPrice}</del>
              <span className='text-[1.5rem] text-[#fd491c]'> {items.price}</span>
            </p>
            <div className='flex justify-center gap-1 items-center'>
              {Array(5).fill("").map(( )=>{
                return <BiStar />
              })} {items.rating}
            </div>

          </div>
        ))

        }
      </div>
        
        


    </div>
  )
}

export default ForYou