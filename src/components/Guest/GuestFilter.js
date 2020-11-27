import React, { useState } from 'react';
import Calendar from 'react-calendar';

import GuestList from "./GuestList";
import { foodType, diet } from '../SearchRecipe/foodList';
import { city } from './cityList';

import './GuestFilter.css';
import 'react-calendar/dist/Calendar.css';


export default function GuestFilter() {

  const [calendar, setCalendar] = useState(false);
  const [cityChoice, setCityChoice] = useState("");
  const [restriction, setRestriction] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  const cities = city;

  const toggleCalendar = () => {
    setCalendar(!calendar);
  }

  const handleCity = (event) => {
    setCityChoice(event.target.value);
  }

  const handleRestriction = (event) => {
    setRestriction(event.target.value);
  }

  const onChange = (date) => {
    setDate(date);
    setCalendar(false)
  }

  const submit = (e) => {
    e.preventDefault();
    const results = ({
      meal: restriction,
      city: cityChoice,
      date: date
    })
    setResult(results);

  };

  const position = React.createRef()
  
  const reset = () => {
    const results = ({
      meal: "",
      city: "",
      date: ""
    })
    setResult(results)
  }

  return (

    <div>
      <div className="guest-filter-container">
        <h3 className="search-title">Find a host</h3>
        <div className="guest-filter">
          <div className="filter-container">
            <form onSubmit={submit} >
              <label className="filter-sections" htmlFor="city">Choose a city</label><br></br>
              <select className="selects" id="city" onChange={handleCity}>
                <option className="default-choice">Please choose an option</option>
                {cities.map((city, index) => {
                  return <option key={index}>{city}</option>
                })}
              </select><br />
              <label className="filter-sections" htmlFor="dish">Select a category</label><br></br>
              <select className="selects" id="dish" onChange={handleRestriction}>
                <optgroup className="food-groups" label="Cuisine" />
                <option className="default-choice">Pick a cuisine/diet</option>
                {foodType.map((choice, index) => {
                  return <option key={index}>{choice}</option>
                })}
                <option className="default-choice">Pick a diet</option>
                <optgroup className="food-groups" label="Diets" />
                {diet.map((choice, index) => {
                  return <option key={index}>{choice}</option>
                })}
              </select><br />
              <input ref={position} type="button" value="Calendar" className="actions" id="date" onClick={toggleCalendar} /><br />
              {calendar &&
                <div className="filter-calendar-container"><Calendar onChange={onChange} value={date} /></div>
              }
              <div>
                <input type="submit" value="Search" className="actions" />
                <input type="button" onClick={reset} value="Reset" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <GuestList info={result} />
      </div>
    </div>
  )
}