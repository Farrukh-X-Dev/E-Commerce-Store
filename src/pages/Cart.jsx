import React, { useContext } from 'react'
import { ProductProvider } from '../context/ContextApi'
import { BiX } from 'react-icons/bi';

const Cart = () => {
  let { cartProducts , setCartProducts , setQuantity , quantity } = useContext(ProductProvider)

  
  let RemoveProduct = (id) => {
    let current = cartProducts.find((items)=> items.id == id )
    {quantity > 0 ?  setQuantity((prev) => prev - current.quantity ) : '' }
    
    
    setCartProducts((prev )=> prev.filter((items)=> items.id !== id ) )
  }
  
  return (
    <div className='flex justify-center flex-wrap gap-10 '>
    {cartProducts.length > 0 ? cartProducts.map((items , index) => (
    <div key={index} className="bg-base-100 w-96 shadow-2xl my-3 relative ">
      <span 
      onClick={()=> RemoveProduct(items.id)}
      className='text-orange-400 top-4 right-3 absolute text-2xl cursor-pointer hover:text-orange-600'> 
        <BiX />
       </span>
      <figure className="px-10 pt-10">
        <img src={items.image} alt={items.image} className="rounded-xl w-96 h-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-2xl mt-2">{items.title }</h2>
        <p>Perfect for semi-formals and frequent travelers.</p>
        <div className="card-actions">
          <button className="bg-[#fd491c] hover:bg-orange-700 px-5 py-2 text-white rounded my-2">Buy Now</button>
        </div>
      </div>
    </div>
    )) : <div className=' mt-50 text-xl text-gray-500'> Nothing Here ...</div>}
    </div>
  )
}

export default Cart