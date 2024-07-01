import React, { useState, createContext, useEffect } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'lightMode');

  const toggleTheme = () => {
    setTheme((mode) => (mode === 'lightMode' ? 'darkMode' : 'lightMode'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div id={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
