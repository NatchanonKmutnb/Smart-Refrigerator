import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Define styled faces using MUI's styled API
const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: theme.palette.background.paper,
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
  border: "1px solid #ddd",
}));

const CubeFace = ({ className }) => (
  <StyledBox className={className}></StyledBox>
);

export const Cube = ({ status }) => (
  <Box
    sx={{
      width: 100,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: 3,
      borderColor: "grey.300",
      backgroundColor: status === "empty" ? "green" : "red",
      boxShadow: 3,
      position: "relative",
      transformStyle: "preserve-3d",
      m: 1,
      transform: "rotateY(20deg) rotateX(20deg)",
    }}
  >
    <CubeFace className="front" />
    <CubeFace className="back" />
    <CubeFace className="right" />
    <CubeFace className="left" />
    <CubeFace className="top" />
    <CubeFace className="bottom" />
  </Box>
);
