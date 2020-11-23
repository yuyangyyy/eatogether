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

            <div className="search-localisation"> 

                <div className="search-localisation-contain">
                        <h2>Your Reservation</h2>  

                        <div className="search-localisation-calendar"> 
                            <CitySelect className="search-localisation-city-select" changeCity={this.setCity} />                       
                            <Calendar onChange={this.onChange} value={this.state.date} />
                        </div>

                        <input className="search-localisation-btn" type="button" value="Let's Go" onClick={this.onClick} />

                        {/* {this.state.search && <CompoYang {...this.state} />} */} 
                </div>
            </div>
        )
        }
    }


export default SearchLocalisation
