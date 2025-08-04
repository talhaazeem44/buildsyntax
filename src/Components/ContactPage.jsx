import React from 'react';
import Headers from './Headers';
import Contact from './Contact';
import Footer from './Footer';

function ContactPage() {
  return (
    <div style={{ background: 'black', minHeight: '100vh' }}>
      <Headers />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage; 