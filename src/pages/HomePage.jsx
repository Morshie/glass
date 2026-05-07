import { useRef, useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const sectionsRef = useRef({});
  const [inView, setInView] = useState({});

  useEffect(() => {
    const observers = {};

    Object.entries(sectionsRef.current).forEach(([id, element]) => {
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(prev => ({ ...prev, [id]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(element);
        observers[id] = observer;
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" ref={el => sectionsRef.current.home = el} className="hero-section">
        <div className="hero-content">
          <h1 className={`hero-title ${inView.home ? 'animate-in' : ''}`}>
            Glass Morphism Meets Fluid Dynamics
          </h1>
          <p className={`hero-subtitle ${inView.home ? 'animate-in' : ''}`}>
            Experience iOS 26 liquid glass effects with interactive 3D models
          </p>
          <div className={`hero-cta ${inView.home ? 'animate-in' : ''}`}>
            <button className="btn btn-primary">Explore Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={el => sectionsRef.current.features = el} className="features-section">
        <h2 className={`section-title ${inView.features ? 'animate-in' : ''}`}>Features</h2>
        <div className="features-grid">
          <div className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-icon">✨</div>
            <h3>Liquid Glass Effect</h3>
            <p>Smooth, flowing glass morphism with real-time refraction and transmission</p>
          </div>
          <div className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-icon">🎨</div>
            <h3>iOS 26 Design</h3>
            <p>Modern design language inspired by Apple's latest design system</p>
          </div>
          <div className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>Optimized 3D rendering with smooth 60fps animations</p>
          </div>
          <div className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-icon">🎯</div>
            <h3>Interactive</h3>
            <p>Responsive to mouse movements and scroll interactions</p>
          </div>
          <div className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works seamlessly on desktop, tablet, and mobile devices</p>
          </div>
          <div className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-icon">🔧</div>
            <h3>Customizable</h3>
            <p>Easy to configure with extensive props and styling options</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={el => sectionsRef.current.gallery = el} className="gallery-section">
        <h2 className={`section-title ${inView.gallery ? 'animate-in' : ''}`}>Modes</h2>
        <div className="gallery-grid">
          <div className={`gallery-item ${inView.gallery ? 'animate-in' : ''}`}>
            <div className="gallery-content">
              <h3>Lens Mode</h3>
              <p>Cylindrical glass with smooth refraction</p>
            </div>
          </div>
          <div className={`gallery-item ${inView.gallery ? 'animate-in' : ''}`}>
            <div className="gallery-content">
              <h3>Cube Mode</h3>
              <p>Geometric glass cube with sharp reflections</p>
            </div>
          </div>
          <div className={`gallery-item ${inView.gallery ? 'animate-in' : ''}`}>
            <div className="gallery-content">
              <h3>Bar Mode</h3>
              <p>Flat glass bar perfect for navigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" ref={el => sectionsRef.current.contact = el} className="cta-section">
        <div className="cta-content">
          <h2 className={`cta-title ${inView.contact ? 'animate-in' : ''}`}>
            Ready to integrate?
          </h2>
          <p className={`cta-text ${inView.contact ? 'animate-in' : ''}`}>
            Add stunning glass morphism effects to your projects
          </p>
          <button className={`btn btn-primary btn-large ${inView.contact ? 'animate-in' : ''}`}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
