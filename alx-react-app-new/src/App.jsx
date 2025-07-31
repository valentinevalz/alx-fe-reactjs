import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <Header />
      <WelcomeMessage />
      <UserProfile />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
