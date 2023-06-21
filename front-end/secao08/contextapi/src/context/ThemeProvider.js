import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('light');

  function toggleTheme() {
    setThemeColor(themeColor === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={ themeColor }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}
