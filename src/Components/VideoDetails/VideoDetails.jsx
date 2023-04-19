import React, { useDeferredValue, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { videoDetailsFetch } from "../../util/FetchApi";
import { Helmet } from "react-helmet";
import { CheckCircle } from "@mui/icons-material";
import VideoSugestion from "./VideoSugestion";
import VideoComments from "./VideoComments";

function VideoDetails() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const deferredId = useDeferredValue(id);
  const deferredData = useDeferredValue(videoData);

  useEffect(() => {
    videoDetailsFetch(id).then((data) => setVideoData({ ...data }));
    console.log(deferredData);
  }, [deferredId]);

  return (
    <Box minHeight={"95vh"}>
      <Helmet>
        <title>{videoData == null ? "Loading..." : videoData?.snippet?.title}</title>
      </Helmet>

      <Stack minHeight={"400px"} height={"560px"} width={"100vw"}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={"100%"} height={"80%"} controls={true} volume={0.1} />
        {videoData != null ? (
          <Box p={2}>
            <Link to={`/channel/${videoData?.snippet.channelId}`}>
              <Typography
                color={"#dcdde1"}
                variant="button"
                sx={{
                  cursor: "pointer",
                  transition: "all ease 0.5s",
                  textAlign: "center  ",
                  ":hover": {
                    color: "#fc1503",
                  },
                }}
              >
                {videoData?.snippet?.channelTitle}
                <CheckCircle sx={{ fontSize: 15, color: "#dcdde1", ml: "5px" }} />
              </Typography>
            </Link>
            <Typography variant="h6" color="#fff">
              {videoData?.snippet?.title}
            </Typography>
            <Typography variant="caption" color={"#dcdde1"}>
              {new Date().getFullYear() - videoData?.snippet?.publishedAt.slice(0, 4) > 1
                ? new Date().getFullYear() - videoData?.snippet?.publishedAt.slice(0, 4) + " Year Ago"
                : new Date().getMonth() - videoData?.snippet?.publishedAt.slice(5, 7) > 1
                ? new Date().getMonth() - videoData?.snippet?.publishedAt.slice(5, 7) + " Month Ago"
                : -(new Date().getDay() - videoData?.snippet?.publishedAt.slice(8, 10)) + " Days Ago"}
            </Typography>
          </Box>
        ) : null}
      </Stack>

      {videoData != null ? (
        <Stack p={2} display={"flex"} width={"100%"} height={"100%"} direction={"row"} alignItems={"flex-start"} justifyContent={"space-between"} sx={{}}>
          <Box display={"flex"} flexDirection={"column"} width="60%">
            <VideoComments relatedID={id} />
          </Box>
          <Box sx={{ width: "40%" }}>
            {" "}
            <VideoSugestion RelatedId={id} />
          </Box>
        </Stack>
      ) : null}
    </Box>
  );
}

export default VideoDetails;
