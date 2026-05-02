// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head'; // Added for custom fonts and title
import { motion, AnimatePresence } from 'framer-motion';
import { fetchArtisticSubmissions } from '../utils/GoogleSheetLib';
import IntroSplash from '../components/IntroSplash';
import PhotoGallery from '../components/PhotoGallery';
import ProcessSlider from '../components/ProcessSlider';
import InstagramFeed from '../components/InstagramFeed';
import FilterBar from '../components/FilterBar';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await fetchArtisticSubmissions();
      setSubmissions(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const filteredData = submissions.filter(item => 
    activeTab === 'All' ? true : item.type === activeTab
  );

  const featuredPainting = submissions.find(item => item.type === 'Painting');

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Head>
        <title>SAMSKARA | CUSAT Artistic Collective</title>
        {/* Importing Syncopate for headings and Inter for body text */}
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=Inter:wght@300;600&display=swap" rel="stylesheet" />
      </Head>

      {!introFinished ? (
        <IntroSplash onComplete={() => setIntroFinished(true)} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          style={{ fontFamily: "'Inter', sans-serif" }} // Set default body font
        >
          <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />

          {(activeTab === 'All' || activeTab === 'Painting') && featuredPainting && (
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Featured Process</h2>
              <ProcessSlider 
                sketch={featuredPainting.sketchUrl} 
                final={featuredPainting.url} 
                artistName={featuredPainting.artist} 
              />
            </section>
          )}

          <section style={styles.section}>
            <PhotoGallery photos={filteredData} />
          </section>

          <InstagramFeed />

          <footer style={styles.footer}>
            <div style={styles.divider}></div>
            <p style={{ letterSpacing: '1px' }}>© 2026 Samskara CUSAT | Artistic Collective Portal</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

const styles = {
  section: {
    padding: '40px 0',
  },
  sectionTitle: {
    fontFamily: "'Syncopate', sans-serif", // Applied artistic font
    textAlign: 'center',
    color: 'transparent', // Make text transparent for the outline effect
    WebkitTextStroke: '1px #FFD700', // Yellow outline
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    marginBottom: '30px'
  },
  footer: {
    fontFamily: "'Inter', sans-serif",
    padding: '60px 20px',
    textAlign: 'center',
    color: '#555',
    fontSize: '0.8rem',
    textTransform: 'uppercase'
  },
  divider: {
    height: '1px',
    backgroundColor: '#333',
    width: '40%',
    margin: '0 auto 20px auto'
  }
};
