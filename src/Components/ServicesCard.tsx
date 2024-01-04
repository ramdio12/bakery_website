import React from "react";
import "./css/ServicesCard.css";
import { motion } from "framer-motion";

interface Props {
  img: string;
  name: string;
  description: string;
}

const ServicesCard: React.FC<Props> = ({ img, name, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200, scale: 0 }}
      whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="servicescard">
      <div className="servicescard__img">
        <img src={img} alt={name} />
      </div>
      <div className="servicescard__text">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href="#">MORE</a>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
