import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      name: "Startup Website Package",
      description: "Ideal for new businesses and entrepreneurs, this package includes professional website design, reliable hosting setup, and essential SEO to help you get discovered online quickly.",
      price: "Starting from $999",
      features: [
        "Professional website design",
        "Responsive design for all devices",
        "Basic SEO optimization",
        "Hosting setup and configuration",
        "Domain registration (1 year)",
        "Basic content management system",
        "Contact form integration",
        "Google Analytics setup",
        "1 month of support"
      ],
      idealFor: "Perfect for launching your brand with a strong digital presence",
      color: "linear-gradient(to right, #00c8b3, #00f2ff)"
    },
    {
      name: "E-commerce Booster Pack",
      description: "Designed for online stores, this package covers Shopify development or WooCommerce setup, advanced SEO strategies to increase traffic, and ad integration to boost sales.",
      price: "Starting from $1,999",
      features: [
        "Shopify or WooCommerce store setup",
        "Advanced SEO strategies",
        "Google Ads & Facebook Ads integration",
        "Payment gateway setup (Stripe, PayPal)",
        "Product catalog configuration",
        "Inventory management system",
        "Order tracking and notifications",
        "Mobile-optimized checkout",
        "3 months of support"
      ],
      idealFor: "Perfect for businesses wanting to boost sales and increase traffic",
      color: "linear-gradient(to right, #00f2ff, #00c8b3)"
    },
    {
      name: "Monthly Maintenance Plan",
      description: "Keep your website secure, fast, and error-free with ongoing maintenance. This plan includes regular updates, bug fixes, performance monitoring, and periodic speed optimizations.",
      price: "From $199/month",
      features: [
        "Regular updates and backups",
        "Bug fixes and error resolution",
        "Performance monitoring",
        "Security updates and patches",
        "Content updates (up to 5 pages/month)",
        "Plugin and theme updates",
        "Speed optimization",
        "Monthly performance reports",
        "Priority support"
      ],
      idealFor: "Ideal for businesses wanting peace of mind and uninterrupted online performance",
      color: "linear-gradient(to right, #ff6b6b, #ff8e53)"
    },
    {
      name: "Complete Digital Marketing Package",
      description: "Combine website services with digital marketing for holistic growth. Includes SEO, Google Analytics setup, social media pixel integration, CRM & email marketing setup, and lead funnel creation.",
      price: "Starting from $2,499",
      features: [
        "Comprehensive SEO strategy",
        "Google Analytics & Search Console setup",
        "Social media pixel integration",
        "CRM & email marketing setup",
        "Lead funnel creation",
        "Content marketing strategy",
        "Social media management",
        "Monthly performance reports",
        "6 months of support"
      ],
      idealFor: "Perfect for converting visitors into loyal customers",
      color: "linear-gradient(to right, #a855f7, #ec4899)"
    },
    {
      name: "Custom Web Application Bundle",
      description: "For businesses needing advanced online tools, this package includes custom web app development, API integrations, booking or reservation systems, and chatbot setup.",
      price: "Starting from $4,999",
      features: [
        "Custom web application development",
        "API integrations",
        "Booking/reservation systems",
        "AI chatbot setup",
        "User authentication system",
        "Database design and setup",
        "Admin dashboard",
        "Mobile-responsive design",
        "12 months of support"
      ],
      idealFor: "Perfect for startups or enterprises looking to digitize complex workflows",
      color: "linear-gradient(to right, #3b82f6, #1d4ed8)"
    },
    {
      name: "Branding & Visual Identity Kit",
      description: "Elevate your brand with a professional visual identity package. Includes logo creation, comprehensive brand style guide, color palette and typography choices, and marketing collateral design.",
      price: "Starting from $799",
      features: [
        "Professional logo design",
        "Comprehensive brand style guide",
        "Color palette and typography selection",
        "Business card design",
        "Social media templates",
        "Email signature design",
        "Brand guidelines document",
        "Source files delivery",
        "2 rounds of revisions"
      ],
      idealFor: "Perfect for businesses wanting to establish a strong brand presence",
      color: "linear-gradient(to right, #f59e0b, #d97706)"
    },
    {
      name: "Website Redesign & Optimization Pack",
      description: "Refresh your existing site with modern UI/UX improvements, performance optimization (speed & Core Web Vitals), security hardening, and SEO enhancements.",
      price: "Starting from $1,499",
      features: [
        "Modern UI/UX redesign",
        "Performance optimization",
        "Core Web Vitals improvement",
        "Security hardening",
        "SEO enhancements",
        "Mobile optimization",
        "Content restructuring",
        "Analytics setup",
        "3 months of support"
      ],
      idealFor: "A great choice for businesses aiming to increase engagement and conversions",
      color: "linear-gradient(to right, #10b981, #059669)"
    }
  ];

  return (
    <section className="section" style={{ background: 'black', color: 'white' }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="neon-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Service Packages</h2>
          <p style={{ fontSize: '1.2rem', color: '#e5e5e5', maxWidth: '800px', margin: '0 auto' }}>
            Tailored service bundles designed to cover all your essential needs at competitive rates. 
            These packages combine key services to deliver maximum value and results.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s',
                transform: selectedPackage === index ? 'scale(1.02)' : 'scale(1)'
              }}
              onClick={() => setSelectedPackage(selectedPackage === index ? null : index)}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #333',
                transition: 'all 0.3s',
                height: '100%'
              }}>
                {/* Package Header */}
                <div style={{
                  background: pkg.color,
                  padding: '1.5rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  marginTop: '-3rem',
                  position: 'relative'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>{pkg.name}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>{pkg.price}</p>
                </div>

                {/* Description */}
                <p style={{ color: '#e5e5e5', marginBottom: '1.5rem', lineHeight: '1.6' }}>{pkg.description}</p>

                {/* Ideal For */}
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <p style={{ color: '#00c8b3', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Ideal for:</p>
                  <p style={{ color: '#e5e5e5', fontSize: '0.9rem' }}>{pkg.idealFor}</p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '0.75rem' }}>What's included:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ color: '#e5e5e5', fontSize: '0.9rem', padding: '0.25rem 0', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#00c8b3', marginRight: '0.5rem', marginTop: '0.1rem' }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button style={{
                  width: '100%',
                  background: pkg.color,
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <div style={{
            background: 'linear-gradient(to right, #00c8b3, #00f2ff)',
            padding: '2rem',
            borderRadius: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Need a Custom Solution?</h3>
            <p style={{ color: '#e5e5e5', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Don't see a package that fits your needs? We can create a custom solution tailored specifically to your business requirements.
            </p>
            <button style={{
              background: 'white',
              color: '#00c8b3',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '1rem'
            }}>
              Let's Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Packages; 