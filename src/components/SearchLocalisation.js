import React from 'react';
import Calendar from 'react-calendar';
import CitySelect from './CitySelect';


import "./SearchLocalisation.css";
import 'react-calendar/dist/Calendar.css';


class SearchLocalisation extends React.Component {

    state = {
        city: null,
        dater: new Date(),
        search: false,
    };

    setCity = (event) => {
        this.setState({ city: event.target.value });
    };

    onChange = (date) => {
        this.setState({ dater: date.toLocaleDateString() })
    };


    onClick = (e) => {
        this.setState({ search: true })
        this.props.dateCity([this.state.city,this.state.dater])
    }

    render() {
        return (
            <div>
                <hr className="search-localisation-hr"/>
            <div className="search-localisation">


                    <h2 className="search-localisation-h2">Your Reservation</h2>

                    

                    <div className="search-localisation-calendar">
                        
                        <CitySelect className="search-localisation-city-select" changeCity={this.setCity} />
                        <Calendar onChange={this.onChange} value={this.state.date} />
                        
                        <input className="search-localisation-btn" type="button" value="Let's Go" onClick={this.onClick} />
                    </div>
            </div>
                    {this.state.search && (
                        <div>
                           {this.props.children}                            
                        </div>)}
        </div>
        )
    }
}


export default SearchLocalisation
