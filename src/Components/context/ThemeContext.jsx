import React, { useState, createContext } from "react";
export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState('lightMode');



    const toggleTheme = () => {

      


      setTheme((curr) => (curr === 'lightMode' ? 'darkMode' : 'lightMode'))
  
    }
  
  

    return (

        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme}}>
<div id={theme}>
{children}

</div>
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider