import { useRef, useEffect, useState } from 'react';
import GlassSurface from '../components/GlassSurface';
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
            Glass Morphism Meets Liquid Dynamics
          </h1>
          <p className={`hero-subtitle ${inView.home ? 'animate-in' : ''}`}>
            Experience stunning glass surface effects with smooth liquid distortions
          </p>
          <div className={`hero-cta ${inView.home ? 'animate-in' : ''}`}>
            <GlassSurface width={160} height={50} borderRadius={48}>
              <span className="cta-text">Explore Now</span>
            </GlassSurface>
            <GlassSurface width={160} height={50} borderRadius={48} backgroundOpacity={0.2}>
              <span className="cta-text">Learn More</span>
            </GlassSurface>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={el => sectionsRef.current.features = el} className="features-section">
        <h2 className={`section-title ${inView.features ? 'animate-in' : ''}`}>Features</h2>
        <div className="features-grid">
          <GlassSurface width="100%" height="200" borderRadius={32} className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">✨</div>
              <h3>Liquid Glass</h3>
              <p>Smooth distortion effects with real-time displacement</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="200" borderRadius={32} className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">🎨</div>
              <h3>Modern Design</h3>
              <p>Contemporary aesthetics with smooth animations</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="200" borderRadius={32} className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">⚡</div>
              <h3>Performance</h3>
              <p>Optimized for smooth 60fps animations</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="200" borderRadius={32} className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">🎯</div>
              <h3>Interactive</h3>
              <p>Responsive to user interactions and events</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="200" borderRadius={32} className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>Works perfectly on all device sizes</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="200" borderRadius={32} className={`feature-card ${inView.features ? 'animate-in' : ''}`}>
            <div className="feature-content">
              <div className="feature-icon">🔧</div>
              <h3>Customizable</h3>
              <p>Extensive props for full control</p>
            </div>
          </GlassSurface>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={el => sectionsRef.current.gallery = el} className="gallery-section">
        <h2 className={`section-title ${inView.gallery ? 'animate-in' : ''}`}>Showcase</h2>
        <div className="gallery-grid">
          <GlassSurface width="100%" height="280" borderRadius={40} className={`gallery-item ${inView.gallery ? 'animate-in' : ''}`}>
            <div className="gallery-content">
              <h3>Calm Hold</h3>
              <p>Smooth, liquid glass surface</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="280" borderRadius={40} distortionScale={-220} className={`gallery-item ${inView.gallery ? 'animate-in' : ''}`}>
            <div className="gallery-content">
              <h3>Dynamic Flow</h3>
              <p>Enhanced distortion effects</p>
            </div>
          </GlassSurface>
          
          <GlassSurface width="100%" height="280" borderRadius={40} blur={15} displace={2} className={`gallery-item ${inView.gallery ? 'animate-in' : ''}`}>
            <div className="gallery-content">
              <h3>Frosted Glass</h3>
              <p>Heavy blur with displacement</p>
            </div>
          </GlassSurface>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" ref={el => sectionsRef.current.contact = el} className="cta-section">
        <div className="cta-content">
          <h2 className={`cta-title ${inView.contact ? 'animate-in' : ''}`}>
            Ready to get started?
          </h2>
          <p className={`cta-text ${inView.contact ? 'animate-in' : ''}`}>
            Integrate stunning glass surface effects into your projects
          </p>
          <GlassSurface width={240} height={56} borderRadius={48} className={`cta-button ${inView.contact ? 'animate-in' : ''}`}>
            <span>Get Started Now</span>
          </GlassSurface>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
