import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

function VideoLoader() {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={3} justifyContent={"center"} alignItems={"center"} sx={{ overflowY: "auto", height: { sx: "auto", md: "100vh" } }}>
      {Array(25)
        .fill("")
        .map((item, index) => (
          <Box key={index} sx={{ height: 240, width: 280, backgroundColor: "#2f3640", borderRadius: 2 }}>
            <Skeleton sx={{ height: 140, width: "auto", borderRadius: 2 }} animation="wave" variant="rounded" />
            <Box padding={1}>
              <Skeleton animation="wave" height={35} width="100%" style={{ margin: 4 }} variant="text" />
              <Skeleton animation="wave" height={20} width="80%" variant="text" />
              <Skeleton animation="wave" height={15} width="60%" variant="text" />
            </Box>
          </Box>
        ))}
    </Stack>
  );
}

export default VideoLoader;
