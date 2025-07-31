import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage name="Valentine" />
      <UserProfile />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
