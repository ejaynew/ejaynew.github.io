import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import Navbar from "./Navbar";
import { DarkModeProvider } from "./DarkModeContext";

export default function App({children}) {
  return (
    <div>
      <DarkModeProvider>
        <ThemeProvider theme={theme}>
          <div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </DarkModeProvider>
    </div>
  );
}
