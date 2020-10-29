import React from 'react';
import 'antd/dist/antd.css';
import './GuestSearch.css';
import DatePicker from 'antd/es/date-picker';

class GuestSearch extends React.Component {
  render() {
    return (
      <div className="guest-header">
        <div>
          <label>Ville</label>
          <select>
            <option>Paris</option>
            <option>Lyon</option>
            <option>Lille</option>
            <option>Marseille</option>
            <option>Nice</option>
          </select>
        </div>

        <div>
          <label>Quand</label>
          <DatePicker />
        </div>

        <div>
          <label>Type de Repas</label>
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
    );
  }
}

export default GuestSearch;
