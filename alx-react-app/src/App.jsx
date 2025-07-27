// React core
import { useState } from 'react';

// Assets and styles
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Custom components
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
// import WelcomeMessage from './components/WelcomeMessage';
// import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />

      {/* Below components will be used in future tasks */}
      {/* <WelcomeMessage /> */}
      {/* <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> */}
    </>
  );
}

export default App;

