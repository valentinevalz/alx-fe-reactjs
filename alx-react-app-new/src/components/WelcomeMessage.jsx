import React from 'react';

const WelcomeMessage = () => {
  const styles = {
    welcome: {
      textAlign: 'center',
      marginTop: '10px',
      fontSize: '20px',
      color: '#333'
    }
  };

  return <div style={styles.welcome}>Welcome to the ALX React Project!</div>;
};

export default WelcomeMessage;
