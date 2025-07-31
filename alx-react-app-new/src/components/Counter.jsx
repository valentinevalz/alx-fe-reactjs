import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const counterStyle = {
    textAlign: 'center',
    margin: '1rem auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '300px',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={counterStyle}>
      <h3>Counter</h3>
      <p>Count is: {count}</p>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
