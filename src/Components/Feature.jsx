import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  const services = [
    {
      title: "Custom Web Apps",
      desc: "We build modern, responsive web applications tailored to your business needs.",
    },
    {
      title: "UI/UX Design",
      desc: "Interactive and stunning user experiences using cutting-edge design systems.",
    },
    {
      title: "Motion & Animation",
      desc: "Bring your interface to life with Framer Motion, Lottie, GSAP, and more.",
    },
    {
      title: "E-Commerce",
      desc: "Build secure and scalable online stores that convert more visitors.",
    },
    {
      title: "SEO & Performance",
      desc: "Speed up your site and rank better with our optimization strategies.",
    },
    {
      title: "Mobile App Prototypes",
      desc: "Quickly launch MVPs and working demos with cross-platform tools.",
    },
  ];
  
  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  ];
  
  return (
    <section className=" features">
      <h1 className="d-flex justify-content-center">Our Services</h1>
      <div className="features-grid">
  {services.map((item, i) => (
    <motion.div
      key={i}
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15 }}
    >
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-sm text-gray-700">{item.desc}</p>
    </motion.div>
  ))}
</div>
<div className="tech-carousel">
  <div className="tech-track">
    {techStack.concat(techStack).map((tech, i) => (
      <div className="tech-item" key={i}>
        <img src={tech.logo} alt={tech.name} />
        <p>{tech.name}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}

export default Features;
