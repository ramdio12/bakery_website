import React from "react";
import "./css/BreadCard.css";
import { motion } from "framer-motion";

interface Props {
  name: string;
  description: string;
  img: string;
}

const BreadCard: React.FC<Props> = ({ name, description, img }) => {
  return (
    <div className="card">
      <div className="card__img">
        <motion.img
          initial={{ opacity: 0, scale: 0, translateY: 100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={img}
          alt={name}
        />
      </div>
      <div className="card__text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BreadCard;
