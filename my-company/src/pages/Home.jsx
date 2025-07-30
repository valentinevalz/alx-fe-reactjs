// my-company/src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to Our Company!</h1>
      <p style={{ fontSize: '1.1em', color: '#34495e' }}>We are dedicated to delivering excellence in all our services.</p>
      <img src="https://via.placeholder.com/600x200?text=Welcome" alt="Welcome" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
    </div>
  );
}

export default Home;
