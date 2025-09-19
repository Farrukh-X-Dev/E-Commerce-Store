import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiHappy, BiRocket, BiStore } from "react-icons/bi";
import head from "../assets/images/head.jpeg";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section  */}
<section
  className="relative bg-fixed bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600')",
  }}
>
  {/* Fade effect overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

  <div className="relative z-10 text-center text-white px-6">
    <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
    <p className="text-lg max-w-3xl mx-auto">
      We are passionate about bringing you the best quality products with
      unbeatable service.
    </p>
  </div>
</section>



      {/* Mission / Vision / Values */}
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <BiRocket size={40} className="text-[#fd491c]" />,
            title: "Our Mission",
            text: "To inspire confidence and comfort through premium products designed for modern lifestyles.",
          },
          {
            icon: <BiHappy size={40} className="text-[#fd491c]" />,
            title: "Our Vision",
            text: "To be the most trusted online brand known for customer happiness and long-lasting quality.",
          },
          {
            icon: <BiStore size={40} className="text-[#fd491c]" />,
            title: "Our Values",
            text: "We value honesty, sustainability, and creativity. Every product is a reflection of these principles.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Our Story"
            className="rounded-2xl shadow-xl w-full md:w-1/2 object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-[#fd491c] mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              Starting from a small idea, we’ve grown into a brand trusted by
              thousands of happy customers. Each product we offer is crafted
              with care and designed to last, keeping your needs in mind.
            </p>
            <Link
              to="/shop-all"
              className="bg-[#fd491c] text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#fd491c] mb-12">
            Meet Our Team
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sophia Johnson",
                role: "Head of Design ",
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500",
              },
              {
                name: "Farrukh Noman",
                role: "Founder & CEO",
                img: head,
              },
              {
                name: "Emily Carter",
                role: "Marketing Manager",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover items-center rounded-full shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fd491c] py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold mb-6"
        >
          Join Our Journey
        </motion.h2>
        <p className="text-lg mb-8">
          Be part of our growing family and experience shopping like never
          before.
        </p>
        <Link
          to="/shop-all"
          className="bg-white text-[#fd491c] px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-200"
        >
          Explore Collection
        </Link>
      </section>
    </div>
  );
};

export default About;
