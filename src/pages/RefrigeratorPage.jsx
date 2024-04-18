import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const boxes = [
  { id: "box1", status: "empty" },
  { id: "box2", status: "empty" },
  { id: "box3", status: "full" },
  { id: "box4", status: "empty" },
  { id: "box5", status: "empty" },
  { id: "box6", status: "full" },
];

function RefrigeratorPage() {
  const { id } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Refrigerator {id}</h1>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          border: "1px solid gray",
          borderRadius: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {boxes.map((box) => (
          <Box
            key={box.id}
            sx={{
              width: "calc(50% - 24px)",
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: 3,
              borderColor: "grey.300",
              backgroundColor: box.status === "empty" ? "#e0f0e9" : "#f8d7da",
              boxShadow: 3,
              position: "relative",
              m: 1,
            }}
          >
            {box.id} - {box.status}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RefrigeratorPage;
