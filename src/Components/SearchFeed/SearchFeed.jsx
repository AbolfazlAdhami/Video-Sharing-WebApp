import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../Videos/Videos";
import { Helmet } from "react-helmet";

function SearchFeed() {
  const { query } = useParams();
  const [result, setResult] = useState(null);
  const searchQuery = async () => {
    setResult(null);
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: query,
        part: "snippet,id",
        regionCode: "US",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": process.env.React_App_Api_Key,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    const { data, status } = await axios.request(options);
    if (status == 200) return [...data.items];
  };
  useEffect(() => {
    // setResult(null);
    searchQuery().then((data) => setResult([...data]));
  }, [query]);

  return (
    <Box p={2} minHeight={"95vh"}>
      <Helmet>
        <title>Search...</title>
      </Helmet>
      <Typography textAlign={"start"} variant="h5" fontWeight={800} color="#fff" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#fc1503" }}>{query}</span> Videos
      </Typography>
      <Videos videos={result} />
    </Box>
  );
}

export default SearchFeed;
