// alx-react-app-new/src/components/Counter.jsx
import React, { useState } from 'react'; // We need 'useState' to remember the number!

function Counter() {
  // This is like setting our number toy to start at 0
  // 'count' is the number right now, 'setCount' is how we change it
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px dashed #61dafb', borderRadius: '10px', textAlign: 'center' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#282c34' }}>Current Count: {count}</p>
      {/* Buttons to change the number! */}
      <button
        onClick={() => setCount(count + 1)} // When clicked, make the number bigger by 1
        style={{ margin: '5px', padding: '10px 15px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)} // When clicked, make the number smaller by 1
        style={{ margin: '5px', padding: '10px 15px', fontSize: '16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)} // When clicked, make the number 0 again
        style={{ margin: '5px', padding: '10px 15px', fontSize: '16px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
