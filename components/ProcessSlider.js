// components/ProcessSlider.js
import { useState } from 'react';

export default function ProcessSlider({ sketch, final, artistName }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSlider = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <div style={styles.outerContainer}>
      <h2 style={styles.artistLabel}>Artist: {artistName}</h2>
      <div style={styles.container}>
        {/* Final Image (Bottom Layer) */}
        <img src={final} style={styles.image} alt="Final Art" />

        {/* Sketch Image (Top Layer with Clip) */}
        <div 
          style={{ 
            ...styles.sketchLayer, 
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
          }}
        >
          <img src={sketch} style={styles.image} alt="Sketch" />
        </div>

        {/* The Slider Input */}
        <input 
          type="range" 
          min="0" max="100" 
          value={sliderPos} 
          onChange={handleSlider} 
          style={styles.slider} 
        />
        
        {/* Divider Line */}
        <div style={{ ...styles.divider, left: `${sliderPos}%` }} />
      </div>
    </div>
  );
}

const styles = {
  outerContainer: { padding: '40px 0', textAlign: 'center', backgroundColor: '#000' },
  artistLabel: { color: '#FFD700', fontSize: '1.2rem', marginBottom: '20px', textTransform: 'uppercase' },
  container: { 
    position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', 
    aspectRatio: '16/9', overflow: 'hidden', border: '2px solid #FF0000' 
  },
  image: { width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 },
  sketchLayer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 },
  slider: {
    position: 'absolute', WebkitAppearance: 'none', appearance: 'none',
    width: '100%', height: '100%', background: 'transparent', zIndex: 10, cursor: 'col-resize', margin: 0
  },
  divider: {
    position: 'absolute', top: 0, bottom: 0, width: '3px', backgroundColor: '#FFD700',
    zIndex: 5, pointerEvents: 'none', transform: 'translateX(-50%)'
  }
};
