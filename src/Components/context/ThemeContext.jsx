import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

  
  const savedTheme = localStorage.getItem("theme") || "lightMode";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    setTheme((mode) => (mode === "lightMode" ? "darkMode" : "lightMode"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div id={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
