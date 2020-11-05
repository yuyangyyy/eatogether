import "./App.css";
import React from "react";
import Host from "./components/Host";

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
      </div>
    );
  }
}

export default App;
