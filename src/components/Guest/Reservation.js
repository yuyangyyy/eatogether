import React from "react";

import style from "./reservation.module.css";

const Reservation = (props) => {
 
  return (
    <div className={style.reservation} onClick={props.booked}>
      <div className={style.reservationApprouved}>
      <button onClick={props.booked}> Close </button>
        {props.button ? (
          <p>A demande of reservation has been sent to your host </p>
        ) : (
          <p> Reservation has been cancelled </p>
        )}
      </div>
      test
    </div>
  );
};

export default Reservation;
