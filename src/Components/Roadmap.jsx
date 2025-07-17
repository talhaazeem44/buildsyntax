import React from 'react';
import { motion } from 'framer-motion';

const roadmapData = [
  { icon: "✅", title: "Q1", desc: "Brand Identity + Visual Concepts" },
  { icon: "🚀", title: "Q2", desc: "Website Launch & Early Client Projects" },
//   { icon: "📈", title: "Q3", desc: "Advanced Services + Expansion" },
//   { icon: "🌍", title: "Q4", desc: "International Partnerships" },
//   { icon: "🔧", title: "Q5", desc: "Automation & Backend Scaling" },
//   { icon: "🎯", title: "Q6", desc: "AI Integrations & Smart Interfaces" },
];

function Roadmap() {
  return (
    <section className="">
      <h2 className="text-3xl font-bold mb-8">Our Roadmap</h2>
      <div className="roadmap-grid">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
