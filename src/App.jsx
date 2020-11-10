import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Host from "./components/Host";

import "./App.css";

export const UserContext = React.createContext({});

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
          <UserContext.Provider value={this.state.userName}>
            <Route exact path="/" component={Home} />
            <Route path="/Host" component={Host} />
          </UserContext.Provider>
        </Switch>
      </div>
    );
  }
}

export default App;