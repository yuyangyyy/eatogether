import React, { useEffect, useState } from "react";

// import axios from "axios";

import recipeList from "./RecipeList";
import Reservation from "./Reservation";


import style from "./GuestResult.module.css";

const GuestResult = (props) => {
  const [recipes,setRecipes] = useState(recipeList.map(list => ({
    ...list,
    message: false,
    booking : false
}))) ;

 
console.log(recipes)

  // useEffect(() => {
  //   const url = "https://randomuser.me/api/?results=3";
  //   axios
  //     .get(url)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       const newUsers = [];
  //       data.results.map((result) => {
  //         const infoUser = {
  //           randomUser: result,
  //           booking: false,
  //           message: false,
  //         };
  //         newUsers.push(infoUser);
  //       });
  //       setUsers(newUsers);
  //     });
  // }, []);

  
  useEffect(() => {
    props.info && (
    console.log(recipes)         
    )
  
  },[props.info]);

  console.log(props.info)

  const booked = (e) => {
    const newUsers = [...recipes]; // use spread Operator if not it won't make new render
    newUsers[e.target.id].booking = !newUsers[e.target.id].booking;
    newUsers[e.target.id].message = true;
    setRecipes(newUsers);
  };
  const closeBooked = () => {
    const newUsers = [...recipes];
    newUsers.map((user) => (user.message = false));
    setRecipes(newUsers);
  };

  return (
    <div className={style.guestContainer}>
      {recipes.map((recipe, index) => (
        <div className={style.guestResult} key={recipe.user.lastName}>
          <p className={style.guestInvit}> Invitation </p>
          <div className={style.users}>
            <img
              src={recipe.user.photo}
              alt={recipe.user.firstName}
            />
            <div>
              <p>
                {recipe.user.firstName + " " + recipe.user.lastName}
              </p>
              <p>{recipe.user.email} </p>
              <p>Date of the event {new Date().toLocaleDateString()}</p>
              <p> {recipe.user.city}</p>
            </div>
          </div>
          <div>
            <h3>{recipe.recipe.recipeName}</h3>
            <img
              className={style.recipeImage}
              src={recipe.recipe.recipeImage}
              alt={recipe.recipe.recipeName}
            />
          </div>
           <button id={index}  onClick={booked}  >
            {recipe.booking ? "Cancel your  booking" : "Book"} 
          </button>
          {recipe.message && (
            <div>
              <Reservation
                hostInfo={recipes}
                booked={closeBooked}
                index={index}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GuestResult;
