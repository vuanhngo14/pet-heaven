import React from 'react';
import About from './About';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Adopt</li>
          <li>Release</li>
         <li>Contact</li>
        </ul>
      </nav>
    </header>

      <About />
      <Footer />
    </div>
  );
}

export default App;