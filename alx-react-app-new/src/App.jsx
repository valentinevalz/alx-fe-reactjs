// src/App.jsx

// React core
import { useState } from 'react';

// Assets and styles
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Custom components
// FIX: Changed paths from './components/ComponentName' to './ComponentName'
import Header from './Header'; // Corrected path
import MainContent from './MainContent'; // Corrected path
import Footer from './Footer'; // Corrected path
import WelcomeMessage from './WelcomeMessage'; // Corrected path (assuming WelcomeMessage.jsx is also in src/)
import UserProfile from './UserProfile'; // Corrected path
import Counter from './Counter'; // Corrected path

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logos */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Counter */}
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

      {/* Custom Components (Ensure order matches task requirements if submitting for checks) */}
      <Header />
      <MainContent />
      <Footer />
      {/* Keep or comment out other components based on the specific task you're checking */}
      <WelcomeMessage />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Counter /> {/* Add your Counter component from Task 1 */}
    </>
  );
}

export default App;