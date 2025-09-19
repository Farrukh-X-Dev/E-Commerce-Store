// src/pages/Shop.jsx
import React from "react";
import { motion } from "framer-motion";
import { BiStar } from "react-icons/bi";
import { allProducts } from "../config";

const Shop = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-wide">
          Our <span className="text-[#fd491c]">Shop</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover our exclusive collection and grab your favorites today
        </p>
      </div>

      {/* Product Flexbox Layout */}
      <motion.div
        className="flex flex-wrap gap-10 px-8 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {allProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 w-[270px]" 
            whileHover={{ scale: 1.05 }}
          >
            {/* Product Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.title}
                className="h-full w-full "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              {product.offPrice && (
                <span className="absolute top-3 left-3 bg-[#fd491c] text-white text-sm font-semibold px-3 py-1 rounded-lg shadow">
                  {Math.round(
                    ((product.price - product.offPrice) / product.price) * 100
                  )}
                  % OFF
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <BiStar
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 text-sm ml-1">
                  {product.rating}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-2">
                {product.offPrice ? (
                  <>
                    <span className="text-lg font-bold text-[#fd491c]">
                      ${product.offPrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.price}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-[#fd491c]">
                    {product.price ? `$${product.price}` : "Coming Soon"}
                  </span>
                )}
              </div>

              {/* Buy Now Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="mt-3 w-full bg-[#fd491c] text-white py-2 rounded-xl font-medium shadow hover:bg-[#e44012] transition"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Shop;
