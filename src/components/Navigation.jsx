import React from "react";
import "./Nav.css";
import Signin from "./Signin";

class Navigation extends React.Component {
  state = {
    signInIsDisplayed: false,
  };

  signCard = () => {
    this.setState({ signInIsDisplayed: !this.state.signInIsDisplayed });
  };

  closeSign = (value) => {
    this.setState({ signInIsDisplayed: value });
  };

  render() {
    const menu = ["Accueil", "Contact", "Portfolio", "Logger"];
    return (
      <nav>
        <ul>
          <h1>EaTogether</h1>
          {menu.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
          <input className="signInButton" type="button" value="sign in" onClick={this.signCard} />
        </ul>
        {this.state.signInIsDisplayed && (
          <Signin getName={this.props.getName} closeSign={this.closeSign} />
        )}
      </nav>
    );
  }
}

export default Navigation;
