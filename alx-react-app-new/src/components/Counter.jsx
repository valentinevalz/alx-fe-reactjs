import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const counterStyle = {
    textAlign: 'center',
    margin: '20px',
    padding: '10px',
    backgroundColor: '#f0f0f0'
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '16px'
  };

  return (
    <div style={counterStyle}>
      <h2>Counter: {count}</h2>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
