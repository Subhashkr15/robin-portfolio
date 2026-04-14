import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Software Engineer",
    company: "Standard Chartered Ventures (Letsbloom)",
    period: "Jul 2024 - Feb 2026",
    achievements: [
      "Designed and developed Java Spring Boot microservices powering high-throughput enterprise dashboards.",
      "Built secure, scalable REST APIs supporting critical backend workflows.",
      "Engineered fault-tolerant Golang services for large-scale SaaS data ingestion.",
      "Optimized SQL queries to reduce response size and improve latency.",
      "Led frontend modernization using React.js and TypeScript, improving performance and UX."
    ]
  },
  {
    title: "Freelance Software Engineer",
    company: "SCALE AI",
    period: "Feb 2024 – Jun 2024",
    achievements: [
      "Contributed to a US-based startup building AI-driven engineering tools using Python, Java, JavaScript, and SQL.",
      "Evaluated and refined LLM outputs for backend, frontend, and system design use cases.",
      "Improved response accuracy and relevance by comparing AI-generated solutions against real-world engineering standards."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>

      <div style={timelineContainer}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            style={timelineItemStyle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={timelineDot}></div>
            <div className="glass-card" style={cardStyle}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}>{exp.title}</h3>
              <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem', fontWeight: '500' }}>{exp.company}</h4>
              <span style={{ display: 'block', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.period}</span>
              <ul style={listStyle}>
                {exp.achievements.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Education Item */}
        <motion.div 
            className="timeline-item"
            style={timelineItemStyle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={timelineDot}></div>
            <div className="glass-card" style={cardStyle}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem' }}>B.Tech in Electronics & Instrumentation</h3>
              <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem', fontWeight: '500' }}>National Institute of Technology Rourkela</h4>
              <span style={{ display: 'block', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Dec 2020 – Jun 2024</span>
              <p style={{ color: 'var(--text-muted)' }}>
                Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems.
              </p>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

const timelineContainer = {
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  borderLeft: '2px solid rgba(139, 92, 246, 0.3)',
  paddingLeft: '2rem'
};

const timelineItemStyle = {
  position: 'relative',
  marginBottom: '3rem'
};

const timelineDot = {
  position: 'absolute',
  left: '-2.6rem',
  top: '1.5rem',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: 'var(--accent)',
  boxShadow: '0 0 10px var(--accent-light)',
  border: '4px solid var(--bg-color)'
};

const cardStyle = {
  padding: '2rem'
};

const listStyle = {
  paddingLeft: '1.2rem',
  listStyleType: 'disc'
};

export default Experience;
