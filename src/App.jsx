import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Host" component={Host} />
        </Switch>
      </div>
    );
  }
}

export default App;
