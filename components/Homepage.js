import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useDarkMode } from "./DarkModeContext";

function Homepage() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? styles.darkMode : ""}>
      <Box className={styles.hero}>
        <Container maxWidth="sm">
          <div className={styles.headerText}>
            <Typography variant="h3" component="div" gutterBottom>
              Welcome to my portfolio!
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Explore my resume and projects to learn more about me.
            </Typography>
            <Link href="resume">
              <Button variant="contained" color="primary">
                Check out My Resume
              </Button>
            </Link>
          </div>
        </Container>
      </Box>
    </div>
  );
}

export default Homepage;
