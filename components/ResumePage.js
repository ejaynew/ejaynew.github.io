import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import GetAppIcon from "@mui/icons-material/GetApp";
import styles from "../styles/Resume.module.css";
import { resumeData } from "../public/resumeData";
import WorkExperienceAccordion from "../components/WorkExperienceAccordion";
import { useDarkMode } from "./DarkModeContext";

function ResumePage() {
  const { darkMode } = useDarkMode();
  const [fixedButton, setFixedButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 93) {
        setFixedButton(true);
      } else {
        setFixedButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? styles.darkMode : ""}>
      <Box
        className={
          darkMode ? `${styles.resume} ${styles.darkMode}` : styles.resume
        }
      >
        <Container maxWidth="sm">
          {/* Download button */}
          <div
            className={`${styles.downloadBtn} ${
              fixedButton ? styles.fixedBtn : ""
            }`}
          >
            <IconButton
              color="secondary"
              variant="contained"
              href="/resume.pdf"
              aria-label="Download Resume"
              target="_blank"
              download="Emma Jayne  — Cloud Engineer, Software Developer.pdf"
              sx={{
                backgroundColor: "#967bb6",
                "&:hover": {
                  backgroundColor: "#6e5e82",
                },
              }}
            >
              <GetAppIcon />
            </IconButton>
          </div>

          {/* Contact section */}
          <div
            className={
              darkMode
                ? `${styles.section} ${styles.darkSection}`
                : styles.section
            }
          >
            <Typography variant="h4" gutterBottom>
              Contact
            </Typography>
            <List>
              {Object.keys(resumeData.contact).map((key) => (
                <ListItem key={key}>
                  <ListItemText
                    primary={`${key.charAt(0).toUpperCase()}${key
                      .slice(1)
                      .toLowerCase()}: ${resumeData.contact[key]}`}
                  />
                </ListItem>
              ))}
            </List>
          </div>

          {/* Work experience section */}
          <div
            className={
              darkMode
                ? `${styles.section} ${styles.darkSection}`
                : styles.section
            }
          >
            <Typography variant="h4" gutterBottom>
              Work Experience
            </Typography>

            {resumeData.workExperience.map((experience, index) => (
              <WorkExperienceAccordion key={index} experience={experience} />
            ))}
          </div>

          {/* Education section */}
          <div
            className={
              darkMode
                ? `${styles.section} ${styles.darkSection}`
                : styles.section
            }
          >
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            <List>
              {resumeData.education.map((education, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={education.degree}
                    secondary={`${education.school} | ${education.dates}`}
                  />
                </ListItem>
              ))}
            </List>
          </div>

          {/* Certifications section */}
          <div
            className={
              darkMode
                ? `${styles.section} ${styles.darkSection}`
                : styles.section
            }
          >
            <Typography variant="h4" gutterBottom>
              Certifications
            </Typography>
            <List>
              {resumeData.certifications.map((certification, index) => (
                <List key={index}>
                  <ListItem>
                    <ListItemText
                      primary={certification.certification}
                      secondary={`${certification.certificationAuthority} | ${certification.certificationDate}`}
                    />
                  </ListItem>
                </List>
              ))}
            </List>
          </div>

          {/* Skills section */}
          <div
            className={
              darkMode
                ? `${styles.section} ${styles.darkSection}`
                : styles.section
            }
          >
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            {Object.keys(resumeData.skills).map((category, index) => (
              <div key={index}>
                <Typography variant="body1">
                  <strong>{category}: </strong>
                  {(resumeData.skills[category]).join(' | ')}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </Box>
    </div>
  );
}

export default ResumePage;
