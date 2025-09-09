import React, { useEffect, useState } from 'react'
import { BiStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ForYou = ({ data }) => {

  let [category, setCategory] = useState('All')
  let categories = ['All', 'Tanks', 'T-Shirts', 'Polo Shirts', 'Casual Shirts', 'Bandana', 'Mens Belts'];
  let [filter, setFilter] = useState(data)

  useEffect(() => {
    if (category == 'All') {
      return setFilter(data);
    }
    return setFilter(data.filter((items) => items.category == category))

  }, [category])


  return (
    <div className='bg-gray-100 py-5 mt-10'>
      <div className=' w-[80%] mx-auto'>
        <h1 className='font-semibold text-center text-2xl '>Just For You </h1>
        <div className='flex justify-center gap-10 mt-5  mb-10'>
          {categories.map((items, index) => (
            <button key={index} className={` ${category == items ? 'underline' : ''} bg-[#f94d1c] cursor-pointer py-1.5 px-3 rounded-md text-white`} onClick={() => setCategory(items)}>
              {items}
            </button>
          ))}
        </div>

        <div className=' flex flex-wrap justify-center gap-20 '>
          {filter.map((items, index) => (
            <Link to={`products/${items.id}` } key={index}>
            <div
              
              className="group bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={items.image}
                alt={items.title}
                className="size-50 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <h1 className="text-xl text-center my-1 group-hover:text-[#fd491c] transition-colors">
                {items.title}
              </h1>
              <p className="text-center">
                <del className="text-[1.2rem]"> {items.offPrice}</del>
                <span className="text-[1.5rem] text-[#fd491c]"> {items.price}</span>
              </p>
              <div className="flex justify-center gap-1 items-center">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <BiStar key={index} className="group-hover:text-[#fd491c] transition-colors" />
                  ))}{" "}
                {items.rating}
              </div>
            </div>
            </Link>
          ))

          }
        </div>
      </div>
    </div>
  )
}

export default ForYou