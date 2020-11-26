import React from "react";

import "./Signin.scss";

class Signin extends React.Component {
  state = {
    inputs: [
      {
        placeholder: "First Name",
        value: "",
      },
      {
        placeholder: "Last Name",
        value: "",
      },
      {
        placeholder: "Email",
        value: "",
      },
      {
        placeholder: "Attatch Photo",
        value: "",
      },
    ],
    errorMessage: true,
    sendAuthorisation: false,
  };

  sign = React.createRef();

  inputHandler = (e) => {
    const inputsTemp = [...this.state.inputs];
    inputsTemp[e.target.id].value = e.target.value;
    const test = inputsTemp.every((name) => {
      return name.value.length > 2;
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
      email: infoSend[2],
      photo: infoSend[3],
    };
    if (this.state.sendAuthorisation) {
      this.props.getName(signInfo);
      this.props.closeSign(false);
    }
  };

  componentDidMount() {
    this.sign.current.style.setProperty(
      "--hauteur",
      this.props.navHeight + 10 + "px"
    );
  }

  render() {
    return (
      <div className="sign-all" ref={this.sign}>
        <div className="sign-in-container" >
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
          </div>
          <input
            className={this.state.errorMessage? "disabled" : null}
            id="submitInfo"
            type="button"
            value="send"
            onClick={this.sendName}
          />
        </div>
      </div>
    );
  }
}

export default Signin;
