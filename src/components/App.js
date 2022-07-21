import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    // console.log('From the App', video);
  }

  onTermSubmit = async term => {
  // params property in request config is per https://axios-http.com/docs/req_config
  // the config object of the request is merged with the config object of axis instance
  // i.e. the second arg of call to axios.create from unsplash.js
    const response = await youtube.get("/search", {
      // q was from https://developers.google.com/youtube/v3/docs/search/list
      params: { q: term },
    });
    // console.log(response.data.items);
    this.setState({videos: response.data.items});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
