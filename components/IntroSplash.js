// components/IntroSplash.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to automatically finish the intro (e.g., 4 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100vh', opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={styles.container}
        >
          {/* You can replace this <div> with a <video> tag later */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={styles.logoContainer}
          >
            <h1 style={styles.title}>SAMSKARA</h1>
            <div style={styles.underline}></div>
            <p style={styles.subtitle}>CUSAT ARTISTIC COLLECTIVE</p>
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
    backgroundColor: '#000000', // Black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  logoContainer: { textAlign: 'center' },
  title: {
    fontSize: '4rem',
    color: '#FF0000', // Red
    letterSpacing: '10px',
    margin: 0,
    fontWeight: '900',
  },
  underline: {
    height: '4px',
    backgroundColor: '#FFD700', // Yellow
    width: '100%',
    marginTop: '10px'
  },
  subtitle: {
    color: '#FFFFFF',
    marginTop: '15px',
    letterSpacing: '3px',
    fontSize: '1rem'
  }
};
