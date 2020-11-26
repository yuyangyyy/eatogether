import React from "react";

import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import Signin from "./Signin";

import "./Nav.scss";

class Navigation extends React.Component {
  state = {
    signInIsDisplayed: false,
    navHeight: 0,
  };

  nav = React.createRef();

  signCard = () => {
    this.setState({
      navHeight: this.nav.current.clientHeight,
    });

    this.setState({ signInIsDisplayed: !this.state.signInIsDisplayed });
  };

  closeSign = (value) => {
    this.setState({ signInIsDisplayed: value });
  };

  componentDidMount() {
    this.props.getNavHeight(this.nav.current.clientHeight);
  }

  render() {
    const menu = ["Home", "Guest", "Host", "About us"];

    return (
      <nav ref={this.nav}>
        <img src="./image/LOGO3.png" label="logo" />
        <h1 id="Logo">EaTogether</h1>
        <ul>
          {menu.map((x, index) => (
            <li key={index} className="scaled">
              <Link to={x !== "Home" ? x : "/"}>{x}</Link>
            </li>
          ))}

          <input
            className="signInButton"
            type="button"
            value="sign in"
            onClick={this.signCard}
          />
        </ul>
        <CSSTransition
          in={this.state.signInIsDisplayed}
          timeout={200}
          classNames="my-node"
          unmountOnExit
        >
          <Signin
            getName={this.props.getName}
            closeSign={this.closeSign}
            navHeight={this.state.navHeight}
          />
        </CSSTransition>
      </nav>
    );
  }
}

export default Navigation;
