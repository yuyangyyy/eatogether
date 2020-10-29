import React from 'react';
import 'antd/dist/antd.css';
import './GuestSearch.css';
import DatePicker from 'antd/es/date-picker';

class GuestSearch extends React.Component {
  render() {

    return (
      <div className="wrapper-search-guest" style={{backgroundImage: "url('./image/bann.jpg')"}}>
        <div className="guest-header" >
          <div>
            <label>City</label>
            <select>
              <option>Paris</option>
              <option>Lyon</option>
              <option>Lille</option>
              <option>Marseille</option>
              <option>Nice</option>
            </select>
          </div>

          <div>
            <label>Date</label>
            <DatePicker />
          </div>

          <div>
            <label>Type of meal</label>
            <select>
              <option>Plat 1</option>
              <option>Plat 2</option>
              <option>Plat 3</option>
              <option>Plat 4</option>
            </select>
          </div>

          <div>
            <img className="guest-img" src="./image/casserole.png" alt="c" />
          </div>
        </div>
      </div>
    );
  }
}

export default GuestSearch;
