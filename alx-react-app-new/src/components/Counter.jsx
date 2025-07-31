import React, { useState } from 'react';

const Counter = () => {
  const styles = {
    counter: {
      textAlign: 'center',
      marginTop: '20px'
    },
    button: {
      margin: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  };

  const [count, setCount] = useState(0);

  return (
    <div style={styles.counter}>
      <h3>Counter: {count}</h3>
      <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
