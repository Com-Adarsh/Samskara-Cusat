// pages/index.js
import { useState } from 'react';
import IntroSplash from '../components/IntroSplash';
import PhotoGallery from '../components/PhotoGallery';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  // Sample data (This will eventually come from your Google Sheet)
  const samplePhotos = [
    { url: 'https://via.placeholder.com/600x800', title: 'Campus Rain', artist: 'Adarsh' },
    { url: 'https://via.placeholder.com/800x600', title: 'Cultural Night', artist: 'Samskara Team' },
  ];

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      {!introFinished ? (
        <IntroSplash onComplete={() => setIntroFinished(true)} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Navbar Component would go here */}
          <PhotoGallery photos={samplePhotos} />
          {/* Other creative modules (Music, Dance, Painting) go here */}
        </motion.div>
      )}
    </main>
  );
}
