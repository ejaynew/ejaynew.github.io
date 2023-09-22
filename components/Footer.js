import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#f6f6f6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="body1">
          Made with ❤️ by Emma Jayne. Code for this site is available{" "}
          <a
            href="https://github.com/ejaynew/ejaynew.github.io"
            target="_blank"
          >
            on Github
          </a>
          .
        </Typography>
      </Box>
    </div>
  );
}
