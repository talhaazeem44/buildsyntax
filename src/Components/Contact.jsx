import React from 'react';

function Contact() {
  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '8px',
    background: 'transparent',
    color: 'rgb(0, 242, 255)',
    border: '1px solid rgb(0, 242, 255)',
    outline: 'none',
    boxShadow: '0 0 10px rgb(0, 242, 255)',
  };

  return (
    <section className='' style={{ backgroundColor: '#1e1e1e', padding: '4rem 1rem' }}>
      <h2 className="text-3xl font-bold mb-6 d-flex justify-content-center text-white">Contact Us</h2>
      <form style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <textarea placeholder="Your Message" rows="4" style={inputStyle}></textarea>
        <button type="submit" className="neon-button-green mt-4">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
