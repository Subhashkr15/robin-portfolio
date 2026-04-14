import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: "Java, C++, Golang, Python, JavaScript, TypeScript" },
  { category: "Backend", items: "Spring Boot, REST APIs, Microservices, Kafka, RabbitMQ" },
  { category: "Cloud & DevOps", items: "AWS, GCP, Docker, Kubernetes, CI/CD" },
  { category: "Database", items: "MySQL, PostgreSQL, MongoDB, Redis" },
  { category: "Frontend", items: "React.js, React Native, HTML, CSS" },
];

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div style={gridStyle}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
        >
          <h3 className="outfit" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            My Background
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            I am a Backend-focused Software Engineer with a passion for building cloud-native, distributed systems. With a Bachelor's degree in Electronics and Instrumentation from NIT Rourkela, I've transitioned deeply into software engineering, specializing in enterprise-grade microservices.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            My core strength lies in taking complete end-to-end ownership—from system design to development, and production support. I have solved over 1600+ DSA problems across LeetCode and GFG, reflecting my strong problem-solving acumen.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="outfit" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            Technical Expertise
          </h3>
          <div style={skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
              >
                <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>{skill.category}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '3rem',
  alignItems: 'start'
};

const skillsGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1rem'
};

export default About;
