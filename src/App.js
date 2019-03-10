import React, { Component } from "react";
import Header from "./components/Header";
import ChannelList from "./routes/Channel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChannelList />
      </div>
    );
  }
}

export default App;
