import React from "react";

import Display from "./Display";
import RecipeCard from "./RecipeCard";
import GuestSearch from "./GuestSearch";
import "./GuestSearch2.css";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <GuestSearch />
        <Display />
        <RecipeCard />
      </div>
    );
  }
}

export default Home;
