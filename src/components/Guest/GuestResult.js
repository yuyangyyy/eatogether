import React, { useState } from "react";

// import axios from "axios";

import Reservation from "./Reservation";

import style from "./GuestResult.module.css";

const GuestResult = ({ info }) => {
  // const [recipes, setRecipes] = useState()

  const [button, setButton] = useState(false);
  const [message, setMessage] = useState(false);

  const booked = (e) => {
    setButton(!button);
    setMessage(true);
  };
  const closeBooked = () => {
    setMessage(false);
  };

  return (
    <div className={style.guestContainer}>
      <div className={style.guestResult}>
        <p className={style.guestInvit}> Invitation </p>
        <div className={style.users}>
          <img src={info.user.photo} alt={info.user.firstName} />
          <div>
            <p>{info.user.firstName + " " + info.user.lastName}</p>
            <p>{info.user.city} </p>            
          </div>
        </div>
        <div>
          <p>Date of the event : <b>{info.recipe.date}</b></p>
          <h3>{info.recipe.recipeName}</h3>
          <img
            className={style.recipeImage}
            src={info.recipe.recipeImage}
            alt={info.recipe.recipeName}
          />
        </div>
        <button onClick={booked}>
          {button ? "Cancel your  booking" : "Book"}
        </button>
        {message && (
          <div>
            <Reservation
              button={button}
              booked={closeBooked}
              message={message}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestResult;
