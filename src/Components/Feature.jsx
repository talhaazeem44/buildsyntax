import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';
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
      image: "/src/assets/img/uxui.jpg",
    },
    {
      title: "UI/UX Design",
      desc: "Interactive and stunning user experiences using cutting-edge design systems.",
      image: "/src/assets/img/uxui.jpg",
    },
    {
      title: "Mobile App Development",
      desc: "Quickly launch MVPs and working demos with cross-platform tools.",
      image: "/src/assets/img/mobileapp.jpg",
    },    

    {
      title: "E-Commerce",
      desc: "Build secure and scalable online stores that convert more visitors.",
      image: "/src/assets/img/ecommerece.jpg",
    },
    {
      title: "SEO & Performance",
      desc: "Speed up your site and rank better with our optimization strategies.",
      image: "/src/assets/img/seo.png",
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
    
    <section className="services-section">
<BackgroundParticles />
    <div className="services-header">
      <p className="services-subtitle">OUR SERVICES</p>
      <h1 className="services-title">Transform Your Business</h1>
    </div>
  
    <div className="services-grid">
      {services.map((service, i) => (
        <motion.div
          key={i}
          className="service-card"
          ref={(el) => (cardsRef.current[i] = el)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <img src={service.image} alt={service.title} className="service-img" />
          <div className="service-title-overlay">
            <h3>{service.title}</h3>
          </div>
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
    <div className="view-more-btn-container">
      <button className="view-more-btn">View More Services ↓</button>
    </div>
  
    <div className="talk-tab">Let's Talk Business</div>
  </section>
  
  );
}

export default Features;
