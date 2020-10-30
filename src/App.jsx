import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import RecipeCard from "./components/RecipeCard";

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
        <RecipeCard />

      </div>
    );
  }
}

export default App;
