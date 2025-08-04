import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import BackgroundParticles from './BackgroundParticles';
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const cardsRef = useRef([]);
  const [expandedService, setExpandedService] = useState(null);

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
      title: "Website Design & Development",
      desc: "We create custom, user-friendly websites tailored to your business needs. From eye-catching landing pages to full-fledged e-commerce platforms.",
      image: "/src/assets/img/uxui.jpg", // Perfect for web design
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
      image: "/src/assets/img/mobileapp.jpg", // Good for maintenance/support concept
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
      image: "/src/assets/img/seo.png", // Perfect for SEO
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
      image: "/src/assets/img/mobileapp.jpg", // Good for performance/security concept
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
      image: "/src/assets/img/uxui.jpg", // Good for CMS/platform work
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
      image: "/src/assets/img/uxui.jpg", // Perfect for UI/UX design
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
      image: "/src/assets/img/seo.png", // Good for digital marketing
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
      image: "/src/assets/img/mobileapp.jpg", // Good for hosting/domain concept
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
      image: "/src/assets/img/ecommerece.jpg", // Perfect for e-commerce
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
      image: "/src/assets/img/mobileapp.jpg", // Good for integrations/APIs
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
      image: "/src/assets/img/uxui.jpg", // Good for AI/automation concept
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
      image: "/src/assets/img/mobileapp.jpg", // Good for training/documentation
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
    <section className="services-section">
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setExpandedService(expandedService === i ? null : i)}
          >
            <img src={service.image} alt={service.title} className="service-img" />
            <div className="service-title-overlay">
              <h3>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '5px', opacity: '0.9' }}>{service.desc}</p>
              
              {expandedService === i && (
                <motion.div 
                  style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: '8px',
                    padding: '15px',
                    marginTop: '15px',
                    borderLeft: '3px solid #00c8b3'
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <h4 style={{ color: '#00c8b3', fontSize: '1rem', fontWeight: 'bold', marginBottom: '10px' }}>What we offer:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.details.map((detail, index) => (
                      <li key={index} style={{ color: '#e5e5e5', fontSize: '0.85rem', padding: '5px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        ✓ {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              <div style={{ color: '#00c8b3', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                {expandedService === i ? 'Show Less' : 'Learn More'}
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

      <div className="view-more-btn-container">
        <button className="view-more-btn">View More Services ↓</button>
      </div>
  
      <div className="talk-tab">Let's Talk Business</div>
    </section>
  );
}

export default Features;
