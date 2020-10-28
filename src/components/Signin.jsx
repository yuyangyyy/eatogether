import React from "react";
import "./Signin.css";

class Signin extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  inputHandler = (e) => {
    if (e.target.placeholder === "firstName") {
      this.setState({ firstName: e.target.value });
    } else if (e.target.placeholder === "lastName") {
      this.setState({ lastName: e.target.value });
    }
  };

  sendName = () => {
    this.props.getName(this.state);
    this.props.closeSign(false);
  };

  render() {
    return (
      <div className="wrapper-signin">
        <input
          type="text"
          placeholder="firstName"
          value={this.state.firstName}
          onChange={this.inputHandler}
        ></input>
        <input
          type="text"
          placeholder="lastName"
          value={this.state.lastName}
          onChange={this.inputHandler}
        ></input>
        <input type="button" value="send" onClick={this.sendName} />
      </div>
    );
  }
}

export default Signin;
