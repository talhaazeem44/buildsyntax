import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="rounded-xl shadow-xl bg-white/60 backdrop-blur p-8 max-w-3xl mx-auto border border-green-300">
  <h2 className="neon-text-green text-2xl font-bold">About Us</h2>
  <p className="text-gray-700 mt-4">We’re blending design and tech with light and life.</p>
</div>

    <h2 className="neon-text text-3xl font-bold">About Us</h2>
  </motion.div>
  
  );
}

export default About;
