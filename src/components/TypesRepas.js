import React from 'react';
import axios from 'axios';

const keyApi = '6a2c23c6d46444bcbb35720b7798fc74';
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keyApi}`;

class TypesRepas extends React.Component {
  state = {
    recipes: [],
  };

  // componentDidMount() {
  //   this.getRecipe();
  // }

  getRecipe = () => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        const listRecipes = data.results.map((result) => {
          return { title: result.title, image: result.image };
        });

        this.setState({
          recipes: listRecipes,
        });

        // this.setState({
        //   recipes: data.results[0].title,
        //   images: data.results[0].image,
        // });
      });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.recipes.map((item) => {
            return (
              <div key={item.title}>
                <p>{item.title}</p>
                <img src={item.image} />
              </div>
            );
          })}
        </h1>
        <button type="button" onClick={this.getRecipe}>
          Search
        </button>

        <img src={this.state.image} />
        <p>{this.state.titles}</p>
      </div>
    );
  }
}

export default TypesRepas;
