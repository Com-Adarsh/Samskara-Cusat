// components/InstagramFeed.js
export default function InstagramFeed() {
  return (
    <div style={styles.section}>
      <h2 style={styles.title}>Follow the Movement</h2>
      <div style={styles.grid}>
        {/* Placeholder for Instagram Embed or Widget */}
        <div style={styles.placeholder}>
          <p style={{ color: '#FFD700' }}>[ @Samskara_CUSAT Feed ]</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            style={styles.button}
          >
            VIEW ON INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: { padding: '60px 5%', backgroundColor: '#000', textAlign: 'center' },
  title: { color: '#FF0000', fontSize: '2.5rem', marginBottom: '40px', fontWeight: '900' },
  placeholder: {
    height: '400px', border: '1px dashed #FFD700', display: 'flex', 
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  },
  button: {
    marginTop: '20px', padding: '10px 25px', backgroundColor: '#FF0000', 
    color: '#000', fontWeight: 'bold', textDecoration: 'none', borderRadius: '2px'
  }
};
