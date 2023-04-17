import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function VideoBox({ video }) {
  const { id, snippet } = video;

  return (
    <Card
      sx={{
        height: 300,
        width: "98%",
        backgroundColor: "#2f3640",
        borderRadius: 2,
        transition: "all ease 0.5s",

        "&&:hover": { boxShadow: "0.1rem 0.1rem .5rem #fff" },
      }}
    >
      <CardMedia
        sx={{ height: "50%", width: "100%", borderRadius: 2, objectFit: "cover", objectPosition: { sm: "center top", md: "center center" } }}
        image={snippet?.thumbnails?.high?.url}
        title={snippet.title}
      />
      <CardContent sx={{ height: "50%", width: "100%", display: "flex", gap: 2, flexDirection: "column", justifyContent: "space-around", alignItems: "flex-start" }}>
        <Link to={`/videoDetails/${id.videoId}`}>
          <Typography color={"#fff"} variant="subtitle2" sx={{ cursor: "pointer" }}>
            {snippet.title.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={`/channel/${snippet.channelId}`}>
          <Typography variant="subtitle2" color="#dcdde1" sx={{ verticalAlign: "center", cursor: "pointer" }}>
            {snippet.channelTitle}
            <CheckCircle sx={{ fontSize: 15, color: "#fc1503", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoBox;
