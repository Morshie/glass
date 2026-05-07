import { useState } from 'react';
import FluidGlass from './components/FluidGlass';
import GlassNavbar from './components/GlassNavbar';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { label: 'Home', link: '#home', id: 'home' },
    { label: 'Features', link: '#features', id: 'features' },
    { label: 'Gallery', link: '#gallery', id: 'gallery' },
    { label: 'Contact', link: '#contact', id: 'contact' }
  ];

  return (
    <div className="app">
      <GlassNavbar items={navItems} activeNav={activeNav} setActiveNav={setActiveNav} />
      <main className="main-content">
        <div className="fluid-glass-container">
          <FluidGlass mode="lens" lensProps={{ scale: 0.25, ior: 1.15, thickness: 5, chromaticAberration: 0.1, anisotropy: 0.01 }} />
        </div>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
