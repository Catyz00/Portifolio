import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Alternar a classe "dark" no body para mudar o tema globalmente
    document.body.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="container">
      <Header toggleDarkMode={toggleDarkMode} />
      <Body />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
