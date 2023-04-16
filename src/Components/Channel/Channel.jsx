import React, { useEffect, useState } from "react";
import { fetchChannelData, fetchChannelVideo, fetchData } from "../../util/FetchApi";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import ChannelHeader from "./ChannelHeader";
import ChannelLoader from "./ChannelLoader";
import Videos from "../Videos/Videos";
import { Helmet } from "react-helmet";

function Channel() {
  const [channelData, setChannelData] = useState(null);
  const [channelVideo, setChannelVideo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchChannelData(id).then((data) => setChannelData(...data.items));
    fetchChannelVideo(id).then((data) => setChannelVideo([...data]));
  }, [id]);

  let content = null;
  if (channelData == null) {
    content = <ChannelLoader />;
  } else {
    content = (
      <>
        <ChannelHeader info={channelData} />
        <Videos videos={channelVideo} />
      </>
    );
  }

  return (
    <Stack pb={3}>
      <Helmet>
        <title>{channelData == null ? "Loading..." : channelData.brandingSettings.channel.title}</title>
      </Helmet>
      {content}
    </Stack>
  );
}

export default Channel;
