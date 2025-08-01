import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#333',
  padding: '1rem'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
