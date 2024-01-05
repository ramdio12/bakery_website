import React from "react";
import "./css/Intro.css";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <section className="intro" id="intro">
      <div className="intro_container">
        <motion.h2
          initial={{ opacity: 0, translateX: -200, scale: 0 }}
          whileInView={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          Roll, proof, and bake. Every day.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, translateX: 200, scale: 0 }}
          whileInView={{ opacity: 1, translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          When it comes to bread and sandwiches, freshness equals quality.
          That's why we bake our loaves, bagels, and sweet treats every single
          morning for maximum freshness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, translateY: 200 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="btn-group">
          <button>SEE FULL MENU</button>
          <button>ORDER NOW</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
