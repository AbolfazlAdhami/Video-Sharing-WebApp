import React from "react";
import { Box, Skeleton, Stack, CardMedia, Typography, Card, Button } from "@mui/material";
import { CheckCircle, Favorite, VideoLibrary, Visibility } from "@mui/icons-material";
import styled from "styled-components";

const ChannelHeader = ({ info }) => {
  const { brandingSettings, snippet, statistics } = info;
  console.log(info);
  const SubBtn = styled(Button)({
    backgroundColor: "#fc1503",
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 15,
    padding: "5px 40px",
    transition: "all ease-in 0.3s",

    "&:hover": {
      border: "1px solid #fc1503",
      backgroundColor: "transparent",
      color: "#fc1503",
    },
  });

  return (
    <Stack direction={"column"}>
      {/* Poster */}
      <Box>
        <img src={brandingSettings.image?.bannerExternalUrl} style={{ width: "100%", height: "250px", objectFit: "cover", objectPosition: "center center" }} />
      </Box>
      {/* Poster */}
      {/* Info */}
      <Stack direction={"column"} p={2} gap={2} justifyContent={"flex-start"} alignItems={"center"} sx={{ flexDirection: { sm: "row" } }} bgcolor={"#2f3640"}>
        <img src={snippet.thumbnails?.default?.url} style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
        <Stack direction={"column"} justifyContent={"center"} alignItems={{ sm: "center", md: "flex-start" }} gap={2}>
          <Typography variant="h6" color={"#fff"}>
            {brandingSettings.channel.title}
            <CheckCircle sx={{ fontSize: 15, color: "#fc1503", ml: "5px" }} />
          </Typography>
          <Typography variant="caption" color={"#dcdde1"}>
            {brandingSettings.channel.description.slice(0, 100)}
          </Typography>
          <Box display={"flex"} gap={1}>
            <Typography color={"#fff"} variant="subtitle2" textAlign={"center"}>
              <Visibility sx={{ fontSize: 15, color: "#fc1503", ml: "5px", textAlign: "center" }} />
              {statistics.viewCount}
            </Typography>
            <Typography color={"#fff"} variant="subtitle2" textAlign={"center"}>
              <VideoLibrary sx={{ fontSize: 15, color: "#fc1503", ml: "5px", textAlign: "center" }} />
              {statistics.videoCount}
            </Typography>
            <Typography color={"#fff"} variant="subtitle2" textAlign={"center"}>
              <Favorite sx={{ fontSize: 15, color: "#fc1503", ml: "5px", textAlign: "center" }} />
              {statistics.subscriberCount}
            </Typography>
          </Box>
        </Stack>
        <SubBtn sx={{ marginLeft: { sx: 0, sm: "auto" } }}>Subscribe</SubBtn>
      </Stack>
      {/* Info  */}
    </Stack>
  );
};

export default ChannelHeader;
