import React from "react";
import "./Signin.css";

class Signin extends React.Component {
  state = {
    inputs: [
      {
        placeholder: "firstName",
        value: "",
      },
      {
        placeholder: "lastName",
        value: "",
      },
    ],
    errorMessage: true,
    sendAuthorisation: false,
  };

  inputHandler = (e) => {
    const regInputs = /^[a-zA-Z\s]*$/;
    const inputsTemp = [...this.state.inputs];
    inputsTemp[e.target.id].value = e.target.value;
    const test = inputsTemp.every((name) => {
      return name.value.length > 2 && regInputs.test(name.value);
    });
    if (test) {
      this.setState({ errorMessage: false, sendAuthorisation: true });
    } else {
      this.setState({ errorMessage: true, sendAuthorisation: false });
    }
    this.setState({ inputs: inputsTemp });
  };

  sendName = () => {
    const infoSend = [];
    this.state.inputs.map((input) => infoSend.push(input.value));
    const signInfo = {
      firstName: infoSend[0],
      lastName: infoSend[1],
    };
    if (this.state.sendAuthorisation) {
      this.props.getName(signInfo);
      this.props.closeSign(false);
    }
  };

  render() {
    return (
      <div className="wrapper-signin">
        {this.state.inputs.map((input, index) => {
          return (
            <input
              type="text"
              id={index}
              placeholder={input.placeholder}
              onChange={this.inputHandler}
              key={index}
            />
          );
        })}
        <input
          className={this.state.errorMessage && "disabled"}
          type="button"
          value="send"
          onClick={this.sendName}
        />
      </div>
    );
  }
}

export default Signin;
