import React from "react";
import Navbar from "../components/Navbar";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { projectsData } from "../public/projectsData";
import { useDarkMode } from "./DarkModeContext";
import styles from "../styles/Projects.module.css";

function ProjectsPage() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? styles.darkMode : ""}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{ maxWidth: "100%" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <div style={{ marginTop: "10px" }}>
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={Object.values(link)[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: "10px" }}
                      >
                        {Object.keys(link)[0]}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProjectsPage;
