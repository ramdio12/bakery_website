import React from "react";
import "./css/Home.css";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <section className="home" id="#">
      <motion.div
        initial={{ opacity: 0, translateX: -200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="home__bg">
        .
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 200 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="home__intro">
        <div className="text-container">
          <motion.h1
            initial={{ opacity: 0, rotateZ: 90 }}
            whileInView={{ opacity: 1, rotateZ: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            Breads Bakery
          </motion.h1>
          <h3>
            Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus
            pellentesque eu tincidunt tortor.
          </h3>
          <button className="home__btn">READ MORE</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
