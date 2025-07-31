import React from 'react';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: '#282c34',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
      fontSize: '24px'
    }
  };

  return <header style={styles.header}>Welcome to My React App</header>;
};

export default Header;
