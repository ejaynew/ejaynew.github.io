import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WorkExperienceAccordion({ experience }) {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="work-description"
        id="work-description"
      >
        <ListItemText
          primary={experience.title}
          secondary={`${experience.company} | ${experience.dates}`}
        />
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {experience.description.map((bullet, index) => {
            // Split the bullet point into words
            const words = bullet.split(" ");

            // Insert &nbsp; between the second-to-last and last words
            if (words.length > 1) {
              words[words.length - 2] += "\u00a0" + words[words.length - 1];
              words.pop();
            }

            // Join the words back together with a bullet point (•)
            const formattedBullet = "\u2022 " + words.join(" ");

            return (
              <ListItem key={index}>
                <ListItemText>{formattedBullet}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
