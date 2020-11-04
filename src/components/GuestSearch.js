import React from 'react';
import Calendar from 'react-calendar';
import CitySelect from './CitySelect';
import Plat from './Plat';
// import TypesRepas from './TypesRepas';
import Results from './Results';
import './Results.css';
import 'react-calendar/dist/Calendar.css';

class GuestSearch extends React.Component {
  state = {
    city: null,
    date: new Date(),
    plat: null,
  };

  setCity = (event) => {
    // console.log('set City', event.target.value);
    this.setState({ city: event.target.value });
  };

  setPlat = (event) => {
    this.setState({ plat: event.target.value });
  };

  onChange = (date) => this.setState({ date });

  render() {
    console.log(this.state.date);
    return (
      <div className="guest-header">
        <CitySelect changeCity={this.setCity} />
        {/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
        <Calendar onChange={this.onChange} value={this.state.date} />
        {/* <TypesRepas /> */}
        <Plat changePlat={this.setPlat} />
        {/* <Results city={this.state.city} date={this.state.date} plat={this.state.} /> */}
        <Results {...this.state} />
      </div>
    );
  }
}

export default GuestSearch;
