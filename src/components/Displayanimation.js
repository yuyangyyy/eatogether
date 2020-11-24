import React from 'react';

import './Displayanimation.css';

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
              ultrices, ante neque mattis erat, a dapibus arcu augue a mi. Nulla
              viverra leo mi, vitae laoreet purus pellentesque nec. Aenean
              malesuad. Lorem ipsum dolor sit amet, consectetur adipiscinge.
            </p>
          </div>
          <input type="button" value="Suggest meal" />
        </div>
      </div>
      <hr className="dislay-hr-top" />
      <div className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-area">
                <a href="" className="liena">
                  <img src="./image/images9.jpeg" />
                  <span className="text-t">
                    <h2> Host </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut rhoncus turpis eu molestie lacinia. Pellentesque eget
                      rhoncus lacus, vitae sodales turpis. Maecenas finibus,
                      urna id auctor ultrices, ante neque mattis erat, a dapibus
                      arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus
                      pellentesque nec. Aenean malesuad. Lorem ipsum dolor sit
                      amet, consectetur adipiscinge.
                    </p>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-area">
                <a href="" className="liena">
                  <img src="./image/host.jpg" />
                  <span className="text-t">
                    <h2> Guest</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut rhoncus turpis eu molestie lacinia. Pellentesque eget
                      rhoncus lacus, vitae sodales turpis. Maecenas finibus,
                      urna id auctor ultrices, ante neque mattis erat, a dapibus
                      arcu augue a mi. Nulla viverra leo mi, vitae laoreet purus
                      pellentesque nec. Aenean malesuad. Lorem ipsum dolor sit
                      amet, consectetur adipiscinge.
                    </p>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Displayanimation;
