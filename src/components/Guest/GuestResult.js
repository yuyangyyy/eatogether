import React, { useState } from "react";
import Reservation from "./Reservation";

import style from "./GuestResult.module.css";

const GuestResult = ({ info }) => {
  

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
        <h2 className={style.guestInvit}> Invitation </h2>
        <div className={style.recipe}>
          <h4>{info.recipe.recipeName}</h4>
          <img
            className={style.recipeImage}
            src={info.recipe.recipeImage}
            alt={info.recipe.recipeName}
          />
        </div>
        <p> <b>By</b> </p>
        <div className={style.users}>
          <img src={info.user.photo} alt={info.user.firstName} />
          <div>
            <p>{info.user.firstName + " " + info.user.lastName}</p>
            <h4>{info.user.city} </h4>
          </div>
        </div>
        <h4>
           {info.recipe.date}
        </h4>
        <button onClick={booked}>
          {button ? "Cancel your  booking" : "Book"}
        </button>
        {message && (
          <div className={style.modale}>
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
