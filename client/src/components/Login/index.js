import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import "./style.css";

class Login extends Component {
  state = {
    patient: {},
    email: "",
    password: "",
    loginStatus: false,
    loginStatusStr: ""
  };

  loadPatientByEmail = () => {
    API.getPatientByEmail(this.state.email)
      .then(res => {
        console.log(res.data);
        this.setState({ patient: res.data });
        console.log("now", this.state.patient);
        this.verifyPassword();
      })
      .catch(err => console.log(err));
  };

  verifyPassword = () => {
    console.log(this.state.patient.password,  this.state.password);
    (!this.state.patient) ?
      this.setState({ loginStatusStr: "Sorry invalid user/password" })
      : (this.state.patient.password !== this.state.password) ?
        this.setState({ loginStatusStr: "Sorry invalid user/password" })
        :
        this.setState({ loginStatus: true });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadPatientByEmail();
  };

  render() {
    return (
      <div
        className="signIn"
      >
        <h2 id="header">SIGN IN</h2>
        <span className="signUpLink">
          New to APIC? <a href="/register">Sign Up</a>
          {/* <i class="material-icons">face</i> */}
        </span>
        <form>
          <div id="email" className="formInput">
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="formInput">
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <span id="header">{this.state.loginStatusStr}</span>
          <FormBtn onClick={this.handleFormSubmit}
          >LOGIN</FormBtn>

        </form>
        {this.state.loginStatus ?
          <Redirect to={{
            pathname: '/home',
            state: { patient: this.state.patient }
          }}
          /> : ""
        }
      </div>

    );
  }
}

export default Login;
