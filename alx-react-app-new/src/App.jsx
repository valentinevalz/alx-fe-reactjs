import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <UserProfile name="Valentine Jide" age={26} />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
