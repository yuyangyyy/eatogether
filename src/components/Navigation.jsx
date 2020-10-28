import React from "react";
import "./Nav.css";
import Signin from "./Signin";

class Navigation extends React.Component {
  state = {
    signInIsDisplayed: false,
    navHeight: 0,
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
          {menu.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
          <input type="button" value="sign in" onClick={this.signCard} />
        </ul>
        {this.state.signInIsDisplayed && (
          <Signin getName={this.props.getName} closeSign={this.closeSign} />
        )}
      </nav>
    );
  }
}

export default Navigation;


