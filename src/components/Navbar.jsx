import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={navStyle(scrolled)}
    >
      <div className="container flex-between">
        <a href="#hero" style={logoStyle}>
          <span className="text-gradient">R</span>obin.
        </a>
        <nav style={navLinksStyle}>
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

const navStyle = (scrolled) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  padding: scrolled ? '1rem 0' : '1.5rem 0',
  background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
  transition: 'all 0.3s ease',
});

const logoStyle = {
  fontFamily: 'Outfit, sans-serif',
  fontSize: '1.8rem',
  fontWeight: '800',
  textDecoration: 'none',
  color: 'var(--text-main)',
  letterSpacing: '-0.5px'
};

const navLinksStyle = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

export default Navbar;
