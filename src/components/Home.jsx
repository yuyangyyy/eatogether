import React from 'react';

import Displayanimation from'./Displayanimation';
import RecipeCard from './RecipeCard';
import GuestSearch from './GuestSearch';

import './GuestSearch2.css';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <GuestSearch />        
        <Displayanimation />
        <RecipeCard />
      </div>
    );
  }
}

export default Home;
