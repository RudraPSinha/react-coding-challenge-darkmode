import React, {createContext, useState} from 'react';
import {ThemeContext} from "../../context/index"
export default function App({ children }) {
  const [dark, setDark] = useState(false);
  /* Provide modes through state and context */
  return (

    <ThemeContext.Provider value={{dark, setDark}}>
      {children}
    </ThemeContext.Provider>
    );
}
