import React from "react";

import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Host from "./components/Host";

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
        <Navigation getName={this.getName} />
        <Home />        
        <Host />
      </div>
    );
  }
}

export default App;
