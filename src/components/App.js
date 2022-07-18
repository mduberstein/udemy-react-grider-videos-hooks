import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
  // params property in request config is per https://axios-http.com/docs/req_config
  // the config object of the request is merged with the config object of axis instance
  // i.e. the second arg of call to axios.create from unsplash.js
    const response = await youtube.get("/search", {
      // q was from https://developers.google.com/youtube/v3/docs/search/list
      params: { q: term },
    });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
