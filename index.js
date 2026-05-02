// pages/index.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchArtisticSubmissions } from '../utils/GoogleSheetLib'; // Our data fetcher
import IntroSplash from '../components/IntroSplash';
import PhotoGallery from '../components/PhotoGallery';
import ProcessSlider from '../components/ProcessSlider';
import InstagramFeed from '../components/InstagramFeed';
import FilterBar from '../components/FilterBar'; // The filter we designed

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data from Google Sheets when the component mounts
  useEffect(() => {
    async function loadData() {
      const data = await fetchArtisticSubmissions();
      setSubmissions(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // 2. Filter logic based on the active tab
  const filteredData = submissions.filter(item => 
    activeTab === 'All' ? true : item.type === activeTab
  );

  // 3. Find the first painting to feature in the "Process Slider"
  const featuredPainting = submissions.find(item => item.type === 'Painting');

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      
      {!introFinished ? (
        <IntroSplash onComplete={() => setIntroFinished(true)} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          {/* Section: Navigation / Filters */}
          <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Section: Featured Painting (Only show if a painting exists and on "All" or "Painting" tab) */}
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

          {/* Section: Dynamic Gallery */}
          <section style={styles.section}>
            <PhotoGallery photos={filteredData} />
          </section>

          {/* Section: Social Connection */}
          <InstagramFeed />

          {/* Footer */}
          <footer style={styles.footer}>
            <div style={styles.divider}></div>
            <p>© 2026 Samskara CUSAT | Artistic Collective Portal</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

const styles = {
  section: {
    padding: '20px 0',
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#FFD700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '20px'
  },
  footer: {
    padding: '60px 20px',
    textAlign: 'center',
    color: '#555',
    fontSize: '0.9rem'
  },
  divider: {
    height: '1px',
    backgroundColor: '#333',
    width: '60%',
    margin: '0 auto 20px auto'
  }
};
}
