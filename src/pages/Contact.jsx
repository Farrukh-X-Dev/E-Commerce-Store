import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { BiLoader } from "react-icons/bi";


const Contact = () => {
  let documentTitle = "Contact - Om Mart";
  document.title = documentTitle;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          toast.success(" Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          toast.error(" Failed to send message. Try again!");
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };
  
  return (
    <div className=" bg-white flex items-center justify-center py-5 px-6">
      <div className="w-full h-[80vh] grid md:grid-cols-2 gap-10 bg-gray-100  rounded-2xl overflow-hidden">
        
        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8"
        >
          <h2 className="text-3xl font-bold text-[#fd491c] mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd491c]"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd491c]"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd491c]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#fd491c] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
             { loading ? <BiLoader className='mx-auto animate-spin size-6' /> : ' Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Right Column - Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14480.080617285497!2d67.0551878213882!3d24.863161229357114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f26a9ee6c5d%3A0xe00fe1177e70d11!2sTechzone%20Learning!5e0!3m2!1sen!2s!4v1758279176435!5m2!1sen!2s" 
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
