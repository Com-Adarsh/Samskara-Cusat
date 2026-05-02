// components/PhotoGallery.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhotoGallery({ photos }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={styles.galleryWrapper}>
      <h2 style={styles.heading}>The Darkroom</h2>
      
      <div style={styles.masonryGrid}>
        {photos.map((photo, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedImg(photo)}
            style={styles.photoCard}
          >
            <img src={photo.url} alt={photo.title} style={styles.image} />
            <div style={styles.overlay}>
              <span style={styles.artistName}>{photo.artist}</span>
              <p style={styles.photoTitle}>{photo.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.lightbox} 
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg.url} 
              style={styles.fullImg} 
            />
            <div style={styles.imgInfo}>
              <h3 style={styles.lightboxTitle}>{selectedImg.title}</h3>
              <p style={styles.lightboxArtist}>Captured by {selectedImg.artist}</p>
            </div>
            <button style={styles.closeBtn}>CLOSE</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  galleryWrapper: { 
    padding: '80px 5%', 
    backgroundColor: '#000',
    fontFamily: "'Inter', sans-serif"
  },
  heading: { 
    fontFamily: "'Syncopate', sans-serif",
    color: '#FFD700', 
    fontSize: '2rem',
    borderLeft: '4px solid #FF0000', 
    paddingLeft: '20px', 
    marginBottom: '50px',
    letterSpacing: '2px'
  },
  masonryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '30px',
  },
  photoCard: { 
    position: 'relative', 
    cursor: 'pointer', 
    overflow: 'hidden', 
    borderRadius: '2px', // Sharper edges for a modern look
    backgroundColor: '#111'
  },
  image: { 
    width: '100%', 
    display: 'block', 
    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' 
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '20px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
    color: '#fff',
    opacity: 0,
    transition: '0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  // We can add a CSS hover selector in a real .css file, 
  // but for inline-styles, we use the motion.div whileHover helper.
  artistName: {
    fontFamily: "'Syncopate', sans-serif",
    fontSize: '0.7rem',
    color: '#FFD700',
    marginBottom: '5px'
  },
  photoTitle: {
    fontSize: '0.9rem',
    fontWeight: '300',
    margin: 0
  },
  lightbox: {
    position: 'fixed',
    top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.98)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    zIndex: 10000,
    padding: '20px'
  },
  fullImg: { 
    maxHeight: '75vh', 
    maxWidth: '90%', 
    border: '1px solid #333',
    boxShadow: '0 0 50px rgba(255,0,0,0.2)' 
  },
  imgInfo: { 
    color: '#fff', 
    textAlign: 'center', 
    marginTop: '30px' 
  },
  lightboxTitle: {
    fontFamily: "'Syncopate', sans-serif",
    color: '#FFD700',
    fontSize: '1.5rem',
    margin: '0 0 10px 0'
  },
  lightboxArtist: {
    fontFamily: "'Inter', sans-serif",
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.8rem'
  },
  closeBtn: {
    marginTop: '30px',
    background: 'none',
    border: '1px solid #FF0000',
    color: '#FF0000',
    padding: '10px 30px',
    cursor: 'pointer',
    fontFamily: "'Syncopate', sans-serif",
    fontSize: '0.6rem',
    letterSpacing: '2px'
  }
};
          <div style={styles.imgInfo}>
            <h3>{selectedImg.title}</h3>
            <p>By {selectedImg.artist}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  galleryWrapper: { padding: '50px 5%', backgroundColor: '#000' },
  heading: { color: '#FFD700', borderLeft: '5px solid #FF0000', paddingLeft: '15px', marginBottom: '30px' },
  masonryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
  },
  photoCard: { position: 'relative', cursor: 'pointer', overflow: 'hidden', borderRadius: '4px' },
  image: { width: '100%', display: 'block', transition: '0.3s' },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '10px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    color: '#fff',
    fontSize: '0.8rem'
  },
  lightbox: {
    position: 'fixed',
    top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.95)',
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    zIndex: 10000
  },
  fullImg: { maxHeight: '80%', maxWidth: '90%', border: '2px solid #FFD700' },
  imgInfo: { color: '#fff', textAlign: 'center', marginTop: '20px' }
};
