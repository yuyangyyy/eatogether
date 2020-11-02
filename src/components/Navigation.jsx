import React from "react";
import "./Nav.scss";
import Signin from "./Signin";
import { CSSTransition } from "react-transition-group";

class Navigation extends React.Component {
  state = {
    signInIsDisplayed: false,
    navHeight: 0,
  };

  nav = React.createRef();

  signCard = () => {
    this.setState({ signInIsDisplayed: !this.state.signInIsDisplayed });
  };

  closeSign = (value) => {
    this.setState({ signInIsDisplayed: value });
  };

  componentDidMount() {
    this.setState({
      navHeight: this.nav.current.offsetHeight + this.nav.current.offsetTop,
    });
  }

  render() {
    const menu = ["Home", "Guest", "Host", "Messages"];
    return (
      <nav ref={this.nav}>
        <ul>
          <figure>
        <img className="logo" src="./image/logoEat.png" alt="c" /></figure>
          {menu.map((x, index) => (
            <li key={index} className="scaled">{x}</li>
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
