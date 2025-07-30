// alx-react-app-new/src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    // We're adding a 'style' prop with our pretty colors!
    <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '10px 0' }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
