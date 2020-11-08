import React from 'react';

class RecapResult extends React.Component {
  render() {
    return (
      <div className="RecapResult">
        <p>Votre invitation</p>
        <img className="Recap-img" src="./image/bann1.jpg" />

        <p>Name:{}</p>
        <p>City:{}</p>
        <p>Date:{}</p>
      </div>
    );
  }
}

export default RecapResult;
