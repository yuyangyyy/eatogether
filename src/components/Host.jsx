import React from "react";

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";
import FilterRecipe from "./FilterRecipe/FilterRecipe";
import Test from "./SearchRecipe/Test";

class Host extends React.Component {
  state = {
    recipeResult: [],
    selectRecipe: "",
  };

  getRecipeResult = (result) => {
    this.setState({ recipeResult: result });
  };

  selectRecipe = (results) => {
    this.setState({
      selectRecipe: results,
    });
  };

  key = "a42d7a22c6944c2791085f686d0ee406";

  render() {
    return (
      <div>
        <SearchRecipe>
          <SearchRecipeLeft
            recipeResult={this.getRecipeResult}
            keyApi={this.key}
          />
          <SearchRecipeRight
            recipeResult={this.getRecipeResult}
            keyApi={this.key}
          />
        </SearchRecipe>
        <FilterRecipe
          recipeId={this.state.recipeResult}
          selectRecipe={this.selectRecipe}
          keyApi={this.key}
        />
        <Test selectRecipe={this.state.selectRecipe} />
      </div>
    );
  }
}

export default Host;
