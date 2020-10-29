import React from "react";
import "./RecipeCard.css";

const key = "103f7895318eab82a99d13cab66cde64";
const id = "874300a6";
const foods = ["fish", "chicken", "vegetables", "potato", "mexican"];

class RecipeCard extends React.Component {
  state = {
    food: [
      {
        image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg',
        name: 'image test'
      },
      {
        image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg',
        name: 'image test'
      },
      {
        image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg',
        name: 'image test'
      },
      {
        image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg',
        name: 'image test'
      }
    ]
  }


  getRecipe = () => {
    foods.forEach((para) => {
      fetch(
        `https://api.edamam.com/search?q=${para}&app_id=${id}&app_key=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          // const random = Math.floor(Math.random() * 10);
          this.setState({
            food: [
              ...this.state.food,
              {
                image: data.hits[0].recipe.image,
                name: data.hits[0].recipe.label,
              },
            ],
          });
        });
    });
  };

  /** componentDidMount() {
    this.getRecipe();
  } */

  render() {
    console.log(this.state.food);
    return (
      <div className="recipe-card ">
        {this.state.food.length > 0 &&
          this.state.food.map((para, index) => {
            console.log("truc");
            return (
              <div className="item-card" key={index}>
                <h1>{para.name}</h1>
                <img src={para.image} alt={para.name} />
                <p>{foods[index].toUpperCase()}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default RecipeCard;
