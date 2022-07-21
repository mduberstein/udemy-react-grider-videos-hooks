import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video}); 
  }

  onTermSubmit = async term => {
  // params property in request config is per https://axios-http.com/docs/req_config
  // the config object of the request is merged with the config object of axis instance
  // i.e. the second arg of call to axios.create from youtube.js
    const response = await youtube.get("/search", {
      // q was from https://developers.google.com/youtube/v3/docs/search/list
      params: { q: term },
    });
    // console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
