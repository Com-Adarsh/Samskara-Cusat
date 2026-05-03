// components/IntroSplash.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Fades out smoothly to reveal the site
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={styles.container}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={styles.videoWrapper}
          >
            <video 
              autoPlay 
              muted 
              playsInline 
              onEnded={() => {
                setIsVisible(false);
                setTimeout(onComplete, 1200);
              }}
              style={styles.video}
            >
              <source src="https://github.com/Com-Adarsh/Samskara-Cusat/blob/main/Public/Images/SAMSKARA_Title_Sequence_In_a_cinematic_style_two_flowing_ribbons_one_Uiy_e3sE.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Optional: Overlaying the text softly over the video */}
            <div style={styles.textOverlay}>
              <h1 style={styles.title}>SAMSKARA</h1>
              <p style={styles.subtitle}>CUSAT ARTISTIC COLLECTIVE</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000000', // True Black
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    overflow: 'hidden'
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    // KEY BLENDING TRICK:
    // 'screen' blend mode makes the black parts of the video transparent
    mixBlendMode: 'screen', 
    filter: 'contrast(1.2) brightness(0.8)', // Ensures the reds/yellows pop while blacks stay deep
  },
  textOverlay: {
    position: 'absolute',
    textAlign: 'center',
    pointerEvents: 'none' // Clicks pass through to the video
  },
  title: {
    fontFamily: "'Syncopate', sans-serif",
    fontSize: '3.5rem',
    color: '#FF0000',
    letterSpacing: '12px',
    margin: 0,
    fontWeight: '700',
    textShadow: '0 0 20px rgba(255, 0, 0, 0.4)' // Soft red glow
  },
  subtitle: {
    fontFamily: "'Inter', sans-serif",
    color: '#FFFFFF',
    marginTop: '10px',
    letterSpacing: '5px',
    fontSize: '0.8rem',
    opacity: 0.8
  }
};
