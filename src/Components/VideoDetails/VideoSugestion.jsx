import { Box, Skeleton, Stack } from "@mui/material";
import React, { useDeferredValue, useEffect, useState } from "react";
import { fetchSuggested } from "../../util/FetchApi";
import VideoBox from "../Videos/VideoBox";

function VideoSugestion({ RelatedId }) {
  const [suggested, setSuggested] = useState(null);
  const deferredID = useDeferredValue(RelatedId);

  useEffect(() => {
    fetchSuggested(RelatedId).then((data) => setSuggested([...data]));
  }, [deferredID]);
  let content = null;
  if (suggested == null) {
    content = Array(25)
      .fill("")
      .map((item, index) => (
        <Box key={index} sx={{ height: 240, width: 280, backgroundColor: "#2f3640", borderRadius: 2 }} mt={2}>
          <Skeleton sx={{ height: 140, width: "auto", borderRadius: 2 }} animation="wave" variant="rounded" />
          <Box padding={1}>
            <Skeleton animation="wave" height={35} width="100%" style={{ margin: 4 }} variant="text" />
            <Skeleton animation="wave" height={20} width="80%" variant="text" />
            <Skeleton animation="wave" height={15} width="60%" variant="text" />
          </Box>
        </Box>
      ));
  } else {
    content = suggested.map((video, index) => <VideoBox video={video} key={index} />);
  }

  return (
    <Stack height={"100%"} width={"100%"} rowGap={2} p={1} display={"flex"} flexDirection={"column"}>
      {content}
    </Stack>
  );
}

export default VideoSugestion;
