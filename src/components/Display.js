import React from 'react';

import './Display.css';

function Display () { 
  return (
    <section className="display-container">      
          <div className="display-evening">
             <div className="display-image">
              <img src="https://greenkitchenstories.com/wp-content/uploads/2016/11/gks_hot_chocolate_3.jpg" alt="cuisine" />
             </div>            
              <div className="display-host-planning">
                <div className="display-text-info">
                  <h2>Plan Your Night</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus lacus, vitae sodales turpis. Maecenas finibus, urna id auctor ultrices, ante neque mattis erat, a dapibus arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus pellentesque nec. Aenean malesuad.
                  Lorem ipsum dolor sit amet, consectetur adipiscing e
                  </p>
                </div>
                <input type="button" value="Suggest meal"/>
              </div>                            
          </div> 
          <hr className="dislay-hr-top"/>          
          <div className = "display-details">
            <div className = "display-host">
                <h3>Host</h3>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus lacus, vitae sodales turpis. Maecenas finibus, urna id auctor ultrices, ante neque mattis erat, a dapibus arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus pellentesque nec. Aenean malesuada lacus lacus, quis molestie dolor luctus ac. Sed placerat urna </p>
            </div>
            <div className = "display-guest">
                <h3>Guest</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus lacus, vitae sodales turpis. Maecenas finibus, urna id auctor ultrices, ante neque mattis erat, a dapibus arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus pellentesque nec. Aenean malesuada lacus lacus, quis molestie dolor luctus ac. Sed placerat urna </p>
            </div>
            
          </div>
          <hr className="dislay-hr-bottom"/>
    </section>
  );
}
export default Display;
