// alx-react-app-new/src/Counter.jsx
import React, { useState } from 'react'; // Make sure useState is imported

function Counter() {
  // Initialize state with count starting at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;