import axios from "axios";

// Default option set for fetch data

const Base_URL = `https://youtube-v31.p.rapidapi.com/search`;

// Get Api From Database

export const fetchData = async (query, method, maxResult = 40) => {
  const options = {
    method: method,
    url: Base_URL,
    params: {
      q: query,
      part: "snippet,id",
      regionCode: "IR",
      maxResults: maxResult,
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": process.env.React_App_Api_Key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, status } = await axios.request(options);

  if (status == 200) return data;
};

export const fetchChannelData = async (channelId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/channels",
    params: { part: "snippet,statistics", id: channelId },
    headers: {
      "X-RapidAPI-Key": process.env.React_App_Api_Key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, status } = await axios.request(options);

  if (status == 200) return data;
};

export const fetchChannelVideo = async (id) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      channelId: id,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.React_App_Api_Key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, status } = await axios.request(options);
  if (status == 200) return [...data.items];
};
