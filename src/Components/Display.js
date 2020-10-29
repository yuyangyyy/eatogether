import React from 'react';
import './Display.css';

function Display () {
  return (
    <section className="App">
      <div >
        < img className="App-image" src="https://greenkitchenstories.com/wp-content/uploads/2016/11/gks_hot_chocolate_3.jpg" alt="cuisine" />
      </div>

      <div className="App-soiréé">
        <h1>Plan Your Night</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus lacus, vitae sodales turpis. Maecenas finibus, urna id auctor ultrices, ante neque mattis erat, a dapibus arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus pellentesque nec. Aenean malesuada lacus lacus, quis molestie dolor luctus ac.
        </p>
        <input id="btn" className="hostButton" type="button" value="Suggest meal"></input>
      </div>
    </section>

  );
}
export default Display;
