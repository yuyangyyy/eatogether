import React from "react";
import "./Nav.css";
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
    const menu = ["Accueil", "Contact", "Portfolio", "Logger"];
    return (
      <nav ref={this.nav}>
        <ul>
          <h1>EaTogether</h1>
          {menu.map((x, index) => (
            <li key={index}>{x}</li>
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
