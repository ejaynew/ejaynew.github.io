import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon
import { useDarkMode } from "./DarkModeContext";

export default function Navbar() {
  const {darkMode, setDarkMode} = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Emma Jayne
          </Typography>
          {["home", "resume", "projects", "thought garden"].map(
            (name, index) => (
              <Link key={index} href={name.replace(" ", "-")} passHref>
                <Button
                  color="primary"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {name}
                </Button>
              </Link>
            )
          )}
                    <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
