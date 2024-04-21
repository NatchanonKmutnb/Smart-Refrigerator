import { Box, Typography } from "@mui/material";
import mqtt from "mqtt";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MQTT_BROKER_URL = "ws://SmartRefrigerator@broker.emqx.io:8083/mqtt";
function RefrigeratorPage() {
  const { id } = useParams();
  const [distance, setDistance] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const client = mqtt.connect(MQTT_BROKER_URL);
  useEffect(() => {
    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      console.log(client.subscribe("distance"));
      client.subscribe("distance");
      console.log(client.subscribe("distance"));
    });

    client.on("message", (topic, message) => {
      if (topic === "distance") {
        const obj = JSON.parse(message.toString());
        setDistance(obj);
        console.log(obj);
      }
    });

    return () => {
      client.end();
    };
  }, [client]);

  useEffect(() => {
    if (distance) {
      const boxes = [];

      // Iterate through each distance value to determine the status for each box
      for (let i = 1; i <= 6; i++) {
        const distances = distance[`Distance ${i}`];
        const status = distances > 10 ? "empty" : "full";
        const box = { id: `box${i}`, status };
        boxes.push(box);
      }
      console.log(boxes);
      setDisplayData(boxes);
    }
  }, [distance]);

  if (!displayData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", fontSize: ["2rem", "3rem", "4rem"] }}
        >
          Wait for connect...
        </Typography>
      </Box>
    );
  }
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
        {displayData.map((box, index) => (
          <Box
            key={box.id}
            sx={{
              width: "calc(33% - 24px)",
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
            {`Sensor ${index + 1}`}-{box.status}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default RefrigeratorPage;
