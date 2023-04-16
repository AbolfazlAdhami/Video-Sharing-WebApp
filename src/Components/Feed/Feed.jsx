import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
import { Videos } from "../index";
import { fetchData } from "../../util/FetchApi";
import { Helmet } from "react-helmet";

function Feed() {
  // SetCategory and Change
  const [selectedCategory, setSelectedCategory] = useState("Coding");
  const changeSelected = (name) => setSelectedCategory(name);

  const [videos, setVideo] = useState(null);

  useEffect(() => {
    fetchData(selectedCategory, "GET", 100).then((data) => setVideo([...data.items]));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, position: "relative" }}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Box
        sx={{
          height: { sx: "auto", md: "100vh" },
          position: "sticky",
          borderRight: { sx: "none", md: "solid 2px #FC1503" },
          borderBottom: { md: "none", sx: "solid 2px #FC1503" },
          padding: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={changeSelected} />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} py={2} sx={{ color: "#fff", borderBottom: "2px solid #fff" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
