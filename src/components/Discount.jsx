import React from 'react'

const Discount = ({data } ) => {
    let Details =  {
          name : 'Jhon Smith' ,
          date: '18: August: 2023',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        }
      
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

    <div className='flex justify-center gap-10 bg h-[90vh] mb-20'>
       {Array(3).fill('').map((items,index)=>(
        <div>
            <img src={data.Client_1} alt='Client_Image_1' />
            <p>{Details.description}</p>
        </div> 

       ))

       } 

    </div>
    </>


  )
}

export default Discount