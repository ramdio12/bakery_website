import React from "react";
import aboutpic from "../assets/img/about.jpg";
import "./css/About.css";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="about">
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="about__bg"></motion.div>
      <div className="about__img">
        <motion.img
          initial={{ opacity: 0, rotateZ: 90, scale: 0 }}
          whileInView={{ opacity: 1, rotateZ: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={aboutpic}
          alt="about"
        />
      </div>
      <div className="about__text">
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          Hello!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateX: -200, scale: 0 }}
          whileInView={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          Lorem imotion.sum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          READ MORE
        </motion.button>
      </div>
    </section>
  );
};

export default About;
