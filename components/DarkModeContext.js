import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // Check if window is defined (client side)
  const isClient = typeof window !== "undefined";

  // Check local storage for the initial dark mode state
  const initialDarkMode = isClient && localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Save the new dark mode state to local storage
      isClient && localStorage.setItem("darkMode", newDarkMode);
      return newDarkMode;
    });
  };

  // Use useEffect to set up event listeners or other side effects
  useEffect(() => {
    // Additional setup if needed
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
