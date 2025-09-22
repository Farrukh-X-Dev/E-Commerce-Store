// src/pages/Cart.jsx
import React, { useContext } from "react";
import { ProductProvider } from "../context/ContextApi";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
  let { cartProducts, setCartProducts, setQuantity, quantity } =
    useContext(ProductProvider);

  // Remove product
  let RemoveProduct = (id) => {
    let current = cartProducts.find((item) => item.id === id);
    if (current && quantity > 0) {
      setQuantity((prev) => prev - current.quantity);
    }
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase quantity
  let IncreaseQuantity = (id) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  let DecreaseQuantity = (id) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Calculate totals
  let cartTotal = cartProducts.reduce(
    (acc, item) => acc + (item.offPrice || item.price) * item.quantity,
    0
  );

  return (
    <div className="px-6 pt-12 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-[#fd491c] mb-8">Your Cart</h1>

      {cartProducts.length > 0 ? (
        <>
          <div className="flex flex-col gap-6">
            {cartProducts.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between relative"
              >
                {/* Remove product */}
                <span
                  onClick={() => RemoveProduct(item.id)}
                  className="text-orange-400 top-4 right-4 absolute text-2xl cursor-pointer hover:text-orange-600"
                >
                  <BiX />
                </span>

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-32  rounded-xl"
                />

                {/* Product Info */}
                <div className="flex-1 px-6 text-center md:text-left">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-lg font-bold text-[#fd491c] mt-2">
                    ${(item.offPrice || item.price) * item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => DecreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => IncreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-xl rounded-2xl p-6 mt-10 max-w-lg ml-auto">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between text-lg font-medium mb-6">
              <span>Total:</span>
              <span className="text-[#fd491c]">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#fd491c] text-white py-3 rounded-xl font-medium shadow hover:bg-[#e44012] transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <p className="text-gray-500 mb-6">Your cart is empty.</p>
          <Link
            to="/shop"
            className="bg-[#fd491c] text-white px-6 py-3 rounded-md hover:bg-orange-600"
          >
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
