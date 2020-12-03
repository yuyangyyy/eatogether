import React from "react";

import MediaQuery from "react-responsive";
import Carroussel from "./Carroussel/Caroussel";

import "./RecipeCard.css";

const key = "08fbdf80e1814c14bbb55c1f1ce89e3f";
const foods = ["chicken", "noodles", "mushrooms", "zucchini"];

class RecipeCard extends React.Component {
  state = {
    food: [],
  };

  getRecipe = () => {
    foods.map((food) => {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=1&addRecipeInformation=true&apiKey=${key}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data[0]) {
            this.setState({
              food: [
                ...this.state.food,
                {
                  image: data[0].image,
                  title: data[0].title,
                },
              ],
            });
          }
        });
    });
  };

  componentDidMount() {
    this.getRecipe();
  }

  rCard = React.createRef();

  render() {
    return (
      <div className="recipe-card ">
        <div className="recipe-card-cont">
          <h2>Our Hosts made those recipes</h2>
          <div className="item-card">
            <MediaQuery minWidth={640}>
              {this.state.food.length > 0 &&
                this.state.food.map((para, index) => {
                  return (
                    <div className="recipe-items" key={index} ref={this.rCard}>
                      <img src={para.image} alt={para.name} />
                      <h3>{para.title}</h3>
                    </div>
                  );
                })}
            </MediaQuery>

            <MediaQuery maxWidth={640}>
              <Carroussel>
                {this.state.food.length > 0 &&
                  this.state.food.map((para, index) => {
                    return (
                      <div
                        className="recipe-items"
                        key={index}
                        ref={this.rCard}
                      >
                        <img src={para.image} alt={para.name} />
                        <h3>{para.title}</h3>
                      </div>
                    );
                  })}
              </Carroussel>
            </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
