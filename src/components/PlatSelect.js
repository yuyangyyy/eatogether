import React from 'react';

const PlatSelect = (props) => {
  const plats = ['Meal', 'French', 'Indien', 'Italien', 'Mexican'];

  return (
    <select className="guest-plat" onChange={props.changePlat}>
      {plats.map((plat) => {
        return <option key={plat}>{plat}</option>;
      })}
    </select>
  );
};

export default PlatSelect;
