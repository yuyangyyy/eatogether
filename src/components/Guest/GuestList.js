import React, { useState } from "react";

import GuestResults from "./GuestResult";

import "./GuestList.css";

import recipeList from "./RecipeList";

function GuestList({ info }) {
  const [recipes] = useState(recipeList);

  console.log("africant".includes(""));

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

  console.log(info);
  return (
    <div className="recipe-list">
      {recipes
        .filter(
          (recipe) =>
            !info.send || // if condition is OK it won't read the filter
            (recipe.recipe.recipeName
              .toLowerCase()
              .includes(info.result.meal.toLowerCase()) &&
              recipe.user.city
                .toLowerCase()
                .includes(info.result.city.toLowerCase())) && 
                recipe.recipe.date ===info.result.date
        )
        .map((recipe, index) => (
          <GuestResults info={recipe} key={index} />
        ))}
    </div>
  );
}

export default GuestList;
