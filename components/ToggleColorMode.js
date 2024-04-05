import React, { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

function ColorModeToggle(isDarkMode) {
  const [darkMode, setDarkMode] = useState(isDarkMode);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
    // Add your logic to toggle the color mode here
  };

  return (
    <div>
      <IconButton color="inherit" onClick={toggleColorMode}>
        {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </div>
  );
}

export default ColorModeToggle;
