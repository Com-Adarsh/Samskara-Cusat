import { useState } from 'react';
import IntroSplash from '../components/IntroSplash';
import PhotoGallery from '../components/PhotoGallery';
import ProcessSlider from '../components/ProcessSlider';
import InstagramFeed from '../components/InstagramFeed';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
      {!introFinished ? (
        <IntroSplash onComplete={() => setIntroFinished(true)} />
      ) : (
        <>
          {/* 1. Photography Section */}
          <PhotoGallery photos={[]} /> 

          {/* 2. Painting Section (Before/After) */}
          <ProcessSlider 
            sketch="/images/sketch1.jpg" 
            final="/images/final1.jpg" 
            artistName="CUSAT Painter" 
          />

          {/* 3. Instagram Social Section */}
          <InstagramFeed />

          {/* Footer */}
          <footer style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            © 2026 Samskara CUSAT | Designed for the Collective
          </footer>
        </>
      )}
    </div>
  );
}
