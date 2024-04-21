import React, { useState } from "react";
import { Box, Drawer, Grid, IconButton } from "@mui/material";
import { Cube } from "./components/Cube";
import SideBar from "./layouts/Sidebar";
import MySidebar from "./layouts/Sidebar";
import { MenuOutlined } from "@mui/icons-material";
import { Route, Routes, Redirect } from "react-router-dom";
import Main from "./pages/Main";
import RefrigeratorPage from "./pages/RefrigeratorPage";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <MySidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/refrigerator/:id" element={<RefrigeratorPage />} />
        </Routes>
      </main>
    </Box>
  );
};

export default App;
