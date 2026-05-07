# Glass - Fluid Glass Component Website

A stunning React website showcasing the FluidGlass component with iOS 26 liquid glass design and interactive 3D effects.

## Features

- 🎨 iOS 26 liquid glass design
- ✨ Interactive 3D fluid glass component
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔧 Highly customizable
- 💎 Modern glass morphism effects

## Technologies Used

- **React** - UI library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **maath** - Math utilities

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Morshie/glass.git
cd glass
```

2. Install dependencies
```bash
npm install
```

3. Add 3D Models
Place these files in the `public/assets/3d/` directory:
- `lens.glb`
- `bar.glb`
- `cube.glb`

You can find example models in the React Bits repository.

4. Add Demo Images (optional)
Place demo images in the `public/assets/demo/` directory:
- `cs1.webp`
- `cs2.webp`
- `cs3.webp`

5. Start the development server
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Usage

### Basic Usage

```jsx
import FluidGlass from './components/FluidGlass'

<div style={{ height: '600px', position: 'relative' }}>
  <FluidGlass 
    mode="lens"
    lensProps={{
      scale: 0.25,
      ior: 1.15,
      thickness: 5,
      chromaticAberration: 0.1,
      anisotropy: 0.01  
    }}
  />
</div>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mode | string | 'lens' | Display mode: 'lens', 'bar', or 'cube' |
| lensProps | object | {} | Props for lens mode |
| barProps | object | {} | Props for bar mode |
| cubeProps | object | {} | Props for cube mode |

## Available Modes

### Lens Mode
Cylindrical glass with smooth refraction effects.

### Cube Mode
Geometric glass cube with sharp reflections.

### Bar Mode
Flat glass bar perfect for navigation elements.

## Project Structure

```
src/
├── components/
│   ├── FluidGlass.jsx      # Main 3D component
│   └── GlassNavbar.jsx     # iOS 26 styled navbar
├── pages/
│   └── HomePage.jsx        # Main page content
├── App.jsx                 # Main app component
├── App.css                 # Global styles
└── index.js                # React entry point
```

## Customization

### Navbar Colors
Edit the CSS variables in `src/components/GlassNavbar.css` to customize colors.

### Section Content
Modify sections in `src/pages/HomePage.jsx` to add your own content.

### 3D Effects
Adjust the FluidGlass component props in `src/App.jsx` to change the 3D effects.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Use hardware acceleration enabled in your browser
- Consider reducing the 3D quality on lower-end devices
- Lazy load images for better performance

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

## Credits

- FluidGlass component inspired by React Bits
- Design inspired by iOS 26 design language
- Built with React Three Fiber
