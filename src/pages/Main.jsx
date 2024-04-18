import { Box, Typography } from "@mui/material";
import React from "react";

function Main() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: ["2rem", "3rem", "4rem"] }}
      >
        Smart Refrigerator Project
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: ["1rem", "1.5rem", "2rem"],
          mt: 1,
        }}
      >
        Please select Refrigerator on sidebar
      </Typography>
    </Box>
  );
}

export default Main;
