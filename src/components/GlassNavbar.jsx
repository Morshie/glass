import { useState, useEffect } from 'react';
import './GlassNavbar.css';

const GlassNavbar = ({ items, activeNav, setActiveNav }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`glass-navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <div className="logo-icon">◆</div>
          <span>Glass</span>
        </div>
        
        <div className="navbar-pills">
          {items.map((item) => (
            <button
              key={item.id}
              className={`nav-pill ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="pill-inner">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="action-btn action-secondary">Sign In</button>
          <button className="action-btn action-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar;
