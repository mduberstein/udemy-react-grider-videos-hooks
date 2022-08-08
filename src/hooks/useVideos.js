import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    search(defaultSearchTerm);
  }, []);
  const search = async (term) => {
    // params property in request config is per https://axios-http.com/docs/req_config
    // the config object of the request is merged with the config object of axis instance
    // i.e. the second arg of call to axios.create from youtube.js
    const response = await youtube.get("/search", {
      // q was from https://developers.google.com/youtube/v3/docs/search/list
      params: { q: term },
    });
    // console.log(response.data.items);
    setVideos(response.data.items);
  };

  // using the React convention of returning and array
  return [videos, search];
  // Alternative could be
  // return {videos: videos, search: search};
};

export default useVideos;

