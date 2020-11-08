import React from 'react';

import Home from './components/Home';
import Navigation from './components/Navigation';

import './components/GuestSearch2.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation getName={this.getName} />
        <Home />
      </div>
    );
  }
}

export default App;
