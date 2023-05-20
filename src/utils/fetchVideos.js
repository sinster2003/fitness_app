import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchVideos = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (e) {
    console.log(e);
  }
};
