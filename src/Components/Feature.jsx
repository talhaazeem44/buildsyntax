import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const cardsRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Clear any existing animations
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { clearProps: "all" });
      }
    });

    // Create new animations with better visibility
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          {
            opacity: 0,
            y: 50,
            visibility: "hidden"
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out"
          }
        );
      }
    });

    // Cleanup function
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      });
    };
  }, []);

  const handleCardHover = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const popupWidth = 400; // Estimated popup width
    
    let x = rect.left + rect.width / 2 - popupWidth / 2;
    
    // Ensure popup doesn't go off-screen
    if (x < 20) x = 20;
    if (x + popupWidth > viewportWidth - 20) {
      x = viewportWidth - popupWidth - 20;
    }
    
    setPopupPosition({
      x: x,
      y: rect.top - 20
    });
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    setHoveredCard(null);
  };

  const services = [
    {
      title: "Website Design & Development",
      desc: "We create custom, user-friendly websites tailored to your business needs. From eye-catching landing pages to full-fledged e-commerce platforms.",
      image: "/src/assets/img/uxui.jpg", // Local: design/dev
      details: [
        "Custom Website Design (UI/UX focused)",
        "Responsive Web Development for mobile, tablet, and desktop",
        "Landing Page Design",
        "E-commerce Websites using Shopify, WooCommerce, Magento",
        "Portfolio & Personal Branding Sites",
        "Corporate & Business Websites",
        "Blog or News Portals",
        "Custom Web Applications such as dashboards and SaaS platforms"
      ]
    },
    {
      title: "Website Maintenance & Support",
      desc: "We keep your website running smoothly with regular updates, backups, and quick fixes.",
      image: "/src/assets/img/mobileapp.jpg", // Local: maintenance/support
      details: [
        "Regular updates and backups",
        "Bug and error fixing",
        "Content updates",
        "Plugin and theme updates for WordPress, Shopify, etc.",
        "Monthly maintenance packages tailored to your needs"
      ]
    },
    {
      title: "SEO (Search Engine Optimization)",
      desc: "Boost your website's visibility with our comprehensive SEO services. We help you rank higher on search engines.",
      image: "/src/assets/img/seo.png", // Local: SEO
      details: [
        "On-page SEO including meta tags and content structuring",
        "Technical SEO focusing on site speed and mobile optimization",
        "Keyword research to target the right audience",
        "SEO audit and detailed reporting",
        "Local SEO optimization for better community reach"
      ]
    },
    {
      title: "Performance & Security Optimization",
      desc: "Improve your website's speed and security to provide a better user experience and protect your data.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center", // Unsplash: server/security
      details: [
        "Speed optimization focusing on Core Web Vitals",
        "Image and asset compression",
        "SSL certificate implementation for secure connections",
        "Firewall and malware protection",
        "Comprehensive website audit reports"
      ]
    },
    {
      title: "CMS & Platform Expertise",
      desc: "We work with a variety of content management systems and platforms to help you manage your website efficiently.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop&crop=center", // Unsplash: CMS dashboard
      details: [
        "WordPress development",
        "Shopify customization",
        "Wix, Webflow, Squarespace design and setup",
        "Headless CMS integrations with Next.js, Sanity, Strapi",
        "Migration between different platforms with zero data loss"
      ]
    },
    {
      title: "UI/UX Design",
      desc: "Enhance your user experience and interface with professionally crafted designs based on user behavior.",
      image: "/src/assets/img/uxui.jpg", // Local: UI/UX
      details: [
        "Wireframing and prototyping",
        "Figma and Adobe XD designs",
        "User journey mapping and conversion optimization",
        "A/B testing to refine layouts and flow",
        "Checkout flow improvements and CTA testing"
      ]
    },
    {
      title: "Digital Marketing Integration",
      desc: "Connect your website with powerful marketing tools to grow your audience and track your results.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&crop=center", // Unsplash: marketing
      details: [
        "Google Analytics and Search Console setup",
        "Facebook Pixel and Meta Ads tracking",
        "CRM and email marketing integrations (Mailchimp, Hubspot)",
        "Funnels and lead capture forms"
      ]
    },
    {
      title: "Hosting & Domain Services",
      desc: "We offer full domain registration and hosting solutions to keep your website online and accessible.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&crop=center", // Unsplash: servers
      details: [
        "Domain registration and management",
        "Hosting setup and migration",
        "Managed hosting plans for reliability and speed",
        "CDN setup (e.g., Cloudflare) to improve performance"
      ]
    },
    {
      title: "E-commerce Solutions",
      desc: "We help you build and optimize online stores that convert visitors into customers with streamlined processes.",
      image: "/src/assets/img/ecommerece.jpg", // Local: e-commerce
      details: [
        "Shopify and WooCommerce store setup",
        "Payment gateway integrations (Stripe, PayPal)",
        "Custom product catalogs and inventory management",
        "Checkout flow and user experience enhancements",
        "Ongoing support and updates"
      ]
    },
    {
      title: "Custom Integrations & APIs",
      desc: "We develop custom APIs and third-party integrations to connect your website with external systems.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=600&fit=crop&crop=center", // Unsplash: code/API
      details: [
        "Payment gateway integration (Stripe, PayPal)",
        "API development and third-party system integrations",
        "Booking and reservation systems",
        "Chatbots and WhatsApp chat support"
      ]
    },
    {
      title: "AI Solutions & Automation",
      desc: "Harness the power of artificial intelligence to transform your business operations and customer experience.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=center", // Unsplash: AI/robot
      details: [
        "AI chatbot and virtual assistant development",
        "Machine learning model integration for smart data analysis",
        "Advanced data analysis and predictive analytics",
        "Natural Language Processing (NLP) applications",
        "Workflow automation and intelligent process automation (IPA)"
      ]
    },
    {
      title: "Training & Documentation",
      desc: "We provide comprehensive training and documentation to empower you and your team to manage your website.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop&crop=center", // Unsplash: training/docs
      details: [
        "Admin panel walkthroughs for clients",
        "Video tutorials and written documentation",
        "WordPress and Shopify platform training"
      ]
    }
  ];
  
  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  ];
  
  return (
    <section id="services" className="services-section">
      <BackgroundParticles />
      <div className="services-header">
        <p className="services-subtitle">OUR SERVICES</p>
        <h1 className="services-title">Transform Your Business</h1>
        <p style={{ color: '#e5e5e5', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          From custom web development to AI solutions, we provide comprehensive digital services 
          to help your business thrive in the digital landscape.
        </p>
      </div>
  
      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="service-card"
            ref={(el) => (cardsRef.current[i] = el)}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ visibility: 'visible' }}
            onMouseEnter={(event) => handleCardHover(i, event)}
            onMouseLeave={handleCardLeave}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="service-card-content">
              <img src={service.image} alt={service.title} />
              <div className="service-title-overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="learn-more-indicator">
                  <span>Learn More</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="tech-carousel mt-4">
        <div className="tech-track">
          {techStack.concat(techStack).map((tech, i) => (
            <div className="tech-item" key={i}>
              <img src={tech.logo} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hoveredCard !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOutsideClick}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.3)',
                zIndex: 999,
                backdropFilter: 'blur(2px)'
              }}
            />
            
            {/* Popup Modal */}
            <motion.div
              className="popup-modal"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={handlePopupClick}
              style={{
                position: 'fixed',
                left: `${popupPosition.x}px`,
                top: `${popupPosition.y}px`,
                zIndex: 1000,
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #00c8b3',
                borderRadius: '16px',
                padding: '2rem',
                maxWidth: '400px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 200, 179, 0.3)',
                color: 'white'
              }}
            >
            <div className="popup-header">
              <h3 style={{ 
                color: '#00c8b3', 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontFamily: '"Audiowide", sans-serif'
              }}>
                {services[hoveredCard].title}
              </h3>
              <button 
                className="popup-close-btn"
                onClick={() => setHoveredCard(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#00c8b3',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 200, 179, 0.2)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>
            </div>
            
            <p style={{ 
              color: '#e5e5e5', 
              fontSize: '1rem', 
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              {services[hoveredCard].desc}
            </p>
            
            <div className="popup-details">
              <h4 style={{ 
                color: '#00c8b3', 
                fontSize: '1.1rem', 
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                What's Included:
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                maxHeight: '200px',
                overflowY: 'auto'
              }}>
                {services[hoveredCard].details.map((detail, index) => (
                  <li key={index} style={{
                    color: '#e5e5e5',
                    fontSize: '0.9rem',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem'
                  }}>
                    <span style={{ 
                      color: '#00c8b3', 
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
                          </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Features;
