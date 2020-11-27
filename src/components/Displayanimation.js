import React from "react";
import { Link } from "react-router-dom";

import "./Displayanimation.css";

function Displayanimation() {
  return (
    <section className="display-container">
      <div className="display-evening">
        <div className="display-image">
          <img
            src="https://greenkitchenstories.com/wp-content/uploads/2016/11/gks_hot_chocolate_3.jpg"
            alt="cuisine"
          />
        </div>
        <div className="display-host-planning">
          <div className="display-text-info">
            <h2>Plan Your Night</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus
              lacus, vitae sodales turpis. Maecenas finibus, urna id auctor
              ultrices, ante neque mattis erat, a dapibus arcu augue a mi.
            </p>
          </div>
          <Link to="/Host">
            <input type="button" value="Suggest meal" />
          </Link>
        </div>
      </div>
      <hr className="dislay-hr-top" />
      <div className="team-area">
        <div className="img-area">
          <div className="liena">
            <img src="./image/images9.jpeg" />
            <span className="text-t">
              <h2> Host </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus
                lacus, vitae sodales turpis. Maecenas finibus, urna id auctor
                ultrices, ante neque mattis erat, a dapibus arcu augue a mi.
              </p>
            </span>
          </div>
        </div>

        <div className="img-area">
          <div className="liena bisS">
            <img src="./image/host.jpg" />
            <span className="text-t">
              <h2> Guest</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                rhoncus turpis eu molestie lacinia. Pellentesque eget rhoncus
                lacus, vitae sodales turpis. Maecenas finibus, urna id auctor
                ultrices, ante neque mattis erat, a dapibus arcu augue a mi.
              </p>
            </span>
          </div>
        </div>
      </div>
      <hr className="dislay-hr-bottom" />
    </section>
  );
}
export default Displayanimation;
