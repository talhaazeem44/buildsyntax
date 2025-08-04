import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from './Components/Hero';
import Roadmap from './Components/Roadmap';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';
import AboutPage from './Components/AboutPage';
import BackgroundParticles from './Components/BackgroundParticles';
import Headers from './Components/Headers';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Headers />
      <Hero />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
