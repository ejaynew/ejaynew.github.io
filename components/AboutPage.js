import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../styles/About.module.css";
import Link from "next/link";
import { useDarkMode } from "./DarkModeContext";

function Homepage() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? styles.darkMode : ""}>
      <Box className={styles.container}>
        <Container maxWidth="sm">
          <div>
            <Typography variant="h2">About me</Typography>
            <Typography variant="subtitle1" paragraph>
              I'm currently working as an Associate software engineer focused on
              digital business transformation. I graduated from Carnegie Mellon
              University with a degree in Mechanical Engineering, after which I
              pivoted to software development. I have experience working with
              programming languages and frameworks such as HTML/CSS, JavaScript,
              Node.js, and React.js. As an employee, I am mission-driven,
              collaborative, and hard-working.
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
