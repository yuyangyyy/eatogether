import React from "react";

import MediaQuery from "react-responsive";

import "./Random-user.css";

class RandomUser extends React.Component {
  state = {
    users: [],
  };

  getUser = () => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())

      .then((data) => {
        this.setState({
          users: data.results,
        });
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="random-users-h2">
        <h2> Suggested Guests</h2>
        <div className="random-users">
          {this.state.users.map((para, index) => {
            return (
              <div className="random-users2" key={index}>
                <img src={para.picture.large} alt={para.picture} />
                <div className="random-user-info">
                  <h4>Name </h4>
                  <p>{para.name.first}</p>
                  <h4>City </h4>
                  <p>{this.props.dateCity[0]}</p>
                  <MediaQuery maxWidth={640}>
                    <input type="button" value="Message" />
                  </MediaQuery>
                  <MediaQuery minWidth={640}>
                    <input
                      type="button"
                      value={`Message to ${para.name.first}`}
                    />
                  </MediaQuery>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RandomUser;
