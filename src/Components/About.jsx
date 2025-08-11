import React, { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [activeTab, setActiveTab] = useState('story');

  const coreValues = [
    {
      icon: "🔧",
      title: "Precision in Every Line",
      description: "We believe great software starts with clean, thoughtful code. Attention to detail and a focus on best practices guide everything we build."
    },
    {
      icon: "🚀",
      title: "Innovation with Purpose",
      description: "We don't chase trends — we create meaningful technology. Our solutions are designed to solve real problems and empower users."
    },
    {
      icon: "🧠",
      title: "Growth Through Learning",
      description: "The tech world moves fast — and so do we. We foster a culture of continuous learning and bring fresh ideas to every project."
    },
    {
      icon: "🤝",
      title: "Client-Centered Collaboration",
      description: "We build with our clients, not just for them. By deeply understanding their goals, we create tailored digital products."
    },
    {
      icon: "🔒",
      title: "Trust, Transparency, and Ethics",
      description: "Integrity is non-negotiable. Whether in communication, code quality, or deadlines — we operate with honesty and reliability."
    },
    {
      icon: "🌍",
      title: "Impact Over Hype",
      description: "We focus on building solutions that matter. Our work aims to leave a lasting positive impact on businesses and communities."
    }
  ];

  const whyChooseUs = [
    {
      icon: "✅",
      title: "Tailored Solutions, Not Templates",
      description: "We don't believe in one-size-fits-all. Every project is customized to fit your business goals, industry, and audience."
    },
    {
      icon: "🧠",
      title: "Experienced Minds, Modern Tools",
      description: "Our team blends years of hands-on development with today's most powerful technologies — delivering smart, scalable solutions."
    },
    {
      icon: "🌟",
      title: "Premium Value, Skilled Professionals",
      description: "You're partnering with a team of top-tier engineers, designers, and strategists who bring premium quality and deep expertise."
    },
    {
      icon: "🕐",
      title: "Speed Without Compromise",
      description: "We move fast — but never at the cost of quality. Our agile workflows ensure timely delivery while maintaining high performance."
    },
    {
      icon: "🤝",
      title: "Transparent Communication",
      description: "We keep you in the loop at every step. Our collaboration-first approach ensures you're informed, involved, and confident."
    },
    {
      icon: "🛠️",
      title: "Full-Service Expertise",
      description: "From websites and mobile apps to branding, automation, and hosting — we're your all-in-one digital partner."
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
          <h2 className="" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Build Syntax</h2>
          <p style={{ fontSize: '1.2rem', color: '#e5e5e5', maxWidth: '600px', margin: '0 auto' }}>
            Discover our story, values, and the team behind the digital solutions that transform businesses
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ background: '#333', borderRadius: '8px', padding: '8px', display: 'flex', gap: '8px' }}>
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'values', label: 'Core Values' },
              { id: 'why-us', label: 'Why Choose Us' },
              { id: 'culture', label: 'Life at Build Syntax' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  ...(activeTab === tab.id
                    ? { background: '#00c8b3', color: 'white' }
                    : { background: 'transparent', color: '#ccc' })
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Our Story */}
          {activeTab === 'story' && (
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '2rem', border: '1px solid #00c8b3' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Discover Our Story</h3>
              <div style={{ color: '#e5e5e5', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  At Build Syntax, our journey began with a simple idea — to craft software that doesn't just work, 
                  but works beautifully. What started as a small group of coders with big dreams has evolved into 
                  a full-scale digital powerhouse, building cutting-edge solutions for clients across the globe.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  We believe that great software is not just about code — it's about people, experience, and solving 
                  real problems. From day one, we've committed ourselves to pushing the boundaries of technology, 
                  combining clean syntax with bold creativity.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Whether it's a startup launching its first product, or an enterprise optimizing its digital 
                  infrastructure, Build Syntax is the silent engine behind their success — thoughtful, precise, 
                  and always future-focused.
                </p>
                <div style={{ background: '#00c8b3', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ color: 'white', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 'bold' }}>
                    "Every line of code we write tells a story — one of innovation, growth, and impact."
                  </p>
                  <p style={{ color: '#e5e5e5', marginTop: '0.5rem' }}>
                    Build with clarity. Build with purpose. Build with us.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Core Values */}
          {activeTab === 'values' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Core Values that Drive Our Brand Forward</h3>
                <p style={{ color: '#e5e5e5' }}>The principles that guide everything we do</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      border: '1px solid #333',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>{value.title}</h4>
                    <p style={{ color: '#e5e5e5', lineHeight: '1.6' }}>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Why Choose Us */}
          {activeTab === 'why-us' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Why Choose Build Syntax</h3>
                <p style={{ color: '#e5e5e5' }}>What sets us apart in the digital landscape</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      border: '1px solid #333',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{reason.icon}</div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>{reason.title}</h4>
                    <p style={{ color: '#e5e5e5', lineHeight: '1.6' }}>{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Life at Build Syntax */}
          {activeTab === 'culture' && (
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '2rem', border: '1px solid #333' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>🌱 Life at Build Syntax</h3>
              <div style={{ color: '#e5e5e5', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  At Build Syntax, we don't just write code — we build a community. A place where ideas flow freely, 
                  creativity is celebrated, and everyone is empowered to grow.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Our culture thrives on curiosity, collaboration, and a shared passion for technology. Whether it's 
                  brainstorming over coffee, celebrating product launches, or solving complex challenges together, 
                  our team is driven by purpose and pride.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  We foster a balanced environment that values both professional excellence and personal well-being. 
                  Flexible hours, open communication, and continuous learning opportunities ensure that every team 
                  member feels heard, valued, and inspired.
                </p>
                <div style={{ background: 'linear-gradient(to right, #00c8b3, #00f2ff)', padding: '1.5rem', borderRadius: '12px' }}>
                  <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    "We laugh hard, work smart, and grow together — because here, success is a shared journey."
                  </p>
                  <p style={{ color: '#e5e5e5', marginTop: '0.5rem', fontWeight: '500' }}>
                    This isn't just a workplace. It's where innovators belong. Welcome to Build Syntax.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
