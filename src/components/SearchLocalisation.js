import React from 'react';
import Calendar from 'react-calendar';
import CitySelect from './CitySelect';

import "./SearchLocalisation.css";
import 'react-calendar/dist/Calendar.css';


class SearchLocalisation extends React.Component {
    state = {
        city: null,
        date: new Date(),
        search: false,
    };

    setCity = (event) => {
        this.setState({ city: event.target.value });
      };
    
      onChange = (date) => this.setState({ date });

      onClick = (e) => {
        this.setState({ search: true })
      }

      componentDidUpdate () {
          console.log(this.state);
      }
     
    
    render () {
        return (
            <div>

                <CitySelect changeCity={this.setCity} />
                <Calendar onChange={this.onChange} value={this.state.date} />
                <input type="button" value="Envoyer" onClick={this.onClick} />

            </div>
        )
        }
    }


export default SearchLocalisation
