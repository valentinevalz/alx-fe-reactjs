// my-company/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Our magic doors!

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#282c34', padding: '15px 20px', display: 'flex', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>Home</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>About</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>Services</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
