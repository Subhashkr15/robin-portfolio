import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container flex-between" style={{ flexDirection: 'column', gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Robin Kumar Saw. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Built with React & Framer Motion
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  padding: '2rem 0',
  borderTop: '1px solid var(--glass-border)',
  marginTop: '4rem',
  background: 'var(--bg-secondary)',
  textAlign: 'center'
};

export default Footer;
