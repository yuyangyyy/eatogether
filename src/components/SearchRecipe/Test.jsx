import Axios from "axios";
import React from "react";

class Test extends React.Component {
  state = {
    info: [],
  };

  componentDidUpdate(prevProps) {
    const test =
      prevProps.recipeId.length === this.props.recipeId.length &&
      this.props.recipeId.every(
        (value, index) => value === prevProps.recipeId[index]
      );

    if (!test) {
      console.log(this.state.info);
      
      this.props.recipeId.map((recette) => {        
        const key = "c76085354dd741a3a62ee7906e9c0faf";
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
