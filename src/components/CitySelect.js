import React from 'react';
import './CitySelect.css';

const CitySelect = (props) => {
  const citys = ['Paris', 'Lyon', 'Marseille', 'Nice', 'Lille'];

  return (
    <div className="search-localisation-city-select">

      <select onChange={props.changeCity}>
        {citys.map((city) => {
          return <option key={city}>{city}</option>;
        })}
      </select>

    </div>
  );
};

export default CitySelect;
