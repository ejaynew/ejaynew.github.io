import React, { createContext, useContext, useState } from "react";

// Create a context
const DarkModeContext = createContext();

// Create a provider component
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Create a custom hook to access the context
export function useDarkMode() {
  return useContext(DarkModeContext);
}
