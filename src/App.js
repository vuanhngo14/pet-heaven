import React, { useState } from 'react';
import About from './About';
import Footer from './Footer';
import Pet from './Pet'; 
import './App.css';

function App() {

  // SPA Logic 
  
  const [currentSection, setCurrentSection] = useState('about');

  const handleNavItemClick = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'adopt':
        return <Pet />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      
      <header>
      <nav>
        <ul>
        <li onClick={() => handleNavItemClick('about')}>Home</li>
            <li onClick={() => handleNavItemClick('adopt')}>Adopt</li>
            <li onClick={() => handleNavItemClick('release')}>Release</li>
            <li onClick={() => handleNavItemClick('contact')}>Contact</li>
        </ul>
      </nav>
    </header>

      {renderSection()}
      <Footer />
    </div>
  );

}

export default App;