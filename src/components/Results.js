import React from 'react';

const Results = (props) => {
  // if (pas de city, return null)
  // if (!this.state.city) {
  //   return null;
  // }

  console.log(props.date);
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
