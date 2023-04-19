import axios from "axios";

// Default option set for fetch data

const Base_URL = `https://youtube-v31.p.rapidapi.com/search`;

// Usable key for Asess to DataBase   ========>     process.env.React_App_Api_Key

// Get Api From Database for Home Page Videos
export const fetchData = async (query, method, maxResult = 150) => {
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

// Get Data as The Channel by id in singlePage of that channel
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

// Get Videos   The Channel by id in singlePage of that channel

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

// Get Videos Details as title dateRelesed ..... in video Page
export const videoDetailsFetch = async (id) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/videos",
    params: { part: "contentDetails,snippet,statistics", id: id },
    headers: {
      "X-RapidAPI-Key": process.env.React_App_Api_Key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, status } = await axios.request(options);

  if (status == 200) return { ...data.items[0] };
};
// Get Suggested video to details Video
export const fetchSuggested = async (relatedId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: relatedId,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.React_App_Api_Key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, status } = await axios.request(options);

  if (status == 200) return [...data["items"]];
};

// Get Comment of that video by related Id

export const fetchComments = async (relatedId) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/commentThreads",
    params: { part: "snippet", videoId: relatedId, maxResults: 1 },
    headers: {
      "X-RapidAPI-Key": process.env.React_App_Api_Key,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const { data, status } = await axios.request(options);

  if (status == 200) return [...data.items];
};
