import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>{isDarkMode ? 'Welcome to Dark Mode 🌙' : 'Welcome to Light Mode ☀️'}</h1>

      <div className="toggle-container">
        <div className={`toggle-switch ${isDarkMode ? 'toggled' : ''}`} onClick={handleToggle}>
          <div className="switch-handle">
            {isDarkMode ? '🌙' : '☀️'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
