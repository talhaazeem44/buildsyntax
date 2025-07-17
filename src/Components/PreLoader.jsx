import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/animations/robot.json'; // replace with your Lottie
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      onComplete(); // Notify parent
    }, 3000); // show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (done) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Lottie animationData={robotAnimation} loop />
    </motion.div>
  );
}
