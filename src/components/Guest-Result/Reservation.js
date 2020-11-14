import React from "react";

import style from "./reservation.module.css";

const Reservation = (props) => {
  console.log(props.index);
  return (
    <div className={style.reservation} onClick={props.booked}>
        <button onClick={props.booked} > x </button>
      <div className={style.reservationApprouved}>
        {props.hostInfo[props.index].booking ? (
          <p>A demande of reservation has been sent to your host </p>
        ) : (
          <p> Reservation has been cancelled </p>
        )}
      </div>
    </div>
  );
};

export default Reservation;
