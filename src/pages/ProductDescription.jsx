import { useEffect, useState } from "react";
import { allProducts } from "../config";
import { useParams } from "react-router-dom";

const ProductDescription = () => {

    let {id} = useParams()
    let [product , setProduct] = useState([])

    useEffect(()=> {
        return setProduct(allProducts.filter((items)=> {return id == items.id } ))
    } , [id])
    
    
  return (
    product.map((items,index)=>(
     <div className="bg-white " key={index}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className=" md:w-1/2 px-4 mb-8">
            <img
              src={items.image}
              alt="Product"
              className=" rounded-lg shadow-md mb-4 h-120 mx-auto"
            />

          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 text-[#fd491c]">
              {items.title}
            </h2>
            <p className="text-gray-500 mb-4">SKU: WH100XM4</p>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2 text-[#fd491c]">
              {items.price}
              </span>
              <span className="text-gray-400 line-through">{items.offPrice}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4 text-[#fd491c]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 
                        5.006 5.404.434c1.164.093 1.636 1.545.749 
                        2.305l-4.117 3.527 1.257 5.273c.271 
                        1.136-.964 2.033-1.96 1.425L12 18.354 
                        7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                        -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 
                        2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">{items.rating}</span>
            </div>

            <p className="text-gray-700 mb-6">
              Experience premium clothes quality and industry-leading trends
               with this classic wear. Perfect for semi-formals and frequent travelers.
            </p>

            {/* Color Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:ring-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:ring-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:ring-2 focus:ring-blue-500"></button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-[#fd491c] focus:ring focus:ring-[#fd491c] focus:ring-opacity-50"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-[#fd491c] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#fd491c] focus:ring-offset-2">
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    ))

  );
};

export default ProductDescription;
