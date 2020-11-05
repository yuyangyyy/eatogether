import React from "react";
import Host from "./components/Host";

import Home from "./components/Home"
import Navigation from "./components/Navigation"

import "./App.css";

class App extends React.Component {
  state = {
    userName: {},
  };

  getName = (name) => {
    this.setState({ userName: name });
  };

  render() {
    return (
      <div className="App">
        <Host />
        <Navigation getName={this.getName} />
        <Home />        
      </div>
    );
  }
}

export default App;
