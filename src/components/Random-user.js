import React from "react";

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
                <h4>Name : {para.name.first}</h4>
                <h5>City : {para.location.city}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RandomUser;
