import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Host from "./components/Host";
import Footer from "./components/Footer"

import "./App.css";

export const UserContext = React.createContext({});

class App extends React.Component {
  state = {
    userName: {},
    navHeight : "",
  };

  getNavHeight = (height) => {
    this.setState({navHeight:height})
  }

  getName = (name) => {
    this.setState({ userName: name });
  };

  render() {
    return (
      <div className="App">
        <Navigation getName={this.getName} getNavHeight={this.getNavHeight} />
        <Switch>
          <UserContext.Provider value={this.state}>
            <Route exact path="/" component={Home} />
            <Route path="/Host" component={Host} />
          </UserContext.Provider>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;