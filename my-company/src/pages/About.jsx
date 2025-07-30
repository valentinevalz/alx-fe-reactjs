// my-company/src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f8f8', minHeight: 'calc(100vh - 100px)' }}>
      <h1 style={{ color: '#2c3e50' }}>About Us</h1>
      <p style={{ fontSize: '1.1em', color: '#34495e' }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy. We believe in innovation and customer satisfaction.</p>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        <li style={{ padding: '5px 0', borderBottom: '1px dashed #ccc' }}>Experienced Team</li>
        <li style={{ padding: '5px 0', borderBottom: '1px dashed #ccc' }}>Innovative Solutions</li>
        <li style={{ padding: '5px 0' }}>Customer Focused</li>
      </ul>
    </div>
  );
}

export default About;
