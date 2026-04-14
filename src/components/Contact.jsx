import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      // We are using FormSubmit.co
      // No dashboard required! The first submission sends an activation link to your email.
      const response = await fetch("https://formsubmit.co/ajax/robink2404@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
         console.error("Formspree response error:", result);
         setSubmitStatus(result.error || 'error');
         setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
       console.error("Fetch error submitting form:", error);
       setSubmitStatus('error');
       setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.div 
        className="glass-card" 
        style={formContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroup}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={submitStatus === 'submitting'}
          >
            {submitStatus === 'idle' && 'Send Message'}
            {submitStatus === 'submitting' && 'Sending...'}
            {submitStatus === 'success' && 'Message Sent!'}
            {submitStatus !== 'idle' && submitStatus !== 'submitting' && submitStatus !== 'success' && 
              (submitStatus === 'error' ? 'Error. Try Again.' : submitStatus)
            }
          </button>
        </form>
      </motion.div>
    </section>
  );
};

const formContainer = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '3rem 2rem'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const inputGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const labelStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-main)',
  fontFamily: 'Outfit, sans-serif'
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(0, 0, 0, 0.2)',
  border: '1px solid var(--glass-border)',
  borderRadius: '8px',
  color: 'var(--text-main)',
  fontSize: '1rem',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default Contact;
