import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Headers from './Headers';
import BackgroundParticles from './BackgroundParticles';
function AboutPage() {
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

  const teamStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div style={{ background: 'black', minHeight: '100vh' }}>
      <Headers />
      <BackgroundParticles />
      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 2rem 4rem', 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="neon-text" style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            About Build Syntax
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#e5e5e5', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
            Discover our story, values, and the passionate team behind the digital solutions that transform businesses worldwide
          </p>
          
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #333'
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00c8b3', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ color: '#e5e5e5', fontSize: '1rem' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '2rem',
        background: 'rgba(0, 0, 0, 0.8)',
        position: 'sticky',
        top: '0',
        zIndex: '100'
      }}>
        <div style={{ background: '#333', borderRadius: '12px', padding: '8px', display: 'flex', gap: '8px' }}>
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
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontWeight: 'bold',
                ...(activeTab === tab.id
                  ? { background: '#00c8b3', color: 'white', boxShadow: '0 0 20px rgba(0, 200, 179, 0.3)' }
                  : { background: 'transparent', color: '#ccc' })
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <section style={{ padding: '4rem 2rem', background: 'black' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Our Story */}
            {activeTab === 'story' && (
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '3rem', border: '1px solid #333' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>
                  Discover Our Story
                </h2>
                <div style={{ color: '#e5e5e5', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  <p style={{ marginBottom: '2rem' }}>
                    At Build Syntax, our journey began with a simple idea — to craft software that doesn't just work, 
                    but works beautifully. What started as a small group of coders with big dreams has evolved into 
                    a full-scale digital powerhouse, building cutting-edge solutions for clients across the globe.
                  </p>
                  <p style={{ marginBottom: '2rem' }}>
                    We believe that great software is not just about code — it's about people, experience, and solving 
                    real problems. From day one, we've committed ourselves to pushing the boundaries of technology, 
                    combining clean syntax with bold creativity.
                  </p>
                  <p style={{ marginBottom: '2rem' }}>
                    Whether it's a startup launching its first product, or an enterprise optimizing its digital 
                    infrastructure, Build Syntax is the silent engine behind their success — thoughtful, precise, 
                    and always future-focused.
                  </p>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #00c8b3, #00f2ff)', 
                    padding: '2rem', 
                    borderRadius: '16px',
                    textAlign: 'center',
                    marginTop: '2rem'
                  }}>
                    <p style={{ color: 'white', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 'bold', marginBottom: '1rem' }}>
                      "Every line of code we write tells a story — one of innovation, growth, and impact."
                    </p>
                    <p style={{ color: '#e5e5e5', fontSize: '1.1rem' }}>
                      Build with clarity. Build with purpose. Build with us.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Core Values */}
            {activeTab === 'values' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
                    Core Values that Drive Our Brand Forward
                  </h2>
                  <p style={{ color: '#e5e5e5', fontSize: '1.2rem' }}>
                    The principles that guide everything we do
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '2rem',
                        border: '1px solid #333',
                        transition: 'all 0.3s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px)';
                        e.target.style.borderColor = '#00c8b3';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = '#333';
                      }}
                    >
                      <div style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>{value.icon}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
                        {value.title}
                      </h3>
                      <p style={{ color: '#e5e5e5', lineHeight: '1.7', textAlign: 'center' }}>{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us */}
            {activeTab === 'why-us' && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
                    Why Choose Build Syntax
                  </h2>
                  <p style={{ color: '#e5e5e5', fontSize: '1.2rem' }}>
                    What sets us apart in the digital landscape
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '2rem',
                        border: '1px solid #333',
                        transition: 'all 0.3s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px)';
                        e.target.style.borderColor = '#00f2ff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = '#333';
                      }}
                    >
                      <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>{reason.icon}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
                        {reason.title}
                      </h3>
                      <p style={{ color: '#e5e5e5', lineHeight: '1.7', textAlign: 'center' }}>{reason.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Life at Build Syntax */}
            {activeTab === 'culture' && (
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '3rem', border: '1px solid #333' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem', textAlign: 'center' }}>
                  🌱 Life at Build Syntax
                </h2>
                <div style={{ color: '#e5e5e5', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  <p style={{ marginBottom: '2rem' }}>
                    At Build Syntax, we don't just write code — we build a community. A place where ideas flow freely, 
                    creativity is celebrated, and everyone is empowered to grow.
                  </p>
                  <p style={{ marginBottom: '2rem' }}>
                    Our culture thrives on curiosity, collaboration, and a shared passion for technology. Whether it's 
                    brainstorming over coffee, celebrating product launches, or solving complex challenges together, 
                    our team is driven by purpose and pride.
                  </p>
                  <p style={{ marginBottom: '2rem' }}>
                    We foster a balanced environment that values both professional excellence and personal well-being. 
                    Flexible hours, open communication, and continuous learning opportunities ensure that every team 
                    member feels heard, valued, and inspired.
                  </p>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #00c8b3, #00f2ff)', 
                    padding: '2rem', 
                    borderRadius: '16px',
                    textAlign: 'center',
                    marginTop: '2rem'
                  }}>
                    <p style={{ color: 'white', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                      "We laugh hard, work smart, and grow together — because here, success is a shared journey."
                    </p>
                    <p style={{ color: '#e5e5e5', fontSize: '1.1rem', fontWeight: '500' }}>
                      This isn't just a workplace. It's where innovators belong. Welcome to Build Syntax.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; 