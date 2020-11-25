import React from "react"

import SearchRecipe from "./SearchRecipe/SearchRecipe";
import SearchRecipeLeft from "./SearchRecipe/SearchRecipeLeft";
import SearchRecipeRight from "./SearchRecipe/SearchRecipeRight";
import SearchLocalisation from "./SearchLocalisation"
import FilterRecipe from "./FilterRecipe/FilterRecipe";
import RecapResult from "./RecapResult";
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

  key = "6a2c23c6d46444bcbb35720b7798fc74";

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
        <SearchLocalisation />
        {this.state.selectRecipe && 
        <RecapResult selectRecipe={this.state.selectRecipe} /> }
        <RandomUser/>
      </div>
    );
  }
}

export default Host;
