import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#eee',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
