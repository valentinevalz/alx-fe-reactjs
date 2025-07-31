import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <button onClick={handleIncrement} style={{ marginRight: '10px' }}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
