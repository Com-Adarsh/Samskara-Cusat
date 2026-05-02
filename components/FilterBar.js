// components/FilterBar.js
export default function FilterBar({ activeTab, setActiveTab }) {
  const tabs = ["All", "Photography", "Music", "Dance", "Painting"];
  
  return (
    <div style={styles.bar}>
      {tabs.map(tab => (
        <button 
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            ...styles.btn,
            color: activeTab === tab ? '#FFD700' : '#FFF',
            borderBottom: activeTab === tab ? '2px solid #FF0000' : 'none'
          }}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const styles = {
  bar: { display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#000' },
  btn: { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', padding: '10px' }
};
