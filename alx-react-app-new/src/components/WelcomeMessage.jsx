import React from 'react';

const WelcomeMessage = ({ name }) => {
  const style = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '20px',
    color: '#444'
  };

  return <p style={style}>Hello, {name}! Welcome to our React app.</p>;
};

export default WelcomeMessage;
