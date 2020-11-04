import React from 'react';

const Results = (props) => {
  // if (pas de city, return null)
  // if (!this.state.city) {
  //   return null;
  // }

  console.log(props.date);
  return (
    <div>
      <div className="guest-result">
        Result search : <p>{props.city} </p>
        <p>{props.plat}</p>
        {/* <p>{props.change}</p> */}
        <p>{props.date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Results;
