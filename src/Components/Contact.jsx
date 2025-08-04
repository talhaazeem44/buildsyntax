import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      detail: 'hello@buildsyntax.com',
      link: 'mailto:hello@buildsyntax.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      detail: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      detail: '123 Tech Street, Digital City, DC 12345',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      detail: 'Mon-Fri: 9AM-6PM EST',
      link: '#'
    }
  ];

  const services = [
    'Website Development',
    'E-commerce Solutions',
    'SEO Optimization',
    'UI/UX Design',
    'Digital Marketing',
    'AI Solutions',
    'Custom Integrations',
    'Other'
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      padding: '4rem 2rem',
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
        background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'dots\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'><circle cx=\'10\' cy=\'10\' r=\'1\' fill=\'rgba(255,255,255,0.02)\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23dots)\'/></svg>")',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="neon-text" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#e5e5e5', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>
              Let's Start a Conversation
            </h3>
            <p style={{ color: '#e5e5e5', lineHeight: '1.6', marginBottom: '2rem' }}>
              Whether you have a project in mind or just want to explore possibilities, 
              we're here to help. Reach out and let's build something extraordinary together.
            </p>

            {/* Contact Info Cards */}
            <div style={{ display: 'grid', gap: '1rem' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #333',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#00c8b3';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#333';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <a 
                    href={info.link}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ fontSize: '1.5rem' }}>{info.icon}</div>
                      <div>
                        <h4 style={{ color: '#00c8b3', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                          {info.title}
                        </h4>
                        <p style={{ color: '#e5e5e5', fontSize: '0.9rem' }}>
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: '#00c8b3', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Follow Us
              </h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['📷', '💼', '🐦', '📘', '📺'].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    style={{
                      display: 'inline-block',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ scale: 1.1, background: 'rgba(0, 200, 179, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid #333'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #333',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.borderColor = '#00c8b3';
                      e.target.boxShadow = '0 0 10px rgba(0, 200, 179, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.borderColor = '#333';
                      e.target.boxShadow = 'none';
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #333',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.borderColor = '#00c8b3';
                      e.target.boxShadow = '0 0 10px rgba(0, 200, 179, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.borderColor = '#333';
                      e.target.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #333',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.borderColor = '#00c8b3';
                      e.target.boxShadow = '0 0 10px rgba(0, 200, 179, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.borderColor = '#333';
                      e.target.boxShadow = 'none';
                    }}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #333',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.borderColor = '#00c8b3';
                      e.target.boxShadow = '0 0 10px rgba(0, 200, 179, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.borderColor = '#333';
                      e.target.boxShadow = 'none';
                    }}
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    marginBottom: '1rem'
                  }}
                  onFocus={(e) => {
                    e.target.borderColor = '#00c8b3';
                    e.target.boxShadow = '0 0 10px rgba(0, 200, 179, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.borderColor = '#333';
                    e.target.boxShadow = 'none';
                  }}
                >
                  <option value="">Select a Service *</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your project... *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    marginBottom: '1.5rem'
                  }}
                  onFocus={(e) => {
                    e.target.borderColor = '#00c8b3';
                    e.target.boxShadow = '0 0 10px rgba(0, 200, 179, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.borderColor = '#333';
                    e.target.boxShadow = 'none';
                  }}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(to right, #00c8b3, #00f2ff)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
