import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="section flex-center" style={heroSectionStyle}>
      {/* Background glow effects */}
      <div style={glow1}></div>
      <div style={glow2}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={contentStyle}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={badgeStyle}
          >
            Available for new opportunities
          </motion.div>
          
          <h1 className="outfit" style={titleStyle}>
            Hi, I'm <span className="text-gradient">Robin Kumar Saw</span>
          </h1>
          <h2 style={subtitleStyle}>
            Backend-Focused Software Engineer
          </h2>
          <p style={paragraphStyle}>
            Building robust cloud-native applications, distributed systems, and modern web interfaces using <span className="text-main">Java, Golang, React,</span> and <span className="text-main">AWS/GCP</span>.
          </p>

          <div style={btnGroupStyle}>
            <a href="#projects" className="btn btn-primary">
              View Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div style={socialStyle}>
            <a href="https://github.com/robink2404" target="_blank" rel="noreferrer" style={iconLinkStyle}><FiGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/robin-saw-606506238/" target="_blank" rel="noreferrer" style={iconLinkStyle}><FiLinkedin size={24} /></a>
            <a href="#contact" style={iconLinkStyle}><FiMail size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const heroSectionStyle = {
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
};

const glow1 = {
  position: 'absolute',
  top: '20%',
  left: '10%',
  width: '400px',
  height: '400px',
  background: 'rgba(139, 92, 246, 0.15)',
  filter: 'blur(100px)',
  borderRadius: '50%',
};

const glow2 = {
  position: 'absolute',
  bottom: '10%',
  right: '10%',
  width: '500px',
  height: '500px',
  background: 'rgba(109, 40, 217, 0.15)',
  filter: 'blur(120px)',
  borderRadius: '50%',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
};

const badgeStyle = {
  display: 'inline-block',
  padding: '0.4rem 1rem',
  background: 'var(--glass-bg)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  borderRadius: '30px',
  color: 'var(--accent-light)',
  fontSize: '0.85rem',
  fontWeight: '500',
  marginBottom: '2rem',
};

const titleStyle = {
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  fontWeight: '800',
  lineHeight: '1.1',
  marginBottom: '1rem',
};

const subtitleStyle = {
  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
  color: 'var(--text-muted)',
  fontWeight: '600',
  marginBottom: '1.5rem',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  color: 'var(--text-muted)',
  marginBottom: '2.5rem',
  maxWidth: '600px',
  margin: '0 auto 2.5rem auto',
};

const btnGroupStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  marginBottom: '4rem',
};

const socialStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
};

const iconLinkStyle = {
  color: 'var(--text-muted)',
  transition: 'color 0.3s ease, transform 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Hero;
