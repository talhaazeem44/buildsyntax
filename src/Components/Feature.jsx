import React, { useState, useEffect } from 'react';
import BackgroundParticles from './BackgroundParticles';

// Import images for better build optimization
import mobileappImg from '../assets/img/mobileapp.jpg';
import uxuiImg from '../assets/img/uxui.jpg';
import ecommerceImg from '../assets/img/ecommerece.jpg';

// Why Choose Us data
const whyChooseUs = [
  {
    // icon: "✅",
    title: "Tailored Solutions, Not Templates",
    description: "We don't believe in one-size-fits-all. Every project is customized to fit your business goals, industry, and audience."
  },
  {
    // icon: "🧠",
    title: "Experienced Minds, Modern Tools",
    description: "Our team blends years of hands-on development with today's most powerful technologies — delivering smart, scalable solutions."
  },
  {
    // icon: "🌟",
    title: "Premium Value, Skilled Professionals",
    description: "You're partnering with a team of top-tier engineers, designers, and strategists who bring premium quality and deep expertise."
  },
  {
    // icon: "🕐",
    title: "Speed Without Compromise",
    description: "We move fast — but never at the cost of quality. Our agile workflows ensure timely delivery while maintaining high performance."
  },
  {
    // icon: "🤝",
    title: "Transparent Communication",
    description: "We keep you in the loop at every step. Our collaboration-first approach ensures you're informed, involved, and confident."
  },
  {
    // icon: "🛠️",
    title: "Full-Service Expertise",
    description: "From websites and mobile apps to branding, automation, and hosting — we're your all-in-one digital partner."
  }
];

function Features() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [activeTech, setActiveTech] = useState(0);

  const services = [
    {
      title: "Website Design & Development",
      desc: "We create custom, user-friendly websites tailored to your business needs. From eye-catching landing pages to full-fledged e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
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
      image: mobileappImg,
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
      image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800&h=600&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop&crop=center",
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
      image: uxuiImg,
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
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop&crop=center",
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
      image: "/images/ecommerece.jpg",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
      details: [
        "Admin panel walkthroughs for clients",
        "Video tutorials and written documentation",
        "WordPress and Shopify platform training"
      ]
    },
    {
      title: "Blockchain Solutions",
      desc: "Leverage blockchain technology for secure, transparent, and decentralized applications. We build smart contracts, DApps, and integrate blockchain into your business.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=center",
      details: [
        "Smart contract development (Solidity, Ethereum)",
        "Decentralized application (DApp) development",
        "Blockchain integration with web and mobile apps",
        "Token creation (ERC-20, ERC-721, etc.)",
        "Wallet integration and crypto payments",
        "Consulting on blockchain strategy and security"
      ]
    },
  ];

  const techStack = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Blockchain", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg" },
    { name: "Web3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg" },
    { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
    { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  ];

  // Fade-in/fade-out animation for tech logos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techStack.length);
    }, 1000); // Change logo every 2 seconds
    return () => clearInterval(interval);
  }, [techStack.length]);

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
          <div
            className={`flip-card feature-flip-card${flippedIndex === i ? ' flipped' : ''}`}
            key={i}
            onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
          >
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front service-card">
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
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <button className="close-flip-btn" onClick={e => { e.stopPropagation(); setFlippedIndex(null); }}>&times;</button>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <h4>What's Included:</h4>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx}><span>✓</span> {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade-in/Fade-out Tech Animation */}
      <div className="tech-fade-container">
        {techStack.map((tech, i) => (
          <div
            key={tech.name}
            className={`tech-fade-item${activeTech === i ? ' active' : ''}`}
            style={{
              opacity: activeTech === i ? 1 : 0,
              zIndex: activeTech === i ? 2 : 1,
              transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)'
            }}
          >
            <img src={tech.logo} alt={tech.name} className="tech-fade-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
        <div className="tech-fade-progress-bar">
          <div
            className="tech-fade-progress"
            style={{ width: `${((activeTech + 1) / techStack.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-header">
          <h2>Why Choose Build Syntax</h2>
          <p>What sets us apart in the digital landscape</p>
        </div>
        <div className="why-choose-us-grid">
          {whyChooseUs.map((reason, index) => (
            <div className="why-choose-us-card" key={index}>
              <div className="why-choose-us-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Features;
