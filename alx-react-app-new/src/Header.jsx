import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h2>My React App Header</h2>
    </header>
  );
}

export default Header;
