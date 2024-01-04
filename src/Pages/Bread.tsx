import React from "react";
import "./css/Bread.css";
import breads from "../data/bread.json";
import BreadCard from "../Components/BreadCard";
import { motion } from "framer-motion";

const Bread: React.FC = () => {
  return (
    <section className="bread" id="bread">
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        Our Bread
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, translateY: 400 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bread__group">
        {breads.map((bread) => (
          <BreadCard key={bread.id} {...bread} />
        ))}
      </motion.div>
    </section>
  );
};

export default Bread;
