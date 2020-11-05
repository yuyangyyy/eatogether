import Axios from "axios";
import React from "react";

class Test extends React.Component {
  state = {
    info: [],
  };

  componentDidUpdate(prevProps) {
    /// TEST POUR EVITER BOUCLE INFINIE ////
    const test =
      prevProps.recipeId.length === this.props.recipeId.length &&
      this.props.recipeId.every(
        (value, index) => value === prevProps.recipeId[index]
      );
    /// ///////////////////////////////////////
    
    if (!test) {
      this.setState({ info: [] }); // reset de state  important !!
      this.props.recipeId.map((recette) => {
        const key = "1e780ebe14ef4d898f45bff9425a3fcb";
        const url = `https://api.spoonacular.com/recipes/${recette}/information?includeNutrition=false&apiKey=${key}`;
        Axios.get(url)
          .then((res) => res.data)
          .then((data) => {
            this.setState({
              info: [
                ...this.state.info,
                {
                  title: data.title,
                  image: data.image,
                },
              ],
            });
          });
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.info.map((recette) => {
          return (
            <div key={recette.title}>
              <h2>{recette.title}</h2>
              <img src={recette.image} alt={recette.title} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Test;
