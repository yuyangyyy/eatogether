import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import CitySelect from './CitySelect';
import PlatSelect from './PlatSelect';
import Results from './Results';

class GuestSearch extends React.Component {
  state = {
    city: null,
    date: new Date(),
    plat: null,
    search: false,
    showCalendar: false,
  };

  setCity = (event) => {
    // console.log('set City', event.target.value);
    this.setState({ city: event.target.value });
  };

  setPlat = (event) => {
    this.setState({ plat: event.target.value });
  };

  onChange = (date) => {
    // console.log('date?', date);
    this.setState({
      showCalendar: false,
    });
    // console.log('state?', this.state);
  };

  componentDidUpdate() {
    console.log(this.state.search);
  }

  render() {
    return (
      <div className="guest-header">
        <CitySelect changeCity={this.setCity} />
        <input
          className="guest-calendar"
          type="button"
          value="Calendar"
          onClick={() =>
            this.setState({ showCalendar: !this.state.showCalendar })
          }
        />

        {this.state.showCalendar && (
          <Calendar onChange={this.onChange} value={this.state.date} />
        )}

        <PlatSelect changePlat={this.setPlat} />
        <input
          className="guest-search"
          type="button"
          value="Search"
          onClick={() => this.setState({ search: !this.state.search })}
        />
        {this.state.search && <Results {...this.state} />}

        {/* <Results city={this.state.city} date={this.state.date} plat={this.state.plat} /> */}
      </div>
    );
  }
}

export default GuestSearch;
