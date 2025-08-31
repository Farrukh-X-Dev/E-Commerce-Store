import React from "react";
import {
  ForyouProducts,
  productsLong,
  productsShort,
  site_images,
} from "../config";
import { BiPhoneCall } from "react-icons/bi";
import ProductShort from "../components/ProductShort";
import ProductWide from "../components/ProductWide";
import ForYou from "../components/ForYou";
import Trending from "../components/Trending";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Hero Section  */}
      <div className="flex items-center justify-around h-[91vh]  bg-gray-100">
        {/* Left Section  */}
        <div className="w-[50%]">
          <p className="font-[Kaushan_script] text-2xl text-gray-700">
            Starting At Only $0.5
          </p>
          <h1 className="text-8xl my-3 font-semibold">
            <span className="text-[#fd491c]"> Summer </span> Special Collection{" "}
          </h1>
          <p className="text-xl mb-5">
            Brand day flat 20% off and free shipping{" "}
          </p>
          <div className="flex gap-7">
            <button className="px-5 py-1.5 bg-[#fd491c] rounded-md text-white">
              Shop Now
            </button>
            <p className="flex items-center gap-3">
              <BiPhoneCall size={25} className="text-[#fd491c]" />{" "}
              +(00)-000-000-0000
            </p>
          </div>
        </div>

        {/* Right Section   */}
        <div className="h-full flex items-end">
          <img src={site_images.banner} alt="Image" className="h-[90%]" />
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-20 flex w-full justify-center gap-10 ">
        <ProductShort Products={productsShort.slice(0, 2)} />
        <ProductWide Products={productsLong.slice(0, 1)} />
      </div>
      <div className="mt-10 flex justify-center items-center gap-10 mx-auto ">
        <ProductWide Products={productsLong.slice(1, 2)} />
        <ProductShort Products={productsShort.slice(2, 4)} />
      </div>

      {/* Just For You Section */}
      <ForYou data={ForyouProducts} />

      {/* Treanding Section  */}
      <Trending data={site_images} />

      {/* Discount Section   */}
      <Discount data={site_images} />

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default Home;
