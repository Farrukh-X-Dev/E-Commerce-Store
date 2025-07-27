import React from "react";
import { site_images } from "../config";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
    let Footer_data ={
        information:[
            { label: "Old city Street, USA", to: "#" },
            { label: "About us", to: "/about" },
            { label: "Check out", to: "/collection" },
            { label: "Return and refund", href: "#" }
        ],

        help : [
            "My Account",
            "Free Home Delivery",
            "Cart",
            "Order Status"
        ],
        
        social_icons : [
            {name : BsTwitter} ,
            {name : BsInstagram} ,
            {name : BsYoutube} ,
        ],

        category: [
            "Tanks",
            "T-Shirts",
            "Polo Shirts",
            "Casual Shirts",
            "Bandana",
            "Men Belts"
        ]

    }
    
  return (
    <div className="h-min bg-[#0A191C] text-white flex flex-col justify-center gap-10">
      <div className="flex justify-around items-center mt-10">
     
        <div className="flex gap-8 flex-col ">
            <img src={site_images.logo} alt="Logo" className="w-45 h-15 invert " />
            
            <div><p>Lorem ipsum dolor sit amet<br /> consectetur adipisicing.</p></div>
            <div><p>Privacy Policy</p></div>
            <div><p>Terms and Condition</p></div>

        </div>

        <div className="flex gap-6 flex-col ">
            <h1 className="text-3xl font-bold mb-4">Information</h1>
            <div className="flex flex-col gap-4">
               {Footer_data.information.map((items,index)=>(
              <div key={index}>{items.label}</div>
            ))}
            </div>
        </div>

        <div className="flex gap-6 flex-col ">
          <h1 className="text-3xl font-bold mb-4">Help</h1>
            <div className="flex flex-col gap-4">
          {Footer_data.help.map((items,index)=>(
            <div key={index }>{items}</div>
          ))}
          </div>
        </div>

        <div className="flex flex-col gap-9 ">
          <h1 className="text-3xl font-bold">Social Media</h1>
          
          <div className="flex gap-8" >
            {Footer_data.social_icons.map((items,index)=>(
            <items.name size={20} key={index} />
          ))}
          </div>

            <div className="flex items-center gap-3"> <BiPhoneCall size={25} className="text-[#fd491c]" /> 
            +(00)-000-000-0000
            </div>

            <div className="flex items-center gap-3">
              < MdEmail size={22} className="text-[#fd491c]"/>
               m.farrukhnoman@gmail.com
            </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-600 w-[90%] mx-auto   ">
        <div className="flex items-center gap-10 my-7">
      <h1 className="text-3xl font-bold ">Category</h1>
        {Footer_data.category.map((items,index)=>(
          <p key={index}>{items}</p>
        ))}
        </div>
        <p className="my-7"> © OMMart 2023 | All Rights Reserved  </p>
      </div>

    </div>
  );
};

export default Footer;
