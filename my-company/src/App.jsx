// my-company/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Our magic routing tools!

// Import our new pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Import our Navbar (the list of magic doors)
import Navbar from './components/Navbar';

function App() {
  return (
    // This is like our big castle where all the rooms are!
    <Router>
      {/* Our magic doors list that always stays on top */}
      <Navbar />

      {/* This decides which room (page) to show */}
      <Routes>
        {/* If the address is just '/', show the Home room */}
        <Route path="/" element={<Home />} />
        {/* If the address is '/about', show the About room */}
        <Route path="/about" element={<About />} />
        {/* If the address is '/services', show the Services room */}
        <Route path="/services" element={<Services />} />
        {/* If the address is '/contact', show the Contact room */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;