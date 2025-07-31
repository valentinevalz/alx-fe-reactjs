// alx-react-app-new/src/App.jsx
import React, { useState } from 'react';

// Assets and styles (from default Vite setup)
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import all custom components directly from src/ (NOT src/components/)
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './WelcomeMessage'; // From previous project
import UserProfile from './UserProfile';       // From previous project
import Counter from './Counter';             // New for Task 1

function App() {
  // This useState is from the default Vite + React template, keep it if you want
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Default Vite + React content (optional, can be kept or removed) */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <hr /> {/* Visual separator */}

      {/* Components for Task 0 (should now be correctly styled) */}
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> {/* Example usage */}
      <WelcomeMessage /> {/* Example usage */}

      <hr /> {/* Visual separator */}

      {/* Component for Task 1 */}
      <Counter />
    </>
  );
}

export default App;