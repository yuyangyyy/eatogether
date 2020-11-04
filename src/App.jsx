// import './App.css';
import React from 'react';
import GuestSearch from './components/GuestSearch';
// import Home from './components/Home';
// import Navigation from './components/Navigation';

class App extends React.Component {
  // state = {
  //   userName: {},
  // };

  // getName = (name) => {
  //   this.setState({ userName: name });
  // };

  render() {
    return (
      <div className="App">
        {/* <Navigation getName={this.getName} />
        <Home /> */}
        <GuestSearch />
      </div>
    );
  }
}

export default App;
