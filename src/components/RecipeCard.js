import React from "react";
import "./RecipeCard.css";

const key = "4635f9fdb39249728221bd61584cf5d4";
const foods = ["chicken","noodles","olives","zucchini"];

class RecipeCard extends React.Component {
  state = {
    food: []
  }
  /**    {
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
*/


  getRecipe = () => {
    foods.map((food) => {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=1&addRecipeInformation=true&apiKey=${key}`
      fetch(url)
        .then((response) => response.json())
        .then((data) => {console.log(data)
        this.setState({   
            food: [
              ...this.state.food,
              {
                image: data[0].image,
                title : data[0].title ,               
              },
            ],
         });
        });
    });
  };

  componentDidMount() {
    this.getRecipe();
  } 

  render() {    
    return (
      <div className="recipe-card ">
        {this.state.food.length > 0 &&
          this.state.food.map((para, index) => {
            return (
              <div className="item-card" key={index}>              
                <img src={para.image} alt={para.name} />
                <p>{para.title}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default RecipeCard;
