import React from "react"; 
import {   ForyouProducts,   productsLong,   productsShort,   site_images, } from "../config"; 
import { BiPhoneCall } from "react-icons/bi"; 
import ProductShort from "../components/ProductShort"; 
import ProductWide from "../components/ProductWide"; 
import ForYou from "../components/ForYou"; 
import Trending from "../components/Trending"; 
import Discount from "../components/Discount"; 
import Footer from "../components/Footer";  
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };

const Home = () => {   
  return (     
    <>       
      {/* Hero Section  */}       
      <motion.div className="flex items-center justify-around h-[91vh]  bg-gray-100" initial="hidden" animate="show" variants={staggerContainer}>         
        {/* Left Section  */}         
        <motion.div className="w-[50%]" variants={fadeUp}>           
          <p className="font-[Kaushan_script] text-2xl text-gray-700">Starting At Only $0.5</p>           
          <h1 className="text-8xl my-3 font-semibold"><span className="text-[#fd491c]"> Summer </span> Special Collection{" "}</h1>           
          <p className="text-xl mb-5">Brand day flat 20% off and free shipping{" "}</p>           
          <div className="flex gap-7">             
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="px-5 py-1.5 bg-[#fd491c] rounded-md text-white">Shop Now</motion.button>             
            <p className="flex items-center gap-3"><BiPhoneCall size={25} className="text-[#fd491c]" />{" "}+(00)-000-000-0000</p>           
          </div>         
        </motion.div>          

        {/* Right Section   */}         
        <motion.div className="h-full flex items-end" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>           
          <img src={site_images.banner} alt="Image" className="h-[90%]" />         
        </motion.div>       
      </motion.div>        

      {/* Products Section */}       
      <motion.div className="mt-20 flex w-full justify-center gap-10 " initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>         
        <motion.div variants={fadeUp}><ProductShort Products={productsShort.slice(0, 2)} /></motion.div>         
        <motion.div variants={fadeUp}><ProductWide Products={productsLong.slice(0, 1)} /></motion.div>       
      </motion.div>       

      <motion.div className="mt-10 flex justify-center items-center gap-10 mx-auto " initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>         
        <motion.div variants={fadeUp}><ProductWide Products={productsLong.slice(1, 2)} /></motion.div>         
        <motion.div variants={fadeUp}><ProductShort Products={productsShort.slice(2, 4)} /></motion.div>       
      </motion.div>        

      {/* Just For You Section */}       
      <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>         
        <ForYou data={ForyouProducts} />       
      </motion.div>        

      {/* Treanding Section  */}       
      <motion.div 
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.7 }} 
  viewport={{ once: true }}
>
  <Trending data={site_images} />
</motion.div>      

      {/* Discount Section   */}       
      <motion.div initial={{ opacity: 0, rotate: -2 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true }}>         
        <Discount data={site_images} />       
      </motion.div>        

      {/* Footer  */}       
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>         
        <Footer />       
      </motion.div>     
    </>   
  ); 
};  

export default Home;
