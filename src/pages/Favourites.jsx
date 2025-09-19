import React, { useContext } from "react";
import { ProductProvider } from "../context/ContextApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favourites = () => {
  let { favourites, setFavourites, setFavouritesCount } = useContext(ProductProvider);

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
    setFavouritesCount((prev) => prev - 1);
    toast.info("Removed from Favourites");
  };

  return (
    <div className="bg-gray-50  py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-[#fd491c]">My Favourites</h1>

        {favourites.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 mb-6">No items in your favourites yet.</p>
            <Link
              to="/shop"
              className="bg-[#fd491c] text-white px-6 py-2 rounded-md hover:bg-orange-600"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favourites.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-auto object-contain mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {item.title}
                </h2>
                <p className="text-[#fd491c] font-bold mt-2">{item.price}</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => removeFromFavourites(item.id)}
                    className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                  >
                    Remove
                  </button>
                  <Link
                    to={`/products/${item.id}`}
                    className="bg-[#fd491c] text-white px-4 py-2 rounded-md hover:bg-orange-600"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
