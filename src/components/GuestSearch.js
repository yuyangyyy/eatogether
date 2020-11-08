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
    this.setState({ city: event.target.value });
  };

  setPlat = (event) => {
    this.setState({ plat: event.target.value });
  };

  onChange = (date) => {
    this.setState({
      date,
      showCalendar: false,
    });
  };

  componentDidUpdate() {
    console.log(this.state.search);
  }

  render() {
    return (
      <>
        <div className="guest-handing"></div>

        <div className="guest-header">
          <CitySelect changeCity={this.setCity} />

          <PlatSelect changePlat={this.setPlat} />

          <div className="calendar-container">
            <input
              className="guest-calendar"
              type="button"
              value="Calendar"
              onClick={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
            />

            {this.state.showCalendar && (
              <div className="calendar-fixed-position">
                <Calendar onChange={this.onChange} value={this.state.date} />
              </div>
            )}
          </div>

          <div className="guest-search-container">
            <input
              className="guest-search"
              type="button"
              value="Search"
              onClick={() => this.setState({ search: !this.state.search })}
            />

            <div>{this.state.search && <Results {...this.state} />}</div>
          </div>
        </div>
      </>
    );
  }
}

export default GuestSearch;
