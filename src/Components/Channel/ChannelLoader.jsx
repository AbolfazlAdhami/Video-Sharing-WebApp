import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

function ChannelLoader() {
  return (
    <Stack direction={"column"}>
      {/* Poster */}
      <Box>
        <Skeleton variant="rectangular" width={"100%"} sx={{ backgroundColor: "#2f3640", height: { xs: 250, md: 300 } }} />
      </Box>
      {/* Poster */}
      {/* Info */}
      <Box sx={{ display: "flex", flexDirection: { sm: "row" }, gap: 2, mt: 2, px: 4 }}>
        <Skeleton variant="circular" width={150} height={150} />
        <Stack direction={"column"} justifyContent={"center"} alignItems={"flex-start"}>
          <Skeleton variant="text" width={250} height={50} />
          <Skeleton variant="text" width={150} height={40} />
          <Skeleton variant="text" width={450} height={40} />
        </Stack>
      </Box>
      {/* Info  */}
    </Stack>
  );
}

export default ChannelLoader;
