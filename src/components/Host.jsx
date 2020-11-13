import React from "react"

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";
import FilterRecipe from "./FilterRecipe/FilterRecipe";
import RecapResult from "./SearchRecipe/RecapResult";
import RandomUser from "./Random-user";

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

  key = "8cf7dc9a110a4285936a02cc800ad27a";

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
        <RecapResult selectRecipe={this.state.selectRecipe} />
        <RandomUser/>
      </div>
    );
  }
}

export default Host;
