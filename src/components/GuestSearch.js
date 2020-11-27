import React from "react";

import Calendar from "react-calendar";
import { CSSTransition } from "react-transition-group";

import CitySelect from "./CitySelect";
import PlatSelect from "./PlatSelect";
import Results from "./Results";

import "react-calendar/dist/Calendar.css";

class GuestSearch extends React.Component {
  state = {
    city: null,
    date: new Date(),
    plat: null,
    search: false,
    showCalendar: false,
  };

  calendarBtn = React.createRef();

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

  render() {
    return (
      <div className="guest-handing">
        <div className="guest-header">
          <CitySelect changeCity={this.setCity} />

          <PlatSelect changePlat={this.setPlat} />

          <input
            className="guest-calendar"
            type="button"
            value="Calendar"
            onClick={() => {
              document.body.style.setProperty(
                "--calendar",
                (this.calendarBtn.current.offsetLeft - 300/2) + "px"
              );
              this.setState({ showCalendar: !this.state.showCalendar });
            }}
            ref={this.calendarBtn}
          />

          <div className="calendar-fixed-position">
            <CSSTransition
              in={this.state.showCalendar}
              timeout={200}
              classNames="my-result"
              unmountOnExit
            >
              <Calendar onChange={this.onChange} value={this.state.date} />
            </CSSTransition>
          </div>

          <input
            className="guest-search"
            type="button"
            value="Search"
            onClick={() => this.setState({ search: !this.state.search })}
          />
          <CSSTransition
            in={this.state.search}
            timeout={200}
            classNames="my-result"
            unmountOnExit
          >
            <Results {...this.state} />
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default GuestSearch;
