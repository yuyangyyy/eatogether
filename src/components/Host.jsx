import React from "react";

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import Test from "./SearchRecipe/Test";

class Host extends React.Component {
  state = {
    recipeResult: [],
  };

  getRecipeResult = (result) => {
    this.setState({ recipeResult: result });
  };

  render() {
    return (
      <div>
        <SearchRecipe recipeResult={this.getRecipeResult} />
        <Test recipeId={this.state.recipeResult}/>
      </div>
    );
  }
}

export default Host;
