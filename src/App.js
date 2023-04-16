import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Channel, Feed, Navbar, SearchFeed, VideoDetails } from "./Components";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#353b48", width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Feed />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/videoDetails/:id" element={<VideoDetails />} />
        <Route path="/searchFeed/:query" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
