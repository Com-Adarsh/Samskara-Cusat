// components/PhotoGallery.js
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PhotoGallery({ photos }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={styles.galleryWrapper}>
      <h2 style={styles.heading}>The Darkroom</h2>
      
      <div style={styles.masonryGrid}>
        {photos.map((photo, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImg(photo)}
            style={styles.photoCard}
          >
            <img src={photo.url} alt={photo.title} style={styles.image} />
            <div style={styles.overlay}>
              <span>{photo.artist}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div style={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <motion.img 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImg.url} 
            style={styles.fullImg} 
          />
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
