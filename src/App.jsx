import "./App.css";
import React from "react";
import Home from "./components/Home"



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
      
      <Home />        
      </div>
    );
  }
}

export default App;
