import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DarkModeProvider } from "./DarkModeContext";


export default function App({ children }) {
  return (
    <div>
      <DarkModeProvider>
        <ThemeProvider theme={theme}>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </DarkModeProvider>
    </div>
  );
}
