import React, { useState } from 'react';

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? '#fff' : '#333';
    document.body.style.color = isDarkTheme ? '#000' : '#fff';
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: isDarkTheme ? '#fff' : '#333',
        color: isDarkTheme ? '#333' : '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
      }}
    >
      {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
}

export default ThemeToggle;
