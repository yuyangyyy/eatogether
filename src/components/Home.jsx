import React from 'react';

import GuestSearch from './GuestSearch';

import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <GuestSearch />
      </div>
    );
  }
}

export default Home;
