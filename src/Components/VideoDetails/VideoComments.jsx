import React, { useDeferredValue, useEffect, useState } from "react";
import { fetchComments } from "../../util/FetchApi";
import { Box, Skeleton, Stack, Typography } from "@mui/material";

function VideoComments({ relatedID }) {
  const [comments, setComments] = useState(null);
  const deferredID = useDeferredValue(relatedID);
  useEffect(() => {
    fetchComments(relatedID).then((data) => {
      setComments([...data]);
    });
  }, [deferredID]);

  return (
    <Stack display={"flex"} flexDirection={"column"} rowGap={2} width={"100%"} p={2}>
      {comments != null ? (
        comments.map((comment) => {
          let message = comment?.snippet?.topLevelComment?.snippet;
          return (
            <Box display={"flex"} key={comment?.id} flexDirection={"column"} gap={1} alignItems={"flex-start"} bgcolor={"#2f3640"} p={2} sx={{ borderRadius: "20px" }}>
              <Box flexDirection={"row"} display={"flex"} alignItems={"center"} gap={2}>
                <img src={message?.authorProfileImageUrl} style={{ height: "35px", borderRadius: "50%", objectFit: "cover" }} alt="" />
                <Typography variant="subtitle1" color={"#fff"}>
                  {message?.authorDisplayName}
                </Typography>
              </Box>
              <Typography variant="body2" color={"#fff"}>
                {message?.textDisplay.slice(0, 25)}
              </Typography>
            </Box>
          );
        })
      ) : (
        <Typography variant="h6" color={"#fff"}>
          There is No Comments for this Video
        </Typography>
      )}
    </Stack>
  );
}

export default VideoComments;
