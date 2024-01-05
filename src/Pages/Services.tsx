import React from "react";
import "./css/Services.css";
import services from "../data/services.json";
import ServicesCard from "../Components/ServicesCard";
import qoute from "../../public/img/tstmony.png";
import bakerpic from "../assets/img/baker.jpg";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services__bg">
        <motion.h2
          initial={{ opacity: 0, translateY: 200, scale: 0 }}
          whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          Our Services
        </motion.h2>
      </div>
      <div className="container">
        <div className="services__group">
          {services.map((service) => (
            <ServicesCard key={service.id} {...service} />
          ))}
        </div>
      </div>
      <div className="message">
        <motion.img
          initial={{ opacity: 0, rotateZ: 90 }}
          whileInView={{ opacity: 1, rotateZ: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={qoute}
          className="qoute"
          alt="qoute"
        />
        <motion.div
          initial={{ opacity: 0, translateY: 400 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <p>
            Our pastries are baked fresh on a daily basis with high quality
            ingredients while preserving traditional European techniques. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="baker-profile">
            <img src={bakerpic} alt="the_baker" />
            <h2>Paul Smith, Baker</h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
