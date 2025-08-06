import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/buildsyntax',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/buildsyntax',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/buildsyntax',
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://facebook.com/buildsyntax',
      color: '#1877F2'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/@buildsyntax',
      color: '#FF0000'
    }
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'About', url: '/about' },
    { name: 'Packages', url: '/#packages' },
    { name: 'Contact', url: '/contact' }
  ];

  const services = [
    'Website Development',
    'E-commerce Solutions',
    'SEO Optimization',
    'UI/UX Design',
    'Digital Marketing',
    'AI Solutions',
    'Hosting & Domain',
    'Custom Integrations'
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      padding: '4rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'grid\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'><path d=\'M 20 0 L 0 0 0 20\' fill=\'none\' stroke=\'rgba(255,255,255,0.02)\' stroke-width=\'0.5\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23grid)\'/></svg>")',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="neon-text" style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Build Syntax
              </h3>
              <p style={{ color: '#e5e5e5', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                We craft digital solutions that don't just work, but work beautifully. 
                From startups to enterprises, we're the silent engine behind your success.
              </p>
            </div>

            {/* Contact Info */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#00c8b3', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Get in Touch
              </h4>
              <div style={{ color: '#e5e5e5' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>📧</span>
                  <a href="mailto:hello@buildsyntax.com" style={{ color: '#e5e5e5', textDecoration: 'none' }}>
                    info@buildsyntax.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>📞</span>
                  <a href="tel:+1234567890" style={{ color: '#e5e5e5', textDecoration: 'none' }}>
                    +1 (234) 567-890
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>📍</span>
                  <span>Lahore,Pakistan</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{ color: '#00c8b3', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Follow Us
              </h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: social.color,
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 4px 20px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 style={{ color: '#00c8b3', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a 
                    href={link.url}
                    style={{
                      color: '#e5e5e5',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00c8b3';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#e5e5e5';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{ color: '#00c8b3', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <span style={{ color: '#e5e5e5', fontSize: '0.9rem' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 style={{ color: '#00c8b3', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Stay Updated
            </h4>
            <p style={{ color: '#e5e5e5', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Subscribe to our newsletter for the latest tech insights and project updates.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #333',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '0.9rem'
                }}
              />
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(to right, #00c8b3, #00f2ff)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            borderTop: '1px solid #333',
            paddingTop: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ color: '#e5e5e5', fontSize: '0.9rem' }}>
              © {currentYear} Build Syntax. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="/privacy" style={{ color: '#e5e5e5', textDecoration: 'none', fontSize: '0.9rem' }}>
                Privacy Policy
              </a>
              <a href="/terms" style={{ color: '#e5e5e5', textDecoration: 'none', fontSize: '0.9rem' }}>
                Terms of Service
              </a>
              <a href="/cookies" style={{ color: '#e5e5e5', textDecoration: 'none', fontSize: '0.9rem' }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer; 