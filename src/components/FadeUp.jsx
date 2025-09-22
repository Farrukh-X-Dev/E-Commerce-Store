// src/components/FadeUp.jsx
import { motion } from "framer-motion";

const FadeUp = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}       // start hidden and down
      whileInView={{ opacity: 1, y: 0 }}   // visible and moved up
      exit={{ opacity: 0, y: 50 }}         // fade out when leaving
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // animate when 20% visible
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
