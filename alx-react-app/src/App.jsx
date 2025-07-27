import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import your custom components ONCE
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Vite & React logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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

      {/* Your Custom Components */}
      <WelcomeMessage />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

