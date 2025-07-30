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
   
      <>
   
      <div className=" min-h-screen">
      <Headers />
      <Hero />
      <Feature />
      <Roadmap />
      <Contact />
    </div>
    </>

  );
}

export default App;
