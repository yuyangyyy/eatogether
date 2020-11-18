import React, { useState } from "react";

import GuestResults from "./GuestResult";

import "./GuestList.css";

import recipeList from "./RecipeList";

function GuestList({ info }) {
  const [recipes] = useState(recipeList);

  console.log(info.send);
  console.log(info.result);

  //   useEffect(() => {
  //     if (info.send) {
  //       setRecipes(
  //         recipes.filter((recipe) => {
  //           return recipe.recipe.recipeName
  //             .toLowerCase()
  //             .includes(info.result.meal.toLowerCase());
  //         })
  //       );
  //     }
  //   }, [info]);

  return (
    <div className="recipe-list">
      {info.send
        ? recipes
            .filter((recipe) =>
              recipe.recipe.recipeName
                .toLowerCase()
                .includes(info.result.meal.toLowerCase())
            )
            .map((recipe, index) => <GuestResults info={recipe} key={index} />)
        : recipes.map((recipe, index) => (
            <GuestResults info={recipe} key={index} />
          ))}
    </div>
  );
}

export default GuestList;
