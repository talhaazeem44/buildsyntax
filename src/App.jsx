import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Components/Hero';

import Roadmap from './Components/Roadmap';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import BackgroundParticles from './Components/BackgroundParticles';
import Headers from './Components/Headers';
function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BackgroundParticles />
      <div className="backdrop-blur-sm bg-black/70 min-h-screen">
      <Headers/>
        <Hero />
        <Feature/>
       
        <Roadmap />
        <Contact/>
      </div>
    </motion.div>
  );
}

export default App;
