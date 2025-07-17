import React from 'react'
import Client_1 from '../assets/images/Client_1.png' 
import Client_2 from '../assets/images/Client_2.png'
import Client_3 from '../assets/images/Client_3.png'
import { SiComma } from 'react-icons/si'
import { BiStar } from 'react-icons/bi'
import { TbReplace } from 'react-icons/tb'
import { FaCartArrowDown } from 'react-icons/fa'
import { PiPackageDuotone } from 'react-icons/pi'

const Discount = ({data } ) => {
    let Details =  {
          name : 'Jhon Smith' ,
          date: '18 : August : 2023',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    let images= [ Client_1 , Client_2 , Client_3 ]
    
    let Benifits = [
      {
        icon : TbReplace,
        description : " Easy 7 days replacement Only If the product is faulty"
      },
      {
        icon : FaCartArrowDown,
        description : "Free Home Delivery We don't sell your info"
      },
      {
        icon : PiPackageDuotone,
        description : "Quality Ensured Every product's quality is ensured"
      }
    ]
      
  return (
    <>
     {/* Discount Section */}
    <div className='flex gap-50  bg-gray-100 h-110 ' >
        <img src={data.discount} alt="Discount_Image"  className='h-full'/>
        
        <div className='my-auto w-full'>
            <p className='tracking-[0.2rem] text-gray-600 text-lg'> 20% Discount</p>
            <h1 className='text-5xl font-bold my-7'>Subscribe & Get 20% Discount code</h1>
            <p >Looking for a discount code for Your suprise ?</p>
            <div className='flex gap-5 my-5'>
            <input type="email" className='bg-white flex-1 py-6 px-5 rounded-xl ' placeholder='Enter You Email '/>
            <button className='px-5 py-1.5 bg-[#fd491c] rounded-md text-white'>Shop Now</button>
            </div>
            <p>Sign up for our newsletter below to receive the latest discount codes for Your surprise.</p>
        </div>
    </div>

        {/* Feedback Section  */}

    <div className='flex justify-center items-center  gap-10 bg h-[90vh] mb-20 border  '>
       {images.map((items,index)=>(
        <div className='border h-[80%] w-[23%] bg-white rounded-md'>
            <div className='flex gap-4 border justify-center items-center h-[40%]'>
            <div className='flex items-end h-full '> <SiComma size={30} /> </div>
            
            <div className='border-2 p-5 rounded-full relative'>
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-1 top-[65%] transform -translate-y-1/2"></div>
            <img src={items} alt='Client_Image_1' className='items-center' />
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -right-1 top-[30%] transform -translate-y-1/2"></div>
            </div>

            <div className='flex items-start  h-full '> <SiComma size={30} /> </div>
            </div>
            <p className='text-center text-lg p-5 bg-[#fd491c] text-white font-semibold' >{Details.name}</p>
            <div className='flex justify-center gap-2 mt-2 '> {Array(5).fill('').map(()=>( <BiStar size={20}  />))} </div>
            <p className='text-center text-lg pt-2 '>{Details.date}</p>
            <p className='text-center text-lg pt-5 px-1 '>{Details.description}</p>       
        </div> 
       ))} 
    </div>

    {/* Benifits Section  */}
      <div>
        {Benifits.map((items,index)=>(
          <>
          <div>{ <items.icon />}</div>
          <div> {items.description}</div>
          </>
        ))}
      </div>

    </>


  )
}

export default Discount