import React from "react";

import style from "./reservation.module.css";

const Reservation = (props) => {
  console.log(props);
  return (
    <div className={style.reservation} onClick={props.booked}>
        <button onClick={props.booked} > x </button>
      <div className={style.reservationApprouved}>
        { props.button ? (
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
