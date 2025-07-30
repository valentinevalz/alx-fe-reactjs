// my-company/src/pages/Services.jsx
import React from 'react';

function Services() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', fontSize: '1.1em', color: '#34495e' }}>
        <li style={{ marginBottom: '8px' }}>Technology Consulting - Guiding your digital transformation.</li>
        <li style={{ marginBottom: '8px' }}>Market Analysis - Understanding trends and opportunities.</li>
        <li style={{ marginBottom: '8px' }}>Product Development - Bringing your ideas to life.</li>
        <li style={{ marginBottom: '8px' }}>Digital Marketing - Reaching your audience effectively.</li>
        <li style={{ marginBottom: '8px' }}>Cybersecurity - Protecting your valuable data.</li>
      </ul>
    </div>
  );
}

export default Services;
