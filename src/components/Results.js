import React from 'react';

const Results = (props) => {
  return (
    <div className="guest-result">
      <div className="guest-available">Your available search</div>

      <div className="guest-result-affiche">
        <div>City : {props.city} </div>
        <div>Date : {props.date.toLocaleDateString()}</div>
        <div>Meal : {props.plat}</div>
      </div>
    </div>
  );
};

export default Results;
