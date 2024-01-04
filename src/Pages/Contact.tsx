import React from "react";
import "./css/Contact.css";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <motion.div
        initial={{ opacity: 0, translateX: -400 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="contact__text">
        <div className="place">
          <h2>Visit Us!</h2>
          <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
        </div>

        <div className="hours">
          <h3>HOURS</h3>
          <div className="monsat">
            <p>Monday - Saturday</p>
            <p>9am - 7pm</p>
          </div>

          <div className="sunday">
            <p>Sunday</p>
            <p>10am-6pm</p>
          </div>
        </div>
        <div className="phone">
          <h3>PHONE</h3>
          <p>1 (234) 567-891</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 400 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="contact__img"></motion.div>
    </section>
  );
};

export default Contact;
