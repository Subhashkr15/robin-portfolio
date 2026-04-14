import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Distributed Notification System",
    tech: ["Spring Boot", "Kafka", "PostgreSQL", "Redis"],
    description: "Built a scalable event-driven notification service using Kafka for high-volume message processing. Implemented async processing with retry, exponential backoff, and DLQ for fault tolerance. Included rate limiting and idempotency.",
    github: "https://github.com/robink2404",
    link: "#"
  },
  {
    title: "AI-Powered Email Automation Platform",
    tech: ["Python", "FastAPI", "React Native", "LLMs"],
    description: "Engineered a full-stack application for AI-driven email automation. Designed dynamic email templating and an AI agent workflow for conversational prompt refinement. Secured bulk dispatch pipelines.",
    github: "https://github.com/robink2404",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div style={gridStyle}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            style={cardStyle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div style={cardHeader}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{project.title}</h3>
              <div style={iconLinks}>
                <a href={project.github} target="_blank" rel="noreferrer" style={iconStyle}><FiGithub size={20} /></a>
                <a href={project.link} target="_blank" rel="noreferrer" style={iconStyle}><FiExternalLink size={20} /></a>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
              {project.description}
            </p>

            <div style={techStackStyle}>
              {project.tech.map((t, i) => (
                <span key={i} style={techBadge}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem'
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '2.5rem',
  height: '100%'
};

const cardHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '1.5rem',
  gap: '1rem'
};

const iconLinks = {
  display: 'flex',
  gap: '1rem'
};

const iconStyle = {
  color: 'var(--text-main)',
  transition: 'color 0.3s ease'
};

const techStackStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem'
};

const techBadge = {
  fontSize: '0.8rem',
  padding: '0.3rem 0.8rem',
  background: 'rgba(139, 92, 246, 0.1)',
  color: 'var(--accent-light)',
  borderRadius: '20px',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  fontFamily: 'Outfit, sans-serif'
};

export default Projects;
