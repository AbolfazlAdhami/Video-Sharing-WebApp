import React from "react";
import VideoLoader from "../Loader/VideoLoader";
import VideoBox from "./VideoBox";
import { Grid } from "@mui/material";

function Videos({ videos }) {
  let content = null;
  content = <VideoLoader />;
  if (videos == undefined) {
  } else {
    content = (
      <Grid container spacing={2} px={1} sx={{ placeContent: "center", overflowY: "auto" }}>
        {videos.map((video) => (
          <Grid item width={"100%"} lg={3} md={4} sm={6} sx={12} key={video.id.videoId}>
            <VideoBox video={video} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return content;
}

export default Videos;
