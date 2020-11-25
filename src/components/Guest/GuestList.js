import React, { useState } from "react";

import GuestResults from "./GuestResult";

import "./GuestList.css";

import recipeList from "./RecipeList";

function GuestList({ info }) {
 const [recipes] = useState(recipeList);
  
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

  console.log(recipes[1].recipe.recipeName.includes(info.meal))
  console.log(info)
  return (
    <div className="recipe-list">
      {recipes
        .filter(
          (recipe) =>
            
              (!info.meal ||  // if condition is OK it won't read instruction after
            recipe.recipe.recipeName
              .toLowerCase()
              .includes(info.meal.toLowerCase()) )  &&
              (!info.city || // if condition is OK it won't read instruction after
              recipe.user.city
                .toLowerCase()
                .includes(info.city.toLowerCase()) ) && 
               (!info.date ||  // if condition is OK it won't read instruction after
                recipe.recipe.date === info.date )
        )
        .map((recipe, index) => (
          <GuestResults info={recipe} key={index} />
        ))}
    </div>
  );
}

export default GuestList;
