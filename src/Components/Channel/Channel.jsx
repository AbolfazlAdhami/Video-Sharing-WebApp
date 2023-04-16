import React, { useEffect, useState } from "react";
import { fetchChannelData } from "../../util/FetchApi";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import ChannelHeader from "./ChannelHeader";
import ChannelLoader from "./ChannelLoader";
import ChannelTab from "./ChannelTab";

function Channel() {
  const [channelData, setChannelData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchChannelData(id).then((data) => setChannelData(...data.items));
  }, []);

  let content = null;
  if (channelData == null) {
    content = <ChannelLoader />;
  } else {
    content = (
      <>
        <ChannelHeader info={channelData} />
      </>
    );
  }

  return <Stack>{content}</Stack>;
}

export default Channel;
